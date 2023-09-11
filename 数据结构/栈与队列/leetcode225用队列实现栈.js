var MyStack = function() {
             this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
        this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
        let size = this.queue.length;//获取队列的长度

        while(size-- > 1){//把队列  尾部循环添加到队列
            this.queue.push(this.queue.shift());
        }
     return   this.queue.shift();
        ///  ---------
        ///  0,1,2,3,4
        ///  ---------
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
            const x = this.pop(); // 获取模仿栈，弹出的第一个元素
            this.queue.push(x); /// 先从pop()删除，然后在添加回去
            return x;
};      

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
        return !this.queue.length ;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */