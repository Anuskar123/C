// Week 9: Recursion - Extracted from your PDF and lab exercises
const week9Data = {
    title: 'Week 9: Recursion',
    description: 'Master recursive functions, base cases, recursive algorithms, and understand the power of recursion from your course materials.',
    
    // CHEAT SHEET FROM EXTRACTED PDF CONTENT
    cheatSheet: {
        title: "📚 Week 9 Recursion Reference - From CSY2087_C++_Week9.pdf",
        sections: [
            {
                title: "♻️ Recursion Basics",
                content: `
DEFINITION:
A recursive function calls itself to solve a problem
by breaking it into smaller, similar problems.

BASIC STRUCTURE:
returnType function(parameters) {
    if (base_case_condition) {
        return base_value;     // Base case
    } else {
        return function(modified_parameters);  // Recursive case
    }
}

SIMPLE EXAMPLE - Countdown:
void countDown(int num) {
    if (num == 0) {
        cout << "Blastoff!" << endl;  // Base case
    } else {
        cout << num << "..." << endl;
        countDown(num - 1);           // Recursive call
    }
}`
            },
            {
                title: "🔢 Mathematical Recursion",
                content: `
FACTORIAL:
int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;                    // Base case
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

FIBONACCI SEQUENCE:
int fibonacci(int n) {
    if (n <= 0) return 0;           // Base case 1
    if (n == 1) return 1;           // Base case 2
    return fibonacci(n-1) + fibonacci(n-2); // Recursive case
}

POWER FUNCTION:
int power(int base, int exp) {
    if (exp == 0) return 1;         // Base case
    return base * power(base, exp - 1); // Recursive case
}`
            },
            {
                title: "🔍 Array & String Recursion",
                content: `
ARRAY SUM:
int arraySum(int arr[], int size) {
    if (size == 0) return 0;        // Base case
    return arr[0] + arraySum(arr+1, size-1); // Recursive case
}

STRING REVERSE:
string reverseString(string str) {
    if (str.length() <= 1) return str;  // Base case
    return str.back() + reverseString(str.substr(0, str.length()-1));
}

CHARACTER COUNT:
int countChar(string str, char ch) {
    if (str.empty()) return 0;      // Base case
    int count = (str[0] == ch) ? 1 : 0;
    return count + countChar(str.substr(1), ch); // Recursive case
}`
            },
            {
                title: "🔎 Searching Algorithms",
                content: `
BINARY SEARCH (RECURSIVE):
int binarySearch(int arr[], int first, int last, int target) {
    if (first > last) return -1;   // Base case: not found
    
    int mid = (first + last) / 2;
    if (arr[mid] == target) return mid;        // Base case: found
    else if (arr[mid] > target)
        return binarySearch(arr, first, mid-1, target);
    else
        return binarySearch(arr, mid+1, last, target);
}

LINEAR SEARCH:
int linearSearch(int arr[], int size, int target) {
    if (size == 0) return -1;      // Base case: not found
    if (arr[0] == target) return 0; // Base case: found
    int result = linearSearch(arr+1, size-1, target);
    return (result == -1) ? -1 : result + 1;
}`
            },
            {
                title: "🎯 Base Case Design",
                content: `
ESSENTIAL RULES:
1. Every recursive function MUST have a base case
2. Base case must be reachable
3. Recursive calls must move toward base case
4. Base case stops the recursion

COMMON BASE CASES:
• Size/Count reaches 0 or 1
• String becomes empty
• Number reaches 0 or 1
• Array bounds are exceeded
• Search target is found/not found

EXAMPLE - Sum of 1 to N:
int sum(int n) {
    if (n <= 1) return n;          // Base case
    return n + sum(n - 1);         // Moves toward base case
}`
            },
            {
                title: "⚖️ Recursion vs Iteration",
                content: `
RECURSION BENEFITS:
+ Models some algorithms naturally (tree traversal)
+ Shorter, cleaner code for complex problems
+ Elegant mathematical expression
+ Good for divide-and-conquer algorithms

RECURSION DRAWBACKS:
- Uses more memory (function call stack)
- Slower execution due to function call overhead
- Risk of stack overflow with deep recursion
- Can be harder to debug

ITERATION BENEFITS:
+ More memory efficient
+ Faster execution
+ No stack overflow risk
+ Easier to trace execution

WHEN TO USE RECURSION:
• Tree/graph traversals
• Mathematical formulas (factorial, fibonacci)
• Divide-and-conquer algorithms
• Problems with recursive structure`
            },
            {
                title: "⚠️ Common Recursion Pitfalls",
                content: `
❌ INFINITE RECURSION:
int bad(int n) {
    return bad(n);  // No base case!
}

❌ BASE CASE NEVER REACHED:
int bad(int n) {
    if (n == 0) return 1;
    return bad(n + 1);  // Moving away from base case
}

❌ STACK OVERFLOW:
fibonacci(50);  // Too many recursive calls

✅ BEST PRACTICES:
• Always define clear base case first
• Ensure recursive calls move toward base case
• Consider iterative alternative for deep recursion
• Test with small inputs first
• Use tail recursion when possible`
            }
        ]
    },
    
    questions: [
        {
            id: 'w9_q1',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            source: 'Week 9 Lab Exercise - Basic Recursion Understanding',
            question: 'What will this recursive function output when called with message(3)?',
            code: `void message(int times) {
    if (times > 0) {
        cout << "Hello ";
        message(times - 1);
    }
}`,
            options: [
                'a) Hello Hello Hello',
                'b) Hello Hello',
                'c) Hello',
                'd) Infinite loop'
            ],
            correct: 0,
            answer: 'a) Hello Hello Hello',
            explanation: `Function prints "Hello " then calls itself with times-1. With times=3: prints "Hello ", calls message(2), prints "Hello ", calls message(1), prints "Hello ", calls message(0) which stops.

**Detailed Recursion Trace for message(3):**

**Call Stack Visualization:**
message(3) → prints "Hello " → calls message(2)
    message(2) → prints "Hello " → calls message(1)  
        message(1) → prints "Hello " → calls message(0)
            message(0) → (base case: times <= 0, returns immediately)

**Execution Timeline:**
1. message(3): prints "Hello ", then calls message(2)
2. message(2): prints "Hello ", then calls message(1)  
3. message(1): prints "Hello ", then calls message(0)
4. message(0): base case reached, returns without printing
5. All recursive calls return in reverse order

**Output:** "Hello Hello Hello " (three times, with spaces)

**Key Recursion Concepts:**
• **Base Case:** times <= 0 (stops recursion)
• **Recursive Case:** Print + call with smaller problem (times-1)
• **Progress toward base:** Each call reduces times by 1
• **Call Stack:** Each function call waits for its recursive call to complete

**Common Beginner Confusion:** The function doesn't print "Hello" times number of times and then stop - it prints once per call as it goes down the recursion tree.`
        },
        {
            id: 'w9_q2',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 9 Lab Exercise - Infinite Recursion',
            question: 'Find the error that causes infinite recursion:',
            code: `int countdown(int n) {
    cout << n << " ";
    if (n == 0) {
        cout << "Blastoff!" << endl;
        return 0;
    }
    return countdown(n - 1);  // Error here!
}`,
            answer: 'Base case check should come before the recursive call',
            explanation: `The function prints n and then makes recursive call before checking if n==0. This causes infinite recursion because it never reaches the base case properly. Move the base case check to the beginning.

**Why This Causes Infinite Recursion:**
• Function immediately prints n without checking base case first
• Then calls itself with the same value of n (no progress toward base case)
• Even if n starts at 0, it prints 0 and then calls printDown(0) again
• Process repeats forever until stack overflow occurs

**Execution with printDown(3):**
Prints: 3, 3, 3, 3, 3... (infinite loop)
Stack: printDown(3) → printDown(3) → printDown(3) → ... (stack overflow)

**Two Fixes Needed:**

**Fix 1: Check base case FIRST**
void printDown(int n) {
    if (n == 0) return;    // Check base case first!
    cout << n << " ";
    printDown(n - 1);      // Also need to decrement n
}

**Fix 2: Make progress toward base case**
• Change printDown(n) to printDown(n-1)
• This ensures we eventually reach n==0

**Correct Execution with printDown(3):**
• printDown(3): prints 3, calls printDown(2)
• printDown(2): prints 2, calls printDown(1)  
• printDown(1): prints 1, calls printDown(0)
• printDown(0): base case, returns
• Output: "3 2 1 "

**Recursion Golden Rules:**
1. ALWAYS check base case first
2. ALWAYS make progress toward base case
3. Ensure recursive call uses different (smaller) parameters`
        },
        {
            id: 'w9_q3',
            type: 'Complete Code',
            difficulty: '⭐⭐ Medium',
            source: 'Week 9 Lab Exercise - Convert Iterative to Recursive',
            question: 'Convert this iterative "No Parking" function to recursive:',
            code: `// Original iterative version:
void sign(int n) {
    while (n > 0) {
        cout << "No Parking" << endl;
        n--;
    }
}

// Convert to recursive version:
void signRecursive(int n) {
    // COMPLETE THIS FUNCTION
}`,
            answer: `if (n <= 0) {
    return;  // Base case
}
cout << "No Parking" << endl;
signRecursive(n - 1);  // Recursive call`,
            explanation: 'Base case: stop when n≤0. Recursive case: print message and call with n-1. This matches the original behavior of printing n times.'
        },
        {
            id: 'w9_q4',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 9 Sample Program - Pr19-3 Factorial',
            question: 'What will factorial(4) return using this recursive function?',
            code: `int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}`,
            options: [
                'a) 12',
                'b) 24',
                'c) 120',
                'd) 4'
            ],
            correct: 1,
            answer: 'b) 24',
            explanation: `factorial(4) = 4 * factorial(3) = 4 * (3 * factorial(2)) = 4 * (3 * (2 * factorial(1))) = 4 * (3 * (2 * (1 * factorial(0)))) = 4 * 3 * 2 * 1 * 1 = 24

**Step-by-Step Recursive Calculation:**

**Call Stack Building (Going Down):**
1. factorial(4) needs 4 * factorial(3)
2. factorial(3) needs 3 * factorial(2)  
3. factorial(2) needs 2 * factorial(1)
4. factorial(1) needs 1 * factorial(0)
5. factorial(0) returns 1 (base case)

**Call Stack Unwinding (Coming Back Up):**
5. factorial(0) = 1
4. factorial(1) = 1 * 1 = 1
3. factorial(2) = 2 * 1 = 2
2. factorial(3) = 3 * 2 = 6  
1. factorial(4) = 4 * 6 = 24

**Memory Stack Visualization:**
[factorial(4): waiting for factorial(3)]
[factorial(3): waiting for factorial(2)]
[factorial(2): waiting for factorial(1)]  
[factorial(1): waiting for factorial(0)]
[factorial(0): returns 1] ← base case reached

**Mathematical Verification:**
4! = 4 × 3 × 2 × 1 = 24 ✓

**Recursion Pattern:**
• Base case: factorial(0) = 1
• Recursive case: factorial(n) = n × factorial(n-1)
• Each call waits for the next smaller factorial to complete`
        },
        {
            id: 'w9_q5',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 9 Lab Exercise - Recursive Sum Function',
            question: 'Fix this recursive function that should sum integers 1 to n:',
            code: `int sumToN(int n) {
    if (n == 0) {
        return 0;
    }
    return n + sumToN(n);  // Error!
}

// Should calculate: sumToN(5) = 1+2+3+4+5 = 15`,
            answer: 'Change sumToN(n) to sumToN(n-1)',
            explanation: 'The recursive call must move toward the base case. Using sumToN(n) creates infinite recursion. Should be sumToN(n-1) to eventually reach the base case of n==0.'
        },
        {
            id: 'w9_q6',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 9 Sample Program - Pr19-6 Fibonacci',
            question: 'What is the 6th Fibonacci number using this function?',
            code: `int fib(int n) {
    if (n <= 0) return 0;
    else if (n == 1) return 1;
    else return fib(n-1) + fib(n-2);
}

// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...`,
            options: [
                'a) 5',
                'b) 8',
                'c) 13',
                'd) 21'
            ],
            correct: 1,
            answer: 'b) 8',
            explanation: `fib(6) = fib(5) + fib(4). Sequence: fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=8

**Fibonacci Sequence Explanation:**
Each number is the sum of the two preceding numbers:
F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2) for n≥2

**Building the Sequence:**
• fib(0) = 0 (base case)
• fib(1) = 1 (base case)
• fib(2) = fib(1) + fib(0) = 1 + 0 = 1
• fib(3) = fib(2) + fib(1) = 1 + 1 = 2
• fib(4) = fib(3) + fib(2) = 2 + 1 = 3
• fib(5) = fib(4) + fib(3) = 3 + 2 = 5
• fib(6) = fib(5) + fib(4) = 5 + 3 = 8

**Recursive Tree for fib(6):**
                    fib(6)
                   /      \\
               fib(5)      fib(4)
              /     \\    /     \\
          fib(4)   fib(3) fib(3) fib(2)
          ...       ...    ...    ...

**Performance Note:** 
This naive recursive implementation has exponential time complexity O(2^n) 
because it recalculates the same values multiple times. For fib(6), fib(3) 
is calculated 3 times, fib(2) is calculated 5 times!

**Real-World Optimization:**
Use memoization or dynamic programming to store previously calculated results,
reducing time complexity to O(n).`
        },
        {
            id: 'w9_q7',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 9 Lab Exercise - Recursive Power Function',
            question: 'Complete this recursive power function:',
            code: `#include <iostream>
using namespace std;

int power(int base, int exponent) {
    // COMPLETE THIS FUNCTION
    // Calculate base^exponent recursively
    // Assume exponent >= 0
}

int main() {
    cout << power(2, 5) << endl;  // Should output 32
    cout << power(3, 4) << endl;  // Should output 81
    return 0;
}`,
            answer: `if (exponent == 0) {
    return 1;  // Base case: any number^0 = 1
}
return base * power(base, exponent - 1);  // Recursive case`,
            explanation: 'Base case: x^0 = 1. Recursive case: x^n = x * x^(n-1). For power(2,5): 2 * power(2,4) = 2 * (2 * power(2,3)) = ... = 2 * 2 * 2 * 2 * 2 = 32'
        },
        {
            id: 'w9_q8',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 9 Lab Exercise - Array Sum Recursion',
            question: 'Find the error in this recursive array sum function:',
            code: `int arraySum(int arr[], int size) {
    if (size == 1) {
        return arr[0];
    }
    return arr[0] + arraySum(arr + 1, size);  // Error!
}`,
            answer: 'Should decrease size in recursive call: arraySum(arr + 1, size - 1)',
            explanation: 'The size parameter must be decremented in the recursive call to eventually reach the base case. Without size-1, the recursion never terminates.'
        },
        {
            id: 'w9_q9',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 9 Sample Program - Pr19-9 Binary Search',
            question: 'What will this recursive binary search return for searching 45 in sorted array {10, 20, 30, 40, 50}?',
            code: `int binarySearch(int arr[], int first, int last, int value) {
    if (first > last) return -1;
    
    int middle = (first + last) / 2;
    if (arr[middle] == value) return middle;
    else if (arr[middle] < value)
        return binarySearch(arr, middle + 1, last, value);
    else
        return binarySearch(arr, first, middle - 1, value);
}

// Call: binarySearch(arr, 0, 4, 45)`,
            options: [
                'a) 3',
                'b) 4',
                'c) -1',
                'd) 2'
            ],
            correct: 2,
            answer: 'c) -1',
            explanation: `Array is {10,20,30,40,50}. Middle=2 (value 30), 30<45 so search right half. Middle=3 (value 40), 40<45 so search right. Middle=4 (value 50), 50>45 so search left. first>last, return -1 (not found).

**Binary Search Trace for target = 45:**

**Initial Call:** binarySearch(arr, 0, 4, 45)
Array: [10, 20, 30, 40, 50]
       ↑         ↑        ↑
     first      mid     last
     (0)        (2)      (4)

**Step 1:** middle = (0+4)/2 = 2, arr[2] = 30
30 < 45, so search RIGHT half
Call: binarySearch(arr, 3, 4, 45)

**Step 2:** middle = (3+4)/2 = 3, arr[3] = 40  
40 < 45, so search RIGHT half
Call: binarySearch(arr, 4, 4, 45)

**Step 3:** middle = (4+4)/2 = 4, arr[4] = 50
50 > 45, so search LEFT half  
Call: binarySearch(arr, 4, 3, 45)

**Step 4:** first=4, last=3, first > last
Base case reached: element not found, return -1

**Key Binary Search Concepts:**
• **Divide and Conquer:** Split search space in half each time
• **Sorted Array Required:** Algorithm assumes array is sorted
• **Logarithmic Time:** O(log n) - very efficient for large arrays
• **Base Cases:** first > last (not found) or arr[middle] == target (found)

**Why 45 isn't found:** It would belong between 40 and 50, but arrays have discrete indices - there's no position 3.5!`
        },
        {
            id: 'w9_q10',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 9 Lab Exercise - String Reverse Recursion',
            question: 'Complete this recursive string reversal function:',
            code: `#include <iostream>
#include <string>
using namespace std;

string reverseString(string str) {
    // COMPLETE THIS FUNCTION
    // Return reversed string using recursion
}

int main() {
    cout << reverseString("hello") << endl;    // Should output "olleh"
    cout << reverseString("recursion") << endl; // Should output "noisrucer"
    return 0;
}`,
            answer: `if (str.length() <= 1) {
    return str;  // Base case: empty or single character
}
return str.back() + reverseString(str.substr(0, str.length()-1));`,
            explanation: 'Base case: string with 0 or 1 character returns as-is. Recursive case: take last character + reverse of remaining string. For "hello": "o" + reverse("hell") = "o" + "lleh" = "olleh"'
        }
    ]
};

// Export for use in main application
window.week9Data = week9Data;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = week9Data;
}
