// Week 3: Functions
const week3Data = {
    title: 'Week 3: Functions',
    description: 'Master function declaration, definition, parameter passing, return values, and function overloading.',
    
    // QUICK REFERENCE CHEAT SHEET
    cheatSheet: {
        title: "📚 Week 3 Quick Reference & Concepts",
        sections: [
            {
                title: "🔧 Function Basics",
                content: `
FUNCTION STRUCTURE:
returnType functionName(parameters) {
    // function body
    return value;  // if not void
}

EXAMPLE:
int add(int a, int b) {
    return a + b;
}

VOID FUNCTION (no return):
void printMessage() {
    cout << "Hello!" << endl;
}`
            },
            {
                title: "📞 Function Calling",
                content: `
CALLING FUNCTIONS:
result = functionName(arguments);

EXAMPLES:
int sum = add(5, 3);          // Returns 8
printMessage();               // Void function
double area = calculateArea(radius);

FUNCTION CALL FLOW:
1. Arguments passed to parameters
2. Function body executes
3. Return value sent back
4. Execution continues after call`
            },
            {
                title: "📥📤 Parameter Passing",
                content: `
PASS BY VALUE (default):
void func(int x) {  // x is a copy
    x = 100;        // original unchanged
}

PASS BY REFERENCE:
void func(int& x) { // x is an alias
    x = 100;        // original changed
}

CONST PARAMETERS:
void func(const int& x) {  // Cannot modify x
    // x = 100;  // ERROR!
}`
            },
            {
                title: "🔄 Function Overloading",
                content: `
SAME NAME, DIFFERENT PARAMETERS:
int max(int a, int b);
double max(double a, double b);
int max(int a, int b, int c);

COMPILER CHOOSES BASED ON:
• Number of parameters
• Type of parameters
• Order of parameters

CANNOT overload based on return type only!`
            },
            {
                title: "🎯 Scope & Variables",
                content: `
LOCAL VARIABLES:
• Declared inside function
• Only accessible within function
• Destroyed when function ends

GLOBAL VARIABLES:
• Declared outside all functions
• Accessible everywhere
• Avoid when possible!

VARIABLE LIFETIME:
• Local: Created/destroyed each call
• Global: Exist for entire program`
            },
            {
                title: "⚡ Best Practices",
                content: `
✅ Use meaningful function names
✅ Keep functions small and focused
✅ Use const for parameters not modified
✅ Validate input parameters
✅ Document complex functions
✅ Use function prototypes

❌ Avoid global variables
❌ Don't modify const parameters
❌ Don't return references to local variables`
            }
        ]
    },
    
    questions: [
        {
            id: 'w3_q1',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            source: 'Week 3 PDF - Function Basics',
            question: 'What is the correct function declaration for calculating area of circle?',
            options: [
                'a) double areaCircle(double radius)',
                'b) areaCircle(double radius)',
                'c) double areaCircle(radius)',
                'd) void areaCircle(double radius)'
            ],
            correct: 0,
            answer: 'a) double areaCircle(double radius)',
            explanation: `ANSWER: a) double areaCircle(double radius)

DETAILED EXPLANATION:
This tests understanding of proper function declaration syntax and choosing appropriate data types.

FUNCTION DECLARATION COMPONENTS:

1. RETURN TYPE: double
   - Area calculations produce decimal values
   - π × r² typically results in non-integer values
   - double provides sufficient precision for mathematical calculations

2. FUNCTION NAME: areaCircle
   - Descriptive and follows naming conventions
   - Uses camelCase (standard C++ practice)
   - Clearly indicates the function's purpose

3. PARAMETER LIST: (double radius)
   - Parameter type specified: double
   - Parameter name provided: radius
   - Radius can be fractional, so double is appropriate

COMPLETE FUNCTION SYNTAX:
double areaCircle(double radius) {
    const double PI = 3.14159;
    return PI * radius * radius;
}

WHY OTHER OPTIONS ARE WRONG:

b) areaCircle(double radius) - INCORRECT
   - Missing return type
   - C++ requires explicit return type declaration
   - Compiler cannot infer return type from function body

c) double areaCircle(radius) - INCORRECT  
   - Missing parameter type declaration
   - C++ requires explicit type for all parameters
   - "radius" alone is not sufficient

d) void areaCircle(double radius) - INCORRECT
   - void means "returns nothing"
   - Area calculation should return the computed area
   - void would require output parameter or global variable

FUNCTION DECLARATION vs DEFINITION:

DECLARATION (Prototype):
double areaCircle(double radius);  // Semicolon, no body

DEFINITION (Implementation):
double areaCircle(double radius) {
    const double PI = 3.14159;
    return PI * radius * radius;
}

USAGE EXAMPLE:
int main() {
    double r = 5.0;
    double area = areaCircle(r);  // Receives returned value
    cout << "Area: " << area << endl;
    return 0;
}

DATA TYPE CONSIDERATIONS:
- Use double for mathematical calculations
- Provides ~15-17 decimal digits of precision
- Better than float for scientific calculations
- Prevents precision loss in complex formulas

FUNCTION NAMING BEST PRACTICES:
✓ areaCircle - Clear and descriptive
✓ calculateArea - Action-oriented
✓ getCircleArea - Indicates retrieval
✗ area - Too generic
✗ calc - Abbreviations unclear
✗ f1 - Non-descriptive`
        },
        {
            id: 'w3_q2',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 3 Lab - Function Definition',
            question: 'Find the error in this function:',
            code: `int calculateSquare(int num) {
    int result = num * num;
    // Missing return statement!
}

int main() {
    int x = 5;
    int square = calculateSquare(x);
    cout << square;
    return 0;
}`,
            answer: 'Missing return statement: should be "return result;"',
            explanation: `ANSWER: Missing return statement: should be "return result;"

DETAILED EXPLANATION:
This demonstrates a critical error in function implementation - forgetting the return statement in non-void functions.

ERROR ANALYSIS:
Current problematic function:
int calculateSquare(int num) {
    int result = num * num;
    // Missing return statement!
}

THE FUNDAMENTAL PROBLEM:
1. Function is declared to return int
2. Function calculates the result correctly
3. But function never returns the computed value
4. Calling code receives garbage/undefined value

COMPILATION BEHAVIOR:
- Some compilers will generate WARNING
- Code may compile but produce undefined behavior
- Return value is unpredictable (garbage memory)
- Program may appear to work but fails randomly

CORRECTED FUNCTION:
int calculateSquare(int num) {
    int result = num * num;
    return result;        // Fix: return the computed value
}

ALTERNATIVE IMPLEMENTATIONS:
Option 1 (Direct return):
int calculateSquare(int num) {
    return num * num;     // Calculate and return in one line
}

Option 2 (Explicit variable):
int calculateSquare(int num) {
    int result = num * num;
    return result;
}

EXECUTION FLOW ANALYSIS:

INCORRECT VERSION:
1. main() calls calculateSquare(5)
2. Function calculates result = 25
3. Function ends without returning value
4. square receives garbage value (undefined behavior)
5. cout outputs unpredictable result

CORRECTED VERSION:
1. main() calls calculateSquare(5)
2. Function calculates result = 25  
3. Function returns 25 to caller
4. square receives 25
5. cout outputs 25

RETURN STATEMENT RULES:
- Non-void functions MUST return a value
- Return type must match function declaration
- return statement transfers control back to caller
- Code after return statement is unreachable

COMPILER WARNINGS:
Modern compilers typically warn:
"warning: control reaches end of non-void function"
"warning: no return statement in function returning non-void"

RETURN VALUE TYPES:
- int functions: return integers
- double functions: return floating-point numbers
- bool functions: return true/false
- void functions: use "return;" (no value) or omit return

DEBUGGING TIPS:
1. Always check that non-void functions have return statements
2. Verify return type matches function declaration
3. Test functions independently before integration
4. Enable compiler warnings to catch missing returns
5. Use debugger to trace function execution flow

FUNCTION TESTING:
int main() {
    int result = calculateSquare(5);
    cout << "5 squared = " << result << endl;  // Should output: 5 squared = 25
    
    assert(calculateSquare(4) == 16);  // Unit test
    assert(calculateSquare(0) == 0);   // Edge case test
    
    return 0;
}

COMMON VARIATIONS OF THIS ERROR:
1. Missing return in all paths
2. Missing return in some conditional paths
3. Wrong return type
4. Returning local variable references`
        },
        {
            id: 'w3_q3',
            type: 'Complete Code',
            difficulty: '⭐⭐ Medium',
            source: 'Week 3 Lab - Parameter Passing',
            question: 'Complete the swap function using pass-by-reference:',
            code: `#include <iostream>
using namespace std;

// WRITE FUNCTION TO SWAP TWO INTEGERS
void swapNumbers(/* PARAMETERS */) {
    // SWAP LOGIC
}

int main() {
    int a = 10, b = 20;
    cout << "Before: a=" << a << ", b=" << b << endl;
    swapNumbers(a, b);
    cout << "After: a=" << a << ", b=" << b << endl;
    return 0;
}`,
            answer: `void swapNumbers(int& x, int& y) {
    int temp = x;
    x = y;
    y = temp;
}`,
            explanation: `COMPLETE CODE SOLUTION:
void swapNumbers(int& x, int& y) {
    int temp = x;
    x = y;
    y = temp;
}

DETAILED EXPLANATION:
This demonstrates pass-by-reference, which allows functions to modify the original variables.

PARAMETER ANALYSIS:
int& x, int& y
- & symbol means "reference parameter"
- x and y are aliases (alternate names) for the original variables
- Changes to x and y directly affect the original variables in main()

SWAP ALGORITHM BREAKDOWN:

1. TEMPORARY STORAGE:
   int temp = x;
   - Store x's value in temporary variable
   - Prevents loss of x's original value
   - temp now contains the value we want to give to y

2. FIRST ASSIGNMENT:
   x = y;
   - Copy y's value into x
   - x now has y's original value
   - This overwrites x's original value (safely stored in temp)

3. SECOND ASSIGNMENT:
   y = temp;
   - Copy temp's value (x's original value) into y
   - y now has x's original value
   - Swap is complete

EXECUTION TRACE (a=10, b=20):
Before swap: a=10, b=20

Function call: swapNumbers(a, b)
- x refers to a, y refers to b
- temp = x = 10
- x = y → a = 20
- y = temp → b = 10

After swap: a=20, b=10

PASS BY VALUE vs PASS BY REFERENCE:

PASS BY VALUE (Won't work for swapping):
void swapNumbers(int x, int y) {
    int temp = x;
    x = y;
    y = temp;
}
// Only swaps copies, originals unchanged

PASS BY REFERENCE (Correct for swapping):
void swapNumbers(int& x, int& y) {
    int temp = x;
    x = y;
    y = temp;
}
// Swaps original variables

MEMORY VISUALIZATION:
Before: a[10] b[20]
Call swapNumbers(a, b):
- x → a, y → b (references point to originals)
- temp[10]
- x(a)[20], y(b)[10]
After: a[20] b[10]

ALTERNATIVE SWAP METHODS:

Method 1 (Temporary variable - Recommended):
int temp = x; x = y; y = temp;

Method 2 (Arithmetic - No extra variable):
x = x + y; y = x - y; x = x - y;
// Risk: Integer overflow

Method 3 (XOR - Bitwise):
x = x ^ y; y = x ^ y; x = x ^ y;
// Works but less readable

Method 4 (C++11 std::swap):
std::swap(x, y);
// Built-in library function

REFERENCE PARAMETER BENEFITS:
1. Allows function to modify original variables
2. No copying overhead for large objects
3. Direct access to caller's variables
4. Essential for swap operations

REFERENCE PARAMETER RULES:
- Must be initialized when declared
- Cannot be null or reassigned
- Always refers to the same object
- Syntax: type& variableName

COMMON MISTAKES:
❌ Using pass-by-value for swap
❌ Forgetting & in parameter declaration
❌ Not using temporary variable
❌ Incorrect assignment order`
        },
        {
            id: 'w3_q4',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 3 Lab - Function Overloading',
            question: 'Which function will be called: max(5, 3)?',
            code: `int max(int a, int b) {
    return (a > b) ? a : b;
}

double max(double a, double b) {
    return (a > b) ? a : b;
}

int max(int a, int b, int c) {
    return max(max(a, b), c);
}`,
            options: [
                'a) int max(int a, int b)',
                'b) double max(double a, double b)',
                'c) int max(int a, int b, int c)',
                'd) Compilation error'
            ],
            correct: 0,
            answer: 'a) int max(int a, int b)',
            explanation: `ANSWER: a) int max(int a, int b)

DETAILED EXPLANATION:
This tests understanding of function overloading and how the compiler resolves function calls.

FUNCTION OVERLOADING ANALYSIS:
The code defines three overloaded versions of max():
1. int max(int a, int b) - Two integer parameters
2. double max(double a, double b) - Two double parameters  
3. int max(int a, int b, int c) - Three integer parameters

FUNCTION CALL ANALYSIS:
max(5, 3)
- Argument 1: 5 (integer literal)
- Argument 2: 3 (integer literal)
- Number of arguments: 2

COMPILER RESOLUTION PROCESS:

1. EXACT MATCH SEARCH:
   - Looking for function with 2 parameters
   - Both parameters should accept integers
   - int max(int a, int b) - PERFECT MATCH ✓
   - double max(double a, double b) - Could work with conversion
   - int max(int a, int b, int c) - Wrong parameter count

2. BEST MATCH SELECTION:
   - int max(int a, int b): Exact type match, no conversion needed
   - double max(double a, double b): Would require int→double conversion
   - Compiler chooses exact match over conversion

OVERLOAD RESOLUTION RULES:

1. EXACT MATCH (Highest Priority):
   - No type conversion needed
   - Perfect parameter count and type match

2. PROMOTION (Medium Priority):
   - char/short → int
   - float → double

3. STANDARD CONVERSION (Lower Priority):
   - int → double
   - double → int (with potential data loss)

4. USER-DEFINED CONVERSION (Lowest Priority):
   - Custom conversion operators

WHY OTHER OPTIONS ARE WRONG:

b) double max(double a, double b) - INCORRECT
   - Would require int-to-double conversion for both arguments
   - Compiler prefers exact match over conversion
   - This would be chosen if calling max(5.0, 3.0)

c) int max(int a, int b, int c) - INCORRECT
   - Wrong number of parameters (expects 3, got 2)
   - Parameter count mismatch eliminates this option immediately

d) Compilation error - INCORRECT
   - Valid overloaded functions exist
   - Clear resolution path available
   - No ambiguity in this case

EXECUTION RESULT:
max(5, 3) calls int max(int a, int b)
- Compares 5 and 3
- Returns 5 (the larger value)
- Return type is int

OVERLOADING EXAMPLES:

VALID OVERLOADS:
int max(int a, int b);                    // Different parameter count
double max(double a, double b);           // Different parameter types
int max(int a, int b, int c);            // Different parameter count
string max(string a, string b);          // Different parameter types

INVALID OVERLOADS:
int max(int a, int b);
double max(int a, int b);  // ❌ Same parameters, different return type
int max(int x, int y);     // ❌ Same signature (parameter names don't matter)

FUNCTION CALL EXAMPLES:
max(5, 3)           → int max(int, int)
max(5.2, 3.8)       → double max(double, double)  
max(5, 3, 1)        → int max(int, int, int)
max(5, 3.0)         → double max(double, double) [int promoted to double]

AMBIGUOUS CASES:
max(5, 3.0f)  // Could match int or double version - compiler error
// Solution: explicit casting max(5, (double)3.0f)

KEY CONCEPTS:
1. Overloading allows multiple functions with same name
2. Compiler chooses best match based on arguments
3. Exact matches preferred over conversions
4. Parameter count must match exactly`
        },
        {
            id: 'w3_q5',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 3 Lab - Scope Issues',
            question: 'Fix the scope error in this program:',
            code: `#include <iostream>
using namespace std;

void calculateGrade() {
    double average = 85.5;
    char grade = 'B';
}

int main() {
    calculateGrade();
    cout << "Grade: " << grade << endl;  // Error!
    return 0;
}`,
            answer: 'Make function return the grade or use reference parameter',
            explanation: `ANSWER: Make function return the grade or use reference parameter

DETAILED EXPLANATION:
This demonstrates a fundamental scope error where a variable is accessed outside its scope.

SCOPE ERROR ANALYSIS:
Current problematic code tries to access 'grade' in main(), but 'grade' is declared inside calculateGrade() function.

THE FUNDAMENTAL PROBLEM:
void calculateGrade() {
    double average = 85.5;
    char grade = 'B';        // Local variable - only exists in this function
}

int main() {
    calculateGrade();
    cout << "Grade: " << grade << endl;  // ERROR: 'grade' not in scope
    return 0;
}

SCOPE RULES:
- Variables declared inside a function are LOCAL to that function
- Local variables are destroyed when function ends
- Cannot access local variables from outside their function
- Each function has its own scope boundary

SOLUTION 1: RETURN THE GRADE
char calculateGrade() {        // Change return type from void to char
    double average = 85.5;
    char grade = 'B';
    return grade;              // Return the calculated grade
}

int main() {
    char grade = calculateGrade();  // Receive returned grade
    cout << "Grade: " << grade << endl;
    return 0;
}

SOLUTION 2: PASS BY REFERENCE
void calculateGrade(char& grade) {  // Reference parameter
    double average = 85.5;
    grade = 'B';                    // Modify caller's variable
}

int main() {
    char grade;                     // Declare variable in main
    calculateGrade(grade);          // Pass by reference
    cout << "Grade: " << grade << endl;
    return 0;
}

SOLUTION 3: PASS AVERAGE AND RETURN GRADE
char calculateGrade(double average) {
    char grade;
    if (average >= 90) grade = 'A';
    else if (average >= 80) grade = 'B';
    else if (average >= 70) grade = 'C';
    else if (average >= 60) grade = 'D';
    else grade = 'F';
    return grade;
}

int main() {
    double avg = 85.5;
    char grade = calculateGrade(avg);
    cout << "Grade: " << grade << endl;
    return 0;
}

SCOPE VISUALIZATION:
Global Scope
├── calculateGrade() Scope
│   ├── average (local)
│   └── grade (local) ← Dies when function ends
└── main() Scope
    └── Trying to access grade ← ERROR: Not visible here

VARIABLE LIFETIME:
- LOCAL VARIABLES: Created when function starts, destroyed when function ends
- PARAMETERS: Created when function called, destroyed when function ends
- GLOBAL VARIABLES: Created at program start, destroyed at program end

BEST PRACTICES:

1. PREFER RETURN VALUES:
   - Clear data flow (input → processing → output)
   - Functions become more reusable
   - Easier to test and debug

2. USE REFERENCES FOR MULTIPLE OUTPUTS:
   - When function needs to "return" multiple values
   - When modifying large objects to avoid copying

3. AVOID GLOBAL VARIABLES:
   - Hard to track data changes
   - Makes testing difficult
   - Can cause unexpected side effects

FUNCTION DESIGN PRINCIPLES:
- Functions should have clear inputs and outputs
- Minimize side effects
- Make data flow explicit
- Keep variable scope as narrow as possible

DEBUGGING SCOPE ERRORS:
1. Check where variables are declared
2. Verify variable is accessible from usage location
3. Consider variable lifetime
4. Use IDE features to highlight scope boundaries

COMMON SCOPE MISTAKES:
❌ Accessing local variables from outside function
❌ Returning references to local variables
❌ Assuming global access to local variables
❌ Variable shadowing in nested scopes`
        },
        {
            id: 'w3_q6',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 3 Examination - Recursive Function',
            question: 'Complete this recursive factorial function:',
            code: `#include <iostream>
using namespace std;

int factorial(int n) {
    // BASE CASE
    if (/* CONDITION */) {
        return /* VALUE */;
    }
    // RECURSIVE CASE
    return /* RECURSIVE CALL */;
}

int main() {
    int num = 5;
    cout << factorial(num) << endl;  // Should output 120
    return 0;
}`,
            answer: `int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}`,
            explanation: `COMPLETE CODE SOLUTION:
int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

DETAILED EXPLANATION:
This demonstrates recursion - a function calling itself to solve a problem by breaking it into smaller subproblems.

RECURSION COMPONENTS:

1. BASE CASE:
   if (n <= 1) return 1;
   - Stopping condition that prevents infinite recursion
   - Handles factorial(0) = 1 and factorial(1) = 1
   - Mathematical definition: 0! = 1, 1! = 1

2. RECURSIVE CASE:
   return n * factorial(n - 1);
   - Function calls itself with a smaller problem
   - Breaks down n! into n × (n-1)!
   - Each call reduces the problem size

FACTORIAL MATHEMATICAL DEFINITION:
- 0! = 1 (by definition)
- 1! = 1
- n! = n × (n-1)! for n > 1

EXECUTION TRACE (factorial(4)):

Call Stack Visualization:
factorial(4)
├── 4 * factorial(3)
    ├── 3 * factorial(2)
        ├── 2 * factorial(1)
            └── return 1         (base case)
        └── return 2 * 1 = 2
    └── return 3 * 2 = 6
└── return 4 * 6 = 24

STEP-BY-STEP EXECUTION:

1. factorial(4) called
   - n = 4, not <= 1, so call factorial(3)

2. factorial(3) called  
   - n = 3, not <= 1, so call factorial(2)

3. factorial(2) called
   - n = 2, not <= 1, so call factorial(1)

4. factorial(1) called
   - n = 1, which is <= 1, so return 1 (BASE CASE)

5. factorial(2) receives 1
   - return 2 * 1 = 2

6. factorial(3) receives 2
   - return 3 * 2 = 6

7. factorial(4) receives 6
   - return 4 * 6 = 24

RECURSION vs ITERATION:

RECURSIVE VERSION (Current):
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

ITERATIVE VERSION:
int factorial(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

RECURSION ADVANTAGES:
- Elegant and concise code
- Matches mathematical definition
- Easy to understand for recursive problems
- Natural for tree/graph traversal

RECURSION DISADVANTAGES:
- Function call overhead
- Stack space usage (can cause stack overflow)
- May be slower than iterative solutions
- Harder to debug for beginners

MEMORY USAGE:
Each recursive call creates new stack frame:
- factorial(4): 4 stack frames
- factorial(10): 10 stack frames  
- factorial(1000): 1000 stack frames (potential stack overflow)

EDGE CASES AND VALIDATION:
INPUT VALIDATION VERSION:
int factorial(int n) {
    if (n < 0) {
        cout << "Error: Factorial undefined for negative numbers!" << endl;
        return -1;  // Error indicator
    }
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

LARGE NUMBER HANDLING:
- int factorial: Limited to about 12! = 479,001,600
- long factorial: Limited to about 20!
- Use long long or arbitrary precision for larger factorials

RECURSION BEST PRACTICES:
1. Always have a base case
2. Ensure recursive calls move toward base case
3. Consider iterative alternatives for efficiency
4. Validate input parameters
5. Be aware of stack overflow risks

TESTING:
assert(factorial(0) == 1);    // Base case
assert(factorial(1) == 1);    // Base case  
assert(factorial(4) == 24);   // Normal case
assert(factorial(5) == 120);  // Normal case

COMMON RECURSION MISTAKES:
❌ Missing base case (infinite recursion)
❌ Base case never reached
❌ Incorrect recursive formula
❌ Not handling edge cases (negative input)`
        },
        {
            id: 'w3_q7',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 3 Examination - Pass by Value vs Reference',
            question: 'What will be the output?',
            code: `void modifyValue(int x) {
    x = x * 2;
}

void modifyReference(int& y) {
    y = y * 2;
}

int main() {
    int a = 5, b = 5;
    modifyValue(a);
    modifyReference(b);
    cout << a << " " << b << endl;
    return 0;
}`,
            options: [
                'a) 5 5',
                'b) 10 10',
                'c) 5 10',
                'd) 10 5'
            ],
            correct: 2,
            answer: 'c) 5 10',
            explanation: `ANSWER: c) 5 10

DETAILED EXPLANATION:
This tests the critical difference between pass-by-value and pass-by-reference parameter passing.

FUNCTION ANALYSIS:

FUNCTION 1 - PASS BY VALUE:
void modifyValue(int x) {
    x = x * 2;
}
- Parameter x is a COPY of the argument
- Changes to x affect only the local copy
- Original variable in main() remains unchanged

FUNCTION 2 - PASS BY REFERENCE:
void modifyReference(int& y) {
    y = y * 2;
}
- Parameter y is a REFERENCE (alias) to the argument
- Changes to y directly modify the original variable
- y and the original variable refer to the same memory location

EXECUTION TRACE:

INITIAL VALUES:
int a = 5, b = 5;

FIRST FUNCTION CALL: modifyValue(a)
1. Function receives COPY of a's value (5)
2. Local parameter x = 5
3. x = x * 2 → x = 10
4. Local x is modified, but original a remains 5
5. Function ends, local x is destroyed
6. a is still 5

SECOND FUNCTION CALL: modifyReference(b)
1. Function receives REFERENCE to b
2. Parameter y is an alias for b
3. y = y * 2 → b = b * 2 → b = 10
4. Original variable b is directly modified
5. Function ends, b retains value 10

FINAL OUTPUT:
cout << a << " " << b << endl;
Outputs: 5 10

MEMORY VISUALIZATION:

PASS BY VALUE:
main(): a[5]
call modifyValue(a):
  Creates copy: x[5] → x[10]
return: a[5] (unchanged)

PASS BY REFERENCE:
main(): b[5]
call modifyReference(b):
  y → b[5] → b[10] (same memory location)
return: b[10] (modified)

PARAMETER PASSING COMPARISON:

PASS BY VALUE:
- Creates a copy of the argument
- Function works with copy, not original
- Original variable protected from changes
- Uses more memory (copy created)
- Safer but cannot modify original

PASS BY REFERENCE:
- Creates an alias to the argument
- Function works directly with original
- Original variable can be modified
- Uses less memory (no copy)
- More efficient but can accidentally modify original

WHEN TO USE EACH:

USE PASS BY VALUE:
- When function should NOT modify original
- For small data types (int, double, char)
- When you want to protect original data
- For mathematical calculations

USE PASS BY REFERENCE:
- When function should modify original
- For large objects (avoid copying overhead)
- For swap functions
- When returning multiple values

WHY OTHER OPTIONS ARE WRONG:

a) 5 5 - INCORRECT
   - Would be true if both functions used pass-by-value
   - But modifyReference uses pass-by-reference

b) 10 10 - INCORRECT  
   - Would be true if both functions used pass-by-reference
   - But modifyValue uses pass-by-value

d) 10 5 - INCORRECT
   - Would reverse the expected behavior
   - This pattern doesn't match the function definitions

CONST REFERENCE ALTERNATIVE:
void displayValue(const int& x) {
    cout << x << endl;  // Can read but not modify
    // x = 100;  // ERROR: Cannot modify const reference
}
- Avoids copying (efficient)
- Prevents accidental modification (safe)
- Best for large read-only parameters

PRACTICAL APPLICATIONS:
- Swap functions: Must use pass-by-reference
- Input functions: Use pass-by-reference to modify variables
- Display functions: Use const reference for efficiency
- Mathematical functions: Use pass-by-value for safety

DEBUGGING TIP:
When unsure about parameter passing, trace through execution step-by-step, paying attention to whether the function modifies copies or originals.`
        },
        {
            id: 'w3_q8',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 3 Lab - Function Prototype',
            question: 'Find the error in this program structure:',
            code: `#include <iostream>
using namespace std;

int main() {
    int result = multiply(4, 5);  // Error!
    cout << result << endl;
    return 0;
}

int multiply(int a, int b) {
    return a * b;
}`,
            answer: 'Missing function prototype before main()',
            explanation: `ANSWER: Missing function prototype before main()

DETAILED EXPLANATION:
This demonstrates the importance of function declarations (prototypes) in C++ program structure.

ERROR ANALYSIS:
The code attempts to call multiply() before the function is defined, causing a compilation error.

THE FUNDAMENTAL PROBLEM:
int main() {
    int result = multiply(4, 5);  // ERROR: multiply not yet declared
    cout << result << endl;
    return 0;
}

int multiply(int a, int b) {      // Definition comes AFTER usage
    return a * b;
}

C++ COMPILATION RULES:
- C++ compiles from top to bottom
- Functions must be declared before they are used
- Compiler needs to know function signature before seeing calls
- Forward declaration (prototype) solves this problem

SOLUTION 1: ADD FUNCTION PROTOTYPE
#include <iostream>
using namespace std;

int multiply(int a, int b);   // Function prototype/declaration

int main() {
    int result = multiply(4, 5);  // Now compiler knows about multiply
    cout << result << endl;
    return 0;
}

int multiply(int a, int b) {      // Function definition
    return a * b;
}

SOLUTION 2: MOVE FUNCTION DEFINITION ABOVE MAIN
#include <iostream>
using namespace std;

int multiply(int a, int b) {      // Define before use
    return a * b;
}

int main() {
    int result = multiply(4, 5);  // multiply already defined above
    cout << result << endl;
    return 0;
}

FUNCTION PROTOTYPE SYNTAX:
returnType functionName(parameterTypes);
- Same as function definition but with semicolon
- Parameter names optional in prototype
- Must match definition exactly

PROTOTYPE EXAMPLES:
int multiply(int a, int b);           // With parameter names
int multiply(int, int);               // Without parameter names (valid)
double calculateArea(double radius);  // Single parameter
void printMessage();                  // No parameters
bool isValid(int min, int max, int value);  // Multiple parameters

WHY PROTOTYPES ARE NEEDED:

1. COMPILATION ORDER:
   - Compiler processes file sequentially
   - Needs function signature before usage
   - Prototype provides signature without full implementation

2. SEPARATE COMPILATION:
   - Functions can be in different files
   - Header files contain prototypes
   - Implementation in separate .cpp files

3. MUTUAL RECURSION:
   - Function A calls function B
   - Function B calls function A
   - Both need prototypes to resolve circular dependency

COMPILATION PROCESS:
1. Preprocessor: Handle #include, #define directives
2. Compiler: Check syntax, types, function signatures
3. Linker: Connect function calls to definitions

ERROR MESSAGES:
Without prototype, compiler shows:
"error: 'multiply' was not declared in this scope"
"error: use of undeclared identifier 'multiply'"

HEADER FILE PATTERN:
// math_functions.h
#ifndef MATH_FUNCTIONS_H
#define MATH_FUNCTIONS_H

int multiply(int a, int b);
double divide(double a, double b);

#endif

// math_functions.cpp
#include "math_functions.h"

int multiply(int a, int b) {
    return a * b;
}

double divide(double a, double b) {
    return a / b;
}

// main.cpp
#include <iostream>
#include "math_functions.h"
using namespace std;

int main() {
    int result = multiply(4, 5);
    cout << result << endl;
    return 0;
}

BEST PRACTICES:
1. Always use function prototypes for better organization
2. Group related prototypes in header files
3. Keep function definitions separate from main logic
4. Use meaningful parameter names in prototypes for documentation

PROTOTYPE vs DEFINITION:
PROTOTYPE (Declaration):
- Tells compiler function exists
- Specifies signature (name, parameters, return type)
- Ends with semicolon
- Can appear multiple times

DEFINITION (Implementation):
- Provides actual function body
- Contains executable code
- Ends with closing brace
- Can appear only once

COMMON MISTAKES:
❌ Calling function before declaration
❌ Prototype doesn't match definition
❌ Missing semicolon in prototype
❌ Forgetting to implement declared function`
        },
        {
            id: 'w3_q9',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 3 Examination - Validation Function',
            question: 'Complete this input validation function:',
            code: `#include <iostream>
using namespace std;

// Function should return true if number is in valid range
bool isValidGrade(double grade) {
    // WRITE VALIDATION LOGIC (0-100 range)
}

int main() {
    double grade;
    do {
        cout << "Enter grade (0-100): ";
        cin >> grade;
        if (!isValidGrade(grade)) {
            cout << "Invalid grade! Try again." << endl;
        }
    } while (!isValidGrade(grade));
    
    cout << "Valid grade entered: " << grade << endl;
    return 0;
}`,
            answer: `bool isValidGrade(double grade) {
    return (grade >= 0.0 && grade <= 100.0);
}`,
            explanation: `COMPLETE CODE SOLUTION:
bool isValidGrade(double grade) {
    return (grade >= 0.0 && grade <= 100.0);
}

DETAILED EXPLANATION:
This demonstrates input validation using boolean functions and logical operators.

VALIDATION LOGIC BREAKDOWN:

1. FUNCTION SIGNATURE:
   bool isValidGrade(double grade)
   - Returns bool: true if valid, false if invalid
   - Takes double parameter: supports decimal grades (85.5, 92.3)
   - Clear, descriptive function name

2. VALIDATION CONDITION:
   return (grade >= 0.0 && grade <= 100.0);
   - Checks TWO conditions simultaneously
   - grade >= 0.0: Ensures non-negative values
   - grade <= 100.0: Ensures not over maximum
   - Both must be true for valid grade

LOGICAL AND (&&) OPERATOR:
- Returns true only if BOTH conditions are true
- Returns false if ANY condition is false
- Short-circuit evaluation: if first is false, second isn't checked

VALIDATION SCENARIOS:

VALID GRADES (Returns true):
- isValidGrade(85.5) → 85.5 >= 0.0 ✓ AND 85.5 <= 100.0 ✓ → true
- isValidGrade(0.0) → 0.0 >= 0.0 ✓ AND 0.0 <= 100.0 ✓ → true  
- isValidGrade(100.0) → 100.0 >= 0.0 ✓ AND 100.0 <= 100.0 ✓ → true
- isValidGrade(67.8) → 67.8 >= 0.0 ✓ AND 67.8 <= 100.0 ✓ → true

INVALID GRADES (Returns false):
- isValidGrade(-5.0) → -5.0 >= 0.0 ✗ AND ... → false
- isValidGrade(105.0) → 105.0 >= 0.0 ✓ AND 105.0 <= 100.0 ✗ → false
- isValidGrade(-50.0) → -50.0 >= 0.0 ✗ AND ... → false

INTEGRATION WITH MAIN PROGRAM:

INPUT VALIDATION LOOP:
do {
    cout << "Enter grade (0-100): ";
    cin >> grade;
    if (!isValidGrade(grade)) {                    // ! means "not"
        cout << "Invalid grade! Try again." << endl;
    }
} while (!isValidGrade(grade));                    // Continue while invalid

EXECUTION FLOW:
1. Prompt user for grade
2. Read grade into variable
3. Call isValidGrade(grade)
4. If invalid (!isValidGrade returns true):
   - Display error message
   - Loop continues (while condition true)
5. If valid (isValidGrade returns true):
   - No error message
   - Loop exits (while condition false)

ALTERNATIVE VALIDATION IMPLEMENTATIONS:

VERSION 1 (Current - Single Expression):
bool isValidGrade(double grade) {
    return (grade >= 0.0 && grade <= 100.0);
}

VERSION 2 (Explicit If-Else):
bool isValidGrade(double grade) {
    if (grade >= 0.0 && grade <= 100.0) {
        return true;
    } else {
        return false;
    }
}

VERSION 3 (Multiple Conditions):
bool isValidGrade(double grade) {
    if (grade < 0.0) return false;
    if (grade > 100.0) return false;
    return true;
}

VERSION 4 (With Error Messages):
bool isValidGrade(double grade) {
    if (grade < 0.0) {
        cout << "Error: Grade cannot be negative!" << endl;
        return false;
    }
    if (grade > 100.0) {
        cout << "Error: Grade cannot exceed 100!" << endl;
        return false;
    }
    return true;
}

BOOLEAN FUNCTION BENEFITS:
1. Reusable validation logic
2. Clear function name documents purpose
3. Easy to test independently
4. Consistent validation across program
5. Separates validation from user interface

EXTENDED VALIDATION EXAMPLES:
bool isValidAge(int age) {
    return (age >= 0 && age <= 150);
}

bool isValidTemperature(double temp) {
    return (temp >= -273.15);  // Absolute zero
}

bool isValidPercentage(double percent) {
    return (percent >= 0.0 && percent <= 100.0);
}

TESTING THE FUNCTION:
int main() {
    // Unit tests
    assert(isValidGrade(85.5) == true);
    assert(isValidGrade(-5.0) == false);
    assert(isValidGrade(105.0) == false);
    assert(isValidGrade(0.0) == true);
    assert(isValidGrade(100.0) == true);
    
    cout << "All tests passed!" << endl;
    return 0;
}

INPUT VALIDATION BEST PRACTICES:
1. Use descriptive function names
2. Return boolean for yes/no questions
3. Consider edge cases (boundaries)
4. Provide clear error messages
5. Make validation functions reusable
6. Test validation thoroughly`
        },
        {
            id: 'w3_q10',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 3 Examination - Function Efficiency',
            question: 'Which version is more efficient for large arrays?',
            code: `// Version A
double calculateAverage(vector<double> numbers) {
    // Process numbers...
}

// Version B  
double calculateAverage(const vector<double>& numbers) {
    // Process numbers...
}`,
            options: [
                'a) Version A - simpler syntax',
                'b) Version B - avoids copying large vector',
                'c) Both same efficiency',
                'd) Depends on compiler optimization'
            ],
            correct: 1,
            answer: 'b) Version B - avoids copying large vector',
            explanation: `ANSWER: b) Version B - avoids copying large vector

DETAILED EXPLANATION:
This tests understanding of parameter passing efficiency, particularly with large data structures.

FUNCTION COMPARISON ANALYSIS:

VERSION A (Pass by Value):
double calculateAverage(vector<double> numbers) {
    // Process numbers...
}
- Parameter receives COPY of entire vector
- All vector elements duplicated in memory
- Expensive for large vectors

VERSION B (Pass by Const Reference):
double calculateAverage(const vector<double>& numbers) {
    // Process numbers...
}
- Parameter receives REFERENCE to original vector
- No copying of vector elements
- Much more efficient for large vectors

PERFORMANCE ANALYSIS:

MEMORY USAGE:
Version A: Original vector + Complete copy = 2× memory
Version B: Original vector only = 1× memory

COPY TIME:
Version A: O(n) time to copy all elements
Version B: O(1) time to pass reference

EXAMPLE WITH LARGE VECTOR:
vector<double> data(1000000);  // 1 million elements

Version A: calculateAverage(data)
- Copies 1,000,000 double values
- Uses ~8MB additional memory (8 bytes × 1M)
- Takes significant time to copy

Version B: calculateAverage(data)
- Passes reference (8 bytes on 64-bit system)
- No additional memory for vector data
- Instantaneous parameter passing

CONST REFERENCE BENEFITS:

1. EFFICIENCY:
   - No copying overhead
   - Constant time parameter passing
   - Minimal memory usage

2. SAFETY:
   - const prevents accidental modification
   - Read-only access to original data
   - Compiler enforces immutability

3. FLEXIBILITY:
   - Works with temporary objects
   - Accepts both lvalues and rvalues
   - No lifetime issues

CONST REFERENCE SYNTAX:
const vector<double>& numbers
- const: Cannot modify the vector
- vector<double>: Type of the container
- &: Reference (alias) to original
- numbers: Parameter name

WHAT CONST PREVENTS:
double calculateAverage(const vector<double>& numbers) {
    numbers[0] = 100.0;        // ERROR: Cannot modify const
    numbers.push_back(50.0);   // ERROR: Cannot modify const
    numbers.clear();           // ERROR: Cannot modify const
    
    double sum = 0.0;
    for (double num : numbers) {  // OK: Reading is allowed
        sum += num;
    }
    return sum / numbers.size();  // OK: Reading size is allowed
}

WHY OTHER OPTIONS ARE WRONG:

a) Version A - simpler syntax - INCORRECT
   - Syntax simplicity doesn't justify performance cost
   - Efficiency is more important than slight syntax difference
   - Professional code prioritizes performance

c) Both same efficiency - INCORRECT
   - Copying 1 million elements vs. passing 8-byte reference
   - Fundamental difference in memory and time complexity
   - Measurable performance difference

d) Depends on compiler optimization - INCORRECT
   - Compiler cannot optimize away necessary copy semantics
   - Pass-by-value mandates copying behavior
   - Optimization cannot change fundamental algorithm complexity

PARAMETER PASSING GUIDELINES:

USE PASS BY VALUE:
- Small primitive types (int, double, char)
- When function needs to modify copy
- When object is small and copy is cheap

USE CONST REFERENCE:
- Large objects (vectors, strings, custom classes)
- When function doesn't modify parameter
- When efficiency is important

USE NON-CONST REFERENCE:
- When function needs to modify original
- For "output" parameters
- For swap operations

USE POINTERS:
- When parameter can be null
- For C-style interfaces
- When working with arrays

REAL-WORLD IMPACT:
// Processing large dataset
vector<double> dataset(10000000);  // 10 million points

// Version A: ~320MB copied, several seconds
double avg1 = calculateAverage(dataset);

// Version B: ~8 bytes passed, microseconds
double avg2 = calculateAverage(dataset);

BEST PRACTICES:
1. Use const reference for large read-only parameters
2. Use pass-by-value only for small types
3. Measure performance for critical code paths
4. Consider move semantics for temporary objects
5. Document parameter passing choices

MODERN C++ ALTERNATIVES:
// C++11 move semantics
double calculateAverage(vector<double>&& numbers);  // For temporaries

// C++20 ranges
double calculateAverage(std::ranges::range auto const& numbers);`
        }
    ]
};

// Export for use in main application
window.week3Data = week3Data;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = week3Data;
}
