# JavaScript Functions Project

## Description

This project contains a collection of JavaScript functions that demonstrate basic programming concepts such as string manipulation, array operations, and mathematical calculations.

The project includes functions to:

* Reverse a string
* Count the number of characters in a string
* Capitalize the first letter of each word in a sentence
* Find the maximum and minimum values in an array
* Calculate the sum of array elements
* Filter array elements based on a condition
* Calculate the factorial of a number
* Check whether a number is prime
* Generate a Fibonacci sequence

---

## Features

### String Manipulation Functions

#### 1. Reverse a String

Reverses the characters of a given string.

**Example:**

```javascript
reverseString("hello");
```

**Output:**

```javascript
"olleh"
```

#### 2. Count Characters

Returns the total number of characters in a string.

**Example:**

```javascript
countCharacters("JavaScript");
```

**Output:**

```javascript
10
```

#### 3. Capitalize Words

Capitalizes the first letter of every word in a sentence.

**Example:**

```javascript
capitalizeWords("hello world from javascript");
```

**Output:**

```javascript
"Hello World From Javascript"
```

---

## Array Functions

### 4. Find Maximum and Minimum

Finds the largest and smallest numbers in an array.

**Example:**

```javascript
findMax([12, 45, 7, 89, 23]);
findMin([12, 45, 7, 89, 23]);
```

**Output:**

```javascript
89
7
```

### 5. Sum of Array

Calculates the sum of all numbers in an array.

**Example:**

```javascript
sumArray([12, 45, 7, 89, 23]);
```

**Output:**

```javascript
176
```

### 6. Filter Array

Returns elements that satisfy a specified condition.

**Example:**

```javascript
filterArray([12, 45, 7, 89, 23], num => num > 20);
```

**Output:**

```javascript
[45, 89, 23]
```

---

## Mathematical Functions

### 7. Factorial

Calculates the factorial of a non-negative integer.

**Example:**

```javascript
factorial(5);
```

**Output:**

```javascript
120
```

### 8. Prime Number Check

Determines whether a number is prime.

**Example:**

```javascript
isPrime(7);
```

**Output:**

```javascript
true
```

### 9. Fibonacci Sequence

Generates a Fibonacci sequence up to a specified number of terms.

**Example:**

```javascript
fibonacci(10);
```

**Output:**

```javascript
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

---

## How to Run

1. Save the code in a file named `script.js`.
2. Open a terminal in the project folder.
3. Run the following command:

```bash
node script.js
```

4. The results will be displayed in the console.

---

## Technologies Used

* JavaScript (ES6)
* Node.js (optional for running locally)

---

## Author

Created as part of a JavaScript programming exercise to practice functions, arrays, strings, and mathematical algorithms.
