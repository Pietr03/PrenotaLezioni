function numeroCasuale() {
  return Math.random();
}

function numeroCasualeDecimaliTra(min, max) {
  return Math.random() * (max - min) + min;
  //y = mx + q
  //0 < x < 1
}

function salutoDelGiorno() {
  const oraCorrente = new Date().getHours();
  if (oraCorrente < 12) {
    return "Buongiorno";
  } else if (oraCorrente < 16) {
    return "Buon pomeriggio";
  } else {
    return "Buonasera";
  }
}

const citazioni = ["ciao", "buongiorno", "ciao mondo", "buongiorno mondo"];

function benvenuto() {
  const titolo = document.getElementById("titolo");
  titolo.innerText = salutoDelGiorno();

  let indice = Math.floor(numeroCasualeDecimaliTra(0, citazioni.length));
  const citazione = document.getElementById("citazione");

  citazione.innerText = citazioni[indice];
}

benvenuto();
