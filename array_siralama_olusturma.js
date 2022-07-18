const isimler = ['emre', 'ali', 'hasan', 'ayse'];

const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const ogrenciler = [
    { id: 12, isim: 'emre', yas: 25 },
    { id: 22, isim: 'hasan', yas: 15 },
    { id: 32, isim: 'fatma', yas: 55 },
    { id: 13, isim: 'nuriye', yas: 19 },
    { id: 92, isim: 'kemal', yas: 45 },
    { id: 15, isim: 'mustafa', yas: 75 },
    { id: 44, isim: 'ceren', yas: 30 },
];

// String Diziyi a-z Sıralama

/*
const adanZyeSiralaDizi = isimler.sort();
console.log(isimler);
console.log(adanZyeSiralaDizi);

const kisa = isimler.sort().reverse();
console.log(kisa);
*/

// String Diziyi z-a Sıralama

/*
// reverse Çalışması İçin Sıralanmış Bir Dizi Olması Lazım
 const zdanAyaSiralaDizi = adanZyeSiralaDizi.reverse();
 console.log(adanZyeSiralaDizi);
 */

// Sayıları Küçükden Büyüğe - Büyükden Küçüğe Sıralama

/*
const sirali = sayilar.sort(function (a, b) {
    return a - b;
});
console.log(sirali);
*/

// Nesneleri Sıralama

/*
ogrenciler.sort(function (a, b) {
    // Pozitif Negatif Veya 0 Değerini Döndüren Bir Yapıdır
    if (a.isim > b.isim) {
        return -1;
    } else if (a.isim < b.isim) {
        return 1;
    } else return 0;
});

console.log(ogrenciler);
*/

// arrayleri Kopyalama

let kopya = [];

// Yöntem 1
/*
for (let isim of isimler) {
    kopya.push(isim);
};
*/

// Yöntem 2
/*
kopya = Array.from(isimler);
*/

// spread Operator

kopya = [...isimler];

kopya.sort();

console.log(kopya);
console.log(isimler);

const isim = 'emre altunbilek';

let harflerDizisi = isim.split('');

harflerDizisi = [...isim];
console.log(harflerDizisi);

function sayilariTopla(...parametreler) {
    let toplam = 0;
    for (let s of parametreler) {
        toplam = toplam + s;
    }
    console.log(toplam);
};

sayilariTopla(1, 4);
sayilariTopla(1, 4, 5, 8);
sayilariTopla();