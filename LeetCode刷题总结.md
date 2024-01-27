# LeetCode刷题总结

1.二分查找

给定一个 `n` 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target`  ，写一个函数搜索 `nums` 中的 `target`，如果目标值存在返回下标，否则返回 `-1`。

**示例 1:**

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

**示例 2:**

```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

解答：

var search = function(nums, target) {

​    let front = 0

​    let rear = nums.length - 1

​    while(front<=rear)

​    {

​        let mid = parseInt((front+rear) /2)

​        if(nums[mid] < target)

​        front = mid + 1

​        else if(nums[mid] > target)

​        rear = mid - 1

​        else   

​        return mid

​    }

​    return -1

}

总结：①else后面不加判断语句②while判断语句中，front<=rear是有意义的；主要用于查不到的情况，你想，如果查不到，总会有一种情况是front==rear==mid，那么你观察代码，要么front++要么rear--，反正终态总会有rear<front，导致跳出循环，查询失败



2.移除元素

给你一个数组 `nums` 和一个值 `val`，你需要 **原地** 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 **原地 修改输入数组**。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

 

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

 

**示例 1：**

```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

**示例 2：**

```
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,3,0,4]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```

答：

var removeElement = function(nums, val) {

​    let j=0

​    for(let i = 0;i < nums.length;i++)

​    {

​        if(nums[i] != val)

​        {

​            nums[j++] = nums[i]

​        }

​    }

​    nums.length = j

​    return j

};

总结：①声明一个遍历指针i，和一个实际指针j②注意循环完成后要更新数组的长度



3. 有序数组的平方

给你一个按 **非递减顺序** 排序的整数数组 `nums`，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序。




**示例 1：**

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

**示例 2：**

```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

 

**提示：**

- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- `nums` 已按 **非递减顺序** 排序



**进阶：**

- 请你设计时间复杂度为 `O(n)` 的算法解决本问题

答：

var sortedSquares = function(nums) {

​    let front = 0,rear = nums.length-1

​    let arr = new Array(nums.length)

​    let num1,num2,j=nums.length-1

​    for(let i = 0;i<nums.length;i++)

​    {

​        num1 = nums[front] * nums[front]

​        num2 = nums[rear] * nums[rear]

​        if(num1 > num2)

​        {

​            arr[j--] = num1

​            front++

​        }

​        else

​        {

​            arr[j--] = num2

​            rear--

​        }

​    }

​    return arr

};

总结：①本题需要时间复杂度为O(n)，因此就需要以空间换时间

②这里运用了数学中数轴的特性，设计双指针，我们知道，数轴最左或最右的值，其平方和最大

③循环遍历时，我用了一个for循环，次数刚好为数组大小，不会出现越界的情况



4.长度最小的子数组

给定一个含有 `n` 个正整数的数组和一个正整数 `target` **。**

找出该数组中满足其总和大于等于 `target` 的长度最小的 **连续子数组** `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度**。**如果不存在符合条件的子数组，返回 `0` 。

 

**示例 1：**

```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

**示例 2：**

```
输入：target = 4, nums = [1,4,4]
输出：1
```

**示例 3：**

```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

 

**提示：**

- `1 <= target <= 109`
- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 105`



**进阶：**

- 如果你已经实现 `O(n)` 时间复杂度的解法, 请尝试设计一个 `O(n log(n))` 时间复杂度的解法

  答：

  var minSubArrayLen = function(target, nums) {

  ​    let i = 0

  ​    let lth = 99999

  ​    let count = 0

  ​    for(let j = 0;j<nums.length;j++)

  ​    {

  ​        count += nums[j]

  ​        while(count>=target)

  ​        {

  ​            if((j-i+1)<=lth)

  ​            {

  ​                lth = j - i + 1

  ​            }

  ​            count-=nums[i]

  ​            i++

  ​        }

  ​    }

  ​    if(i === 0)

  ​    return 0

  ​    else

  ​    return lth

  };

总结：①这一题开始做的时候，会纠结，如果在j不变的情况下，i++，会不会出现一种情况，就是刚好漏掉最优解，或者漏掉一个值，导致sum永远小于target，而出现找不到或者找错的情况。但是在实际写代码的过程中，其实是可以设置一个min变量，这个min永远记录了子数组的长度，留个保底

