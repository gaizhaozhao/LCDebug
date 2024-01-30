var fourSum = function (nums, target) {
    // 1.先排序
    nums.sort((a,b)=>a-b)
    // 2.封装一个n数求和，并利用递归方式实现
    const nSumTarget = (nums,n,start,target) => {
        // 3.先声明一个空数组，并且判断n和nums.length，作为跳出递归条件的第一个出口
        let res = []
        if(n < 2 || nums.length < n)
        return res
        // 4.不管几数求和，都是基于双指针原理
        let low = start,high = nums.length - 1
        // 5.先来看2数的情况，即递归最底层
        if(n === 2){
        while(low < high){
            // 6.这里的left，right其实跟三数求和判断nums[l]与nums[l-1]原理相同
            // 只是实现的方式有出入
            let sum = nums[low] + nums[high]
            let left = nums[low]
            let right = nums[high]
            if(sum < target){
                while(low < high && nums[low] === left) low++
            }else if(sum > target){
                while(low < high && nums[high] === right) high--
            }else{
                // 7.这里需要注意，如果相等，则也要调换low与high的位置
                res.push([left,right])
                while(low < high && nums[low] === left) low++
                while(low < high && nums[high] === right) high--
            }
        }
        }
        // 8.当求n数求和时
        else{
            // 9.这里的sub子集一定写在循环内，表示穷举遍历出所有可能
            for(let i = start;i < nums.length;i++){
                // 10.一定要注意传入的是target-nums[i]，这里引入了哈希表的特点，即子集能找出来，一定和nums[i]
                // 相加，刚好是n元组
                let sub = nSumTarget(nums,n-1,i+1,target-nums[i])
                for(let arr of sub){
                    arr.push(nums[i])
                    res.push(arr)
                }
                // 11.nums[i]匹配完成，就去掉沿路的与nums[i]相等的nums[i+1]
                while(i < nums.length - 1 && nums[i] === nums[i+1])
                i++
            }
        }
        return res
    }
    return nSumTarget(nums,4,0,target)
};