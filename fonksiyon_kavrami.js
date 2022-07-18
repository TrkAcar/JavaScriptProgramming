/* 
Bir Fonksiyon Oluşdurdukdan Sonra Oluşturduğumuz Fonksiyonu Çağırmazsak Hiç Bir Tetiklenme
Olmayacak Ve Fonksiyonumuz Çalışmayacakdır 
Fonksiyonda Sıra Önemli Değildir Bir Fonksiyonu Oluşturdukdan Sonra İstediğiniz Yerde Çağırabilirsiniz
*/

function selamVer()
{
    console.log("Merhaba"); // En Temel Hali İle Fonksiyon Örgüsü Soldaki Gibidir
}
selamVer();

/*
function -fonksiyonİsmimiz-(Var İse Fonksiyon Parametreleri)
{
    --fonksiyonumuzun yapacağı iş--
}
-fonksiyonİsmimiz-(Var İse Fonksiyon Argümanları)
*/

// Parametre Alan Fonksiyon, sayi1 Ve sayi2 Parametredir
function sayilariTopla(sayi1, sayi2)
{
    console.log("Sayıların Toplamı :" + (sayi1 + sayi2));
}
// 10 Ve 20 Bu Fonksiyonun Argümanlarıdır
sayilariTopla(10, 20);

//return : Bir Sonucu Geriye Döndürek İçin Kullanılıyor Ve İlgili Fonksiyoundan Çıkılmasını Sağlıyor
function sayilarinToplami(sayi1, sayi2)
{
    console.log(`Sayıların Toplamı : ${sayi1 + sayi2}`);
    return sayi1 + sayi2;
}

let sayilarinToplamii = sayilarinToplami(20, 50);
console.log(`Sayıların Toplamı2 : ${sayilarinToplamii}`);
console.log(typeof selamVer);


function belliAralikliSayilarinToplami(baslangicSayisi, bitisSayisi)
{
    let = toplam = 0;
    for(let i = baslangicSayisi; i <= bitisSayisi; i++)
    {
        toplam = toplam + i;
    }
    console.log(`Toplam ${toplam}`);
    return toplam;
}
let toplam11 = belliAralikliSayilarinToplami (0, 10);
let toplam22 = belliAralikliSayilarinToplami (30, 60);
console.log(`Toplam 1: ${toplam11}  Toplam 2: ${toplam22}`);