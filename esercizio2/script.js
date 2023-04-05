//--------------------main---------------------------------
const Output = document.getElementById('randomNumberOutput');
const userEvenOrOdd = prompt('Scegli tra pari e dispari');
let stringValidate = validateIsOdd(userEvenOrOdd);


const userNumber = prompt('Scegli un numero da 1 a 5');
let numberUser = validateIsNumber(userNumber);


let randomNum = randomNumber();

let sum = numberUser + randomNum;

console.log(typeof(sum));
Output.innerHTML += `<p> La somma  è ${sum} </p>`;


let checkIsOddorEven = checkiseverOrOdd(sum);


console.log(stringValidate + ' ' + checkIsOddorEven);
if(stringValidate != checkIsOddorEven){
    console.log('hai perso')
}else{
    console.log('hai vinto')
};





//----------------------function--------------------------------



function validateIsOdd(string){

    if(string === 'pari'){
        console.log("Per l'utente  è pari")
        Output.innerHTML += `<p> Per l'utente  è pari <p>`
    }else if( string === 'dispari'){
        console.log("Per l'utente  è dispari");
        Output.innerHTML += `<p> Per l'utente  è dispari <p>`

    };
    return string;
};



function validateIsNumber(variableString){
    while(isNaN(variableString) || variableString == "" || variableString > 5){
        variableString = prompt("Reinserisci un numero e assicurati che sia da 1 a 5: ");
    }

    // Qui sono sicuro che la mia stringa conterrà un numero
    let numero = parseInt(variableString);
    Output.innerHTML += `<p> Il numero scelto da te  è: ${numero}<p>`

    return numero;
};




function randomNumber() {
    num = Math.round(Math.random() * 5);
    console.log('numero casuale '+ num);
    Output.innerHTML += `<p> Il numero generato dal computer  è: ${num}<p>`;
    return num;
};

function checkiseverOrOdd(number) {
    let string = '';
    if(number % 2 == 0 ){
        string = 'pari';
        console.log(" É pari");
        Output.innerHTML += `<p>  É pari <p>`;
    }
    else{
        string = 'dispari';
        console.log(" É dispari");
        Output.innerHTML += `<p>  É dispari <p>`;
    }
    
   
  return string;

};