# Validation

-------------------

## ViewModelde Attributelar ile Yapılan Validation

* [Required] : boş girilmemesi için kullanılır. 
  * [Required(Error.Message="sfladsdlfadslfs")] ile mesaj yazabiliriz.
* [StringLength(int __limit__, errorMessage="mesaj")] : Girilen stringin uzunluğunu belirleriz
* [EmailAddress] : email olup olmadığını kontrol eder.
* Not: Bu yaptığımız kısıtlamalar form yapılanmasına MVC sayesinde otomatik olarak atanacaktır, yani 100 karakter sınırı ayrıca form'un max length özelliğine de atanacak :) 



### ModelState

* Tasdiklemenin sonucunu bu property'de tutarız.
* ModelState.IsValid ile doğrulama katmanından geçtiyse bool sonuç alırız.



Dipnot: Eğer form kullanırken vs. tpye'ı email olarak ayarlarsan e-mail için otomatik client tabanlı validasyon yapılır. 



## Kullanıcıya validation hatası gösterme

< span  asp-validation-for="doğrulanacakProp"> < /span > spanlar hatayı yakalayacaktır ve view'da ilgili model'ı geri return etmemiz gerekir ki hatalar ilgili yerlere atansın. 



#### Tüm hataları bir arada gösterme

< div __asp-validation-summary__ = "All" >< /div > ile hepsini bir arada gösterebilirsin.