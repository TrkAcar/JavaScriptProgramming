const sayilar = [1, 2, 3, 4, 5, 6];

// every Bütün Elemanların Şarta Uyması Lazım
const sonuc = sayilar.every(function (sayi) {
    return sayi < 10;
});

// some Bir Tane Bile Şarta Uyan Değer Varsa Sonuç True Çıkar
const sonucSome = sayilar.some(function (sayi) {
    return sayi > 10;
});

console.log(sonuc);
console.log(sonucSome);