# Soyut Sınıf (Abstract Class)



* Metotların sadece imzalarını taşır.
* virtual-override ilişkisini yaparız esasında ancak tek farkı virtual-override ilişkisinde metodu ezmek zorunda değiliz, abstract classlarda ezmek (daha doğrusu gövde kısmını oluşturmak) zorundayız.
* Abstract üyelerin gövdeleri kalıtım alan sınıfta __override__ edilerek yazılır.
* Metotlara __abstract__ anahtar kelimesini eklersek abstract metot olmuş olur ancak abstract olmayan memberlar da bulunabilir ve bunlar override edilmek zorunda değillerdir. 
* __Abstract classlardan nesne yaratılmaz! çünkü zaten üyeleri derived classlarda kullanılmak zorunda.__
* Abstract elemanların erişim belirleyicisi private olamaz.

