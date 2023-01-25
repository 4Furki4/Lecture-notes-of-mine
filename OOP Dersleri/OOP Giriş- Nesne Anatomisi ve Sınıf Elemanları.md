# OOP Giriş- Nesne Anatomisi ve Sınıf Elemanları



## Nesne Anatomisi

* Nesneler, classlardır. Interfaceler veya abstractlar nesne değildir, sadece sınıflardır.
* Nesneler referans türü değişkenlerdir. Heap'te tutulurlar. Nesneler-referans tipi değişkenler- heap'te, değerler-fieldlar da değerlerdir-, stack'te tutulur.
* Heap'teki nesnelere geliştiricinin _doğrudan_ erişimi yoktur ancak stack'teki verilere erişimi vardır. Stack'te, heap'te bulunan nesnelerin referansları bulunduğu için stack'ten referanslara erişiriz ve stack, heap'e doğrudan erişebildiği için bize heap'teki nesnelere erişim hakkını zımnen sağlar.



## Class Elemanları



### Field(Alanlar)

* Nesne içerisinde herhangi bir tipte değer tutmanı sağlayan _alanlardır_. 
* Fieldların varsayılan değerleri, değişkenin tipine göre değişir ancak __metotların içerisinde varsayılan değerler atanmaz__.
* Fieldlara doğrudan erişim hoş karşılanmaz.
* Field sembolü: ![image-20220404163508898](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220404163508898.png)





### Property

* Esasında bir çeşit metottur lakin parametre almaz ve içinde GET ve SET olmak üzere iki blok bulunur. Bu bloklar sayesinde algoritmik kodlar oluşturabiliriz.
* Değer okunmak/alınmak istendiğinde GET, değer verilmek istendiğinde SET bloku kullanılır.
* Fieldları kontrollü bir şekilde dışarı açmak için propertyler aracı olur.
* Field isimlerinin küçük harfle başlaması ve onun propertysinin büyük harfle başlaması, yazılı olmayan kurallardan birisidir.
* Property sembolü: ![image-20220404163331656](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220404163331656.png)

##### 			Property İmzaları 

* Tam(Full) Property: En sade property yapılanmasıdır, içerisinde set ve get blokları olmalıdır.

* Prop property: Herhangi bir şart eklenmeden veri doğrudan veren veya veriyi doğrudan kuran, yerleştiren property yapılanmasıdır. Peki, fielda neden doğrudan erişmek yerine property kuruyoruz sorusuna yanıt; fieldlara doğrudan erişimin, programlama davranışına, ahlakına uygun olmamasıdır. Prop tipi propertyde field tanımlanmasına gerek yoktur, arka planda otomatik field tanımlanması yapılır.

  * Ayrıca prop imzasından readonly olur fakat writeonly olmaz.

   

* __Auto Property Initiliazer__: Prop imzalı bir property'ye ilk değeri atayabildiğin imza şeklidir. __=value;__ şeklinde değerini atayabilirsin. _Readonly_ propertylerin için ilk değeri atamakta çok faydalıdır.
* __Expression Bodied property__: Lambda ifadelerini kullanıp ifade döndürdüğümüz propertydir, tek satırda __readonly__ property oluşturmamızı sağlar. Sadece readonly'lerde kullanılır.
  * public string Isim=> "Furkan"; gibidir söz dizimi, set olmadığı için readonly yapıdadır ve Lambda (=>) ifadesiyle oluşturulmuştur ve aslında Auto Propery initiliazerin akrabası gibidir, sadece Lambda kullanıldı.

### Encapsulation 

* Propertylerin fieldları kontollü bir şekilde kullanmasını sağlayan yapıdır. Bu kontrol, field'daki veriyi değiştirerek propertyler aracılığıyla farklı şekilde set veya get edilmesini sağlamasına denir.

------------

###### Dip Notlar 

* A Class'ı içerisinde tanımlanan class, A sınıfının bir üyesi değildir. Bu nested class kavramına girer. Bu içeride tanımlanan sınıfa ilkSınıfIsmi.IkinciSınıfİsmi adıyla erişebiliriz. 
* This: Mevcut nesneyi kullanmamızı sağlayan bir anahtar kelimedir. Ayrıca metot parametresiyle field arasında ayrım yapmak için de kullanılır ve this ile erişilen değişken fielda erişir. İkinci durum gerçekleşmediği sürece nesneye, fielda vb. this anahtar kelimesini kullanarak erişmek _zorunda değilsin_.
* 
