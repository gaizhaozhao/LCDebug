var removeDuplicates = function(s) {
    let stack = []
    for(let item of s){
        if(stack.length){
        let s = stack.pop()
        if(s != item)
        {
            stack.push(s)
            stack.push(item)
        }
        }
        else
        stack.push(item)
    }

    return stack.join("")
};