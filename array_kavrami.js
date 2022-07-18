// Verileri bir Arada Tutan Yapılara Array(Dizi) Denir

// Normal Tanımlama
/*
let arabaMarka1 = "Mercedes";
let arabaMarka2 = "Audi";
let arabaMarka3 = "BMW";
*/

// Array Kullanarak Tanımlama
let arabaMarkalari = ["Mercedes", "Audi", "BMW"];
console.log(arabaMarkalari);
console.log(arabaMarkalari[2]); // Sağdece İkinci İndexde Bulunan Değeri Yazar

arabaMarkalari[2] = "Peugeot"; // Array İçine Değer Atama İşlemi 
arabaMarkalari[3] = "Honda";  // Array İçine Değer Atama İşlemi
arabaMarkalari[4] = "Citroen";  // Array İçine Değer Atama İşlemi

arabaMarkalari[88] = "Suzuki"; // Array İçerisine İstediğimiz Yere Atama Yapabiliriz

console.log(arabaMarkalari.length); // Array Uzunlığunu Bu Şekilde Bulabiliriz

// En Büyük İndex, Dizi eleman Sayısının 1 Eksiği
// Dizi eleman Sayısı 20 İse En Büyük İndex 19'dur

console.log(`Araba Dizisi ${arabaMarkalari}`.toString());

// Array İçerisinde Elemanları Ekrana Bastırmak İçin Kullanılır
for (let i = 0; i < arabaMarkalari.length; i++)
{
    console.log(arabaMarkalari[i]);
}

console.log("**************************************")

// Array İçerisinde Elemanları Ekrana Bastırmak İçin Kullanılan farklı bir Yol
for (let oankiDiziElemanı of arabaMarkalari)
{
    console.log(oankiDiziElemanı);
}

let yeniDizi = [1, "Emre", true];
for(let oankiDiziElemanı of yeniDizi)
{
    console.log(oankiDiziElemanı);
}