②整个函数总体框架就是一个大的for循环，循环是一个数组遍历，这个变量是一个滑动窗口的终止窗口；循环内有几个变量需要设置，一个是lth，用于记录最短子数组的长度；一个是count，用来记录当前子数组的总和

③还有一个是关于JS的易错点，就是变量一定要声明类型，如let num = 0，如果只是let num，那么num就是undefined类型，到最后报错的原因可能是NAN





5.螺旋矩阵 II

给你一个正整数 `n` ，生成一个包含 `1` 到 `n2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix` 。

 

**示例 1：**

```
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

**示例 2：**

```
输入：n = 1
输出：[[1]]
```

 

**提示：**

- `1 <= n <= 20`

答：var generateMatrix = function(n) {

​    let arr = new Array(n)

​    for(let i = 0; i < n;i++)

​    arr[i] = new Array(n)

​    for(let i = 0;i < n;i++)

​    {

​        for(let j = 0;j < n;j++)

​        {

​            arr[i][j] = 0

​        }

​    }

​    let row=0,col=0

​    let stride = 1

​    let loop = n*n

​    while(loop)

​    {

​    while(col<=n-1 && arr[row][col] === 0)

​    {

​        arr[row][col++] = stride++

​        loop--

​    }

​    col--

​    row++

​    while(row<=n-1 && arr[row][col] === 0)

​    {

​        arr[row++][col] = stride++

​        loop--

​    }

​    row--

​    col--

​    while(col >=0 && arr[row][col] === 0)

​    {

​        arr[row][col--] = stride++

​        loop--

​    }

​    col++

​    row--

​    while(row >=0 && arr[row][col] === 0)

​    {

​        arr[row--][col] = stride++

​        loop--

​    }

​    row++

​    col++

​    }

​    return arr

};

总结：这道题主要就是考察对循环边界的掌握，不过还是有一个细节点需要注意：

①声明了一个二维数组，初始值设为0，也起到了标志数组的作用

②整体循环的结构是一个大while搭配四个小while（上下左右），目的很简单，你想，如果一个矩阵很大

，可能要走好几个上下左右，所以大while就是确保如此，loop设为n*n，每次填充一个格子，loop--

③在四个小while中间会穿插两个col-- row++等类似的，为何呢，主要有两个目的，一是上一个循环跳出的条件是row=n或row=-1（col类似）的情况，这时要纠正一下，使得遍历指针重新落入数组编号范围内；第二个目的是由于循环体还有一个判断条件，就是arr[][]===0，这个时候，你就需要跳出上一个遍历的格子，对吧

6.移除链表元素

**示例 1：**

```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

**示例 2：**

```
输入：head = [], val = 1
输出：[]
```

**示例 3：**

```
输入：head = [7,7,7,7], val = 7
输出：[]
```

 答：

var removeElements = function(head, val) {

​    let q = new ListNode(0,head)

​    let p = q

​    while(p.next)

​    {

​        if(p.next.val === val)

​        {

​            p.next = p.next.next

​        }

​        else{

​        p = p.next

​        }

​    }

​    return q.next

};

总结：①链表有没有头结点处理起来很麻烦，不如自己声明一个头结点

②遍历的时候也要注意，while里的判断条件最好与循环体里的处理是一致的，这样不容易出现边界问题

③while循环体里if 和else 要注意 不要写一块了





7. 设计链表

你可以选择使用单链表或者双链表，设计并实现自己的链表。

单链表中的节点应该具备两个属性：`val` 和 `next` 。`val` 是当前节点的值，`next` 是指向下一个节点的指针/引用。

如果是双向链表，则还需要属性 `prev` 以指示链表中的上一个节点。假设链表中的所有节点下标从 **0** 开始。

实现 `MyLinkedList` 类：

