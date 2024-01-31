var repeatedSubstringPattern = function(s) {
    let str = ''
    if(s.length === 1)
    return false
    for(let i = 0;i < s.length/2;i++){
        str += s[i]
        if(s === str.repeat(Math.floor(s.length/str.length)))
        return true
    }
    return false
};