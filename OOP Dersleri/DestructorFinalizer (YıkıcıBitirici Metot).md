# Destructor/Finalizer (Yıkıcı/Bitirici Metot)



* Üretilmiş olan nesneyi bertaraf ederken son olarak çağırılan metottur.
* Yıkıcı metotsadece sınıflar için mevcuttur ve aşırı yüklenemez.
* 



## Nesne kim tarafından hangi şartlarla imha edilir ?



* _Herhangi bir_ referans tarafından işaretlenmemişse
  * DİPNOT: Ayrıca liste gibi yapıların indexleri de referans görevi görür.
* Nesnenin oluşturulduğu ve kullanıldığı aralık (scope) son bulmuşsa
* Hülasa, nesneye tekrardan erişilemeyecekse imha edilir.
* Peki, kim imha eder ? __Garbage Collector__ adlı yapı, yukarıdaki şartlar sağlandığında _çöp_ nesneleri toplayıp imha eder. Bu sayede bellek optimizasyonu sağlanır. GC'ye müdahale pek önerilmez.



## Nasıl yıkıcı metot oluşturulur ?



* Metot ismi sınıf ismiyle aynıdır.

* __~SınıfIsmi(){}__ yazarak oluşturulur.

