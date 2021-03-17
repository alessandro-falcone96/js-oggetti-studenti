$(document).ready(function() {

  // Esercizio Parte 1
  var studente = {
    'Nome': 'Alessandro',
    'Cognome': 'Falcone',
    'Età': '24'
  }
  for (var key in studente) {
    console.log(key, studente[key]);
  }

  console.log("");

  // Esercizio Parte 2
  var amici = [
    {
      'Nome': 'Matteo',
      'Cognome': 'Morena',
      'Età': '25',
    },
    {
      'Nome': 'Laura',
      'Cognome': 'Vicinanza',
      'Età': '26',
    },
    {
      'Nome': 'Giacomo',
      'Cognome': 'Cataldi',
      'Età': '24',
    },
    {
      'Nome': 'Giulia',
      'Cognome': 'DeCorti',
      'Età': '26',
    },
    {
      'Nome': 'Giulia',
      'Cognome': 'Altran',
      'Età': '25',
    }
  ];

  for (var key in amici) {
    console.log(amici[key].Nome, amici[key].Cognome);
  }

  console.log("");

  // Esercizio Parte 3

  do {
    var risposta = prompt("Vuoi aggiungere un nuovo amico? 'Si' o 'No'");
  } while ((risposta != "Si") && (risposta != "No"));

  if (risposta == "Si") {

    var nomeInserito = prompt("Inserisci un nome: ");
    var conomeInserito = prompt("Inserisci un cognome: ");
    var etaInserita = prompt("Inserisci l'età: ");

    var amicoInserito = {
      'Nome': nomeInserito,
      'Cognome': conomeInserito,
      'Età': etaInserita,
    }

    amici.push(amicoInserito);
    console.log("Ecco i dati del tuo amico: ");
    for (var key in amicoInserito) {
      console.log(key, amicoInserito[key]);
    }

  } else {
    alert("Come vuoi.");
  }



});
