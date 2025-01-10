# Shuffle an array
Write a function called shuffle which takes an array as argument and shuffles it.

Shuffling is random reordering.Multiple runs of shuffle may lead to different orders of elements. All element orders should have equal probability.

Instead of relying on sort() algorithm, which uses a comparison function we could use the more reliable Fisher-Yates shuffle.

## Fisher-Yates
It is an algorithm used to randomize the order of elements in an array. The algorithm works by iterating through the array and swapping each element with a randomly selected element from a subset of the array. The algorithm is typically performed in reverse to ensure an unbiased shuffle.

- Start with an array arr of length n 
- Iterate over the array from the last element to the second element (from n - 1 to 1).
- For each element at index i select a random index j between 0 and i (inclusive).
- Swap the elements at indices i and j,
- Continue for all elements.

## Why Reverse Iteration?
When iterating from first element, the only elements it could be swapped with would be the ones that come after it (elements from indices 1 to n - 1). As you progress through the array, the number of possible swap options (the possible range for j) decreases. By the time you reach the second-to-last element you only have one element left to swap with (the last element). This doesn't give every element the same chance of being shuffled into every position.