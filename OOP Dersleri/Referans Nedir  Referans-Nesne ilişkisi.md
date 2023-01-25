# Referans Nedir ? Referans-Nesne ilişkisi



* RAM'in __Stack__ bölgesinde _tanımlanan_ ve __Heap__ bölgesindeki nesneleri işaretleyen-referans eden _değerlerdir-noktalardır_. 
  * Class, Interface, record ve abstract class __Heap'te__ tutulur ve referansları __Stack'tedir__
* Referans türlü değişkenlerin varsayılan değeri __null'dır__. 
  * Örnek: MyClass myclass; olarak bırakırsan myclass null olarak atanır 
* Referanssız nesne oluşturabilirsin ancak ilk başta referans ile işaretlemezsen tekrardan erişme hakkına sahip olmazsın ve _Heap'te_ gereksiz yer tahsis ederler ve bu referanssız nesneler C#'ta __Garbage Collector(GC)__ ile temizlenir.
* Object Initiliazer ile nesne oluştururken değer atamak için new Furkan(){field=10} mantığıyla yapabilirsin 

