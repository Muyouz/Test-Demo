Function.prototype.apply222 = function(crx, args) {
    crx = crx || window;
    crx.fn = this;
    let reaults = args ? crx.fn(...args) : crx.fn();
    delete crx.fn;
    return reaults;
}

let a = {
    name: 'a',
}

function hi (newAge, newSex) {
    console.log(this.name, newAge, newSex);
}

hi.apply222(a, [18, '男']); //与call类似  但是参数是数组