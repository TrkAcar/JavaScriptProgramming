let myAge = 31;
console.log(myAge);

console.error('Yanlış İşlem'); // Konsola ERROR Mesajı Göndermek İçin Kullanılır
console.warn('Şifreniz Keşke Daha Uzun Olsaydı'); // Konsola HATA Mesajı Gönderir
console.clear(); // Konsolu Temizlemek İçin Kullanılır


console.table({ad:"Emre", yas:31}) // Konsola Tablo Görünümünde veri Yazdırmamıza Olanak Sağlar

console.time("id");
console.log("aaaa");
console.log("aaaa"); // Arada yazılan Kodların Çalışma Zamalarını Konsolda Belirtir
console.log("aaaa");
console.timeEnd("id");
console.clear();


 let    sayi1 = 50;
//alert(sayi1); // Web Sitemizde Dışarıya Veri(bilgi) Verirken Kullanabiliriz
let girilenSayi = prompt("Bir Sayı giriniz"); // Web Sitemizde Dışarıdan Veri Alırken Kullanabiliriz
console.log(girilenSayi);