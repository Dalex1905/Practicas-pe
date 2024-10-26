let objeto = {
    //metodo get

    get propiedad(){
        return "valor de la propiedad"
    },
    // metodo set
    set propiedad(valor){
        console.log(`Asignando el valor: ${valor}`);
    },
};

//Usando el get
console.log(objeto.propiedad);
//usando el set
objeto.propiedad = "Nuevo valor";


