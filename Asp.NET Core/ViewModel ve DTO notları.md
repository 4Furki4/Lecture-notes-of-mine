# ViewModel ve DTO notları



## Sözleşme/Kontrat mantığı



Backend'den yollanan ve clien'tın beklediği ViewModel'e contract denmektedir.







## ViewModel'i Entity'ye dönüştürme



* Amele yöntemi, hepsinin propertylerini manuel şekilde birbirine dönüştürmektir.





#### Implicit ve Explicit



public static implicit operator Entity_Ismi(ViewModelIsmi viewmodel)

{

​		return new Entity_Ismi {name=model.name vb.};

}



public static implicit operator ViewModelIsmi (Entity_Ismi entity_ismi)

{

​		return new ViewModelIsmi{name=entity_ismi.name vb.};

}

şeklinde yapılır ve bu sayede yeni bir VM veya entity nesnesi oluşturunca birbirlerine referans verebilir hale gelirler.

* PersonelViewModel model = new personel() vb. gibi



Explicit'te ise sadece (dönüştürülecek vm veya entity ismini bu şekilde paranteze yazıyoruz) tür dönüşümlerinde explicit dönüşümdeki gibi.