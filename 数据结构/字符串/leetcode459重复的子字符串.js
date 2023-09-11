/**
 * @param {string} s
 * @return {boolean}
 */

//前缀表统一不减一
///  kmp算法
var repeatedSubstringPattern = function(s) {
            if(s.length === 0) return false;

            const getNext = (s) => {///创建一个获取next的函数
                let next = [];
                let j = 0;

                next.push(j); ///   更新next数组  j的值作为next记录 指向返回下一个的 位置值
                
                for(let i = 1 ; i < s.length ; ++i){
                    while(j > 0 && s[i] !== s[j]){
                        j = next[j - 1];
                    }
                    if(s[i] === s[j]){
                        j++;
                    }
                        next.push(j);
                }
                return next;    
            }
            let next = getNext(s); /// 函数从这里进入

            if(next[next.length - 1] !== 0 && s.length %(s.length - next[next.length - 1]) === 0) return true;
                   return false; /// 最后判断
        };