// 代理模式
/**
 * 代理模式是防止能够直接访问到目标对象，在目标对象前增加一个秘书
 * 通过秘书来处理一些访问的操作（类似权限校验)
 * 事件代理就用到了代理模式。
 */

let template = `
    <ul id="ul">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
`;
let ul = document.querySelector('#ul')
ul.addEventListener('click', (event) => {
    console.log(event.target);
});

// 由父节点统一处理不确认li的点击事件。

