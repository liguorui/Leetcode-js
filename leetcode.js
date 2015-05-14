/*
    * leetcode
    * auther guorui.li
    * 2015.04.22
*/

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 1
// Valid Parentheses 
// https://leetcode.com/problems/valid-parentheses/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    while(s!==(s=s.replace(/\(\)|\[\]|\{\}/g,''))){}
    return s===''
}

console.log(isValid('()[]{{}'));


})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 2
// Happy Number
// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	var arr = [n]
    while(arr.indexOf(n)===arr.length-1){ 
    	n = (''+n).split('').reduce(function(a,b){return a+b*b},0)|0;
    	arr.push(n);
    }
    return n===1
}

console.log(isHappy(7));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 3
// Number of 1 Bits 
// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('').filter(function(i){ return i!=='0' }).length
}

console.log(hammingWeight(11));


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 4
// Reverse Bits 
// https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
	var s = n.toString(2)
	return parseInt((Array(33-s.length).join('0')+s).split('').reverse().join(''),2)
}

console.log(reverseBits(43261596));
// 964176192
})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 5
// Factorial Trailing Zeroes 
// https://leetcode.com/problems/factorial-trailing-zeroes/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	for(var i=0, arr = nums.slice(0), l=arr.length, k = k%l;i<l;i++){ nums[i] = arr[i-k<0?l+i-k:i-k] }
}
var a = [1,2]
rotate(a,3)
console.log(a);


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 6
// Excel Sheet Column Number 
// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    return s.split('').reverse().reduce(function(a,b,j){ return a+(b.charCodeAt(0)-64)*Math.pow(26,j) },0)
}

console.log(titleToNumber('AZBCGH'));


})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 7
// Majority Element 
// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for(var nums = nums.sort(function(a,b){ return a-b }),ind ,i = 0, l=nums.length;i<l;i++){
    	if(nums[i]!==ind&&(ind=nums[i],true)&&(nums.lastIndexOf(nums[i])-i+1)>l/2) return nums[i]
    }
}

console.log(majorityElement([0,0,0,0,5,6,2,3,0]));

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 8
// Excel Sheet Column Title 
// https://leetcode.com/problems/excel-sheet-column-title/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	var i = 26, arr = []
	while(n>=1){
		arr.push(String.fromCharCode(((n-1)%26)+65))
		n = Math.ceil(n/26)-1
	}
	return arr.reverse().join('')
}


console.log(convertToTitle(23800122));

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 9
// Compare Version Numbers  
// https://leetcode.com/problems/compare-version-numbers/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
	version1 = version1.split(".")
	version2 = version2.split(".")
	for(var i = 0, max = Math.max(version1.length, version2.length); i < max; i++) {
		var v1 = ~~(version1[i]||0), v2 = ~~(version2[i]||0)
		if(v1 < v2) return -1
		else if(v1 > v2) return 1
	}
	return 0
}

console.log(compareVersion("01.12.23", "1.52.12"));

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 10
// Intersection of Two Linked Lists 
// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var arr = []
    for(var i=0, la=headA.length, lb=headB.length;i<la;i++){
    	if(headA[la-1-i]==headB[lb-1-i]) arr.push(headA[la-1-i])
    }
	return arr.length==0?null:arr.reverse()
}


console.log(getIntersectionNode([2,5,1,3,5,6,2],[10,2,5,65,6,2]));

})(false); // no!!!!!!


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 11
// Reverse Integer 
// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var s = (x<0?'-':'')+(Math.abs(x)+'').split('').reverse().join('')
	return s==~~s?~~s:0
}
// Example1: x = 123, return 321
// Example2: x = -123, return -321

console.log(reverse(1534236469));
console.log(reverse(-123));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 12
// Min Stack
// https://leetcode.com/problems/min-stack/

/**
 * @constructor
 */
var MinStack = function() {
	this.stack = []
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
	this.stack.push(x)
}

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
	this.stack.shift()
}

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
	return this.stack[0]
}

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
	return this.stack.sort()[0]
}

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 13
// Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
};

})(false); // no!!!!!!


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 14
// Count and Say
// https://leetcode.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  for(var v, l, r = '1', i = 1; i < n; i++){
    String(r).split('').forEach(function(x, y){
      if(x!=v){
      	r = y==0 ? '' : r+l+v
        v = x
        l = 1
      }else l++
    })
    r += l+v
    v = null
  }
  return r
};

