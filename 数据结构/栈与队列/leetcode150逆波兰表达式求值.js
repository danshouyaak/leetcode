/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i = 0 ; i < tokens.length ; i++){
        let token = tokens[i];
        if(isNumber(token)){
            stack.push(parseInt(token));
        }else{
            let number2 = stack.pop();
            let number1 = stack.pop();
            if('+' === token){
                stack.push(number1 + number2);
            }else if('-' === token){
                stack.push(number1 - number2);
            }else if('*' === token){
                stack.push(number1 * number2);
            }else{
                stack.push(number1 / number2 > 0 ? Math.floor(number1 / number2) : Math.ceil(number1 / number2));
            }
        }
    }
    return stack.pop();
};

let isNumber = (token) =>{
return  !('+'=== token || '-'===token || '*' === token || '/' === token);
}