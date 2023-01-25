# Kalıtım(Inheritence)

* Üretilen nesneler özelliklerini diğer nesnelere aktarabilir ve böylece hiyerarşik düzen oluşabilmektedir.
* Bu özellik, aynı kökenden gelen ve yatayda eşit olan nesnelerin özelliklerini tekrar tekrar tanımlamaktansa üst sınıftan bu özelliklerin kalıtılmasını sağlar.
* Faydasıysa kod maliyetini düşürmesi hem de mimarisel tasarım açısından avantaj sağlamasıdır.
* Bir görsel örnek:                                 ![image-20220407230540880](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220407230540880.png)
* Sınıflarda yani nesnelerde ortak olan özellikleri bir başka -kalıtan- sınıfta tanımladık ve bu sınıftan diğer sınıfların kalıtçı olmasını sağladık. Bu kalıtan sınıftan kalıtım aldığımızda erişim belirleyicileri müsait ettiği kadarıyla tüm memberlarına erişiriz.
* Farklı özelliklerse zaten nesneleri modellediğmiz sınıfın kendisinde tanımlanmalıdır.



## C#'ta hangi yapılar kalıtım alabilirler ?

* Kalıtım sadece sınıftan sınıfa yapılabilen bir fiildir.
  * DİPNOT: Sınıflara çok benzeyen recordlar da kendi aralarında kalıtım yapabilirler ama sınıf-record arası kalıtım olmaz.
    * DİPNOT2: Recordların kalıtım alabildiği tek sınıf __object__ sınıfıdır.
* Diğerlerinde uygulama farklı bir yapıyla gerçekleştirilir.



## C#'ta kalıtım nasıl yapılıyor ?

* ​               __:__              operatörüyle yapılır.
  * Kalıtım alan               __:__              Kalıtım veren
  * Interface vb. kullanırken de aynı operatörü kullanırız.

* Örnek:
  * Kedi __:__ Hayvan
  * Kedi, _Hayvan sınıfından kalıtım aldı_
* Muhasebeci sınıfının Personel adlı sınıftan kalıtımla aldığı isim propuna görüldüğü gibi ulaşabiliyoruz. ![image-20220407235805183](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220407235805183.png)





## Base Class ve Derived Class



* Kalıtım veren sınıf __Base(Parent)__, kalıtım alan sınıf __Derived(Child) __class olarak çağrılır.
* Bir sınıfın __sadece bir tane__ Base Classı olabilir. Aslında Base Class, __doğrudan__ kalıtım veren sınıftır.
* Buradaki kalıtım yapılanmasında A, C'nin __base classı değildir__![image-20220408002322333](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220408002322333.png)
* Bir base classın birden fazla derived classı tabii ki olabilir.
* Bir sınıf hem base hem de drive class tabii ki olabilir. 
* Bir sınıfın bir tane Base Classı olacağından bu kullanımda hata alırız: A : B, C
  * Lakin C örneğin eğer bir interface ise bu kalıtım işlemi yapılabilir. Yani bir sınıf birden fazla kalıtım işlemi yapabiliyorsa orada sınıftan farklı yapılanmalar kullanılıyordur.   





## Nesne Üretim Sırası



* Bir sınıftan nesne üretilirken mevcut sınıfın base classı varsa önce base classtan nesne üretilir ve sonra nesnesini üretmek istediğimiz classın nesnesi üretilir. 
  * Çok mühim olmasa da teferruatı severim: Bunun sebebiyse kalıtımla gelecek üyelerin erişiminin, aslında tanımlandığı sınıftan erişilmesi.
  * DİPNOT: Static inşa edici metotlarda nesne tam tersi sırada oluşturuluyor. Henüz sebebini bilmiyorum. 



## Base keywordu



* Adından da anlaşılacağı üzere Base Class'a erişebilmeyi sağlayan anahtar kelimedir.
* Sözgelimi bu anahtar kelimesiyle base sınıfın inşa edici metodunu çağırabiliriz, ne de olsa ilk base sınıftan nesne üretilecek :blush:
* İnşa edici metotlarda bir diğer inşa edici metodu çağırmak için __:this()__ yapısını kullanıyorduk ve aynı sınıf içerisinde inşacılar arasında geçiş yapabiliyorduk.
  * _this_ yerine __base()__ yazarsak kalıtım aldığımız sınıfın inşacısını çağıracaktır. Yalnız varsayılan inşacı metot için bunu yazmaya gerek yoktur, zaten çalıştıracaktır ama parametreli bir inşacı için __:base(parametre)__ yazmak gerekecektir.
* base anahtar kelimesi this anahtar kelimesinin neredeyse bir örneğidir. Aralarındaki tek fark this'in yatay, base'in dikey çalışmasıdır.
* dikey derken base anahtar kelimesinin yukarıdan(kalıtandan) gelen özelliklere erişmemizi sağlar. Oysaki this, içinde bulunduğumuz sınıfın nesnesine erişmemizi sağlar.



## Nesnelerin Ademi(!) Object sınıfı

- C# dilinde tüm sınıflar varsayılan biçimde __Object__ sınıfından kalıtım alırlar.
- Eğer bir sınıf başka bir sınıftan kalıtım alırsa Object sınıfından doğrudan kalıtım alamaz hale gelir. Binaenaleyh mevcut kalıtımı sağlayan yapı Object sınıfından varsayılan biçimde kalıtım alacağından yine de Object sınıfının metotlarına ulaşabiliriz.



## Name Hiding Sorunsalı 

* Ata sınıflarla kalıtım alan sınıflarda aynı isimde member olması sorunudur ve aynı isimdeki memberı çağırdığımızda ata sınıftan gelen member __saklanır__.
* Bu şekilde kullanım yaptığımızda herhangi bir hata almayız lakin üyenin saklandığına dair uyarı alırız. 
  * Önceden son oluşturduğumuz member'ı new anahtar kelimesiyle taammüden işaretlememiz gerekiyordu ama artık gerekmiyor
