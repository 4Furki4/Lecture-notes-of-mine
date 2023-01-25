# Appsetting.json



* Yapılandırma araçlarından birisidir.



### Yapılandırma ne demek ? 

 

* Herhangi bir ortamda gerçekleşecek davranışlar için statik değerleri tutmaktır. Configuration

-----------



* Best Practice açısından username, password, connection string vb static değerler atanmamalıdır, kirli koda, sürekli aynı değerlerin tekrar edilmesine ve yönetilebilirliğin ilga olmasına yol açar.
* Peki, nerede bu tanımlamaları yapacağız. appsetting.json dosyasında. 



## appsetting.json Konfigürasyonu



* Json, `"Key": "Value` "şeklinde bir yapıdadır.

`"Person":`

 {``"Name": "...",`

`"Surname": "asfsdfas"``}`

Person nesnesi(aslında bu da anahtar), Name ve Surname anahtarlar.



### json dosyasındaki verileri okuma



* Bunun için IConfiguration arayüzünü DI ile ctor'dan geçirmeliyiz.

* diyelim ki geçirdik ve _configuration değişkenine atadık bu arayüzün nesnesini.

* _configuration["stingkey"] şeklinde ulaşırız.

* eğer nesne içindeki veriye ulaşmak istiyorsan ["person:name"] şeklinde iki noktayla alt dallara erişirsin.

* Eğer string bir veri değil de nesne olarak index kısmına yazarsan null döner. 

  * ["Person"] karşılığı null'dır ama ["Person:Name"] değil.

  

  #### GetSection() metodu

  Bu metotla sadece string değer değil, tüm bir nesneyi alabilirsin.

  Bu nesneyi de bir sınıfla eşleştirmek için __Get()__ metodunu kullanmalı ve parametre olarak uygun bir sınıf vermelisin. 