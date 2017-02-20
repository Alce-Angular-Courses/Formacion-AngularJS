// Primera aproximación al formato "1.5"
// En la vista utilizamos Controller as ...
// El controller accede automaticamente al controller como this
// haciéndose innecesaria la inyección de dependencias


angular.module('appPrueba',[])
.controller('MainController',function () {
    this.nombre = 'Alberto'; 
    this.altura = 189; 
    this.aAficiones = ['Leer', 'Cantar', 'Robotica']; 
    this.notas = {'Programación' : 10 , 'Entornos' : 7}

    this.borrarApellido = function () {
        this.apellido='';
    }

    this.addAficion = function () {
        this.aAficiones.push(this.unaAficion);
        this.unaAficion = '';
    }

})
