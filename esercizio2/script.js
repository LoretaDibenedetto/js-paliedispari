//--------------------main---------------------------------
const Output = document.getElementById('randomNumberOutput');
const userEvenOrOdd = prompt('scegli tra pari e dispari');
validateIsOdd(userEvenOrOdd);


const userNumber = prompt('scegli un numero da 1 a 5')
let numberUser = validateIsNumber(userNumber);


let randomNum = randomNumber();

let sum = numberUser + randomNum;

console.log(typeof(sum));
Output.innerHTML += `<p> la somma e' ${sum} </p>`;


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
    Output.innerHTML += `<p> il numero scelto da te e': ${numero}<p>`

    return numero;
};

function randomNumber() {
    num = Math.round(Math.random() * 5);
    console.log('numero casuale '+ num);
    Output.innerHTML += `<p> il numero generato dal computer e': ${num}<p>`;
    return num;
};