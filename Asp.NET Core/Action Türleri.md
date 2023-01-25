# Action Türleri 

----------------------



* Hangi türde değer döndürmek istiyorsan o türe uygun fonksiyonu çağırman yeterli, tür dönüşümüyle uğraşmayacaksın.

---------------------



## ViewResult 

* Yanıt(response) olarak bir view dosyasını render etmemizi sağlayan aksiyon türüdür.

* Base classtaki View() metodunu kullanarak içinde bulunduğumuz controller-aksiyon metodu yoluyla gerekli view dosyasını bulur.

-------------------------



## PartialViewResult

* ViewResult gibi bir view dosyasını render etmemizi sağlayan aksiyon türüdür.
* Buradaki fark, client tabanlı Ajax isteklerinde kullanılmaya daha yatkın olmasıdır.
* Bir sayfanın bütününden ziyade bir kısmının görüntüsünü sağlamak istersek bunu kullanırız, örneğin bir sayfanın bir kısmının git gel yapmadan yüklenmesini vb. sağlar.
* Teknik fark: ViewResult action metotları render yapmadan önce ViewStart.cshtml-içerisinde layout tutar- adlı bir dosya render edilir yani tüm view dosyaları bu dosyayı baz alır ancak PartialViewResult bunu baz almaz. 
* View metodunun yerine PartialView metodu kullanılır.

----------------------------

## JsonResult

* Üretilen veriyi Json formatına dönüştürüp döndüren askiyon türüdür.
* Json(object) metodu kullanılır.
* _İçerik türü(content type) json olarak getirilir._

------

## EmptyResult

* İçi boş bir resultı response olarak vermek için kullanılır. Döndürülen bir şey vardır ama hiçbir şeydir.
* Void metotlar da aynı işe yarar.

------------------

## Content Result

* _Metinsel_ bir değer döndürmek için kullanılan Action türüdür.
* Client tabanlı çalışmalarda kullanılır.
* __İçerik türü text olarak gelir__, html olarak değil.

-------------------

## ActionResult

* Gelen istek neticesinde döndürülecek sonuç değişkenlik gösteriyorsa kullanılan Action türüdür.
* Aksiyon türlerinin atalarıdır, hepisi içerir.
* Özelleştirmekten ziyade ekseriyetle bu kullanılır. 