class CuentaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }
    //get para obtener el saldo actual
    get saldo(){
        return this._saldo;
    }

    //set para modificar el saldo, asegurando que no sea negativo
    set saldo(cantidad){
        if (cantidad >= 0){
            this._saldo = cantidad;
        } else {
            console.log(`saldo: ${cantidad}, no se puede establecer un saldo negativo`)
        }
    }
}

const cuenta = new CuentaBancaria(1000)
console.log(`saldo inicial: $${cuenta.saldo}`);

cuenta.saldo = 500;
console.log(`movimiento: $${cuenta.saldo}`);

cuenta.saldo = -200;
//mensaje: "no se puede establecer un saldo"
console.log(`Saldo actual: $${cuenta.saldo}`)