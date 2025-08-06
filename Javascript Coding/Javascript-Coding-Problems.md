# JavaScript Coding Questions

---

### 0.1. design es6 class of student (can print their name , age,roll) , teacher (can print their name , age,ID) , also there should be one school class whoch wll track of how many instance is created of all that is population.


---

### 0.2. make JS thread as Multithread (Approaches : Web worker, requestIdleCallback)

1. A Live Clock

2. Displays the current time, updating every millisecond.
3. A Prime Number Generator

4. Takes an input N and, on button click, generates all prime numbers up to N.
Current Issue:
When entering a large number (e.g., 100,000), the UI freezes, causing the clock to stop updating until the computation is complete.

Your Task:
Refactor the implementation so that:

The clock remains smooth and never freezes.
The prime number computation runs without blocking the UI.
Example: `Sum(1,2,3)(1,2)(3)` – When there is a blank param, return the result.

```js
// THIS IS QUESTION CODE SNIPPET - NOT IMPLEMENTATION
function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();
        const timeString = `${now.toLocaleTimeString()}.${String(
          now.getMilliseconds()
        ).padStart(3, '0')}`;
        clockElement.textContent = timeString;
      }
      setInterval(updateClock, 10);
      updateClock(); // Initial call to display clock immediately

      // Function to check if a number is prime
      function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      }

      // Function to find all prime numbers less than or equal to a given number
      function findAllPrimes(limit) {
        const primes = [];
        for (let i = 2; i <= limit; i++) {
          if (isPrime(i)) primes.push(i);
        }
        return primes;
      }

      // Attach event listener to the button
      const button = document.getElementById('findPrimesBtn');
      const output = document.getElementById('output');

      button.addEventListener('click', () => {
        const inputValue = parseInt(
          document.getElementById('inputNumber').value,
          10
        );

        if (isNaN(inputValue) || inputValue < 0) {
          output.textContent = 'Please enter a valid positive number.';
          return;
        }

         const primes = findAllPrimes(inputValue);

        output.textContent = `Prime numbers less than or equal to ${inputValue}: ${primes.
        slice(0,30).
        join(', ')}` ;
    });

```

---

### 1. Currying – Write a function to find sum  
Example: `Sum(1,2,3)(1,2)(3)` – When there is a blank param, return the result.

---

### 2. Given a HTML string, find the innerText of a `div` by its ID.

---

### 3. Write a function `deepCopy` to clone nested arrays/objects and return a new array/object.

---

### 4. Given an array of asynchronous functions (each returning a Promise), write code to execute all the functions serially.

---

### 5. Execute all functions in an array serially: `f2` runs after `f1`, `f3` after `f2`, and so on.

---

### 6. You have a sub-rotated sorted array. Write your own binary search logic.

---

### 7. Implement a method to print numbers from 1 to 10 with a 1-second interval between each.

---

### 8. Write a currying function that takes `n` arguments and alternates between ADD and MINUS operations.  
Example:  
- `plusMinus() // return 0`  
- `plusMinus(2)(3)(4)() // return 2 + 3 - 4 = 1`  
- `plusMinus(2)(3)(4)(5)(6)() // return 2 + 3 - 4 + 5 - 6 = 0`

```js
function curry(val){
    let sum = val
    let seq = 1
    return function inner(...args){
        if(args.length===0){
            return sum
        }
        sum = seq % 2 ===0 ? sum+args[0] : sum-args[0]
        seq++
        return inner
     }
}
```

---

### 9. Write a recursive function to flatten a nested array  
Example:  
`[1,2,[3],[[4]],[5,6]] → [1,2,3,4,5,6]`

---

### 10. Write a function that takes two strings `ransomNote` and `magazine`, and returns true if `ransomNote` can be constructed from `magazine`.  
**Note**: Each letter in `magazine` can only be used once.

---

### 11. Given a DOM structure, calculate and print the count of all DOM nodes.

---

### 12. Find relevant words in a sentence and remove all extra characters (`?`, `.`, `!`, `[ ]`).

---

### 13. Write a function to sum all elements in an array using recursion (no `reduce`, `map`, or loops).

---

### 14. Write a function that takes an object and returns a deep-cloned object with a different reference.

---

### 15. Add a prototype method `.even()` to arrays that returns all even elements.

---

### 16. Write polyfills for:
- `Promise`
- `call`
- `apply`
- `bind`
- `map`
- `filter`
- `reduce`
- `Map()`

---

### 17. Implement **throttling** and **debouncing** in JavaScript.

---

### 18. From an array of objects, filter objects where `age > 24` and `age < 30`, and remove duplicates.

---

### 19. From an array of objects, create a `Map` that accumulates all common values.

---

### 20. Write a currying function `sum`  
Example: `sum(2)(3)(5)`

---

### 21. Write a function to memoize arguments and decide whether to execute the function or return the cached result.  
Example:
```js
const sum = (a, b, c) => a + b + c;

const memoizeOne = (cb) => {
  // implement your code
};

const memoizedSum = memoizeOne(sum);
memoizedSum(1,2,3); // Executed
memoizedSum(1,2,3); // Cached
memoizedSum(1,2,'3'); // Executed
memoizedSum(1,2,'3'); // Cached

const obj1 = { a: 123 };
memoizedSum(obj1, 2, 3); // Executed
memoizedSum(obj1, 2, 3); // Cached
memoizedSum({ a: 123 }, 2, 3); // Executed (new reference)
```

---

### 22. Write a currying function `sum`  
Example: `sum(2)(3)(5)`

---

### 23. Transform (flatten) an object into a single-level object with keys using underscores.
```js

Input:
const objInput = {
  name: {
    inner1: "shasank",
    inner2: {
      test: 34
    }
  },
  child: {
    city: "bangalore"
  },
  age: 24
}
Output:
{
  name_inner1: "shasank",
  name_inner2_test: 34,
  child_city: "bangalore",
  age: 24
}
```
