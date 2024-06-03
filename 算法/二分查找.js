let nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]

function searchNum (list, searchNum) {
    let left = 0
    let right = nums.length - 1
    let searchNumArea = -1

    while (right >= left) {
        let mid = left + Math.floor((right - left) / 2)
        if (list[mid] === searchNum) {
            searchNumArea = mid
            right = mid - 1
        } else if (searchNum > list[mid]) {
            
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return searchNumArea
}

searchNum(nums, 7)