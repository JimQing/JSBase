/*
* @Author: JimQing
* @Date:   2018-05-06 14:02:57
* @Last Modified by:   JimQing
* @Last Modified time: 2018-06-25 15:57:06
*/
// localStorage,浏览器退出时依旧存在
// sessionStorage,浏览器退出时就结束了销毁了

// 查看localStorage
window.localStorage

// 添加localStorage
window.localStorage.setItem('name','JimQing');

// 添加对象版,直接写{name : 'JimQing'},get回来就是{Object,Object}
window.localStorage.setItem('name',JSON.stringify({name : 'JimQing'}));

// 查看localStorage
window.localStorage.getItem('name');

// 删除localStorage
window.localStorage.removeItem('name');

// 添加sessionStorage
window.sessionStorage

// 添加localStorage
window.sessionStorage.setItem('name','JimQing');

// 添加sessionStorage
window.sessionStorage.getItem('name');

// 删除sessionStorage
window.sessionStorage.removeItem('name');

