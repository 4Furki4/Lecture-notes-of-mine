# Nesne Nedir ve Nasıl Nesne Oluşturulur.

 

* Birbiriyle ilintilli verileri ve fonksiyonları-işlevleri bulunan, verileriyle işlem yapabilen ekosistemik verilerdir. Nesneler de bir tür veridir çünkü nesneler, Complex Type olan sınıflardan oluşan complex değerlerdir.
* Sınıflar bu nesneleri için modeller oluşturmamızı sağlar.
* Nesnelerin içerisinde lüzumsuz veri olmamalıdır.
  * Örnek: Personel nesnesinde arabaMarkasi field'ı lüzumsuzdur, her Personelin arabası olur mu ? ama yaşı vb. olur.
* Nesne oluşturmak için yalnızca sınıfları kullanabilirsin! Abstract class, interface ile vb. nesne oluşturulamayacağı daha sonra anlatılacak.
* Type nesne= new Type() ile nesne oluştururken Type türünde nesne değişkenini oluşturmamızın sebebi, stackten Heap'te tutulan nesneyi işaretleyip ona erişmektir.
  * C# 9.0 ile gelen yenilikle sadece __Type nesne = new()__ yazarak nesneyi işaretleyebilirsin. Bunu liste, dizi oluştururken de kullanabilirsin.
  * Değer türlü değişkenlerde (int vb.) = operatörü atama işlevini görürken referans türlü değişkenlerdeyse işaret etme görevini ifa eder.  

