// Codice viene eseguito solo quando documento e' carico
$(function () {
  //JSNACK BLOCCO 4

  // JSnack 1A

  // Creare un oggetto palla che abbia le seguenti proprietà:
  Nome = palla;
  Peso = 10;

  var palla = {
    name : 'palla',
    weight : 10,
  }

  console.log(palla);

  //JSNACK 1B
  // Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

  palla.weight = Number(prompt('Insert palla weight in kg'));

  console.log(palla);

  // JSNACK 2

  // Creare un array di oggetti: ogni oggetto descrivera' una bici da corsa con le seguenti proprieta': nome e peso. Stampare a schermo la bici con peso minore

    var runBike = [
      {
        nome: "bianchi",
        peso: 2,
      },

      {
        nome: "Atala",
        peso: 3.5,
      },

      {
        nome: "Colnago",
        peso: 4,
      },
    ];


    var weightBike = [];

    runBike.forEach(element => {
      console.log(element.peso);
      weightBike.push(element.peso);
    });

    console.log(weightBike);
    weightBike.sort(function (a,b) {
      return a - b;
    })

    console.log(weightBike[0]);

  // console.log(runBike);

  // JSNACK 3

  // Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
  // Calcolare perimetro e area.

  var tRett = {

    base : 10,
    h : 20,

  }

  console.log(tRett);

  tRett.ipotenusa = Number(Math.sqrt((Math.pow(tRett.base,2))+(Math.pow(tRett.h,2))).toFixed(2));
  console.log(tRett.ipotenusa);

  tRett.perimetro = tRett.base + tRett.h + tRett.ipotenusa;
  console.log(tRett.perimetro);

  // JSNACK 4A + 4B
  // Creare un array di oggetti di squadre di calcio.
  // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

  var footballTeams = [
    {
      name: "Inter",
      points: 0,
      foulagainst: 0,
    },
    {
      name: "Torino",
      points: 0,
      foulagainst: 0,
    },
    {
      name: "Napoli",
      points: 0,
      foulagainst: 0,
    },
  ];

  // Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  footballTeams.forEach(element => {

    element.foulagainst = getRndInteger (30,100);
    element.points = getRndInteger (1,100)
    console.log(element);

  });

  //JSNACK BLOCCO 5

  //JSNACK 1
  //Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

  var zucchine = [
    {
      variety: 'a',
      weight: 0.1,
      length: 10,
    },
    {
      variety: 'b',
      weight: 0.2,
      length: 15,
    },
    {
      variety: 'c',
      weight: 0.3,
      length: 16,
    },
    {
      variety: 'd',
      weight: 0.7,
      length: 18,
    },
    {
      variety: 'e',
      weight: 0.8,
      length: 19,
    },
    {
      variety: 'f',
      weight: 0.9,
      length: 21,
    },
    {
      variety: 'g',
      weight: 1.1,
      length: 34,
    },
    {
      variety: 'h',
      weight: 0.4,
      length: 4,
    },
    {
      variety: 'i',
      weight: 0.5,
      length: 14,
    },
    {
      variety: 'l',
      weight: 0.6,
      length: 8,
    },
  ];

  // Calcola quanto pesano tutte le zucchine.

  var sum = 0;

  zucchine.forEach((element) => {
    console.log(element.weight);

    sum += element.weight;
  });

  console.log(sum);

  console.log('Il peso totale delle zucchine e\' di: ' + sum + ' kg');

  //JSNACK 2
  //Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

   function reverseWord(string){

    return string.split("").reverse().join("");

    };

    console.log(reverseWord('ciao'));

  // JSNACK 3

  // Crea 10 oggetti che rappresentano una zucchina.
  // Dividi in due array separati le zucchine che misurano
  // meno o più di 15cm.
  // Infine stampa separatamente quanto pesano i due gruppi
  // di zucchine



  var zucchine = [
    {
      variety: "a",
      weight: 0.1,
      length: 10,
    },
    {
      variety: "b",
      weight: 0.2,
      length: 15,
    },
    {
      variety: "c",
      weight: 0.3,
      length: 16,
    },
    {
      variety: "d",
      weight: 0.7,
      length: 18,
    },
    {
      variety: "e",
      weight: 0.8,
      length: 19,
    },
    {
      variety: "f",
      weight: 0.9,
      length: 21,
    },
    {
      variety: "g",
      weight: 1.1,
      length: 34,
    },
    {
      variety: "h",
      weight: 0.4,
      length: 4,
    },
    {
      variety: "i",
      weight: 0.5,
      length: 14,
    },
    {
      variety: "l",
      weight: 0.6,
      length: 8,
    },
  ];


 var zucchineSmallList = [];
 var zucchineBigList = [];

zucchine.forEach(element => {
  
  zucchineLength = element.length;

if (zucchineLength < 15){
    zucchineSmallList.push(element);
  }
else {
  zucchineBigList.push(element);
}

  // console.log(zucchineSmallList);
  // console.log(zucchineBigList);

});

var sommaZucchineSmall = 0;

zucchineSmallList.forEach(element => {
  sommaZucchineSmall += element.weight;
});

console.log(sommaZucchineSmall);

var sommaZucchineBig = 0;

zucchineBigList.forEach((element) => {
  sommaZucchineBig += element.weight;
});

console.log(sommaZucchineBig);





// JSNACK 4
// Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var a = ['1','5'];
var b = ['c', 'f'];
// function arrayFusion(array1,array2,){
// }
// console.log(arrayFusion(a,b));

function arrayFusion(array1,array2) {

  var arrayMixValues = [];

  for (var i = 0; i < array1.length; i++){
    for(var i = 0; i < array2.length; i++){
      arrayMixValues.push(array1[i],array2[i]); 
    }
  }
    return arrayMixValues;
  }

  console.log(arrayFusion(a,b));

  // JSNACK 5
  // Scrivi una funzione che accetti tre argomenti:
  // un array e due numeri (“a” più piccolo di “b” e “b” grande al
  // massimo quanto il numero di elementi dell’array).
  // La funzione ritornerà un nuovo array con i valori che
  // hanno la posizione compresa tra “a” e “b”

  // function getRndInteger(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // };

var x = ['a','2','c','4','d'];
var g = 2;
var d = 5;

function birillo(array,a,b){
  arrayWithinElements = [];

  // function getRndInteger(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

// var b = getRndInteger(0, array.length + 1);
// var a = getRndInteger(0, b);

for ( var i = a; i < b - 1 ; i++){
  arrayWithinElements.push(array[i]);
}

return arrayWithinElements;

}

console.log(birillo(x,g,d));


});

