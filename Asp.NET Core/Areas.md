# Areas

## Nedir

* Web uygulamalarında farklı işlevsellikleri (kullanıcı arayüzüyle yönetim arayüzü vb.) ayırmak için kullanılan özelliktir.
*  Böylece yönetilebilir, küçük ve işlevsel alanlar yaratabiliriz.
* Her bir Area kendi M-V-C'ına sahiptir



## Nerelerde Kullanılabilir

* Faturalandırma
* Yönetim
* İstatiksel paneller
* Uygulamada __mantıksal__ olarak ayırlan üst düzey farklı işlemlerde kullanılır

------------



### Kullanımı 

* Area eklemek için projede Area klasörü açılır ve bu klasöre sağ tıkladığımızda _Add Area_ seçeneği gelir.
* İsim verip oluştuduktan sonra klasörün içine adeta küçük bir MVC uygulaması oluşturur.
* Area içindeki Controller, __Area Attribute__ ile işaretlenmelidir ve `[Area("rota")]` şeklinde rota verilmelidir.



```c#
endpoints.MapControllerRoute(
    name:"AreaDefault",
    pattern: "{area:exist}/{controller=Home}/{action=Index}/{id?}");
endpoints.MapAreaControllerRoute(
    name: "fatura",
    areaName: "faturalandirma_paneli",
    pattern: "billing/{controller=Home}/{action=Index}/{id?}");
```



burada {area} parametresiyle areaName parametresi eşleşir. İkinci metot, her area'ya ait route tanımlaması yaparken, ilkinde genel bir tanım yapılır.





### Areas link oluşturma



`<a asp-action="Index" asp-controller="Home " asp-area = "faturalandirma_paneli">faturalandirma_paneli<a/>`



### Areas arası veri taşıma



* Temp data kullanırız.
* return RedirectToAction("Action","Controller", new {area=areaName}) 