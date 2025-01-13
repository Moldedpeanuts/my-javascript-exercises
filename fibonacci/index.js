const fibonacci = function(arg) {
    let num;

    if(typeof arg !== "number") {
        num = parseInt(arg);
    } else {
        num = arg;
    }

    if(num < 0) return "OOPS";
    if(num == 0) return 0;

    // we are starting in position 2, where the current number is 1 and previous number is 1 and second to last previous is 0.
    let prev1 = 1;
    let prev2 = 0;

    for(let i = 2; i <= num; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};