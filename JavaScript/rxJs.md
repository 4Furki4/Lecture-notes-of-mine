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