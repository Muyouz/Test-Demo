// Function.prototype.bind222 = function (crx, args) {
//     if (typeof this !== 'function') throw new TypeError('error') //关键点4,判断是否为函数
//     crx = crx ? crx : window //关键点3，crx为空时，默认为window
//     let realFn = this
//     let realArgs = args ? [...args] : [] //关键点1，参数传递值传递
    
//     let midObj = {} //关键点2，创建一个中间对象，让backFn的原型指向这个中间对象，防止污染

//     function backFn () {
//         let backArgs = [...realArgs, ...arguments]
//         return realFn.apply(this instanceof midObj ? this : crx, backArgs) //关键点3，判断是否为new调用，如果是，则this为backFn的实例，否则为crx
//     }

//     midObj.prototype = this.prototype
//     backFn.prototype = new midObj() //关键点2

//     return backFn;
// }


























Function.prototype.bind333 = function (crx, args) {
    if (typeof this !== 'function') throw new TypeError('error')
    let trueFn = this
    let trueArgs = args ? [...args] : []

    let midObj = Object.create(this.prototype)
    function backFn () {
        let backArgs = [...trueArgs, ...arguments]
        return trueFn.apply(this instanceof backFn ? this : crx, backArgs)
    }
    
    backFn.prototype = midObj;
    return backFn;
}

let foo = {
    value: 1
}
function bar (name, age) {
    console.log(this.value)
    console.log(name, age)
}

const bindFoo = bar.bind333(foo, 'heiheihei')
bindFoo('18')