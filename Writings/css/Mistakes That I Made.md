---
Öncelikle her şeyin nasıl başladığını birazcık anlatmak istiyorum.
Ekseriyetin aksine HTML, CSS, JavaScript öğrenerek web geliştiriciliğine başlamadım, kısaca oyun yapmak istediğim için C# öğrendim, sonra vazgeçip .NET'e yöneldim. .NET Web Application öğrenmeye çalışırken C# kodunun ve HTML markup'larının birlikte kullanıldığı View denilen yapıları kullanırken üstünkörü HTML ve CSS öğrendim. Aslında CSS için patika.dev'in içeriklerini tükettim lakin kendi iyilikleri için söylemeliyim ki birçok önemli temel konu es geçilip apartopar bootstrap denilen bir kütüphane öğretildiğinden CSS temellerimi güzel atamadım. Tabii ki başka kaynakları kullanıp hakkını vererek öğrenmeliydim, aynı anda birçok şey öğrenirken bazen böyle ihtimamsızlıklar olabiliyor.
Mart ayında Recoded tarafından düzenlenen front-end web development bootcamp'ine kabul alınca kafamdaki tüm CSS bilgilerini silip yeni bir başlangıç yaptım. CSS'i iyi bilmediğimi biliyordum ama bilmediğim temel özelliklerin bu kadar fazla olduğunu bilmiyordum. CSS ise öyle bir dil ki, temellerini bilmeyince gerçekten yazması ızdırap oluyor. Son bir ayımın tamamını ayırdığım CSS'i başkaları öğrenirken temellerini güzel atabilmeleri için bazı tavsiyeler vermek istiyorum. Mübrem ve temel gördüğüm konuları başlıklar altında kısaca özetleyip kendim öğrenirken kullandığım kaynakları paylaşacağım.
---

Box Model
Öncelikle, HTML sayfalarında her şey kutu olarak sayılır. Her ne kadar herhangi bir elementi border-radius kullanarak kutuya benzemeyen bir hale getirseniz de o element hâlâ bir kutudur. Bu kutular yani elementler sayfamızda elbette bir yer kaplar ve bu kapladıkları yerler, display denilen bir özellik (property) tarafından belirlenir. Her elementin varsayılan bir davranışı olsa da bunları ihtiyacımız doğrultusunda değiştirebiliyor olmak, istediğimiz karmaşıklıktaki sayfa düzenini sağlarken işimizi çok kolaylaştırır.
Box model konusunu anlatırken display'den bahsedip box-sizing'ten bahsetmezsem eksik kalır. Özetle, margin ve padding özelliklerinin elementimize uygulanırken width ve height'ın nasıl hesaplanacağını belirler. 
Öğrenmeniz gereken ve yaygın kullanılan display ve box-sizing değerleri.Box Model Tavsiye Kaynaklar
Box-sizing | Web Dev Simplified
Inline, inline-block, block | Kevin Powell
Flexbox | Kevin Powell
Flexbox froggy, pratik yapmak için bir flexbox oyunu. Kesinlikle deneyin.
Grid | Kevin Powell
Grid garden, yukarıdaki oyunun yapımcılarından grid oyunu.

Burada ilk kaynak tavsiyelerimi vermişken şunu da eklemek istiyorum: Lütfen videoları, özellikle bir özelliği tanıtan videoları izleyip geçmeyin, izlerken ve izledikten sonra kendiniz yazmaya çalışın. Hatta önceki öğrendiklerinizle birleştirerek sınırları zorlayın. Böylelikle ileride kendi projelerinizi yaparken "o kadar video izledim, neden hâlâ hiçbir şey yapamıyorum" dedirten tutorial hell'e düşmeyin.
