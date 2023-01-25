# Docker Eğitimi - Notlar

## Container Nedir?

- Container'lar birbirinden bağımsız çalışan işletim sistemleri ve uygulamaların bir araya getirilmesiyle oluşan birimlerdir.

- Docker ise işletim sistemi ile container'lar arasındaki iletişimi sağlayan bir araçtır.

- Container'lar birbirinden bağımsız çalıştığı için bir container'ın içindeki işletim sistemi veya uygulamalar diğer container'lar tarafından etkilenmez.

- Container'ların kendilerine ait Processleri, Servisleri, Ağları vardır ve izole edilmiş bir ortamda çalışırlar.

- Açıkçası VM'e benzer bir yapıya sahiptirler lakin Containerlar işletim sisteminin Kernel'ını(çekirdeğini) paylaşırlar.
- Container'lar VM'lerden daha hızlıdır ve daha az kaynak kullanırlar çünkü VM'lerde işletim sistemi ve uygulamaların bir kopyası oluşturulurken Container'lar ise işletim sisteminin Kernel'ını paylaşmaları sayesinde daha hızlı ve daha az kaynak kullanırlar.

## Image Nedir?

- Image'lar ise container'ların oluşturulması için kullanılan birimlerdir. Örneğin Visual Studio'yu kullanarak bir uygulama geliştiriyorsunuz ve bu uygulamayı bir container içerisinde çalıştırmak istiyorsunuz. Bu durumda Visual Studio'nun bir image'i oluşturulur ve bu image ile container oluşturulur. Yani image kaynak kodu, container ise bu kaynak kodun çalıştırılmasıdır.

- Image'lar resmi ve gayriresmi olarak paylaşılabilir ve Docker Hub üzerinden paylaşılmaktadır.

### Komutlar

- Docker pull _imageName_
  - Image indirir.

- Docker images
  - Image listesini gösterir.

- Docker run _imageName_
  - Image'ı çalıştırır. Eğer image yoksa indirir ve çalıştırır.

- Docker ps || Docker Container ls
  - Çalışan container'ları listeler.

- Docker ps -a || Docker Container ls -a
  - Tüm container'ları listeler.

- Docker run --name _containerName_
  - Image'ı çalıştırırken container'ın adını belirler. Bu sayede bir setup oluşturabilir ve tekrar tekrar kullanabiliriz.

- Docker start _containerName_
  - _containerName_ adlı container'ı çalıştırır.
  - Lakin container arka planda çalışır. Yani kullandığımız terminalde bir işlem yapamayız.
- Docker stop _containerName_
  - _containerName_ adlı container'ı durdurur.
  - _containerName_ yerine _containerId_ de kullanılabilir.

- Docker rm _containerName_ || _containerId_
  - Mezkur container'ı siler.
  - Önceden oluşturulmuş containerlar kullanılmasa da bellekte yer tutar.
  - Çoklu silme işlemi için aralarında boşluk bırakarak birden fazla container adı veya id'si yazılabilir.
    - Tamamını silmek için $(docker ps -aq) veya $(docker container ls -aq) yazılabilir.

### Tag Nedir?

- Tag, image'ın versiyonunu belirtir.
  - latest, 1.0.0, 1.0.1, 1.1.0 gibi.
- Kullanımıysa şu şekilde: _imageName:tag_

- Image ismini özelleştirerek kullanmak için de kullanılır.
  - Docker image tag _imageName:tag_ _newImageName:tag_

### Docker Kullanırken Terminal

- Bir image'ı çalıştırıp container oluşturunca terminalde bir işlem yapamayız. Terminali kullanmaya devam etmek için detached mode kullanılabilir:
  - docker run -d _imageName_
  - Bu şekilde çalıştırılan container'lar arka planda çalışır.
  - Tekrardan bağlanmak içinse docker attach _containerName_ veya _containerId_ kullanılır.

#### Detached Mode ve Attached Mode için Örnek

- Sürekli log işlemi yapan bir container'ı detached modda kullanırsak logları göremeyiz tabii.
- Bulunan andan itibaren logları görmek içinse attached modda kullanmamız gerekir.
- Tüm logları görmek içinse ``docker logs containerName veya containerId`` kullanılır.

##### -it Nedir?

- docker run -it _imageName_ komutu ile image'ı interaktif bir şekilde çalıştırabiliriz.
- Bu şekilde çalıştırılan container'lar terminal üzerinden çalışır ve terminal üzerinden bir işlem yapabiliriz, örneğin değişkenleri atayabiliriz.

## Port Mapping

- Her container'ın bir portu vardır. Dışarıdan bu containerlar üzerindeki uygulamalara erişmek için bu portlar kullanılır.

- Docker run -p _hostPort:containerPort_ _imageName_
  - Bu şekilde çalıştırılan container'lar dışarıdan erişilebilir hale gelir.
  - Örneğin bir web uygulaması çalıştırıyoruz ve bu uygulamayı dışarıdan erişilebilir hale getirmek istiyoruz. Bu durumda container'ın 80 portunu host'un 8080 portuna bağlamamız gerekir.
  - docker run -p 8080:80 _imageName_
  - Bu şekilde çalıştırılan container'lar dışarıdan erişilebilir hale gelir. Hatta farklı portlarla aynı container'a bağlanabiliriz.

- Peki bir Mongo Db'ye farklı porttan bağlanıp ardından dbde değişiklik yapıp container'ı sonlandırırsak değişiklikler kaydedilir mi?
  - Hayır. Container'ın içindeki veriler, containerlar stateless olduğu için tamamen silinir. Bu yüzden container'ı silmeden önce verileri dışarı aktarmamız gerekir.
  - Burada volume mapping devreye giriyor.

## Volume Mapping

- Container'ın içindeki verileri dışarı aktarmak için kullanılır.
- Container içindeki verilerin gitmemesi için kayıt edilecek klasörün Docker host içindeki adresini belirtiriz.
- volume mapping yapmak için -v parametresi kullanılır.
- docker run -v __hostPath:containerPath__ _imageName_
  - buradaki hostPath, Docker host içindeki klasörün adresidir, bunu resources kısmındaki klasörlerde arar.

### Container ve Image Bilgilerini Gösterme

- docker inspect _containerName_ veya _containerId_
  - Container hakkında bilgi verir.

### environment variable

- docker run -e _variableName=variableValue_ _imageName_
  - Bu şekilde çalıştırılan container'lar içindeki uygulamalara _variableName_ adlı değişkeni _variableValue_ değeri ile gönderir.

### --link

- Farklı container'lar arasında bağlantı kurmak için kullanılır.
- docker run --link _containerName:aliasName_ _imageName_
  - Bu şekilde çalıştırılan container'lar içindeki uygulamalara _aliasName_ adlı değişkeni _containerName_ adlı container'ın ip adresi ile gönderir.
  - alias, container'ın ip adresini değiştirmek için kullanılır. Php'de bu db'dir mesela.
