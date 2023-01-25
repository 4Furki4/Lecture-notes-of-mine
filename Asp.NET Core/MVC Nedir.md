

# MVC Nedir ?

---------------------------------



* Birbirinden bağımsız üç tane katmanı temel alan _mimari_ desendir.
* İçerisinde birden çok tasarım deseni olduğundan daha geniş çaplıdır.
* Tasarım Deseni(Design Pattern) -> Belli başlı senaryolar için çalışma
* Mimari Desen(Architectural Pattern) -> Belirli bir yaklaşım benimseme
* AÇILIMI: __MODEL-VIEW-CONTROLLER__
* Mantık, belirli işlemleri kategorize etmektir. Örneğin view'da görselleştirmeyle alakalı işlemler yapılıyor.
  * DİPNOT: İllaki Webde uygulanan bir tasarım değildir.


-----------------------------

## Model



* İşlenecek veriyi temsil edilir. Yani veri, ayrı bir katmanda işlenen bir değer, olgudur.
* Genelde Webde veriyle ilgili çalışmalarda entity framework core ile çalışılır.

----------------------

## View



* Elde edilen veriyi _görselleştirecek_ katmandır. 
* Sunum yapmamızı sağlar
* HTML, CSS, Resim, müzik vb. bu katmanda kullanılır. 
* Burada yapılan işleme _view rendering_ denir, sonuca _view result_.

--------------------------------

## Controller



* Esasında yönetimi üstlenir, denetler ve veriyi üretir.
* Gelen istekleri karşılayacak ve isteğin içeriğine göre gerekli model işlemlerini gerçekleştirir.
* Algoritmaları, veritabanını, servisleri vb.lerini çağırarak/çalıştırarak/sorgulayarak istenilen veriyi üretir, gerekirse view ile görselleştirir ve client'a response olarak verir. 
* Controller her zaman Modeli kullanmak zorunda değildir, farklı bir API'dan, üreterek veya başka bir yerden de veri gelebilir. 



### Mantık 

* Client, controller'dan bir istekte bulunur.

* İstek doğrultusunda Modele giden Controller, gerekli olan veriyi ister
* Gelen veri sunum için viewa gönderilir.
* Sunum için hazırlanan veri tekrardan Controllera gelir
* En son Controller clienta yanıtı verir.

![image-20220416024048612](C:\Users\gs-60\AppData\Roaming\Typora\typora-user-images\image-20220416024048612.png)
