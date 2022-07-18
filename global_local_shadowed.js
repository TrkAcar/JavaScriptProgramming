let isim = "Emre"   // Global Bir Değişken Örneği

selamVer();

function selamVer()
{
    let yas = 30;   // Local Bir Değişken Örneği
    console.log(`Merhaba ${isim} Yaş : ${yas}`);
}

//----------------------------------------------------------------------------------------------

let favoriRengim = "Yeşil"
favoriRenginiSoyle(favoriRengim)

function favoriRenginiSoyle(renk)
{
    let favoriRengim = "Sarı";
    console.log(`Favori Rengim ${favoriRengim}`);
}
console.log(favoriRengim);