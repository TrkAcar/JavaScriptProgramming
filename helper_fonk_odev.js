const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sonucuBul(sayilar) {
    const tekElemanlariİcerenDizi = sayilar.filter(function (sayi) {
        return sayi % 2 !== 0;
    });
    console.log("Tek Elamanlı Dizi" + tekElemanlariİcerenDizi);

    const sayilarinKareleri = tekElemanlariİcerenDizi.map(function (sayi) {
        return sayi * sayi;
    });
    console.log("Sayiların Karesi" + sayilarinKareleri);

    const toplam = sayilarinKareleri.reduce(function (genelToplam, sayi) {
        if (sayi > 10) {
            return genelToplam = genelToplam + sayi;
        } else {
            return genelToplam;
        }
    }, 0);

    return toplam;
}

console.log(sonucuBul(sayilar));

function kisaVersion(sayilar) {
    return sayilar.filter(sayi => sayi % 2 !== 0)
        .map(sayi => sayi * sayi)
        .reduce((genelToplam, sayi) => sayi > 10 ? genelToplam += sayi : genelToplam, 0);
}

console.log(kisaVersion(sayilar));