angular.module('directivaSimple',[])
	.controller('Controlador',function($scope){
		$scope.texto1 ={titulo:'Elemento1',subtitulo:'directiva1'};
		$scope.texto2 ={titulo:'Elemento2',subtitulo:'directiva2'};
	})
	.directive('miEncabezado',function(){
		return {
			retrict: 'E',
			scope:{
				textoVariable: '=texto' 
			},
			templateUrl:'mi-encabezado.html'
		}
	});