// TEK ELEMENT SEÇİCİLER

/*

console.log(document.getElementById('baslik'));

console.log(document.getElementById('baslik').className);

const baslik = document.getElementById('baslik');

// Stili Değiştirme
baslik.style.backgroundColor = 'red';
baslik.style.color = 'white';
baslik.style.padding = '2rem';

// İçerik
baslik.textContent = 'Bu Yeni Baslik';

const test = baslik.textContent;

console.log(test);

baslik.innerText = 'Yeni Başlıkkkk';
baslik.innerHTML = ' <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CoQsUcWGJYxU_KspOIkss0cKpq_IoUbsDQ&usqp=CAU" alt="">';


console.log(document.querySelector('h2'));
console.log(document.querySelector('#liste'));
console.log(document.querySelector('.liste-item'));
console.log(document.querySelector('ul li'));
console.log(document.querySelector('.link.link-google'));

const myList = document.querySelector('li');
myList.style.color = 'blue';

document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(2)').style.color = 'orange';
document.querySelector('li:nth-child(3)').style.color = 'purple';
document.querySelector('li:nth-child(odd)').style.color = 'teal';
document.querySelector('li:nth-child(even)').style.color = 'red';

*/

// Çoklu Element Seçiciler

const linkler = document.getElementsByClassName('link');
console.log(linkler[0]);
console.log(linkler[2]);

linkler[0].style.color = 'red';
linkler[1].style.backgroundColor = '#ccc';
linkler[2].textContent = 'INSTAGRAM LINKI';

console.log(document.querySelector('ul').getElementsByClassName('liste-item'));

const dizi = Array.from(linkler);
dizi.reverse();
dizi.forEach(item => {
    console.log(item);
});

const listeElemanlarim = document.getElementsByTagName('h1');
console.log(listeElemanlarim);

const sehirlerTek = document.querySelectorAll('li:nth-child(odd)');
const sehirlerCift = document.querySelectorAll('li:nth-child(even)');

sehirlerTek.forEach(item => {
    item.style.backgroundColor = '#ccc';
});

for (let i = 0; i < sehirlerCift.length; i++) {
    sehirlerCift[i].style.backgroundColor = '#eee';
};
console.log(sehirler);