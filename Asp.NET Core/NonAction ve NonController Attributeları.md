# NonAction ve NonController Attributeları



* Controllerlar bir iş yapıcı görevi görmezler, denetleyici olduklarından iş başka bir yerde yapılır ve controller onu çağırır. 
* Yani action metotlarımız iş yapmaz, başka metotları çağırır.
* İş yapmamız gereken durumlardaysa-ki tavsiye edilmez bu durum- bu action metoda route ile erişememiz gerekir, istek alamaz halde olması icap eder.
* Bu erişim engellerini [NonAction] ile yaparız, action'un üst satırına yazılır.
* NonController attributesiyse Controller'ımızı istek alamaz hale getirir ve controller artık normal bir sınıf haline gelmiş olur.  

