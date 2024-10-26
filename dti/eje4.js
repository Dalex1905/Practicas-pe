class Usuario {
    constructor(username) {
        this._username = username;
    }
    get username() {
        return this._username;
    }

    set username(username) {
        if (username.length >= 3) {
            this._username = username;
        } else {
            console.log("El nombre de usuario debe tener al menos 3 caracteres");
        }

    }
}

const usuario =  new Usuario("Juan");
console.log( `Nombre valido: ${ usuario.username}`);

usuario.username =  "an"
console.log(` Nombre valido: ${ usuario.username}`);