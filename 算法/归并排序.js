function mergeSort (array) {
    if (!Array.isArray(array)) return console.log('error');
    if (array.length == 1) return array

    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)

    let newArray = merge(mergeSort(left), mergeSort(right))
    return newArray
}

function merge (left, right) {
    let list = []
    let leftPoint = 0
    let rightPoint = 0

    while (leftPoint < left.length && rightPoint < right.length) {
        if(left[leftPoint] < right[rightPoint]) {
            list.push(left[leftPoint])
            leftPoint++
        } else {
            list.push(right[rightPoint])
            rightPoint++
        }
    }
    if (leftPoint < left.length) {
        list = list.concat(left.slice(leftPoint))
    }
    if (rightPoint < right.length) {
        list = list.concat(right.slice(rightPoint))
    }
    return list
}