var limit = 100;
var limitComputer = 16;

//funzione per giocare al gioco campo minato
function playGame(arrComputer){
  var arrNumPlayed = [];
  var continueGame = true;
  while(continueGame){
    var numUser = parseInt(prompt("Inserisci un numero: "));
    if(numUser < 1 || numUser > 100){
      alert("Inserisci un numero maggiore di 1 e minore di 100!");
    }
    if(arrComputer.includes(numUser)){
      console.log("Hai perso!");
      continueGame = false;
    }else if(arrNumPlayed.includes(numUser)){
      alert("Il numero è già stato giocato!");
    }else if( isNaN(numUser) === true){
      alert("Non hai inserito un numero")
    }else{
      arrNumPlayed.push(numUser);
    }
    if(arrNumPlayed.length == 84){
      continueGame = false;
      alert("Hai vinto!")
    }
  }
}

//generare un numero

//confrontare se il numero è gia presente nell'array

//se è presente generarne un altro

//controllare se il nuovo numero generato è presente nell'array

//funzione per generare un array di numeri tutti diversi tra loro
function listNumGenerator(max, howMany){
  var arrGenerated = [];
  while(arrGenerated.length < howMany){
    var randomNumber = Math.ceil(Math.random() * max);
    if(arrGenerated.includes(randomNumber) === false){
      arrGenerated.push(randomNumber);
    }
  }
  return arrGenerated;
}



/* esecuzione del gioco */
var array = listNumGenerator(limit, limitComputer);
playGame(array);


