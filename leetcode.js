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
	for(var i=0, arr = nums.slice(0), l=arr.length, k = k%l;i<l;i++){ 
    nums[i] = arr[i-k<0 ? l+i-k : i-k] 
  }
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
  return s.split('').reverse().reduce(function(a,b,j){ 
    return a+(b.charCodeAt(0)-64)*Math.pow(26,j) 
  },0)
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
	return s==~~s ? ~~s : 0
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
  this.val = null
  this.min = null
  this.next = null
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  var temp = new MinStack(x)
  temp.next = this
  this.top = temp
  this.min = this.next ? Math.min(this.next.min, x) : x
}

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  this.next = this.next.next
}

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.val || 0
}

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  return this.min || 0
}

})(false); // no!!!



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
  // var newHead = new List
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
      return false
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
  var len = nums.length, r =[], i = 0, j = 1, sortA = nums.concat().sort(function(a, b){return a - b}), x, y
  for(;i + j < len;){
    if((x = sortA[i]) + (y = sortA[len - j]) == target)
      return (r = [nums.indexOf(x)+1, nums.lastIndexOf(y) + 1])[0] < r[1] ? r : [r[1], r[0]]
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
  for(var str = s[0], n = s ? 1 : 0, i=1; i<s.length; i++){
    if((ind = str.indexOf(s[i])) !== -1) str = str.substr(ind + 1) + s[i]
    else n = Math.max(n, (str += s[i]).length)
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
  var med1 = 0, med2 = 0, i = 0, j = 0, len1 = nums1.length, len2 = nums2.length, n = len1 + len2
  while(i+j <= ~~(n/2)){
    med2 = med1
    med1 = i<len1 && j<len2 ? (nums1[i]<nums2[j] ? nums1[i++] : nums2[j++]) : i < len1 ? nums1[i++] : nums2[j++]
  }
  return n % 2 ? med1 : (med1 + med2) / 2
};

console.log(findMedianSortedArrays([-5,-2,9,18], [-20,-9, -2, 12]));

})(false);





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
  var len = height.length, left = 0, right = len - 1, max = 0
  while(left < right){
    max = Math.max(max, Math.min(height[left], height[right])*(right - left))
    if(height[left] < height[right]) left++
    else right--
  }
  return max
};

console.log(maxArea([2,5,7,3,2]));


})(false);




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
  var head, node, self, first = 0
  while(node || !first++){
    if(l1 && l2){
      if(l1.val < l2.val) l1 = (self = l1).next
      else l2 = (self = l2).next
    }
    else if(l1) l1 = (self = l1).next
    else l2 = (self = l2) ? l2.next : null
    if(!head) head = node = self
    else node = node.next = self
  }
  return head
};

console.log(mergeTwoLists(l1, l2));

})(false);


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
var removeDuplicates = function(nums) { // 可以尝试优化，通过lastIndexOf去获取最后项，然后删除多个
  for(var i = 1; i < nums.length; i++){ if(nums[i] === nums[i-1]) nums.splice(i--, 1) }
  return nums.length
};

