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
  var nodeA = headA, nodeB = headB, min, max, i = 0, lenA = 0, lenB = 0, len
  while(nodeA && ++lenA){ nodeA = nodeA.next }
  while(nodeB && ++lenB){ nodeB = nodeB.next }
  min = lenA < lenB ? headA : headB
  max = lenA < lenB ? headB : headA
  len = Math.abs(lenA - lenB)
  while(max){
    if(len <= i++){
      if(min.val === max.val) return min
      min = min.next
    }
    max = max.next
  }
	return null
}


// console.log(getIntersectionNode([2,5,1,3,5,6,2],[10,2,5,65,6,2]));

})(false);


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
  while((sum = ~~(sum / 10)) || next1 || next2){
    sum += (next1 ? next1.val : 0) + (next2 ? next2.val : 0)
    node = node.next = new ListNode(sum % 10)
    next1 = next1 ? next1.next : null
    next2 = next2 ? next2.next : null
  }
  return l3
};

var l3 = addTwoNumbers(l1, l2)
console.log(l3.val);
console.log(l3.next.val);
console.log(l3.next.next.val);

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 24
// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var str = s[0], n = s ? 1 : 0
  for(var i=1; i<s.length; i++){
    var ind = str.indexOf(s[i])
    if(ind !== -1) str = str.substr(ind + 1) + s[i]
    else{
      str += s[i]
      n = Math.max(n, str.length)
    }
  }
  return n
};

console.log(lengthOfLongestSubstring('abcabcbb'));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 25
// Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var total = nums1.length + nums2.length
  if(total % 2) return findKth(nums1, nums2, ~~(total / 2) + 1)
  else return (findKth(nums1, nums2, ~~(total / 2)) + findKth(nums1, nums2, ~~(total / 2) + 1)) / 2
  function findKth(arr1, arr2, k){
    var len1 = arr1.length, len2 = arr2.length
    if(len1 > len2) return findKth(arr2, arr1, k)
    if(len1 == 0) return arr2[k - 1]
    if(k == 1) return Math.min(arr1[0], arr2[0])
    var pa = Math.min(~~(k / 2), len1), pb = k - pa
    if(arr1[pa - 1] < arr2[pb - 1]) return findKth(arr1 + pa, arr2, k - pa)
    else if(arr1[pa - 1] > arr2[pb - 1]) return findKth(arr1, arr2 + pb, k - pb)
    else return arr1[pa - 1]
  }
};

console.log(findMedianSortedArrays([-5,-2,9,18], [-2,5,12]));

})(false); // no !!!!



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 26
// Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var arr =[], str = s[0];
  ('~' + (s.split('').join('~')) + '~').split('').forEach(function(i, j, k){
    var ind = 1
    while(j - ind >= 0 && j + ind < k.length && k[j - ind] === k[j + ind]) ind++
    if(ind - 1 > str.length) str = s.substr((j - ind + 1) / 2, ind - 1)
  })
  return str
};

console.log(longestPalindrome('sdgabsbagv'));


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 27
// ZigZag Conversion
// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  for(var i=0, arr = Array(numRows), down = true, ind = 0; i<s.length; i++){
    var row = down ? ind : numRows - 1 - ind
    arr[row] = arr[row] ? arr[row] + s[i] : s[i]
    if(++ind === numRows - 1 && !(ind = 0)) down = !down
  }
  return arr.join('')
};

console.log(convert('PAYPALISHIRING', 3));


})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 28
// String to Integer (atoi)
// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var num = parseInt(str.replace(/(^\s*)/g, ''))
  return isNaN(num) ? 0 : num < -2147483648 ? -2147483648 : num > 2147483647 ? 2147483647 : num
};

console.log(myAtoi('  -0012a42'));


})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 29
// Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  return height.reduce(function(max, i, j, k){
    for(var x=j+1;x<k.length; x++) max = Math.max(max, Math.abs(i-k[x])*(j+x)/2)
    return max
  }, 0)
};

console.log(maxArea([2,5,7,3,9]));


})(false); // no!!!




