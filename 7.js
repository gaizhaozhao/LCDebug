var reverseWords = function(s) {

    const arr = s.trim().split(/\s+/)

    let left = 0,right = arr.length-1

    let temp

    while(left < right){

        temp = arr[left]

        arr[left] = arr[right]

        arr[right] = temp

        left++

        right--

    }

    return arr.join(' ')

};
