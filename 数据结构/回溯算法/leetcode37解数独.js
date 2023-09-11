/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    //判断是否能放该数字
    function isValid(row, col, val, board) {
        let len = board.length
        //行不能放
        for (let i = 0; i < len; i++) {
            if (board[row][i] === val) {
                return false
            }
        }
        //列不能重复
        for (let i = 0; i < len; i++) {
            if (board[i][col] === val) {
                return false
            }
        }
        //判断小九宫格里有没有重复放置
        let startRow = Math.floor(row / 3) * 3
        let startCol = Math.floor(col / 3) * 3
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === val) return false
            }
        }
        return true
    }
    function backtracking() {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] !== '.') continue
                for (let val = '1'; val <= '9'; val++) {
                    if (isValid(i, j, `${val}`, board)) {
                        board[i][j] = `${val}`
                        if (backtracking()) {
                            return true // 成功放置数字后返回true 继续向后递归
                        }
                        board[i][j] = `.`
                    }
                }
                return false // 放置该数字不了 直接向上一直返回false
            }
        }
        return true
    }
    backtracking(board)
    return board
};