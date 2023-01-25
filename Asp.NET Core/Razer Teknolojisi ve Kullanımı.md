# Razer Teknolojisi ve Kullanımı

---------------

## Nedir ?

* Önceden de defaatle yazdığım üzere cshtml uzantılı html kodlarının içinde c# kodları yazmamızı sağlayan teknolojidir

----------------

## Kullanımı 

* Kullanmak için __@__ operatörünü kullanmalıyız. @{ scope içine kodları yazarız.}
* Farklı scopelardaki verilere diğer scopelardan erişebiliriz. Derlemede bu scoplelar tek scope olarak sayılır.
* Razor scopeları içinde bittabii html kodları yazabiliriz.
* Yorum satırı oluşturma: __@*__  *@ ile yapılır
* Tek satırda işlemler yapabilirsin ve bunu için @() parantez içinde kodlarını yazabilirsin.
* if ve for-foreach gibi yapılanmalarda razor scopları oluşturman elzem değil, @for veya @if... yapınca razor kullanılan yapılanmanın scopelarını anlayabiliyor.