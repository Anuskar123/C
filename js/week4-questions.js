// Week 4: Arrays - Extracted from your PDF and lab exercises
const week4Data = {
    title: 'Week 4: Arrays (1D & 2D)',
    description: 'Master array declaration, initialization, processing, bounds checking, and 2D array operations from your course materials.',
    
    // CHEAT SHEET FROM EXTRACTED PDF CONTENT
    cheatSheet: {
        title: "📚 Week 4 Arrays Reference - From CSY2087_C++_Week4v1.pdf",
        sections: [
            {
                title: "🔧 Array Basics",
                content: `
DECLARATION:
int tests[5];           // Creates array of 5 integers
double scores[SIZE];    // Using constant for size

INITIALIZATION:
int numbers[5] = {79, 82, 91, 77, 84};
int partial[7] = {1, 2, 4, 8};  // Rest become 0
int implicit[] = {12, 17, 15, 11};  // Size = 4

ACCESSING ELEMENTS:
tests[0] = 79;          // First element
tests[4] = 85;          // Last element (SIZE-1)
cout << tests[i];       // Using variable subscript`
            },
            {
                title: "🔄 Array Processing Patterns",
                content: `
LOOP THROUGH ARRAY:
for (int i = 0; i < SIZE; i++) {
    cout << array[i] << " ";
}

FIND TOTAL/AVERAGE:
int sum = 0;
for (int i = 0; i < SIZE; i++) {
    sum += array[i];
}
double average = sum / SIZE;

FIND HIGHEST:
int highest = array[0];
for (int i = 1; i < SIZE; i++) {
    if (array[i] > highest)
        highest = array[i];
}`
            },
            {
                title: "🔀 Arrays as Function Parameters",
                content: `
FUNCTION PROTOTYPE:
void showArray(int [], int);     // Array + size
void modifyArray(double arr[], int size);

FUNCTION CALL:
showArray(numbers, SIZE);        // Pass array name

FUNCTION DEFINITION:
void showArray(int nums[], int size) {
    for (int i = 0; i < size; i++)
        cout << nums[i] << " ";
}

NOTE: Arrays passed by reference automatically!`
            },
            {
                title: "📊 2D Arrays",
                content: `
DECLARATION:
const int ROWS = 3, COLS = 4;
int table[ROWS][COLS];

INITIALIZATION:
int scores[2][3] = {{84, 78, 92}, {91, 87, 95}};

ACCESSING:
table[1][2] = 100;      // Row 1, Column 2

NESTED LOOPS:
for (int row = 0; row < ROWS; row++) {
    for (int col = 0; col < COLS; col++) {
        cout << table[row][col] << " ";
    }
    cout << endl;
}`
            },
            {
                title: "⚠️ Common Array Pitfalls",
                content: `
❌ No bounds checking: array[10] in size 5 array
❌ Off-by-one errors: for (i = 0; i <= SIZE; i++)
❌ Uninitialized elements contain garbage
❌ Cannot assign arrays: newArray = oldArray;
❌ Cannot cout entire array (except char arrays)

✅ Always check bounds in loops
✅ Initialize arrays when declared
✅ Use const for array sizes
✅ Pass size parameter with array`
            }
        ]
    },
    
    questions: [
        {
            id: 'w4_q1',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            source: 'Week 4 PDF - CSY2087_C++_Week4v1.pdf Page 24',
            question: 'What will be stored in the remaining elements of this partially initialized array?',
            code: `int numbers[7] = {1, 2, 4, 8};`,
            options: [
                'a) Garbage values',
                'b) Zero (0)',
                'c) -1',
                'd) Compilation error'
            ],
            correct: 1,
            answer: 'b) Zero (0)',
            explanation: `ANSWER: b) Zero (0)

DETAILED EXPLANATION:
This tests understanding of C++ array initialization behavior for partially initialized arrays.

ARRAY INITIALIZATION ANALYSIS:
int numbers[7] = {1, 2, 4, 8};

INITIALIZATION BREAKDOWN:
- Array size: 7 elements (indices 0-6)
- Explicit values provided: 4 values {1, 2, 4, 8}
- Missing values: 3 values (positions 4, 5, 6)

MEMORY LAYOUT:
Index:  0  1  2  3  4  5  6
Value:  1  2  4  8  0  0  0
        ↑           ↑
    Explicit    Auto-filled

C++ INITIALIZATION RULES:
1. When fewer initializers than array size are provided
2. Remaining elements are automatically set to zero
3. This applies to all numeric types (int, double, float)
4. For char arrays, remaining elements become null character ('\\0')

COMPLETE EQUIVALENT:
int numbers[7] = {1, 2, 4, 8, 0, 0, 0};  // Explicit zeros
// Exactly same as:
int numbers[7] = {1, 2, 4, 8};            // Automatic zeros

DIFFERENT INITIALIZATION SCENARIOS:

SCENARIO 1 (Partial Initialization):
int arr[5] = {10, 20};
Result: {10, 20, 0, 0, 0}

SCENARIO 2 (Single Element):
int arr[4] = {100};
Result: {100, 0, 0, 0}

SCENARIO 3 (Empty Braces):
int arr[3] = {};
Result: {0, 0, 0}

SCENARIO 4 (Complete Initialization):
int arr[3] = {1, 2, 3};
Result: {1, 2, 3}

WHY OTHER OPTIONS ARE WRONG:

a) Garbage values - INCORRECT
   - Uninitialized arrays contain garbage values
   - But partially initialized arrays have defined behavior
   - Remaining elements are guaranteed to be zero

c) -1 - INCORRECT
   - No special meaning for -1 in array initialization
   - C++ standard specifies zero-initialization
   - -1 would only appear if explicitly set

d) Compilation error - INCORRECT
   - Partial initialization is perfectly legal in C++
   - Compiler accepts fewer initializers than array size
   - This is a common and useful pattern

PRACTICAL APPLICATIONS:

ARRAY CLEARING:
int data[100] = {};  // All elements become 0

SPARSE INITIALIZATION:
double matrix[10] = {1.0, 2.0};  // First two set, rest are 0.0

SAFETY PATTERN:
char buffer[256] = {};  // Initialize string buffer to empty

DATA TYPE VARIATIONS:
int integers[5] = {1, 2};          // → {1, 2, 0, 0, 0}
double decimals[3] = {3.14};       // → {3.14, 0.0, 0.0}
char characters[4] = {'A', 'B'};   // → {'A', 'B', '\\0', '\\0'}
bool flags[6] = {true};            // → {true, false, false, false, false, false}

VERIFICATION CODE:
#include <iostream>
using namespace std;

int main() {
    int numbers[7] = {1, 2, 4, 8};
    
    cout << "Array contents: ";
    for (int i = 0; i < 7; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    // Output: 1 2 4 8 0 0 0
    
    return 0;
}

BEST PRACTICES:
1. Use partial initialization for default values
2. Initialize arrays to prevent garbage values
3. Consider using {} for zero-initialization
4. Document initialization patterns in comments`
        },
        {
            id: 'w4_q2',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 4 Lab Exercise - Array Processing',
            question: 'Find the bounds checking error in this code:',
            code: `const int SIZE = 5;
int tests[SIZE] = {87, 75, 98, 100, 82};

for (int i = 0; i <= SIZE; i++) {  // Error!
    cout << tests[i] << " ";
}`,
            answer: 'Loop condition should be i < SIZE, not i <= SIZE',
            explanation: `ANSWER: Loop condition should be i < SIZE, not i <= SIZE

DETAILED EXPLANATION:
This demonstrates the most common array bounds error - off-by-one mistakes in loop conditions.

ERROR ANALYSIS:
const int SIZE = 5;
int tests[SIZE] = {87, 75, 98, 100, 82};

for (int i = 0; i <= SIZE; i++) {  // PROBLEMATIC LINE
    cout << tests[i] << " ";
}

THE FUNDAMENTAL PROBLEM:
Array indices range from 0 to SIZE-1, but loop runs from 0 to SIZE.

ARRAY MEMORY LAYOUT:
Index:     0   1   2   3   4   ???
Value:    87  75  98 100  82   ???
          ↑                    ↑
       Valid               Out of bounds

LOOP EXECUTION TRACE:
- i = 0: Access tests[0] = 87 ✓ Valid
- i = 1: Access tests[1] = 75 ✓ Valid  
- i = 2: Access tests[2] = 98 ✓ Valid
- i = 3: Access tests[3] = 100 ✓ Valid
- i = 4: Access tests[4] = 82 ✓ Valid
- i = 5: Access tests[5] = ??? ❌ OUT OF BOUNDS!

CONSEQUENCES OF BOUNDS VIOLATION:
1. UNDEFINED BEHAVIOR:
   - Accessing memory that doesn't belong to the array
   - Could read garbage values
   - Could read values from other variables
   - Could cause segmentation fault/access violation

2. POTENTIAL RUNTIME ERRORS:
   - Program may crash immediately
   - Program may appear to work but produce wrong results
   - Memory corruption possibilities
   - Security vulnerabilities

CORRECT SOLUTION:
for (int i = 0; i < SIZE; i++) {  // i < SIZE, not i <= SIZE
    cout << tests[i] << " ";
}

LOOP BOUNDS PATTERNS:

CORRECT PATTERNS:
for (int i = 0; i < SIZE; i++)        // Standard forward iteration
for (int i = SIZE-1; i >= 0; i--)     // Reverse iteration
for (int i = 0; i != SIZE; i++)       // Alternative forward

INCORRECT PATTERNS:
for (int i = 0; i <= SIZE; i++)       // Off-by-one error
for (int i = 1; i <= SIZE; i++)       // Skips first, accesses invalid
for (int i = 0; i < SIZE+1; i++)      // Same as i <= SIZE

ARRAY INDEX MATHEMATICS:
Array size n → Valid indices: 0, 1, 2, ..., n-1
- Lowest valid index: 0
- Highest valid index: n-1
- Total valid indices: n
- Invalid indices: n, n+1, n+2, ...

DEBUGGING ARRAY BOUNDS:
1. COMPILER WARNINGS:
   - Enable all warnings (-Wall in GCC)
   - Some compilers detect obvious bounds errors

2. RUNTIME CHECKING:
   - Use debug builds with bounds checking
   - Tools like Valgrind detect memory errors
   - AddressSanitizer catches bounds violations

3. DEFENSIVE PROGRAMMING:
   - Always use < instead of <= for array loops
   - Double-check loop conditions
   - Use range-based for loops when possible

SAFE ARRAY ITERATION ALTERNATIVES:

RANGE-BASED FOR LOOP (C++11):
for (int value : tests) {
    cout << value << " ";
}
// Automatically handles bounds

ITERATOR-BASED:
for (auto it = begin(tests); it != end(tests); ++it) {
    cout << *it << " ";
}

BOUNDS-CHECKED ACCESS:
for (int i = 0; i < SIZE; i++) {
    if (i >= 0 && i < SIZE) {  // Extra safety check
        cout << tests[i] << " ";
    }
}

COMMON BOUNDS ERROR VARIATIONS:
1. Off-by-one in condition: i <= SIZE
2. Wrong starting point: i = 1; i <= SIZE
3. Wrong array size: i < SIZE+1
4. Negative indices: i = -1; i < SIZE
5. Uninitialized loop variable

REAL-WORLD CONSEQUENCES:
Buffer overflow attacks often exploit bounds errors:
char buffer[10];
for (int i = 0; i <= 15; i++) {  // Writes beyond buffer
    buffer[i] = 'A';  // Potential security vulnerability
}

PREVENTION STRATEGIES:
1. Always use i < SIZE for forward loops
2. Use range-based loops when possible
3. Enable compiler warnings
4. Use static analysis tools
5. Test with boundary values
6. Consider using std::array or std::vector with bounds checking`
        },
        {
            id: 'w4_q3',
            type: 'Complete Code',
            difficulty: '⭐⭐ Medium',
            source: 'Week 4 Lab Exercise - Largest/Smallest Values',
            question: 'Complete this program to find largest and smallest values in array:',
            code: `#include <iostream>
using namespace std;
int main() {
    const int SIZE = 5;
    int numbers[SIZE] = {23, 67, 12, 89, 45};
    int largest, smallest;
    
    // INITIALIZE largest AND smallest
    
    // WRITE LOOP TO FIND LARGEST AND SMALLEST
    
    cout << "Largest: " << largest << endl;
    cout << "Smallest: " << smallest << endl;
    return 0;
}`,
            answer: `largest = numbers[0];
smallest = numbers[0];

for (int i = 1; i < SIZE; i++) {
    if (numbers[i] > largest)
        largest = numbers[i];
    if (numbers[i] < smallest)
        smallest = numbers[i];
}`,
            explanation: `COMPLETE CODE SOLUTION:
largest = numbers[0];
smallest = numbers[0];

for (int i = 1; i < SIZE; i++) {
    if (numbers[i] > largest)
        largest = numbers[i];
    if (numbers[i] < smallest)
        smallest = numbers[i];
}

DETAILED EXPLANATION:
This demonstrates the classic algorithm for finding extreme values (minimum and maximum) in an array.

ALGORITHM BREAKDOWN:

1. INITIALIZATION STRATEGY:
   largest = numbers[0];
   smallest = numbers[0];
   - Initialize both to the FIRST element
   - Ensures we have valid starting values
   - Avoids assumption about data range

2. LOOP DESIGN:
   for (int i = 1; i < SIZE; i++)
   - Start from index 1 (not 0) since we already used numbers[0]
   - Continue until end of array (i < SIZE)
   - Process each remaining element

3. COMPARISON LOGIC:
   if (numbers[i] > largest)
       largest = numbers[i];
   - Update largest when we find a bigger value
   - Simple greater-than comparison
   
   if (numbers[i] < smallest)
       smallest = numbers[i];
   - Update smallest when we find a smaller value
   - Simple less-than comparison

EXECUTION TRACE (numbers = {23, 67, 12, 89, 45}):

INITIALIZATION:
largest = numbers[0] = 23
smallest = numbers[0] = 23

ITERATION 1 (i = 1, numbers[1] = 67):
- Is 67 > 23? YES → largest = 67
- Is 67 < 23? NO → smallest remains 23

ITERATION 2 (i = 2, numbers[2] = 12):
- Is 12 > 67? NO → largest remains 67
- Is 12 < 23? YES → smallest = 12

ITERATION 3 (i = 3, numbers[3] = 89):
- Is 89 > 67? YES → largest = 89
- Is 89 < 12? NO → smallest remains 12

ITERATION 4 (i = 4, numbers[4] = 45):
- Is 45 > 89? NO → largest remains 89
- Is 45 < 12? NO → smallest remains 12

FINAL RESULT:
largest = 89, smallest = 12

WHY INITIALIZE TO FIRST ELEMENT:

CORRECT APPROACH:
largest = numbers[0];
- Guarantees largest will be one of the actual array values
- Works for any data range (positive, negative, mixed)
- No assumptions about data characteristics

INCORRECT APPROACHES:
largest = 0;  // ❌ Fails if all numbers are negative
largest = -999;  // ❌ Fails if actual minimum is lower
largest = INT_MIN;  // ✓ Works but less intuitive

ALGORITHM VARIATIONS:

VERSION 1 (Current - Separate If Statements):
for (int i = 1; i < SIZE; i++) {
    if (numbers[i] > largest)
        largest = numbers[i];
    if (numbers[i] < smallest)
        smallest = numbers[i];
}

VERSION 2 (Else-If Chain):
for (int i = 1; i < SIZE; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    } else if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
// ❌ Problem: Won't update smallest if element is larger than current largest

VERSION 3 (Using Standard Library):
#include <algorithm>
auto minmax = std::minmax_element(numbers, numbers + SIZE);
smallest = *minmax.first;
largest = *minmax.second;

EDGE CASES:

SINGLE ELEMENT ARRAY:
int arr[1] = {42};
Result: largest = 42, smallest = 42

ALL SAME VALUES:
int arr[4] = {5, 5, 5, 5};
Result: largest = 5, smallest = 5

NEGATIVE NUMBERS:
int arr[3] = {-10, -5, -20};
Result: largest = -5, smallest = -20

MIXED POSITIVE/NEGATIVE:
int arr[4] = {-3, 7, -1, 2};
Result: largest = 7, smallest = -3

ALGORITHM EFFICIENCY:
- Time Complexity: O(n) - single pass through array
- Space Complexity: O(1) - only two extra variables
- Comparisons: 2(n-1) = 2n-2 comparisons
- Optimal: Cannot find min/max in fewer than n-1 comparisons

DEFENSIVE PROGRAMMING ENHANCEMENTS:

WITH SIZE VALIDATION:
if (SIZE <= 0) {
    cout << "Error: Array is empty!" << endl;
    return 1;
}

WITH INDEX BOUNDS CHECKING:
for (int i = 1; i < SIZE && i >= 0; i++) {
    // Extra safety check
}

FUNCTION-BASED APPROACH:
void findMinMax(int arr[], int size, int& min, int& max) {
    if (size <= 0) return;
    
    min = max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
}

TESTING THE ALGORITHM:
// Test with known values
int test1[] = {3, 1, 4, 1, 5};
// Expected: largest = 5, smallest = 1

int test2[] = {-2, -8, -3, -1};
// Expected: largest = -1, smallest = -8

COMMON MISTAKES:
❌ Starting loop from i = 0 (wastes one comparison)
❌ Initializing to 0 or arbitrary values
❌ Using wrong comparison operators
❌ Forgetting to handle empty arrays
❌ Not initializing variables before loop`
        },
        {
            id: 'w4_q4',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 4 PDF - 2D Arrays Page 55',
            question: 'What is the output of this 2D array sum calculation?',
            code: `const int ROWS = 2, COLS = 3;
int numbers[ROWS][COLS] = {{2, 7, 9}, {6, 1, 8}};
int total = 0;

for (int row = 0; row < ROWS; row++) {
    for (int col = 0; col < COLS; col++) {
        total += numbers[row][col];
    }
}
cout << total;`,
            options: [
                'a) 33',
                'b) 15',
                'c) 18',
                'd) 24'
            ],
            correct: 0,
            answer: 'a) 33',
            explanation: `ANSWER: a) 33

DETAILED EXPLANATION:
This tests understanding of 2D array processing using nested loops and element access.

2D ARRAY ANALYSIS:
const int ROWS = 2, COLS = 3;
int numbers[ROWS][COLS] = {{2, 7, 9}, {6, 1, 8}};

ARRAY STRUCTURE VISUALIZATION:
       Col 0  Col 1  Col 2
Row 0:   2     7     9
Row 1:   6     1     8

MEMORY LAYOUT (Row-Major Order):
Index: [0][0] [0][1] [0][2] [1][0] [1][1] [1][2]
Value:   2     7     9     6     1     8

NESTED LOOP EXECUTION TRACE:

OUTER LOOP CONTROL (Rows):
for (int row = 0; row < ROWS; row++)
- Controls which row we're processing
- row values: 0, 1

INNER LOOP CONTROL (Columns):
for (int col = 0; col < COLS; col++)
- Controls which column within current row
- col values: 0, 1, 2 (for each row)

STEP-BY-STEP EXECUTION:

INITIALIZATION:
int total = 0;

ROW 0 PROCESSING:
row = 0, col = 0: total += numbers[0][0] → total = 0 + 2 = 2
row = 0, col = 1: total += numbers[0][1] → total = 2 + 7 = 9
row = 0, col = 2: total += numbers[0][2] → total = 9 + 9 = 18

ROW 1 PROCESSING:
row = 1, col = 0: total += numbers[1][0] → total = 18 + 6 = 24
row = 1, col = 1: total += numbers[1][1] → total = 24 + 1 = 25
row = 1, col = 2: total += numbers[1][2] → total = 25 + 8 = 33

FINAL RESULT:
total = 33

VERIFICATION:
Manual sum: 2 + 7 + 9 + 6 + 1 + 8 = 33 ✓

NESTED LOOP PATTERN ANALYSIS:
- Outer loop runs 2 times (ROWS = 2)
- Inner loop runs 3 times for each outer iteration (COLS = 3)
- Total iterations: 2 × 3 = 6 element accesses
- Each element accessed exactly once

2D ARRAY ACCESS PATTERN:
numbers[row][col]
- First index [row]: Selects which row
- Second index [col]: Selects which column within that row
- Both indices start from 0

ITERATION ORDER VISUALIZATION:
Access order: [0][0] → [0][1] → [0][2] → [1][0] → [1][1] → [1][2]
Values:         2   →   7   →   9   →   6   →   1   →   8

WHY OTHER OPTIONS ARE WRONG:

b) 15 - INCORRECT
   - This would be sum of first row only: 2 + 7 + 9 = 18 (not even this)
   - Or sum of first two elements: 2 + 7 = 9 (still not 15)
   - No logical calculation gives 15

c) 18 - INCORRECT
   - This is sum of first row only: 2 + 7 + 9 = 18
   - Code processes both rows, not just first row
   - Missing second row: 6 + 1 + 8 = 15

d) 24 - INCORRECT
   - This might be sum after 4 elements: 2 + 7 + 9 + 6 = 24
   - But loop continues to process remaining elements
   - Missing last two elements: 1 + 8 = 9

2D ARRAY PROCESSING PATTERNS:

ROW-WISE PROCESSING (Current):
for (int row = 0; row < ROWS; row++) {
    for (int col = 0; col < COLS; col++) {
        // Process numbers[row][col]
    }
}

COLUMN-WISE PROCESSING:
for (int col = 0; col < COLS; col++) {
    for (int row = 0; row < ROWS; row++) {
        // Process numbers[row][col]
    }
}

ROW TOTALS:
for (int row = 0; row < ROWS; row++) {
    int rowSum = 0;
    for (int col = 0; col < COLS; col++) {
        rowSum += numbers[row][col];
    }
    cout << "Row " << row << " sum: " << rowSum << endl;
}

COLUMN TOTALS:
for (int col = 0; col < COLS; col++) {
    int colSum = 0;
    for (int row = 0; row < ROWS; row++) {
        colSum += numbers[row][col];
    }
    cout << "Column " << col << " sum: " << colSum << endl;
}

COMMON 2D ARRAY APPLICATIONS:
1. Matrix operations (addition, multiplication)
2. Game boards (chess, tic-tac-toe)
3. Image processing (pixel arrays)
4. Data tables (rows = records, cols = fields)
5. Mathematical grids and graphs

BOUNDS CHECKING IMPORTANCE:
for (int row = 0; row < ROWS; row++) {  // Must use < not <=
    for (int col = 0; col < COLS; col++) {  // Must use < not <=
        // Valid indices: row [0,1], col [0,1,2]
    }
}

2D ARRAY MEMORY CONCEPTS:
- Stored as contiguous memory blocks
- Row-major order in C++
- numbers[1][0] comes after numbers[0][2]
- Total memory: ROWS × COLS × sizeof(int)

DEBUGGING 2D ARRAYS:
// Print array contents for verification
for (int row = 0; row < ROWS; row++) {
    for (int col = 0; col < COLS; col++) {
        cout << numbers[row][col] << " ";
    }
    cout << endl;
}

KEY LEARNING POINTS:
1. Nested loops for 2D array processing
2. Proper index bounds (< not <=)
3. Row-major access pattern
4. Accumulator pattern for summation
5. Array initialization with nested braces`
        },
        {
            id: 'w4_q5',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 4 Lab Exercise - 2D Array Operations',
            question: 'Complete the getRowTotal function from your lab exercise:',
            code: `#include <iostream>
using namespace std;

const int COLS = 4;

// Function should return total of specified row
double getRowTotal(double arr[][COLS], int numRows, int row) {
    // COMPLETE THIS FUNCTION
}

int main() {
    const int ROWS = 3;
    double testArray[ROWS][COLS] = {
        {12.5, 8.7, 15.2, 9.8},
        {7.3, 11.1, 6.9, 14.5},
        {10.2, 13.4, 8.6, 12.1}
    };
    
    cout << "Row 1 total: " << getRowTotal(testArray, ROWS, 1) << endl;
    return 0;
}`,
            answer: `double total = 0.0;
for (int col = 0; col < COLS; col++) {
    total += arr[row][col];
}
return total;`,
            explanation: `COMPLETE CODE SOLUTION:
double total = 0.0;
for (int col = 0; col < COLS; col++) {
    total += arr[row][col];
}
return total;

DETAILED EXPLANATION:
This demonstrates 2D array parameter passing and selective row processing.

FUNCTION ANALYSIS:
double getRowTotal(double arr[][COLS], int numRows, int row)

PARAMETER BREAKDOWN:
1. double arr[][COLS]: 2D array parameter
   - First dimension size can be omitted
   - Second dimension (COLS) must be specified
   - Compiler needs column count for address calculation

2. int numRows: Total number of rows in array
   - Used for validation (though not in this simple version)
   - Good practice for bounds checking

3. int row: Specific row to process
   - Zero-based index of target row
   - Must be valid (0 <= row < numRows)

ALGORITHM BREAKDOWN:

1. ACCUMULATOR INITIALIZATION:
   double total = 0.0;
   - Start with zero sum
   - Use double for decimal precision
   - Matches return type and array element type

2. COLUMN ITERATION:
   for (int col = 0; col < COLS; col++)
   - Loop through all columns in the specified row
   - col ranges from 0 to COLS-1
   - Fixed row, varying column

3. ELEMENT ACCUMULATION:
   total += arr[row][col];
   - Add each element in the row to running total
   - arr[row][col] accesses element at (row, col)
   - Accumulator pattern for summation

4. RETURN RESULT:
   return total;
   - Return computed sum to caller
   - Type matches function return type (double)

EXECUTION TRACE (getRowTotal(testArray, ROWS, 1)):

GIVEN ARRAY:
testArray[ROWS][COLS] = {
    {12.5, 8.7, 15.2, 9.8},    // Row 0
    {7.3, 11.1, 6.9, 14.5},    // Row 1 ← Target row
    {10.2, 13.4, 8.6, 12.1}    // Row 2
};

FUNCTION CALL: getRowTotal(testArray, 3, 1)
- arr points to testArray
- numRows = 3
- row = 1 (second row, zero-indexed)

STEP-BY-STEP EXECUTION:
1. total = 0.0
2. col = 0: total += arr[1][0] → total = 0.0 + 7.3 = 7.3
3. col = 1: total += arr[1][1] → total = 7.3 + 11.1 = 18.4
4. col = 2: total += arr[1][2] → total = 18.4 + 6.9 = 25.3
5. col = 3: total += arr[1][3] → total = 25.3 + 14.5 = 39.8
6. return 39.8

VERIFICATION:
Manual sum of row 1: 7.3 + 11.1 + 6.9 + 14.5 = 39.8 ✓

2D ARRAY PARAMETER PASSING:

SYNTAX VARIATIONS:
// All equivalent for 2D array parameters:
double getRowTotal(double arr[][COLS], int numRows, int row)
double getRowTotal(double arr[][4], int numRows, int row)
double getRowTotal(double (*arr)[COLS], int numRows, int row)

WHY SECOND DIMENSION REQUIRED:
- Compiler needs to calculate memory offsets
- arr[row][col] = *(arr + row*COLS + col)
- Without COLS, offset calculation impossible

MEMORY ADDRESS CALCULATION:
Element arr[1][2] address:
base_address + (1 * COLS + 2) * sizeof(double)
base_address + (1 * 4 + 2) * 8 = base_address + 48

ENHANCED VERSION WITH VALIDATION:
double getRowTotal(double arr[][COLS], int numRows, int row) {
    // Bounds checking
    if (row < 0 || row >= numRows) {
        cout << "Error: Invalid row index!" << endl;
        return 0.0;
    }
    
    double total = 0.0;
    for (int col = 0; col < COLS; col++) {
        total += arr[row][col];
    }
    return total;
}

RELATED FUNCTIONS:

GET COLUMN TOTAL:
double getColTotal(double arr[][COLS], int numRows, int col) {
    double total = 0.0;
    for (int row = 0; row < numRows; row++) {
        total += arr[row][col];
    }
    return total;
}

GET ENTIRE ARRAY TOTAL:
double getArrayTotal(double arr[][COLS], int numRows) {
    double total = 0.0;
    for (int row = 0; row < numRows; row++) {
        for (int col = 0; col < COLS; col++) {
            total += arr[row][col];
        }
    }
    return total;
}

USAGE EXAMPLES:
int main() {
    const int ROWS = 3;
    double testArray[ROWS][COLS] = { /* ... */ };
    
    // Get totals for all rows
    for (int i = 0; i < ROWS; i++) {
        cout << "Row " << i << " total: " 
             << getRowTotal(testArray, ROWS, i) << endl;
    }
    
    return 0;
}

PRACTICAL APPLICATIONS:
1. Grade calculations (student totals)
2. Financial reports (row/column summaries)
3. Scientific data analysis
4. Game score tracking
5. Statistical computations

COMMON MISTAKES:
❌ Omitting second dimension in parameter
❌ Using wrong loop bounds
❌ Not initializing accumulator
❌ Accessing invalid row indices
❌ Mixing up row and column parameters

TESTING THE FUNCTION:
// Unit tests
assert(getRowTotal(testArray, ROWS, 0) == 46.2);  // Row 0 sum
assert(getRowTotal(testArray, ROWS, 1) == 39.8);  // Row 1 sum  
assert(getRowTotal(testArray, ROWS, 2) == 44.3);  // Row 2 sum`
        },
        {
            id: 'w4_q6',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 4 Sample Program - Pr7-16 Array Modification',
            question: 'Fix this array doubling function that should modify the original array:',
            code: `void doubleArray(int nums, int size) {  // Error 1
    for (int i = 0; i <= size; i++) {    // Error 2
        nums[i] *= 2;
    }
}

int main() {
    int values[5] = {1, 2, 3, 4, 5};
    doubleArray(values, 5);
    // Should print: 2 4 6 8 10
    return 0;
}`,
            answer: `CORRECTED CODE:
void doubleArray(int nums[], int size) {  // Fixed: Added []
    for (int i = 0; i < size; i++) {     // Fixed: Changed <= to <
        nums[i] *= 2;
    }
}`,
            explanation: `🔍 ERROR ANALYSIS & FIXES:

ERROR 1 - Incorrect Array Parameter:
❌ WRONG: void doubleArray(int nums, int size)
✅ CORRECT: void doubleArray(int nums[], int size)

PROBLEM: 'int nums' declares a single integer, not an array parameter.
SOLUTION: Use 'int nums[]' or 'int *nums' to properly receive array.

ERROR 2 - Off-by-One Loop Boundary:
❌ WRONG: for (int i = 0; i <= size; i++)
✅ CORRECT: for (int i = 0; i < size; i++)

PROBLEM: With size=5, loop runs i=0,1,2,3,4,5 → tries to access nums[5]
CONSEQUENCE: Array bounds violation! nums[5] doesn't exist in size-5 array.
SOLUTION: Use i < size to stop at valid indices 0,1,2,3,4.

📋 STEP-BY-STEP TRACE (After Fixes):
Initial: values = {1, 2, 3, 4, 5}
i=0: nums[0] *= 2 → values[0] = 2
i=1: nums[1] *= 2 → values[1] = 4  
i=2: nums[2] *= 2 → values[2] = 6
i=3: nums[3] *= 2 → values[3] = 8
i=4: nums[4] *= 2 → values[4] = 10
Final: values = {2, 4, 6, 8, 10} ✅

🎯 KEY ARRAY CONCEPTS:
• Arrays passed to functions decay to pointers
• Always use [] or * syntax for array parameters
• Valid indices for size-n array are 0 to n-1
• Off-by-one errors are extremely common with arrays!`
        },
        {
            id: 'w4_q7',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 4 Lab Exercise - Parallel Arrays',
            question: 'In this parallel array example, what does studentID[2] correspond to?',
            code: `const int SIZE = 4;
int studentID[SIZE] = {1001, 1002, 1003, 1004};
double gpa[SIZE] = {3.5, 2.8, 3.9, 3.2};
char grade[SIZE] = {'B', 'C', 'A', 'B'};`,
            options: [
                'a) ID: 1003, GPA: 3.9, Grade: A',
                'b) ID: 1002, GPA: 2.8, Grade: C',
                'c) ID: 1004, GPA: 3.2, Grade: B',
                'd) Index out of bounds'
            ],
            correct: 0,
            answer: 'a) ID: 1003, GPA: 3.9, Grade: A',
            explanation: `🔍 PARALLEL ARRAYS ANALYSIS:

CONCEPT: Parallel arrays store related data using the SAME INDEX.

📊 ARRAY VISUALIZATION:
Index:     [0]    [1]    [2]    [3]
studentID: 1001   1002   1003   1004
gpa:       3.5    2.8    3.9    3.2
grade:     'B'    'C'    'A'    'B'

🎯 ACCESSING INDEX 2:
• studentID[2] = 1003 (third element, zero-indexed)
• gpa[2] = 3.9 (corresponding GPA for student 1003)
• grade[2] = 'A' (corresponding letter grade)

📋 STEP-BY-STEP SOLUTION:
1. Question asks for studentID[2] and corresponding data
2. Index 2 is the THIRD position (arrays are zero-indexed)
3. studentID[2] = 1003
4. Related data at same index: gpa[2] = 3.9, grade[2] = 'A'
5. Complete student record: ID=1003, GPA=3.9, Grade=A

✅ WHY OPTION A IS CORRECT:
Student with ID 1003 has GPA 3.9 and grade A - all at index [2].

❌ WHY OTHER OPTIONS ARE WRONG:
b) Shows data from index [1]: ID=1002, GPA=2.8, Grade=C
c) Shows data from index [3]: ID=1004, GPA=3.2, Grade=B  
d) Index 2 is valid (0,1,2,3 for SIZE=4)

🎯 PARALLEL ARRAY BEST PRACTICES:
• Always use same index for related data
• Maintain array sizes consistently
• Consider using structs for complex related data`
        },
        {
            id: 'w4_q8',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 4 PDF - Array Assignment Page 27',
            question: 'Find the error in this array copying attempt:',
            code: `int original[5] = {10, 20, 30, 40, 50};
int copy[5];

copy = original;  // Error!

for (int i = 0; i < 5; i++) {
    cout << copy[i] << " ";
}`,
            answer: `ERROR: Cannot assign entire arrays with = operator

CORRECT APPROACH:
for (int i = 0; i < 5; i++) {
    copy[i] = original[i];  // Copy element by element
}`,
            explanation: `🚫 THE FUNDAMENTAL ARRAY ASSIGNMENT ERROR:

ERROR LOCATION: copy = original;

❌ WHY THIS FAILS:
• Arrays are NOT assignable objects in C++
• Array names represent memory addresses (pointers)
• You cannot reassign the base address of an array
• Compiler error: "invalid array assignment"

🔍 WHAT HAPPENS BEHIND THE SCENES:
• 'original' is address of first element: &original[0]
• 'copy' is address of first element: &copy[0]  
• copy = original tries to change copy's address (impossible!)

✅ CORRECT SOLUTION - Element-by-Element Copy:
int original[5] = {10, 20, 30, 40, 50};
int copy[5];

// Method 1: Manual loop
for (int i = 0; i < 5; i++) {
    copy[i] = original[i];
}

// Method 2: Using library function
#include <cstring>
memcpy(copy, original, 5 * sizeof(int));

📋 STEP-BY-STEP COPY PROCESS:
i=0: copy[0] = original[0] → copy[0] = 10
i=1: copy[1] = original[1] → copy[1] = 20
i=2: copy[2] = original[2] → copy[2] = 30
i=3: copy[3] = original[3] → copy[3] = 40
i=4: copy[4] = original[4] → copy[4] = 50

Result: copy = {10, 20, 30, 40, 50} ✅

🎯 KEY CONCEPTS TO REMEMBER:
• Arrays are NOT like simple variables
• Array assignment must be done element-wise
• Use loops or library functions like memcpy()
• This rule applies to ALL array types (int[], char[], double[], etc.)

💡 ALTERNATIVE: Use std::vector for easier copying:
vector<int> original = {10, 20, 30, 40, 50};
vector<int> copy = original;  // This works with vectors!`
        },
        {
            id: 'w4_q9',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 4 Lab Exercise - Charge Account Validation',
            question: 'Complete the linear search function for charge account validation:',
            code: `#include <iostream>
using namespace std;

const int ACCOUNTS = 18;
int validAccounts[ACCOUNTS] = {5658845, 4520125, 7895122, 8777541, 8451277,
                               1302850, 8080152, 4562555, 5552012, 5050552,
                               7825877, 1250255, 1005231, 6545231, 3852085,
                               7576651, 7881200, 4581002};

// Function returns true if account found, false if not
bool searchAccount(int accounts[], int size, int target) {
    // WRITE LINEAR SEARCH ALGORITHM
}

int main() {
    int accountNum;
    cout << "Enter account number: ";
    cin >> accountNum;
    
    if (searchAccount(validAccounts, ACCOUNTS, accountNum))
        cout << "Valid account number." << endl;
    else
        cout << "Invalid account number." << endl;
        
    return 0;
}`,
            answer: `COMPLETE LINEAR SEARCH FUNCTION:
bool searchAccount(int accounts[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (accounts[i] == target) {
            return true;  // Found it!
        }
    }
    return false;  // Searched entire array, not found
}`,
            explanation: `🔍 LINEAR SEARCH ALGORITHM IMPLEMENTATION:

🎯 ALGORITHM CONCEPT:
Linear search examines each element sequentially until target is found or array is exhausted.

📋 STEP-BY-STEP IMPLEMENTATION:

1️⃣ LOOP THROUGH ARRAY:
for (int i = 0; i < size; i++)
• Start at index 0
• Continue while i < size (valid indices: 0 to size-1)
• Increment i each iteration

2️⃣ CHECK EACH ELEMENT:
if (accounts[i] == target)
• Compare current element with target value
• Use == for equality comparison

3️⃣ RETURN IMMEDIATELY WHEN FOUND:
return true;
• Exit function as soon as match is found
• No need to continue searching

4️⃣ HANDLE NOT FOUND CASE:
return false;
• Only reached if loop completes without finding target
• Means target is not in the array

🚀 ALGORITHM TRACE EXAMPLE:
Searching for account 7895122 in validAccounts:

i=0: accounts[0] = 5658845 ≠ 7895122, continue
i=1: accounts[1] = 4520125 ≠ 7895122, continue  
i=2: accounts[2] = 7895122 = 7895122 ✅ FOUND!
     return true (search stops here)

🚀 NOT FOUND EXAMPLE:
Searching for account 9999999:

i=0: accounts[0] = 5658845 ≠ 9999999, continue
i=1: accounts[1] = 4520125 ≠ 9999999, continue
...
i=17: accounts[17] = 4581002 ≠ 9999999, continue
Loop ends (i=18, not < 18)
return false (not found)

⚡ PERFORMANCE ANALYSIS:
• Time Complexity: O(n) - worst case checks all elements
• Space Complexity: O(1) - uses constant extra space
• Best Case: O(1) - target is first element
• Worst Case: O(n) - target is last element or not present
• Average Case: O(n/2) - target found halfway through

💡 OPTIMIZATION OPPORTUNITIES:
• Binary search: O(log n) if array is sorted
• Hash table: O(1) average case for lookups
• Early termination: implemented with immediate return

🎯 REAL-WORLD APPLICATION:
This pattern is fundamental for validating:
• Credit card numbers
• Student IDs  
• Product codes
• User permissions
• Any membership verification system`
        },
        {
            id: 'w4_q10',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 4 Lab Exercise - Grade Book with 2D Arrays',
            question: 'In this 2D grade book, how do you calculate the average for student 1 (second student)?',
            code: `const int STUDENTS = 3, TESTS = 4;
double grades[STUDENTS][TESTS] = {
    {85, 92, 78, 88},  // Student 0
    {76, 83, 91, 85},  // Student 1  
    {92, 88, 95, 91}   // Student 2
};`,
            options: [
                'a) (grades[1][0] + grades[1][1] + grades[1][2] + grades[1][3]) / 4',
                'b) (grades[0][1] + grades[1][1] + grades[2][1]) / 3',
                'c) Sum all grades[1] elements',
                'd) Both a and c are correct'
            ],
            correct: 3,
            answer: 'd) Both a and c are correct',
            explanation: `🎯 2D ARRAY STUDENT AVERAGE CALCULATION:

📊 UNDERSTANDING THE 2D ARRAY STRUCTURE:
grades[STUDENTS][TESTS] = grades[3][4]

Row = Student, Column = Test
       Test0  Test1  Test2  Test3
Row0:   85     92     78     88   ← Student 0
Row1:   76     83     91     85   ← Student 1 
Row2:   92     88     95     91   ← Student 2

🎯 TARGET: Calculate average for Student 1 (Row 1)

STUDENT 1'S GRADES: {76, 83, 91, 85}

📋 ANALYSIS OF EACH OPTION:

✅ OPTION A: (grades[1][0] + grades[1][1] + grades[1][2] + grades[1][3]) / 4
• grades[1][0] = 76 (Student 1, Test 0)
• grades[1][1] = 83 (Student 1, Test 1)  
• grades[1][2] = 91 (Student 1, Test 2)
• grades[1][3] = 85 (Student 1, Test 3)
• Sum = 76 + 83 + 91 + 85 = 335
• Average = 335 / 4 = 83.75 ✅ CORRECT!

❌ OPTION B: (grades[0][1] + grades[1][1] + grades[2][1]) / 3
• grades[0][1] = 92 (Student 0, Test 1)
• grades[1][1] = 83 (Student 1, Test 1)
• grades[2][1] = 88 (Student 2, Test 1)
• This calculates average for TEST 1 across all students (not what we want!)

✅ OPTION C: "Sum all grades[1] elements"
• This describes summing grades[1][0] + grades[1][1] + grades[1][2] + grades[1][3]
• Then dividing by number of tests (4)
• Same concept as Option A ✅ CORRECT!

✅ OPTION D: "Both a and c are correct"
• Option A gives explicit calculation
• Option C describes same process conceptually
• Both are mathematically equivalent ✅ CORRECT ANSWER!

🔄 LOOP IMPLEMENTATION:
double studentAverage = 0;
for (int test = 0; test < TESTS; test++) {
    studentAverage += grades[1][test];  // Sum student 1's grades
}
studentAverage /= TESTS;  // Divide by number of tests

📊 COMMON 2D ARRAY PATTERNS:

FOR STUDENT AVERAGE (sum across columns in one row):
for (int col = 0; col < TESTS; col++) {
    sum += grades[student][col];
}

FOR TEST AVERAGE (sum down rows in one column):
for (int row = 0; row < STUDENTS; row++) {
    sum += grades[row][test];
}

🎯 KEY 2D ARRAY CONCEPTS:
• First index [row] = which student
• Second index [col] = which test
• Student average: fix row, vary column
• Test average: fix column, vary row
• Always be clear about which dimension you're processing!`
        }
    ]
};

// Export for use in main application
window.week4Data = week4Data;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = week4Data;
}
