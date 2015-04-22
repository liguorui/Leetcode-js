/*
    * leetcode
    * auther guorui.li
    * 2015.04.22
*/

//////////////////////////////////////////////////////////////////////////////////////


// Valid Parentheses 
// https://leetcode.com/problems/valid-parentheses/

;(function(go){
if(!go) return;

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var re = /\(\)|\[\]|\{\}/g
    while(s!=(s=s.replace(re,''))){}
    return s==''
};

})(true);

