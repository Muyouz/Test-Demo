const all = promises => {
    let results = [];
    let count = 0;

    return new Promise ((resolve, reject) => {
        const addData = (res, index) => {
            results[index] = res
            count++
            if (count === promises.length) {
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
