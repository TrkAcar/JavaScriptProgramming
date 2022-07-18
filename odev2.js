/*
Math.random() ile rastgele sayı üretebilirsiniz. Bu fonksiyon 0 dahil - 1 hariç bir değer üretir mesela 0.56 gibi. Sonrasında bu ifadenin sonucunu istediğiniz aralığın üst sınıırıyla çarparsanız verilen aralıkta değer üretmiş olursunuz.

Mesela 0 ile 10 arasında bir sayı için (Math.random() * 10)+1 size 1 ile 10 arasında ki 10 da dahil sayı üretmiş olur.

Üretilen bu sayı ondalıklı olabilir bunu tam sayıya dönüştürmek için Math.floor() kullanabilirsiniz.

Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli.
Kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz.
 
Eğer kullanıcı sayıyı tam olarak doğru bilirse 10000 TL;
Eğer kullanıcı sayının basamaklarını bilirse yani 65 yerine 56 yazmıssa 5000TL
Eğer kullanıcı şanslı numaranın sadece bir basamağını bilirse 1000 TL kazanır.
*/


let uretilenSayi = (Math.random() * 90) + 10; // 1 İle 100 Arasında Random Sayı Üretir
uretilenSayi = Math.floor(uretilenSayi);

let uretilenSayiBirlerBasamagi = uretilenSayi % 10;
let uretilenSayiOnlarBasamagi = Math.floor(uretilenSayi / 10);
console.log(`Üretilen Sayinin Onlar Basamağı ${uretilenSayiOnlarBasamagi} Birler Basamağı ${uretilenSayiBirlerBasamagi}`);

let tahminEdilenSayi = parseInt(prompt(": Lütfen Tahmininizi yazınız : ", "10"));

let tahminEdilenSayiBirlerBasamagi = tahminEdilenSayi % 10;
let tahminEdilenSayiOnlarBasamagi = Math.floor(tahminEdilenSayi / 10);
console.log(`Tahmin Edilen Sayının Onlar Basamağı ${tahminEdilenSayiOnlarBasamagi} Birler Basamağı ${tahminEdilenSayiBirlerBasamagi}`);

console.log(`Sistemin ürettiği sayı ${uretilenSayi} Kullanıcının Girdiği Sayı ${tahminEdilenSayi}`);

if(tahminEdilenSayi === uretilenSayi)
{
    console.log(`Tebrikler Sayı ${uretilenSayi} Doğru Bildiniz Ödülünüz 10000 TL`);
}

else if((uretilenSayiBirlerBasamagi === tahminEdilenSayiOnlarBasamagi) && (uretilenSayiOnlarBasamagi === tahminEdilenSayiBirlerBasamagi))
{
    console.log(`Üretilen Sayının ${uretilenSayi} Tersiniz Bildiniz ${tahminEdilenSayi} Ödülünüz 5000 TL`);
}

else if((uretilenSayiBirlerBasamagi === tahminEdilenSayiBirlerBasamagi) || (uretilenSayiOnlarBasamagi === tahminEdilenSayiOnlarBasamagi))
{
    console.log(`Üretilen Sayının ${uretilenSayi} Sağdece Bir Basamağını ${tahminEdilenSayi} Bilebildiniz`);
}