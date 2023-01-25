# Route Yapılanması

* UseRouting ile ayrıştırma işlemi yaparken UseEndpoints ise route tanımlamalarını tutarız.





### MapDefaultControllerRoute

* Mimarinin sağladığı varsayılan rota yapılanması.

* örüntüsü: {controller=Home}/{action=Index}-{id?} 





### Custom Route



* MapController metoduyla yapılır.

* ilk parametreye eşsiz bir route ismi,
* ikinci parametreye "{action=Index}..." şeklinde pattern alır.
* controllera veya actiona varsayılan bir değer atamazsan url kısmında boş gelirse mimari hata verecektir çünkü nereye gideceğini bilemez veya neyi çalıştıracağını bilemez.





* `app.MapControllerRoute("ANASAYFA", "anasayfa", new { controller = "Home", action = "Index" });`
* Yukarıda anasayfa statik değerini url'de yazdığımızda aslında kabuklama yaparak home-index'e gitmiş oluyoruz :)

--------------



* route tanımlamaları yaparken özel tanımlamalardan daha genel tanımlamara doğru değişen bir düzen olmalı. Sebebi: İlk önce özel rotalara bakılsın, onlar olmuyorsa genel rotalar çalışsın.
* tag helper vb. ile link oluşturduğunda tanımladığın rotasyona karşılık bir custom rota varsa o, oluşturduğun linkin url'i olur.

----------------

* Route ile parametre tanımı yaparken nullable olmazsa parametreler değer almak zorunda.

  



## Route Constraints 

* Parametrelere tür ataması yapmak için isminin yanına __:int__ vb. yazılmalı. 
* Yanlış türde bir parametre girilirse 404 hatası alınabilir çünkü tanımladığımız rota çalışmaz.
* :lenght() ile alınacak verinin olması gereken uzunluğunu ayarlayabiliriz
* min,max, range gibi fonksiyonlar da var 

#### Custom Constraint

* IRouteConstraint interface'ini uyguladığımız bir sınıf gerekli ve gelen Math fonksiyonuyla bunu gerçekleştirebiliriz.
* constraint ismini :isim şeklinde router parametresine vermeliyiz.





## Attribute bazlı rota

* buradaki fark, parantez farkıdır.
* ön tanımlı parametlerler ([controller]/[action] vb) köşeli parantez ile yazılır.
* Yani controller, altındaki controller ismiyle eşleşecek, action ise gideceği action ile.
* Attribute route'unun eşlenebilmesi için MapControllerRoute içerisinde MapController çağırılmalıdır. 





## CustomeRouteHandler



* Controller'ı yormamak için işlemler gerçekleştirebileceğimiz handler'lar tasarlamak için kullanırız. Kullandığımız rotayla handler'a yönlendiririz ve örneğin image formatlaması gibi küçük işlemlerde controller'ı yormamış oluruz.
* Ancak ve ancak bir operasyon spesifikse kullanılmalıdır. 
* Endpoints içinde .Map fonksiyonuyla parametrede vereceğimiz metodu çalıştırabileceğiz.
* ("rota", RequestDelegate)
* yeni bir sınıf açıp içine RequestDelegate dönen, yani fonksiyon dönen bir metot oluşturuyoruz.
  * return aysnc c => c{}
  * async Task olmasını sağlıyor.

