/*
* @Author: JimQing
* @Date:   2018-05-08 18:31:45
* @Last Modified by:   JimQing
* @Last Modified time: 2018-05-08 18:31:51
*/
import React from 'react';
import ReactDOM from 'react-dom';

// 这是基础jsx
let style = {
    color: 'r' + 'ed'
};
let jsx = <div className="jsx" style={style}>jsx....</div>;

ReactDOM.render(
    jsx,
    document.getElementById('app')
);

// 数据逻辑处理
let name = 'JimQing';
let names = ['A','B','C'];
let flag = false;
let jsx = (
    <div>
    {/* 变量的使用 */}
        <p>jsx..{name}..</p>
    {/* 条件判断 */}
        {
           flag ? <p>jsx..{name}..</p> : <p>jsx.not..{name}..</p>
        }
    {/* 数组循环 此处index是索引值（唯一） */}
        {
            names.map((name,index) => <p key={index}>Hello,I am {name}</p>)
        }
    </div>);