// SORU 1
/*
Şehirler Diye Bir Dizi Oluşturun Her Dizi Elemanı Şehirler İle İlgili Bilgiler İçermelidir
Bu Bilgiler Şehrin Adı, Plaka Numarası Ve Şehrin Komşuları Olabilir

Diziyi Oluşturduktan Sonra Şehir Adlarına Göre Zden Aya Sıralayıp Ekrana Yazdırın
*/

// CEVAP 1
/*
const sehirler = [
    { ad: 'Bursa', plakaKod: 16, komsu: ['Istanbul', 'Balikesir'] },
    { ad: 'Izmir', plakaKod: 35, komsu: ['Manisa', 'Aydin'] },
    { ad: 'Ankara', plakaKod: 6, komsu: ['Kirikkale', 'Eskisehir'] },
];

sehirler.sort(function (a, b) {
    if (a.ad < b.ad) {
        return 1;
    } else if (a.ad > b.ad) {
        return -1;
    } else return 0;
});

console.log(sehirler);
*/
// SORU 2
/*
Kullanıcıdan Alınan Değere Kadar Olan Sayılar Dizisini Fibonacci Şeklinde Yazdırın
Fibonacci Örnek 0 1 1 2 3 5 8 13 21...
İki Sayının Toplamı Bir Sonraki Sayıyı Oluşturuyor...
*/

// CEVAP 2
/*
function fibonacci(sayi) {
    let sonucDizi = [0, 1];

    for (let i = 2; i < sayi; i++) {
        const oAnHesaplananEleman = sonucDizi[i - 1] + sonucDizi[i - 2];
        if (oAnHesaplananEleman < sayi) {
            sonucDizi[i] = oAnHesaplananEleman;
        } else {
            break;
        }
    }
    return sonucDizi;
}

console.log(fibonacci(500))
*/
// SORU 3
/*
Öğrencileri Tutan Bir Dizi Oluşturun Her Bir Öğrenci Nesnesinde ad, soyad ve id Değerleri Olmalı
İd Numarası Çift Olan Öğrencilerin Adı Ve Soyadlarının Birleştirilmiş Halde Tutan Diziyi Adan Zye
Sıralı Şekilde Ekrana YAzdırın
Bunları Yaparken map, filter, sort Metodlarını Kullanın
İslerm Bittikden Sonra Kodları arrow function Ve Zincirleme haline Dönüştürün
*/

// CEVAP 3

const ogrencilerDizisi = [
    { ad: 'emre', soyad: 'altunbilek', id: 1 },
    { ad: 'hasan', soyad: 'asdasdqwe', id: 2 },
    { ad: 'kemal', soyad: 'asdq', id: 14 },
    { ad: 'ali', soyad: 'wdd', id: 7 },
    { ad: 'can', soyad: 'cdddda', id: 5 },
    { ad: 'cem', soyad: 'bgd', id: 6 },
    { ad: 'ahmet', soyad: 'adfgqawr', id: 92 },
    { ad: 'su', soyad: 'asd', id: 3 },
];

/* Arrow Function
const sonucDizi = ogrencilerDizisi.filter(ogrenci => ogrenci.id % 2 === 0)
    .map(ogrenci => ogrenci.ad + " " + ogrenci.soyad)
    .sort()
    .reverse();
console.log(sonucDizi);
*/


const idNoCiftOlanOgrenciDizisi = ogrencilerDizisi.filter(function (ogrenci) {
    return ogrenci.id % 2 === 0;
});

const isimler = idNoCiftOlanOgrenciDizisi.map(function (ogrenci) {
    return ogrenci.ad + " " + ogrenci.soyad;
});

isimler.sort();

console.log(isimler);

