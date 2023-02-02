# Partial Keyword'ü

## Nedir

- Sınıfların, arayüzlerin, struct'ların aynı veya farklı dosyalarda birden fazla parçasının tasarlanmasını sağlarken, bu yapıların tek bir bütün olarak kalmasını sağlar. Bu sayede kodun okunurluğunu ve yönetimini kolaylaştırabiliriz.

- Partial bir yapı olabilmenin şartı, aynı namespace altında, aynı projede ve elbette aynı isimde olmaktır.

## Kullanım Amaçları

- Kod Bölümleme

  - Büyük ve karmaşık sınıfların vb. daha okunabilir ve yönetilebilir parçalara bülenebilmesini sağlar.

- İş Bölümü

  - Ekiplerin aynı anda aynı sınıfı daha kolay bir şekilde kullanabilmesini, geliştirebilmesini sağlar.

- Code Generator

  - Code Generator sistemleri tarafından yazılan sınıfların ezilmemesini sağlar. Code Generator, partial olarak tanımlanılan kodu ezmez ve ilgili sınıf vb. kullanılmaya devam edilebilir.

## Kısıtlamalar

- Parça olması istenilen yapıların hepsi __partial__ anahtar kelimesiyle işaretlenmeli.

- Aynı aynı projede, namespace altında olmak zorundadırlar.

- Yapıların türleri ve isimleri aynı olmak zorundadır.

### Partial Olabilen Yapılar

- Class
- Abstract Class ( tanımlanma şekli => abstract partial class :) )
- Interface
- Struct
- Record

## Partial Metotlar

### Template Code

- Bir parçada metotların imzalarının hazırlanmasını, başka parçalardaysa bu metotların gövdelerinin yazılabilmesini sağlar. Bu sayede _şablon_ minvalinde tanımlamalar yaparak, diğer geliştiricilere kodda bulunabilecek metotları gösterebiliriz.

- Eğer imzaları yazılan ama gövde tanımlamaları yapılmayan _partial metotlar_ varsa, compiler tarafından görmezden gelinecektir ve kaldırılacaklardır.

- Metotları partial ile işaretlemek için imza bildirimi yapılmak zorundadır. Gövdesi yazılan metotları, partial ile işaretleyemeyiz ki, bir anlamı da yoktur.

### Source Generator

- Metotları partial olarak imzalarını yazarak, source generator'a, bu metot imzalarının gövdelerini uygulattırabiliriz.

### Partial Metotların Özellikleri ve Kısıtlamaları

- Run-Time'da olacakları kesin değildir, gövdeleri yazılmazsa compiler tarafından görmezden gelineceklerdir.

- Delegate'ler temsil edemezler. Delegate'ler sadece run-time'da olacağı kesin metotlar tarafından temsil edilebilirler.

- Geri dönüş tipleri __void olmak zorundadır__

- Static veya generic yapıda olabilirler.

- __extern ve virtual olamazlar__

- Gövdesi olmayan partial metotların erişim belirteçleri __private__'tır. Ancak gövdesi olan metotlar, public ile işaretlenebilir.
