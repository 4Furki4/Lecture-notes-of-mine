# Static Constructor



* __Bir nesne ilk defa oluşturulduğunda _varsayılan veya bizim oluşturduğumuz_ constructor değil, _static constructor_ çalışır__. 
* __Lakin bu bazı durumda geçerlidir!__
* Bir şart şudur: Bir sınıftan ___ilk defa bir nesne oluşturulurken___ önce static constructor çağırılır, sonra varsayılan veya bizim kurduğumuz constructor çağırılır.
* Eğer oluşturulan nesne, __ilk nesne değilse__ static constructor çağırılmaz!
* Parametre alamayacağı için aşırı yükleme yapılamaz.
* __static Sınıfİsmi__ olarak tanımlanmalı yani private olmalıdır. 
* Diğer şartsa şudur: ___İlgili sınıftan herhangi bir static üye tetikleniyorsa___ static constructor yine tetiklenecektir.
* ___LAKİN BİR KERE TETİKLENEN STATIC CONSTRUCTOR BİR DAHA TETİKLENMEZ!___

* SingleTon design pattern örneği:![image-20220407003622773](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220407003622773.png)

* Yukarıda olan şey, static metodun tetiklenmesiyle static constructor aracılığıyla bir sınıftan sadece tek bir nesne oluşturmamız.

* Static yapılara sınıf ismiyle erişiriz, nesneyle işimiz olmaz.