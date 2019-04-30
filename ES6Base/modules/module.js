/*
* @Author: JimQing
* @Date:   2018-06-23 21:17:28
* @Last Modified by:   JimQing
* @Last Modified time: 2018-06-23 21:31:33
*/
let str = 'string';
let obj = {
    name : 'JimQing'
};
let fn = () => {
    console.log('module test');
}
export {
    str,
    obj,
    fn
}
// 模块默认输出
export default {a:1}