console.log(removeDuplicates([1,1,2]));

})(false);



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

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 55
// Spiral Matrix II 
// https://leetcode.com/problems/spiral-matrix-ii/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  var r = [], num = 0, l = ~~(n/2)
  for(var x = 0; x < n; x++) r[x] = []
  for(var i = 0; i < l; i++){
    for(var j = i; j < n-1-i; j++) r[i][j] = ++num
    for(var j = i; j < n-1-i; j++) r[j][n-1-i] = ++num
    for(var j = n-1-i; j > i; --j) r[n-1-i][j] = ++num
    for(var j = n-1-i; j > i; --j) r[j][i] = ++num
  }
  if(n%2 == 1) r[l][l] = ++num
  return r
};

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 56
// Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix || matrix.length === 0) return []
  var r = [], n = [[0, matrix.length-1], [0, matrix[0].length-1]]
  while(n[0][0] <= n[0][1] && n[1][0] <= n[1][1]){
    for(var i = n[1][0]; i <= n[1][1]; i++) r.push(matrix[n[0][0]][i])
    for(var i = n[0][0]+1; i <= n[0][1]; i++) r.push(matrix[i][n[1][1]])
    if(n[0][0] !== n[0][1]) for(var i = n[1][1]-1; i >= n[1][0]; i--) r.push(matrix[n[0][1]][i])
    if(n[1][0] !== n[1][1]) for(var i = n[0][1]-1; i > n[0][0]; i--) r.push(matrix[i][n[1][0]])
    n[0][0]++, n[0][1]--, n[1][0]++, n[1][1]--
  }
  return r
};

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 57
// Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

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
var deleteDuplicates = function(head) {
  if(!head) return null
  var node = head, next = node.next
  while(next) next = node.val === next.val ? next.next : (node = node.next = next).next
  node.next = null
  return head
};

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 58
// Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/

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
var isSymmetric = function(root) {
  if(!root) return true
  function isSymmetricUtil(node1, node2){
    if(!node1 && !node2) return true
    if((!node1 && node2) || (node1 && !node2)) return false
    return node1.val === node2.val && isSymmetricUtil(node1.left, node2.right) && isSymmetricUtil(node1.right, node2.left)
  }
  return isSymmetricUtil(root.left, root.right)
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 59
// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  for(var i = 2, step = [1, 2]; i < n; i++) step[i] = step[i-1] + step[i-2]
  return n <= 2 ? n : step[n-1]
};

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 60
// Remove Element
// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for(var i = 0; i < nums.length; i++){ if(nums[i] === val) nums.splice(i--, 1) }
  return nums.length
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 61
// Add Binary
// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var a = a.split('').reverse(), b = b.split('').reverse(), i = 0, sum = 0, r = []
  while(a[i] || b[i] || sum){
    sum += ~~a[i] + ~~b[i++]
    r.push(sum % 2)
    sum = ~~(sum/2)
  }
  return r.reverse().join('')
};

console.log(addBinary('1111', '101'));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 62
// Implement strStr()
// https://leetcode.com/problems/implement-strstr/
// 遍历字符串haystack，然后截取与needle相等长度的字符串，比较两字符串是否相等。如果相等则返回索引
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for(var i=0 ,hlen = haystack.length, nlen = needle.length; i<hlen-nlen+1; i++){
    if(haystack.substr(i, nlen) === needle) return i
  }
  return -1
};

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 63
// Linked List Cycle 
// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head) return false
  var slow = head, fast = head.next
  while(true){
    if(!fast || !(fast = fast.next)) return false
    if(fast.val === slow.val) return true
    if(!(fast = fast.next)) return false
    if(fast.val === slow.val || fast.val === (slow = slow.next).val) return true
  }
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 64
// Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/

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
var detectCycle = function(head) {

};

})(false); // no!!!


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 65
// Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

// 遍历一遍，遇到符号，取前两位对其进行运算，然后将结果赋值给三位中的第一位，然后从数组中删除后面两位
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var i = 0, str = '+-*/', ind
  while(tokens.length > 1){
    if((ind = str.indexOf(tokens[i])) !== -1){
      tokens[i-2] = ind === 0 ? +tokens[i-2] + +tokens[i-1] : ind === 1 ? tokens[i-2] - tokens[i-1] : ind === 2 ? tokens[i-2] * tokens[i-1] : ~~(tokens[i-2] / tokens[i-1])
      tokens.splice((i=i-1), 2)
    }else i++
  }
  return ~~tokens[0]
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));

  // ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  // ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 66
// Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "").replace(/\s{1,}/g, ' ').split(' ').reverse().join(' ')
};

