angular.module("todoListApp", ['focus-if'])

.controller('mainCtrl',function($scope,dataService){
	$scope.learningNgChange = function(){
		console.log('An input changed!');
	};

	$scope.helloWorld = dataService.helloWorld;

	$scope.checked = function(item,completed){
		var index = $scope.todos.indexOf(item);
  		$scope.todos.splice(index, 1);
  		if(completed){
  			$scope.todos.push(item);
  		}else{
  			$scope.todos.unshift(item);
  		}
	}

	$scope.trueValue = true;

})
.service('dataService',function($http){
	this.helloWorld = function(){
		console.log("this is the data service's method!!");
	}

	this.getTodos = $http.get('mock/todos.json')
})