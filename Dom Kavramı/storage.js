// Local ve Session Storage

// localStorage.setItem('ad', 'emre');
// localStorage.setItem('yas', '32');

// console.log(localStorage.getItem('yas'));

const ulListesi = document.querySelector('.liste');
const isimDizisi = JSON.parse(localStorage.getItem('isimListesi'));

if (isimDizisi != null) {
    isimDizisi.forEach(function (isim) {
        const yeniLi = document.createElement('li');
        yeniLi.textContent = isim;
        ulListesi.appendChild(yeniLi);
    });
}

document.querySelector('#form').addEventListener('submit', function (e) {
    const yeniIsim = document.querySelector('.isim').value;
    let isimDizisi;

    if (localStorage.getItem('isimListesi') === null) {
        isimDizisi = [];
    } else {
        isimDizisi = JSON.parse(localStorage.getItem('isimListesi'))
    }

    isimDizisi.push(yeniIsim);

    localStorage.setItem('isimListesi', JSON.stringify(isimDizisi));

    const yeniLi = document.createElement('li');
    yeniLi.textContent = isim;
    ulListesi.appendChild(yeniLi);
});