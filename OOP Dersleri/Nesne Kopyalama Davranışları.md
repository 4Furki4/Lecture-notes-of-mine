# Nesne Kopyalama Davranışları



## Shallow Copy

* Kopya Referans, kopyalanan referansın işaret ettiği nesneye referans olur. Yani tekrardan yeni bir nesne oluşturulmaz, bir nesnenin birden fazla işaretleyicisi olur.
* ![image-20220405175622674](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220405175622674.png) ![image-20220405175634385](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220405175634385.png)

* Bir referans sadece bir nesneyi işaretleyebilir.



#### Dipnot

* _Referans türü_ değişkenlerde kopyalama davranışlarının varsayılan hali __shallow copy'dir__
* _Değer türü_ değişkenlerdeyse kopyalama davranışının varsayılan hali __deep copy'dir__
*  Deep Copy'de kopyalanan değişkenin verisi bellekte iki defa oluşurken shallow copy'de veri-nesne- tekrardan oluşmaz, referanscısı çoğalır.
* _Değer türü__ değişkenlerde shallow copy yapmak için iki değişken için de ref anahtar kelimesi kullanılmalıdır.![image-20220405183113839](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220405183113839.png) buradaki gibi a ve b 4-4 iken 8-8 olur. 

 ## Deep Copy

* Var olan nesneden aynı üyeleri bir örnek içeren yeni bir nesne oluşturulur.
* Lakin önemli olan nokta şudur: Derin kopyalama yapıldıktan sonra iki nesne üzerinde yapılan işlemler birbirini etkilemez.
* Kalıtım konusunda tekrardan buraya dönülecek ancak şimdilik Deep Copy kısaca şu şekilde yapılıyor:
  * Sınıf içerisinde MyClass Clone() adlı bir metodun içinde this.MemberwiseCopy() metodu çalıştırılmalı.
  * Aşağıdaki kod satırlara buna örnektir:
  * ![image-20220405182018693](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220405182018693.png) ![image-20220405182032860](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220405182032860.png)





