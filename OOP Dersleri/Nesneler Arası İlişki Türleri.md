# Nesneler Arası İlişki Türleri





Bu ilişki türleri kalıtım, soyutlama referans gibi durumların istemi olan izahatlardır aslında. 



## is-a İlişkisi 

* Tekmil kalıtımla alakalıdır.
* "Bird is a(n) animal." Kuş sınıfı, hayvan sınıfından kalıtım alıyor :) 



## has-a İlişkisi

* Bir sınıfın _başka bir sınıfın nesnesine sahip olmasıdır._
* The car has a engine. Araba sınıfı içerisinde motor referanslı bir nesne var.



## can-do İlişkisi

* _Interface_ yapılanmasının getirisi olan bir ilişki türüdür.

-----------------

#### Kısaca Interface

* Interface ezcümle bir sınıfın imzasıdır. Bir sınıfın içerisinde yer alacak tüm memberların salt imzalarının oluşturulduğu taslak gibi bir yapılanmadır.
* Sadece imza oluşturulur çünkü memberların gövde kısımları yazılmaz, interfacein kullanılacağı sınıfta kullanılması gereken memberları belirtmeye yarar.
* Bir interface zerk (implemente) edilmiş bir sınıf, interface imzalarını kullanmazsa diğer bir deyişle gövde kısmını açmazsa derleme esnasında hata alacaktır.
* Erişim belirleyicileri yoktur.

------------

* Interface zerk edilmiş bir sınıf, interface'in memberlarını aldığı için kabiliyet kazanmış olur ve can-do ilişkisi zuhur eder.





## Association 



* Sınıflar arasındaki bağlantının gevşek halidir.
* Sınıflar birbiriyle ilişkili fakat bağımlı değildir.
* Parça-Bütün ilişkisi yoktur. Aradan parçaları çıkarınca -yolcular otobüsten inince- bütün bozulmaz.



## Aggregation ve Composition 



* Nesneleri birleştirip daha büyük bir nesne yapmaya verilen _isimlerdir._
* __Her ikisinde de Parça-Bütün ilişkisi mevcuttur.__
* Her ikisinde de has-a ilişkisi vardır.



### Peki, bu ikisinin farkı ne ?

#### Aggregation

* Sahip olduğu nesneler bağımsız bir şekilde __var olabilir.__

#### Composition 

* Sahip olduğu nesneler bağımsız bir şekilde __var olamaz.__



Ayrıca örnekler de burada bulunuyor: ![image-20220411195927079](C:\Users\Furkan Cengiz\AppData\Roaming\Typora\typora-user-images\image-20220411195927079.png)