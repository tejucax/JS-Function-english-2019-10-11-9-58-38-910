function palindrome(message) {
    var re = /[\W_]/g;
    var lowRegStr = message.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}
palindrome("eye");