# filter in "place" function
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.


## Pseudocode
We want an array method that safely removes elements from the array so we could use splice() with specifying only the start index and the deleteCount
The condition is that every element that is lower than a or greater than b should be removed. 
forEach method also modifies the array in place but doesn't return anything.
When splice() removes an array element, it shifts the entire array so there are no empty "holes" inside it. In that case, to check for the "next" element , which splice moved to the deleted element's place, we have to decrement the loop counter after splice.