////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 30
// Integer to Roman
// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var a = [1000,900,500,400,100,90,50,40,10,9,5,4,1],
        r = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],
        t = ""
    a.forEach(function(x, y){ while(num >= x && (t += r[y]) && (num -= x)){}})
    return t
};

console.log(maxArea([2,5,7,3,9]));


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 31
// Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var sum = 0, i = 0, n = s.split(''), data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
  for(; i < n.length; i++){
    if(data[n[i]] < data[n[i+1]]) sum += data[n[i+1]] - data[n[i++]]
    else sum += data[n[i]]
  }
  return sum
};


})(false);




////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 32
// Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var arr = [[],[]]
  return s.split('').every(function(i,j){
    var ind = arr[0].indexOf(i), isIs = arr[1].indexOf(t[j]) === ind
    if(ind === -1 && arr[0].push(i) && arr[1].push(t[j])){ }
    return isIs
  })
};

console.log(isIsomorphic('foo', 'bar'));
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// Given "paper", "title", return true.

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 33
// Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while(head && head.val === val){ head = head.next }
  var node = newHead = head
  while(node){
    if(node.next && node.next.val === val) node.next = node.next.next
    else node = node.next
  }
  return newHead
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 34
// Remove Nth Node From End of List 
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

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

var l1 = new ListNode(1)
l1.next = new ListNode(2)

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var len = 0, node = head, ind = 0
  while(node){ len++; node = node.next }
  if(n === len) return head.next
  node = head
  while(node){
    if(++ind === len - n) node.next = node.next.next
    node = node.next
  }
  return head
};

console.log(removeNthFromEnd(l1, 1));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 35
// Pascal's Triangle 
// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  for(var i=0, r = [], k; i<numRows; i++){
    k = []
    for(var j=0; j<=i; j++) k.push(j===0 || j===i ? 1 : r[i-1][j-1] + r[i-1][j])
    r.push(k)
  }
  return r
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 36
// Pascal's Triangle II
// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  for(var i=0, r = [], k; i<rowIndex+1; i++){
    k = []
    for(var j=0; j<=i; j++) k.push(j===0 || j===i ? 1 : r[i-1][j-1] + r[i-1][j])
    r.push(k)
  }
  return r[rowIndex]
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 37
// Length of Last Word
// https://leetcode.com/problems/length-of-last-word/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var s = s.replace(/(^\s*)|(\s*$)/g,''), ind = s.lastIndexOf(' ')
  return s.length ===0 ? 0 : ind === -1 ? s.length : s.substr(ind+1).length
};

console.log(lengthOfLastWord('b a '));

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 38
// Merge Two Sorted Lists 
// https://leetcode.com/problems/merge-two-sorted-lists/

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

var l1 = new ListNode(1)
var l2 = new ListNode(2)

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var node = l1, isMerge = true
  while(node && isMerge){
    if(!node.next){
      isMerge = false
      node.next = l2
    }
    else node = node.next
  }
  return l1 ? l1 : l2
};

