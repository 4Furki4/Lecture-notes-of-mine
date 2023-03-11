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

#### Redis CLI ve Docker

- Redis çalışan container üzerinden redis CLI'a bağlanmak için:

  - `docker exec -it <containerId> redis-cli`
  - `docker exec -it <containerId> redis-cli --row`: Türkçe karaketerlerin de desteklenmesini sağlar.

## Redis Veri Yapıları

### String

- En temel veri türüdür. Hem metin hem de sayısal değerler tutulabilir. Hatta binary veriler de tutulabilir.

#### String Fonksiyonları

- `SET key value` : key'e value değerini atar.

- `GET key` : key'e atanan değeri döndürür.

- `INCR`: key'e atanan değeri 1 arttırır.
  - `INCRBY key value` : key'e atanan değeri value kadar arttırır.
- `DECR`: key'e atanan değeri 1 azaltır.
  - `DECRBY key value` : key'e atanan değeri value kadar azaltır.
- `GETRANGE key start end` : key'e atanan değerden start ile end arasındaki değeri döndürür.
- `GETSET key value` : key'e atanan değeri value değeri ile değiştirir ve eski değeri döndürür.
- `MGET key1 key2 key3` : key1, key2, key3'e atanan değerleri döndürür.
- `MSET key1 value1 key2 value2 key3 value3` : key1'e value1, key2'e value2, key3'e value3 değerlerini atar.
- `MSETNX key1 value1 key2 value2 key3 value3` : key1'e value1, key2'e value2, key3'e value3 değerlerini atar. Ancak key1, key2, key3'e atanan değerlerin olmaması gerekir.
- `APPEND key value` : key'e atanan değere value değerini ekler.
- `STRLEN key` : key'e atanan değerin uzunluğunu döndürür.

### List

- Değerleri koleksiyon olarak tutar.

#### List Fonksiyonları

- PUSH
  - `LPUSH key value1 value2 value3` : key'e value1, value2, value3 değerlerini sırayla ekler.

  - `RPUSH key value1 value2 value3` : key'e value1, value2, value3 değerlerini sırayla ekler.

- POP
  - `LPOP key` : key'e atanan değerden ilk değeri siler ve döndürür.
  - `RPOP key` : key'e atanan değerden son değeri siler ve döndürür.

- GET
  - `LINDEX key index` : key'e atanan değerden index değerine sahip değeri döndürür.
    - `LINDEX key -1` : key'e atanan değerden son değeri döndürür.

- SET
  - `LSET key index value` : key'e atanan değerden index değerine sahip değeri value değeri ile değiştirir.

- RANGE
  - `LRANGE key start end` : key'e atanan değerden start ile end arasındaki değerleri döndürür.
    - `LRANGE key 0 -1` : key'e atanan değerden tüm değerleri döndürür.

### Set

- Birbirinden farklı, unique, değerleri içeren veri kümeleri oluşturmak için kullanılır ve veriler sıralama olmaksızın tutulur.

#### Set Fonksiyonları

- `SADD key value1 value2 value3` : key'e value1, value2, value3 değerlerini ekler.

- `SREM key value1 value2 value3` : key'e atanan değerden value1, value2, value3 değerlerini siler.

- `SISMEMBER key value` : key'e atanan değerden value değerinin olup olmadığını 1 veya sıfır döndürürerek belirtir.
- `SINTER key1 key2 key3` : key1, key2, key3'e atanan değerlerin kesişimini döndürür.
- `SUNION key1 key2 key3` : key1, key2, key3'e atanan değerlerin birleşimini döndürür. Aynı değerler tekrar edilmez.
- `SDIFF key1 key2 key3` : key1, key2, key3'e atanan değerlerin farkını döndürür.
- `SCARD key1`: key'e atanan değerlerin sayısını döndürür.

### Sorted Set

- Set veri yapısına benzer ancak değerler sıralı olarak tutulur. Sıralama için score değeri kullanılır.

#### Sorted Set Fonksiyonları

- `ZADD key score1 value1 score2 value2 score3 value3` : key'e score1, value1, score2, value2, score3, value3 değerlerini ekler.

- `ZREM key value1 value2 value3` : key'e atanan değerden value1, value2, value3 değerlerini siler.

- `ZRANGE key start end` : key'e atanan değerden start ile end arasındaki değerleri döndürür.
  - `ZRANGE key 0 -1` : key'e atanan değerden tüm değerleri döndürür.
  - `ZRANGE key 0 -1 WITHSCORES` : key'e atanan değerden tüm değerleri ve score değerlerini döndürür.
- `ZREVRANK key value` : key'e atanan değerden value değerinin sıralama değerini döndürür.

### Hash

- Key-value değerlerini tutan veri yapısıdır.

#### Hash Fonksiyonları

- `HSET & HSET key field1 value1 field2 value2 field3 value3` : key'e field1, value1, field2, value2, field3, value3 değerlerini ekler.

- `HGET & HMGET key field` : key'e atanan değerden field değerini döndürür.

- `HDEL key field1 field2 field3` : key'e atanan değerden field1, field2, field3 değerlerini siler.

- `HGETALL key`: key'e atanan değerleri döndürür.