console.log(reverseWords('the sky is blue '));

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 67
// Single Number
// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums = nums.sort(function(a, b){ return a-b })
  for(var i=0; i<nums.length; i++){
    if(nums[i]!==nums[i+1]) return nums[i]
    else i++
  }
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 68
// Single Number II 
// https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums = nums.sort(function(a, b){ return a-b })
  for(var i=0; i<nums.length; i++){
    if(nums[i]!==nums[i+1]) return nums[i]
    else i++
  }
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 69
// Sum Root to Leaf Numbers 
// https://leetcode.com/problems/sum-root-to-leaf-numbers/

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
var sumNumbers = function(root) {
  var arr = []
  function findValue(node, val){
    if(!node.left && !node.right) arr.push(val)
    if(node.left) findValue(node.left, val*10+node.left.val)
    if(node.right) findValue(node.right, val*10+node.right.val)
  }
  if(root) findValue(root, root.val)
  return arr.reduce(function(a,b){return a+b}, 0)
};

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 70
// Largest Number
// https://leetcode.com/problems/largest-number/

/**
 * @param {number[]} num
 * @return {string}
 */
var largestNumber = function(num) {
  return num.sort(function(a,b){ return check(a, b) ? 1 : -1 }).join('').replace(/^0{1,}/, '0')
  function check(a, b){
    if(String(a).length === String(b).length) return a < b
    var len = Math.min(String(a).length, String(b).length), max = Math.max(a,b)
    if(String(a).substr(0, len) === String(b).substr(0, len)){
      if(String(max).substr(0, 1) < String(max).substr(len, 1)) return b==max
      else return a==max
    }else return String(a).substr(0, len) < String(b).substr(0, len)
  }
}

console.log(largestNumber([97,91,90,63,90,92,89,76,76,67,55]));


})(false); // no!!!


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 71
// Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length <= 1) return 0
  var low = prices[0], maxp = 0
  for(var i = 1; i < prices.length; i++){
    maxp = Math.max(maxp, prices[i] - low)
    low = Math.min(low, prices[i])
  }
  return maxp
};


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 72
// Word Ladder
// https://leetcode.com/problems/word-ladder/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {
  var len = wordDict.length, min = len + 2, isFind = false
  if(isL(beginWord, endWord)) return 2
  function find(beg, arr){
    var i=0, l = arr.length
    if(len-l+2<min && isL(beg, endWord) && (isFind = true)) min = len-l+2
    for(; i<l; i++){
      if(isL(beg, arr[i])){
        var newArr = arr.concat(), val = arr[i]
        newArr.splice(i, 1)
        find(val, newArr)
      }
    }
  }
  function isL(a, b){return a.split('').filter(function(i, j){return i !== b[j]}).length === 1}
  find(beginWord, wordDict)
  return isFind ? min : 0
};

// hit - hot - dot - dog - 
console.log(ladderLength("a", "c", ["a","b","c"]));

})(false); // no!!!


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 73
// Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {  
  return nums.sort(function(a, b){return a-b}).some(function(i, j){ 
    return i === nums[j+1] 
  })
};

console.log(containsDuplicate([1]));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 74
// Maximum Product Subarray 
// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if(nums.length === 0 ) return 0
  if(nums.length === 1 ) return nums[0]
  var max = nums[0], min = nums[0], r = nums[0], temp
  for(var i = 1; i<nums.length; i++){
    min = Math.min(nums[i], Math.min((temp = min * nums[i]), max*nums[i]))
    r = Math.max(r, (max = Math.max(nums[i], Math.max(temp, max*nums[i]))))
  }
  return r
};

console.log(maxProduct([2,3,-2,4]));

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 75
// Find Minimum in Rotated Sorted Array 
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

};

})(false); // no!!!



 


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 76
// Regular Expression Matching
// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if(p.length === 0) return s.length === 0
  if(p.length === 1 || p[1] !== '*'){
    if(s.length < 1 || (p[0] !== '.' && s[0] !== p[0])) return false
    return isMatch(s.substring(1), p.substring(1))
  }else{
    var i = -1
    while(i < s.length && (i < 0 || p[0] === '.' || p[0] === s[i])){
      if(isMatch(s.substring(++i), p.substring(2))) return true
    }
    return false
  }
};

// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true


})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 77
// 3Sum
// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var r = [], len = nums.length
  if(len < 3) return r
  nums = nums.sort(function(a,b){return a-b})
  for(var i=0; i<len-2; i++){
    for(var j = i + 1, k = len - 1;j<k;){
      if(nums[i] + nums[j] + nums[k] < 0) ++j
      else if(nums[i] + nums[j] + nums[k] > 0) --k
      else{
        r.push([nums[i], nums[j++], nums[k--]])
        while(j<k && nums[j] === nums[j-1]) ++j
        while(j<k && nums[k] === nums[k+1]) --k
      }
    }
    while(i<len-2 && nums[i] === nums[i+1]) ++i
  }
  return r
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 78
// Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) return []
  var arr = [[],[],["a","b","c"],["d", "e", "f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]]
  function str(s, dig){
    if(!dig.length) return s
    var newStr = [], thisDig = dig[0]
    s.forEach(function(i){ arr[thisDig].forEach(function(j){ newStr.push(i+j) })})
    return str(newStr, dig.slice(1))
  }
  return str([''], digits)
};


})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 79
// 3Sum Closest
// https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var min = null, len = nums.length
  if(len < 3) return 0
  nums = nums.sort(function(a,b){return a-b})
  for(var i=0; i<len-2; i++){
    for(var j = i + 1, k = len - 1;j<k;){
      var nums = nums[i] + nums[j] + nums[k]
      min = min === null ? nums : Math.abs(target-sum) < Math.abs(target-min) ? sum : min
      if(nums < target) ++j
      else if(nums > target) --k
      else return target
    }
  }
  return min
};


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 80
// 4Sum
// https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var r = [], len = nums.length
  if(len < 4) return r
  nums = nums.sort(function(a,b){return a-b})
  for(var x=0; x<len-3; x++){
    for(var i=x+1; i<len-2; i++){
      for(var j = i + 1, k = len - 1;j<k;){
        if(nums[x] + nums[i] + nums[j] + nums[k] < target) ++j
        else if(nums[x] + nums[i] + nums[j] + nums[k] > target) --k
        else{
          r.push([nums[x], nums[i], nums[j++], nums[k--]])
          while(j<k && nums[j] === nums[j-1]) ++j
          while(j<k && nums[k] === nums[k+1]) --k
        }
      }
      while(i<len-2 && nums[i] === nums[i+1]) ++i
    }
    while(x<len-3 && nums[x] === nums[x+1]) ++x
  }
  return r
};

console.log(fourSum([1,0,-1,0,-2,2], 0));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 81
// Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/


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
var swapPairs = function(head) {
  var node = head, next
  if(!head) return null
  if(!head.next) return head
  else head = next = head.next
  while(node && next){
    var tmp = next.next
    next.next = node
    node.next = tmp && tmp.next ? tmp.next : tmp
    node = tmp
    next = tmp && tmp.next ? tmp.next : null
  }
  return head
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)

console.log(swapPairs(l1));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 82
// Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

};


console.log(longestValidParentheses('(((())(()'));

})(false); // no!!!



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 83
// Combination Sum
// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var r = []
  find(candidates.sort(function(a,b){return a-b}), [], target, 0)
  function find(candi, arr, val, n){
    if(candi[n] <= val){
      var newArr = arr.concat()
      newArr.push(candi[n])
      if(candi[n] < val){
        find(candi.slice(n+1), arr, val, n)
        find(candi, newArr, val-candi[n], n)
      }else r.push(newArr)
    }
  }
  return r
};

console.log(combinationSum([10,1,2,7,6,1,5], 8));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 84
// Combination Sum II
// https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var r = []
  find(candidates.sort(function(a,b){return a-b}), [], target, 0)
  function find(candi, arr, val, n){
    if(candi[n] <= val){
      var newArr = arr.concat()
      newArr.push(candi[n])
      if(candi[n] < val){
        find(candi.slice(candi.lastIndexOf(candi[n])+1), arr, val, n)
        find(candi.slice(n+1), newArr, val-candi[n], n)
      }else r.push(newArr)
    }
  }
  return r
};

