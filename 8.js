var strStr = function(haystack, needle) {
    const n = haystack.length
    const m = needle.length
    const pi = new Array(m).fill(0)
    for(let i = 1,j=0;i < m;i++){
        while(j > 0 && needle[i] !== needle[j]){
            j = pi[j-1]
        }
        if(needle[i] === needle[j]){
            j++
        }
        pi[i] = j
    }
    for(let i = 0,j = 0;i<n;i++){
        while(j > 0 && haystack[i] !== needle[j]){
            j = pi[j-1]
        }
        if(haystack[i] === needle[j])[
            j++
        ]
        if(j === m)
        return i-m+1

    }
    return -1
};