// 发布订阅
/**
 * 发布订阅又称观察者模式，通过一对一或者一对多的依赖关系，当发布改变信息时
 * 所有订阅了的用户就能收到改变的通知，从而做出响应。
 */

// Vue的双向绑定
var keyObject = {};
var obj = {};

Object.defineProperty(obj, 'key', {
    enumerable: false,
    get: function() {
        return obj;
    },
    set: function(val) {
        obj = val;
    }
});

// Vue的双向绑定 Proxy版本
var keyObject2 = {
    myKey: 123
};
var obj2 = new Proxy(keyObject2, {
    set(target, key, val) {
        if (key) {
            target[key] = val;
            return;
        }
        target = val;
    },
    get(target, key) {
        return key ? target[key] : target;
    }
})