// 适配器
/**
 * 适配器，即是不影响原始实现，对下层进行一层包装。
 */
class Plug {
    getName() {
        return 'Plug';
    }
}

class Target {
    constructor() {
        this.plug = new Plug();
    }
    getName() {
        return this.plug.getName() + 'Target';
    }
}

let target = new Target();
target.getName();