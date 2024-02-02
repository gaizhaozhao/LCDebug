var maxSlidingWindow = function(nums, k) {
    const q = []
    const ans = []
    for(let i = 0;i < nums.length;i++){
        // 这一步是为了满足单调队列性质，即凡是比队中元素大的元素，那么就先把队中元素清空直至不大为止
        while(q.length && nums[i] >= nums[q[q.length - 1]])
        q.pop()

        // 清完后入队
        q.push(i)

        // 滑动窗口过了后，老元素该清空了
        while(q[0] <= i-k)
        q.shift()
        // 只要i走到k-1的为止，那么从此刻开始，i没自增1，都能找到核实的人选
        if(i >= k-1)
        ans.push(nums[q[0]])
    }
    return ans
};