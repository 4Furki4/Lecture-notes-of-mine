# Sanal  Yapılar



* Sanal yapılar bir sınıfta bildirilen ve mezkur sınıftan türeyen alt sınıflarda tekrardan bildirilebilen yapılardır
* Sanal yapılar metot da prop da olabilir.
* Aslında Name hiding'e benzeyen bir yapısı vardır ama name hidingde üst sınıftaki ismi saklanan üyeyi __isim çakışmasından ötürü__ tekrardan kullanamaz hale getiriyoruz.
* Sanal yapılanmada sanallaştırılan yapı, alt sınıfların herhangi birinde tekrardan derlenebilir, düzenlenebilir, ekleme-çıkarma yapılabilir ve üstteki üye etkisizleşir.
* Derleme aşaması sanal yapılanmanın base sınıfından veya derived herhangi bir sınıftan oluşturulacağını karar veremez, bu karar __run-timeda__ gerçekleştirilir.
* __TEŞRİH :__ A sınıfında bir tane sanal yapımız var diyelim. Bu sanal yapılanma _değiştirilmeden/yeniden yazılmadan_ B sınıfında kullanılıyorsa __run-timeda__ bu sanal yapılanmaya A sınıfının nesnesinden erişileceği belirlenir. Bilakis B sınıfında bu sanal yapılanma _değiştiriliyorsa/yeniden yazılıyorsa_ __run-timeda__ bu sanal yapılanmaya B nesnesi üzerinden erişilir.
* Run-timeda belirlenmesi olayına __Late-Binding__ denir.



--------------------------



## Sanal  Yapılar Değiştirilmek Zorunda Mıdır ?



* Hayır, eğer ki memberın özellikleri işimizi görüyorsa ve değiştirmeye hacet yoksa _bildirildiği sınıfın nesnesi aracılığıyla olduğu gibi kullanılır._

* Ayrıca bir member ezilerek/değiştirilerek/yeniden yazılarak kullanılmak isteniyorsa sanal olması gerekir.



------------------------



## Virtual Anahtar Kelimesi



* Sanal yapılmak istenen sınıf üyesinin imzası ___public virtual___ yahut ___virtual public___ olarak yazılmalıdır.
*  Prop tanımlanması da bu minvaldedir.                  ![image-20220408195404600](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220408195404600.png)

----------------------------



## Override Anahtar Kelimesi



* Sanal bir sınıf üyesini kalıtım alan sınıfta yeniden yazmak/ezmek istiyorsa üyenin imzasına eklememiz icap eden anahtar kelimedir. 
* Kullanımı şu şekildedir:![image-20220408195839341](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220408195839341.png)



* Bir sanal yapı bir kere override edildikten sonra da hala virtual kalacağından daha sonra yine override edilebilir. Hülasa, birden fazla override kabildir.
* Önemli nokta şu: En son override edilen o üye için mevcut yapı halini alır.





## Örnek 1 Notları



* Bir sanal üye, denk hiyerarşik farklı sınıflarda ayrı ayrı override edilebilirler.



## __ÖNEMLİ NOT: STATIC YAPILANMALAR SANAL OLARAK BİLDİRİLEMEZLER!__



