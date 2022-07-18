const kisiler = [
    { id: 1, ad: 'emre1' },
    { id: 11, ad: 'emre11' },
    { id: 111, ad: 'emre111' },
    { id: 1111, ad: 'emre1111' },
    { id: 11111, ad: 'emre11111' },
    { id: 2, ad: 'emre2' },
    { id: 22, ad: 'emre22' },
    { id: 222, ad: 'emre222' },
    { id: 2222, ad: 'emre2222' },
];

function kendiFindMetotum(kisiler, aranilanDeger) {
    let bulunanEleman = undefined;
    for (let i = 0; i < kisiler.length; i++) {
        if (aranilanDeger(kisiler[i])) {
            return kisiler[i];
        }
    }
    return bulunanEleman;
}

const sonuc = kendiFindMetotum(kisiler, function (kisi) {
    return kisi.id === 11;
})

console.log(sonuc);

/*
function findMetot(kisiler) {
    for (let i = 0; i < kisiler.length; i++) {
        if (kisiler[i].id === 111) {
            return kisiler[i];
        }
    }
}

console.log(findMetot(kisiler));
*/

/*
const sonuc = kisiler.find(function (kisi) {
    return kisi.id === 111;
});
console.log(sonuc);
*/