console.log(countAndSay(5));


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 15
// Count Primes 
// https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	var i, j, arr = Array(n+1).join('1').split(''), r = 0
	arr[2] = '0'
	for(i=3; i<n; i++) arr[i] = i%2==0 ? '1' : '0'
	for(i=3; i<n; i+=2){
		if(!~~arr[i]&&i*i<=n){
			for(j=2; i*j<n; ++j) arr[i*j] = '1'
		}
	}
	for(i=2; i<n; i++) if(!~~arr[i]) r++
	return r
};

console.log(countPrimes(10));


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 16
// House Robber
// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var v = [0, 0]
  nums.forEach(function(i, j){ 
  	v[j%2] = Math.max(v[j%2]+i, v[(j+1)%2])
  })
  return Math.max(v[0], v[1])
};

console.log(rob([2,1,1,2]));


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 17
// Palindrome Number
// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x<0 ? false : x == (''+x).split('').reverse().join('')
};


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 18
// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length==0) return ''
  return strs.reduce(function(a, b){
    var s = []
    a.split('').every(function(i, j){
      if(i==b[j]){ s.push(i); return true }
      else return false
    })
    return s.join('')
  })
};

console.log(longestCommonPrefix(['resdsaf','resregfd','resdbcf']));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 19
// Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  return s == s.split('').reverse().join('')
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 20
// Plus One
// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = digits.reverse()
    for(var i=0, x=1; i<digits.length; i++){
		if(digits[i]+x>9){
			digits[i] = 0
			x = 1
		}else{
			digits[i] += x
			x = 0
			i = digits.length
		}
    }
    if(x==1) digits.push(1)
    return digits.reverse()
};

console.log(plusOne([9,9,9]));

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 21
// Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var isG = false
  if(typeof board[0] == 'string') board = board.map(function(i){ console.log(i); return i.split('') })
  board.forEach(function(i,j){ i.forEach(function(n,m){ if(n=='.'&&getN(j,m,board)) isG = true })})
  if(String(board).indexOf('.')!=-1&&isG) isValidSudoku(board)
  function getN(j,m,board){
    var t = [1,2,3,4,5,6,7,8,9], r, o = parseInt(j/3), p = parseInt(m/3)
    for(var x=0;x<9;x++){ if(x!=j&&board[x][m]!='.') t[board[x][m]-1] = false }
    for(var y=0;y<9;y++){ if(y!=m&&board[j][y]!='.') t[board[j][y]-1] = false }
    for(var z=0;z<9;z++){ if((o*3+parseInt(z/3)!=j&&p*3+z%3!=m)&&board[o*3+parseInt(z/3)][p*3+z%3]!='.') t[board[o*3+parseInt(z/3)][p*3+z%3]-1] = false }
    r = t.filter(function(g){ return g })
    if(r.length==1){ board[j][m]=r[0]+''; return true}
  }
  return board
};

console.log(isValidSudoku(["..9748...","7........",".2.1.9...","..7...24.",".64.1.59.",".98...3..","...8.3.2.","........6","...2759.."]).forEach(function(i){ console.log(i); }));

})(false); // no!!!!!!


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 22
// Two Sum
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var len = nums.length, r =[], i = 0, j = 1, sortA = nums.concat().sort(function(a, b){return a - b})
  for(;i + j < len;){
    var x = sortA[i], y = sortA[len - j]
    if(x + y == target){
      r = [nums.indexOf(x)+1, nums.lastIndexOf(y) + 1]
      return r[0] < r[1] ? r : [r[1], r[0]]
    }
    else if(x + y < target) i++
    else j++
  }
  return r
};

console.log(twoSum([0,4,3,0], 0));

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 23
// Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

var l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var sum = l1.val + l2.val, next1 = l1.next, next2 = l2.next, l3 = new ListNode(sum % 10), node = l3
  sum = ~~(sum / 10);
  while(next1 || next2 || sum){
    sum += (next1 ? next1.val : 0) + (next2 ? next2.val : 0)
    node.next = new ListNode(sum % 10)
    node = node.next
    next1 = next1 ? next1.next : null
    next2 = next2 ? next2.next : null
    sum = ~~(sum / 10)
  }
  return l3
};

var l3 = addTwoNumbers(l1, l2)
console.log(l3.val);
console.log(l3.next.val);
console.log(l3.next.next.val);

})(true);





