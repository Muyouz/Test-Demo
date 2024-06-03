// 笔试题

// 问题：给定n种不同面值的硬币，分别记为c[0], c[1], c[2], … c[n]，同时还有一个总金额k，编写一个函数计算出最少需要几枚硬币凑出这个金额k？每种硬币的个数不限，且如果没有任何一种硬币组合能组成总金额时，返回 -1。

// 示例 1：
// 输入：c[0]=1, c[1]=2, c[2]=5, k=12
// 输出：3 
// 解释：12 = 5 + 5 + 2

// 示例 2：
// 输入：c[0]=5, k=7
// 输出：-1
// 解释：只有一种面值为5的硬币，怎么都无法凑出总价值为7的零钱。

// //java
// int getMinCoinCountHelper(int amount, int[] coins) {
//  // your code
// }

// //javascript
// funtion getMinCoinCountHelper(amount, coins) {

// }

//动态规划
function qiuzuhe (k, c) {
    //存储金币数额（要取最小值）
    let list = new Array(k + 1).fill(Infinity);

    //判断最小金额
    list[0] = 0

    for (let i = 1; i <= k; i++) {
        for (let sum of c) {
            if (sum <= i) {
                list[i] = Math.min(list[i], list[i - sum] + 1)
            }
        }
    }
    return list[k] === Infinity ? -1 : list[k];
}

//贪心算法
function greedyCoinChange(k, c) {
    // 先对硬币面额进行降序排序
    c.sort((a, b) => b - a);

    let res = 0;
    let i = 0;

    // 从大到小遍历硬币面额
    while (k > 0 && i < c.length) {
        // 计算能用当前面额硬币覆盖的次数
        const count = Math.floor(k / c[i]);

        // 更新结果和剩余金额
        res += count;
        k -= count * c[i];

        // 移动到下一个硬币面额
        i++;
    }

    return res;
}