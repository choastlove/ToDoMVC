/*
* @Author: clearlove
* @Date:   2017-01-06 13:12:54
* @Last Modified by:   clearlove
* @Last Modified time: 2017-01-06 13:13:16
*/

'use strict';
var gulp = require('gulp');//调用gulp库
var concat = require('gulp-concat');    //调用gulp-concat库，用来把相同文件合并成一个文件；
gulp.task("fn2",function(){     //定制一个名为fn2的任务方法（函数）
    return gulp.src('views/*.html')    //找到css文件夹下的所有格式为css的文件
        .pipe(concat('index.html'))  //合并成index.css
        .pipe(gulp.dest('views/'));   //输出到css文件夹下
});