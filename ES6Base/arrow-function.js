/*
* @Author: JimQing
* @Date:   2018-06-23 17:46:38
* @Last Modified by:   JimQing
* @Last Modified time: 2018-07-16 08:51:18
*/
/* 箭头函数 => 
*  参数 => 表达式     
*  继承外层作用域
*  不能用构造函数
*  没有prototype
*/
let value = 2;
let double = x =>  2*x;
let treble = x =>  {
    return 2*x;
}
console.log('double',double(value));
console.log('treble',terble(value));

// 没有独立作用域
var obj ={
    commonFn : function(){
        console.log(this);  //此this是指向obj的
    },
    arrowFn : () => {
        console.log(this);  //此this是指向window(obj所在作用域)
    }
}
obj.commonFn();
obj.arrowFn();

// 没有构造函数
let Animal = function(){

}
let animal = new Animal();
console.log(animal); //输出为Animal的一个对象(有构造方法)

let Animal = () => {
    
}

let animal = new Animal();
console.log(animal);

// 没有prototype
let commonFn = function(){};
let arrowFn = ()=>{}

console.log(commonFn.prototype);
console.log(arrowFn.prototype);