/*
* @Author: JimQing
* @Date:   2018-05-06 13:48:35
* @Last Modified by:   JimQing
* @Last Modified time: 2018-06-25 15:47:12
*/
/*  cookie : 用户端发送请求时,会把cookie发送给后台
* 包含以下属性：
* name:cookie的名称
* domain:cookie生效的域名，二级域名可以调用一级域名的cookie
* path:cookie生效的路径
* expires:失效时间
* HttpOnly:服务器专用，不允许用户端更改(安全问题)
* 没有设置过期时间的cookie(即expires=session),只会存在一次会话中(session),浏览器一关闭即销毁
*/
/* session
*  服务器端记录请求者身份的东西(sessionId会种在cookie里，用于让后端识别当前用户)
*  同一用户发送的请求由cookie作媒介,sessionId通常放在cookie里(或者在请求参数里,或者在http的头里)
*  会话由浏览器控制,会话结束(关闭浏览器/或者其他),session也就终止了
*/
//查看cookie
document.cookie

//添加cookie expires指到期的时间，标准格林尼治时间
document.cookie = 'name=XXX;domain=XXX.com;path=/index.html;expires=Sun, 06 May 2018 05:43:33 GMT'

//修改cookie 保证domain与path相同从而锁定一个cookie进行修改
document.cookie = 'name=XXX;domain=XXX.com;path=/index.html'

//删除cookie 修改到期时间 0 or 已经过去的时间
document.cookie = 'name=XXX;domain=XXX.com;path=/index.html;expires=Sun, 06 May 2018 05:43:33 GMT'

// 获取格林尼治时间
var d = new Date(); d.UTCString();

//通用的一个setCookie方法
function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

//通用的一个getCookie的方法
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
