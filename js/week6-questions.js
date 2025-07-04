// Week 6: Pointers & Dynamic Memory - From your extracted content
const week6Data = {
    title: 'Week 6: Pointers & Dynamic Memory',
    description: 'Master pointer declaration, dereferencing, pointer arithmetic, dynamic memory allocation with new/delete from your course materials.',
    
    // CHEAT SHEET FROM EXTRACTED CONTENT
    cheatSheet: {
        title: "📚 Week 6 Pointers Reference - From CSY2087_C++_Week6.pdf",
        sections: [
            {
                title: "👉 Pointer Basics",
                content: `
DECLARATION:
int* ptr;           // Pointer to int
double* dPtr;       // Pointer to double
int *p1, *p2;       // Multiple pointers

INITIALIZATION:
int x = 42;
int* ptr = &x;      // ptr points to x's address

DEREFERENCING:
cout << *ptr;       // Outputs value at ptr (42)
*ptr = 100;         // Changes value at ptr's address

ADDRESS OPERATOR:
cout << &x;         // Prints address of x
cout << ptr;        // Prints address stored in ptr`
            },
            {
                title: "🔢 Pointer Arithmetic",
                content: `
OPERATIONS ON POINTERS:
int vals[] = {4, 7, 11};
int* valptr = vals;

++, --: 
valptr++;           // Points to next element (7)
valptr--;           // Points back to 4

+, - (with integers):
cout << *(valptr + 2);  // Outputs 11
valptr += 2;        // Points to 11

POINTER DIFFERENCE:
cout << ptr2 - ptr1;    // Number of elements between

ARRAY ACCESS:
vals[i] is equivalent to *(vals + i)`
            },
            {
                title: "🆕 Dynamic Memory Allocation",
                content: `
ALLOCATE SINGLE VARIABLE:
int* ptr = new int;         // Allocate 1 int
double* dPtr = new double(3.14);  // Initialize

ALLOCATE ARRAY:
int* arr = new int[size];   // Allocate array
double* scores = new double[100];

DEALLOCATE MEMORY:
delete ptr;                 // Free single variable
delete[] arr;               // Free array

IMPORTANT: Every new must have matching delete!`
            },
            {
                title: "🔄 Functions with Pointers",
                content: `
PASSING POINTERS:
void func(int* ptr) {
    *ptr = 100;     // Modifies original variable
}

RETURNING POINTERS:
int* createArray(int size) {
    int* arr = new int[size];
    return arr;     // Caller must delete
}

FUNCTION PARAMETERS:
void process(int* arr, int size);   // Array as pointer
void modify(int& ref);              // Reference
void getValue(int* ptr);            // Pointer`
            },
            {
                title: "⚠️ Common Pointer Pitfalls",
                content: `
❌ DANGLING POINTERS:
int* ptr = new int(42);
delete ptr;
cout << *ptr;       // Undefined behavior!

❌ MEMORY LEAKS:
int* ptr = new int[1000];
// Forgetting delete[] ptr;

❌ NULL POINTER DEREFERENCING:
int* ptr = nullptr;
*ptr = 42;          // Crash!

✅ BEST PRACTICES:
• Initialize pointers to nullptr
• Check for null before dereferencing
• Set pointers to nullptr after delete
• Match every new with delete`
            }
        ]
    },
    
    questions: [
        {
            id: 'w6_q1',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            source: 'Week 6 PDF - CSY2087_C++_Week6.pdf Page 27',
            question: 'What does this pointer arithmetic expression output?',
            code: `int vals[] = {4, 7, 11};
int* valptr = vals;
cout << *(valptr + 2);`,
            options: [
                'a) 4',
                'b) 7',
                'c) 11',
                'd) Memory address'
            ],
            correct: 2,
            answer: 'c) 11',
            explanation: `🎯 POINTER ARITHMETIC & ARRAY ACCESS ANALYSIS:

📊 ANSWER: c) 11

🔍 STEP-BY-STEP BREAKDOWN:

1️⃣ ARRAY INITIALIZATION:
int vals[] = {4, 7, 11};
• vals[0] = 4
• vals[1] = 7  
• vals[2] = 11

2️⃣ POINTER INITIALIZATION:
int* valptr = vals;
• valptr points to first element (vals[0])
• valptr contains address of vals[0]

3️⃣ POINTER ARITHMETIC:
valptr + 2
• Adds 2 to pointer position
• Moves pointer 2 elements forward
• Now points to vals[2]

4️⃣ DEREFERENCING:
*(valptr + 2)
• Dereferences the pointer at new position
• Gets value at vals[2]
• Returns 11

📊 MEMORY VISUALIZATION:
Address: 1000  1004  1008
Values:   4     7     11
Index:    0     1     2
         ↑           ↑
      valptr    valptr+2

🎯 POINTER ARITHMETIC RULES:
• ptr + n moves n elements forward (not n bytes!)
• For int: ptr + 1 moves 4 bytes (sizeof(int))
• For double: ptr + 1 moves 8 bytes (sizeof(double))
• Compiler handles size calculation automatically

💡 EQUIVALENT EXPRESSIONS:
All these expressions yield the same result (11):
• *(valptr + 2)
• valptr[2]
• *(vals + 2)
• vals[2]

KEY INSIGHT: arr[i] is syntactic sugar for *(arr + i)

🚀 PRACTICAL EXAMPLE:
int data[] = {10, 20, 30, 40, 50};
int* p = data;

cout << *p;       // 10 (first element)
cout << *(p+1);   // 20 (second element)
cout << *(p+4);   // 50 (fifth element)
cout << p[3];     // 40 (fourth element - equivalent to *(p+3))

⚠️ BOUNDS CHECKING:
• *(valptr + 5) would be undefined behavior!
• Always ensure pointer arithmetic stays within array bounds
• C++ doesn't automatically check array bounds`
        },
        {
            id: 'w6_q2',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 6 Lab Exercise - Dynamic Array',
            question: 'Find the memory management error in this dynamic array program:',
            code: `#include <iostream>
using namespace std;

int main() {
    int size;
    cout << "Enter array size: ";
    cin >> size;
    
    int* arr = new int[size];
    
    for (int i = 0; i < size; i++) {
        arr[i] = i * 2;
        cout << arr[i] << " ";
    }
    
    return 0;  // Error: Missing cleanup!
}`,
            answer: 'Missing delete[] arr; before return statement',
            explanation: `
📖 DETAILED EXPLANATION:

This is a classic memory leak error in dynamic memory allocation.

🚨 THE PROBLEM:
Every 'new[]' must have a matching 'delete[]' to free memory.

🔍 CODE ANALYSIS:
1. int* arr = new int[size]; ← Allocates memory on heap
2. Memory is used in the for loop ← Using the allocated memory
3. return 0; ← Program ends WITHOUT freeing memory

💾 MEMORY LEAK EXPLANATION:
- When you use 'new[]', memory is allocated on the heap
- This memory stays allocated until explicitly freed with 'delete[]'
- If program ends without 'delete[]', memory is "leaked"
- Operating system eventually reclaims it, but it's bad practice

✅ CORRECT SOLUTION:
Add before return 0;:
delete[] arr;
arr = nullptr; // Good practice but optional

🎯 GOLDEN RULE:
Every 'new' needs a 'delete'
Every 'new[]' needs a 'delete[]'

💡 MEMORY MANAGEMENT BEST PRACTICES:
1. Always pair new/delete
2. Set pointers to nullptr after delete
3. Consider using smart pointers in modern C++
4. Check for memory leaks with tools like Valgrind

🧪 REAL-WORLD IMPACT:
Without proper cleanup, programs that allocate memory repeatedly can consume all available RAM!`
        },
        {
            id: 'w6_q3',
            type: 'Complete Code',
            difficulty: '⭐⭐ Medium',
            source: 'Week 6 Sample Program - Pr9-16 Array Duplication',
            question: 'Complete this function that duplicates an array dynamically:',
            code: `#include <iostream>
using namespace std;

int* duplicateArray(const int* arr, int size) {
    // VALIDATE SIZE AND ALLOCATE NEW ARRAY
    
    // COPY ELEMENTS FROM ORIGINAL TO NEW ARRAY
    
    // RETURN POINTER TO NEW ARRAY
}

int main() {
    int original[5] = {100, 200, 300, 400, 500};
    int* copy = duplicateArray(original, 5);
    
    // Display copy
    for (int i = 0; i < 5; i++)
        cout << copy[i] << " ";
        
    delete[] copy;  // Cleanup
    return 0;
}`,
            answer: `COMPLETE IMPLEMENTATION:
int* duplicateArray(const int* arr, int size) {
    // Validate input size
    if (size <= 0) return nullptr;
    
    // Allocate new array dynamically
    int* newArray = new int[size];
    
    // Copy elements from original to new array
    for (int i = 0; i < size; i++) {
        newArray[i] = arr[i];
    }
    
    // Return pointer to new array
    return newArray;
}`,
            explanation: `🔄 DYNAMIC ARRAY DUPLICATION IMPLEMENTATION:

📋 STEP-BY-STEP BREAKDOWN:

1️⃣ INPUT VALIDATION:
if (size <= 0) return nullptr;
• Check for invalid array size
• Return nullptr for invalid input  
• Prevents allocation of zero/negative sized arrays
• Defensive programming practice

2️⃣ DYNAMIC MEMORY ALLOCATION:
int* newArray = new int[size];
• Allocates memory on HEAP (not stack)
• Size determined at runtime (dynamic)
• Returns pointer to first element
• Memory persists beyond function scope

3️⃣ ELEMENT-BY-ELEMENT COPY:
for (int i = 0; i < size; i++) {
    newArray[i] = arr[i];
}
• Cannot use assignment operator with arrays
• Must copy each element individually
• Preserves all original values
• Deep copy (separate memory locations)

4️⃣ RETURN POINTER:
return newArray;
• Returns address of dynamically allocated array
• Caller becomes responsible for memory management
• Must call delete[] to avoid memory leak

🎯 FUNCTION SIGNATURE ANALYSIS:
int* duplicateArray(const int* arr, int size)

• Return type: int* (pointer to dynamically allocated array)
• Parameter 1: const int* arr (read-only access to original)
• Parameter 2: int size (number of elements to copy)
• const prevents accidental modification of original

💾 MEMORY MANAGEMENT CHAIN:
1. Function allocates: new int[size]
2. Function returns: pointer to allocated memory
3. Caller uses: access elements via pointer
4. Caller cleans up: delete[] copy (essential!)

🚀 EXECUTION TRACE:
Original array: [100, 200, 300, 400, 500]

1. Validation: size=5 > 0 ✓
2. Allocation: newArray points to heap memory for 5 ints
3. Copy loop:
   - newArray[0] = arr[0] = 100
   - newArray[1] = arr[1] = 200
   - newArray[2] = arr[2] = 300
   - newArray[3] = arr[3] = 400
   - newArray[4] = arr[4] = 500
4. Return: pointer to new array

Result: Independent copy [100, 200, 300, 400, 500]

⚠️ MEMORY LEAK PREVENTION:
CRITICAL: Caller MUST call delete[] on returned pointer!

int* copy = duplicateArray(original, 5);
// Use copy...
delete[] copy;  // ← ESSENTIAL cleanup!
copy = nullptr; // ← Good practice

🎯 ALTERNATIVE APPROACHES:

APPROACH 1 (Using memcpy):
#include <cstring>
int* duplicateArray(const int* arr, int size) {
    if (size <= 0) return nullptr;
    int* newArray = new int[size];
    memcpy(newArray, arr, size * sizeof(int));
    return newArray;
}

APPROACH 2 (Using std::copy):
#include <algorithm>
int* duplicateArray(const int* arr, int size) {
    if (size <= 0) return nullptr;
    int* newArray = new int[size];
    std::copy(arr, arr + size, newArray);
    return newArray;
}

APPROACH 3 (Modern C++ with smart pointers):
#include <memory>
std::unique_ptr<int[]> duplicateArray(const int* arr, int size) {
    if (size <= 0) return nullptr;
    auto newArray = std::make_unique<int[]>(size);
    std::copy(arr, arr + size, newArray.get());
    return newArray;
}

🎯 KEY CONCEPTS:
• Dynamic allocation allows runtime-determined sizes
• Heap memory persists beyond function scope
• Caller responsibility for memory cleanup
• Deep copy creates independent data structures`
        },
        {
            id: 'w6_q4',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 6 Lab Exercise - Pointer Reference Conversion',
            question: 'What will this program output?',
            code: `void mystery(int* x, int* y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

int main() {
    int a = 10, b = 20;
    int* p1 = &a;
    int* p2 = &b;
    
    mystery(p1, p2);
    cout << a << " " << b << endl;
    return 0;
}`,
            options: [
                'a) 10 20',
                'b) 20 10',
                'c) Memory addresses',
                'd) Compilation error'
            ],
            correct: 1,
            answer: 'b) 20 10',
            explanation: `🔄 POINTER SWAPPING ANALYSIS:

📊 ANSWER: b) 20 10

🎯 FUNCTION ANALYSIS:
void mystery(int* x, int* y) {
    int temp = *x;   // Store value pointed to by x
    *x = *y;         // Set value at x to value at y
    *y = temp;       // Set value at y to stored temp
}

This is a SWAP function that exchanges the VALUES at the memory locations pointed to by the pointers.

🔍 STEP-BY-STEP EXECUTION TRACE:

1️⃣ INITIAL STATE:
int a = 10, b = 20;
int* p1 = &a;    // p1 points to a's memory location
int* p2 = &b;    // p2 points to b's memory location

Memory visualization:
a: [10] ← p1 points here
b: [20] ← p2 points here

2️⃣ FUNCTION CALL: mystery(p1, p2)
Parameters: x = p1 (points to a), y = p2 (points to b)

3️⃣ INSIDE mystery() FUNCTION:
Step 1: int temp = *x;
• *x means "value at address x points to"
• x points to a, so *x = 10
• temp = 10

Step 2: *x = *y;
• *y means "value at address y points to"
• y points to b, so *y = 20
• *x = 20 means "put 20 at address x points to"
• Since x points to a, this sets a = 20

Step 3: *y = temp;
• temp = 10
• *y = 10 means "put 10 at address y points to"
• Since y points to b, this sets b = 10

4️⃣ FINAL STATE:
a: [20] (was 10, now 20)
b: [10] (was 20, now 10)

5️⃣ OUTPUT:
cout << a << " " << b << endl;
Prints: 20 10

🔑 KEY CONCEPTS:

POINTER DEREFERENCING:
• *ptr accesses the VALUE at the memory location ptr points to
• Changing *ptr modifies the original variable

PASS BY POINTER:
• Function receives copies of the pointer values (addresses)
• But these addresses point to the original variables
• Dereferencing allows modification of original variables

MEMORY VISUALIZATION:
Before mystery():
Memory:  [10]    [20]
         ↑       ↑
         a       b
         ↑       ↑
        p1      p2

After mystery():
Memory:  [20]    [10]
         ↑       ↑
         a       b
         ↑       ↑
        p1      p2

🎯 WHY OTHER OPTIONS ARE WRONG:

a) 10 20 - INCORRECT
• This would be the result if no swapping occurred
• The mystery function DOES swap the values

c) Memory addresses - INCORRECT
• cout << a << " " << b prints the VALUES of a and b
• Not the addresses (&a, &b)

d) Compilation error - INCORRECT
• Code is syntactically correct
• Pointers are properly declared and used
• Function signature and calls are valid

💡 ALTERNATIVE IMPLEMENTATIONS:

USING REFERENCES (cleaner syntax):
void swap(int& x, int& y) {
    int temp = x;
    x = y;
    y = temp;
}

USING STANDARD LIBRARY:
#include <algorithm>
std::swap(a, b);

🎯 PRACTICAL APPLICATIONS:
• Swapping algorithm implementations
• Bubble sort, selection sort optimizations
• General data exchange operations
• Memory management and data structure manipulations`
        },
        {
            id: 'w6_q5',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 6 Lab Exercise - Dynamic Array Sorting',
            question: 'Fix the memory errors in this dynamic array sorting program:',
            code: `#include <iostream>
using namespace std;

void sortArray(int* arr, int size) {
    // Simple bubble sort
    for (int i = 0; i < size-1; i++) {
        for (int j = 0; j < size-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

int main() {
    int size = 5;
    int* scores = new int[size];
    
    // Initialize array
    for (int i = 0; i < size; i++) {
        scores[i] = (size - i) * 10;  // 50, 40, 30, 20, 10
    }
    
    sortArray(scores, size);
    
    // Display sorted array
    for (int i = 0; i < size; i++) {
        cout << scores[i] << " ";
    }
    
    // Error: What's missing?
    return 0;
}`,
            answer: `ERROR: Missing delete[] scores; before return statement

CORRECTED CODE:
Add before return 0;:
delete[] scores;
scores = nullptr; // Good practice`,
            explanation: `🚫 MEMORY LEAK IN DYNAMIC ARRAY SORTING:

🎯 THE CRITICAL ERROR:
Missing delete[] scores; before return 0;

🔍 DETAILED ANALYSIS:

1️⃣ MEMORY ALLOCATION:
int* scores = new int[size];
• Allocates array of 5 integers on HEAP
• Memory address stored in scores pointer
• This memory persists beyond variable scope

2️⃣ MEMORY USAGE:
Array is properly initialized and sorted:
Initial: [50, 40, 30, 20, 10]
After bubble sort: [10, 20, 30, 40, 50]

3️⃣ THE PROBLEM:
return 0; // Program exits WITHOUT freeing memory!
• Dynamically allocated memory remains allocated
• Operating system eventually reclaims it
• But creates memory leak during program execution

✅ CORRECTED VERSION:
int main() {
    int size = 5;
    int* scores = new int[size];
    
    // Initialize array
    for (int i = 0; i < size; i++) {
        scores[i] = (size - i) * 10;
    }
    
    sortArray(scores, size);
    
    // Display sorted array
    for (int i = 0; i < size; i++) {
        cout << scores[i] << " ";
    }
    
    delete[] scores;        // ✅ Free the memory
    scores = nullptr;       // ✅ Prevent dangling pointer
    return 0;
}

🎯 MEMORY MANAGEMENT RULES:
• Every new[] MUST have matching delete[]
• Every new MUST have matching delete
• Set pointer to nullptr after delete
• Memory leaks accumulate in long-running programs

⚠️ CONSEQUENCES OF MEMORY LEAKS:
• Program uses more RAM than necessary
• System performance degrades
• Eventually system runs out of memory
• In servers/long-running apps: critical problem

💡 DEBUGGING MEMORY LEAKS:
Tools to detect memory leaks:
• Valgrind (Linux/Mac)
• Visual Studio Diagnostic Tools (Windows)  
• AddressSanitizer (GCC/Clang)
• Static analysis tools

🎯 BEST PRACTICES:
1. Always pair new/delete and new[]/delete[]
2. Use RAII (Resource Acquisition Is Initialization)
3. Consider smart pointers in modern C++
4. Set pointers to nullptr after delete
5. Use stack allocation when possible`
        },
        {
            id: 'w6_q6',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 6 Lab Exercise - Dynamic Array Function',
            question: 'Complete this function that dynamically allocates an array based on user input:',
            code: `#include <iostream>
using namespace std;

int* createTestScoreArray(int& size) {
    cout << "How many test scores? ";
    // GET SIZE FROM USER
    
    // VALIDATE SIZE (MUST BE POSITIVE)
    
    // ALLOCATE ARRAY DYNAMICALLY
    
    // GET SCORES FROM USER
    
    // RETURN POINTER TO ARRAY
}

int main() {
    int numScores;
    int* scores = createTestScoreArray(numScores);
    
    // Calculate average
    double total = 0;
    for (int i = 0; i < numScores; i++) {
        total += scores[i];
    }
    cout << "Average: " << total / numScores << endl;
    
    delete[] scores;
    return 0;
}`,
            answer: `COMPLETE IMPLEMENTATION:
int* createTestScoreArray(int& size) {
    cout << "How many test scores? ";
    cin >> size;
    
    if (size <= 0) {
        size = 0;
        return nullptr;
    }
    
    int* arr = new int[size];
    
    cout << "Enter " << size << " test scores: ";
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }
    
    return arr;
}`,
            explanation: `🔄 DYNAMIC ARRAY CREATION WITH USER INPUT:

📋 STEP-BY-STEP IMPLEMENTATION:

1️⃣ GET SIZE FROM USER:
cout << "How many test scores? ";
cin >> size;
• Prompt user for array size
• Read into reference parameter
• size is modified in calling function

2️⃣ INPUT VALIDATION:
if (size <= 0) {
    size = 0;
    return nullptr;
}
• Check for invalid size (negative/zero)
• Set size to 0 for caller
• Return nullptr to indicate failure
• Defensive programming practice

3️⃣ DYNAMIC ALLOCATION:
int* arr = new int[size];
• Allocate array on heap with user-specified size
• Size determined at runtime (not compile time)
• Memory persists beyond function scope
• Must be freed by caller

4️⃣ POPULATE ARRAY:
cout << "Enter " << size << " test scores: ";
for (int i = 0; i < size; i++) {
    cin >> arr[i];
}
• Prompt user for each score
• Read directly into allocated array
• Fill all elements before returning

5️⃣ RETURN POINTER:
return arr;
• Return address of allocated array
• Caller becomes responsible for memory
• Must call delete[] to prevent leak

🎯 FUNCTION SIGNATURE ANALYSIS:
int* createTestScoreArray(int& size)

RETURN TYPE: int*
• Pointer to dynamically allocated array
• nullptr if allocation fails

PARAMETER: int& size
• Reference parameter (not copy)
• Function can modify caller's variable
• Used to communicate array size back to main

📊 EXECUTION FLOW EXAMPLE:
User input: 3 scores → 85, 92, 78

1. User enters: 3
2. Validation: 3 > 0 ✓
3. Allocation: new int[3]
4. Input loop:
   - arr[0] = 85
   - arr[1] = 92  
   - arr[2] = 78
5. Return: pointer to [85, 92, 78]

💾 MEMORY RESPONSIBILITY CHAIN:
1. createTestScoreArray(): Allocates memory
2. main(): Receives pointer, uses array
3. main(): Must call delete[] scores
4. Failure to delete[] = memory leak

🚀 INTEGRATION WITH MAIN:
int main() {
    int numScores;                              // size variable
    int* scores = createTestScoreArray(numScores); // get array
    
    if (scores == nullptr) {                    // check for failure
        cout << "Invalid size entered." << endl;
        return 1;
    }
    
    // Calculate average
    double total = 0;
    for (int i = 0; i < numScores; i++) {
        total += scores[i];
    }
    cout << "Average: " << total / numScores << endl;
    
    delete[] scores;                            // CRITICAL cleanup
    return 0;
}

⚠️ ERROR HANDLING CONSIDERATIONS:
• What if user enters negative size?
• What if memory allocation fails?
• What if user enters non-numeric input?

ROBUST VERSION:
int* createTestScoreArray(int& size) {
    do {
        cout << "How many test scores? ";
        cin >> size;
        if (size <= 0) {
            cout << "Please enter a positive number." << endl;
        }
    } while (size <= 0);
    
    int* arr = new(nothrow) int[size];  // nothrow version
    if (arr == nullptr) {
        cout << "Memory allocation failed!" << endl;
        size = 0;
        return nullptr;
    }
    
    cout << "Enter " << size << " test scores: ";
    for (int i = 0; i < size; i++) {
        while (!(cin >> arr[i])) {
            cout << "Invalid input. Enter a number: ";
            cin.clear();
            cin.ignore(10000, '\n');
        }
    }
    
    return arr;
}

🎯 KEY CONCEPTS:
• Reference parameters for two-way communication
• Dynamic allocation for runtime-sized arrays
• Caller responsibility for memory management
• Error handling for robust programs`
        },
        {
            id: 'w6_q7',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 6 PDF - Array vs Pointer Equivalence',
            question: 'Which expressions are equivalent to accessing arr[3]?',
            code: `int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int* ptr = arr;`,
            options: [
                'a) *(ptr + 3) only',
                'b) *(arr + 3) only', 
                'c) Both *(ptr + 3) and *(arr + 3)',
                'd) ptr[3] only'
            ],
            correct: 2,
            answer: 'c) Both *(ptr + 3) and *(arr + 3)',
            explanation: `🔄 ARRAY-POINTER EQUIVALENCE ANALYSIS:

📊 ANSWER: c) Both *(ptr + 3) and *(arr + 3)

🎯 FUNDAMENTAL C++ CONCEPT:
Array subscript notation arr[i] is syntactic sugar for *(arr + i)

🔍 DETAILED BREAKDOWN:

1️⃣ GIVEN CODE ANALYSIS:
int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int* ptr = arr;

• arr is array of 10 integers
• ptr is pointer initialized to point to first element of arr
• Both arr and ptr now point to same memory location

2️⃣ TARGET EXPRESSION: arr[3]
• Accesses 4th element (index 3) of array
• Value at arr[3] = 4

3️⃣ EQUIVALENT EXPRESSIONS:

✅ *(arr + 3):
• arr + 3: Calculate address 3 positions forward from arr
• *(arr + 3): Dereference that address
• Result: 4 ✓

✅ *(ptr + 3):
• ptr points to same location as arr
• ptr + 3: Calculate address 3 positions forward from ptr
• *(ptr + 3): Dereference that address  
• Result: 4 ✓

✅ ptr[3]:
• Subscript notation works on pointers too!
• ptr[3] is equivalent to *(ptr + 3)
• Result: 4 ✓

📊 COMPLETE EQUIVALENCE TABLE:
Expression     | Meaning              | Result
arr[3]         | Standard array access| 4
*(arr + 3)     | Pointer arithmetic   | 4  
*(ptr + 3)     | Pointer arithmetic   | 4
ptr[3]         | Pointer subscript    | 4
3[arr]         | Reverse notation     | 4 (legal but weird!)

🔍 MEMORY VISUALIZATION:
Address: 1000  1004  1008  1012  1016  1020  1024  1028  1032  1036
Values:   1     2     3     4     5     6     7     8     9     10
Index:    0     1     2     3     4     5     6     7     8     9
                      ↑
                   arr[3] = 4
                *(arr+3) = 4
                *(ptr+3) = 4
                  ptr[3] = 4

🎯 WHY OTHER OPTIONS ARE WRONG:

a) *(ptr + 3) only - INCORRECT
• This expression IS equivalent to arr[3]
• But it's not the ONLY equivalent expression
• *(arr + 3) is also equivalent

b) *(arr + 3) only - INCORRECT  
• This expression IS equivalent to arr[3]
• But *(ptr + 3) is also equivalent
• Both are valid, not just one

d) ptr[3] only - INCORRECT
• ptr[3] IS equivalent to arr[3]
• But both *(ptr + 3) and *(arr + 3) are also equivalent
• Answer is too restrictive

🔑 FUNDAMENTAL PRINCIPLE:
In C++, arrays and pointers are intimately related:
• Array name represents address of first element
• Pointer arithmetic moves by element size, not bytes
• Subscript operator [] works on both arrays and pointers

💡 PRACTICAL IMPLICATIONS:
void function(int arr[]) {     // Parameter is actually int*
    cout << arr[5];            // Works
    cout << *(arr + 5);        // Equivalent
}

void function(int* ptr) {      // Explicitly pointer parameter
    cout << ptr[5];            // Works
    cout << *(ptr + 5);        // Equivalent
}

🚀 ADVANCED EXAMPLES:
int data[] = {10, 20, 30, 40, 50};
int* p = data;

// All these print 30:
cout << data[2];        // Standard array access
cout << *(data + 2);    // Pointer arithmetic on array
cout << *(p + 2);       // Pointer arithmetic on pointer
cout << p[2];           // Subscript on pointer
cout << 2[data];        // Weird but legal: *(2 + data)

🎯 KEY TAKEAWAYS:
• Array names are converted to pointers in most contexts
• Pointer arithmetic accounts for data type size automatically
• Subscript notation is universal for arrays and pointers
• Multiple equivalent ways to access same memory location`
        },
        {
            id: 'w6_q8',
            type: 'Find Error',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 6 Lab Exercise - Dangling Pointer',
            question: 'Identify the dangling pointer problem in this code:',
            code: `#include <iostream>
using namespace std;

int* createNumber() {
    int value = 42;
    return &value;  // Dangerous!
}

int main() {
    int* ptr = createNumber();
    cout << *ptr << endl;  // Undefined behavior!
    return 0;
}`,
            answer: `ERROR: Returning address of local variable that gets destroyed when function ends

PROBLEM: Dangling pointer - pointer to destroyed memory`,
            explanation: `🚫 DANGLING POINTER CRITICAL ERROR:

⚠️ THE FUNDAMENTAL PROBLEM:
Returning address of local variable that gets destroyed when function ends!

🔍 DETAILED ERROR ANALYSIS:

1️⃣ LOCAL VARIABLE SCOPE:
int* createNumber() {
    int value = 42;      // Local variable created on STACK
    return &value;       // Return address of local variable
}                        // value is DESTROYED here!

2️⃣ VARIABLE LIFETIME:
• value exists only during function execution
• When function ends, value is destroyed
• Stack memory for value is reclaimed
• Returned pointer now points to invalid memory

3️⃣ UNDEFINED BEHAVIOR:
int main() {
    int* ptr = createNumber();  // ptr contains invalid address
    cout << *ptr << endl;       // UNDEFINED BEHAVIOR!
    return 0;
}

🎯 WHY THIS IS DANGEROUS:

MEMORY LIFECYCLE:
1. Function starts: value allocated on stack
2. Function executes: value = 42
3. Function returns: &value (address returned)
4. Function ends: value destroyed, memory reclaimed
5. main() continues: ptr points to garbage memory
6. Dereferencing *ptr: Unpredictable results!

POSSIBLE OUTCOMES:
• Program might print 42 (by luck - memory not overwritten yet)
• Program might print garbage value
• Program might crash with segmentation fault
• Program might corrupt other data

📊 MEMORY VISUALIZATION:
During createNumber():
Stack: [value: 42] ← &value points here
       ↑
    Valid memory

After createNumber():
Stack: [garbage]   ← ptr still points here  
       ↑
    Invalid memory (dangling pointer!)

✅ CORRECT SOLUTIONS:

SOLUTION 1 - Dynamic Allocation:
int* createNumber() {
    int* value = new int(42);  // Allocate on HEAP
    return value;              // Return valid heap address
}
// Caller must call delete value;

SOLUTION 2 - Static Variable:
int* createNumber() {
    static int value = 42;     // Static storage duration
    return &value;             // Valid throughout program
}
// No delete needed, but shared among all calls

SOLUTION 3 - Pass by Reference:
void createNumber(int& result) {
    result = 42;               // Modify caller's variable
}
// No pointer management needed

SOLUTION 4 - Return by Value:
int createNumber() {
    int value = 42;
    return value;              // Copy value (safe)
}
// Simple and safe for primitive types

🎯 BEST PRACTICES TO AVOID DANGLING POINTERS:

1️⃣ NEVER return addresses of local variables
2️⃣ Use dynamic allocation for heap memory
3️⃣ Use static variables for persistent data
4️⃣ Prefer return by value for simple types
5️⃣ Use smart pointers in modern C++

⚠️ COMMON DANGLING POINTER SCENARIOS:

SCENARIO 1 - Array Return:
int* createArray() {
    int arr[10];              // Local array
    return arr;               // WRONG!
}

SCENARIO 2 - Reference to Local:
int& createRef() {
    int x = 42;               // Local variable
    return x;                 // WRONG!
}

SCENARIO 3 - Pointer Arithmetic:
int* getElement() {
    int data[5] = {1,2,3,4,5};
    return &data[2];          // WRONG!
}

🔧 DEBUGGING DANGLING POINTERS:

DETECTION TOOLS:
• Valgrind (Linux/Mac): Detects invalid memory access
• AddressSanitizer: Runtime detection
• Static analysis tools: Compile-time warnings
• IDE warnings: Modern compilers warn about this

DEFENSIVE PROGRAMMING:
• Set pointers to nullptr after use
• Check for nullptr before dereferencing
• Use RAII principles
• Prefer automatic storage when possible

💡 MODERN C++ ALTERNATIVES:
#include <memory>

// Smart pointer version
std::unique_ptr<int> createNumber() {
    return std::make_unique<int>(42);
}

// Usage
auto ptr = createNumber();
cout << *ptr << endl;  // Safe, automatic cleanup

🎯 KEY LESSON:
Local variables have automatic storage duration - they're destroyed when scope ends. Never return pointers or references to local variables!`
        },
        {
            id: 'w6_q9',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 6 Sample Program - Array Selection Sort with Pointers',
            question: 'Complete this pointer-based selection sort for array of pointers:',
            code: `#include <iostream>
using namespace std;

void arrSelectSort(int* arr[], int size) {
    int startScan, minIndex;
    int* minElem;
    
    for (startScan = 0; startScan < size-1; startScan++) {
        minIndex = startScan;
        minElem = arr[startScan];
        
        // FIND MINIMUM ELEMENT IN REMAINING ARRAY
        
        // SWAP POINTERS (NOT VALUES)
        
    }
}

// Test with array of pointers
int main() {
    int a = 50, b = 20, c = 80, d = 10;
    int* ptrs[4] = {&a, &b, &c, &d};
    
    arrSelectSort(ptrs, 4);
    
    for (int i = 0; i < 4; i++) {
        cout << *ptrs[i] << " ";
    }
    return 0;
}`,
            answer: `COMPLETE IMPLEMENTATION:
void arrSelectSort(int* arr[], int size) {
    int startScan, minIndex;
    int* minElem;
    
    for (startScan = 0; startScan < size-1; startScan++) {
        minIndex = startScan;
        minElem = arr[startScan];
        
        // Find minimum element in remaining array
        for (int index = startScan + 1; index < size; index++) {
            if (*(arr[index]) < *minElem) {
                minElem = arr[index];
                minIndex = index;
            }
        }
        
        // Swap pointers (not values)
        arr[minIndex] = arr[startScan];
        arr[startScan] = minElem;
    }
}`,
            explanation: `🔄 POINTER ARRAY SELECTION SORT:

🎯 UNIQUE CONCEPT: Sorting array of POINTERS by comparing VALUES they point to

📋 ALGORITHM BREAKDOWN:

1️⃣ FUNCTION SIGNATURE ANALYSIS:
void arrSelectSort(int* arr[], int size)
• arr[] is array of int* pointers
• Each element is a pointer to an integer
• We sort pointers based on values they point to

2️⃣ KEY VARIABLES:
int* minElem;        // Pointer to minimum value
int minIndex;        // Index of minimum element
• minElem stores pointer (not value)
• Used for both comparison and swapping

3️⃣ FIND MINIMUM LOGIC:
for (int index = startScan + 1; index < size; index++) {
    if (*(arr[index]) < *minElem) {
        minElem = arr[index];      // Store pointer
        minIndex = index;          // Store index
    }
}

CRITICAL: *(arr[index]) vs *minElem
• arr[index] is a pointer
• *(arr[index]) is the VALUE that pointer points to
• Compare VALUES, but store POINTERS

4️⃣ POINTER SWAPPING:
arr[minIndex] = arr[startScan];
arr[startScan] = minElem;
• Swap the POINTERS themselves
• Original values remain in same memory locations
• Only pointer array is rearranged

🚀 EXECUTION TRACE:
Initial setup:
int a = 50, b = 20, c = 80, d = 10;
int* ptrs[4] = {&a, &b, &c, &d};

Memory visualization:
ptrs[0] → a[50]
ptrs[1] → b[20]  
ptrs[2] → c[80]
ptrs[3] → d[10]

Pass 1 (startScan = 0):
• Compare: *ptrs[1](20) < *ptrs[0](50) → minElem = ptrs[1], minIndex = 1
• Compare: *ptrs[2](80) < *ptrs[1](20) → No change
• Compare: *ptrs[3](10) < *ptrs[1](20) → minElem = ptrs[3], minIndex = 3
• Swap: ptrs[3] ↔ ptrs[0]

Result after Pass 1:
ptrs[0] → d[10]  ← Smallest value pointer moved to front
ptrs[1] → b[20]
ptrs[2] → c[80]  
ptrs[3] → a[50]

Pass 2 (startScan = 1):
• Compare remaining elements {20, 80, 50}
• 20 is smallest, no swap needed

Pass 3 (startScan = 2):
• Compare {80, 50}
• 50 < 80, swap needed

Final result:
ptrs[0] → d[10]
ptrs[1] → b[20]
ptrs[2] → a[50]
ptrs[3] → c[80]

Output: 10 20 50 80 ✓

🔑 KEY DIFFERENCES FROM REGULAR SELECTION SORT:

REGULAR ARRAY SORT:
• Compare arr[i] vs arr[j] (direct values)
• Swap values: temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;

POINTER ARRAY SORT:  
• Compare *(arr[i]) vs *(arr[j]) (dereferenced values)
• Swap pointers: temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;

💡 ADVANTAGES OF POINTER SORTING:
1. Original data unchanged (non-destructive)
2. Multiple sorted views of same data
3. Efficient for large objects (avoid copying)
4. Maintains original data integrity

🎯 REAL-WORLD APPLICATIONS:
• Database indexing (sort pointers to records)
• GUI applications (sort display order without moving data)
• Memory-efficient sorting of large structures
• Multiple sort criteria on same dataset

⚠️ IMPORTANT CONSIDERATIONS:
• Original variables (a,b,c,d) remain unchanged
• Only pointer arrangement is modified
• Accessing through sorted pointers gives sorted order
• Direct variable access gives original values

🚀 VERIFICATION:
cout << "Sorted via pointers: ";
for (int i = 0; i < 4; i++) {
    cout << *ptrs[i] << " ";     // 10 20 50 80
}

cout << "Original variables: ";
cout << a << " " << b << " " << c << " " << d;  // 50 20 80 10

🎯 COMPLEXITY ANALYSIS:
• Time: O(n²) - same as regular selection sort
• Space: O(1) - only swapping pointers
• Memory efficiency: No large object copying`
        },
        {
            id: 'w6_q10',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 6 Lab Exercise - Memory Management Best Practices',
            question: 'What is the best practice after calling delete on a pointer?',
            code: `int* ptr = new int(42);
cout << *ptr << endl;
delete ptr;
// What should happen next?`,
            options: [
                'a) Nothing, pointer is automatically nullified',
                'b) Set ptr = nullptr;',
                'c) Call delete ptr; again to be sure',
                'd) Use ptr normally, delete doesn\'t affect it'
            ],
            correct: 1,
            answer: 'b) Set ptr = nullptr;',
            explanation: `🎯 POINTER SAFETY AFTER DELETE:

📊 ANSWER: b) Set ptr = nullptr;

⚠️ THE PROBLEM WITH delete:
delete ptr; // Frees memory but doesn't change ptr value!

🔍 DETAILED ANALYSIS:

1️⃣ WHAT delete DOES:
int* ptr = new int(42);
delete ptr;
• Deallocates memory pointed to by ptr
• Memory becomes available for reuse
• ptr STILL contains the old address!
• ptr becomes a "dangling pointer"

2️⃣ WHAT delete DOESN'T DO:
delete ptr;
• Does NOT set ptr to nullptr
• Does NOT modify ptr's value  
• ptr still points to now-invalid memory
• Accessing *ptr is undefined behavior

3️⃣ THE DANGLING POINTER PROBLEM:
int* ptr = new int(42);
cout << *ptr;        // OK: prints 42
delete ptr;          // Memory freed
cout << *ptr;        // UNDEFINED BEHAVIOR!
*ptr = 100;          // UNDEFINED BEHAVIOR!

📊 MEMORY STATE VISUALIZATION:
Before delete:
ptr → [42] (valid heap memory)

After delete:
ptr → [???] (invalid memory - could be anything!)

After ptr = nullptr:
ptr → nullptr (safe, known invalid state)

✅ CORRECT POST-DELETE PRACTICE:
int* ptr = new int(42);
cout << *ptr << endl;    // Use the pointer
delete ptr;              // Free memory  
ptr = nullptr;           // ✅ Set to safe state

🎯 WHY SET TO nullptr:

1️⃣ PREVENTS ACCIDENTAL ACCESS:
if (ptr != nullptr) {    // Safe check
    cout << *ptr;        // Only access if valid
}

2️⃣ ENABLES SAFE DOUBLE-DELETE:
delete ptr;              // OK even if ptr is nullptr
ptr = nullptr;           // Safe to call delete again

3️⃣ CLEAR PROGRAM STATE:
• nullptr clearly indicates "no valid pointer"
• Avoids confusion about pointer validity
• Makes debugging easier

❌ WHY OTHER OPTIONS ARE WRONG:

a) Nothing, pointer is automatically nullified - INCORRECT
• C++ does NOT automatically nullify pointers after delete
• This is a common misconception
• Pointer retains old address value

c) Call delete ptr; again to be sure - INCORRECT  
• Calling delete twice on same pointer is undefined behavior
• Can cause program crash or heap corruption
• Very dangerous practice

d) Use ptr normally, delete doesn't affect it - INCORRECT
• delete DOES affect the memory ptr points to
• Using ptr after delete is undefined behavior
• Can corrupt program state or crash

🔧 SAFE POINTER PATTERNS:

PATTERN 1 - Immediate Nullification:
int* ptr = new int(42);
// ... use ptr ...
delete ptr;
ptr = nullptr;

PATTERN 2 - Check Before Use:
if (ptr != nullptr) {
    cout << *ptr;
    delete ptr;
    ptr = nullptr;
}

PATTERN 3 - RAII with Smart Pointers:
#include <memory>
std::unique_ptr<int> ptr = std::make_unique<int>(42);
// Automatic cleanup, no manual delete needed

⚠️ COMMON DANGLING POINTER BUGS:

BUG 1 - Use After Delete:
int* p = new int(42);
delete p;
cout << *p;              // CRASH!

BUG 2 - Double Delete:
int* p = new int(42);
delete p;
delete p;                // CRASH!

BUG 3 - Delete Stack Variable:
int x = 42;
int* p = &x;
delete p;                // CRASH!

💡 MODERN C++ ALTERNATIVES:
Instead of raw pointers, use smart pointers:

std::unique_ptr<int> ptr = std::make_unique<int>(42);
// Automatic memory management
// No need for manual delete
// No dangling pointer issues

🎯 BEST PRACTICES SUMMARY:
1. Always set pointers to nullptr after delete
2. Check for nullptr before dereferencing
3. Use smart pointers when possible
4. Never delete the same pointer twice
5. Never delete stack-allocated variables
6. Consider RAII patterns for automatic cleanup

🔍 DEBUGGING TOOLS:
• Valgrind: Detects use-after-free errors
• AddressSanitizer: Runtime pointer error detection  
• Static analysis: Compile-time dangling pointer warnings
• IDE warnings: Modern IDEs flag potential issues`
        }
    ]
};

// Export for use in main application
window.week6Data = week6Data;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = week6Data;
}
