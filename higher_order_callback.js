/*
let person = {
    ad: 'emre',
    yas: 32,
    evliMi: false,
};

console.log(person.ad);
console.log(typeof person);
console.log(person instanceof Object);

let renkler = ['kırmızı'];
console.log(renkler[0]);
console.log(typeof renkler);
console.log(renkler instanceof Array);
console.log(renkler instanceof Object);

const fonksiyon = function () {
    console.log('Merhaba Dünya');
}
fonksiyon();

console.log(typeof fonksiyon);
console.log(fonksiyon instanceof Object);

// Primative Fonksiyon

let sayi = 5;

const fonk = function (sayi) {
    sayi = sayi * 2;
    return sayi;
}

console.log(fonk(sayi));
console.log(sayi);

// Object Fonksiyon

let myDizi = [1, 2, 3];
const diziElemanlariniİkiyleCarp = function (dizi) {
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] * 2;
    }
    return geciciDizi;
}
console.log(`Kopya Dizi : ${diziElemanlariniİkiyleCarp(myDizi)}`);

console.log(`Kaynak Ana Dizi : ${myDizi}`);
*/

let myDizi = [1, 2, 3];

// First Class Function
const ikiİleCarp = function (sayi) {
    return sayi * 2;
}
const ikiİleBol = function (sayi) {
    return sayi / 2;
}
const ucEkle = function (sayi) {
    return sayi + 3;
}

const diziİslemleri = function (dizi, islem) {
    let geciciDizi = [];
    for (let i = 0; i < dizi.length; i++){
        geciciDizi[i] = islem(dizi[i]);
    }
    console.log(geciciDizi);
}

/*
higher order function : Parametre Olarak Fonksiyon Alan Ve/Veya return Olarak Fonksiyon
Döndüren Fonksiyonlardır
*/
// diziİslemleri higher order Fonksiyondur
// ikiİlecarp veya ikiİlebol callback Fonksiyonlardır
diziİslemleri(myDizi, ikiİleCarp);
diziİslemleri(myDizi, ikiİleBol);
diziİslemleri(myDizi, ucEkle);


function adimiSoyle(ad, soyad) {
    console.log(`Merhaba ${ad} ${soyad}`);
}
adimiSoyle('Emre', 'Altunbilek');

function adimiBagir(ad, soyad, callback) {
    const mesaj = `MERHABA ${ad.toUpperCase()} ${soyad.toUpperCase()}`;
    callback(mesaj);
}
adimiBagir('emre', 'altunbilek', function (msj) {
    console.log(msj);
});


