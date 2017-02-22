class CabeceraController {

} // Fin de la clase

angular.module("app")
.component("cabecera",{
    templateUrl : "cabecera.html",
    controller : "CabeceraController"
})

angular.module("app")
.controller( "CabeceraController",  CabeceraController)