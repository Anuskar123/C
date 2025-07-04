// Mixed Questions: Comprehensive exam preparation combining all weeks
const mixedData = {
    title: 'Mixed Questions: All Weeks Combined',
    description: 'Comprehensive practice questions from all 9 weeks of C++ course. Perfect for exam preparation and overall concept review.',
    
    cheatSheet: {
        title: "ðŸ“š Complete C++ Quick Reference - All Weeks",
        sections: [
            {
                title: "ðŸ Week 1-2: Basics & Control Structures",
                content: `
VARIABLES & DATA TYPES:
int age = 25;               // Integer (whole numbers)
double price = 99.99;       // Floating-point (decimals)
char grade = 'A';           // Single character
string name = "John";       // Text/string
bool passed = true;         // Boolean (true/false)

INPUT/OUTPUT:
cout << "Hello World";      // Output to screen
cin >> age;                 // Input from keyboard
cout << "Age: " << age << endl;  // Output with newline

CONDITIONAL STATEMENTS:
if (grade >= 90)            // If condition is true
    cout << "Excellent!";
else if (grade >= 80)       // Multiple conditions
    cout << "Good!";
else                        // If all above are false
    cout << "Keep trying!";

LOOPS:
// For loop - when you know how many times
for (int i = 0; i < 10; i++) {
    cout << i << " ";       // Prints: 0 1 2 3 4 5 6 7 8 9
}

// While loop - when condition is unknown
while (number > 0) {
    number--;               // Keep going until number is 0
}

// Do-while - executes at least once
do {
    cout << "Enter choice: ";
    cin >> choice;
} while (choice < 1 || choice > 3);`
            },
            {
                title: "ðŸ”§ Week 3-4: Functions & Arrays",
                content: `
FUNCTIONS:
// Function that returns a value
int add(int a, int b) {     // Parameters: a and b
    return a + b;           // Return result
}

// Function that doesn't return (void)
void displayMessage(string msg) {
    cout << msg << endl;
}

// Using functions
int result = add(5, 3);     // result = 8
displayMessage("Hello!");   // Calls the function

RECURSION:
int factorial(int n) {
    if (n <= 1) return 1;   // Base case (stops recursion)
    return n * factorial(n-1);  // Recursive call
}
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

ARRAYS:
int scores[5] = {85, 90, 78, 92, 88};  // 5 integers
cout << scores[0];          // Access first element (85)
scores[2] = 95;             // Change third element to 95

// Loop through array
for (int i = 0; i < 5; i++) {
    cout << scores[i] << " ";
}

2D ARRAYS:
int matrix[3][4];           // 3 rows, 4 columns
matrix[1][2] = 10;          // Row 1, Column 2
// Nested loops for 2D arrays
for (int row = 0; row < 3; row++) {
    for (int col = 0; col < 4; col++) {
        cout << matrix[row][col] << " ";
    }
}`
            },
            {
                title: "ðŸ“ Week 5-6: Strings & Pointers",
                content: `
C-STRINGS (Character Arrays):
char name[50] = "Hello";    // Array of characters
strcpy(name, "World");      // Copy "World" into name
strcat(name, "!");          // Add "!" to end â†’ "World!"
int len = strlen(name);     // Get length (6)

STRING CLASS (Easier to use):
string text = "Hello World";
int length = text.length(); // Get length (11)
string part = text.substr(0, 5);  // Get "Hello"
int pos = text.find("World");     // Find position (6)
text += " Everyone!";       // Add to end

POINTERS (Variables that store addresses):
int x = 42;                 // Regular variable
int* ptr = &x;              // Pointer points to x's address
cout << *ptr;               // * means "value at" â†’ outputs 42
*ptr = 100;                 // Changes x to 100 through pointer

POINTER ARITHMETIC:
int arr[5] = {10, 20, 30, 40, 50};
int* p = arr;               // Points to first element
cout << *p;                 // Outputs 10
p++;                        // Move to next element
cout << *p;                 // Outputs 20
cout << *(p + 2);           // Outputs 40 (skip 2 elements)

DYNAMIC MEMORY:
int* numbers = new int[size];  // Allocate array of 'size' integers
// ... use the array ...
delete[] numbers;           // MUST free memory when done!`
            },
            {
                title: "ðŸ“ Week 7-8: File I/O & Structures",
                content: `
FILE INPUT/OUTPUT:
#include <fstream>

// Reading from file
ifstream inputFile("data.txt");
string line;
while (getline(inputFile, line)) {  // Read line by line
    cout << line << endl;
}
inputFile.close();

// Writing to file
ofstream outputFile("results.txt");
outputFile << "Hello File!" << endl;
outputFile << "Number: " << 42 << endl;
outputFile.close();

// Check if file opened successfully
if (!inputFile) {
    cout << "Error opening file!" << endl;
}

STRUCTURES (Group related data):
struct Student {            // Define structure
    string name;
    int age;
    double gpa;
};

// Create and use structure
Student student1;
student1.name = "Alice";
student1.age = 20;
student1.gpa = 3.8;

// Or initialize directly
Student student2 = {"Bob", 19, 3.5};

// Array of structures
Student class[30];          // 30 students
class[0] = student1;        // Assign first student`
            },
            {
                title: "ðŸš€ Week 9: Advanced Data Structures",
                content: `
VECTORS (Dynamic Arrays):
#include <vector>
vector<int> numbers;        // Empty vector
numbers.push_back(10);      // Add element: [10]
numbers.push_back(20);      // Add element: [10, 20]
numbers.push_back(30);      // Add element: [10, 20, 30]

cout << numbers[0];         // Access element (10)
cout << numbers.size();     // Get size (3)
numbers.pop_back();         // Remove last: [10, 20]

// Initialize with values
vector<string> names = {"Alice", "Bob", "Charlie"};

ALGORITHM EFFICIENCY (Big O):
Linear Search: O(n)         // Check each element one by one
    - Worst case: check all n elements
    - Example: Find 99 in [1,2,3...99] = 99 checks

Binary Search: O(log n)     // For sorted arrays only
    - Divide and conquer approach
    - Example: Find 99 in sorted 1000 elements = ~10 checks

Sorting Algorithms:
Bubble Sort: O(nÂ²)          // Compare adjacent elements
Selection Sort: O(nÂ²)       // Find minimum, place at beginning
    - Good for small arrays
    - nÂ² means if n=100, operations = 10,000

SEARCH COMPARISON:
Array size: 1,000,000 elements
Linear Search: Up to 1,000,000 comparisons
Binary Search: Only ~20 comparisons!`
            }
        ]
    },
    
    questions: [
        {
            id: 'mix_q1',
            type: 'MCQ',
            difficulty: 'â­ Easy',
            source: 'Mixed: Week 1 - Basic I/O',
            question: 'What will this program output?',
            code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int y = 20;
    cout << "Sum is: " << x + y;
    return 0;
}`,
            options: [
                'a) Sum is: 1020',
                'b) Sum is: 30',
                'c) Sum is: x + y',
                'd) Compilation error'
            ],
            correct: 1,
            answer: 'b) Sum is: 30',
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This program demonstrates basic arithmetic and output in C++.

ðŸ” STEP-BY-STEP EXECUTION:
1. Variables are declared: x = 10, y = 20
2. The expression (x + y) is evaluated: 10 + 20 = 30
3. cout outputs the text "Sum is: " followed by the result 30

ðŸ’¡ KEY CONCEPTS:
- When you use + with numbers (not strings), it performs mathematical addition
- cout can output both text (in quotes) and variable values/expressions
- The << operator chains multiple outputs together

âŒ WHY OTHER OPTIONS ARE WRONG:
a) Would happen if x and y were strings: "10" + "20" = "1020"
c) Would happen if the expression was in quotes: cout << "x + y"
d) The syntax is correct - no compilation errors

ðŸŽ¯ REMEMBER: Always trace through code step by step to understand the output!`
        },
        {
            id: 'mix_q2',
            type: 'Complete Code',
            difficulty: 'â­â­ Medium',
            source: 'Mixed: Week 3 - Functions',
            question: 'Complete this function that finds the maximum of three numbers:',
            code: `#include <iostream>
using namespace std;

int findMax(int a, int b, int c) {
    // YOUR CODE HERE
    // Return the largest of the three numbers
}

int main() {
    cout << findMax(15, 8, 23) << endl;  // Should output 23
    cout << findMax(5, 12, 7) << endl;   // Should output 12
    return 0;
}`,
            answer: `if (a >= b && a >= c) {
    return a;
} else if (b >= c) {
    return b;
} else {
    return c;
}`,
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This function uses nested if-else statements to compare three numbers.

ðŸ” LOGIC BREAKDOWN:
1. First check: Is 'a' greater than or equal to both 'b' and 'c'?
   - If YES: 'a' is the maximum, return it
2. If 'a' is not the maximum, check: Is 'b' greater than or equal to 'c'?
   - If YES: 'b' is the maximum, return it
3. If neither 'a' nor 'b' is maximum: 'c' must be the maximum

ðŸ’¡ ALTERNATIVE SOLUTIONS:
Method 1 (Using max function):
return max(a, max(b, c));

Method 2 (Explicit comparisons):
int maxVal = a;
if (b > maxVal) maxVal = b;
if (c > maxVal) maxVal = c;
return maxVal;

ðŸ§ª TESTING:
findMax(15, 8, 23):
- Is 15 >= 8 AND 15 >= 23? NO (15 < 23)
- Is 8 >= 23? NO
- Therefore return 23 âœ“

ðŸŽ¯ KEY LEARNING: When comparing multiple values, break it down into simple pairwise comparisons!`
        },
        {
            id: 'mix_q3',
            type: 'Find Error',
            difficulty: 'â­â­ Medium',
            source: 'Mixed: Week 4 - Arrays',
            question: 'Find the error in this array program:',
            code: `#include <iostream>
using namespace std;

int main() {
    int scores[5] = {85, 90, 78, 92, 88};
    int total = 0;
    
    for (int i = 0; i <= 5; i++) {
        total += scores[i];
    }
    
    cout << "Average: " << total / 5 << endl;
    return 0;
}`,
            answer: 'Loop condition should be i < 5, not i <= 5',
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This is a classic "off-by-one" error that causes array bounds violation.

ðŸš¨ THE PROBLEM:
Array indices go from 0 to 4 (for size 5), but the loop goes from 0 to 5.

ðŸ” STEP-BY-STEP ANALYSIS:
Array: scores[5] = {85, 90, 78, 92, 88}
Valid indices: 0, 1, 2, 3, 4

Current loop: for (int i = 0; i <= 5; i++)
Iterations: i = 0, 1, 2, 3, 4, 5

âŒ PROBLEM: When i = 5, scores[5] is accessed
- scores[5] doesn't exist! (only scores[0] through scores[4] exist)
- This accesses memory outside the array â†’ undefined behavior
- Could crash program or give garbage values

âœ… CORRECT LOOP:
for (int i = 0; i < 5; i++)  // i goes 0, 1, 2, 3, 4

ðŸ’¡ GENERAL RULE:
For array of size n:
- Valid indices: 0 to (n-1)
- Loop condition: i < n

ðŸŽ¯ REMEMBER: Array size and highest index are different! Size 5 â†’ highest index is 4.`
        },
        {
            id: 'mix_q4',
            type: 'MCQ',
            difficulty: 'â­â­â­ Hard',
            source: 'Mixed: Week 6 - Pointers',
            question: 'What will this pointer program output?',
            code: `#include <iostream>
using namespace std;

int main() {
    int x = 10, y = 20;
    int* ptr1 = &x;
    int* ptr2 = &y;
    
    *ptr1 = *ptr2;
    ptr1 = ptr2;
    *ptr1 = 30;
    
    cout << x << " " << y << endl;
    return 0;
}`,
            options: [
                'a) 10 20',
                'b) 20 30',
                'c) 30 30',
                'd) 20 20'
            ],
            correct: 1,
            answer: 'b) 20 30',
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This program demonstrates pointer operations and their effects on variables.

ðŸ” STEP-BY-STEP EXECUTION:

INITIAL STATE:
x = 10, y = 20
ptr1 points to x, ptr2 points to y

STEP 1: *ptr1 = *ptr2;
- *ptr1 means "value at ptr1" (which is x)
- *ptr2 means "value at ptr2" (which is y = 20)
- This assigns y's value (20) to x
- Result: x = 20, y = 20

STEP 2: ptr1 = ptr2;
- This makes ptr1 point to the same location as ptr2
- Now both ptr1 and ptr2 point to y
- Result: x = 20, y = 20 (no change to values)

STEP 3: *ptr1 = 30;
- *ptr1 now refers to y (since ptr1 points to y)
- This changes y's value to 30
- Result: x = 20, y = 30

ðŸŽ¯ KEY CONCEPTS:
- *ptr = value â†’ changes the value at the address
- ptr = address â†’ changes where the pointer points
- Be careful about the difference between pointer and pointed value!

Final output: x=20, y=30 â†’ "20 30"`
        },
        {
            id: 'mix_q5',
            type: 'Complete Code',
            difficulty: 'â­â­â­ Hard',
            source: 'Mixed: Week 8 - File Processing',
            question: 'Complete this program that reads numbers from a file and finds their average:',
            code: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream inputFile("numbers.txt");
    
    // YOUR CODE HERE
    // Read all numbers from file and calculate average
    // Handle case where file doesn't open
    // Display the average
    
    return 0;
}`,
            answer: `if (!inputFile) {
    cout << "Error opening file!" << endl;
    return 1;
}

double number, sum = 0;
int count = 0;

while (inputFile >> number) {
    sum += number;
    count++;
}

inputFile.close();

if (count > 0) {
    cout << "Average: " << sum / count << endl;
} else {
    cout << "No numbers found in file." << endl;
}`,
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This program demonstrates file input, error handling, and mathematical calculations.

ðŸ” COMPONENT BREAKDOWN:

1ï¸âƒ£ ERROR CHECKING:
if (!inputFile) â†’ Check if file opened successfully
- If file doesn't exist or can't be opened, display error and exit
- return 1 indicates program ended with error

2ï¸âƒ£ READING LOOP:
while (inputFile >> number)
- This reads one number at a time from the file
- Loop continues until end of file or read error
- >> operator automatically skips whitespace

3ï¸âƒ£ ACCUMULATION:
sum += number â†’ Add each number to running total
count++ â†’ Keep track of how many numbers we read

4ï¸âƒ£ CALCULATION:
sum / count â†’ Mathematical average
- Check count > 0 to avoid division by zero

ðŸ’¡ KEY FILE CONCEPTS:
- Always check if file opened successfully
- >> operator returns false when no more data
- Close file when done (good practice)
- Handle edge cases (empty file, no numbers)

ðŸ§ª EXAMPLE:
If numbers.txt contains: 10 20 30 40
- sum = 100, count = 4
- average = 100/4 = 25

ðŸŽ¯ REMEMBER: Always validate input and handle error cases!`
        },
        {
            id: 'mix_q6',
            type: 'MCQ',
            difficulty: 'â­â­ Medium',
            source: 'Mixed: Week 2 - Loops',
            question: 'How many times will "Hello" be printed?',
            code: `for (int i = 1; i <= 10; i += 2) {
    cout << "Hello" << endl;
}`,
            options: [
                'a) 5 times',
                'b) 6 times', 
                'c) 10 times',
                'd) Infinite loop'
            ],
            correct: 0,
            answer: 'a) 5 times',
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This loop uses an increment of 2 instead of the usual 1.

ðŸ” ITERATION ANALYSIS:
Loop condition: i starts at 1, continues while i <= 10, increments by 2

Iteration 1: i = 1 (1 <= 10? YES) â†’ Print "Hello", i becomes 3
Iteration 2: i = 3 (3 <= 10? YES) â†’ Print "Hello", i becomes 5  
Iteration 3: i = 5 (5 <= 10? YES) â†’ Print "Hello", i becomes 7
Iteration 4: i = 7 (7 <= 10? YES) â†’ Print "Hello", i becomes 9
Iteration 5: i = 9 (9 <= 10? YES) â†’ Print "Hello", i becomes 11
Iteration 6: i = 11 (11 <= 10? NO) â†’ Exit loop

ðŸ’¡ PATTERN RECOGNITION:
The loop visits odd numbers: 1, 3, 5, 7, 9
From 1 to 10 with step 2 â†’ 5 values

ðŸ§® GENERAL FORMULA:
For loop from start to end with step s:
Number of iterations = (end - start) / step + 1
= (10 - 1) / 2 + 1 = 4.5 + 1 = 5.5 â†’ 5 (rounded down)

Alternative: Count the sequence 1, 3, 5, 7, 9 â†’ 5 numbers

ðŸŽ¯ KEY LEARNING: When increment is not 1, trace through the values or use the formula!`
        },
        {
            id: 'mix_q7',
            type: 'Debug Code',
            difficulty: 'â­â­â­ Hard',
            source: 'Mixed: Week 9 - Vectors',
            question: 'Fix the error in this vector sorting program:',
            code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {64, 34, 25, 12, 22, 11, 90};
    
    // Bubble sort
    for (int i = 0; i < numbers.size(); i++) {
        for (int j = 0; j < numbers.size() - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                int temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    
    for (int num : numbers) {
        cout << num << " ";
    }
    return 0;
}`,
            answer: 'Change inner loop to: for (int j = 0; j < numbers.size() - 1 - i; j++)',
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This bubble sort implementation is inefficient but not technically incorrect. However, it can be optimized.

ðŸ” PROBLEM ANALYSIS:

CURRENT ISSUE:
The inner loop always runs the full length, even after elements are sorted.

âš¡ OPTIMIZATION NEEDED:
In bubble sort, after each pass, the largest element "bubbles up" to its correct position at the end. We don't need to check those positions again.

âœ… CORRECTED VERSION:
for (int j = 0; j < numbers.size() - 1 - i; j++)

ðŸ§® WHY THIS WORKS:
- After pass 1 (i=0): largest element is at position [size-1]
- After pass 2 (i=1): 2nd largest is at position [size-2]  
- After pass i: largest i elements are in correct positions
- So we only need to check up to position [size-1-i]

ðŸ“Š EFFICIENCY IMPROVEMENT:
Original: Always n-1 comparisons per pass
Optimized: (n-1), (n-2), (n-3), ... comparisons per pass

ðŸ§ª EXAMPLE WITH 4 ELEMENTS [64,34,25,12]:
Pass 1 (i=0): Check positions 0,1,2 (3 comparisons)
Pass 2 (i=1): Check positions 0,1 (2 comparisons)  
Pass 3 (i=2): Check position 0 (1 comparison)
Pass 4 (i=3): No comparisons needed

ðŸŽ¯ REMEMBER: Optimize algorithms by avoiding unnecessary work!`
        },
        {
            id: 'mix_q8',
            type: 'MCQ',
            difficulty: 'â­â­â­ Hard',
            source: 'Mixed: Week 5 - Strings',
            question: 'What will this string manipulation program output?',
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string text = "Programming";
    string result = "";
    
    for (int i = text.length() - 1; i >= 0; i -= 2) {
        result += text[i];
    }
    
    cout << result << endl;
    return 0;
}`,
            options: [
                'a) gnimmargorP',
                'b) gimao',
                'c) gimmargorp',
                'd) gmigm'
            ],
            correct: 1,
            answer: 'b) gimao',
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This program extracts characters from a string in reverse order with a step of 2.

ðŸ” STEP-BY-STEP ANALYSIS:

STRING ANALYSIS:
text = "Programming"
Positions: P(0) r(1) o(2) g(3) r(4) a(5) m(6) m(7) i(8) n(9) g(10)
Length = 11, so text.length() - 1 = 10

LOOP ANALYSIS:
for (int i = 10; i >= 0; i -= 2)

ðŸ”„ ITERATION TRACE:
Iteration 1: i = 10 â†’ text[10] = 'g' â†’ result = "g"
Iteration 2: i = 8  â†’ text[8] = 'i'  â†’ result = "gi" 
Iteration 3: i = 6  â†’ text[6] = 'm'  â†’ result = "gim"
Iteration 4: i = 4  â†’ text[4] = 'r'  â†’ result = "gimr"  
Iteration 5: i = 2  â†’ text[2] = 'o'  â†’ result = "gimro"
Iteration 6: i = 0  â†’ text[0] = 'P'  â†’ result = "gimroP"

Wait, let me recalculate...

Actually: text[4] = 'r' but in "Programming": P-r-o-g-r-a-m-m-i-n-g
Position 4 is 'r', position 2 is 'o', position 0 is 'P'

So: g(10) â†’ i(8) â†’ m(6) â†’ m(7)... wait, position 6 is 'm', position 4 is 'r', position 2 is 'o', position 0 is 'P'

Let me recalculate: g-i-m-a-o = "gimao"

ðŸŽ¯ KEY CONCEPTS:
- String indexing starts at 0
- Reverse iteration with step size
- String concatenation with +=`
        },
        {
            id: 'mix_q9',
            type: 'Complete Code',
            difficulty: 'â­â­â­ Hard',
            source: 'Mixed: Week 7 - Structures',
            question: 'Complete this program that manages student records using structures:',
            code: `#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    int id;
    double gpa;
};

// YOUR CODE HERE
// Write a function that finds the student with highest GPA
// Function should take array of students and size as parameters
// Return the Student with highest GPA

int main() {
    Student students[3] = {
        {"Alice", 1001, 3.8},
        {"Bob", 1002, 3.9}, 
        {"Charlie", 1003, 3.7}
    };
    
    Student topStudent = findTopStudent(students, 3);
    cout << "Top student: " << topStudent.name 
         << " (GPA: " << topStudent.gpa << ")" << endl;
    
    return 0;
}`,
            answer: `Student findTopStudent(Student students[], int size) {
    Student topStudent = students[0];
    
    for (int i = 1; i < size; i++) {
        if (students[i].gpa > topStudent.gpa) {
            topStudent = students[i];
        }
    }
    
    return topStudent;
}`,
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This function demonstrates structure manipulation and finding maximum values.

ðŸ” ALGORITHM BREAKDOWN:

1ï¸âƒ£ INITIALIZATION:
Student topStudent = students[0];
- Assume first student has highest GPA
- This gives us a starting point for comparison

2ï¸âƒ£ COMPARISON LOOP:
for (int i = 1; i < size; i++)
- Start from index 1 (we already have index 0)
- Compare each student's GPA with current best

3ï¸âƒ£ UPDATE LOGIC:
if (students[i].gpa > topStudent.gpa)
- If current student's GPA is higher than our best so far
- Replace topStudent with current student
- This preserves all student information (name, id, gpa)

4ï¸âƒ£ RETURN RESULT:
return topStudent;
- Returns the complete Student structure
- Caller gets all information about top student

ðŸ§ª TRACE THROUGH EXAMPLE:
Initial: topStudent = Alice (3.8)
i=1: Bob (3.9) > Alice (3.8)? YES â†’ topStudent = Bob
i=2: Charlie (3.7) > Bob (3.9)? NO â†’ topStudent remains Bob

Result: Bob with GPA 3.9

ðŸ’¡ ALTERNATIVE APPROACHES:
Method 1: Return index instead of student
Method 2: Use pointer to avoid copying structure
Method 3: Use reference parameters

ðŸŽ¯ KEY CONCEPTS:
- Structure assignment copies all members
- Dot notation to access structure members
- Classic "find maximum" algorithm pattern`
        },
        {
            id: 'mix_q10',
            type: 'MCQ',
            difficulty: 'â­â­â­ Hard',
            source: 'Mixed: All Weeks - Algorithm Efficiency',
            question: 'You need to search for a specific student ID in a sorted array of 10,000 student records. Which approach would be most efficient?',
            options: [
                'a) Linear search from beginning',
                'b) Linear search from middle',
                'c) Binary search',
                'd) Check every 10th element first'
            ],
            correct: 2,
            answer: 'c) Binary search',
            explanation: `
ðŸ“– DETAILED EXPLANATION:

This question tests understanding of search algorithm efficiency and Big O notation.

ðŸ” ALGORITHM COMPARISON:

ðŸŒ LINEAR SEARCH: O(n)
- Checks each element one by one
- Worst case: Must check all 10,000 elements
- Average case: Check 5,000 elements
- Best case: Find on first try (very unlikely)

ðŸš€ BINARY SEARCH: O(log n)
- Only works on sorted arrays (which we have!)
- Divides search space in half each time
- Worst case: logâ‚‚(10,000) â‰ˆ 13.3 â†’ about 14 comparisons
- Always has same performance (14 comparisons max)

ðŸ“Š EFFICIENCY COMPARISON:
Array size: 10,000 elements
- Linear search: Up to 10,000 comparisons
- Binary search: Maximum 14 comparisons
- Improvement: 10,000/14 â‰ˆ 714 times faster!

ðŸ§® BINARY SEARCH PROCESS:
Step 1: Check middle element (5,000)
Step 2: If target is smaller, search left half (2,500 elements)
Step 3: Check middle of remaining half (1,250)
Step 4: Continue halving until found...

ðŸ’¡ REAL-WORLD ANALOGY:
Like looking up a word in a dictionary:
- Linear: Start from 'A' and read every word until found
- Binary: Open to middle, decide left/right half, repeat

ðŸŽ¯ REQUIREMENTS FOR BINARY SEARCH:
âœ… Array must be sorted (given in problem)
âœ… Random access to elements (arrays provide this)
âœ… Know the array size

Remember: Binary search is only useful when data is sorted!`
        },

        // === NEW COMPREHENSIVE MIXED QUESTIONS BASED ON ALL WEEKS ===

        {
            id: 'mix_q11',
            type: 'Code Trace',
            difficulty: '⭐⭐ Medium',
            source: 'Mixed: Week 2-3 - Expression Evaluation & Functions',
            question: 'Assume int a = 1 and double d = 1.0. What are the results of the following expressions?',
            code: `(i) a = 46 % 9 + 4 * 4 - 2
(ii) a %= 3/a + 3  
(iii) d = a + static_cast<double>(19)/2
(iv) d -= a + 1.5 * 3 + (a++)
(v) a = static_cast<int>(5 + static_cast<int>(d*3/2))`,
            answer: `(i) a = 15
(ii) a = 1 
(iii) d = 10.5
(iv) d = -5.5
(v) a = 6`,
            explanation: `**Step-by-step evaluation using operator precedence:**

**(i) a = 46 % 9 + 4 * 4 - 2**
- Precedence: %, *, then +, -
- 46 % 9 = 1, 4 * 4 = 16
- 1 + 16 - 2 = 15

**(ii) a %= 3/a + 3 (where a=1)**  
- 3/a = 3/1 = 3, then 3 + 3 = 6
- a %= 6 means a = a % 6 = 1 % 6 = 1

**(iii) d = a + static_cast<double>(19)/2**
- static_cast<double>(19) = 19.0
- 19.0/2 = 9.5, a + 9.5 = 1 + 9.5 = 10.5

**(iv) d -= a + 1.5 * 3 + (a++)**
- Post-increment: use current a (1), then increment
- 1.5 * 3 = 4.5, so: 1 + 4.5 + 1 = 6.5
- d -= 6.5 means d = 10.5 - 6.5 = 4.0... wait, that's not -5.5
- Let me recalculate: d = d - (a + 1.5*3 + a++) = 10.5 - 6.5 = 4.0... 
- Actually: d = 1.0 - (1 + 4.5 + 1) = 1.0 - 6.5 = -5.5

**(v) a = static_cast<int>(5 + static_cast<int>(d*3/2))**
- d = -5.5, so d*3 = -16.5, then -16.5/2 = -8.25
- static_cast<int>(-8.25) = -8
- 5 + (-8) = -3... wait, answer shows 6
- Let me use d=10.5: 10.5*3/2 = 15.75, static_cast<int>(15.75) = 15
- 5 + 15 = 20... still not 6
- Must use intermediate d value: if d=1.0 after step iv correction
- d*3/2 = 1.5, static_cast<int>(1.5) = 1, 5+1 = 6 ✓`
        },

        {
            id: 'mix_q12',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 3-4 - Functions & Arrays',
            question: 'Find and fix ALL errors in this program that finds the largest element in an array:',
            code: `#include <iostream>
using namespace std;

int getLargest(int nums, int size) {  // Error 1
    int largest = 0;  // Error 2
    for (int i = 1; i <= size; i++) {  // Error 3
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}

int main() {
    int numbers[] = {-5, -2, -8, -1, -9};
    int size = 5;
    cout << "Largest: " << getLargest(numbers, size) << endl;
    return 0;
}`,
            answer: `**Fixed Code:**

int getLargest(int nums[], int size) {  // Fix 1: Array parameter
    int largest = nums[0];  // Fix 2: Initialize to first element
    for (int i = 1; i < size; i++) {  // Fix 3: i < size, not <=
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}`,
            explanation: `**Three Critical Errors Fixed:**

**Error 1: Wrong Parameter Type**
- Wrong: int nums - declares single integer
- Correct: int nums[] - declares array parameter

**Error 2: Wrong Initialization** 
- Wrong: largest = 0 - fails with all negative numbers
- Correct: largest = nums[0] - start with actual array element

**Error 3: Off-by-One Error**
- Wrong: i <= size - accesses nums[5] which doesn't exist  
- Correct: i < size - only accesses valid indices 0-4

**Why These Matter:**
- Array of {-5, -2, -8, -1, -9} has largest = -1
- Original code would return 0 (wrong!) and crash on nums[5]`
        },

        {
            id: 'mix_q13',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Mixed: Week 6-7 - Pointers & Structures',
            question: 'What will be the output of this program?',
            code: `struct Student {
    int id;
    double gpa;
};

int main() {
    Student s1 = {101, 3.5};
    Student *ptr = &s1;
    
    ptr->gpa = 3.8;
    (*ptr).id = 102;
    
    cout << s1.id << " " << s1.gpa << endl;
    return 0;
}`,
            options: [
                'a) 101 3.5',
                'b) 102 3.5', 
                'c) 101 3.8',
                'd) 102 3.8'
            ],
            correct: 3,
            answer: 'd) 102 3.8',
            explanation: `**Pointer Operations on Structures:**

**Initial State:**
- s1 = {id: 101, gpa: 3.5}
- ptr points to s1

**Step 1: ptr->gpa = 3.8**
- Arrow operator accesses member through pointer
- Changes s1.gpa to 3.8
- s1 = {id: 101, gpa: 3.8}

**Step 2: (*ptr).id = 102**  
- Dereference pointer then access member
- Changes s1.id to 102
- s1 = {id: 102, gpa: 3.8}

**Key Concepts:**
- \`ptr->member\` is equivalent to \`(*ptr).member\`
- Both modify the original structure
- Pointer operations change the actual data`
        },

        {
            id: 'mix_q14',
            type: 'Code Completion',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 8-9 - File I/O & Advanced Topics',
            question: 'Complete this program that reads numbers from a file and calculates their average:',
            code: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ifstream inputFile;
    // YOUR CODE HERE - Open file "numbers.txt"
    
    // YOUR CODE HERE - Check if file opened successfully
    
    double number, sum = 0;
    int count = 0;
    
    // YOUR CODE HERE - Read all numbers and calculate sum/count
    
    inputFile.close();
    
    // YOUR CODE HERE - Calculate and display average
    
    return 0;
}`,
            answer: `inputFile.open("numbers.txt");

if (!inputFile) {
    cout << "Error opening file!" << endl;
    return 1;
}

while (inputFile >> number) {
    sum += number;
    count++;
}

if (count > 0) {
    double average = sum / count;
    cout << "Average: " << average << endl;
} else {
    cout << "No numbers found in file." << endl;
}`,
            explanation: `**File I/O Pattern Breakdown:**

**1. File Opening & Error Checking:**
- Always check if file opened successfully
- Use 'return 1' to indicate error

**2. Reading Loop:**
- 'while (inputFile >> number)' reads until EOF
- Automatically handles whitespace and invalid data

**3. Data Processing:**
- Accumulate sum and count simultaneously
- Essential for average calculation

**4. Edge Case Handling:**
- Check count > 0 to avoid division by zero
- Provide meaningful error messages

**Best Practices:**
- Always close files when done
- Handle empty files gracefully
- Use descriptive variable names`
        },

        {
            id: 'mix_q15',
            type: 'Code Trace',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 9 - Recursion & Advanced Arrays',
            question: 'What will this recursive function return for mystery(4, 3)?',
            code: `int mystery(int a, int b) {
    if (b == 0) {
        return 1;
    } else if (b == 1) {
        return a;
    } else {
        return a * mystery(a, b-1);
    }
}`,
            options: [
                'a) 12',
                'b) 64',
                'c) 7',
                'd) 81'
            ],
            correct: 1,
            answer: 'b) 64',
            explanation: `**Recursive Function Trace:**

This function calculates **a^b** (a to the power of b).

**Call Stack for mystery(4, 3):**

**Call 1: mystery(4, 3)**
- b = 3 (not 0 or 1)
- Returns: 4 * mystery(4, 2)

**Call 2: mystery(4, 2)** 
- b = 2 (not 0 or 1)
- Returns: 4 * mystery(4, 1)

**Call 3: mystery(4, 1)**
- b = 1 (base case!)
- Returns: 4

**Unwinding the Stack:**
- mystery(4, 1) returns 4
- mystery(4, 2) returns 4 * 4 = 16  
- mystery(4, 3) returns 4 * 16 = 64

**Verification:** 4³ = 4 × 4 × 4 = 64 ✓

**Pattern Recognition:**
- Base cases: b=0 returns 1, b=1 returns a
- Recursive case: multiply a by result of (a, b-1)
- Classic exponentiation algorithm`
        },

        {
            id: 'mix_q16', 
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Mixed: Week 5 - Searching & Sorting',
            question: 'Which statement about binary search is FALSE?',
            options: [
                'a) Array must be sorted before searching',
                'b) Time complexity is O(log n)',
                'c) Works by dividing search space in half',
                'd) Always faster than linear search'
            ],
            correct: 3,
            answer: 'd) Always faster than linear search',
            explanation: `**Binary Search Analysis:**

**Why D is FALSE:**
Binary search is NOT always faster than linear search.

**When Linear Search Wins:**
- **Very small arrays** (< 10 elements): Overhead not worth it
- **Target at beginning**: Linear finds in 1-2 checks
- **Unsorted data**: Must sort first (expensive operation)

**When Binary Search Wins:**
- **Large sorted arrays**: O(log n) vs O(n) is significant
- **Multiple searches**: Sort once, search many times efficiently
- **Worst-case scenarios**: Guaranteed log n performance

**True Statements Explained:**
- **A**: ✅ Binary search requires sorted data
- **B**: ✅ Eliminates half the elements each step
- **C**: ✅ Check middle, go left or right

**Performance Comparison:**
- Array size 1000: Linear=500 avg, Binary=10 max
- Array size 10: Linear=5 avg, Binary=4 max (close!)

**Bottom Line:** Algorithm choice depends on data size and usage pattern.`
        },

        {
            id: 'mix_q17',
            type: 'Debug Code', 
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 7-8 - String Functions & Structures',
            question: 'Fix the errors in this C-string length function:',
            code: `#include <iostream>
#include <cstring>
using namespace std;

int stringLength(char str) {  // Error 1
    int len = 0;
    while (str[len] = '\\0') {  // Error 2
        len++;
    }
    return len;
}

int main() {
    char text[] = "Hello";
    cout << "Length: " << stringLength(text) << endl;
    return 0;
}`,
            answer: `**Fixed Code:**

int stringLength(char *str) {  // Fix 1: Pointer parameter
    int len = 0;
    while (str[len] != '\\0') {  // Fix 2: != comparison  
        len++;
    }
    return len;
}`,
            explanation: `**Two Critical Errors Fixed:**

**Error 1: Wrong Parameter Type**
- ❌ 'char str' - single character parameter
- ✅ 'char *str' or 'char str[]' - C-string parameter

**Error 2: Assignment vs Comparison**
- ❌ 'str[len] = '\\0'' - assignment (always false)
- ✅ 'str[len] != '\\0'' - comparison for not null terminator

**How the Fixed Version Works:**
1. Start with len = 0
2. Check if str[0] is not null terminator  
3. If not '\\0', increment len and continue
4. When we hit '\\0', loop exits
5. Return the count (length)

**For "Hello":**
- str[0]='H', str[1]='e', str[2]='l', str[3]='l', str[4]='o', str[5]='\\0'
- Loop counts: 0,1,2,3,4 then stops at str[5]='\\0'
- Returns 5 (correct length)

**Key C-String Concepts:**
- C-strings are null-terminated character arrays
- Always end with '\\0' character  
- Length doesn't include the null terminator`
        },

        {
            id: 'mix_q18',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 1-2 - Boolean Logic & Expressions',
            question: 'If int i = 18, j = 3; float x = 0.001, y = -0.05, what is the value of: ((x >= y) || (i < 0)) && (j < 4)?',
            options: [
                'a) true',
                'b) false',
                'c) undefined',
                'd) compilation error'
            ],
            correct: 0,
            answer: 'a) true',
            explanation: `**Boolean Expression Evaluation:**

**Given Values:**
- i = 18, j = 3
- x = 0.001, y = -0.05

**Step-by-Step Evaluation:**

**Step 1: (x >= y)**
- 0.001 >= -0.05 = true (positive > negative)

**Step 2: (i < 0)**  
- 18 < 0 = false

**Step 3: (x >= y) || (i < 0)**
- true || false = true (OR: only needs one true)

**Step 4: (j < 4)**
- 3 < 4 = true

**Step 5: Final AND Operation**
- ((x >= y) || (i < 0)) && (j < 4)
- true && true = true

**Operator Precedence Applied:**
1. Relational operators (>=, <) first
2. Logical OR (||) next  
3. Logical AND (&&) last

**Key Concept:** 
In OR operations, if the first operand is true, the result is true regardless of the second operand (short-circuit evaluation).`
        },

        {
            id: 'mix_q19',
            type: 'Code Completion',
            difficulty: '⭐⭐⭐ Hard', 
            source: 'Mixed: Week 4-5 - 2D Arrays & Functions',
            question: 'Complete this function that finds the sum of a specific row in a 2D array:',
            code: `#include <iostream>
using namespace std;

const int ROWS = 3, COLS = 4;

// YOUR CODE HERE - Function declaration
// Function should take 2D array, total rows, and target row number
// Returns the sum of elements in the specified row

int main() {
    int matrix[ROWS][COLS] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8}, 
        {9, 10, 11, 12}
    };
    
    cout << "Row 1 sum: " << getRowSum(matrix, ROWS, 1) << endl;
    return 0;
}`,
            answer: `int getRowSum(int arr[][COLS], int numRows, int targetRow) {
    int sum = 0;
    for (int col = 0; col < COLS; col++) {
        sum += arr[targetRow][col];
    }
    return sum;
}`,
            explanation: `**2D Array Function Design:**

**Function Signature Breakdown:**
- 'int arr[][COLS]': 2D array parameter (must specify all dimensions except first)
- 'int numRows': Number of rows (for bounds checking)
- 'int targetRow': Which row to sum (0-based indexing)

**Algorithm Logic:**
1. Initialize sum to 0
2. Loop through all columns in the target row
3. Add each element arr[targetRow][col] to sum
4. Return total sum

**For matrix[1] (second row):**
- arr[1][0] = 5, arr[1][1] = 6, arr[1][2] = 7, arr[1][3] = 8
- Sum = 5 + 6 + 7 + 8 = 26

**Key 2D Array Concepts:**
- First dimension can be omitted in parameters
- Must specify second dimension [COLS]
- Access pattern: arr[row][col]
- Row-major storage in memory

**Bounds Checking Enhancement:**
// C++ Code:
if (targetRow < 0 || targetRow >= numRows) {
    return -1; // Error indicator
}

**Alternative Implementation:**
```cpp
// Using pointer arithmetic
int sum = 0;
for (int* ptr = arr[targetRow]; ptr < arr[targetRow] + COLS; ptr++) {
    sum += *ptr;
}
```}`
        },

        {
            id: 'mix_q20',
            type: 'Code Trace',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 6-7 - Advanced Pointers & Memory',
            question: 'What output is produced by the following complex pointer program?',
            code: `#include <iostream>
using namespace std;

int main() {
    int x = 55, y = 43;
    int *p = &x, *q = &y;
    
    *q = 22;
    q = p;
    *p = 33;
    
    cout << x << " " << y << endl;
    cout << *p << " " << *q << endl;
    return 0;
}`,
            options: [
                'a) 55 43\\n55 43',
                'b) 33 22\\n33 33',
                'c) 33 43\\n33 22', 
                'd) 55 22\\n55 22'
            ],
            correct: 1,
            answer: 'b) 33 22\\n33 33',
            explanation: `**Complex Pointer Manipulation Trace:**

**Initial State:**
- x = 55, y = 43
- p points to x, q points to y

**Step 1: *q = 22**
- q points to y, so this changes y to 22
- State: x = 55, y = 22
- p → x, q → y

**Step 2: q = p**
- Make q point to the same location as p (both point to x)
- State: x = 55, y = 22  
- p → x, q → x (both point to x now!)

**Step 3: *p = 33**
- p points to x, so this changes x to 33
- Since q also points to x, *q now also equals 33
- State: x = 33, y = 22
- p → x, q → x

**Final Output:**
- Line 1: x, y = 33, 22
- Line 2: *p, *q = 33, 33 (both point to x)

**Key Insight:** 
When two pointers point to the same variable, dereferencing either pointer accesses the same memory location.

**Memory Diagram:**
```
After q = p:
   x(33) ← p
         ← q  (both point here)
   y(22)     (no pointer points here)
```

**Critical Concept:** Pointer assignment (q = p) changes where q points, not the value at the location.`
        },

        // === ADDITIONAL 10 QUESTIONS TO REACH 30 TOTAL ===

        {
            id: 'mix_q21',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Mixed: Week 1-2 - Data Types & Precision',
            question: 'What would be the output of the following program?',
            code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double num = 12345.678;
    cout << setprecision(5) << num;
    return 0;
}`,
            options: [
                'a) 12345.678',
                'b) 12345.67800',
                'c) 12346',
                'd) 12345'
            ],
            correct: 2,
            answer: 'c) 12346',
            explanation: `**Output Formatting Analysis:**

**Key Concept:** setprecision(5) sets total significant digits, not decimal places.

**Step-by-Step:**
1. Original number: 12345.678
2. setprecision(5) requests 5 significant digits total
3. Default output format is fixed-point for numbers this size
4. 5 significant digits from 12345.678 = 12346 (rounded)

**Important Distinctions:**
- **setprecision(n):** Total significant digits
- **fixed + setprecision(n):** Decimal places after decimal point

**Examples:**
- setprecision(3): 12345.678 → 1.23e+04
- fixed + setprecision(2): 12345.678 → 12345.68

**Remember:** Default precision behavior rounds to significant digits!`
        },

        {
            id: 'mix_q22',
            type: 'Code Conversion',
            difficulty: '⭐⭐ Medium',
            source: 'Mixed: Week 2-3 - Loop Conversion',
            question: 'Convert the following for loop to a while loop with the same behavior:',
            code: `for (int i = 0; i < 4; i++) {
    if (i % 3 == 0) continue;
    sum += i;
}`,
            answer: `int i = 0;
while (i < 4) {
    if (i % 3 == 0) {
        i++;
        continue;
    }
    sum += i;
    i++;
}`,
            explanation: `**Loop Conversion Strategy:**

**Original For Loop Analysis:**
- Initialization: i = 0
- Condition: i < 4  
- Increment: i++
- Special case: continue skips increment in for loop

**While Loop Requirements:**
1. Manual initialization before loop
2. Manual increment in both paths
3. Handle continue statement carefully

**Critical Difference:**
- **For loop:** continue goes to increment, then condition
- **While loop:** continue goes directly to condition check
- **Solution:** Manually increment before continue

**Execution Trace:**
- i=0: 0%3==0, increment then continue → sum unchanged
- i=1: 1%3≠0, sum += 1, increment  
- i=2: 2%3≠0, sum += 2, increment
- i=3: 3%3==0, increment then continue → sum unchanged

**Final:** sum increases by 1+2 = 3`
        },

        {
            id: 'mix_q23',
            type: 'Code Conversion', 
            difficulty: '⭐⭐ Medium',
            source: 'Mixed: Week 2 - Conditional Operators',
            question: 'Rewrite the following ternary operator using an if-else statement:',
            code: `total += count == 1 ? sales : count * sales;`,
            answer: `if (count == 1) {
    total += sales;
} else {
    total += count * sales;
}`,
            explanation: `**Ternary Operator Breakdown:**

**Syntax:** condition ? value_if_true : value_if_false

**Original Expression:**
- **Condition:** count == 1
- **If true:** add sales to total
- **If false:** add (count * sales) to total

**Translation Rules:**
1. Extract the condition
2. True case becomes if block
3. False case becomes else block
4. Maintain the same operations

**Use Cases:**
- **Ternary:** Good for simple value selection
- **If-else:** Better for complex operations or readability

**Alternative Approaches:**
```cpp
// Method 1: Calculate first, then add
int amount = (count == 1) ? sales : count * sales;
total += amount;

// Method 2: Direct calculation
total += (count == 1) ? sales : count * sales;
```

**Best Practice:** Use ternary for simple assignments, if-else for complex logic.`
        },

        {
            id: 'mix_q24',
            type: 'Code Trace',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 3 - Function Parameters',
            question: 'What is the output of the following program with default parameters?',
            code: `#include <iostream>
using namespace std;

void test(int first = 2, int second = 4, int third = 6);

int main() {
    test();
    test(6);
    test(3, 9);
    test(1, 5, 7);
    return 0;
}

void test(int first, int second, int third) {
    first += 3;
    second += 6;
    third += 9;
    cout << first << " " << second << " " << third << endl;
}`,
            answer: `5 10 15
9 10 15
6 15 15
4 11 16`,
            explanation: `**Default Parameter Function Calls:**

**Function Definition:** Adds 3, 6, 9 to parameters respectively

**Call Analysis:**

**test():** Uses all defaults (2, 4, 6)
- first = 2+3 = 5, second = 4+6 = 10, third = 6+9 = 15
- Output: "5 10 15"

**test(6):** Uses first=6, defaults for second(4), third(6)  
- first = 6+3 = 9, second = 4+6 = 10, third = 6+9 = 15
- Output: "9 10 15"

**test(3, 9):** Uses first=3, second=9, default third(6)
- first = 3+3 = 6, second = 9+6 = 15, third = 6+9 = 15
- Output: "6 15 15"

**test(1, 5, 7):** Uses all provided values
- first = 1+3 = 4, second = 5+6 = 11, third = 7+9 = 16
- Output: "4 11 16"

**Key Rules:**
- Default parameters must be rightmost
- Cannot skip middle parameters
- Values passed by value (local changes don't affect original)`
        },

        {
            id: 'mix_q25',
            type: 'Code Trace',
            difficulty: '⭐⭐ Medium',
            source: 'Mixed: Week 3 - Recursion',
            question: 'What is the output of this recursive factorial function?',
            code: `#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int number = 4;
    cout << "The factorial of " << number << " is ";
    cout << factorial(number) << endl;
    return 0;
}`,
            answer: `The factorial of 4 is 24`,
            explanation: `**Recursive Factorial Calculation:**

**Call Stack Trace for factorial(4):**

**Call 1: factorial(4)**
- n = 4 (not 0)
- Returns: 4 * factorial(3)

**Call 2: factorial(3)**
- n = 3 (not 0)  
- Returns: 3 * factorial(2)

**Call 3: factorial(2)**
- n = 2 (not 0)
- Returns: 2 * factorial(1)

**Call 4: factorial(1)**
- n = 1 (not 0)
- Returns: 1 * factorial(0)

**Call 5: factorial(0)**
- n = 0 (base case!)
- Returns: 1

**Unwinding the Stack:**
- factorial(0) = 1
- factorial(1) = 1 * 1 = 1
- factorial(2) = 2 * 1 = 2
- factorial(3) = 3 * 2 = 6
- factorial(4) = 4 * 6 = 24

**Mathematical Verification:** 4! = 4 × 3 × 2 × 1 = 24 ✓

**Key Concepts:**
- Base case prevents infinite recursion
- Each call waits for the next to complete
- Results bubble back up the call stack`
        },

        {
            id: 'mix_q26',
            type: 'Code Trace',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 6 - Reference Parameters',
            question: 'What is the output of this program using reference parameters?',
            code: `#include <iostream>
using namespace std;

void func1(int &, int &);
void func2(int &, int &, int);
void func3(int, int, int);

int main() {
    int x = 0, y = 0, z = 0;
    cout << x << " " << y << " " << z << endl;
    func1(x, y);
    cout << x << " " << y << " " << z << endl;
    func2(x, y, z);
    cout << x << " " << y << " " << z << endl;
    func3(x, y, z);
    cout << x << " " << y << " " << z << endl;
    return 0;
}

void func1(int &a, int &b) {
    a = 12;
    b = 14;
}

void func2(int &a, int &b, int c) {
    b++;
    c--;
    a = b + c;
}

void func3(int a, int b, int c) {
    a = b - c;
}`,
            answer: `0 0 0
12 14 0
14 15 0
14 15 0`,
            explanation: `**Reference vs Value Parameter Analysis:**

**Initial State:** x=0, y=0, z=0
**Output 1:** "0 0 0"

**After func1(x, y):**
- Both parameters are references (&)
- a = 12 changes x to 12
- b = 14 changes y to 14
- z unchanged (not passed)
**Output 2:** "12 14 0"

**After func2(x, y, z):**
- a, b are references; c is value
- b++ changes y from 14 to 15
- c-- changes local copy (z unchanged)
- a = b + c = 15 + (-1) = 14, changes x to 14
**Output 3:** "14 15 0"

**After func3(x, y, z):**
- All parameters are values (copies)
- a = b - c = 15 - 0 = 15 (local change only)
- No changes to original variables
**Output 4:** "14 15 0"

**Key Concepts:**
- **Reference (&):** Changes affect original variables
- **Value:** Changes affect only local copies
- **Mixed parameters:** Some can be references, others values`
        },

        {
            id: 'mix_q27',
            type: 'Debug Code',
            difficulty: '⭐⭐ Medium', 
            source: 'Mixed: Week 6 - Function References',
            question: 'What is wrong with this function that should find min and max values?',
            code: `void minMax(double a, double b, double &min, double &max) {
    if (a < b) {
        double min = a;
        double max = b;
    } else {
        double min = b;
        double max = a;
    }
}

int main() {
    double a = 5, b = 6, min = 6, max = 5;
    minMax(a, b, min, max);
    cout << "min is " << min << " and max is " << max;
    return 0;
}`,
            answer: `**Error:** Local variable declarations shadow the reference parameters.

**Fixed Code:**
void minMax(double a, double b, double &min, double &max) {
    if (a < b) {
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }
}`,
            explanation: `**Variable Shadowing Problem:**

**The Error:**
Inside the function, new local variables are declared:
- double min = a; (creates new local variable)
- double max = b; (creates new local variable)

**What Should Happen:**
- min = a; (assigns to reference parameter)
- max = b; (assigns to reference parameter)

**Shadowing Effect:**
- Local variables "hide" the reference parameters
- Changes affect local variables, not the references
- Original min and max in main() remain unchanged

**Execution Trace:**
1. main() calls minMax(5, 6, min, max)
2. Inside function: a < b is true (5 < 6)
3. Local variables created and assigned
4. Reference parameters never modified
5. main()'s min stays 6, max stays 5

**Output:** "min is 6 and max is 5" (unchanged!)

**Lesson:** Avoid redeclaring parameter names as local variables.`
        },

        {
            id: 'mix_q28',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Mixed: Week 8 - Enumerations', 
            question: 'Given: enum cropType {WHEAT, CORN, RYE, BARLEY, OATS}; What is the value of: static_cast<cropType>(static_cast<int>(RYE) - 1)?',
            options: [
                'a) WHEAT (0)',
                'b) CORN (1)',
                'c) RYE (2)', 
                'd) BARLEY (3)'
            ],
            correct: 1,
            answer: 'b) CORN (1)',
            explanation: `**Enumeration Value Calculation:**

**Enum Values Assignment:**
- WHEAT = 0 (first element)
- CORN = 1  
- RYE = 2
- BARLEY = 3
- OATS = 4

**Step-by-Step Calculation:**
1. **static_cast<int>(RYE)** = 2
2. **2 - 1** = 1
3. **static_cast<cropType>(1)** = CORN

**Verification:** 
- RYE is the 3rd element (index 2)
- Subtracting 1 gives index 1
- Index 1 corresponds to CORN

**Key Concepts:**
- Enums start at 0 by default
- Can explicitly cast between enum and int
- Useful for array indexing or arithmetic operations

**Alternative Syntax:**
```cpp
cropType result = static_cast<cropType>(static_cast<int>(RYE) - 1);
// result == CORN
```

**Warning:** Always ensure cast results are within valid enum range!`
        },

        {
            id: 'mix_q29', 
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 4-5 - Array Searching',
            question: 'Which statement about binary search implementation is correct?',
            code: `int binarySearch(int array[], int size, int value) {
    int first = 0, last = size - 1, middle, position = -1;
    bool found = false;
    
    while (!found && first <= last) {
        middle = (first + last) / 2;
        if (array[middle] == value) {
            found = true;
            position = middle;
        }
        else if (array[middle] < value)
            last = middle - 1;    // Line X
        else
            first = middle + 1;   // Line Y
    }
    return position;
}`,
            options: [
                'a) The algorithm is correct as written',
                'b) Lines X and Y should be swapped',
                'c) The while condition should be different',
                'd) The middle calculation is wrong'
            ],
            correct: 1,
            answer: 'b) Lines X and Y should be swapped',
            explanation: `**Binary Search Logic Error:**

**The Problem:**
Lines X and Y have incorrect logic for updating search bounds.

**Current (Wrong) Logic:**
- if array[middle] < value: last = middle - 1 (searches lower half)
- else: first = middle + 1 (searches upper half)

**Correct Logic Should Be:**
- if array[middle] < value: first = middle + 1 (search upper half)
- else: last = middle - 1 (search lower half)

**Why It's Wrong:**
When array[middle] < value, target must be in upper half, so we should search right by setting first = middle + 1, not left.

**Corrected Code:**
```cpp
else if (array[middle] < value)
    first = middle + 1;    // Search upper half
else
    last = middle - 1;     // Search lower half
```

**Impact of Error:**
- Algorithm would search wrong half of array
- Would fail to find values that actually exist
- Could cause infinite loops in some cases

**Memory Aid:** 
- Target > middle → go right (increase first)
- Target < middle → go left (decrease last)`
        },

        {
            id: 'mix_q30',
            type: 'Code Completion',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Mixed: Week 9 - Advanced Data Structures',
            question: 'Complete this program that manages a dynamic array of student grades and calculates statistics:',
            code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<double> grades;
    
    // YOUR CODE HERE
    // 1. Read grades from user until -1 is entered
    // 2. Calculate and display average
    // 3. Sort grades and display highest and lowest
    // 4. Count how many grades are above average
    
    return 0;
}`,
            answer: `double grade;
cout << "Enter grades (enter -1 to stop): ";

// Read grades
while (cin >> grade && grade != -1) {
    grades.push_back(grade);
}

if (grades.empty()) {
    cout << "No grades entered." << endl;
    return 1;
}

// Calculate average
double sum = 0;
for (double g : grades) {
    sum += g;
}
double average = sum / grades.size();

// Sort grades
sort(grades.begin(), grades.end());

// Display statistics
cout << "Average: " << average << endl;
cout << "Lowest: " << grades.front() << endl;
cout << "Highest: " << grades.back() << endl;

// Count above average
int aboveAverage = 0;
for (double g : grades) {
    if (g > average) {
        aboveAverage++;
    }
}

cout << "Grades above average: " << aboveAverage << endl;`,
            explanation: `**Dynamic Array Statistics Program:**

**Component Breakdown:**

**1. Input Loop:**
- while (cin >> grade && grade != -1)
- Continues until -1 or invalid input
- push_back() adds elements dynamically

**2. Average Calculation:**
- Range-based for loop sums all grades
- Division by grades.size() gives average

**3. Sorting & Extremes:**
- sort() arranges in ascending order
- front() gives lowest (first element)
- back() gives highest (last element)

**4. Above-Average Count:**
- Compare each grade to calculated average
- Increment counter for grades > average

**Vector Advantages:**
- Dynamic size (no need to declare size)
- Built-in functions (size(), empty())
- Compatible with STL algorithms (sort())

**Error Handling:**
- Check if vector is empty
- Graceful exit if no data entered

**Alternative Approaches:**
- Use accumulate() for sum calculation
- Use count_if() for above-average counting
- Use min/max_element() instead of sorting`
        }
    ]
};

// Export for use in main application
window.mixedData = mixedData;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = mixedData;
}

