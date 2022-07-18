const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla);
document.addEventListener('DOMContentLoaded', localStorageOku);

function gorevSilTamamla(e) {
    const tiklanilanEleman = e.target;

    if (tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi')
    }
    if (tiklanilanEleman.classList.contains('gorev-btn-sil')) {
        tiklanilanEleman.parentElement.classList.toggle('kaybol');
        const silinecekGorev = tiklanilanEleman.parentElement.children[0].innerText;

        localStorageSil(silinecekGorev);

        tiklanilanEleman.parentElement.addEventListener('transitionend', function (e) {
            tiklanilanEleman.parentElement.remove();
        })
    }
}

yeniGorevEkleBtn.addEventListener('click', gorevEkle);

function gorevEkle(e) {
    e.preventDefault();

    gorevItemOlustur(yeniGorev.value);

    // LocalStorage Kaydet
    localStorageKaydet(yeniGorev.value);

    yeniGorev.value = '';
}

function localStorageKaydet(yeniGorev) {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }

    gorevler.push(yeniGorev);
    localStorage.setItem('gorevler', JSON.stringify(gorevler));
}

function localStorageOku() {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }

    gorevler.forEach(function (gorev) {
        gorevItemOlustur(gorev);
    });
}

function gorevItemOlustur(gorev) {

    // div Oluşturma
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    // li Oluşturma
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText = gorev;
    gorevDiv.appendChild(gorevLi);

    // Tamamlandı Butonu Ekle
    const gorevTamamBtn = document.createElement('button');
    gorevTamamBtn.classList.add('gorev-btn');
    gorevTamamBtn.classList.add('gorev-btn-tamamlandi');
    gorevTamamBtn.innerHTML = '<i class="fa-regular fa-square-check"></i>'
    gorevDiv.appendChild(gorevTamamBtn);

    // Sil Butonu Ekle
    const gorevSilBtn = document.createElement('button');
    gorevSilBtn.classList.add('gorev-btn');
    gorevSilBtn.classList.add('gorev-btn-sil');
    gorevSilBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    gorevDiv.appendChild(gorevSilBtn);

    // ul'ye Oluşturduğumuz divi Ekleyelim
    gorevListesi.appendChild(gorevDiv);
}

function localStorageSil(gorev) {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }

    // Splice İle İtem Silme
    const silinecekElemanIndex = gorev.indexOf(gorev);
    console.log(silinecekElemanIndex);
    gorevler.splice(silinecekElemanIndex, 1);

    localStorage.setItem('gorevler', JSON.stringify(gorevler));
}