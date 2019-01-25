// (function (){

//     'use strict';

//     angular.module('myFirstApp',[]) 
//     .controller('myFirstController', function($scope){
//         $scope.name = "David";
//         $scope.greet = function () {
//             return "Hello brother ";
//         }
//     })

// })();

(function (){
    'use strict';

    angular.module('myFirstApp', []).controller('myFirstController', myFirstController);

    myFirstController.$inject = ['$scope', '$filter'];

    function myFirstController($scope, $filter){
        $scope.name = "Angularjs";

        $scope.greet = function (){
            return "Hello ";
        };

        $scope.username = "";
        $scope.totalValue = 0;

        $scope.displayNumeric = function (){
            let totalNameValue = calculateNumericForString($scope.username);
            $scope.totalValue = totalNameValue;
        };

        function calculateNumericForString(string){
            var totalStringValue = 0;
            for(let i=0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }

            return totalStringValue;
        };  

        $scope.upper = function (){
            let upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    };
    
})();