class HistoryRouter {
    constructor() {
        this.routers = {}
        this.listenPopState()
        this.listenLink()
    }

    listenPopState() {
        window.addEventListener('popstate', (e) => {
            const path = e.path || ''
            this.dealPathHandler(path)
        }, false)
    }

    listenLink() {
        window.addEventListener('click', (e) => {
            const dom = e.target
            if (dom.tagName.toUpperCase() === 'A') {
                const href = dom.getAttribute('href')
                if (href) {
                    e.preventDefault()
                    this.assign(href)
                }
            }
        }, false)
    }

    load() {
        const path = location.pathname
        this.dealPathHandler(path)
    }

    register(path, callback = function() {}) {
        this.routers[path] = callback
    }

    registerIndex(callback = function() {}) {
        this.routers['/'] = callback
    }

    registerNotFound(callback = function() {}) {
        this.routers['404'] = callback
    }

    registerError(callback = function() {}) {
        this.routers['error'] = callback
    }

    assign(path) {
        history.pushState({ path }, null, path)
        this.dealPathHandler(path)
    }

    replace(path) {
        history.replaceState({ path }, null, path)
        this.dealPathHandler(path)
    }

    dealPathHandler(path) {
        let handler = undefined

        if (!this.routers.hasOwnProperty(path)) {
            handler = this.routers['404'] || function() {}
        } else {
            handler = this.routers[path]
        }

        try {
            handler.call(this)
        } catch (e) {
            (this.routers['error'] || function() {}).call(this, e)
            console.error(e)
        }
    }
 }
