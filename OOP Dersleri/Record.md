# Record



### Init-Only Properties

* Eskiden readonly yapılan bir property'nin ilk değerini vermek için Auto Property Initiliazer imzası kullanılmalıydı.
* Init only ile Object Initiliaser yöntemiyle nesne ilk oluşturulurken __readonly__ bir propa değerini verebileceğiniz.
  * Init-only prop yapmak için set yerine sadece init yazmalıyız. Get bloku yazılmadan init bloku yazılamaz  



## Record Nedir 

* Eğer nesnenin elemanlarını bütünsel bir biçimde değişmez-readonly- tutmak istiyorsak burada __Record__ kavramı devreye giriyor.
* Record'ların verileri sabit olduğu için değerleri ön plana çıkar.
* Nesne ön plandaysa _Class_, değerler ön plandaysa _Record_'dır.
* __Lakin dikkat et, _Record'lar_ da özünde sınıftır ancak _hafif_ sınıftır, _saf_ sınıf değildir! Ayrıca hem sınıflar hem de recordlar referans türlüdür!__ 
* Recordlar Class memberlarını bir örnek alabilirler.
* Aynı değerlere sahip __sınıftan oluşturulmuş__ iki nesneyi karşılaştırdığında aynı olmadıklarını görürsün çünkü değerleri değil, nesne olmaları ön plana çıkar.
* 2 tane __Record__ nesnesini karşılaştırdığında değerleri ön plana çıktığından ve değerleri de aynı olduğundan birbirlerine eşittir. 
* Record'ın avantajı, normal bir sınıfta sadece readonly elemanlardan oluşan bir nesne oluşturduğumuzda ve herhangi bir elemanın değerini daha sonra değiştirmemiz icap ettiğinde tekrardan yeni bir nesne oluşturup gerekli değişiklikleri yapacak şekilde o nesneye değerleri atamaktan ziyade veya sınıf içerisine With adlı köhne metodu eklemekten ziyade sytax olarak with anahtar kelimesiyle bu işlem yapılabiliyor.
*  Buradaki örnekteki gibi with{değiştirmek istediğimiz prop} şeklide değerlerimizi değiştirebiliyoruz.![image-20220405202049719](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220405202049719.png)