# Layout

----------

## Neden ihtiyaç duyuluyor ?

* Sayfalarda ortak olan yapılar sayfa sayısı arttıkça kod maliyetini arttırır.
* Bu ortak yapıların yani kodların tekrar tekrar yazılması icap eder.
* Tekrar tekrar kod yazmamak için ortaklıkları ayrı dosyadan, sayfaya özel kodları kendi içinden alırız.
* Örneğin Hepsiburada'daki arama çubuğu, hangi sayfaya gidersek gidelim değişmez. Bunun gibi kısımlar Layout'tan alınır.

--------

## Nasıl kullanılıyor ? 

* Öncelikle View dosyasının içine Shared adlı klasör açmamız gerekiyor ve bu klasörün içine __Layout_ isimli  view' oluşturuyoruz. Geleneksel yol budur.

### RenderBody

* Daha sonra ortak olmayan, sayfadan sayfaya değişkenlik gösterecek kısıma __@RenderBody()__ fonksiyonuyla, ilgili sayfanın View'ı basılır.
* Daha sonra diğer view dosyalarında sadece basılacak içerikler olacak.
* Bu viewların içeriklerini _Layout view'ıyla bağlamak için __@{Layout="Layout dosyasının pathi" }__ yazılır.
* @RenderBody sadece bir yerde kullanılabilir ve kullanılması zorunludur.

### Render Section

* RenderBody bir defa kullanılabilen bir metot olduğu için, sayfadan sayfaya değişen farklı yerlerdeki değişkenleri render edebilmemizi sağlar.

* Kullanılışı: 

  ```
  RenderSection("render-Özel-İsim", bool required)
  ```

  

* required kısmı true olursa Layout'u kullanan tüm view'larda RenderSection tanımlanması yapılmalıdır yoksa hata alınır ama her view için zorunlu değilse false yazmalıyız.

* View'da tanımıysa 

  ```c#
  @section render-Özel-İsim{ basılacak html kodları yani içerik}
  ```

  

