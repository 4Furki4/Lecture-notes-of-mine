# Helpers

------------------



## Url Helper 

* Url oluşturmak için yardımcı metotlar içeren ve o url'e dair bilgiler veren bir sınıf. 
* Action Metodu: Verilen controller ve actiona ait url oluşturmayı sağlar.
  * Url.Action("actionİsmi", "controllerİsmi", id)
  * Oluşturacağı URL, sistemde tasarlanan routea göre oluşturulur.
  * Protokol, port bilgisi vb. bulunmaz
* ActionLink Metodu: Action metoduyla kullanımı aynı, sadece Protokol, port bilgisi vb. bulunuyor.
* Content Metodu:
* RouteUrl Metodu: parametresinde kullanmak istediğimiz route yapılanmasının ismini girerek routea göre url oluşturabiliriz.