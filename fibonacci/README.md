# Fibonacci function
This exercise wants us to write a function that takes a number or string that contains a number argument (lets call it arg) that specifies the position of a number inside a fibonacci sequence. In this case the fibonacci sequence starts from 1, 1, 2, etc.. 

A fibonacci sequence is basically an integer sequence of numbers from which each number (aside from the two first) is equal to the sum of the two previous numbers.

## Pseudocode 
- Input: an argument (arg) that is either an integer number or a string with an integer number. First the function should check if the input arg is a number or not. If it isn't, it should convert it to an integer.
- Handle edge cases: If arg is less than 0 it should return "OOPS" and if arg has the value of 0 it should return 0.
- Initialize variables: Fibonacci needs to work with two other variables compared to arg (or current number passed as argument) , the prev1 (number previous from current number) and the prev2 (number second to last from current number). Since we handled the case where arg = 0 we start the iteration from arg = 1 (second position).
- Main loop: From position 2 to arg (current num), the function computes the next fibonacci number by summing prev1 and prev2 and updating both prev1 and prev2 during each iteration (this needs to be done because when we the loop moves to the next position, prev1 and prev2 change according to the current number being iterated).
- Return the result: We need to return the correct result which is stored in prev1 variable , not current number variable. This is because when we actually get to the wanted current number, its position is updated to the prev1 variable at the end of the loop. So,prev1 hold the fibonacci number at current number position.

