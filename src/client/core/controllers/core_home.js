(function(){
    'use strict';

    angular
        .module('core')
        .controller('CoreControl', ControllerCtrl)

    /** @ngInject */
    ControllerCtrl.$inject = ['Auth','$state','$scope']
    function ControllerCtrl(Auth,$state,$scope){
        
    }

}());