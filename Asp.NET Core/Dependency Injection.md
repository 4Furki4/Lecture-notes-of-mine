# Dependency Injection

* Dependency Injection aslında SOLID prensiplerinin D'ye(Dependency Inversion) karşılık gelir. Yani bu prensibin sağlanması bağımlılık zerk edilmesiyle gerçekleşir.



#### BAĞIMLILIK NEDİR

* Bir sınıfın içindeki bir metotta vs. bir başka sınıfın nesnesini oluşturmak, diğer nesneye bağımlı olmak, bağımlılık demektir!





Kodlamada ihtiyaçlar değiştikçe kaynak kod değişir ve bu kaynak kodlara bağımlılık en bariz göstergesidir. Sürekli sınıfları değiştirmek, yenisini ekleme bağımlılığı.

Üst bir sınıfla diğer sınıfları içine dahil ederiz ve üst sınıfı parametre yoluyla çalışılacak sınıfa zerk ederiz, böylece bağımlılığı __soyutlar__.





## IoC (Inversion of Control)

* Sınıfımız bazen birçok fazla arayüz tarafından referans edilir ve bu bir külfettir.
* Bu külfeti azaltmak için gerektiği yerde bağımlılığı kullanıp atacak bir yapıdır IoC





* IoC'ye bir sınıfın nesnesini eklemek için services(ServiceCollection) .Add ile ekleriz ve varsayılan olarak singleton olarak davrranır.



`builder.Services.AddSingleton<ILoggerService,Console_Logger>();` _PARAMETRESİZ CONST_

`builder.Services.AddScoped<ILoggerService>(p=>new Console_Logger(_parametre_)); ` _PARAMETRELİ CONST_





DI controllerın constructor'ından yapılıyor lakin action bazlı DI yapmak için action metodun parametresine `[FromServices] ILog log` yazılır.





View'lerde kullanmak içinse `@inject namespace...ILog log` yazılır.