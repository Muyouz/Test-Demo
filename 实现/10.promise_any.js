let a = function (promises) {
    //可以判断是否是数组，不是直接报错
    //可以判断是否数组为空  如果是直接reject
    let num = 0
    let errorList = []
    return new Promise((resolve, reject) => {
        let addError = (error, index) => {
            errorList[index] = error;
            num++
            if (promises.length === num) {
                reject(errorList)
            }
            // //听起来更标准的写法
            // if (promises.length === num) {
            //     // 创建一个 AggregateError 实例，如果浏览器不支持，可以用普通 Error 替代
            //     const aggregateError = new (AggregateError || Error)(errorList);
            //     reject(aggregateError);
            // }
        }
        promises.forEach ( (promise, index) => {
            if (promise instanceof Promise) {
                promise.then(res => resolve, error => addError(index, error))
                //这里可以用catch代替error的处理，更具容错性
                //.catch(error => addError(index, error))
            } else {
                resolve(promise)
            }
        })
    })
}