// Soru 1 Klavyeden Girilen 3 Sayının Ortalamasını Alan Bir Uygulama Yazın
/*
let sayi1 = parseInt(prompt(": Lütfen İlk Sayınızı Giriniz :"));
let sayi2 = parseInt(prompt(": Lütfen İkinci Sayınızı Giriniz :"));
let sayi3 = parseInt(prompt(": Lütfen Üçüncü sayınızı Giriniz :"));
console.log(`Girilen İlk Sayı ${sayi1}, Girilen İkinci Sayı ${sayi2}, Girilen Üçüncü Sayı ${sayi3}`);

let grupToplami = sayi1 + sayi2 + sayi3;
let sonuc = grupToplami / 3;
sonuc = Math.floor(sonuc);
console.log(`Grup Toplamları = ${grupToplami} Ortalama : ${sonuc}`);
*/

// Soru 2 Klavyeden Kenarları Girilen Üçgenin Çeşidini Veren Uygulama Yazınız
/*
let ucgenKenar1 = parseInt(prompt(": Lütfen Üçgeninizin İlk Kenarını Giriniz :"));
let ucgenKenar2 = parseInt(prompt(": Lütfen Üçgeninizin İkinci Kenarını Giriniz :"));
let ucgenKenar3 = parseInt(prompt(": Lütfen Üçgeninizin Üçüncü Kenarını Giriniz :"));
console.log(`İlk Kenar ${ucgenKenar1}, İkinci Kenar ${ucgenKenar2}, Üçüncü Kenar ${ucgenKenar3}`);

if((ucgenKenar1 !== ucgenKenar2) && (ucgenKenar1 !== ucgenKenar3) && (ucgenKenar2 !== ucgenKenar3))
{
    console.log(`Girdiğiniz Kenarlar Birbirine Eşit Olmadığı İçin Cevap : Çeşitkenar Üçgen`);
}
else if((ucgenKenar1 == ucgenKenar2) && (ucgenKenar2 == ucgenKenar3))
{
    console.log(`Girdiğiniz Kenarlar Birbirine Eşit Olduğu İçin Cevap : Eşkenar Üçgen`);
}
else if((ucgenKenar1 === ucgenKenar2) || (ucgenKenar1 === ucgenKenar3) || (ucgenKenar2 === ucgenKenar3))
{
    console.log(`Girdiğiniz Kenarlardan Biri Eşit Olduğu İçin Cevap : İkizkenar Üçgen`);
}
*/

/*
Soru 3 Klavyeden Girilen Vize Veya Final Notlarına Göre Öğrencinin Dersi Geçip Geçmediğini 
Söyleneyen Bir Uygulama Yazınız (Geçme Notu : 50, Vizenin %40'ı, Finalin %60'ı Geçerlidir)
*/

/*
let vizeNotu = parseInt(prompt(`Lütfen Vize Notunuzu Giriniz : `, "50"));
let finalNotu = parseInt(prompt(`Lütfen Final Notunuzu Giriniz :`, "60"));

let ortalama = vizeNotu * 0.3 + finalNotu * 0.6;

if (ortalama >= 50)
{
    alert(`Tebrikler Dersi Geçtiniz Ortalamanız : ${ortalama}`);
}
else
{
    alert(`Malesef Kaldınız Ortalamnız : ${ortalama}`);
}
*/

//Soru 4 Kendi Adınız Ekrana 5 Kere Yazdıran Uygulamayı tüm Döngüler İle Yapınız
/*
let isim = "Tako";
let i;
//for

for(i = 0; i < 5; i++)
{
    console.log(`${isim}`)
}
*/

//while
/*
i = 0;
while(i < 5)
{
    console.log(`${isim}`);
    i++;
}
*/

//if
/*
if(i === 0)
{
    console.log(`${isim}`);
    console.log(`${isim}`);
    console.log(`${isim}`);
    console.log(`${isim}`);
    console.log(`${isim}`);
}
*/

// Soru 5 1'den 100'e Kadar Olan sayıların Toplamını Bulan uygulama Yapınız.
/*
let toplam = 0;
for(let i = 1; i < 100; i++)
{
    toplam = toplam + i;
}
console.log(`1'den 100'e Kadar Olan sayıların Toplamı : ${toplam}`);
*/
 
// Soru 6 1'den 10'a Kadar Olan sayıların Sıra İle ve Aralarınada Virgül Olacak Şekilde Yazan
// Bir Uygulamayı For Döngüsü İle Yazınız
/*
let yazdirilacakMetin = "";
for(i = 1; i <= 10; i++)
{
    if(i != 10)
    {
        yazdirilacakMetin = yazdirilacakMetin + i + ",";
    }
    else
    {
        yazdirilacakMetin = yazdirilacakMetin + i;
    }
}
console.log(yazdirilacakMetin);
*/

// Soru 7 Klavyeden Girilen Bir Sayının Faktöriyelini Hesaplayan Bir Program Yazın
/*
let girilenSayi = parseInt(prompt(`Lütfen Faktöriyel'i Hesaplanacak Sayıyı Giriniz`, "2"));
let faktoriel = 1;

while(girilenSayi > 0)
{
    faktoriel = faktoriel * girilenSayi;
    girilenSayi--;
}
console.log(`${faktoriel}`);
*/