- `MyLinkedList()` 初始化 `MyLinkedList` 对象。
- `int get(int index)` 获取链表中下标为 `index` 的节点的值。如果下标无效，则返回 `-1` 。
- `void addAtHead(int val)` 将一个值为 `val` 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
- `void addAtTail(int val)` 将一个值为 `val` 的节点追加到链表中作为链表的最后一个元素。
- `void addAtIndex(int index, int val)` 将一个值为 `val` 的节点插入到链表中下标为 `index` 的节点之前。如果 `index` 等于链表的长度，那么该节点会被追加到链表的末尾。如果 `index` 比长度更大，该节点将 **不会插入** 到链表中。
- `void deleteAtIndex(int index)` 如果下标有效，则删除链表中下标为 `index` 的节点。



**示例：**

```
输入
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
输出
[null, null, null, null, 2, null, 3]

解释
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
myLinkedList.get(1);              // 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
myLinkedList.get(1);              // 返回 3
```

 答：

var MyLinkedList = function() {

​    this.size = 0

​    this.head = new ListNode(0)

};

/** 

 * @param {number} index

 * @return {number}

 */

MyLinkedList.prototype.get = function(index) {

​    if(index < 0 || index >= this.size)

​    {

​        return -1

​    }

​    let p = this.head

​    for(let i = 0;i <= index;i++)

​    {

​        p = p.next

​    }

​    return p.val

};

/** 

 * @param {number} val

 * @return {void}

 */

MyLinkedList.prototype.addAtHead = function(val) {

​    this.addAtIndex(0,val)

};

/** 

 * @param {number} val

 * @return {void}

 */

MyLinkedList.prototype.addAtTail = function(val) {

​    this.addAtIndex(this.size,val)

};

/** 

 * @param {number} index 

 * @param {number} val

 * @return {void}

 */

MyLinkedList.prototype.addAtIndex = function(index, val) {

​    if(index < 0 || index > this.size)

​    {

​        return

​    }

​    this.size++

​    let p = this.head

​    for(let i = 0;i < index;i++)

​    {

​        p = p.next

​    }

​    let Toadd = new ListNode(val)

​    Toadd.next = p.next

​    p.next = Toadd

};

/** 

 * @param {number} index

 * @return {void}

 */

MyLinkedList.prototype.deleteAtIndex = function(index) {

​    if(index < 0 || index >= this.size)

​    {

​        return

​    }

​    this.size--

​    let p = this.head

​    for(let i = 0;i < index;i++){

​        p = p.next

​    }

​    p.next = p.next.next

};

总结：①解答此类题目时，要看懂题目的“潜规则”，比如本题中，链表的长度this.size是不算头结点的；链表的index也是不算的。但是你说链表中存不存在头结点呢？是存在的，那么你看在函数addAtIndex()中，let p = this.head，那么后面p进行遍历的时候，for循环是不是写成了i < index 而不是i < index，所以这方面还是需要注意的



8.反转链表

```
head
```

**示例 1：**

