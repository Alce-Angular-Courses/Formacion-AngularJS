// Segunda aproximación al formato "1.5"
// Se define el controller como función con nombre, 
// en lugar de utilizar una función anónima
// Dentro de ella se utilizan funciones "arrow"
// en lugar de las tradicionales

angular.module('appPrueba',[])
.controller('MainController', MainController)

function MainController ()  {
    this.nombre = 'Alberto'; 
    this.apellido='';
    this.altura = 189; 
    this.aAficiones = ['Leer', 'Cantar', 'Robotica']; 
    this.notas = {'Programación' : 10 , 'Entornos' : 7}

    this.borrarApellido =  () => {
        this.apellido='';
    }

    this.addAficion =  () => {
        this.aAficiones.push(this.unaAficion);
        this.unaAficion = '';
    }

} // Fin de la función MainController