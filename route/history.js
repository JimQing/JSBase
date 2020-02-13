class HistoryRouter {
    constructor(path) {
        this.routes = {};
        history.replaceState({path}, null, path);
        this.routes[path] && this.routes[path]();
        window.addEventListener('popstate', e=> {
            const path = e.state && e.state.path;

            this.routes[path] && this.routes[path]();
        });
    }
    static init() {
        window.Router = new HistoryRouter();
    }
    route(path, cb) {
        this.routes[path] = cb || function() {};
    }
    go(path) {
        history.pushState({path}, null, path);
        this.routes[path] && this.routes[path]();
    }
}