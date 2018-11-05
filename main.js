
//SELEKTORI

const polje = document.getElementById("unos")
const pasus1 = document.getElementById("pocetnik")
const pasus2 = document.getElementById("ekspert")
const dugme = document.getElementById("dugme")


function izracunaj() {

    //VARIJABLE

    const satiDoEksperta = 10000;
    const satiDoPocetnika = 2000;
    let satiUcenjaDnevno = Number(polje.value);

    //LOGIKA

    const danaDoPocetnika = satiDoPocetnika / satiUcenjaDnevno;
    satiUcenjaDnevno = 8;
    const satiOdPocetnikaDoEksperta = satiDoEksperta - satiDoPocetnika;
    const danaOdPocetnikaDoEksperta = satiOdPocetnikaDoEksperta / satiUcenjaDnevno;
    var danaDoEksperta = danaDoPocetnika + danaOdPocetnikaDoEksperta;

    //ISPIS

    pasus1.innerText = "Potrebno je " + danaDoPocetnika + " dana učenja da bi postao početnik."
    pasus2.innerText = "Potrebno je " + danaDoEksperta + " dana učenja da bi postao ekspert."
    console.log(danaDoPocetnika)
    console.log(danaDoEksperta)
}
//DOGADJAJI

//dugme.onclick = izracunaj;
dugme.addEventListener("click", izracunaj)