const sayilar = [1, 2, 3, 4, 5, 6];

function kendiMapYapim(sayilar, islem) {
    const yeniDizi = [];
    for (let i = 0; i < sayilar.lenght; i++) {
        yeniDizi.push(islem(sayilar[i]));
    }
    return yeniDizi;
}

const olusanYeniDizi = kendiMapYapim(sayilar, function (sayi) {
    return sayi / 2;
});
console.log(olusanYeniDizi);

/*
const yeniSayilar = sayilar.map(function (sayi) {
    return sayi * 2;
});

console.log(sayilar);
console.log(yeniSayilar);
console.log(sayilar);

const kitaplar = [
    { adi: '1', sayfaSayisi: 30},
    { adi: '2', sayfaSayisi: 40},
    { adi: '3', sayfaSayisi: 50},
];

const sayfaSayilari = kitaplar.map(function (kitap) {
    return kitap.sayfaSayisi;
});

console.log(sayfaSayilari);

const kisiler = [
    { adi: 'Emre', sayadi: 'Altunbilek'},
    { adi: 'Hasan', sayadi: 'Yılmaz'},
    { adi: 'Ali', sayadi: 'Koç'},
];

const yeniİsimler = kisiler.map((kisi) => `${kisi.adi} ${kisi.sayadi}`);
console.log(yeniİsimler);
*/