const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num;
function pedirnumero(){
    rl.question("Introduce un numero Mayor a 5:", (input) => {
        num = parseInt(input);
        if (num > 5){
            console.log(`numero es valido ${num}`);
        }else{
            console.log("el numero debe se mayor a 5.");
            pedirnumero()
        }
    });
}
pedirnumero()