console.log(combinationSum([10,1,2,7,6,1,5], 8));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 85
// Combination Sum III
// https://leetcode.com/problems/combination-sum-iii/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var r = [], candidates = [1,2,3,4,5,6,7,8,9]
  find(candidates, [], n, 0)
  function find(candi, arr, val, n){
    if(candi[n] <= val && arr.length <= k){
      var newArr = arr.concat()
      newArr.push(candi[n])
      if(candi[n] < val){
        find(candi.slice(n+1), arr, val, n)
        find(candi.slice(n+1), newArr, val-candi[n], n)
      }else if(newArr.length === k) r.push(newArr)
    }
  }
  return r
};


console.log(combinationSum3(3,7));

// console.log(combinationSum([10,1,2,7,6,1,5], 8));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 86
// Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return nums.sort(function(a,b){return b-a})[k-1]
};


})(false);




////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 87
// Jump Game
// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  for(var i = 1, jump = nums[0]; i < nums.length; i++){
    if(jump<=0) return false
    jump = Math.max(--jump, nums[i])
  }
  return true
};


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 88
// Jump Game II
// https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  for(var i = 0, r = 0, last = 0, curr = 0; i < nums.length; i++){
    if(i>curr) return -1
    if(i>last && ++r) last = curr
    curr = Math.max(curr, i+nums[i])
  }
  return r
};


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 89
// Permutations
// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var r = [], len = nums.length
  find([], nums)
  function find(arr1, arr2){
    arr2.forEach(function(i, j, k){
      var newArr1 = arr1.concat()
      newArr1.push(i)
      if(newArr1.length === len) r.push(newArr1)
      else{
        var newArr2 = k.concat()
        newArr2.splice(j, 1)
        find(newArr1, newArr2)
      }
    })
  }
  return r
};

console.log(permute([1,1,3]));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 90
// Permutations II 
// https://leetcode.com/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var r = [], len = nums.length
  find([], nums.sort(function(a,b){return a-b}))
  function find(arr1, arr2){
    arr2.forEach(function(i, j, k){
      if(i !== k[j+1]){
        var newArr1 = arr1.concat()
        newArr1.push(i)
        if(newArr1.length === len) r.push(newArr1)
        else{
          var newArr2 = k.concat()
          newArr2.splice(j, 1)
          find(newArr1, newArr2)
        }
      }
    })
  }
  return r
};

console.log(permute([1,1,3]));

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 91
// Next Permutation
// https://leetcode.com/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  var arr = nums.concat().reverse(), len = nums.length, isFind = false
  for(var i = 0; i < len-1; i++){
    for(var j = i+1; j < len-1; j++){
      if(arr[i]>arr[j]){
        var tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
        isFind = true
        break
      }
    }
  }
  if(isFind) arr.reverse()
  for(var i=0;i<len;i++){nums[i] = arr[i]}
};

var arr1 = [1,3,2]
nextPermutation(arr1)
console.log(arr1);

})(false); // no!!!

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 92
// Search Insert Position
// https://leetcode.com/problems/search-insert-position/

// 二分法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var len = nums.length, left = 0, right = len-1, mid = 0
  while(left <= right){
    mid = left + ~~((right-left)/2)
    if(target === nums[mid]) return mid
    else if(target < nums[mid]) right = mid - 1
    else left = mid + 1
  }
  return left
};

})(false);
    

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 93
// Bitwise AND of Numbers Range
// https://leetcode.com/problems/bitwise-and-of-numbers-range/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  while(n > m) n = n & (n-1)
  return n
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 94
// Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  for(var i = 0, r = -Number.MAX_VALUE, sum = 0; i<nums.length; i++){
    r = Math.max((sum = Math.max(sum+nums[i], nums[i])), r)
  }
  return r
};

// var maxSubArray = function(nums) {
//   var max = 0, val = 0, isFind = false
//   nums.forEach(function(i){
//     if(i>0 && (isFind=true)) max = Math.max(max,(val+=i))
//     else val = val+i<0 ? 0 : val+i
//   })
//   return isFind ? max : nums.sort(function(a,b){return b-a})[0]
// };

// Number.MIN_VALUE