// Soru 8 Aşşağıda Tanımı Verilen f(x,y) Fonksiyonun Klavyeden Girilen x Ve y Değerleri İçin Hesaplayınız
/*
x>0, y<0 ise f(x,y) = 4x+2y+4
x>0, y=0 ise f(x,y) = 2x-y+3
x<0, y>0 ise f(x,y) =  3x+4y+3   
*/
/*
let xDegeri = parseInt(prompt("x Değerini Giriniz", "1"));
let yDegeri = parseInt(prompt("y Değerini Giriniz", "1"));

let islemSonucu = 0;

if(xDegeri > 0 && yDegeri < 0)
{
    islemSonucu = 4 * xDegeri + 2 * yDegeri + 4;
}
else if(xDegeri > 0 && yDegeri == 0)
{
    islemSonucu = 2 * xDegeri - yDegeri + 3;
}
else if(xDegeri < 0 && yDegeri > 0)
{
    islemSonucu = 3 * xDegeri + 4 * yDegeri + 3;
}
console.log(`x : ${xDegeri} y : ${yDegeri} Ve Sonuç : ${islemSonucu}`);
*/

// Soru 9 100'lük Sistemde Verilen Notları Harfli Sistemde Gösteren Bir Uygulama Yazınız
/*
let yuzlukSistemdekiNot = parseInt(prompt("Notunuzu Giriniz", "50"));
let notSiniri = parseInt(yuzlukSistemdekiNot / 10);
console.log(`Yüzlük Sistemdeki not : ${yuzlukSistemdekiNot}, Sınır : ${notSiniri}`);

switch (notSiniri)
{
    case 10: console.log("Notunuz AA"); break;
    case 9: console.log("Notunuz BA"); break;
    case 8: console.log("Notunuz BB"); break;
    case 7: console.log("Notunuz CB"); break;
    case 6: console.log("Notunuz CC"); break;
    case 5: console.log("Notunuz CC'den Düşük"); break;
}
*/

// Soru 10 Çarpım Tablosu Oluşturan Bir Program Yazınız
/*
let yazdirilacakMetin = "";
for (let i = 1; i <= 10; i++)
{
    for (let j = 1; j <= 10; j++)
    {
        yazdirilacakMetin = yazdirilacakMetin + (i + "*" + j + "=" + (i * j)) + "\t";


    }
    
    console.log(yazdirilacakMetin);
    yazdirilacakMetin = "";

}
*/

/*
Soru 11 Sistem 100'e Kadar Bir Sayı Üretsin Kullanıcı Bu sayıyı tahmin etmeye çalışsın 
Kullanıcının Girdiği Değere Göre Kullanıcıyı Arttır Azalt Diyerek Uyaralım Kullanıcı 
Sayıyı Bulana Kadar Tamin İstemeye Devam Ederlim Ve Sayıyı Bulduğunda Kaç Deneme  
Sonra Bulduğunu Belirtelim
*/

/*
let uretilenSayi = parseInt(Math.random() * 101);
console.log(`Üretilen Sayı : ${uretilenSayi}`);

let tahmin = -1;
let tahminSayisi = 0;


while (tahmin != uretilenSayi)
{
    tahmin = parseInt(prompt("Lütfen Bir Sayı Giriniz"));
    tahminSayisi++;

    if(tahmin == uretilenSayi)
    {
        console.log(`Tebrikler Sayıyı Bildiniz Tahmininiz : ${tahmin} Üretilen Sayı : ${uretilenSayi} Kaç Denemede Bildiniz : ${tahminSayisi}`);
    }
    else if(tahmin < uretilenSayi)
    {
        console.log("Biraz Daha Çık");
    }
    else
    {
        console.log("Biraz Daha İn");
    }
}
*/

/*
Soru 12 Kullanıcıdan Sürekli Olarak Sayı Alan Ve De Kullanıcı 0'a Bastığında Girdiği Sayıların
Çarpımını Sonuç Olarak Gösteren Program Yazınız */

/*
let girilenSayi = parseInt(prompt("Lütfen Bir Sayı Giriniz"));
let carpimSonucu = 1;

while (girilenSayi != 0)
{
    carpimSonucu = carpimSonucu * girilenSayi
    girilenSayi = parseInt(prompt("Lütfen Bir Sayı Giriniz"));
}
console.log(`Çarpım Sonucu : ${carpimSonucu}`);
*/

/*
Soru 13 Kullanıcıdan Aldığınız İki Tamsayı(İntager) Değerin En Büyük Ortak Bölünenini Bulan Uygulamayı
Yazınız Örneğin : 14 Ve 35 Sayıları İçin Ebob = 7 Olmalıdır
*/

/*
let sayi1 = parseInt(prompt("Birinci Sayıyı Giriniz"));
let sayi2 = parseInt(prompt("İkinci Sayıyı Giriniz"));

let ebob =1, kontrol = 2;

while (kontrol <= sayi1 && kontrol <= sayi2)
{
    if (sayi1 % kontrol == 0 && sayi2 % kontrol == 0)
    {
        ebob = kontrol;
    }
    kontrol++;
}

if (ebob == 1)
{
    console.log("Bu Sayılar Aralarında Asaldır");
}
else
{
    console.log(`Bu Sayıların ortak Bölüneni : ${ebob}`);
}

*/

/*
Soru 14 Kullanıcıdan Aldğınız İntager Değere Kadar Olan Tüm Asal Sayıları Yazdıran Programı
Yazınız. 10 İçin Ekrana 2,3,5,7 Değeri Olmalıdır
*/
/*
let girilenSayi = parseInt(prompt("Bir Sayı Giriniz", "10"));
let gosterilecekMetin = "";
for (let i = 2; i <= girilenSayi; i++)
{
    asalSayiMi = true;

    for (let j = 2; j < i; j++)
    {
        if (i % j == 0)
        {
            asalSayiMi = false;
            break;
        }
    }
    if (asalSayiMi == true)
    {
        gosterilecekMetin = gosterilecekMetin + i + " ";
    }
}
console.log(gosterilecekMetin);
*/