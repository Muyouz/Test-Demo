const race = promises => {
    return new Promise ((resolve, reject) => {
        promises.forEach((promise, index) => {
            if (promise instanceof Promise) {
                promise.then(res => resolve(res), error => reject(error)) 
            } else {
                resolve(promise)
            }
        })
    })
}