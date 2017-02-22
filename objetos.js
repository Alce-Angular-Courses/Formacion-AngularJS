var oObj1 = {nombre : 'Pepe',
        apellido : 'Perez',
        puesto : 'Director'};

console.dir(oObj1);

function Persona (pN, pA, pP) {
    this.nombre = pN;
    this.apellido = pA;
    this.puesto = pP;

}

    Persona.prototype.saludar = function () {
        console.dir(this);
    }

var oPersona1 = new Persona("Juan", "Lopez", "Director");
var oPersona2 = new Persona("Luis", "Martin", "SubDirector");

oPersona1.sueldo = 30000

oPersona1.saludar()
oPersona2.saludar();