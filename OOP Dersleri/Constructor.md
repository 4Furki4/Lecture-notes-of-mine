# Constructor 



* Sınıflar için özel elemanlardan ilkidir.
* Esasında bir metottur. ctor kısayoluyla hızlıca varsayılan bir constructor üretebilirsin. 
* Bir nesne oluşturulurken new anahtar kelimesinin yanında çağırdığımız metot, inşa edici (constructor) metottur.
* Nesne için hafızada yer ayrıldıktan sonra inşa edici metot çalışır.
* İnşa edici metotlar nesneler oluşturulurken onları yapılandırmamızı sağlar. Bu yapılandırmalar, ilk değerleri atamak, yazacağımız kodları çalıştırmak gibi yapılandırmalardır. Yani illa nesnelerin özelliklerini atamak gibi nesneyle ilintili görevleri yapmak zorunda değillerdir.



## Nasıl oluşturulur ?



*  Geri döndürme değeri olmadan
* Erişim belirleyicisi public yapılarak ve
* İsmi, sınıf ismiyle aynı koyularak oluşturulur.



## Özellikleri nelerdir ?



* Biz yazmasak da derleyici (compiler) kendisi varsayılan bir inşa edici metot oluşturulur
  * Eğer biz parametresiz bir inşa edici metot oluşturursak varsayılan inşa ediciyi bertaraf etmiş oluruz.
* Aşırı yüklenebildikleri için birden fazla inşa edici metoda sahip olabiliriz.
* Bir inşa edici metot başka bir inşa edici metodun çalışmasını tetikleyebilir.



## Başka inşa edici metot tetikleme ve this anahtar kelimesi



- This anahtar kelimesinin bir diğer işleviyse inşa edicilerin başka inşa ediciler tarafından çağrılmasını sağlar.
- Bir inşa edici, başka bir inşa ediciyi tetiklediğinde, __mevcut metot değil, gelen metot önce çalışır.__

* 3. inşa metodu çalınca     : ![image-20220406222246871](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220406222246871.png)
* Çıktımız ise bu şekildedir   : ![image-20220406222319035](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220406222319035.png)  
* 

