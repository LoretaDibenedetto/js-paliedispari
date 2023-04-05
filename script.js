//-------------------MAIN------------------------------------------
//salvo in una variabile il div vuoto per far comparire il risultato a schermo dopo
const userInputResult = document.getElementById("userResult");

//faccio un prompt per chieder all'utente la parola
const inputString = prompt("Inserisci una parola");
//dichiaro la  funzione di validazione con parametro la stringa inserita dall'utente
validateInputString(inputString);  

//dichiaro la funzione che mi inverte la stringa e come parametro gli do l'input del prompt
reverseString(inputString);


//se inputstring e' uguale alla stringa al contrario
if(inputString === reverseString(inputString)){
    //stampo in console che e' palindromo 
    console.log("e' palindromo");
    //lo stampo nell'html
    userInputResult.innerHTML = `<p> ${inputString} e' palindromo!`;
};





console.log(reverseString(inputString));


















//----------------------FUNCTION-----------------------------------------------
function reverseString(str){
  // Step 1.  metodo split() per restituire un nuovo array
  let splitString = str.split("");

  // Step 2.  metodo reverse() per invertire l'array appena creato
  let reverseArray = splitString.reverse();
  // ["o", "l", "l", "e", "h"]

  
  // Step 3.  metodo join() per unire tutti gli elementi della stringa in un array
  let joinArray = reverseArray.join("")

  
  //Step 4. Restituisci la stringa invertita
  return joinArray; // "olleh"



};





//funzione che dice fintanto che  l'input inserito dall'utente e' un numero oppure e' vuoto fai comparire il prompt 
function validateInputString(variableString){
    while(!isNaN(variableString) || variableString == ""){
        variableString = prompt("non sono ammessi numeri e caratteri vuoti");
    };

   
};