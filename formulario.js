// Tercera aproximación al formato "1.5"
// Se define el controller como una clase


class MainController {

    constructor () {
    }

    $onInit () {       
        this.persona = { nombre : '', apellido : '', isOk : true, lang : 'PHP'};
        this.altura = 189; 
        this.aAficiones = ['Leer libros', 'Cantar', 'Construir Robots']; 
        this.notas = {'Programación' : 10 , 'Entornos' : 7}
        this.fecha = new Date();
        this.aOpciones = [true, false, false]
        this.number = 124356789;

        this.aLenguajes = [
                {name : 'Java', code : '1'},
                {name : 'PHP', code : '2'},
                {name : 'C#', code : '3'}]

        console.info("La fecha : ")
        console.dir(this.fecha);
        console.info("El $scope : ")
        console.dir(this);
    }


    borrarApellido () {
        this.persona.apellido='';
    }

    addAficion () {
        this.aAficiones.push(this.unaAficion);
        this.unaAficion = '';
    }

    mainMenu(pOpcion) {
        for (var i = 0; i < this.aOpciones.length; i++) {
            this.aOpciones[i] = false;            
        }
        this.aOpciones[pOpcion] = true;
    }

    alSeleccionar() {
        console.dir(this.persona)
    }


    enviarForm () {
        console.info("Enviado el formulario")
    }


    borrarForm () {
        this.persona = { nombre : '', apellido : '', isOk : false, lang : '', lang2 : ""};

    }

} // Fin de la clase MainController

angular.module('appPrueba',[])
.controller('MainController', MainController)
