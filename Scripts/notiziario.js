// notiziario.js

const articoli = [
  {
    title: "Innovazione tecnologica nel 2024",
    summary: "Scopri le ultime novità nel campo della tecnologia.",
    date: "05-06-2024",
  },
  {
    title: "La sostenibilità ambientale",
    summary: "Come le aziende stanno abbracciando pratiche più sostenibili.",
    date: "12-03-2024",
  },
  {
    title: "Nuove frontiere della medicina",
    summary: "Le scoperte che stanno rivoluzionando la salute umana.",
    date: "23-02-2024",
  },
  {
    title: "Viaggi spaziali: il futuro è adesso",
    summary: "Esplorazione dello spazio e missioni su Marte.",
    date: "17-05-2024",
  },
  {
    title: "Cucina innovativa: tendenze del 2024",
    summary: "Ricette e tecniche culinarie all'avanguardia.",
    date: "30-06-2024",
  },
];

/*
let variabile = 5 // questa è una variabile
const oggetto = { valore: 5 } // questo si chiama attributo

function funzione()
{
  return "funzione"
}

const oggetto2 = {funzione : function(){ return "funzione"}}

function nomeFunzione () {} // come dichiarare una funzione
nomeFuzione : function() {} // come dichiarare una funzione dentro un oggetto
*/

let i = 0; // indice iniziale per l'articolo visualizzato
const maxIndice = articoli.length - 1;

// Funzioni per gestire il cambio di articolo
function mostraArticolo(indice) {
  document.getElementById("titoloNotizia").innerText = articoli[indice].title;
  document.getElementById("testoNotizia").innerHTML = articoli[indice].summary;
  document.getElementById("segnaNotizie").value = indice + 1;
}

mostraArticolo(i); // Mostra il primo articolo all'avvio della pagina

document.getElementById("indietro").addEventListener("click", function () {
  if (i > 0) {
    i--;
    mostraArticolo(i);
  }
});

document.getElementById("avanti").addEventListener("click", function () {
  if (i < maxIndice) {
    i++;
    mostraArticolo(i);
  }
});
