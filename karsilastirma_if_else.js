let benimYasim = 31, onunYasi = 25;

if (benimYasim < onunYasi)
{
    console.log("Ben Senden Küçüğüm");
}

else if (benimYasim == onunYasi)
{
    console.log("Yaşıtız");
}

else
{
    console.log("Ben Senden Büyüğüm");
}

let ismim = "Emre";

if (ismim == "Emre");
{
    console.log("Merhaba Emre");
    console.log("Nasılsın");
}

// if, else Kullanımında {Süslü Parantez} Kullanmak Çok Önemlidir Eğer Bir {Süslü Parantez} Kullanılmaz İse (else) En Yakın (if) Bloğu İçin Devreye Girer  

let sayi1 = 10, sayi2 = 20;

if (sayi1 > 20)
{
    console.log("sayi1 hem sayi2 den hem de 20 den büyükdür");
}

else
{
    console.log("Else çalıştır");
}

let asalSayiMi = true;

if (asalSayiMi == true) // if (asalSayiMi) İle Arasında Yazım Farkı Yokdur
{

}

let a = 5, b = 15, c = 0;

if ( a > b)
{
    c = a + b;
}

else
{
    c = a - b;
}
console.log("c değeri : " + c);

// ternary kısa if operatörü

c = (a > b) ? (a + b) : (a - b); // ? Operatörü if İçin Kullanılır : Operatörü İse else İçin Kullanılır 
console.log("c nin yani değeri : " + c);