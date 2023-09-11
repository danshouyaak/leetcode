/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    //stack 用来存放nums下，栈里面的用过后弹出
    let stack = []
    let res = Array(temperatures.length).fill(0)
    stack.push(0)
    for (let i = 1; i < temperatures.length; i++) {
        const top = stack[stack.length - 1]
        if (temperatures[i] <= temperatures[top]) {
            stack.push(i)
        } else {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const top = stack.pop()
                res[top] = i - top
            }
            stack.push(i)
        }
    }
    console.log(res)
    return res
};