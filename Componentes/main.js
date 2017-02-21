class MainController {

    $onInit () {
        this.oDatos = {texto : "Texto desde papa"}
        this.btn1 = "Enviar";
        this.btn2 = "Borrar"

    }

   botonEnviar() {
        alert ("Boton 1");
    }

   botonBorrar() {
       alert ("Boton 2");
    }

}

angular.module('appPrueba', [])
.component("appStart", {
    templateUrl : 'main/main.template.html',
    controller : MainController,
})
