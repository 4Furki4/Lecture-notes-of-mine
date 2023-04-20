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


## ASP.NET In-Memory Caching

- __AddMemoryCache__ servisini uygulamaya ekleyip,
- __IMemoryCache__ arayüzü aracılığıyla In-Memory Caching işlemlerini yapabilirsin.

### Set(key, value)<__T__>

- Girilen key'e karşılık verilen değeri in memory caching'e kaydetmeyi sağlar ve set işlemi sonucunda verilen değeri geri döner.

### Get(Key)

### TryGetValue<__T__>(key, out T value)

### Expiration

#### Absolute 
- Verinin NET ömrüdür. Bu süreden aşıldığında veri silinir.

### Sliding
- Verinin belli bir periyot içerisinde elde edilmesiyle ömrünün uzatılmasını sağlar. 
- Absolute ömrü verilmiş bir veri, en fazla obsolute ömrü kadar yaşar.
- Yani 1 ay obsolute ömrü olan ve sliding ömdür 1 gün olan bir veriye her gün erişildiği taktirde bu veri 30 gün yaşar. 1 günden fazla erişilmezse, 30 gün beklemeksizin bu veri cacheten silinir.

### MemoryCacheEntryOptions

- Yeni bir key-value eklerken, bir MemoryCacheEntryOptions instance'ını vererek verinin ömrünü ayarlayabiliriz.
- Örnek:
````csharp
string valueSet= cache.Set<string>("name", value, options: new MemoryCacheEntryOptions
            {
/* DateTimeOffset */ AbsoluteExpiration = DateTimeOffset.UtcNow.AddDays(1),
   /* TimeSpan */    SlidingExpiration = TimeSpan.FromHours(1)
            });
````

## Redis ile Distributed Caching

- Öncelikle __StackExchangeRedis__ kütüphanesini uygulamaya yükleyip

- __AddStackExchangeRedisCache__ servisini uygulamaya ekle.
  - Servisi çağırırken opt pattern ile ``opt.Configuration = "localhost vb..."`` ile redis'i bağlayabilirsin.

- __IDistributedCache__ arayüzünü IoC'den almak için constructor'dan alıp metotları kullanmaya hazır hale getiricez

### Metotlar
- SetString, SetStringAsync, GetString, GetStringAsync metotlarıyla string value ekleyebiliriz.

  - __NOT :__ Bu metotlarla verileri rediste Hash tipinde ekliyoruz.

### Ömür

- __DistributedCacheEntryOptions__ instance'ı vererek ömrünü ayarlayabiliyoruz.
- Örnek:
```` csharp
await distributedCache.SetStringAsync("name", name, options: new DistributedCacheEntryOptions
{
    AbsoluteExpiration = DateTimeOffset.UtcNow.AddHours(1),
    SlidingExpiration = TimeSpan.FromMinutes(10)
});
````

## Redis Pub/Sub Özelliği
### Pub/Sub Nedir ?

- Publisher ve Subscriber arasında mesajlaşma işlemidir. Publisher mesajı yayınlar ve Subscriber mesajı alır.

### Pub/Sub Özelliğini Kullanmanın Yöntemleri

#### Redis CLI

- Öncelikle, redis cli ile pub sub kullanmanın avantajı, hızlıca bir mesaj yayınlayıp, yayınlanan mesajı alabilmemizi veya test için hızlıca kullanabilmemizi sağlamasıdır.

- Redis CLI ile redis sunucusuna bağlandıktan sonra:
  - `SUBSCRIBE channel` : channel ismi verilen kanala abone olur.
  - `PUBLISH channel message` : channel ismi verilen kanala message mesajını yayınlar.

#### Redis Insight

- Redis'in kendi GUI arayüzü olan Redis Insight ile de pub sub kullanabiliriz.
- Soldaki Pub/Sub sekmesinden kanal oluşturabilir, yayın yapabilir ve yayınlanan mesajları alabiliriz.

#### Redis API

- Öncelikle ilgili projede __StackExchange.Redis__ kütüphanesini yüklememiz gerekiyor.

- Kütüphaneyi yükledikten sonra
```` csharp	
ConnectionMultiplexer connection =  await ConnectionMultiplexer.ConnectAsync("localhost:2002");
// bu sayede redis sunucusuna bağlanmış ve bir ConnectionMultiplexer instance'ı oluşturmuş olduk.
````
- bu connection adlı  instance ile GetSubscriber() metodu ile bir ISubscriber instance'ı oluşturabiliriz.
```` csharp
ISubscriber subscriber = connection.GetSubscriber();
// ISubscriber tipindeki instance'ımız ile hem publish hem subscribe metotlarını kullanarak mesaj yayınlayabilir veya alabiliriz.
````
- Mesaj yayınlayabilmek için:
```` csharp
await subscriber.PublishAsync("channel-net", "Hello World!");
````
- Mesaj alabilmek için:
```` csharp
await subscriber.SubscribeAsync("channel-net", (channel, message) =>
{
    Console.WriteLine($"Channel: {channel}, Message: {message}");
});
````

### Redis Pattern Matching Subscription

- Belli bir pattern'e uyan kanallara abone olmak için kullanılır.
  - Misal, news.* pattern'ına uyan kanallara abone olmamızı sağlar
    - news.kanal1, news.bbc gibi kanalların yayınlarını alır.
    - book.top-seller, book.least-seller gibi kanalların yayınlarını alamaz.

- redis CLI ile kullanımı:
  - `PSUBSCRIBE pattern` : pattern'e uyan kanallara abone olur.
  - `PUBLISH channel message` : channel ismi verilen kanala message mesajını yayınlar.