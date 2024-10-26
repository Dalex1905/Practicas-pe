class Persona {
    constructor(nombre, apellido){
        //propiedad privadas
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //metodo get para obtener el completo
    get nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;
    }
}

const persona = new Persona( "David", "Urias");
console.log(persona.nombreCompleto);