function bigNumAdd (num1, num2) {
    let stringNum1 = num1.toString()
    let stringNum2 = num2.toString()
    let maxLength = Math.max(stringNum1.length, stringNum2.length)
    let carry = 0
    let results = []

    while(stringNum1.length < maxLength) {
        stringNum1 = '0' + stringNum1
    }

    while(stringNum2.length < maxLength) {
        stringNum2 = '0' + stringNum2
    }

    for (let i = 0; i < maxLength; i++) {
        let sum = parseInt(stringNum1[i]) + parseInt(stringNum2[i]) + carry
        carry = Math.floor(sum / 10)
        sum = sum % 10
        results.unshift(sum)
    }

    if (carry === 1) {
        results.unshift(1)
    }

    return results.join('')
}