// Creating

const yeniListeElemanı = document.createElement('li');

yeniListeElemanı.className = 'liste-item';
yeniListeElemanı.textContent = 'Yozgat';
yeniListeElemanı.id = 'yenni-id';
yeniListeElemanı.setAttribute('deger', 'yeni-deger');

document.querySelector('ul').appendChild(yeniListeElemanı);
console.log(yeniListeElemanı);

// Replace

const yeniKucukBaslik = document.createElement('h6');

yeniKucukBaslik.id = 'h6ID';
yeniKucukBaslik.textContent = 'Yeni Başlık';

const eskiBaslik = document.querySelector('h2');
const baslikParent = document.querySelector('body');
baslikParent.replaceChild(yeniKucukBaslik, eskiBaslik);

// Remove

// const listeItem = document.querySelector('li');
// listeItem.remove();
// document.querySelector('ul').remove();

document.querySelector('ul').removeChild(document.querySelectorAll('li')[3]);

const textBolum = document.querySelector('input');
document.querySelector('form').removeChild(textBolum);