console.log(mergeTwoLists(l1, l2));

})(false); // no!!!


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 39
// Reverse Linked List 
// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(!head || !head.next) return head
  var p = head.next, n = reverseList(p)
  head.next = null
  p.next = head
  return n
};

})(false); 


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 40
// Path Sum 
// https://leetcode.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  var isFind = false
  function find(node, s){
    if(!isFind){
      s += node.val
      if((!node.right) && (!node.left) && (s === sum)) isFind = true
      if(node.right) find(node.right, s)
      if(node.left) find(node.left, s)
    }
  }
  if(root) find(root, 0)
  return isFind
};

})(false); 


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 41
// Minimum Depth of Binary Tree 
// https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  var min = 0
  function findMin(node, deep){
    if(!min || deep < min){
      if(!node.left && !node.right) min = min == 0 ? deep : min > deep ? deep : min
      else{
        if(node.left) findMin(node.left, deep+1)
        if(node.right) findMin(node.right, deep+1)
      }
    }
  }
  if(root) findMin(root, 1)
  return min
};

})(false); 


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 42
// Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
  if(!root || (!root.left && !root.right)) return true
  if(Math.abs(depth(root.left) - depth(root.right)) > 1) return false
  function depth(node){ return node ? 1 + Math.max(depth(node.left), depth(node.right)) : 0 }
  return isBalanced(root.left) && isBalanced(root.right)
};


})(false); 


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 43
// Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var max = 0
  function findMax(node, deep){
    if(!node.left && !node.right) max = max == 0 ? deep : max > deep ? max : deep
    else{
      if(node.left) findMax(node.left, deep+1)
      if(node.right) findMax(node.right, deep+1)
    }
  }
  if(root) findMax(root, 1)
  return max
};

})(false); 


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 44
// Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var r = [], node = [root]
  while(node && node[0]){
    var nextLevel = [], arr = []
    node.forEach(function(i){
      arr.push(i.val)
      if(i.left) nextLevel.push(i.left)
      if(i.right) nextLevel.push(i.right)
    })
    r.push(arr)
    node = nextLevel
  }
  return r
};

})(false); 


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 45
// Binary Tree Level Order Traversal II 
// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var r = [], node = [root]
  while(node && node[0]){
    var nextLevel = [], arr = []
    node.forEach(function(i){
      arr.push(i.val)
      if(i.left) nextLevel.push(i.left)
      if(i.right) nextLevel.push(i.right)
    })
    r.push(arr)
    node = nextLevel
  }
  return r.reverse()
};

})(false); 


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 46
// Same Tree
// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(!p && !q) return true
  if((!p && q) || (p && !q) || p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 47
// Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.length = m
  nums2.length = n
  Array.prototype.push.apply(nums1, nums2)
  nums1 = nums1.sort(function(a, b){return a-b})
};

var n1 = [3,7], n2 = [2,5,9]
merge(n1, 2, n2, 3)
console.log(n1);

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 48
// Remove Duplicates from Sorted Array 
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var n = 0
  return nums.filter(function(i, j){
    return j === 0 || i > nums[j - 1]
  }).length
};

console.log(removeDuplicates([1,1,2]));

})(false); // no!!!



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 49
// Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var r = []
  compose(n, n, '')
  function compose(left, right, s) {
    if(!left && !right && s.length) return r.push(s)
    if(left) compose(left - 1, right, s + '(')
    if(right > left) compose(left, right - 1, s + ')')
  }
  return r
};

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 50
// Binary Tree Maximum Path Sum
// https://leetcode.com/problems/binary-tree-maximum-path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  var max = -Number.MAX_VALUE
  function getMaxSum(node) {
    if(!node) return 0
    var leftSum = getMaxSum(node.left), rightSum = getMaxSum(node.right)
    max = Math.max(max, node.val + leftSum + rightSum)
    return Math.max(0, node.val + leftSum, node.val + rightSum)
  }
  getMaxSum(root)
  return max
};

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 51
// Flatten Binary Tree to Linked List 
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  function flattenTree(node) {
    if(!node) return node
    var left = flattenTree(node.left), right = flattenTree(node.right)
    if(!left) return right ? right : node;
    left.right = node.right
    node.right = node.left
    node.left = null
    return right ? right : left
  }
  flattenTree(root)
};

})(false);




////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 52
// Valid Number
// https://leetcode.com/problems/valid-number/

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  return (Number(s) === 0 || !!Number(s)) && (s.trim() !== "")
};

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 53
// Triangle
// https://leetcode.com/problems/triangle/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (var i = triangle.length - 2; i >= 0; i--){
    for (var j = 0, prev = triangle[i], next = triangle[i + 1]; j < prev.length; j++) 
      prev[j] += next[j] > next[j + 1] ? next[j + 1] : next[j]
  }
  return triangle[0][0]
};


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 54
// Binary Tree Preorder Traversal 
// https://leetcode.com/problems/binary-tree-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if(!root) return []
  var r = [], stack = [root]
  while(stack.length) {
    var node = stack.pop()
    r.push(node.val)
    if(node.right) stack.push(node.right)
    if(node.left) stack.push(node.left)
  }
  return r
};


})(false);


