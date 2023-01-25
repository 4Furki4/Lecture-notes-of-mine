# Positional Record



* Constructor ve Deconstructor metotlarını özelleştirerek kullanmamızı sağlayan Record yapılanmasıdır.
* Record isminin yanına parametre eklememiz hem Constructor hem de Deconstructor metodu oluşturup içine atayacaktır.
* Bu yazdığımız parametreler aslında __init proplar__ yerine geçmiş oluyor ve elle oluşturmaya hacet yok.
* Kullanımı şu şekildedir:![image-20220407222836387](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220407222836387.png)
* __Eğer positional record yapında farklı bir inşa edici metot aşırı yüklediysen yeni inşa edici metot tetiklendiğinde this anahtar kelimesiyle positional recordda tanımladığımız inşa edici metodun tetiklenmesi zorunludur yoksa compiler hatası alırsın. Hülasa positional record kullanılmalıdır!__

