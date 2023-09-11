var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();//创建一个map
    //遍历数组
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {//记录里面数组，有就加一
            map.set(s[i], map.get(s[i]) + 1);//map.get为value////map.set为设置第s[i]元素    
        } else {
            map.set(s[i], 1);///如果没有的话直接把是s[i]的value的值设置为1
        }

        ////处理t
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1);
        } else {
            map.set(t[i], -1);
        }
    }
    //使用for of 函数进行返回
    for (const val of map) { // 没有加const的话相当于声明一个全局变量
        if (val[1] !== 0) return false;
    }
    return true;
}