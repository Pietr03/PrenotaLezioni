/*window.addEventListener("beforeunload", function (event) {
  // Messaggio di avviso per l'utente
  const message =
    "Hai dati non salvati, sei sicuro di voler lasciare la pagina?";

  // Alcuni browser richiedono di settare `event.returnValue` per mostrare il messaggio di avviso
  event.returnValue = message;

  // Per compatibilità con vecchi browser
  return message;
});*/

function cambiaTema() {
  if (document.documentElement.className === "light") {
    document.documentElement.className = "dark";
  } else {
    document.documentElement.className = "light";
  }
}

function checkboxUpdate() {
  const checkbox = document.getElementById("checkbox");
  const elemento = document.getElementById("stato");
  elemento.innerText = checkbox.checked ? "selezionato" : "deselezionato";
}

function buttonClickedPrompt() {
  const nome = prompt("Inserisci il tuo nome");
  alert(nome ? `Ciao ${nome}` : "Nessun nome inserito.");
}

function buttonClickedConfirm() {
  if (!confirm("Sei sicuro?")) {
    event.preventDefault();
  }
}
