
let topKFrequent = function(nums, k) {
    let map = new Map(), heap = [,]
    nums.map((num) => {
        if(map.has(num)) map.set(num, map.get(num)+1)
        else map.set(num, 1)
    })
    
    // 如果元素数量小于等于 k
    if(map.size <= k) {
        return [...map.keys()]
    }
    
    // 如果元素数量大于 k，遍历map，构建小顶堆
    let i = 0
    map.forEach((value, key) => {
        if(i < k) {
            // 取前k个建堆, 插入堆
            heap.push(key)
            // 原地建立前 k 堆
            if(i === k-1) buildHeap(heap, map, k)
        } else if(map.get(heap[1]) < value) {
            // 替换并堆化
            heap[1] = key
            // 自上而下式堆化第一个元素
            heapify(heap, map, k, 1)
        }
        i++
    })
    // 删除heap中第一个元素
    heap.shift()
    return heap
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (heap, map, k) => {
    if(k === 1) return
    // 从最后一个非叶子节点开始，自上而下式堆化
    for(let i = Math.floor(k/2); i>=1 ; i--) {
        heapify(heap, map, k, i)
    }
}

// 堆化
let heapify = (heap, map, k, i) => {
    // 自上而下式堆化
    while(true) {
        let minIndex = i
        if(2*i <= k && map.get(heap[2*i]) < map.get(heap[i])) {
            minIndex = 2*i
        }
        if(2*i+1 <= k && map.get(heap[2*i+1]) < map.get(heap[minIndex])) {
            minIndex = 2*i+1
        }
        if(minIndex !== i) {
            swap(heap, i, minIndex)
            i = minIndex
        } else {
            break
        }
    }
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

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

