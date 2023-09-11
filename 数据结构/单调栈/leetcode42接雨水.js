var trap = function (height) {
    if (height.length <= 2) return 0
    let stack = []
    stack.push(0)
    let sum = 0

    for (let i = 1; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const mid = stack.pop()
            if (stack.length) {
                let h = Math.min(height[i], height[stack[stack.length - 1]]) - height[mid]
                let w = i - 1 - stack[stack.length - 1]
                sum += h * w
            }
        }
        stack.push(i)
    }
    return sum
}