```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

**示例 2：**

```
输入：head = [1,2]
输出：[2,1]
```

**示例 3：**

```
输入：head = []
输出：[]
```

答：

var reverseList = function(head) {

​    let q = new ListNode(0)

​    let p = head

​    let m

​    while(p != null)

​    {

​        m = p.next

​        p.next = q.next

​        q.next = p

​        p = m

​    }

​    return q.next

};

总结：①本题用头插法即可，画图不容易迷

9.两两交换链表中的节点

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

**示例 1：**

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

**示例 2：**

```
输入：head = []
输出：[]
```

**示例 3：**

```
输入：head = [1]
输出：[1]
```

答：

var swapPairs = function(head) {

​    // 为了方便起见，统一添加一个头结点cur，统一运算

​    let cur = new ListNode(0,head) 

​    let p = cur

​    // mark是用来记录头结点的，return用，flag表示只记录一次，防止while覆盖

​    let mark = head

​    let flag = 1

​    // 好好想想为什么如此设置p和while条件

​    while(p.next && p.next.next)

​    {

​        // 按逻辑遍历即可

​        let pre1 = p.next,pre2 = p.next.next

​        // 运行一遍后下次if过不去了

​        if(flag === 1)

​        {

​        mark = pre2

​        flag = 0

​        }

​        p.next = pre2

​        pre1.next = pre2.next

​        pre2.next = pre1

​        // 头一次是p pre1 pre2  那么下一次循环也要恢复类似的状态

​        p = pre1

​    }

​    return mark

};

总结：链表题千万要记住，不能做一题会一题，而是会一题，就要晓得通用的一些模板方法

例如本题，①首先，题目基本都没要求是否有头结点（空结点），在这样的情况下，你就需要声明空结点，统一运算②两两交换，是不是说，while循环里设置p.next 以及p.next.next，这样能够二隔三，即两个条件取交集，把原链表为空的，或原链表不为空但是是奇数个的情况③如果想要实现②，那么是不是需要有统一的模板p pre1 pre2



10.删除链表的倒数第 N 个结点

**示例 1：**

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

**示例 2：**

```
输入：head = [1], n = 1
输出：[]
```

**示例 3：**

```
输入：head = [1,2], n = 1
输出：[1]
```

**提示：**

- 链表中结点的数目为 `sz`
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

var removeNthFromEnd = function(head, n) {

​    //统一计算

​    let cur = new ListNode(0,head)

​    //双指针遍历，让p先走n步

​    let pre = cur,p = cur

​    let count = n

​    while(count)

​    {

​        p=p.next

​        count--

​    }

​    while(p.next)

​    {

​        p=p.next

​        pre=pre.next

​    }

​    //仔细想想为什么不用管待删节点的next指针

​    pre.next=pre.next.next

​    return cur.next

};

总结：发现了一个问题，做题时很容易让pre.next.next = null：你以为的是，让pre节点后面的节点的指针域指向空；实际的是，让pre节点后面的后面的节点变为null



11.链表相交

给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 `null` 。

图示两个链表在节点 `c1` 开始相交**：**

[![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)

题目数据 **保证** 整个链式结构中不存在环。

**注意**，函数返回结果后，链表必须 **保持其原始结构** 。

 

**示例 1：**

[![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png)](https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png)

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

**示例 2：**

[![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png)](https://assets.leetcode.com/uploads/2018/12/13/160_example_2.png)

```
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

**示例 3：**

