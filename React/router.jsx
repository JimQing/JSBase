/*
* @Author: JimQing
* @Date:   2018-05-09 19:52:44
* @Last Modified by:   JimQing
* @Last Modified time: 2018-05-09 19:52:44
*/
// 页面路由
window.location.href = 'http://www.baidu.com';
history.back();

// hash 路由
window.location = '#hash';
window.onhashchange = function(){
    console.log('current hash:',window.location.hash);
}

//h5 路由
// 推进一个状态,会在历史记录里多一条记录
history.pushState('name','title','/index/test');
// 替换一个状态,并不会多记录
history.replaceState('name','title','/path');
// popstate history退栈时执行的
window.onpopstate = function(){
    console.log(window.location.href);
    console.log(window.location.pathname);
    console.log(window.location.hash);
    console.log(window.location.search);
}