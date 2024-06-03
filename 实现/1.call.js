Function.prototype.call222 = function (crx) {
    crx = crx || window //优化点1，防止传进来值为null或者空
    crx.fnCall = this
    let args = []
    args = [...arguments].slice(1) //优化点2,解决剩余参数
    let reaults =crx.fnCall(...args)
    delete crx.fnCall
    return reaults //优化点3，返回值输出
}

Function.prototype.call2 = function (crx, args) {
    crx = crx ? crx : window

    crx.fn = this
    let result = crx.fn(args)
    delete crx.fn

    return result
}

let a = {
    name: 'aaa',
    age: 18,
    sex: 'man'
    //或者 return这些值
}

function hi (newName, newSex) {
    console.log(this.name, newName, newSex)
}

hi.call222(a, 'bbb', 'woman')