console.log(maxSubArray([-2,-1]));

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 95
// Insertion Sort List
// https://leetcode.com/problems/insertion-sort-list/

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
var insertionSortList = function(head) {
  var newHead = new ListNode(-1)
  while(head){
    var temp = head.next, cur = newHead
    while(cur.next && cur.next.val < head.val) cur = cur.next
    head.next = cur.next
    cur.next = head
    head = temp
  }
  return newHead.next
};

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 96
// Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if(!nums || nums.length === 0) return 0
  var r = Number.MAX_VALUE, sum = 0, i = 0, j = 0
  while(i<=j && j<nums.length && sum < s){
    sum += nums[j]
    while(i<=j && sum>=s){
      r = Math.min(r, j-i+1)
      sum -= nums[i++]
    }
    j++
  }
  return r === Number.MAX_VALUE ? 0 : r
};


// var minSubArrayLen = function(s, nums) {
//   var len = nums.length, r = len, isFind = false
//   for(var i=0; i<len; i++){
//     for(var sum = 0, j=i; j<len; j++){
//       if(j-i < r && (sum += nums[j]) >= s && (isFind = true)){
//         console.log(123);
//         if((r = Math.min(r, j-i+1)) === 1) return 1
//       }
//     }
//     if(i===0 && !isFind) return 0
//   }
//   return r
// };

console.log(minSubArrayLen(120331635, [39396,75535,17610,81826,10343,69422,14335,9801,19955,99295,38101,24312,20341,69218,65487,38409,89920,17480,92688,71016,91144,51111,88996,24041,7190,78854,94001,80392,50540,48497,3153,43509,74239,48742,14946,5772,53828,15647,92326,93162,53714,24957,31602,1926,26875,35836,60646,69048,98012,92164,26077,14024,77649,67997,78341,18214,57985,44171,52842,55525,70084,74614,30378,77896,4212,99784,64496,46262,46399,8492,6978,30754,84811,36393,45151,6340,13544,98081,86997,95444,45237,20037,14037,53490,38646,17000,74471,44593,82428,74864,19016,54838,58668,11032,84860,99259,76070,30163,49073,71500,28207,64386,70747,48359,13511,82968,98839,15888,90781,2133,28037,46092,31757,44124,36338,44268,97854,93749,36361,2179,77441,85528,16717,97573,26685,84894,43169,59012,33270,86629,11359,28595,47766,21965,65394,87355,57990,57962,13864,37360,96847,52645,93474,88997,88822,40161,32062,12006,1952,54158,90362,40220,34257,84673,93803,9722,68847,78587,58552,66210,17038,64681,51612,38151,45862,7565,34865,22118,3179,81710,32238,494,86367,87808,94954,37642,1944,25980,23970,4818,89584,27863,10048,8073,33515,14971,75233,96927,47280,35223,61500,64730,30107,47455,64536,95560,50286,87337,7105,25961,31925,70002,46739,68103,70275,54251,34629,66383,76483,12288,70671,99958,80034,13642,24341,15929,59181,44814,79352,71087,54428,18788,73285,68203,25968,74869,11750,48436,99493,16714,7501,49344,3942,797,19437,66095,33367,88037,16700,22559,34724,7128,83307,46293,57333,94730,28051,55133,52280,16397,61754,41447,51182,54450,4157,62207,30813,90077,49368,36572,87523,89996,43369,14540,6448,51950,28665,87214,33545,85912,18754,70886,16646,71827,68529,99288,3294,42185,52304,71541,25942,22506,8910,73719,83262,12615,63150,96392,46289,79797,56970,22172,54358,11895,80255,51527,59,22591,16126,47403,21702,21654,30731,84466,46744,70066,22379,69028,5242,89976,10067,88510,90661,10597,67939,62942,38747,2934,91174,55875,10476,18975,75385,59127,51002,53840,96733,54994,2310,51944,91857,74269,32636,31301,25461,34167,50288,59316,64029]));

// [2,3,1,2,4,3]

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 97
// Word Break
// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  for(var i = 0, r = []; i< s.length; i++){
    for(var j = 0; j <= i; j++){
      var word = s.slice(j, i + 1)
      if(wordDict.has(word) && (j == 0 || r[j-1] == true )) r[i] = true
    }
  }
  return r[s.length - 1] || false
};

