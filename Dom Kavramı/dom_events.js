// document.querySelector('.link').addEventListener('click', tiklanma);
// document.querySelector('.link').addEventListener('dblclick', tiklanma);

// document.querySelector('.link').addEventListener('mousedown', tiklanma);
// document.querySelector('.link').addEventListener('mouseup', tiklanma);

// document.querySelector('.container').addEventListener('mouseenter', tiklanma);
// document.querySelector('.container').addEventListener('mouseleave', tiklanma);

// document.querySelector('.container').addEventListener('mouseover', arkaPlanRengiDegistir);

// document.querySelector('.container').addEventListener('mouseout', tiklanma);
// document.querySelector('.container').addEventListener('mousemove', arkaPlanRengiDegistir);
/*
function tiklanma(e) {
   let deger;

   deger = e.type;
   console.log(deger);
   e.preventDefault();
}

function arkaPlanRengiDegistir(e) {
   document.querySelector('.yazi').textContent = `X: ${e.clientX} Y: ${e.clientY} `;
   document.querySelector('.yazi').textContent = `R: ${e.clientX % 255} G: ${e.clientY % 255}
   B:${(e.clientX + e.clientY) % 255}`;
   document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX % 255}, ${e.clientY % 255},
   ${(e.clientX + e.clientY) % 255})`
}

*/

// Klavye Ve Form Elementleri

// const myForm = document.querySelector('#form');
// const isim = document.querySelector('#ad');
// const sehirler = document.querySelector('#sehir');

// isim.addEventListener('keydown', eventiYakala);
// isim.addEventListener('keyup', eventiYakala);
// isim.addEventListener('keypress', eventiYakala);

// isim.addEventListener('focus', eventiYakala);
// isim.addEventListener('blur', eventiYakala);

// isim.addEventListener('cut', eventiYakala);
// isim.addEventListener('paste', eventiYakala);

// isim.addEventListener('input', eventiYakala);
// sehirler.addEventListener('change', eventiYakala);

// myForm.addEventListener('submit', eventiYakala);

/*

function eventiYakala(e) {

    // console.log(isim.value)
    // document.querySelector('.link').textContent = isim.value;

    console.log(e.target.value)
    console.log('Event Adı:' + e.type);

    e.preventDefault();
}

*/

// Event Bubbling Ve Delegotion

/*

document.querySelector('.parent').addEventListener('click', e => {
    console.log('parent');
});

document.querySelector('.child').addEventListener('click', e => {
    console.log('child');
});

document.querySelector('.item').addEventListener('click', e => {
    console.log('itemmmm');
});

*/

document.querySelector('.parent').addEventListener('click', (e) => {
    if (e.target.className == 'item child-item') {
        console.log('merhaba tıklandı');
    }
});