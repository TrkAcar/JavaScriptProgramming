// Primitive Tipli Veriler Değişkenlerin Değerleri Tutarlar

let yas = 32;
let yeniYas = yas;

yas = 40;

let isim = 'emre';
let yeniİsim = isim;
isim = 'hasan';

console.log(yas, yeniYas);
console.log(isim, yeniİsim);

// Referans Tipli Veriler = Array, Değişken Adreslerinin Tutarak Yani Referans Adresinin Yazarlar Ve Buna Göre İşlem Yaparlar

let renkler = ['kırmızı', 'yesil'];
let yeniRenkler = renkler;

renkler = ['kırmızı', 'yesil'];
renkler.push('mavi');

console.log(renkler, yeniRenkler);

let ogrenci = {
    ad: 'emre',
    yas: 32
}

let yeniOgrenci = ogrenci;

ogrenci.yas = 36;

console.log(ogrenci, yeniOgrenci);