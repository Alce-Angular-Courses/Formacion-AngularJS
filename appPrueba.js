angular.module('appPrueba',[])
.controller('MainController',[ '$scope', function ($scope) {
    $scope.nombre = 'Alberto'; 
    $scope.altura = 189; 
    $scope.aAficiones = ['Leer', 'Cantar', 'Robotica']; 
    $scope.notas = {'Programación' : 10 , 'Entornos' : 7}

    $scope.borrarApellido = function () {
        $scope.apellido='';
    }

    $scope.addAficion = function () {
        $scope.aAficiones.push($scope.unaAficion);
        $scope.unaAficion = '';
    }

}])