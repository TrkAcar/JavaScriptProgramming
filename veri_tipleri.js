// Aslında 2 Tip Veri Türü Vardır
// Primitive Ve Referans Veri Türleri

// Primitive Tipleri : Number, String, Bollean, Undefined, Null, Symbol
// Referans Tipleri : Object

// Number :

let sayi = 50;
console.log(sayi);
console.log(typeof sayi);

let ondalikSayi = 25.545;
console.log(ondalikSayi);
console.log(typeof ondalikSayi);

let negatifSayi= -25;
console.log(negatifSayi);
console.log(typeof negatifSayi);

// String :

let isim = "Emre";
let soyİsim = 'Altunbilek';
 // kaçış karakteri
let cumle = 'Emre\'nin Bilgisayarı';
let cumle2 = "Emre'nin Bilgisayarı";
console.log(cumle);

let tamİsim = isim + ' ' + soyİsim;

// template Literal - backtick   --- (Altgr + , = ``) Tuşlarına ---
let tamİsim2 = `${isim} ${soyİsim}`
console.log("template literal : "+ tamİsim2);
console.log(`template literal ile yazdır ${tamİsim2}`);

console.log(tamİsim);
console.log(isim);
console.log(typeof isim);

// Bollean

let asalSayiMi = true;
console.log("Veri türümüzün değeri " + asalSayiMi + " veri tipi:" + typeof asalSayiMi);
console.log(`Veri türümüzün değeri ${asalSayiMi} veri tipi : ${typeof asalSayiMi}`);

// Undefined 
// Tanımlanmış Ama İçinde Herhangi Bir Değer Olmayan Değişkene JavaScript Direkt Alarak Undefinde Değerini Verir

let renk;
console.log(renk);
console.log(typeof renk);

// Null

let yas = null;
console.log("değer :" + yas + " veri tipi:" + typeof yas);