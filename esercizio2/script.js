//--------------------main---------------------------------
const randomNumberOutput = document.getElementById('randomNumberOutput');
const userEvenOrOdd = prompt('scegli tra pari e dispari');
validateIsOdd(userEvenOrOdd);


const userNumber = prompt('scegli un numero da 1 a 5')
let numberUser = validateIsNumber(userNumber);


randomNumber();




//----------------------function--------------------------------

function validateIsOdd(string){
    if(string === 'pari'){
        console.log("per l'utente e' pari")
    }else if( string === 'dispari'){
        console.log("per l'utente e' dispari")
    };
    //return string
};

function validateIsNumber(variableString){
    while(isNaN(variableString) || variableString == "" || variableString > 5){
        variableString = prompt("Reinserisci un numero e assicurati che sia da 1 a 5: ");
    }

    // Qui sono sicuro che la mia stringa conterrà un numero
    let numero = parseInt(variableString);
    return numero;
};

function randomNumber() {
    num = Math.round(Math.random() * 5);
    console.log('numero casuale '+ num);
    randomNumberOutput.innerHTML = `<p> il numero generato dal computer e: ${num}<p>`;
};