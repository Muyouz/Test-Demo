function topK (nums, k) {
    let map = new Map()
    let arr = [...new Set(nums)]

    nums.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        } else {
            map.set(element, 1)
        }
    });

    return arr.sort((a,b) => map.get(b) - map.get(a)).slice(0, k)
}