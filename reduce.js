const sayilar = [1, 2, 3, 4, 5];

/*
function toplamiBul() {
    let toplam = 0;
    for (let i = 0; i < sayilar.length; i++) {
        toplam = toplam + sayilar[i];
    }
    console.log(toplam);
}

toplamiBul();

sayilar.reduce(function (pre, curr, index) {
    console.log(pre, curr, index);
}, 0);
*/

/*
const yeniDizi = sayilar.map(function (sayi) {
    return sayi * 2;
});

const yeniDiziWithReduce = sayilar.reduce(function (dizininOncekiHali, oankiSayi) {
    dizininOncekiHali.push(oankiSayi * 5);
    return dizininOncekiHali;
}, []);

console.log(yeniDizi);
console.log(yeniDiziWithReduce);
*/

// reduce İle filter Ve find Uygulaması

/*
const yeniDizi = sayilar.filter(function (sayi, index) {
    return sayi > 3;
});

const yeniDiziWithReduce = sayilar.reduce(function (pre, sayi, index) {

    if (sayi > 3) {
        pre.push(sayi);
    }
    return pre;
}, []);

console.log(yeniDizi);
console.log(yeniDiziWithReduce);
*/

const bulunanEleman = sayilar.find(function (sayi, index) {
    return sayi === 2;
});

console.log(bulunanEleman);

const bulunanElemanWithReduce = sayilar.reduce(function (pre, sayi, index) {
    if (sayi === 2) {
        return sayi;
    } else {
        return pre;
    }
}, undefined);

console.log(bulunanElemanWithReduce);