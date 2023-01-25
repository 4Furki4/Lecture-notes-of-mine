# _ViewStart ve _ViewImports

-------------

## _ViewStart Nedir

* Tüm viewlarda kullanılması/yapılması gereken çalışmaların yapıldığı view dir.
* Aslında tüm viewların atasıdır.
* View dosyalarımızda yaptığımız Layout tanımlaması, tekrar edilmemesi için bu dosyanın içerisinde yapılır.



## View Start Nasıl Kullanılır

*  View klasörünün alınta ___ViewStart.cshtml__ olarak oluşturulmalı ki mimari başlangıç view'ı olduğunu anlayabilsin.
* Eğer bir view'da, ViewStart'taki Layout kullanılmak istenmiyorsa __@{Layout=null veya path}__ ile Layout tanımı ezilebilir.

----------------

## _ViewImports Nedir ?

* Razor dosyalarında namespace ve kütüphane tanımlamalarını barındıran razordur.
* Views klasörü altında _ViewImports.cshtml olarak oluşturulması zorunludur.
* @using deyip namespace veya @AddTagHelper *, Microsoft.AspNetCore.MVC.TagHelpers vs. ekleyebiliriz ve bu namespaceler, kütüphaneler global olarak erişebilir hale gelir.