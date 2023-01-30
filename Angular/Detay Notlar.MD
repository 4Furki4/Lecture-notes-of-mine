# Başka Detaylar

## Farklı Bir Kütüphaneyi Kullanırken

- Örneğin alertify gibi bir kütüphaneyi kullanmak istiyoruz. Bunu yapabilmek için bir ts dosyasında, `declare var allertify : var` yazmalıyız.

- Yalnız, bu şekilde kullanırken tanımlı metotlarımız karşımıza çıkmaz ve ayarlarımızı yapmamız zorlaşır. Ki yapsak bile genel bir ayar olmayacağı için tekrar tekrar yapmamız gerekir. Bu gibi sorunları çözmek için Angular'da sevisleri kullanabiliriz.

- Kurulan servisin içine yine `declare var allertify : var` yazılır. İlgili değişken üzerinden kütüphanenin metotlar kullanılarak kendi servisimiz içinde metotlar üretebilir, özelleştirebiliriz. Bu sayede servis olduğundan dolayı istediğimiz yerde enjekte ederek daha rahat, temiz ve konforlu şekilde kullanabiliriz.

````ts
import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string, alertType: AlertType) {
    alertify[alertType](message);
  }

}

export enum AlertType {
  Error = "error",
  Notify = "notify",
  Message = "message",
  Success = "success",
  Warning = "warning"
}

````

- Görüldüğü gibi, message metodumuz, string ve AlertType tipinde iki tane parametre alıyor ve bu sayede tip güvenlikli hale getirmiş oluyoruz.
