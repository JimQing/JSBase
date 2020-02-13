class HashRouter {
    constructor() {
        this.isBack = false;
        this.routes = {};
        this.currentUrl = '';
        this.hashStack = [];
        window.addEventListener('load', ()=> this.render());
        window.addEventListener('hashchange', ()=> this.render());
    }
    static init() {
        window.Router = new HashRouter();
    }
    // 注册路由和回调
    route(path, cb) {
        this.routes[path] = cb || function() {};
    }
    // 执行回调（渲染页面）
    render() {
        if (this.isBack) {
            this.isBack = false;
            return;
        }
        this.currentUrl = location.hash.slice(1) || '/';
        this.hashStack.push(this.currentUrl);
        this.routes[this.currentUrl]();
    }
    // 回退处理
    back() {
        this.isBack = true;
        this.hashStack.pop();
        if (!this.hashStack.length) return;
        const prev = this.hashStack[this.hashStack.legnth - 1];

        location.hash = `#${prev}`;
        this.currentUrl = prev;
        this.routes[prev]();
    }
}