/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    //棋盘
    function tranfromChessBoard(chessBoard) {
        let chessBoardback = []
        chessBoard.forEach(row => {
            let rowStr = ''
            row.forEach(value => {
                rowStr += value
            })
            chessBoardback.push(rowStr)
        })
        return chessBoardback
    }

    //判断该位置放皇后是否合法
    function isValid(row, col, chessBoard, n) {
        //同一列
        for (let i = 0; i < row; i++) {
            if (chessBoard[i][col] === 'Q') return false
        }
        //对角线
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chessBoard[i][j] === 'Q') return false
        }
        //对角线
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (chessBoard[i][j] === 'Q') return false
        }

        return true
    }

    let res = []
    const backTracking = (row, chessBoard) => {
        //遍历到叶子节点 收获结果
        if (n === row) {
            res.push(tranfromChessBoard(chessBoard))
            return
        }
        for (let col = 0; col < n; col++) {
            //先判断在该位置放皇后是否合法
            if (isValid(row, col, chessBoard, n)) {
                chessBoard[row][col] = 'Q'
                backTracking(row + 1, chessBoard)
                chessBoard[row][col] = '.'
            }
        }
    }


    let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
    backTracking(0, chessBoard)
    return res
};