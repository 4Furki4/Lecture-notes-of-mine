# SignalR

## HUB

- Client'lar HUB'lar dediğimiz yapılara subscribe olarak HUB'lardaki değişiklerden haberdar olur. Sadece haberdar olmakla kalmaz, HUB'larda yani aslında server'da fonksiyonlar tetikleyebilir ve server'da HUB'lar aracılığıyla client'ta fonksiyonlar tetikleyebilir.


### Server'da Hub Oluşturma

- Bir sınıfın Hub olabilmesi için HUB sınıfından kalıtım alması yeterlidir. 

- Bu Hub'dan kalıtım alan sınıfın içerisinde, Hub'a bağlanan Client'larla iletişime geçebilen metotlar yazabiliriz.
- Örnek bir sınıf:
````csharp
public class MyHub : Hub
    {
        public async Task SendMessageAsync(string message)
        {
            await Clients.All.SendAsync("receiveMessage", message);
        }
    }
````

### Hub Routing

- Tabii, Hub'ları oluşturduk ama client'ların bu Hub'lara bağlanabilmesi için endpoint ayarlarını yapmamız gerekiyor.

````csharp
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<MyHub>("/myhub");
});
````


## Hub'lara Client'ların Bağlanması

- Öncelikle @microsoft/signalr kütüphanesinin yüklü olması gerekiyor.

- Sonraysa bağlantımızın ayarlarını yapmamız gerekiyor

````ts
const connection = new signalR.HubConnectionBuilder()
                .withUrl("http://localhost:5000/myhub") // hub'ın endpoint'i
                // .withAutomaticReconnect()
                .build(); // bağlantıyı inşa edici fonksiyon
````
- Yukardaki kod, bağlantıyı inşa eder lakin bağlantıyı başlatmaz. Bağlantıyı sağlamak için  ```connection.start()`` fonksiyonunu çağırmalıyız.

### HUB'da fonksiyon çalıştırmak

- Bağlantımızı kurduk lakin şu an Hub'da herhangi bir şeyi tetiklemedik.

- Hub'da bir fonksiyon tetiklemek için ``invoke`` fonksiyonu kullanılır.

````ts
connection.invoke("SendMessageAsync", message).catch(err => console.log(`Mesaj iletilirken hata gerçekleşti: ${err?.message}`))
````

- SendMessageAsync adlı, Hub sınıfında tanımladığımız fonksiyonu tetikledik ve tetiklerken message adlı bir değişkeni veri olarak gönderdik. Bu fonksiyon promise döner.


### Client'ların Haberdar Olması

- Hub kuruldu, client server'ı tetikledi ama server henüz client'ı tetikleyemiyor.

- Client'ların server'dan gelen fonksiyon tetikleme isteklerini karşılayabilmeleri için bir fonksiyonumuz var: `on`

````ts
connection.on("receiveMessage", message => {
      const p = document.createElement('p')
      p.textContent = message
      $('body').append(p);
  })
````
- ilk parametre, HUB'ın tetikleyebilmesi için kullandığı method ismidir.
- ikinci parametre callback function'dır. Varsa gelen veriyi burada kullanabiliriz

## Tekrar Bağlanmaya Çalışma

- SignalR, client-server arasındaki bağlantı koptuğunda tekrar bağlantı kurmayı denemeye yarayan bir fonksiyion sağlar. ``.withAutomaticReconnect`` adlı fonksiyonumuzu build etmeden kullanabiliriz ve içerisine ``[1000,2000,3000]`` şeklinde ms cinsinden tekrar bağlantı kurulması için zaman aralıkları girebiliriz.

### Hiç Bağlantı Olmadan Yeniden Bağlantı Kurmaya Çalışmak

- Yukarıda, bağlantı _kopması_ durumunda kullandığımız fonksiyondan bahsettim lakin hiç bağlantı yokken tekrardan bağlantı kurmamızı sağlayan hazır bir fonksiyon yoktur.

- Bunu sağlamak için şöyle bir fonksiyon kullanabiliriz:

````ts
async function startConnection() {
    try {
      await connection.start()
    } catch (error) {
      setInterval(startConnection, 2000)
    }
  }
````