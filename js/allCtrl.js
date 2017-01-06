/*
* @Author: clearlove
* @Date:   2017-01-06 13:11:12
* @Last Modified by:   clearlove
* @Last Modified time: 2017-01-06 13:11:28
*/

'use strict';
(function (angular) {
    angular.module('active',['ui.router']).config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('active', {
            url: '/active',
            views:{
                'list':{
                    templateUrl:'views/active.html',
                    controller:'activeCtrl'
                }
            }
        })
    }])
        .controller('activeCtrl',['$scope','$rootScope',function($scope,$rootScope){


        }])


})(angular);
