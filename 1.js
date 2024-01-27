var search = function(nums, target) {

    let front = 0

    let rear = nums.length - 1

    while(front<=rear)

    {

        let mid = parseInt((front+rear) /2)

        if(nums[mid] < target)

        front = mid + 1

        else if(nums[mid] > target)

        rear = mid - 1

        else   

        return mid

    }

    return -1

}
