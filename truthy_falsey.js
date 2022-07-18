// truthy falsey
// false, 0, "", null, undefined, NaN (FALSEY) 
// İçerisinde Değer Olan Her Şey (TRUTHY) Olur

let yas = 32;

let isim = "emre"
isim = '';
isim = null;
isim = undefined;

if (isim) // İf İçerisine {true} Yazılır İse (if) Çalışır {false} Yazılır İse (else) Çalışır
{
    console.log("bu True İfadedir");
}
else
{
    console.log("Bu False İfadedir");
}