[![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_3.png)](https://assets.leetcode.com/uploads/2018/12/13/160_example_3.png)

```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
```

**提示：**

- `listA` 中节点数目为 `m`
- `listB` 中节点数目为 `n`
- `0 <= m, n <= 3 * 104`
- `1 <= Node.val <= 105`
- `0 <= skipA <= m`
- `0 <= skipB <= n`
- 如果 `listA` 和 `listB` 没有交点，`intersectVal` 为 `0`
- 如果 `listA` 和 `listB` 有交点，`intersectVal == listA[skipA + 1] == listB[skipB + 1]`

答：

var getIntersectionNode = function(headA, headB) {

​    let pA = headA

​    let pB = headB

​    let numA=0,numB=0

​    while(pA)

​    {

​        pA=pA.next

​        numA++

​    }

​    while(pB)

​    {

​        pB=pB.next

​        numB++

​    }

​    pA = headA

​    pB = headB

​    let count = numB>numA?numB-numA:numA-numB

​    while(count)

​    {

​        if(numB>numA)

​        {

​            pB=pB.next

​            count--

​        }

​        else

​        {

​            pA=pA.next

​            count--

​        }

​    }

​    while(pA && pB && (pA != pB))

​    {

​            pA=pA.next

​            pB=pB.next

​    }

​    return pA

};





12. 环形链表 II

给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 null。*

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：pos 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。




**示例 1：**

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

答：

var detectCycle = function(head) {

​    //如果为空链表或者只有一个元素的链表，直接不是环形表

​    if(!head || !head.next)

​    return null

​    //慢指针一次走一步，快指针一次走两步，注意哈，要提前走，不要在循环里走，不然while中fast会===slow而跳出

​    let slow = head.next,fast = head.next.next

​    //fast与fast.next防越界

​    while(fast && fast.next && fast !== slow)

​    {

​        fast = fast.next.next

​        slow = slow.next

​    }

​    //如果跳出循环的是由于越界造成的，说明没有环

​    if(!fast || !fast.next)

​    return null

​    //有环，fast原地不动，slow从头开始，然后俩人同时一步一步走

​    slow = head

​    while(slow !== fast)

​    {

​        slow = slow.next

​        fast = fast.next

​    }

​    // 相遇点即为入口点

​    return slow

};

总结：这一题牵扯到数学知识，如下：

![img](https://code-thinking-1253855093.file.myqcloud.com/pics/20220925103433.png)

x为从头到入口的距离，y是入口处到slow与fast相遇点的距离，z是从相遇点再顺着走到入口的距离

则slow走的距离的二倍等于fast走的距离：

(x+y) * 2 = n(y + z) + y + x(绕了n圈，然后再加上入口到相遇点距离，再加上从头到入口的距离)

化简求x得：

x = n(y+z) - y

然后可以分为两方面理解：①如果x无限小，导致fast点只绕了一圈就相遇，即n=1,x=z。x=z代表什么意思呢，就是slow点如果再从头开始，fast保持相遇点不动，俩人同频走，是不是当slow点到了入口，fast也顺着换走出来走到入口了

②如果x无限大，导致fast饶了n圈后二者才相遇，x=n(y+z)-y，这是又如何呢？你看n(y+z)-y，数学角度是不是n圈欠了个y？那是不是意思是slow再从头开始，二者同频走，当slow到了入口，fast也到了入口（走了n圈又欠了个y）

综上，算法就是先判定有没有环，有环之后，找到相遇点，在保持①slow点从头走，fast再相遇点走②二者同频一人一步③再次相遇点就是入口点



13.有效的字母异位词



给定两个字符串 `*s*` 和 `*t*` ，编写一个函数来判断 `*t*` 是否是 `*s*` 的字母异位词。

**注意：**若 `*s*` 和 `*t*` 中每个字符出现的次数都相同，则称 `*s*` 和 `*t*` 互为字母异位词。

 

**示例 1:**

```
输入: s = "anagram", t = "nagaram"
输出: true
```

**示例 2:**

```
输入: s = "rat", t = "car"
输出: false
```

 

**提示:**

- `1 <= s.length, t.length <= 5 * 104`
- `s` 和 `t` 仅包含小写字母



答：var isAnagram = function(s, t) {

​    const arr1 = new Array(26).fill(0)

​    const arr2 = new Array(26).fill(0)

​    const base = 'a'.charCodeAt()

​    for(let i = 0;i < s.length;i++){

​        arr1[s[i].charCodeAt()-base]++

​    }

​    for(let i = 0;i < t.length;i++){

​        arr2[t[i].charCodeAt() - base]++

​    }

​    for(let i = 0;i < arr2.length;i++){

​        if(arr1[i] != arr2[i])

​        return false

​    }

​    return true

};

总结：这一题思路其实并不难，就是空间换时间，因为只有英文小写字母，那就声明一个26大小的空数组，数组存的是字符串中某个字母出现的频率，不过要注意JS的实现方式

①数组实现 const arr = new Array(26).fill(0)②字符串的ASC11码：'a'.charCodeAt()



14.两个数组的交集



给定两个数组 `nums1` 和 `nums2` ，返回 *它们的交集* 。输出结果中的每个元素一定是 **唯一** 的。我们可以 **不考虑输出结果的顺序** 。

 

**示例 1：**

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

**示例 2：**

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

 

**提示：**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`



答：

var intersection = function(nums1, nums2) {

​    if(nums1.length > nums2.length){

​        let set1 = new Set(nums1)

​        let set2 = new Set(nums2)

​        for(let v of set1){

​            if(!set2.has(v)){

​                set1.delete(v)

​            }

​        }

​         return Array.from(set1)

​    }

​    else

​    {

​        let set1 = new Set(nums2)

​        let set2 = new Set(nums1)

​        for(let v of set1){

​            if(!set2.has(v)){

​                set1.delete(v)

​            }

​        }

​         return Array.from(set1)

​    }

   

};

总结：这一题整体的思路就是利用了JS中set集合的原理，set集合其实就是一个不允许有重复值的“数组”。本题提供的两个数组一长一短，可以把长的数组转换为集合set1，把短的数组也转换为集合set2，然后遍历set2，如果set2中的value值存在但是在set1中找不到，那么就从set1中删除该值，然后返回set1，即是交集。

注意一些JS实现：①集合的转换 let set = new Set(nums)，注意nums是数组②set的遍历：let value of set

③set.has set.value④注意set不是集合，返回时需要转换为数组 return Array.from(set)





15.快乐数

编写一个算法来判断一个数 `n` 是不是快乐数。

**「快乐数」** 定义为：

- 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
- 然后重复这个过程直到这个数变为 1，也可能是 **无限循环** 但始终变不到 1。
- 如果这个过程 **结果为** 1，那么这个数就是快乐数。

如果 `n` 是 *快乐数* 就返回 `true` ；不是，则返回 `false` 。

 

**示例 1：**

```
输入：n = 19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

**示例 2：**

```
输入：n = 2
输出：false
```

 

**提示：**

- `1 <= n <= 231 - 1`

答： var getSum = function(n){

​     let sum = 0

​     while(n){

​         sum+=(n%10)**2

​         n = Math.floor(n/10)

​     }

​     return sum

 }

var isHappy = function(n) {

​    let set = new Set()

​    let p = n

​    while(p !== 1 && !set.has(p)){

​        set.add(p)

​        p = getSum(p)

​    }

​    if(p === 1)

​    return true

​    else

​    return false

};

总结：这一题不应该陷入无限循环的陷阱，本身代码也实现不了无限循环的场景。那么跳出循环的条件要么就是遍历的数字为1或者遍历的数字又变成了出现过的数字，二者有其一就跳出循环。那么针对这两个循环条件，我们就对应了两条解题路线。一是你需要封装一个getSum函数，用来记录每“快乐一次”数值的变化；二是需要声明一个set集合，记录当前的快乐数有没有出现过

反思：解题时需要知道你写的函数要实现什么功能，不要追求时间，就比如你写了个var getSum（）函数，漏写了返回值，这都是不该出现的错误



16.两数之和

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *target*  的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

 

**示例 1：**

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**示例 2：**

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

**示例 3：**

```
输入：nums = [3,3], target = 6
输出：[0,1]
```

 

**提示：**

- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- **只会存在一个有效答案**



**进阶：**你可以想出一个时间复杂度小于 `O(n2)` 的算法吗？

答：var twoSum = function(nums, target) {

​    let map = new Map()

​    for(let i = 0; i < nums.length;i++){

​        if(map.has(target-nums[i])){

​            return [map.get(target-nums[i]),i]

​        }else{

​            map.set(nums[i],i)

​        }

​    }

};

总结：做到这里其实就大概理解了哈希表的作用了，就是通过牺牲空间，使得在线性的时间复杂度内一次遍历就可以完成所有操作。再者就是你想，JS不比C，它还是封装了一些map、set、array等操作的，封装的操作其实就是针对哈希表的操作，所以你不应该想哈希表的实现，而是借助已有的方法，如.has .set .get .from等一次遍历完成。

针对本题，我们可以想到的就是，首先我肯定还是需要一个空间，要不然时间复杂度太高，那么怎么弄？你想到查找的过程能不能借助map.get完成？那么我定义这样一个for循环，就把一个数组一分两半，遍历的数组的元素nums[i]。其中一半是nums[i]，这是在for遍历时直接可以拿到的，另外一半是target-nums[i]，这是在map中可以找到的。首先看一下在map中有没有，target-nums[i]，如果有 ，直接返回需要的东西；如果没有，就存起来到map中。这样相当于一次遍历，数组中的元素要么就找到了，要么找不到，放到map中完事。





17.四数相加 II

给你四个整数数组 `nums1`、`nums2`、`nums3` 和 `nums4` ，数组长度都是 `n` ，请你计算有多少个元组 `(i, j, k, l)` 能满足：

- `0 <= i, j, k, l < n`
- `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`



**示例 1：**

```
输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```

**示例 2：**

```
输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
```

 

  **提示：**

- `n == nums1.length`
- `n == nums2.length`
- `n == nums3.length`
- `n == nums4.length`
- `1 <= n <= 200`
- `-228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228`

答：var fourSumCount = function(nums1, nums2, nums3, nums4) {

​    let mapAB = new Map()

​    for(let i = 0; i < nums1.length;i++){

​        for(let j = 0; j < nums2.length;j++)

​        {

​            if(mapAB.has(nums1[i]+nums2[j]))

​            mapAB.set(nums1[i]+nums2[j],mapAB.get(nums1[i]+nums2[j]) + 1)

​            else

​            mapAB.set(nums1[i]+nums2[j],1)

​        }

​    }

​    // let MapCD = new Map()

​    let count = 0

​    for(let i = 0;i < nums3.length;i++){

​        for(let j = 0;j < nums4.length;j++){

​            if(mapAB.has(-nums3[i]-nums4[j]))

​            count += mapAB.get(-nums3[i]-nums4[j])

​        }

​    }

​    return count

};

总结：首先需要声明一下map哈，map不能片面的理解为“数组”，其实本质上就是映射。map（item，index）这里的对应关系可以是多样的，这个k-v对可以存各种你想要的kv组合，比如数字+字符串+布尔等



这一题其实你还是要想清楚一个事情，就是怎么节省操作，肯定还是需要空间换时间，怎么实现？就利用map中的kv对，其中item肯定存A+B的元素值，那么v存什么？那就存所有满足A+B值的次数。对于CD就存A+B的相反数就行



18.赎金信

给你两个字符串：`ransomNote` 和 `magazine` ，判断 `ransomNote` 能不能由 `magazine` 里面的字符构成。

如果可以，返回 `true` ；否则返回 `false` 。

`magazine` 中的每个字符只能在 `ransomNote` 中使用一次。

**示例 1：**

```
输入：ransomNote = "a", magazine = "b"
输出：false
```

**示例 2：**

```
输入：ransomNote = "aa", magazine = "ab"
输出：false
```

**示例 3：**

```
输入：ransomNote = "aa", magazine = "aab"
输出：true
```

 

**提示：**

- `1 <= ransomNote.length, magazine.length <= 105`
- `ransomNote` 和 `magazine` 由小写英文字母组成



答：var canConstruct = function(ransomNote, magazine) {

​    let arr_r = new Array(26).fill(0)

​    let arr_m = new Array(26).fill(0)

​    let base = 'a'.charCodeAt()

​    for(let i = 0;i < ransomNote.length;i++){

​        arr_r[ransomNote[i].charCodeAt() - base]++ 

​    }  

​    for(let i = 0;i < magazine.length;i++){

​        arr_m[magazine[i].charCodeAt() - base]++

​    }

​    for(let i = 0;i < arr_m.length;i++)

​    {

​        if(arr_r[i]  > arr_m[i])

​        return false

​    }

​    return true

};

总结：这一题因为都是由小写字母构成，就还是声明26大小的数组，统计出现字符的频率，比大小即可



19.三数之和

给你一个整数数组 `nums` ，判断是否存在三元组 `[nums[i], nums[j], nums[k]]` 满足 `i != j`、`i != k` 且 `j != k` ，同时还满足 `nums[i] + nums[j] + nums[k] == 0` 。请

你返回所有和为 `0` 且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

**示例 1：**

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
```

**示例 2：**

```
输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
```

**示例 3：**

```
输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
```

 

**提示：**

- `3 <= nums.length <= 3000`
- `-105 <= nums[i] <= 105`

答：var threeSum = function(nums) {

​    let result = []

​    if(nums === null || nums.length < 3)

​    return result

​    nums.sort((a,b) => a-b)

​    for(let i = 0;i < nums.length;i++){

​        if(nums[i] > 0)

​        break

​        if(i>0 && nums[i] === nums[i-1])

​        continue

​        let l = i+1

​        let r = nums.length - 1

​        while(l < r){

​            if(nums[i]+nums[l]+nums[r] === 0){

​                result.push([nums[i],nums[l],nums[r]])

​                while(l<r&&nums[l] === nums[l+1])l++

​                while(l<r&&nums[r] === nums[r-1])r--

​                l++

​                r--

​            }

​            else if(nums[i]+nums[l]+nums[r] < 0)

​            l++

​            else if(nums[i]+nums[l]+nums[r] > 0)

​            r--

​        }

​    }

​    return result

};

总结：