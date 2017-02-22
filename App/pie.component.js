class PieController {

} // Fin de la clase

angular.module("app")
.component("pie",{
    templateUrl : "pie.html",
    controller : "PieController"
})

angular.module("app")
.controller("PieController", PieController)