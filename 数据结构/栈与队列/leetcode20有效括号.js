
//// 1. 使用map
// var isValid = function(s) {
//             const stack = [];

//             map = {
//                 "(" : ")",
//                 "{" : "}",
//                 "[" : "]"
//             }

//             for(const x of s){
//                 if(x in map){  /// key存在吗
//                     stack.push(x);
//                     continue;  // 添加之后直接进入下一轮循环
//                 }
//                 if(map[stack.pop()] !==x) return false;
//                       //直接获取上一个值作为map的key ，用来怕判断和新添加的相不相等
//             }

//             return !stack.length;
// };

/////      2.使用栈
// var isValid = function(s){
//     if(s.length % 2 !== 0) return false;
//     let satck = [];

//     for(let i = 0 ; i < s.length ; i++){
//         if(s[i] === '('){
//             satck.push(')');
//         }else if(s[i] === '{'){
//             satck.push('}');
//         }else if(s[i] === '['){
//             satck.push(']');
//         }else if(satck.empty() ||s[i] != satck.top()){
//             return false;
//         }else{
//             satck.pop();
//         }
//     }
//     return  !satck.length;

// }

var isValid = function(s){
    if(s.length % 2 == 0) return false;
    const satck = [];
    for(let i = 0; i < s.length ; i++){
        let c = s[i];
        switch (c){
            case '(':
                satck.push(')');
                break;
            case '{' :
                satck.push('}');
                break;
            case '[' :
                satck.push(']');
                break;
            default:
                if(c !=satck.pop()){
                    return false;
            }
        }
    }
    return  !satck.length;
}