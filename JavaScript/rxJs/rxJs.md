# RxJS

## Reactive Programlama

- Reactive programlama, verilerin değerlerinin her an değişebileceği ve sonuca yansıtılabileceği bir akıştan geçiş diyebilirim.
- Karşılaştırmak ve daha iyi anlamak adına, geleneksel prosedürel programlamada verilen bir t zamanda işlenir ve işlenen sonuç, sonuca etki eden değerler daha sonradan değişse bile aynı işlem tekrar etmedikçe sonuç değişmez. Ya kodu baştan yazmamız gerekir ya da tekrardan çalıştırmamız gerekir.
- Reactive programlamada verilerin değerleri bir akışta olduğu için, değişen veriler sonuca etki edecektir.

### OOP ve Reactive Programlama

- OOP'de, gerçek hayattaki nesnelerin felsefesi baz alınırken Reactive programlamada, gerçek hayattaki olay felsefesi baz alınır.

### Örnek: X = Y + Z

- Prosedürel programlamada bu işlemi yapan kod satırına geldikten sonra, Y veya Z değişkenlerinin değerleri değişse de bu X değişkeninin sonucunu değiştirmeyecektir. 
- Lakin reactive programlamada, X değişkeni Y + Z işlemine bağlanır ve bu bağlanan verilen bir akış halindedir. Bu akış içerisinde herhangi birinin değerninin değişmesi bir olaydır ve bu olay X değişkeninin sonucunu etkileceyecektir.

## rxJs

- rxJs olay ve veri kaynaklarını, abone olunabilir nesnelere dönüştürüp bu nesneleri, rxJs operatörleri vasıtasıyla dönüşümler, etkiler gerçekleştirip verileri elde etmemizi sağlar.

- Bir olayı ve veriyi, akışa sokmak için abone olunabilir nesne yaparız ve buna observable deriz.
- Bu observable nesnenin değerlerini herhangi bir zamanda görebilmek için bu observable nesneye (subscribe) abone oluruz.

````js

const observable = new Observable(x => {
    x.next(1) // akışa next fonksiyonu ile veri ekliyoruz
    x.next(2)
    x.next(3)
    x.next("niyetini izhar etme yapmış gibi olursuz.")
    x.complete() // akış sonlandırıldı.
}).subscribe(data => console.log(data)) // subscribe olarak bu akışa abone oluyorum ve akış, bana verilerini tek tek veriyor.,
// rxJs operatörlerini kullanarak bu akıştaki verileri değiştirebiliriz de.

````

### Observable

- rxJs'te verileri ve olayları akışa sokma işlemi, Observable denen bir nesne aracılığıyla yapılır.
````ts
const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
    }).subscribe(console.log);
    // subscribe metodu aslında bir observer tipinde bir nesne alır.
````
- Observable nesnesi oluşturarak bu şekilde bir akış oluşturabildik ve bu akıştaki verileri observer alan bir subscribe metoduyla tükettik.

- Burada complete fonksiyonunun kullanılmasıyla akıştaki son verinin belirtilmesi, akışa giren verilerin sayısını belirlememiz için kullanılmalıdır.

### Observer

- Observable içerisindeki verileri/olayları tüketebilmemizi veya izleyebilmemizi sağlayan fonksiyondur.

- Örneğin, next fonksiyonuyla Observerable nesnesi, observer fonksiyonumuza sonraki verisini aktarır.

- Subscribe nesnesiyse akışa abone olmamızı sağlayıp içerisine observer alan bir fonksiyondur. Bu nesneye observer vererek abone olduğumuz akışın verilerini tüketebiliriz.

### Subject

- Birden fazla observer'ın, bir observable'ı tüketebilmek için özelleştirilmiş bir observable yaratmamızı sağlayan nesnedir.

````ts
    const subject = new Subject();
    subject.subscribe(data => console.log(`observer1:  ${data}`))
    subject.next(1)
    subject.next(2)
    subject.next(3)
    subject.subscribe(data => console.log(`observer2:  ${data}`))
    subject.next(4)
    subject.next(5)
    subject.next(6)
    subject.next(7)

````

- Yukarıda bir subject oluşturdur ve aslında bu dediğim gibi özelleştirilmiş bir observable.
- Özelliği ise, birden fazla observer tarafından tüketilebilmesidir.
- Observer'lar, yine subscribe metodu aracılığıyla Subject'imizi tüketmeye başlayabilir ve tüketmeye başladığı andan sonrasında akışa dahil olan nesneleri tüketir.

- Farklı davranışlar sağlayan farklı tiplerde Subject'ler vardır.

#### BehaviorSubject

- Akışa dahil olan observar'a, akışa dahil olduğu andaki değil, bir önceki veriyi vererek akıştaki nesneleri tüketmesini sağlayan bir Subject türüdür.

````ts
    const behaviorSubject = new BehaviorSubject(1); // bir başlangıç değeri vermek zorundayız
    behaviorSubject.subscribe(data => console.log(`observer1:  ${data}`)) // observer 1 değerini alır
    behaviorSubject.next(2)
    behaviorSubject.next(3)
    behaviorSubject.subscribe(data => console.log(`observer2:  ${data}`)) // observer 3 değerini alır

````

#### ReplaySubject

- Buysa, akışa dahil olduğumuz andan önceki istediğimiz kadar veriyi getirmemizi sağlayan bir Subject türüdür.

- Verilen sayıda data yoksa, observer nerede akışa dahil oluyorsa oradan verileri tüketmeye devam eder
````ts
    const replaySubject = new ReplaySubject(2);
    replaySubject.subscribe(data => console.log(`observer1:  ${data}`)) // tüketmeye 2'den başlar
    replaySubject.next(2)
    replaySubject.next(3)
    replaySubject.subscribe(data => console.log(`observer2:  ${data}`)) // bu da tüketmeye 2den başlar çünkü 2 veri öncesine gidip bak dedik.
````

#### AsyncSubject

- Complete fonksiyonunun kullanıldığı bir akışta milyonlarca veri dahi olsa sonuncu veriyi tüketmemizi sağlar

````ts
const asyncSubject = new AsyncSubject();
    asyncSubject.subscribe(data => console.log(`observer1:  ${data}`))
    asyncSubject.next(2)
    asyncSubject.next(3)
    asyncSubject.next(4)
    asyncSubject.next(5)
    asyncSubject.next(6)
    asyncSubject.next(7)
    asyncSubject.next(8)
    asyncSubject.next(9)
    asyncSubject.next(10)
    asyncSubject.complete()
    asyncSubject.subscribe(data => console.log(`observer2:  ${data}`))
  }
  // iki observer da 10 verisini tüketir.
````