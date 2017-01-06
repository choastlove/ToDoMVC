/*
* @Author: clearlove
* @Date:   2017-01-06 13:11:39
* @Last Modified by:   clearlove
* @Last Modified time: 2017-01-06 13:12:00
*/

'use strict';
(function (angular) {
    angular.module('app',['ui.router','all','active','completed'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/all');
        }])
        .controller('mainCtrl',['$rootScope',function($rootScope){
        //生成随机ID
        $rootScope.getId=function(){
            return Math.random().toString().replace('.','');
        };
        //全/反选标志
        $rootScope.flag=true;
        //input输入框的值
        $rootScope.text='';
        //列表数据存放
        $rootScope.voList=[];
        //根据传入的str生成一个数据列表对象
        $rootScope.itemCreate=function(str){
            var obj={};
            obj.id=$rootScope.getId(),
                obj.info=str,
                obj.completed=false,
                obj.editing=false
            // obj.checking=false
            return obj;
        };
        //向数据列表中添加一项
        $rootScope.add=function(str){
            if($rootScope.text=='') return false;
            $rootScope.voList.push($rootScope.itemCreate(str));
            $rootScope.text='';
        };
        //删除数据列表中的某一项
        $rootScope.delete=function(index){
            $rootScope.voList.splice(index,1);
        };
        //更改edit状态
        $rootScope.edit=function(index){
            $rootScope.voList[index].editing=true;
        };
        //保存更改之后的数据
        $rootScope.save=function(index){
            $rootScope.voList[index].editing=false;
        };
        //改变选中状态
        $rootScope.reverseCheck=function(id){
            //这里不能用index来更改状态
        angular.forEach($rootScope.voList,function(item,index,array){
            if(id==item.id)
            item.completed=!item.completed;
        })
            //同步completed状态的值
            // if($rootScope.voList[index].checking) $rootScope.voList[index].completed=true;
            // else $rootScope.voList[index].completed=false;
        };
        //全选/反选
        $rootScope.checkAll=function(){
            angular.forEach($rootScope.voList,function(item,index,array){
                item.completed=$rootScope.flag;
            });
            $rootScope.flag=!$rootScope.flag;
        };
        //删除选中的对象
        $rootScope.removeSelected=function(){
            var tempArr=[];
            angular.forEach($rootScope.voList,function(item,index,array){
                if(item.completed==false) {tempArr.push(item)}
            });
            $rootScope.voList=tempArr;
        };
    }]);
})(angular);

