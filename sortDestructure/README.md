# Sort an array of strings in alphabetical order based on last names 
We need to sort a given array of strings, where each string represents a name in the format "LastName, FirstName".

## Pseudocode

- We will firstly need to split each string into an array of two strings respectively [LastName, FirstName]
- We should use sort() method to compare each last names. We should use destructuring array syntax to assign each comparing element with a set of variables that represent the LastName and the FirstName. 
- Using the sort() method logic we compare each assigned last name variables with each other and sort the array with ascending order. 