var reverseStr = function(s, k) {
    const arr = Array.from(s)
    const n = s.length
    for(let i = 0;i < n;i += 2*k){
        reverse(i,Math.min(i+k,n)-1,arr)
    }
    return arr.join('')
};

const reverse = (left,right,arr) => {
    let temp
    while(left < right){
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
}