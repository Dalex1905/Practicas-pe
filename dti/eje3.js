class clima{
    constructor(celcius){
        this.celcius = celcius
    }
    get fahrenheit(){
        return (this.celcius * 9/5) + 32;
    }
    set fahrenheit(fahrenheit){
        this.celcius = (fahrenheit - 32) * 5/9;

    }
    get celcius(){
        return this._celcius;
    
    }
    
    set celcius(celcius){
        this._celcius = celcius;
    }
}

const clima = new clima(25);
console.log(`clima en grados fahrenheit: ${clima.fahrenheit}°f`);
console.log(`clima en grados celcius: ${clima.celcius}°c `);