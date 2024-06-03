//基础版flat
function flat (array, deep = 1) {
    let result = [];

    array.forEach(element => {
        if (Array.isArray(element) && deep > 0) {
            result = result.concat(flat(element, deep - 1))
        } else {
            result.push(element)
        }
    });

    return result
}

//优化方向有两个
/* 

1.迭代代替递归，减少堆栈占用
2.使用数组添加，不产生concat的额外消耗

*/

function flat2 (array, deep) {
    const result = []
    const stack  = [[array, deep]]

    while (stack.length != 0) {
        const [currentArr, currentDeep] = stack.pop()
        currentArr.forEach(element => {
            if (Array.isArray(element) && currentDeep > 0) {
                stack.push([element, currentDeep - 1])
            } else {
                result.push(element)
            }
        })
    }

    return result
}