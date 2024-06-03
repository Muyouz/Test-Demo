class myPromise {
    constructor (executor) {
        this.initValue()
        this.initBind()
        try {
            executor (this.resolve, this.reject)
        }  catch (e) {
            this.reject(e)
        }
    }
    
    initValue () {
        this.PromiseResult = null;
        this.PromiseStatus = 'pending'
    }

    initBind () {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    resolve (value) {
        if (this.PromiseStatus !== 'pending') return
        this.PromiseResult = value;
        this.PromiseStatus = 'fulfilled'
    }

    reject (error) {
        if (this.PromiseStatus !== 'pending') return
        this.PromiseResult = error;
        this.PromiseStatus = 'rejected'
    }
}