// var wordBreak = function(s, wordDict) {
//   var isFind = false
//   find(s, wordDict, 0)
//   function find(str, word, n){
//     if(word && n<word.length){
//       var newStr = str.replace(word[n], '')
//       if(newStr === '') isFind = true
//       else if(str !== newStr){
//         var newArr = word.concat()
//         newArr.splice(n, 1)
//         find(newStr, newArr, n)
//       }else find(newStr, word, n+1)
//     }
//   }
//   return isFind
// };


console.log(wordBreak("a", ["a"]));

})(false);




////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 98
// Anagrams
// https://leetcode.com/problems/anagrams/

/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
  var r = [], len = strs.length, obj = {}
  strs.forEach(function(i){
    if(obj[i.length]) obj[i.length].push(i)
    else obj[i.length] = [i]
  })
  for(var x in obj){
    obj[x].map(function(i){ return i.split('').sort().join('')})
    .forEach(function(i, j, k){
      if(j<k.length && (k.indexOf(i, j+1)!==-1) || (j>0 && k.lastIndexOf(i, j-1)!==-1)) r.push(obj[x][j])
    })
  }
  return r
};

    // .forEach(function(i, j, k){
    //   if(j<k.length && (k.indexOf(i, j+1)!==-1) || (j>0 && k.lastIndexOf(i, j-1)!==-1)) r.push(obj[x][j])
    // })

// var anagrams = function(strs) {
  // var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101], r = [], arr = []
  // arr = strs.map(function(i){
  //   return i.split('').reduce(function(a,b){
  //     var c = b.charCodeAt()
  //     return a*c
  //   },1) || 0
  // })
  // console.log(arr);
  // arr.forEach(function(i, j, k){
  //   if(j<k.length && (k.indexOf(i, j+1)!==-1) || (j>0 && k.lastIndexOf(i, j-1)!==-1)) r.push(strs[j])
  // })
  // return r
// };

console.log(anagrams(["ape","pea","tax"]));

})(false); // no!!!



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 99
// Rotate Image
// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
  var arr = []
  matrix.forEach(function(a,b){ arr[b] = a.concat() })
  arr[0].forEach(function(i,j){
    arr.forEach(function(x,y){
      matrix[j][y] = arr[arr.length-1-y][j]
    })
  })
};


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 100
// Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var obj = {}
  for(var i in nums){
    if(obj[nums[i]] !== undefined && Math.abs(obj[nums[i]] - i) <= k) return true
    else obj[nums[i]] = i
  }
  return false
};


})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 101
// Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  nums = nums.sort(function(a,b){return a-b})
  var max = 1, ind = nums[0], len = 1
  nums.slice(1).forEach(function(i, j){
    if(ind === i-1){
      len++
      ind++
    }else if(ind !== i){
      max = Math.max(max, len)
      ind = i
      len = 1
    }
  })
  return Math.max(max, len)
};

console.log(longestConsecutive([0, -1]));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 102
// Maximal Square
// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  var max = 0
  for(var i = 0;i<matrix.length;i++){
    if(Object.prototype.toString.call(matrix[i]) === '[object Array]'){
      for(var j = 0;j<matrix[i].length;j++){
        if(matrix[i][j]==1) find(i,j,1)
      }
    }else{
      if(matrix[i]==1) return 1
    }
  }
  function find(i,j,num){
    max = Math.max(num,max)
    for(var x=i;x<num+i;x++) if(matrix[x] && matrix[x][j+num] != 1) return false
    for(var y=j;j<num+i+1;j++) if(matrix[i+num] && matrix[i+num][y] != 1) return false
    find(i,j,num+1)
  }
  return max*max
};

// console.log(maximalSquare([[1, 0, 1, 0, 0],
// [1, 0, 1, 1, 1],
// [1, 1, 1, 1, 1],
// [1, 0, 0, 1, 0]]));

