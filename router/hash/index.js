class HashRouter {
    constructor() {
        this.routers = {}
        window.addEventListener('hashchange', this.load.bind(this), false)
    }

    register(hash, callback = function() {}) {
        this.routers[hash] = callback
    }

    registerIndex(callback = function() {}) {
        this.routers['index'] = callback
    }

    registerNotFound(callback = function() {}) {
        this.routers['404'] = callback
    }

    registerError(callback = function() {}) {
        this.routers['error'] = callback
    }

    load() {
        const hash = location.hash.slice(1)
        let handler = undefined

        if (!hash) {
            handler = this.routers.index
        } else if (!this.routers.hasOwnProperty(hash)) {
            handler = this.routers['404'] || function() {}
        } else {
            handler = this.routers[hash]
        }

        try {
            handler.apply(this)
        } catch (e) {
            console.error(e);
            (this.routers['error'] || function() {}).call(this, e)
        }
    }
}
