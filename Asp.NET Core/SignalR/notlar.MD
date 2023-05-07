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