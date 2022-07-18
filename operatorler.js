// Aritmatik Operatörler + - * / %

// Number :

//let sayi1 = 10;
//let sayi2 = 2;

// let sonuc = sayi1 + sayi2;
// sonuc = sayi1 - sayi2;
// sonuc = sayi1 * sayi2;
// sonuc = sayi1 / sayi2;

// sonuc = sayi1 % sayi2;
// console.log(sonuc);

// // String :

// let isim = 'Emre';
// let yas = 30;
// let metinOlarakYas = '30';
// let soyİsim = 'Altunbilek';
// let tamİsim = isim + soyİsim;    // Nan = not a number 
// console.log(tamİsim);           // String Kullanılrken + Operatörü Dışında Bir Operatör Kullanırsak Nan İfadesi İle Karşılaşırız Alırız

//console.log(metinOlarakYas + 100);
//console.log(metinOlarakYas - 10);    // + Operatörü Dişında Bir Operatör Kullanırsak JavaScript Değişkenin İçindeki Sayıyı Direkt Olarak Number Olarak Tanımlar Ve Matematiksel Bir İşlem Yapar

// Arttırma Ve Azaltma Operatörleri

//sayi1 = sayi1 + 1; // Sağdaki Değişkeni hesapla Ve Sola At Mantığı JavaScript İçinde Geçerli
//sayi1++;     // sayi1 = sayi1 + 1 
//++sayi1;
//sayi1--;    //  sayi1 = sayi1 - 1
//--sayi1;
//console.log(sayi1);

//console.log("Sayı 2 :" + sayi2);
//console.log("Sayi 2 :" + sayi2++); // ++ Opertörleri Solda Kullanıldığı Zaman Verilen Değeri Önce Arttırma İşlemi uygulayıp Sonra Yazdırır Ama ++ Operatörleri Değişkenin Solunda Kullanıldığı Zaman YAzdıkdan Sonra Arttırma İşlemini Yapar
//console.log("Sayi 2 :"+sayi2);

//let sayi3 = 20;
//console.log(++sayi3);
//console.log(sayi3);


// Aritmetik Atama Operatörleri
// +=, -=, *=, /=, %=

let sayi1 = 10;
let sayi2 = 9;
//sayi2 += sayi1; // sayi2 = sayi2 + sayi1;
//sayi2 -= sayi1; // sayi2 = sayi2 - sayi1;
console.log(sayi2);


// İlişkisel Karşılaştırma Opertörleri

console.log(sayi1 > sayi2); // Soldaki Değer Sağdaki Değerden Büyükmü
console.log(sayi1 < sayi2); // Soldaki Değer Sağdaki Değerden Küçükmü
console.log(sayi1 <= sayi2); // Soldaki Değer Sağdaki Değerden Küçük Veya Eşitmi
console.log(sayi1 >= sayi2); // Soldaki Değer Sağdaki Değerden Büyük Veya Eşitmi
console.log(sayi1 != sayi2); // Soldaki Değer Sağdaki Değere Eşit Değil
console.log(sayi1 == sayi2); // Soldaki Değer Sağdaki Değere İle Karşılaştırır

let yas = 30;
let metinselYas = '30';
console.log(yas == metinselYas); // '==' Operatöründe Sağdece Değerler Karşılaştırılır
console.log(yas === metinselYas); // '===' Opertöründe Hem Değere Hem De Veri Tipine Bakılır
console.log(yas !== metinselYas); // '!' Operatörü Değildir Olarak Görev Alır

// Mantıksal Operatörler Ve( && ), Veya( || )

console.log( (sayi1 < 5) && (sayi2 < 10) ); // Sonuçda Bir False Değer Çıkarsa Bütün Sonuç False İle Sonuçlanır
console.log( (sayi1 > 5) || (sayi2 < 10) ); // Sonuçda Bir True Değer Çıkarsa Bütün Sonuç True İle Sonuçlanır

let sonuc = 4 + 10 / 2 - 1 * 5;
// 4 + 10 / 2 - 5
// 4 + 5 - 5
// 9 - 5
// 4
let sonuc2 = (4 + 10) / ( (2 - 1) * 5);
// (4 + 10) / (1 * 5)
// (4 + 10) /  5
// 14 / 5
// 2.8
console.log(sonuc);
console.log(sonuc2);