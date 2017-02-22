class LibrosController {}

angular.module("app", ["ui.router"])
.config(
    function($locationProvider, $urlRouterProvider, $stateProvider) {

  
  // usa el API "History" de HTML5
  //$locationProvider.html5Mode(true)

  //para cualquier url no definida se redirige hacia /acceso
  // $urlRouterProvider.otherwise("/acceso");

    $stateProvider
   .state("Libros", {
       url : "libros.html",
       template: "Estoy en libros",
       controller: "LibrosController"
   })
    .state("Autores", {
        url : "autores.html",
        component : "autores"
    })
    .state("Editoriales", {
        url : "editoriales.html",
        component : "editoriales"
    })

})

angular.module("app")
.controller("LibrosController", LibrosController)


