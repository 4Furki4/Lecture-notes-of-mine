# Çok Biçimcilik (Polymorphism)



* Bir nesnenin birden farklı türdeki referans tarafından işaretlenmesine denir.
* Çok biçimcilik bir nesnenin kalıtımsal olarak ilişkisi olan diğer nesnelerin referanslarıyla işaretlenebilmesini sağlar.
  * Bir nesne oluştururken _Sınıf_ isim = new Sınıf(); yapardık, yani oluşturduğumuz nesneyi kendi türünden referansla işaretlerdik.
  * Çok biçimcilik bize burada Sınıf türünden referans haricinde farklı referanslarla işaretlemeyi sağlıyor.
  * ÖNEMLİ: Lakin çok biçimcilik olması için nesnelerin ortak kalıtımsal ilişkisi olmalı lazım. 
    * Örneğin kuş sınıfından muhabbet kuşu, hem muhabbet kuşu türü referansla hem de kuş türü referansla işaretlenebilir ama primat türü referansla işaretlenemez
    * Ayrıca kalıtım hiyerarşisinde üstte olan sınıf, alttaki sınıfın referansı olabilir.

## Peki, Bir Nesnenin Çok Biçimli Olması Neye Yarar ?

* __Çok biçimcilik sağlanmış bir nesne, birden fazla türde nesne gibi davranır hale gelir.__
* Diyelim ki A-B-C diye üç sınıfımız var ve sırasıyla X-Y-Z diye metotlara sahipler ve sırayla kalıtım ilişkisi de var (B:A ve C:B)
* Burada C nesnesini A  ve B referansıyla işaretleyebiliriz ve çok biçimcilik sağlayabiliriz. ___Bu sayede bir nesne diğer bir nesne gibi davranır ve kendi hangi referansla işaretlendiyse o nesne gibi davranır, sadece referansın üyelerine erişebilir.___



## Polymorphism Türleri



### Static Polymorphism

* Hülasa __metot aşırı yüklemesine__ _Static Polymorphism_ denir.
* _Static Polymorphismde_ hangi metodun kullanılacağı derleme zamanında bilinir. 



### Dinamik Polymorphism

* Bu da özetle __metot overridingtir__
* Araç nesnesinde Calistir metodumuz var ve bunu Taksi sınıfında değiştirirsek ve calistir metodunu çağırmak için Arac referansını kullanarak Taksiden nesne oluşturursak çalışma zamanında Taksi sınıfında ezilmiş durumda bulunan Calistir metodu çağırılacaktır ve bu şekilde __Dinamik__ Polymorphism sağlanacak 



## Polymorphism'de Tür Dönüşümleri

* Ez cümle, bir nesnenin işaretlenirken kullanılan referansı değiştirmektir.
  * Örnek: A-B-C sınıfları ve (B:A, C:B) kalıtım ilişkisi olsun.
  * A türünden referansla işaretlenmiş bir C nesnesi olsun.
  * Bu C nesnesi, B ve C türünden referanslarla da işaretlenebilirdi.
  * Bunu yapmak için söz gelimi __C isim= (C)öncedenİşaretlenmişNesne;__  kod blokunu kullanabiliriz.
    * DİPNOT: (C)= Cast operatörüdür. Bunun yerine __as__ operatörü de geçerlidir. __öncedenİşaretlenmişNesne__ as C yapılır.
    * DİPNOT2: Cast operatörü, daha üst bir referansla dönüşüm yapılırken kullanılmaz zorunda değildir. Örneğin C referans türüyle işaretlenmiş c adlı bir C sınıfının nesnesi, A referans türüyle zaten işaretlenebilir. Bu yüzden Cast operatörüne hacet yok.
    * DİPNOT3: Önceden öğrendiğim gibi object her sınıfın atasıdır. object türüne atamaya boxing, object türünden daha alt bir türe dönüştürmeye unboxing deniyor. Yukarda da aslında objectten olmasa da boxing ve unboxing yaptım.
  * Kalıtımsal ilişkisi olmayan nesneler arasında tür dönüşümü yapılmaya çalışıldığında derlemede hata alınır.
  * Ayrıca daha üst hiyerarşide olan bir nesneyi alt hiyerarşideki bir türden referansla _cast_ operatörüyle işaretlemeye çalışırsan __run-time__da hata alırsın. __as__ operatörüyle dönüşüm yapmaya çalışırsan __run-time__da hata almaz, __null__ değer alırsın.

## is Operatörü

* Nesnelerin hangi türde olup olmadığını belirlemek için kullanılır.
* Geriye __boolean__ döndürür.
* C nesnesi oluşturulurken A-B-C kalıtım ilişkisinden dolayı önceden öğrendiğim gibi baştan sona doğru nesne oluşturulur ki, ata sınıfların memberlarına ulaşabilelim. Yani a hem A türünde hem B türünde hem de C türündedir ama D ile ilişkisi olmadığı için false dönmüştür veya D daha alt bir hiyerarşide olsaydı yine false dönerdi çünkü D türünden nesne oluşmazdı.![image-20220411184742279](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220411184742279.png)
