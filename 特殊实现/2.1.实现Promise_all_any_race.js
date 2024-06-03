const promise_all = (promises) => {
    let num = 0
    let results = []

    return new Promise((resolve, reject) => {
        const addData =  (res, index) => {
            results[index] = res
            num++
            if (num === promises.length) {
                resolve(results)
            }
        }

        promises.forEach((promise, index) => {
            if (promise instanceof Promise) {
                promise.then(res => addData(res, index), error => reject(error))
            } else {
                addData(promise, index)
            }
        })
    })
}

const promise_race = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            if (promise instanceof Promise) {
                promise.then(res => resolve(res), error => reject(error))
            } else {
                resolve(promise)
            }
        })
    })
}

const myPromiseAny = (promises) => {
    let nums  = 0
    let errorList = []

    return new Promise((resolve, reject) => {
        let isResolve = false
        const addError = (error, index) => {
            errorList[index] = error
            nums++
            if (nums == promises.length) {
                reject(new AggregateError(errorList))
            }
        }
        promises.forEach((promise, index) => {
            if (promise instanceof Promise) {
                promise.then(res => {
                    if (!isResolve) {
                        resolve(res)
                        isResolve = true
                    } 
                }, error => addError(error, index))
            } else {
                resolve(promise)
            }
        })
    })
}