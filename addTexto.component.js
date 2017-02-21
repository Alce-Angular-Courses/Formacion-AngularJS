class AddTexto {

    $onInit () {
        console.info("ADDTEXTO");
        console.dir(this);
        this.texto = this.parent.texto;
    }

}

angular.module('appPrueba')
.component("addTexto", {
    require: {'parent' : 'MainController'},
    templateUrl : 'addTexto.template.html',
    controller : AddTexto,

})