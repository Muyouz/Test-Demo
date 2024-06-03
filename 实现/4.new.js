function Person(name, age) {
    this.name = name;
    this.age = age;

    this.hobits = ['sleep', 'eat'];
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

Person.prototype.sex = 'male';


//四步，创建对象并赋值，原型链指向，this指向，返回对象

// function objectFactory() {
//     let obj = new Object();

//     Constructor = Array.prototype.shift.call(arguments)

//     obj.__proto__ = Constructor.prototype;
//     const ret = Constructor.apply(obj, arguments);

//     return typeof ret === 'object' ? ret : obj
// }







function objectFactory() {
    let obj = new Object();

    let args = [...arguments];
    let Constructor = Array.prototype.shift.call(args)

    obj.__proto__ = Constructor.prototype
    let ret = Constructor.apply(obj, args)

    return typeof ret === 'object' ? ret : obj;
}