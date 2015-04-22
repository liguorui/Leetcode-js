/*
    * leetcode
    * auther guorui.li
    * 2015.04.22
*/

////////////////////////////////////////////////////////////////////////////////


;(function(go){
if(!go) return;


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
