let emre = 
{
    adi: 'Emre',
    soyAdi: 'Altunbilek',
    dogumYili: 1988,
    evliMi: false,
    sevdigiRenkler: ['yeşil', 'mavi'],
    yasiHesapla: function () 
    {
        return 2020 - this.dogumYili; 
    }
};

console.log(emre);
console.log(emre.dogumYili);
console.log(emre['dogumYili']);

let yasi = emre.yasiHesapla();
console.log(emre.yasiHesapla());


let hasan = 
{
    adi: 'Hasan',
    soyAdi: 'Yılmaz',
    dogumYili: 1978,
    evliMi: true,
    sevdigiRenkler: ['yeşil', 'mavi'],
    yasiHesapla: function () 
    {
        this.yasi = 2022 - this.dogumYili; 
    }
};

hasan.yasiHesapla();
console.log(hasan.yasi);

console.log(hasan);
hasan.soyAdi = "yeni soyadi";
hasan['soyAdi'] = "yepyani soyadi";

let ogrenciler = [emre, hasan];
console.log(ogrenciler[0].dogumYili);


let ayse = new Object();
ayse.adi = "Ayse";
ayse.dogumYili = 1995;
console.log(ayse).evliMi;