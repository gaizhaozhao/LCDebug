var sortedSquares = function(nums) {

    let front = 0,rear = nums.length-1

    let arr = new Array(nums.length)

    let num1,num2,j=nums.length-1

    for(let i = 0;i<nums.length;i++)

    {

        num1 = nums[front] * nums[front]

        num2 = nums[rear] * nums[rear]

        if(num1 > num2)

        {

            arr[j--] = num1

            front++

        }

        else

        {

            arr[j--] = num2

            rear--

        }

    }

    return arr

};
