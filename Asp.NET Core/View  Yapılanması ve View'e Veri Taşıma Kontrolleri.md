# View  Yapılanması ve View'e Veri Taşıma Kontrolleri

------------------

* Verileri görselleştirmemizi sağlayan yapılanmadır.
* C# kodlarını html'e otomatik dönüştüren Razer teknolojisini kullanırlar ve uzantısı __.cshtml__dir. 
* View oluşturmak için Views adlı klasör açarız ve action metodun içinde bir view dosyası kullanmak için önce controller isminde bir klasör ve sonra action isminde bir cshtml uzantılı view dosyası oluştururuz.
* View oluşturma işini editor de yapabilir. Action metodun içinde sağ tıklayıp add View deriz.

* bir cshtml dosyasında C# kodları kullanmak için __@{ kod yazılacak kısım }__ bunu yaparız.
  * DİPNOT: Sayfa kaynağını görüntüleyince c# kodları gözükmez.

---------------------

## Peki verilere View dosyalarında nasıl erişiliyor ?



### Model Bazlı Veri Taşıma

* Bunu kullanmak için hem controller hem de view sınıfında bir takım ayarlamalar yapmalıyız.
  * Controller sıfıında yapmamız gereken return View(object) ile yapmamız yeterlidir.
  * View sınıfındaysa bu gelen verinin türünü bildirmemiz lazım.
  * Bunu yapmak için __@model__ (örnek)->          @model List<Products>
    * Bu tanımlama sayfanın en üstünde olur.
  * Sonra __Model__ ile bu datayı yakalayacağız.

--------------------

### Veri Taşıma Kontrolleri



#### a. ViewBag

* View'e taşınacak veriyi dynamic şekilde tanımlanan değişkenle taşımayı sağlayan veri kontrol yöntemidir.
* Viewbag.degiskenismi= tasınacakveri şeklinde dynamic değişkene tanımlanır.

#### b. ViewData

* İlgili datayı boxing ederek taşır. 
* ViewData["isim"] =tasınacakveri şeklinde boxing edilir.
* ViewData["isim"]unboxing için as anahtar kelimesiyle listeye atabilirsin.

#### c. TempData

* Bu da boxing yaparak taşır. Yazım olarak ViewData ile aynı.

* Çok önemli bir özelliğiyle diğer taşıma yöntemlerinden ayrılır: __Diğer actionlara verilerin taşınabilmesini, aktarılmasını sağlar ve bunu cookie kullanarak yapar__

  * RedirectToAction("Actionİsmi") ile actiona veri yönlendirmesi yapılabilir. Ayrıca controller arasında aktarım da sağlar.

* Complex type veri taşınırken sterilize işlemleri gerçekleştirilmelidir. Bu complex veri Json tipine dönüştürülüp aktarılmalıldır.

* 

* Yapılışı aşağıdadır

  > Gelen actionda: var data = ViewData["products"].ToString() yaptıktan sonra string data =JsonSerializer.Serialize(products) ile bu datayı string türüne Json tipine dönüştürüp atadık.

  > Gönderilen actionda: var data = TempData["products"].ToString();

  > List<Product> products= JsonSerializer.Deserialize<List<Product>>(data);

