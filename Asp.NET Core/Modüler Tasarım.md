# Modüler Tasarım

----

## Modüler Tasarım Nedir ?

* Modüler biçimde görevlerin birbirini etkilemediği ama bir bütünü oluşturduğu tasarım.
* Bir parçanın bozulması, bütünü etkileyebilir ama diğer işlevleri bozmaz. Örneğin direksiyonun bozulması motoru bozmaz ama tabii bütünde sorun oluşturur.
* Site tasarımlarında da içeriklerin, başlıkların vb. kısımların tek bir view dosyasında olmaması gerekir, yönetimi, bakımı, okuması çok zordur.
* Bu modülleri teker teker ayrı viewlerde tasarlayıp PartialView veya PartialComponent ile yazdıracağız.

--------

## Partial View

* Ayrı ayrı tasarlanan viewların ihtiyaç duyulduğunda kullanılmasını sağlayan teknik.
*  Bunu uygulamanın 3 yolu var.

### Html.Partial()

* Parametre olarak ilgili view'in dizinini verince çalışır.

### Html.RenderPartial()

* Parametre olarak ilgili view'in dizinini verince çalışır.

### Tag Helper ile Partial

* <partial name= "İlgili cshtml dizini"/>

Bu 3 yöntemden perormans açısından TagHelper daha iyi olduğu için TagHelper yeğindir.



## Veri Taşıma Kritiği

* Veri, controller'ın view'ına taşınırken aynı zamanda Layout'a da taşınacaktır. Layout'da ise partiallar mevcut olduğu için bu partiallara ilgili veriler taşınacaktır.
* Layout'tan gelen veriyi kullanmak istediğin partial'da karşılaman gerekecektir.
* Peki, view ile yani model ,ile farklı tipte veri gitti ve bize farklı bir veri lazım. Gerekli veriyi ViewBag vb. ile Layout'a taşınacak. Daha sonra iligili partial kısmında model değişkenine istediğimiz veriyi vereceğiz ki partial'ın model'i olsun.
* Örnek: Controllerdan ViewBag.Data = List bir veri yolladın.
* <partial name= "İlgili cshtml dizini" model="@ViewBag.Data"/> 
* sonra ilgili partialda @model List diyerek bunu karşılayacaksın.



### RenderSection Kritiği

* PartialViewlarda RenderSection çalışmaz!

---



## ViewComponent

ViewPartiallarda sürekli veri taşımaları olacağı için bu Controller'ın Single Responsibility ilkesini bozmakta ve onu yormaktadır.

ViewComponent'ta ise verileri doğrudan Modelden çekebiliriz ve controllerı yormamış oluruz. __Tek bir işe odaklanıp__ kendi barındırdığı işlemleri gerçekleştirip gerekli verileri alacaktır.

Not: ViewComponent'ın render edilme süreci ViewPartial'dan daha hızlıdır.

### Nasıl Kullanılır 

#### Yöntem-1

* .cs ve .cshtml olarak 2 kısımdan oluşur ve cshtml, cs'ten beslenir. 
* Önce cs kısmını oluşturup ardıdan cshtml kısmı oluşturulur. 
* ViewComponent klasörü açılır
* ...ViewComponent adlı bir cs dosyası oluşturulur
* Sonra AspNetCore.MVC'den gelen ViewComponent kalıtımını yapmamız gerekir.
* Bu ViewComponent'in içinde `public IViewComponentResult Invoke()` imzasına sahip bir metot oluşturulması zaruridir ve başka bir imza veremeyiz.
* Bu metot Return View() ile view döner.
* Bu dönen view, Views klasöründe, ilgili controllerın altında bulunan Components klasöründeki ...ViewComponent'ın önündeki isme göre bir klasör arar ve dönen View'a isim verilmediyse default.cshtml'e bakar.
* Bu kullanım controller'a bağlı olduğu için her controller'a bu işlemi yapmak gerekir.

#### Yöntem-2

* Uygulama bazlıysa yani herhangi bir yerde kullanılabilir, tek seferlik tanımsa:
* Buradaysa Layout'u koyduğumuz Shared klasöründe bir Component klasörü oluşturuyoruz ve içine ilgili Component isminde bir klasör daha oluşturuyoruz, içine de view'ı koyuyoruz.

Bu iki yöntem yerine ilgili dizinleri cs dosyasındaki View metoduna girebilirsin ama pek tavsiye edilmez.

Her iki yöntemde de sonuçta compontent'in cs dosyasından gelen verileri model ile yakalayacağız ve view'ı oluşturacağız.

Bundan sonra Layout'da veya bu component nerede kullanılıyorsa `@await Component.InvokeAsync("component_ismi")` ile component render edilir.

### 	Kritikler

* ViewComponent'ın cs dosyası sadece Get işlemi karşılayabilir.
* View Component, Component.InvokeAsync("isim", gelen değişkenler) şeklinde render edilirken cs dosyasına değer gönderilebilir ve bu değerler eşliğinde view manipüle edilebilir. Partial'dan ayıran en önemli özelliklerinden birisidir.



 

  