# Redis Notları

## Caching (Ön Bellekleme) Nedir ?

- Verilere erişimin hızladırılması için verilerin bellekte tutulmasına denir.

- Verilerin veritabanından ziyade bellekte tutulması, uygulamanın performansını arttırır.

- Ayrıca sunucu üzerindeki veritabanı işlemlerinin azaltılması, veritabanı üzerindeki yükü azaltır.

## Ne tür veriler ön belleğe alınabilir ?

- Verilerin ön belleğe alınabilmesi için, verilerin değişken olmaması ve sıklıkla kullanılması gerekir.

- Örneğin, kullanıcıların profil bilgileri, ürünlerin fiyatları, ürünlerin stok durumu gibi veriler ön belleğe alınabilir.

- Hatta video, resim gibi veriler de ön belleğe alınabilir.

- Lakin kullanıcıların girdiği veriler, kullanıcıların yaptığı, işlemler gibi veriler, hülasa değişken olan verilen cache'lenmemelidir.

- Kişisel veriler de cache'lenmemelidir çünkü kişisel verilerin güvenliği önemlidir.

## Zararları Nelerdir ?

- Veritabanında duran veriler güncellendikten sonra bunun bellekteki karşılığı güncellenmezse, veriler tutarsızlık gösterebilir.

- Bellek kullanımının artması.

- Cache'lenecek verilerin doğru seçilmesi gerekir, aksi halde hukuki sorunlarla karşılaşılabilir.

## Caching Mekanizmalarındaki Bileşenler

### Cache Belleği

- Verilerin tutulduğu bellektir

### Cache Manager

- Cache belleğe veri eklemek, silmek, güncellemek, okumak ve verilerin kalıcığını belirlemek gibi işlemleri yapar.

### Cache Algoritması

- Verilerin nasıl eklenip silineceğini belirleyen algoritmalardır.

## Caching Yaklaşımları

### In-Memory Caching

- Verilerin, uygulamanın çalıştığı makinedeki bellekte tutulmasıdır.

### Distributed Caching

- Verilerin, birden fazla makinede tutulmasıdır.

- Bu, hem güvenlik hem de performans açısından avantaj sağlar.
