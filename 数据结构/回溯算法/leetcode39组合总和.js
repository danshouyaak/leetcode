/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates = candidates.sort((a, b) => a - b)
    let res = [], path = []
    const backtracking = (index, sum) => {
        if (sum === target) {
            res.push(Array.from(path))
            return
        }
        for (let i = index; i < candidates.length; i++) {

            if (candidates[i] > target - sum) break
            path.push(candidates[i])
            sum += candidates[i]
            backtracking(i, sum)
            sum -= candidates[i]
            path.pop()
        }
        return res
    }
    return backtracking(0, 0)
};