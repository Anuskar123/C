// Week 2: Control Structures & Loops
const week2Data = {
    title: 'Week 2: Control Structures & Loops',
    description: 'Master decision-making with if-else statements, loops (for, while, do-while), and pattern programming.',
    
    // QUICK REFERENCE CHEAT SHEET
    cheatSheet: {
        title: "📚 Week 2 Quick Reference & Concepts",
        sections: [
            {
                title: "🔀 If-Else Statements",
                content: `
BASIC IF:
if (condition) {
    // code
}

IF-ELSE:
if (condition) {
    // code
} else {
    // code
}

IF-ELSE IF:
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // default code
}`
            },
            {
                title: "🔄 Loop Types",
                content: `
FOR LOOP (known iterations):
for (initialization; condition; increment) {
    // code
}

WHILE LOOP (unknown iterations):
while (condition) {
    // code
    // update condition
}

DO-WHILE LOOP (execute at least once):
do {
    // code
} while (condition);`
            },
            {
                title: "⚖️ Comparison Operators",
                content: `
== Equal to          != Not equal to
<  Less than         >  Greater than
<= Less than equal   >= Greater than equal

LOGICAL OPERATORS:
&& AND    || OR    ! NOT

Example: if (age >= 18 && age <= 65)`
            },
            {
                title: "🎯 Common Loop Patterns",
                content: `
COUNTING: for (int i = 1; i <= n; i++)
COUNTDOWN: for (int i = n; i >= 1; i--)
EVEN NUMBERS: for (int i = 2; i <= n; i += 2)
INPUT VALIDATION:
do {
    cout << "Enter positive number: ";
    cin >> num;
} while (num <= 0);`
            },
            {
                title: "⭐ Nested Loops & Patterns",
                content: `
PATTERN PRINTING:
for (int row = 1; row <= rows; row++) {
    for (int col = 1; col <= cols; col++) {
        cout << "*";
    }
    cout << endl;
}

TRIANGLE PATTERN:
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        cout << "*";
    }
    cout << endl;
}`
            },
            {
                title: "🚨 Loop Control & Best Practices",
                content: `
break: Exit loop immediately
continue: Skip to next iteration

INFINITE LOOP PREVENTION:
• Always update loop variable
• Check loop conditions carefully
• Use debugging output

EFFICIENCY:
• Avoid unnecessary calculations in loops
• Use appropriate loop type
• Consider loop bounds carefully`
            }
        ]
    },
    
    questions: [
        {
            id: 'w2_q1',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            source: 'Week 2 PDF - Basic Conditionals',
            question: 'What will this code output if user enters 85?',
            code: `int score;
cout << "Enter score: ";
cin >> score;
if (score >= 90)
    cout << "A grade";
else if (score >= 80)
    cout << "B grade";
else
    cout << "C or below";`,
            options: [
                'a) A grade',
                'b) B grade', 
                'c) C or below',
                'd) Error'
            ],
            correct: 1,
            answer: 'b) B grade',
            explanation: `ANSWER: b) B grade

DETAILED EXPLANATION:
This demonstrates how if-else chains work with sequential condition checking.

STEP-BY-STEP EXECUTION:
Given input: score = 85

1. FIRST CONDITION CHECK:
   if (score >= 90)
   - Is 85 >= 90? FALSE
   - 85 is less than 90, so skip this block
   - Move to next condition

2. SECOND CONDITION CHECK:
   else if (score >= 80)
   - Is 85 >= 80? TRUE
   - 85 is greater than or equal to 80
   - Execute this block: cout << "B grade"
   - Skip all remaining conditions (important!)

3. REMAINING CONDITIONS SKIPPED:
   - The else block is not executed
   - Once a condition is true, the chain terminates

IF-ELSE CHAIN BEHAVIOR:
- Evaluates conditions from top to bottom
- Stops at the FIRST true condition
- Only ONE block executes, never multiple
- Order of conditions matters for ranges

GRADE SCALE ANALYSIS:
- 90 and above → "A grade"
- 80-89 → "B grade"
- Below 80 → "C or below"

Since 85 falls in the range [80, 89], the output is "B grade".

WHY OTHER OPTIONS ARE WRONG:
a) A grade - Would need score >= 90 (85 < 90)
c) C or below - Would need score < 80 (85 >= 80)
d) Error - No syntax errors in this code

KEY CONCEPT:
In if-else chains, arrange conditions from most restrictive to least restrictive for proper range checking.`
        },
        {
            id: 'w2_q2',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 2 Lab - Loop Errors',
            question: 'Find the error in this countdown loop:',
            code: `for (int i = 10; i >= 1; i++) {
    cout << i << " ";
}
cout << "Blast off!";`,
            answer: 'Change i++ to i-- in the loop increment',
            explanation: `ANSWER: Change i++ to i-- in the loop increment

DETAILED EXPLANATION:
This code has an infinite loop problem due to incorrect loop increment direction.

ERROR ANALYSIS:
Current problematic loop: for (int i = 10; i >= 1; i++)

COMPONENT BREAKDOWN:
1. Initialization: i = 10 (starts at 10)
2. Condition: i >= 1 (continue while i is greater than or equal to 1)
3. Update: i++ (increases i by 1 each iteration)

EXECUTION TRACE (INFINITE LOOP):
- Iteration 1: i = 10, condition (10 >= 1) = TRUE, i becomes 11
- Iteration 2: i = 11, condition (11 >= 1) = TRUE, i becomes 12
- Iteration 3: i = 12, condition (12 >= 1) = TRUE, i becomes 13
- ... continues forever because i keeps growing

THE FUNDAMENTAL PROBLEM:
- We want to count DOWN from 10 to 1
- But i++ makes i go UP (10, 11, 12, 13...)
- Condition i >= 1 will ALWAYS be true for positive numbers
- Loop never terminates = infinite loop

CORRECT SOLUTION:
for (int i = 10; i >= 1; i--)

CORRECTED EXECUTION TRACE:
- Iteration 1: i = 10, condition (10 >= 1) = TRUE, print "10 ", i becomes 9
- Iteration 2: i = 9, condition (9 >= 1) = TRUE, print "9 ", i becomes 8
- Iteration 3: i = 8, condition (8 >= 1) = TRUE, print "8 ", i becomes 7
- ...
- Iteration 10: i = 1, condition (1 >= 1) = TRUE, print "1 ", i becomes 0
- Iteration 11: i = 0, condition (0 >= 1) = FALSE, loop terminates

EXPECTED OUTPUT:
"10 9 8 7 6 5 4 3 2 1 Blast off!"

LOOP DIRECTION RULES:
- Counting UP: use i++ (i = 1; i <= n; i++)
- Counting DOWN: use i-- (i = n; i >= 1; i--)
- Always ensure loop variable moves TOWARD the termination condition

DEBUGGING TIP:
If a loop seems to run forever, check if the update statement moves the variable in the right direction relative to the condition.`
        },
        {
            id: 'w2_q3',
            type: 'Complete Code',
            difficulty: '⭐⭐ Medium',
            source: 'Week 2 Lab - Sum Calculator',
            question: 'Complete the code to find sum of numbers from 1 to n:',
            code: `#include <iostream>
using namespace std;
int main() {
    int n, sum = 0;
    cout << "Enter n: ";
    cin >> n;
    
    // WRITE LOOP TO CALCULATE SUM
    
    cout << "Sum = " << sum << endl;
    return 0;
}`,
            answer: `for (int i = 1; i <= n; i++) {
    sum += i;
}`,
            explanation: `COMPLETE CODE SOLUTION:
for (int i = 1; i <= n; i++) {
    sum += i;
}

DETAILED EXPLANATION:
This program calculates the sum of consecutive integers from 1 to n using an accumulator pattern.

STEP-BY-STEP BREAKDOWN:

1. LOOP STRUCTURE:
   for (int i = 1; i <= n; i++)
   - Start from i = 1 (first number to add)
   - Continue while i <= n (include n in the sum)
   - Increment i by 1 each iteration

2. ACCUMULATION PROCESS:
   sum += i;
   - This is equivalent to: sum = sum + i;
   - Adds current value of i to running total
   - sum variable accumulates the total

ALGORITHM TRACE (Example: n = 5):
Initial: sum = 0, n = 5

Iteration 1: i = 1, sum = 0 + 1 = 1
Iteration 2: i = 2, sum = 1 + 2 = 3
Iteration 3: i = 3, sum = 3 + 3 = 6
Iteration 4: i = 4, sum = 6 + 4 = 10
Iteration 5: i = 5, sum = 10 + 5 = 15

Final result: sum = 15

MATHEMATICAL VERIFICATION:
Sum of 1 to n = n × (n + 1) ÷ 2
For n = 5: 5 × 6 ÷ 2 = 15 ✓

ACCUMULATOR PATTERN:
1. Initialize accumulator to identity value (0 for addition)
2. Loop through all values to process
3. Update accumulator with each value
4. Final accumulator contains result

ALTERNATIVE IMPLEMENTATIONS:
Option 1 (current): for (int i = 1; i <= n; i++) sum += i;
Option 2: for (int i = n; i >= 1; i--) sum += i;
Option 3: while (int i = 1; i <= n; i++) sum += i;

COMMON MISTAKES TO AVOID:
- Forgetting to initialize sum to 0
- Using wrong loop bounds (i < n instead of i <= n)
- Incrementing by wrong amount
- Using multiplication instead of addition

EFFICIENCY NOTE:
For large n, direct formula n×(n+1)/2 is faster than looping, but this loop approach is more educational and generalizable.`
        },
        {
            id: 'w2_q4',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 2 Lab - Prime Numbers',
            question: 'How many times will this loop execute?',
            code: `int count = 0;
for (int i = 2; i < 10; i++) {
    bool isPrime = true;
    for (int j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) count++;
}`,
            options: [
                'a) 8 times (outer loop)',
                'b) 4 times (prime count)',
                'c) Variable number of times',
                'd) 64 times (total iterations)'
            ],
            correct: 0,
            answer: 'a) 8 times (outer loop)',
            explanation: `ANSWER: a) 8 times (outer loop)

DETAILED EXPLANATION:
This question tests understanding of loop iteration counting vs. algorithmic results.

STEP-BY-STEP ANALYSIS:

1. OUTER LOOP STRUCTURE:
   for (int i = 2; i < 10; i++)
   - Starts at i = 2
   - Continues while i < 10
   - Values of i: 2, 3, 4, 5, 6, 7, 8, 9
   - Total iterations: 8 times

2. WHAT THE ALGORITHM DOES:
   This is a prime number detection algorithm for numbers 2-9:
   - i = 2: Check if 2 is prime (inner loop doesn't run, j = 2 to 1, no iterations)
   - i = 3: Check if 3 is prime (inner loop: j = 2, no factors found)
   - i = 4: Check if 4 is prime (inner loop: j = 2, 4%2=0, not prime)
   - i = 5: Check if 5 is prime (inner loop: j = 2,3,4, no factors)
   - i = 6: Check if 6 is prime (inner loop: j = 2, 6%2=0, not prime)
   - i = 7: Check if 7 is prime (inner loop: j = 2,3,4,5,6, no factors)
   - i = 8: Check if 8 is prime (inner loop: j = 2, 8%2=0, not prime)
   - i = 9: Check if 9 is prime (inner loop: j = 2,3, 9%3=0, not prime)

3. PRIME COUNT RESULT:
   Primes found: 2, 3, 5, 7 (count = 4)

QUESTION INTERPRETATION:
"How many times will this loop execute?" refers to the PRIMARY LOOP structure, which is the outer for loop.

WHY OTHER OPTIONS ARE INCORRECT:
b) 4 times (prime count) - This is the RESULT of the algorithm, not loop execution count
c) Variable number of times - The outer loop always runs exactly 8 times
d) 64 times (total iterations) - This would be if inner loop always ran full cycles

INNER LOOP ITERATION COUNT:
- i=2: 0 iterations (j from 2 to 1, invalid range)
- i=3: 1 iteration (j=2)
- i=4: 1 iteration (j=2, then break)
- i=5: 3 iterations (j=2,3,4)
- i=6: 1 iteration (j=2, then break)
- i=7: 5 iterations (j=2,3,4,5,6)
- i=8: 1 iteration (j=2, then break)
- i=9: 2 iterations (j=2,3, then break at j=3)
Total inner iterations: 14 (not 64)

KEY CONCEPT:
When asked about loop execution count, focus on the primary loop structure, not the algorithm's output or nested loop complexity.`
        },
        {
            id: 'w2_q5',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 2 Lab - Factorial Calculator',
            question: 'Fix this factorial calculator:',
            code: `#include <iostream>
using namespace std;
int main() {
    int n, factorial;
    cout << "Enter number: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        factorial *= i;  // Bug here!
    }
    
    cout << "Factorial: " << factorial << endl;
    return 0;
}`,
            answer: 'Initialize factorial to 1: int factorial = 1;',
            explanation: `ANSWER: Initialize factorial to 1: int factorial = 1;

DETAILED EXPLANATION:
This demonstrates a critical error in variable initialization for multiplicative operations.

ERROR ANALYSIS:
Current problematic code: int n, factorial;
- Variable 'factorial' is declared but NOT initialized
- Contains garbage/random memory value
- Multiplying by garbage produces unpredictable results

THE FUNDAMENTAL PROBLEM:
factorial *= i; is equivalent to factorial = factorial * i;
- If factorial starts with garbage value (e.g., 32767)
- First iteration: factorial = 32767 * 1 = 32767
- Second iteration: factorial = 32767 * 2 = 65534
- Result is completely wrong and unpredictable

CORRECT SOLUTION:
int n, factorial = 1;
OR
int factorial = 1;

WHY INITIALIZE TO 1 (NOT 0):
- Factorial calculation uses MULTIPLICATION
- Mathematical identity for multiplication: x * 1 = x
- Starting with 1 preserves the multiplication chain
- Starting with 0 would make everything 0 (0 * anything = 0)

ALGORITHM TRACE (CORRECTED, n = 4):
Initial: factorial = 1

Iteration 1: i = 1, factorial = 1 * 1 = 1
Iteration 2: i = 2, factorial = 1 * 2 = 2  
Iteration 3: i = 3, factorial = 2 * 3 = 6
Iteration 4: i = 4, factorial = 6 * 4 = 24

Final result: 4! = 24 ✓

MULTIPLICATIVE vs ADDITIVE OPERATIONS:
- Addition: Initialize accumulator to 0 (additive identity)
- Multiplication: Initialize accumulator to 1 (multiplicative identity)
- Concatenation: Initialize to empty string ""

COMPLETE CORRECTED CODE:
#include <iostream>
using namespace std;
int main() {
    int n, factorial = 1;  // Initialize to 1!
    cout << "Enter number: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    cout << "Factorial: " << factorial << endl;
    return 0;
}

DEBUGGING TIP:
Always initialize variables before using them in calculations. Uninitialized variables contain random memory values and cause unpredictable program behavior.

SPECIAL CASE HANDLING:
- 0! = 1 (mathematical definition)
- 1! = 1
- Negative numbers: factorial undefined (add validation)`
        },
        {
            id: 'w2_q6',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 2 Lab - Pattern Printing',
            question: 'Complete code to print this triangle pattern:',
            code: `/*
Output for n=4:
*
**
***
****
*/
#include <iostream>
using namespace std;
int main() {
    int n;
    cout << "Enter number of rows: ";
    cin >> n;
    
    // WRITE NESTED LOOPS FOR PATTERN
    
    return 0;
}`,
            answer: `for (int row = 1; row <= n; row++) {
    for (int col = 1; col <= row; col++) {
        cout << "*";
    }
    cout << endl;
}`,
            explanation: `COMPLETE CODE SOLUTION:
for (int row = 1; row <= n; row++) {
    for (int col = 1; col <= row; col++) {
        cout << "*";
    }
    cout << endl;
}

DETAILED EXPLANATION:
This demonstrates nested loops for pattern printing - a fundamental programming concept.

PATTERN ANALYSIS:
Target pattern for n = 4:
Row 1: * (1 star)
Row 2: ** (2 stars)  
Row 3: *** (3 stars)
Row 4: **** (4 stars)

OBSERVATION: Row number = Number of stars in that row

NESTED LOOP STRUCTURE:

1. OUTER LOOP (Row Control):
   for (int row = 1; row <= n; row++)
   - Controls which row we're printing
   - Runs n times (1, 2, 3, ..., n)
   - Each iteration prints one complete row

2. INNER LOOP (Column Control):
   for (int col = 1; col <= row; col++)
   - Controls how many stars in current row
   - Runs 'row' number of times
   - Prints one star per iteration

3. ROW TERMINATION:
   cout << endl;
   - Moves to next line after completing each row
   - Executed after inner loop finishes

EXECUTION TRACE (n = 4):

Row 1 (row = 1):
  Inner loop: col goes from 1 to 1 (1 iteration)
  Output: "*"
  Then: endl (move to next line)

Row 2 (row = 2):
  Inner loop: col goes from 1 to 2 (2 iterations)
  Output: "**"
  Then: endl

Row 3 (row = 3):
  Inner loop: col goes from 1 to 3 (3 iterations)
  Output: "***"
  Then: endl

Row 4 (row = 4):
  Inner loop: col goes from 1 to 4 (4 iterations)
  Output: "****"
  Then: endl

TOTAL OUTPUT:
*
**
***
****

NESTED LOOP ITERATION COUNT:
- Row 1: 1 iteration
- Row 2: 2 iterations  
- Row 3: 3 iterations
- Row 4: 4 iterations
Total: 1 + 2 + 3 + 4 = 10 stars printed

MATHEMATICAL PATTERN:
Total iterations = n × (n + 1) ÷ 2
For n = 4: 4 × 5 ÷ 2 = 10 ✓

PATTERN PROGRAMMING PRINCIPLES:
1. Identify the relationship between row/column positions
2. Use outer loop for rows, inner loop for columns
3. Inner loop bounds often depend on outer loop variable
4. Always add newline after completing each row

ALTERNATIVE PATTERNS:
Right triangle: col <= row
Inverted triangle: col <= (n - row + 1)
Square pattern: col <= n
Diamond pattern: More complex nested logic`
        },
        {
            id: 'w2_q7',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 2 Examination - Logical Operators',
            question: 'What is the output when age=17, hasLicense=true?',
            code: `int age = 17;
bool hasLicense = true;

if (age >= 18 && hasLicense) {
    cout << "Can drive";
} else if (age >= 16 && hasLicense) {
    cout << "Can drive with restrictions";
} else {
    cout << "Cannot drive";
}`,
            options: [
                'a) Can drive',
                'b) Can drive with restrictions',
                'c) Cannot drive',
                'd) Compilation error'
            ],
            correct: 1,
            answer: 'b) Can drive with restrictions',
            explanation: `ANSWER: b) Can drive with restrictions

DETAILED EXPLANATION:
This tests understanding of logical operators and if-else chain evaluation with compound conditions.

GIVEN VALUES:
int age = 17;
bool hasLicense = true;

STEP-BY-STEP CONDITION EVALUATION:

1. FIRST CONDITION CHECK:
   if (age >= 18 && hasLicense)
   
   LOGICAL AND (&&) EVALUATION:
   - age >= 18: Is 17 >= 18? FALSE
   - hasLicense: true
   - FALSE && true = FALSE (AND requires both true)
   
   Result: Condition is FALSE, skip this block

2. SECOND CONDITION CHECK:
   else if (age >= 16 && hasLicense)
   
   LOGICAL AND (&&) EVALUATION:
   - age >= 16: Is 17 >= 16? TRUE
   - hasLicense: true  
   - TRUE && true = TRUE (both conditions satisfied)
   
   Result: Condition is TRUE, execute this block
   Output: "Can drive with restrictions"

3. REMAINING CONDITIONS SKIPPED:
   Since second condition was true, the else block is not evaluated
   If-else chain terminates after first true condition

LOGICAL AND (&&) OPERATOR RULES:
- Returns true only if BOTH operands are true
- Returns false if ANY operand is false
- Short-circuit evaluation: if first operand is false, second isn't checked

TRUTH TABLE FOR AND:
true && true = true
true && false = false  
false && true = false
false && false = false

AGE-BASED DRIVING LOGIC:
- Age 18+: Full driving privileges (if licensed)
- Age 16-17: Restricted driving (if licensed)  
- Under 16: Cannot drive

WHY OTHER OPTIONS ARE WRONG:
a) "Can drive" - Requires age >= 18 (17 < 18)
c) "Cannot drive" - Would need age < 16 OR no license
d) Compilation error - No syntax errors in this code

REAL-WORLD APPLICATION:
This pattern models graduated driver licensing systems where younger drivers have restrictions on:
- Driving hours (no night driving)
- Passenger limits
- Highway restrictions
- Supervision requirements

KEY CONCEPTS:
1. Compound conditions with logical operators
2. If-else chain short-circuit behavior
3. Practical application of boolean logic in decision-making systems`
        },
        {
            id: 'w2_q8',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 2 Lab - Number Guessing Game',
            question: 'Find the logical error in this guessing game:',
            code: `#include <iostream>
using namespace std;
int main() {
    int secret = 42, guess;
    
    do {
        cout << "Guess the number: ";
        cin >> guess;
        
        if (guess > secret)
            cout << "Too high!" << endl;
        if (guess < secret)
            cout << "Too low!" << endl;
            
    } while (guess = secret);  // Error here!
    
    cout << "Correct!" << endl;
    return 0;
}`,
            answer: 'Assignment operator = instead of comparison operator ==',
            explanation: `ANSWER: Assignment operator = instead of comparison operator ==

DETAILED EXPLANATION:
This demonstrates a critical error mixing assignment (=) with comparison (==) in loop conditions.

ERROR ANALYSIS:
Problematic line: } while (guess = secret);

WHAT'S HAPPENING:
1. guess = secret is ASSIGNMENT, not comparison
2. This assigns the value of secret (42) to guess
3. Assignment expressions return the assigned value (42)
4. In boolean context, 42 evaluates to true (non-zero = true)
5. Loop condition is always true → INFINITE LOOP

EXECUTION TRACE (INFINITE LOOP):
First iteration:
- User enters guess (e.g., 50)
- guess > secret: "Too high!" printed
- while (guess = secret): assigns 42 to guess, returns 42 (true)
- Loop continues

Second iteration:
- User enters new guess (e.g., 30)  
- guess < secret: "Too low!" printed
- while (guess = secret): assigns 42 to guess again, returns 42 (true)
- Loop continues infinitely

THE FUNDAMENTAL PROBLEM:
- Game never recognizes correct guess
- Loop condition always evaluates to true
- User trapped in infinite input cycle

CORRECT SOLUTIONS:
Option 1: while (guess != secret);  // Continue while not equal
Option 2: while (guess != secret);  // Most natural for guessing game

CORRECTED EXECUTION FLOW:
- User enters guess
- If guess > secret: print "Too high!"
- If guess < secret: print "Too low!"  
- Continue looping while guess != secret
- When guess == secret, loop terminates
- Print "Correct!"

ASSIGNMENT vs COMPARISON OPERATORS:
ASSIGNMENT (=):
- Stores value in variable
- Returns the assigned value
- Changes variable state
- Example: x = 5 (assigns 5 to x, returns 5)

COMPARISON (==):
- Tests equality without changing variables
- Returns true or false
- Doesn't modify variables
- Example: x == 5 (checks if x equals 5)

BOOLEAN EVALUATION RULES:
- 0 evaluates to false
- Any non-zero value evaluates to true
- Assignment always returns non-zero (unless assigning 0)

COMPILER WARNINGS:
Many compilers warn about assignment in conditions:
"warning: assignment in condition, did you mean ==?"

DEBUGGING TIPS:
1. Always use == for comparisons in conditions
2. Use = only for assignments
3. Enable compiler warnings to catch these errors
4. Test loop termination conditions carefully

DEFENSIVE PROGRAMMING:
Some programmers write: if (42 == guess) instead of if (guess == 42)
This way, accidental = becomes compilation error: if (42 = guess) is invalid.`
        },
        {
            id: 'w2_q9',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 2 Examination - Input Validation',
            question: 'Complete this input validation for positive integers:',
            code: `#include <iostream>
using namespace std;
int main() {
    int number;
    
    // WRITE CODE TO REPEATEDLY ASK FOR INPUT
    // UNTIL USER ENTERS A POSITIVE NUMBER
    
    cout << "Thank you! You entered: " << number << endl;
    return 0;
}`,
            answer: `do {
    cout << "Enter a positive number: ";
    cin >> number;
    if (number <= 0) {
        cout << "Invalid! Please enter a positive number." << endl;
    }
} while (number <= 0);`,
            explanation: `COMPLETE CODE SOLUTION:
do {
    cout << "Enter a positive number: ";
    cin >> number;
    if (number <= 0) {
        cout << "Invalid! Please enter a positive number." << endl;
    }
} while (number <= 0);

DETAILED EXPLANATION:
This demonstrates input validation using a do-while loop for guaranteed execution and user-friendly error feedback.

WHY DO-WHILE LOOP IS PERFECT HERE:

1. GUARANTEED EXECUTION:
   - Program MUST ask for input at least once
   - do-while executes body first, then checks condition
   - Ensures user gets at least one input opportunity

2. VALIDATION LOGIC:
   - Loop continues while input is invalid (number <= 0)
   - Stops when input is valid (number > 0)
   - Natural validation pattern

ALGORITHM BREAKDOWN:

1. PROMPT USER:
   cout << "Enter a positive number: ";
   - Clear instruction to user
   - Specific about what constitutes valid input

2. COLLECT INPUT:
   cin >> number;
   - Read user's input into variable
   - Input could be positive, negative, or zero

3. VALIDATE AND PROVIDE FEEDBACK:
   if (number <= 0) {
       cout << "Invalid! Please enter a positive number." << endl;
   }
   - Check if input violates validation rule
   - Provide specific error message explaining the problem
   - Guide user toward correct input format

4. CONTINUATION DECISION:
   } while (number <= 0);
   - Continue looping if input is still invalid
   - Exit loop when valid input received

EXECUTION SCENARIOS:

SCENARIO 1 (Valid First Try):
Input: 5
- Prompt displayed
- User enters 5
- 5 > 0, so no error message
- Condition (5 <= 0) is false, loop exits
- Output: "Thank you! You entered: 5"

SCENARIO 2 (Invalid Then Valid):
Input: -3, then 7
- Prompt displayed
- User enters -3
- -3 <= 0, so error message displayed
- Condition (-3 <= 0) is true, loop continues
- Prompt displayed again
- User enters 7
- 7 > 0, so no error message  
- Condition (7 <= 0) is false, loop exits
- Output: "Thank you! You entered: 7"

SCENARIO 3 (Multiple Invalid Attempts):
Input: -5, 0, -10, 3
- Loop runs 4 times total
- Error messages for -5, 0, -10
- Accepts 3 and exits

INPUT VALIDATION BEST PRACTICES:

1. CLEAR PROMPTS:
   - Tell user exactly what you want
   - Specify valid range or format

2. SPECIFIC ERROR MESSAGES:
   - Explain what was wrong
   - Guide toward correct input

3. PERSISTENT VALIDATION:
   - Don't give up after one bad input
   - Keep asking until valid input received

4. USER-FRIENDLY EXPERIENCE:
   - Don't crash on bad input
   - Provide helpful feedback

ALTERNATIVE IMPLEMENTATIONS:

Option 1 (Current approach):
- Provides error feedback for invalid input
- User-friendly and educational

Option 2 (Minimal):
do {
    cout << "Enter a positive number: ";
    cin >> number;
} while (number <= 0);
- Simpler but less user-friendly (no error messages)

Option 3 (While loop):
cout << "Enter a positive number: ";
cin >> number;
while (number <= 0) {
    cout << "Invalid! Please enter a positive number." << endl;
    cout << "Enter a positive number: ";
    cin >> number;
}
- More verbose, repeats prompt code

VALIDATION EXTENSIONS:
- Range validation: while (number < 1 || number > 100)
- Type validation: Handle non-numeric input with additional checks
- Format validation: Specific patterns or constraints`
        },
        {
            id: 'w2_q10',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 2 Examination - Algorithm Analysis',
            question: 'This code finds the largest number in a series. What happens if user enters all negative numbers?',
            code: `int largest = 0, num, count = 0;
while (count < 5) {
    cout << "Enter number: ";
    cin >> num;
    if (num > largest) {
        largest = num;
    }
    count++;
}
cout << "Largest: " << largest;`,
            options: [
                'a) Outputs the largest negative number',
                'b) Outputs 0',
                'c) Outputs garbage value',
                'd) Program crashes'
            ],
            correct: 1,
            answer: 'b) Outputs 0',
            explanation: `ANSWER: b) Outputs 0

DETAILED EXPLANATION:
This demonstrates a common algorithm bug: improper initialization for finding maximum values.

ALGORITHM ANALYSIS:
The code attempts to find the largest number among 5 user inputs, but has a critical initialization flaw.

PROBLEMATIC INITIALIZATION:
int largest = 0;
- Assumes largest value will be greater than 0
- Works correctly only if at least one input is positive
- Fails when all inputs are negative

EXECUTION TRACE (All Negative Inputs):
Assume user enters: -5, -12, -3, -8, -1

Iteration 1: num = -5
- Is -5 > 0? FALSE
- largest remains 0

Iteration 2: num = -12  
- Is -12 > 0? FALSE
- largest remains 0

Iteration 3: num = -3
- Is -3 > 0? FALSE  
- largest remains 0

Iteration 4: num = -8
- Is -8 > 0? FALSE
- largest remains 0

Iteration 5: num = -1
- Is -1 > 0? FALSE
- largest remains 0

Final result: largest = 0 (but 0 was never entered!)

THE FUNDAMENTAL PROBLEM:
- largest should be -1 (the actual largest among negative numbers)
- Algorithm incorrectly reports 0 as the largest
- 0 is greater than all negative numbers, but wasn't in the input set

CORRECT INITIALIZATION STRATEGIES:

Option 1 (Initialize to First Input):
int num, largest;
cout << "Enter number: ";
cin >> largest;  // First input becomes initial largest
for (int count = 1; count < 5; count++) {
    cout << "Enter number: ";
    cin >> num;
    if (num > largest) {
        largest = num;
    }
}

Option 2 (Initialize to Very Small Value):
int largest = INT_MIN;  // Smallest possible integer
// Now any real input will be larger

Option 3 (Use First Input in Loop):
int largest, num;
bool first = true;
for (int count = 0; count < 5; count++) {
    cout << "Enter number: ";
    cin >> num;
    if (first || num > largest) {
        largest = num;
        first = false;
    }
}

WHY OTHER OPTIONS ARE WRONG:
a) Outputs the largest negative number - Algorithm never updates from 0
c) Outputs garbage value - largest is explicitly initialized to 0
d) Program crashes - No runtime errors, just logical error

REAL-WORLD TESTING SCENARIOS:
1. All positive numbers: Works correctly
2. Mix of positive/negative: Works correctly  
3. All negative numbers: FAILS (outputs 0)
4. All zeros: Works correctly (outputs 0)
5. Very large numbers: Works correctly

ALGORITHM DESIGN PRINCIPLES:
1. Don't assume data characteristics (all positive, etc.)
2. Initialize variables to neutral or extreme values
3. Test with edge cases and boundary conditions
4. Consider empty datasets and special values

DEFENSIVE PROGRAMMING:
- Always test algorithms with negative numbers
- Use appropriate sentinel values
- Document assumptions about input data
- Validate that initialization makes sense for all possible inputs

MATHEMATICAL PERSPECTIVE:
Finding maximum requires comparing ALL elements. Starting with 0 introduces bias toward non-negative results, violating the mathematical definition of maximum.`
        }
    ]
};

// Export for use in main application
window.week2Data = week2Data;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = week2Data;
}
