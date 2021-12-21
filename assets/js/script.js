// 1. Crear clases con getter y setter
class Propietario {
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    
    get Name(){
        return this._nombre;
    }
    get Address(){
        return this._direccion;
    }
    get Phone(){
        return this._telefono;
    }

    set Name(newNombre){
    this._nombre = newNombre;
    }
    set Address(newDireccion){
        this._direccion = newDireccion;
    }
    set Phone(newTelefono){
        this._telefono = newTelefono;
    }

    infoPropietario() {
        return `El nombre del propietario es: ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico de contacto: ${this._telefono}`;
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
    infoAnimal() {
        return `El nombre del propietario es: ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico de contacto: ${this._telefono}`;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota= nombreMascota;
        this._enfermedad = enfermedad;
    }
    get NombreMascota(){
        return this._nombreMascota
    }
    get Enfermedad(){
        return this._enfermedad
    }

    set NombreMascota(newNombreMascota){
        this._nombreMascota = newNombreMascota
    }

    set Enfermedad(newEnfermedad){
        this._enfermedad = newEnfermedad
    }
    infoMascota() {
        return `mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`;
    }

}

// OK hasta aquí
/* 
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();

// asignar input a las variables
    let propietario = document.querySelector('#propietario').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;
    let nombreMascota = document.querySelector('#nombreMascota').value;
    let tipo = document.querySelector('#tipo').value;
    let enfermedad = document.querySelector('#enfermedad').value;
    //let resultado = document.querySelector('#resultado').value;

// limpiar
propietario.innerHTML = ``;
telefono.innerHTML = ``;
direccion.innerHTML = ``;
nombreMascota.innerHTML = ``;
//tipo.innerHTML = ``;
enfermedad.innerHTML = ``;
//resultado.innerHTML = ``;

// OK hasta aquí


const obtenerValoresInputs = (valueIdNameElement) => {
    return document.getElementById(valueIdNameElement).value;
} 

    const objMascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);

    const resultElementUl = document.getElementById('resultado').children[0];

    const liDatosPropetario = document.createElement("li");
    const liTipoNombreEnfermedadMascota = document.createElement("li");

    liDatosPropetario.innerHTML = `${objMascota.datosPropietarios()}`;
    liTipoNombreEnfermedadMascota.innerHTML = `${objMascota.getTipo()} ${objMascota.getNombreEnfermedadMascota()}`;

    resultElementUl.appendChild(liDatosPropetario);
    resultElementUl.appendChild(liTipoNombreEnfermedadMascota);
});
 */