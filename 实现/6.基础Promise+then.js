class myPromise {
    constructor (func) {
        initValue()
        initBind()
        try {
            func(this.resolve, this.reject) 
        } catch (e) {
            this.reject(e)
        }
    }

    initValue () {
        this.promiseStatus = 'padding'
        this.promiseResult = null
    }

    initBind () {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    resolve (value) {
        if (this.promiseStatus !== 'padding') return
        this.promiseStatus = 'fulfilled'
        this.promiseResult = value
    }

    reject (error) {
        if (this.promiseStatus !== 'padding') return
        this.promiseStatus = 'rejected'
        this.promiseResult = error
    }


}