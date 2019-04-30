/*
* @Author: JimQing
* @Date:   2018-06-12 10:12:14
* @Last Modified by:   JimQing
* @Last Modified time: 2018-06-23 17:46:51
*/
let 
const

// let 用于定义变量,不存在变量提升,不能重复定义,块级作用域
// const 用于定义常量,不能重复定义
let r = 2;
r = 4;
console.log(r);

const pi = 3.1415926;
pi = 10; // 报错,不能重复赋值

// 不能重复定义
var foo = 1;
var foo = 2;
console.log(foo);

let bar = 1;
let bar = 2;
console.log(bar); //报错,不能重复声明同一个变量

// 块级作用域 {} 防止{}里边的变量变成全局变量
if(true){
    var test = 1;
}
console.log(test);// 可以输出

if(true){
    let test1 = 1;
}
console.log(test1);// 不可以输出,会报未定义，但是依旧有声明

// 块级作用域2 
let arr = [1,2,3,4];
for(var i = 0 , iLength = arr.length ; i<iLength ; i++)
{
    // do nothing
} 
console.log(i); //若用var会输出,若用let,报错

// 不存在变量提升
console.log(foo);
var foo = 1;  // 输出undefind

console.log(foo);
let foo = 1;  // 报错



