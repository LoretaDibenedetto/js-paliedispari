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


checkiseverOrOdd(sum);







//----------------------function--------------------------------



function validateIsOdd(string){
    if(string === 'pari'){
        console.log("per l'utente e' pari")
        Output.innerHTML += `<p> per l'utente e' pari <p>`
    }else if( string === 'dispari'){
        console.log("per l'utente e' dispari");
        Output.innerHTML += `<p> per l'utente e' dispari <p>`

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

function checkiseverOrOdd(number) {
    if(number % 2 == 0){
        console.log("e' pari");
        Output.innerHTML += `<p> e' pari <p>`
    }else{

        console.log("e' dispari");
        Output.innerHTML += `<p> e' dispari <p>`
    };
    
   


};