/*
* @Author: JimQing
* @Date:   2018-06-23 20:56:22
* @Last Modified by:   JimQing
* @Last Modified time: 2018-06-23 21:16:52
*/
// class constructor
class Animal {
    constructor(){
        this.name = 'animal';
    }
    getName(){
        return this.name;
    }
}

class Cat extends Animal{
    constructor(){
        // 此处不使用super,那么下句的this会报错
        // super即是调用了父类的构造函数
        super(); 
        this.name = 'Cat';
    }
}
let animal = new Animal();
let cat = new Cat();
console.log(animal.getName());
console.log(cat.getName());

// 对象的写法
// 旧的
var name = 'JimQing',
    age  = '22';
var obj = {
    name : name,
    age  : age,
    getName : function(){
        return this.name;
    },
    getAge : function(){
        return this.age;
    }
}

// 新写法
let name = 'JimQing',
    age  = 22;
let obj = {
    // 变量名可以直接用作对象的属性名称
    name,
    age,
    // 对象里的方法可以简写
    getName(){
        return this.name; 
    },
    // 表达式作为属性名
    ['get'+'Age'](){
        return this.age;
    }
}

// Object 对象的扩展

// keys输出一个对象的所有属性
Object.keys(obj);

// assign把几个对象进行整合,若重合则覆盖(后面覆盖后面，只覆盖第一层)
Object.assign({a:1},{b:2});
Object.assign({a:1},{a:2,b:2});

