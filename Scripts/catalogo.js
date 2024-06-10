class Prodotto {
  constructor(titoloInput, prezzoInput) {
    this.titolo = titoloInput;
    this.prezzo = prezzoInput;
    this.quantita = `<input value="0" min="0" max="4" type="number" name="" id="quantita" />`;
  }
}
//const oggetto = new Prodotto();

// tipi: number, string, object, arr, bool, null, undefined

const catalogo = [];
catalogo.push(new Prodotto("ciabatta", 5));
catalogo.push(new Prodotto("tappeto", 4.25));
catalogo.push(new Prodotto("forchetta", 3));
//catalogo.reverse()
//catalogo.pop()
//catalogo.push({quantita: "2"});

/**
 * tag html non mettiamo nulla davanti. Es: p
 * classi, usiamo il punto. Es: .navbar
 * id, usiamo "#". Es. #tabella
 */

/*
let array = [0, 4.25, 4, 6, 5];
for (let i = 0; i < array.length; i += 1) {
  let numero = array[i];
  console.log(numero);
}

array.map((numero) => console.log(numero));
*/

const tabella = document.querySelector("table#tabella-prodotti tbody");
tabella.innerHTML = catalogo
  .map((prodotto, index) => {
    return `
    <tr id="prodotto-${index}">
      <td>${prodotto.titolo}</td>
      <td>${prodotto.prezzo}</td>
      <td id="quantita-${index}">${prodotto.quantita}</td>
    </tr>
  `;
  })
  .join("");

function aggiornaTotaleCarrello() {
  let somma = 0;
  const totale = document.getElementById("totale-carrello");

  catalogo.forEach((prodotto, index) => {
    // Utilizzo del selettore corretto per l'elemento specifico
    const quantita = document.querySelector(`#quantita-${index} input`);
    // Verifica se l'elemento è stato trovato
    if (quantita) {
      const costo = prodotto.prezzo * parseInt(quantita.value);
      // prima ho somma = 10 e costo = 5
      somma += costo;
      // dopo, somma = 15
      console.log(quantita);
    } else {
      console.error(`Elemento quantita-${index} non trovato.`);
    }
  });

  console.log(somma);
  totale.innerText = somma;
}

function checkCarrello() {
  const totale = document.getElementById("totale-carrello");
  if (parseFloat(totale.innerText) == 0) {
    alert("Carrello vuoto");
  } else {
    alert("Grazie per l'acquisto");
  }
}
