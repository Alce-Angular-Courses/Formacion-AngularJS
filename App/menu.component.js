class MenuController {


    constructor ($state) {
        'ngInject';
        this.$state = $state;
    }

    mainMenu(pOpcion) {
        let oOpciones = ["Libros","Autores","Editoriales"]
        this.$state.go(oOpciones[pOpcion])

    }

} // Fin de la clase

angular.module("app")
.component("menu",{
    templateUrl : "menu.html",
    controller : "MenuController"
})

angular.module("app")
.controller("MenuController", MenuController)


