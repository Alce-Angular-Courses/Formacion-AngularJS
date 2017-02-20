
class MainController {

    constructor () {
        // Constructor Vacio
    }

    $onInit () {
        console.info("Iniciado Correctamente");
        this.aTareas = [{nombre : "Sacar la Basura", isHecho : false}];        
    }

    addTarea() {        
        this.aTareas.push({nombre : this.nuevaTarea, isHecho : false});
        this.nuevaTarea = '';
    }

    borrarValor(valor){
        this.aTareas.splice(valor);
    }

}

angular.module('appTareas',[])
.controller('MainController', MainController);