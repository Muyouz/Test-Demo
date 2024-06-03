class subPub {
    constructor () {
        this.events = {}
    }

    subscribe (event, callback) {
        if (!event || typeof callback !== 'function') {
            console.log( '参数错误' )
            return
        }
        if (!this.events[event]) {
            this.events[event] = [callback]
        } else {
            this.events[event].push(callback)
        }
    }

    unsubscribe (event, callback) {
        if (!event || typeof callback !== 'function') {
            console.log( '参数错误' )
            return
        }
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb != callback)
        }
    }

    publish (event, data) {
        if (!event) {
            console.log( '参数错误' )
            return
        }
        if (this.events[event]) {
            this.events[event].forEach((callback) => {
                callback(data)
            })
        }
    }
}