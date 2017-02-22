class AppStartController {

} // Fin de la classe AppStartController

angular.module("app")
.component("appStart", {
    template : `
            <cabecera></cabecera>
            <menu></menu>
            <div ui-view></div>
            <pie></pie>`,
    controller : "AppStartController"
})

angular.module("app")
.controller("AppStartController", AppStartController)

