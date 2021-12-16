document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();

    let propietario = document.querySelector('#propietario').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;
    let nombreMascota = document.querySelector('#nombreMascota').value;
    let tipo = document.querySelector('#tipo').value;
    let enfermedad = document.querySelector('#enfermedad').value;
    //let resultado = document.querySelector('#resultado').value;

    console.log(propietario);
    console.log(telefono);
    console.log(direccion);
    console.log(nombreMascota);
    console.log(tipo);
    console.log(enfermedad);
    console.log(resultado);

    propietario.innerHTML = ``;
    telefono.innerHTML = ``;
    direccion.innerHTML = ``;
    nombreMascota.innerHTML = ``;
    //tipo.innerHTML = ``;
    enfermedad.innerHTML = ``;
    //resultado.innerHTML = ``;
})


/*

    let deer = new Mascota (nombre, tipo, enfermedadRun)
    muestra.innerHTML=`
        <div class="card text-white bg-danger my-5 mx-auto">
        <div class="card-header">Resultado</div>
        <div class="card-body">
        <h5 class="card-title">Información General</h5>
        <p class="card-text">${deer.infoMascota()}</p>
        </div>
        </div>
    `
    console.log(deer);
    console.log(nombre);
    console.log(tipo);
    console.log(enfermedadRun);

})
*/



// Javascript

class Propietario {
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    get Name(){
        return this._nombre
    }
    set Name(newNombre){
        this._nombre = newNombre;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    get Tipo(){
        return this._tipo
    }
    set Tipo(newTipo){
        this._tipo = newTipo
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._enfermedad = enfermedad;
    }
    get Enfermedad(){
        return this._enfermedad
    }
    set Enfermedad(newEnfermedad){
        this._enfermedad = newEnfermedad
    }
    infoMascota(){
        return `Name ${this.Name}, tipo type ${this.Tipo}, Enfermedad ${this.Enfermedad}`
    }

}





