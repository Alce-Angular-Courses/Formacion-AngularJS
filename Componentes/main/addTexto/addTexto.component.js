class AddTexto {

    $onInit () {
        console.info("ADDTEXTO");
        console.dir(this);
        this.oDatos = angular.copy(this.parent.oDatos);
    }

}

angular.module('appPrueba')
.component("addTexto", {
    require: {'parent' : '^appStart'},
    templateUrl : 'main/addTexto/addTexto.template.html',
    controller : AddTexto
})