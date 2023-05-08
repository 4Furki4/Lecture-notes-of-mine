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

## Hub'daki Eventler

- Client'lardaki bağlantı değişimlerini tabii ki Hub'da yakalayamazsak olmazdı, bunun için iki tane method'u override ederek kullanabiliriz.

### OnConnectedAsync

- Herhangi bir client Hub'a bağlandğında fırlatılan event'tir.

- Ayrıca Context.ConnectionId ile, bağlanan client'ın Id'sini yakalayabiliriz.

- Örnek:
````csharp
  public override async Task OnConnectedAsync()
  {
      ClientIds.Add(Context.ConnectionId);
      await Clients.All.SendAsync("userJoined", ClientIds);
  }
````

### OnDisconnectedAsync

- OnConnectedAsync'in tam tersidir, bir client'ın bağlantısı koptuğunda fırlatılan event'tir.

- Örnek:
````csharp
  public override async Task OnDisconnectedAsync(Exception? exception)
  {
      ClientIds.Remove(Context.ConnectionId);
      await Clients.All.SendAsync("userLeft", ClientIds);
  }
````

## IHubContext

- Tabii ki her işlemi tek bir sınıf aracılığıyla yönetemeyiz ve bu Hub olan sınıfımızın instance'larını oluşturarak, Hub özelliğini kullanamıyoruz. Lakin IHubContext adlı interface'i IoC'den istediğimiz Hub sınıfınızı generic olarak vererek çağırabiliyoruz ve istediğimiz farklı sınıflar içerisinde Hub'ımızı kullanabiliyoruz.

- Örnek:

````csharp
    public class MyBusiness
    {
        readonly IHubContext<MyHub> hubContext; // MyHub adlı Hub kalıtımı olan sınıfımızı generic olarak verdik
        public MyBusiness(IHubContext<MyHub> hubContext)
        {
            this.hubContext = hubContext; // IoC containerın, gerekli instance'ı vermesini sağladık.
        }
        public async Task SendMessageAsync(string message)
        {
            await hubContext.Clients.All.SendAsync("receiveMessage", message); // sadece hubContext ekleyerek aynı metodu Hub sınıfının dışında yazabildik
        }
    }
````

````csharp
builder.Services.AddTransient<MyBusiness>(); // IoC'ye MyBusiness sınıfımızı ilgili bağımlılıklar çözülebilmesi için verdik ve gerektiğinde IoC'den kendisini de alabileceğiz.
````


````csharp
public class HomeController : Controller
    {
        readonly MyBusiness myBusiness;

        public HomeController(MyBusiness myBusiness)
        {
            this.myBusiness = myBusiness; // Örneğin ilgili sınıfımızı controller'da çağırabildik.
        }

        [HttpGet("{message}")]
        public async Task<IActionResult> Index(string message)
        {
            await myBusiness.SendMessageAsync(message);
            return Ok();
        }
    }
````

## Strongly Typed Hubs

- ``SendAsync`` metodunu kullanırken client'ta çağırılacak fonksiyon isimlerini string olarak verdiğimizde debugging kısmında bunları kontrol edemiyoruz.
- Buna çözüm olarak bir interface tanımlıyabiliriz ve bu interface içerisindeki metot imzalarını, fonksiyon isimleri için kullanabiliyoruz.

````csharp
  public interface IMyHub // Örnek bir strongly typed hubs için interface
  {
      Task userJoined(List<string> ClientIds);
      Task userLeft(List<string> ClientIds);
  }
````

- Bu interface'i ``MyHub : Hub<IMyHub>`` olarak vermemiz gerekiyor.

- Bu şekilde yapınca `Clients.All.` yapınca imzasını tanımladığımız metotlar gelecektir ve client tarafında interface'de tanımladığımız isimdeki fonksiyonlar çağrılacaktır.

## Client Türleri

- `Clients.` dediğimizde 3 tür client gelir: All, Caller, Others

### Caller

- _Sadece_ server'a yani hub'a bildirim gönderen client'la iletişim kurmaya yarar.

### All

- Hub'a bağlı olan tüm client'larla iletişim kurmaya yarar

### Others

- Hub'a bağlı olan tüm client'lardan sadece bildirimi yapan client hariciyle iletişim kurmaya yarar.

- Tabii, client'ta function çağırmaya yarayan ``SendAsync`` fonksiyonumuz, client türlerine göre davranış değiştirmektedir.

## Özelleştirilmiş Hub Metotları


### AllExcept

- Belirtilen client'lar hariç server'a bağlı client'lara bildiride bulunmaya yarar.

- ``Clients.AllExcept(IEnumerable Ids)`` şeklinde dışlanacak Id'leri alan bir collection parametre alır. Yahut string şeklinde tekil değer de alabilir.

### Client

- Server'a bağlı olan client'lardan sadece belirtilen connectionId'ye sahip olan client'a bildiride bulunmaya yarar.

- `Clients.Client("zYTi_DilashZq2bY-CMJzg")...` şeklinde kullanılır.


### Clients

- Server'a bağlı olan client'lardan belirlilenlen clientId'lere sahip olan client'lara bildiride bulunmaya yarar.

## Group

- Belirtilen grubtaki tüm clientlara bildiride bulunmaya yarar.

- Bunu yapabilmek için öncelikle grup oluşturmalıyız ve bu gruplara client'ların abone olabilmelerini sağlamalıyız.

- Group oluşturmamızı ve grouplara client'ların abone olmasını sağlayan Group property'sini kullanırız
````csharp
    public async Task addGroup(string connectionId, string groupName)
    {
            await Groups.AddToGroupAsync(connectionId, groupName); // groupName'de verilen isimde grup yoksa grubu oluşturur ve connectionId'yi gruba ekler, ilgili grup varsa sadece connectionId'yi gruba ekler
    }
````

- Herhangi bir group'taki client'larda bildiride bulunmak için:

````csharp
    public async Task SendMessageAsync(string message, string groupName)
    {
        await Clients.Groups(groupName).receiveGroupMessage(message); //verilen isme sahip gruptaki client'larda receiveGroupMessage fonksiyonunu tetikleriz ve mesajımızı parametre olarak göndeririz.
    }
````

### GroupExcept

- Bir ek parametreyle, grupta dışlamak istediğimiz client'ları belirlememizi sağlar.

### Groups

- Birden çok grubtaki clientlarda bildiride bulunmamıza sağlayan metottur.

### OthersInGroup

- Bildiride bulunan client haricinde gruptaki diğer tüm client'lara bildiride bulunmayı sağlayan metottur.
