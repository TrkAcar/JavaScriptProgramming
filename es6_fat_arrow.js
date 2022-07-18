function selamVer() {
    console.log("Merhaba")
}
selamVer();

//-----------------------------------------------------------------------------------------------
// Değişkene Fonksiyon Atama
const selamVerDegisken = function () {
    console.log("Merhaba selamVerDegisken");
}
selamVerDegisken();

//-----------------------------------------------------------------------------------------------
// fatArrow kullanımı
const fatArrow = _ => {
    console.log("Merhaba fatArrow");
}
fatArrow();

//-----------------------------------------------------------------------------------------------
// Değer Döndürmeli Fonksiyonlar
function karesiniAl(sayi) {
    return sayi * sayi;
}
console.log(karesiniAl(5));

const karesiniAlDegisken = function (sayi) {
    return sayi * sayi;
}
console.log(karesiniAlDegisken(7));

//-----------------------------------------------------------------------------------------------
// fatArrow Değer Döndürmeli Fonksiyonlar

const fatArrowParametreli = (sayi) => {
    return sayi * sayi;
};
console.log(fatArrowParametreli(8));

const fatArrowParametreliKisa = sayi => sayi * sayi;
console.log(fatArrowParametreliKisa(9));

const sayilariTopla = (s1, s2) => s1 + s2;
console.log(sayilariTopla(5, 10));