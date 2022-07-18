let isimler = ["emre","hasan","ayşe"];

console.log(isimler.toString()); // Array Elemanlarını String Bir Şekilde Yazdırır
console.log(isimler.join(" | ")); // Array Elemanlarının Aralarına Verilen İşareti Koyarak Ayırır


let diziElemanSayisi = isimler.push("ali"); // Array Elemanlarının Sonuna Eleman Ekleyip Dizi Uzunluğunuda Geri Değer Olarak Döndürür
console.log(isimler.toString() + "Dizi Eleman Sayısı :" + diziElemanSayisi);

let dizidenCikarilanEleman = isimler.pop(); // Dizinin Son Elemanını Siler Ve Verilen Değişken İçinde Saklayabilir
console.log(isimler + " Çıkarılan Eleman : " + dizidenCikarilanEleman);

isimler.shift(); // Dizinin İlk Elemanını Siler
console.log(isimler.toString());

isimler.unshift("Yeni Eleman"); // Dizinin Başına Eleman Ekler
console.log(isimler.toString());

delete isimler[1]; // Dizi İçerisinden Verilen İndexdeki Değişkeni Siler
console.log(isimler.toString() + " " + isimler[1]);

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8];

sayilar. splice(8, 0, 9, 10); // İlk Olarak Başlanacak İndex Numarasını Sonra Kaç Adet Eleman Silinecek Geriyede String Değer Döndürür
console.log(sayilar.toString());

let silinenler = sayilar.splice(0, 4); // Silinecek İndex Aralıklarını Giriyoruz Ve Silinen Sayıları Bir Değişken İçinde Yine Array Olarak Tutuyor
console.log(sayilar.toString());
console.log(silinenler);

let silinenler2 = sayilar.splice(0, 4, 15, 20, 25);// Silenen Değerler Yerine Başka Değerler Ekledik
console.log(sayilar.toString());
console.log(silinenler2);

let tekSayilar = [1, 3, 5];
let ciftSayilar = [2, 4, 6];

let sayilarim = tekSayilar.concat(ciftSayilar); // İki Farklı Diziyi Birlerştirmek İçin Kullanılır
console.log(sayilarim.toString());

let yeniDizi = sayilarim.slice(2, 4); // Verilen Dizideki İndex numaraları arasındaki Değerleri Keserek Yeni Bir Dizi Oluşturur Ve Ana Diziye Zarar Vermez
console.log(yeniDizi.toString() + "   " + sayilar.toString());