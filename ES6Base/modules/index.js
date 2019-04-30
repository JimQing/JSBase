/*
* @Author: JimQing
* @Date:   2018-06-23 21:17:15
* @Last Modified by:   JimQing
* @Last Modified time: 2018-06-23 21:42:16
*/
// as的意思就是修改名字，本来正常传过来是str，用的时候改为string
import {str as string,obj,fn} from './module.js';
//若不用指定名称,则调用的是export default字段
import something from './module.js';

console.log('string',string);
console.log(obj);
console.log(fn);
console.log(something);