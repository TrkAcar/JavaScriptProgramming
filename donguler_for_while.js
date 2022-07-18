// for döngüleri
// for(ilk atama ; dongü_calistirma_sarti ; her_calisma_sonrası_ne_olacak)
// for Döngülerinde ilk Atanan Değerler {Süslü Parantez} Dışına Çıkınca Ölür :D

// For

/*
for (let i = 0; i < 3; i++)
{
    console.log("Benim Adım Emre");
    console.log("Nasılsın");
}

for (let i = 0, j = 0; (i + j) < 20; i=i+5, j=j+2)
{
    console.log("Döngü Çalışdı");
    console.log("i Değeri : " +i+" j Değeri:"+j);
}
*/

// While

let sayi = 5;

while(sayi < 15)
{
    console.log("Merhaba");
    sayi++;
}

// Do, While
// do, while Döngüsünde  Önce do Dan Sonra Gelen İşlem Yapılır Ve Sonra while Kontrol Edilir
// while Sonuna (Noktalı Virgül ; ) Koyulur

let yas = 20;
do
{
    console.log("Do While kullanımı");
    yas++;
} while (yas < 30);

// break, continue, return

for (let i = 0; i < 50; i++)
{
    if (i == 12)
    {
        break; // Break komutu (i) (12'ye) Eşit Olunca Bu For Döngüsünden Çıkar Ve Kod Devam Eder
    }
    console.log("Break Kullanımı");
}

for (let i = 10; i < 30; i++)
{
    if (i == 15)
    {
        continue; // Continue Komutu i'nin 15'e Eşit Olma Durumunu Atla Ve Çalışmaya Devam Et
    }
    console.log("Contiue Kullanımı" +i);
}

// For İçinde Return Kullanımı Sağdece Fonksiyon İçinde Olur Aksi Taktirde İllegal Return Statement Hatası Alınır

/*
for (let i = 0; i <10; i++)
{
    if (i == 5)
    {
        return;
    }
    console.log("Return Kullanımı" +i);
}
*/