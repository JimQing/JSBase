// 装饰器
/**
 * 装饰器，作用是给对象添加功能。在原基础增加了新的东西。
 */

function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Test {
    @readonly
    name = 'test'
}

let t = new Test()

t.name = '111'