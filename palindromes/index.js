const palindromes = function (str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanString = str.toLowerCase().split('').filter((char) => alphabet.includes(char)).join('');

    const reverseStr = reverseStr.split('').reverse().join('');

    return cleanString === reverseStr;
};