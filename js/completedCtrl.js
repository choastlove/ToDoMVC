/*
* @Author: clearlove
* @Date:   2017-01-06 13:12:13
* @Last Modified by:   clearlove
* @Last Modified time: 2017-01-06 13:12:44
*/

'use strict';
(function (angular) {
    angular.module('completed',['ui.router']).config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('completed', {
            url: '/completed',
            views:{
                'list':{
                    templateUrl:'views/completed.html',
                    controller:'completedCtrl'
                }
            }
        })
    }])
        .controller('completedCtrl',['$scope','$rootScope',function($scope,$rootScope){

        }])


})(angular);
