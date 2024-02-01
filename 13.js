var evalRPN = function(tokens) {
    let stack = []
    let a,b
    for(let item of tokens){
        if(!(item === '+') && !(item === '-') && !(item === '*') && !(item === '/')){
            stack.push(parseInt(item))
        }
        else{
            b = stack.pop()
            a = stack.pop()
            if(item === '+')
            {
                stack.push(Math.floor(a + b))
            }else if(item === '-'){
                stack.push(Math.floor(a - b))
            }else if(item === '*'){
                stack.push(Math.floor(a * b))
            }else if(item === '/'){
                stack.push(a / b > 0 ? Math.floor(a / b) : Math.ceil(a/b))
            }
        }
    }
    return stack.pop()
};