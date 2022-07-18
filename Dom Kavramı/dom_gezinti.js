let deger;

const myListe = document.querySelector('ul.liste');
console.log(myListe);

deger = myListe.childNodes;
deger = myListe.childNodes[1].nodeType;
// 1 Element
// 3 Text
// 8 yorumlar

deger = myListe.firstChild;
deger = myListe.firstElementChild;

deger = myListe.lastChild;
deger = myListe.lastElementChild;

deger = myListe.childElementCount;

// Parent Element
deger = myListe.parentNode;
deger = myListe.parentNode.parentNode;

const myInput = document.querySelector('input');
console.log(myInput.parentElement.parentElement);

deger = document.querySelector('li').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(deger);