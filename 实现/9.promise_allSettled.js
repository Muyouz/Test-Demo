const all = promises => {
    let results = [];
    let count = 0;

    return new Promise ((resolve, reject) => {
        const addData = (status, res, index) => {
            results[index] = {status, res}
            count++
            if (count === promises.length) {
                resolve(results)
            }
        }
        promises.forEach((promise, index) => {
            if (promise instanceof Promise) {
                promise.then(res => addData('fulfilled', res, index), error => addData('rejected', res, index)) 
            } else {
                addData('fulfilled', promise, index)
            }
        })
    })
}