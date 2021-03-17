$(document).ready(function() {

  // Esercizio Parte 1
  // var studente = {
  //   'Nome': 'Alessandro',
  //   'Cognome': 'Falcone',
  //   'Età': '24'
  // }
  // for (var key in studente) {
  //   console.log(key);
  // }

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

});
