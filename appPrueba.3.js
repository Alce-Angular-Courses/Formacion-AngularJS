// Tercera aproximación al formato "1.5"
// Se define el controller como una clase


class MainController {

    $onInit () {
        
        this.nombre = 'Alberto'; 
        this.apellido='';
        this.altura = 189; 
        this.aAficiones = ['Leer', 'Cantar', 'Robotica']; 
        this.notas = {'Programación' : 10 , 'Entornos' : 7}
    }


    borrarApellido () {
        this.apellido='';
    }

    addAficion () {
        this.aAficiones.push(this.unaAficion);
        this.unaAficion = '';
    }

} // Fin de la clase MainController

angular.module('appPrueba',[])
.controller('MainController', MainController)
