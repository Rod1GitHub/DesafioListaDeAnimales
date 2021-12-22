// 1. Crear clases con getter y setter
class Propietario {
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico de contacto: ${this._telefono}`;
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
    set NombreMascota(newNombreMascota){
        this._nombreMascota = newNombreMascota
    }
    get Enfermedad(){
        return this._enfermedad
    }
    set Enfermedad(newEnfermedad){
        this._enfermedad = newEnfermedad
    }


}

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();

// asignar input a las variables
    let propietario = document.querySelector('#propietario').value;
    propietario.innerHTML = ``;
    let telefono = document.querySelector('#telefono').value;
    telefono.innerHTML = ``;
    let direccion = document.querySelector('#direccion').value;
    direccion.innerHTML = ``;
    let nombreMascota = document.querySelector('#nombreMascota').value;
    nombreMascota.innerHTML = ``;
    let tipo = document.querySelector('#tipo').value;
    tipo.innerHTML = ``;
    let enfermedad = document.querySelector('#enfermedad').value;
    enfermedad.innerHTML = ``;

    console.log(propietario);
    console.log(telefono);
    console.log(direccion);
    console.log(nombreMascota);
    console.log(tipo);
    console.log(enfermedad);

    let datosIngresados = new Object([propietario, telefono, direccion, nombreMascota, tipo, enfermedad]);
    
    console.log(datosIngresados)

    document.getElementById("resultado").innerHTML = datosIngresados;
    });





  //  “El tipo de animal es un: ${this.tipo}”, mientras que el nombre de la mascota es Tatty y la enfermedad es: otitis leve