console.log(maximalSquare(["11"]));

})(false); // no!!!

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 103
// Merge Intervals
// https://leetcode.com/problems/merge-intervals/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals = intervals.sort(function(a,b){ return a.start - b.start})
  for(var i=0;i<intervals.length;i++){
    if(intervals[i+1] && intervals[i].end >= intervals[i+1].start){
      intervals[i].end = Math.max(intervals[i].end, intervals[i+1].end)
      intervals.splice((i--)+1, 1)
    }
  }
  return intervals
};

})(false);

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 104
// Search for a Range
// https://leetcode.com/problems/search-for-a-range/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var ind = nums.indexOf(target), lastInd
  if(ind !== -1 && (lastInd = nums.lastIndexOf(target)) !== -1) return [ind, lastInd]
  return [-1,-1]
};

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 105
// First Missing Positive
// https://leetcode.com/problems/first-missing-positive/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if(nums.length<1) return 1
  var pos = 0, len = nums.length
  while(pos<len){
    if(nums[pos]>0 && (nums[pos] !== pos+1) && (nums[pos]-1 < len) && nums[pos] !== nums[nums[pos]-1]){
      var tmp = nums[pos]
      nums[pos] = nums[nums[pos]-1]
      nums[tmp-1] = tmp
    }else pos++
  }
  console.log(nums);
  for(var i=0;i<len;i++) if(i+1 !== nums[i]) return i+1
  return len+1
};

console.log(firstMissingPositive([1,1,8,9,3,4,-1,1]));

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 106
// Pow(x, n)
// https://leetcode.com/problems/powx-n/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n === 0) return 1
  else if(n < 0){
    x = 1 / x
    n = -1 * n
  }
  var r = 1
  while(n > 0){
    if(n % 2 === 1) r *= x
    n = ~~(n/2)
    x *= x
  }
  return r
};

// var myPow = function(x, n) {
//   return Math.pow(x, n)
// };

console.log(myPow(2,6));


})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 107
// Permutation Sequence
// https://leetcode.com/problems/permutation-sequence/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  var arr = [], val = 1, r = '', k = k-1
  while(arr.length < n){
    arr.push(arr.length+1)
    val *= arr.length
  }
  for(var i=0;i<n;i++){
    var x = ~~(k/(val = val/(n-i)))
    k = k % val
    r += arr[x]
    arr.splice(x, 1)
  }
  return r
};

console.log(getPermutation(4,12));

// console.log(permute([1,1,3]));

})(false);


////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 108
// Text Justification
// https://leetcode.com/problems/text-justification/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  var r = [], index = 0, x
  while(words.length > index){
    var s = [], bool = true, l = 0
    while(bool && words[index]){
      l += words[index].length+1
      if(l <= maxWidth+1) s.push(words[index++])
      else l -= ((bool = false)+words[index].length+2)
    }
    if(!words[index]) index++
    x = words[index] ? s.map(function(i,j,k){
        return i + (j!==k.length-1 ? Array(~~((maxWidth-l) / (s.length-1))+1).join(' ')+((maxWidth-l) % (s.length-1)-j>0?' ':'') : '')
      }).join(' ') : s.join(' ')
    r.push(x + Array(~~(maxWidth-x.length)+1).join(' '))
  }
  return r
};

console.log(fullJustify(["Listen","to","many,","speak","to","a","few."], 6));

})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 109
// Sqrt(x)
// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var g = x;
  while(g*g-x>0.00001) g = (g+x/g)/2
  return ~~g
};


})(false);



////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;

// 110
// Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var x = [], y = []
  matrix.forEach(function(i,j){
    i.forEach(function(a,b){
      if(a === 0){
        if(x.indexOf(b)===-1) x.push(b)
        if(y.indexOf(j)===-1) y.push(j)
      }
    })
  })
  for(var i=0;i<y.length;i++){
    for(var j=0;j<matrix[0].length;j++) matrix[y[i]][j] = 0
  }
  for(var i=0;i<x.length;i++){
    for(var j=0;j<matrix.length;j++) matrix[j][x[i]] = 0
  }
};

console.log(setZeroes([[1,0,1,1],[1,0,1,1],[1,1,1,1]]));

})(false);

