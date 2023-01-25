# MVC Proje Altyapısı Oluşturma ve Temel Konfigürasyonları Sağlama



* MVC mimari tasarımını, ASP.NET Core'da bir modul-servis halini aldığı için ConfigureServices metodunda services parametresiyle bunu eklemeliyiz.
  * services.AddControllersWithView() ile eklenir. (Burada sanırım model eklenmedi, veri tabanı işlemlerine yaradığından galiba sonradan oluşturacağız.)
* Configure kısmında UseRouting, UseEndPoints,  gibi middlewareler bulunur.



* Routing: Gelen isteğin hangi controllerlara göre ayrılacağını belirleyen middleware.

* End Point: Yapılan isteğin varış noktalarının ta kendisidir.
  * UseEndPoints middlewareiyle kullanılır.
  * İçindeki Map (eğitimde MapDefaultContellerRoute kullanılıyor) middewarei ile isteklerin yapılacakları formatlar belirlenir, özelleştirilebilir.
    * {controller=Home}/{action=Index}/{id?} bir örnek formattır. 
    * Örnek: www...xxx.com ___/satışlar/sil___ satışlar controllerından sil aksiyonunu çağırdık 
    * Home ve index default değerlerdir.
    * id? ise nullable anlamına gelir.
      * ID metin veya sayı olabilir, önemli olan nasıl tüketileceğidir.
    * EndPoint tanımlarken süslü parantezler içerisinde parametreler belirleyebiliriz ve controller ile action öntanımlı parametrelerdir.







## Controller

* Uygulamaya gelen istekleri karşılayan ___sınıflardır___.
* Çoğunlukla _Controllers_ adlı bir klasörde tutulur.
* Add sekmesinden controller oluşturabiliyoruz.
* isimController geleneğiyle ismini koyarız. Url kısmında yazarken __isim__ ile routing yapılır; isimController yazmaman gerekir, action için de aynısı geçerlidir.
* İstek karşılayabilmesi için Controller sınıfından kalıtım alması mübrem yoksa _Controller_ niteliğine kavuşamaz.
* Controller içerisinde _istekleri karşılayan ve gerekli operasyonları yapan metotlara_ __action metotlar__ denir.





## Views 



* Kesinlikle Views adlı bir klasörde olmalıdır. 
* Bir Controllera ait View, Controller'ın ismine sahip bir alt klasörün altında bulunmalı.
* İlgili Action'a ait bir view oluşturulacaksa view(razor) actionın isminde isminde olmalı.
* View metodu, parametre girilmezse action ismindeki razoru çalıştıracak ama klasörde birden fazla view(razor) dosyası varsa ismini parametre olarak geçirince çalıştırabiliriz.
* View dosyaları __.cshtml__ uzantılıdır. 
* c# ile html kodlarının birlikte kullanılabilidiği uzantıdır ve buna Razor teknolojisi denir.
  * Razor: Html kodları içerisinde c# kodlarını çalıştırabilmemizi sağlar.



## Models  



* Models ismindeki klasörde sınıflar tutulur.
* Context, entity, veritabanı vb. bulunur.
* Models namespacei altında bulunan elemanları kullanmaya "modela girmek" denir.
  * Elemanları kullanmak için tabii sınıftan nesne oluşturuyoruz.

