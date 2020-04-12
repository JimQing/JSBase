// 外观模式
/**
 * 外观模式提供了一个接口，隐藏了内部的逻辑，更加方便外部调用。
 */

// 针对不同浏览器效果进行封装
function addEvent(elm, evType, fn, useCapture) {
    if (elm.addEventListener) {
        elm.addEventListener(evType, fn, useCapture)
        return true
    } else if (elm.attachEvent) {
        var r = elm.attachEvent("on" + evType, fn)
        return r
    } else {
        elm["on" + evType] = fn
    }
}