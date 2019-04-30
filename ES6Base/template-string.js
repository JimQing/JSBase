/*
* @Author: JimQing
* @Date:   2018-06-23 18:02:41
* @Last Modified by:   JimQing
* @Last Modified time: 2018-06-23 18:11:49
*/
// 模板字符串基本用法
let str = `
    <div>
        <h1 class="title">123</h1>
    </div>
`;
document.querySelector('body').innerHTML =str;

// 嵌套变量的用法
let name = 'JimQing';
let str = `
    <div>
        <h1 class="title">${name}</h1>
    </div>
`;
document.querySelector('body').innerHTML =str;

// 嵌套函数的用法
let getName = () => {
    return 'JimQing 啦啦啦';
}
let str = `
    <div>
        <h1 class="title">${getName()}</h1>
    </div>
`;
document.querySelector('body').innerHTML =str;

// 循环嵌套模板
let names = ['JimQing','WJ']
let str = `
    <ul>
        ${
            names.map(name => `<li>I am ${name}</li>`).join('')
        }
    </ul>
`;
document.querySelector('body').innerHTML =str;
