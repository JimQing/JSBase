// 继承
// 组合继承
function Parent(val) {
    this.val = val;
}
Parent.prototype.getVal = function() {
    return this.val;
}
function Child(val) {
    Parent.call(this, val);
}
Child.prototype = new Parent();

let obj = new Child('oobbjj');

obj.getVal();
obj instanceof Parent;
// 存在一个缺点就是在继承父类函数的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费。

// 寄生组合继承
function Parent(val) {
    this.val = val;
}
Parent.prototype.getVal = function() {
    return this.val;
}
function Child(val) {
    Parent.call(this, val);
}
Child.prototype = Object.create(Parent.prototype, {
    constructor: {
        value: Child,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

let obj = new Child('oobbjj');

obj.getVal();
obj instanceof Parent;

// ES6 Class实现继承
class Parent {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
};

class Child extends Parent {
    constructor(val) {
        super(val);
        this.val = val;
    }
}

let obj = new Child('oobbjj');
obj.getValue();
obj instanceof Child;
obj instanceof Parent;
