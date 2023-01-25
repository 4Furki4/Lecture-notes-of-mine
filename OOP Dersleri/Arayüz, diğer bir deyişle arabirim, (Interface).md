# Arayüz, diğer bir deyişle arabirim (Interface)



* Abstract classtan farkı __sadece üye imzalarına sahip olmasıyla bir "arayüz" olmasıdır.__

* __Nesne oluşturamaz__ lakin referans noktası oluşturabilir.

* Sytax: Interface Iname

  * İsimlendirmedeki kültürden dolayı başına I koyulur.

* Interface ve Abstract classlar çoğunlukla toplu çalışmalarda kullanılır ve design patternlarda çok kullanılırlar. 

* Dependency Injection yaparken de kullanılıyormuş.

* Bir sınıfa birden fazla interface uygulayabiliriz, araya virgül koymamız yeterlidir.

* __İmzalarda erişim belirleyicileri olmaz!__

* Arayüzün içine yazılan üyeler, arayüz uygulanan sınıfta gövdeleriyle yazılmak zorundadır. 

  

  ## Implement Explicitly 

  * Açıkça uygula seçeneğini seçince Interface.Member olarak uygular.
  * Göreviyse aynı isimde member varsa _name hiding_ yapmayı önler, name hiding olursa interface zaten hata verir.
  * __Lakin buradaki sıkıntıysa açıkça uygulamalarda erişim belirleyicisi private oluyor__, _normal interface uygulanmasında publictir_.
  * Bunu çözmek içinse referansını mezkur interface ile işaretlememiz lazım, interfacete erişim belirleyicisi olmadığı için bu şekilde üyelere erişebiliriz. (Polymorphism :)  
  * Eğer hem sınıftan hem de interface'ten kalıtım alıyorsak -aralarında virgül olacak şekilde- öncelikle sınıfı, sonra interfaceleri yazmalıyız çünkü interface'ten sonra gelenleri derleyici interface olarak algılar.

  