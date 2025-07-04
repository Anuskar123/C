// Mock Exam: C++ Programming Assessment - CSY2006 Format (20 Questions)
const mockExamData = {
    title: '📝 Mock Exam - CSY2006 Software Engineering 2 Format',
    description: '⏰ Time-Constrained Assessment - Complete 20-question exam in 90 minutes. Covers all 9 weeks of C++ content in university exam format. Each question worth 5 marks.',
    timeLimit: '90 minutes',
    totalMarks: 100,
    passingGrade: '40%',
    
    // OPERATOR PRECEDENCE REFERENCE (from your notes)
    operatorPrecedence: {
        title: "📋 C++ Operator Precedence Reference",
        levels: [
            { level: 1, operators: "()", description: "Parentheses - Highest precedence" },
            { level: 2, operators: "!", description: "Logical NOT" },
            { level: 3, operators: "* / %", description: "Multiplication, Division, Modulus" },
            { level: 4, operators: "+ -", description: "Addition, Subtraction" },
            { level: 5, operators: "< > <= >=", description: "Relational operators" },
            { level: 6, operators: "== !=", description: "Equality operators" },
            { level: 7, operators: "&&", description: "Logical AND" },
            { level: 8, operators: "||", description: "Logical OR" },
            { level: 9, operators: "= += -= *= /= %=", description: "Assignment operators - Lowest precedence" }
        ]
    },

    // MARKING SCHEME
    markingScheme: {
        mcq: "2 marks each",
        shortAnswer: "5 marks each", 
        codeCompletion: "10 marks each",
        debugging: "8 marks each",
        longAnswer: "15 marks each"
    },

    questions: [
        {
            id: 'mock_q1',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            marks: 2,
            topic: 'Operator Precedence',
            question: 'What is the result of the following expression: 3 + 4 * 2 - 1?',
            code: `int result = 3 + 4 * 2 - 1;
cout << result;`,
            options: [
                'a) 12',
                'b) 10', 
                'c) 13',
                'd) 9'
            ],
            correct: 1,
            answer: 'b) 10',
            markingCriteria: `
**[2 MARKS TOTAL]**

✓ Correct answer (b) 10: **[2 marks]**
✗ Any other answer: **[0 marks]**

**Marking Breakdown:**
• Understanding operator precedence: [1 mark]
• Correct calculation: [1 mark]`,
            explanation: `**Step-by-step calculation using operator precedence:**

1. **Apply precedence rules:** * has higher precedence than + and -
2. **First:** 4 * 2 = 8
3. **Then left to right:** 3 + 8 - 1 = 11 - 1 = 10

**Operator Precedence Applied:**
• Multiplication (*) = Level 3 precedence
• Addition (+) and Subtraction (-) = Level 4 precedence  
• Higher precedence (lower number) executes first

**Common Student Error:** 
Calculating left to right: (3 + 4) * 2 - 1 = 7 * 2 - 1 = 13
This ignores operator precedence rules.`
        },

        {
            id: 'mock_q2',
            type: 'Short Answer',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Data Types & Variables',
            question: 'Explain the difference between int, float, and double data types in C++. Include memory size and precision.',
            markingCriteria: `
**[5 MARKS TOTAL]**

**Memory sizes:** [2 marks]
• int: 4 bytes [0.5 marks]
• float: 4 bytes [0.5 marks] 
• double: 8 bytes [0.5 marks]
• Correct size units (bytes) [0.5 marks]

**Data type purposes:** [2 marks]
• int for whole numbers [0.5 marks]
• float for decimal numbers [0.5 marks]
• double for high-precision decimals [0.5 marks]
• Mention of precision difference [0.5 marks]

**Additional details:** [1 mark]
• Range information [0.5 marks]
• When to use each type [0.5 marks]`,
            answer: `**int (Integer):**
- Size: 4 bytes (32 bits)
- Range: -2,147,483,648 to 2,147,483,647
- Purpose: Whole numbers only (no decimal places)
- Use: Counting, indexing, mathematical calculations

**float (Single-precision floating point):**
- Size: 4 bytes (32 bits)
- Precision: 6-7 significant digits
- Purpose: Decimal numbers with moderate precision
- Use: When memory is limited but decimals needed

**double (Double-precision floating point):**
- Size: 8 bytes (64 bits)  
- Precision: 15-17 significant digits
- Purpose: High-precision decimal calculations
- Use: Scientific calculations, financial applications

**When to choose:**
- int: Loop counters, array indices, user IDs
- float: Graphics coordinates, simple measurements
- double: Scientific data, precise financial calculations`,
            explanation: `This question tests fundamental understanding of C++ data types - a core concept that affects memory usage, precision, and program performance.`
        },

        {
            id: 'mock_q3',
            type: 'Code Completion',
            difficulty: '⭐⭐⭐ Hard',
            marks: 10,
            topic: 'Functions & Arrays',
            question: 'Complete this function that finds the second largest element in an array:',
            code: `#include <iostream>
#include <climits>
using namespace std;

int findSecondLargest(int arr[], int size) {
    // Complete this function
    // Return the second largest element
    // Assume array has at least 2 elements
    // Handle case where all elements are same
}

int main() {
    int numbers[] = {10, 5, 8, 20, 15, 20};
    int size = 6;
    int result = findSecondLargest(numbers, size);
    cout << "Second largest: " << result << endl;
    return 0;
}`,
            markingCriteria: `
**[10 MARKS TOTAL]**

**Algorithm correctness:** [4 marks]
• Initialize first and second largest [1 mark]
• Proper loop through array [1 mark]  
• Correct comparison logic [1 mark]
• Handle duplicates correctly [1 mark]

**Edge case handling:** [3 marks]
• Check for all elements being same [1.5 marks]
• Proper return value for edge cases [1.5 marks]

**Code quality:** [3 marks]
• Proper variable initialization [1 mark]
• Clear variable names [1 mark]
• Correct syntax and structure [1 mark]`,
            answer: `if (size < 2) return -1;  // Invalid input

int first = INT_MIN, second = INT_MIN;

for (int i = 0; i < size; i++) {
    if (arr[i] > first) {
        second = first;
        first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
        second = arr[i];
    }
}

// If second is still INT_MIN, all elements were same
return (second == INT_MIN) ? -1 : second;`,
            explanation: `**Algorithm Explanation:**

1. **Initialize:** first = INT_MIN, second = INT_MIN
2. **For each element:** 
   - If larger than first: update both first and second
   - If larger than second but not equal to first: update second
3. **Handle duplicates:** Condition arr[i] != first prevents duplicates
4. **Edge case:** Return -1 if all elements are identical

**For array {10, 5, 8, 20, 15, 20}:**
- first = 20, second = 15
- Result: 15 (correct second largest)`
        },

        {
            id: 'mock_q4',
            type: 'Debug Code',
            difficulty: '⭐⭐ Medium',
            marks: 8,
            topic: 'Loops & Control Structures',
            question: 'Find and fix the errors in this program that calculates factorial:',
            code: `#include <iostream>
using namespace std;

int main() {
    int n, factorial;
    cout << "Enter a number: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        factorial = factorial * i;  // Error 1
    }
    
    if (n = 0) {  // Error 2
        factorial = 1;
    }
    
    cout << "Factorial is: " << factorial << endl;
    return 0;
}`,
            markingCriteria: `
**[8 MARKS TOTAL]**

**Error identification:** [4 marks]
• Identify uninitialized variable error [2 marks]
• Identify assignment vs comparison error [2 marks]

**Correct fixes:** [3 marks]
• Initialize factorial = 1 [1.5 marks]
• Change = to == in if condition [1.5 marks]

**Logic improvement:** [1 mark]
• Move zero check before loop or mention this issue [1 mark]`,
            answer: `**Fixed Code:**

#include <iostream>
using namespace std;

int main() {
    int n, factorial = 1;  // Fix 1: Initialize factorial
    cout << "Enter a number: ";
    cin >> n;
    
    if (n == 0) {  // Fix 2: Use == for comparison, move before loop
        factorial = 1;
    } else {
        for (int i = 1; i <= n; i++) {
            factorial = factorial * i;
        }
    }
    
    cout << "Factorial is: " << factorial << endl;
    return 0;
}

**Errors Found:**
1. **Uninitialized variable:** factorial used without initialization
2. **Assignment vs comparison:** Used = instead of == in if condition
3. **Logic error:** Zero check should come before the loop`,
            explanation: `**Error Analysis:**

**Error 1:** Uninitialized variable 'factorial' contains garbage value
- **Impact:** Unpredictable results in multiplication
- **Fix:** Initialize factorial = 1

**Error 2:** Assignment (=) used instead of comparison (==)
- **Impact:** Always assigns 0 to n, condition always true
- **Fix:** Use == for comparison

**Error 3:** Logic flow issue
- **Impact:** Zero case handled after loop execution  
- **Fix:** Check for zero before starting loop`
        },

        {
            id: 'mock_q5',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium', 
            marks: 2,
            topic: 'Pointers',
            question: 'What will be the output of this pointer arithmetic code?',
            code: `int arr[] = {10, 20, 30, 40, 50};
int* ptr = arr;
ptr = ptr + 2;
cout << *ptr << " " << *(ptr + 1);`,
            options: [
                'a) 10 20',
                'b) 30 40',
                'c) 20 30', 
                'd) 40 50'
            ],
            correct: 1,
            answer: 'b) 30 40',
            markingCriteria: `
**[2 MARKS TOTAL]**

✓ Correct answer (b) 30 40: **[2 marks]**
✗ Any other answer: **[0 marks]**

**Partial credit:** [Not applicable for MCQ]`,
            explanation: `**Pointer Arithmetic Step-by-Step:**

**Initial state:**
• arr[] = {10, 20, 30, 40, 50}
• ptr = arr (points to arr[0] = 10)

**After ptr = ptr + 2:**
• ptr now points to arr[2] = 30

**Output calculation:**
• *ptr = value at current position = 30
• *(ptr + 1) = value at next position = arr[3] = 40

**Memory visualization:**
Index: [0] [1] [2] [3] [4]
Value: 10  20  30  40  50
              ↑   ↑
            ptr  ptr+1

**Key concept:** Pointer arithmetic moves by sizeof(datatype), not by 1 byte.`
        },

        {
            id: 'mock_q6',
            type: 'Long Answer',
            difficulty: '⭐⭐⭐ Hard',
            marks: 15,
            topic: 'Structures & File I/O',
            question: 'Write a complete C++ program that manages student records using structures and file operations.',
            requirements: `Requirements:
1. Define a Student structure with: id, name, age, gpa
2. Create an array of 3 students  
3. Write student data to a file called "students.txt"
4. Read the data back from file and display it
5. Include proper error handling for file operations`,
            markingCriteria: `
**[15 MARKS TOTAL]**

**Structure definition:** [3 marks]
• Correct struct syntax [1 mark]
• All required members (id, name, age, gpa) [1 mark]
• Appropriate data types [1 mark]

**File writing operation:** [4 marks]
• Open file for writing [1 mark]
• Check if file opened successfully [1 mark]
• Write all student data correctly [1.5 marks]
• Close file properly [0.5 marks]

**File reading operation:** [4 marks]
• Open file for reading [1 mark]
• Check if file opened successfully [1 mark]
• Read data back correctly [1.5 marks]
• Display read data [0.5 marks]

**Error handling:** [2 marks]
• File opening error checks [1 mark]
• Appropriate error messages [1 mark]

**Code quality & completeness:** [2 marks]
• Complete working program [1 mark]
• Good programming practices [1 mark]`,
            answer: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

struct Student {
    int id;
    string name;
    int age;
    double gpa;
};

int main() {
    // Create array of students
    Student students[3] = {
        {101, "Alice Johnson", 20, 3.85},
        {102, "Bob Smith", 19, 3.42},
        {103, "Carol Brown", 21, 3.91}
    };
    
    // Write to file
    ofstream outFile("students.txt");
    if (!outFile) {
        cout << "Error: Cannot create file!" << endl;
        return 1;
    }
    
    for (int i = 0; i < 3; i++) {
        outFile << students[i].id << " "
                << students[i].name << " "
                << students[i].age << " "
                << students[i].gpa << endl;
    }
    outFile.close();
    cout << "Data written to file successfully!" << endl;
    
    // Read from file
    ifstream inFile("students.txt");
    if (!inFile) {
        cout << "Error: Cannot open file for reading!" << endl;
        return 1;
    }
    
    cout << "\\nReading student data from file:" << endl;
    cout << "ID\\tName\\t\\tAge\\tGPA" << endl;
    cout << "--------------------------------" << endl;
    
    Student temp;
    while (inFile >> temp.id >> temp.name >> temp.age >> temp.gpa) {
        cout << temp.id << "\\t" << temp.name << "\\t\\t" 
             << temp.age << "\\t" << temp.gpa << endl;
    }
    
    inFile.close();
    return 0;
}`,
            explanation: `**Program Analysis:**

**Structure Design:**
• Student struct contains all required fields with appropriate types
• int for id and age, string for name, double for gpa

**File Writing Process:**
1. Open file with ofstream
2. Check if file opened successfully  
3. Loop through array writing each student's data
4. Use space separation for easy reading
5. Close file to ensure data is saved

**File Reading Process:**
1. Open file with ifstream
2. Check if file opened successfully
3. Read data in same format as written
4. Display in formatted table
5. Close file when done

**Error Handling:**
• Check file opening with if (!file) 
• Return error codes and display messages
• Prevents program crashes from file errors

**Best Practices Applied:**
• Proper file closing
• Clear variable names
• Formatted output for readability`
        },

        {
            id: 'mock_q7',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            marks: 2,
            topic: 'Recursion',
            question: 'What is the output of this recursive function call mystery(4, 2)?',
            code: `int mystery(int a, int b) {
    if (b == 0) {
        return 1;
    }
    if (b == 1) {
        return a;
    }
    return a * mystery(a, b - 1);
}

cout << mystery(4, 2);`,
            options: [
                'a) 8',
                'b) 16',
                'c) 6',
                'd) 4'
            ],
            correct: 1,
            answer: 'b) 16', 
            markingCriteria: `
**[2 MARKS TOTAL]**

✓ Correct answer (b) 16: **[2 marks]**
✗ Any other answer: **[0 marks]**

**Note:** This tests understanding of recursion and power calculation.`,
            explanation: `**Recursive Trace for mystery(4, 2):**

**Function Purpose:** Calculates a^b (a to the power of b)

**Execution Trace:**
1. mystery(4, 2): b ≠ 0 and b ≠ 1, so return 4 * mystery(4, 1)
2. mystery(4, 1): b == 1, so return 4
3. Back to step 1: return 4 * 4 = 16

**Call Stack:**
mystery(4, 2) → 4 * mystery(4, 1)
                    mystery(4, 1) → returns 4
mystery(4, 2) → 4 * 4 = 16

**Mathematical Verification:**
4² = 4 × 4 = 16 ✓

**Recursion Pattern:**
• Base cases: b == 0 returns 1, b == 1 returns a
• Recursive case: a * mystery(a, b-1)
• This implements exponentiation: a^b`
        },

        {
            id: 'mock_q8',
            type: 'Short Answer',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Arrays & Searching',
            question: 'Explain the difference between linear search and binary search. Include time complexity and when to use each.',
            markingCriteria: `
**[5 MARKS TOTAL]**

**Linear Search explanation:** [2 marks]
• Definition and how it works [1 mark]
• Time complexity O(n) [0.5 marks]
• Works on unsorted arrays [0.5 marks]

**Binary Search explanation:** [2 marks]  
• Definition and how it works [1 mark]
• Time complexity O(log n) [0.5 marks]
• Requires sorted array [0.5 marks]

**Comparison and usage:** [1 mark]
• When to use each algorithm [0.5 marks]
• Performance comparison [0.5 marks]`,
            answer: `**Linear Search:**
- **Method:** Check each element sequentially from start to end
- **Time Complexity:** O(n) - worst case checks all elements
- **Requirement:** No special requirement - works on any array
- **Best Case:** O(1) if element is first
- **Worst Case:** O(n) if element is last or not found

**Binary Search:**
- **Method:** Divide array in half, compare with middle element
- **Time Complexity:** O(log n) - eliminates half the elements each step
- **Requirement:** Array must be sorted
- **Best Case:** O(1) if element is in middle
- **Worst Case:** O(log n) - much faster than linear

**When to Use:**
- **Linear Search:** Unsorted data, small arrays, simple implementation
- **Binary Search:** Large sorted arrays, frequent searching, performance critical

**Performance Comparison:**
For 1000 elements: Linear = up to 1000 checks, Binary = max 10 checks`,
            explanation: `This question tests understanding of fundamental searching algorithms and their trade-offs - essential for efficient programming.`
        },

        {
            id: 'mock_q9',
            type: 'Code Completion',
            difficulty: '⭐⭐ Medium',
            marks: 10,
            topic: 'Classes & Objects',
            question: 'Complete this basic class definition for a Rectangle:',
            code: `class Rectangle {
private:
    double length;
    double width;

public:
    // Constructor - Complete this
    Rectangle(double l, double w) {
        // Your code here
    }
    
    // Calculate area - Complete this
    double calculateArea() {
        // Your code here
    }
    
    // Calculate perimeter - Complete this  
    double calculatePerimeter() {
        // Your code here
    }
    
    // Display rectangle info - Complete this
    void display() {
        // Your code here
    }
};`,
            markingCriteria: `
**[10 MARKS TOTAL]**

**Constructor implementation:** [3 marks]
• Initialize length correctly [1.5 marks]
• Initialize width correctly [1.5 marks]

**calculateArea() method:** [2 marks]
• Correct formula (length * width) [1.5 marks]
• Proper return statement [0.5 marks]

**calculatePerimeter() method:** [2 marks]
• Correct formula (2 * (length + width)) [1.5 marks]
• Proper return statement [0.5 marks]

**display() method:** [3 marks]
• Display length and width [1 mark]
• Display calculated area [1 mark] 
• Display calculated perimeter [1 mark]`,
            answer: `// Constructor
Rectangle(double l, double w) {
    length = l;
    width = w;
}

// Calculate area
double calculateArea() {
    return length * width;
}

// Calculate perimeter
double calculatePerimeter() {
    return 2 * (length + width);
}

// Display rectangle info
void display() {
    cout << "Rectangle Details:" << endl;
    cout << "Length: " << length << endl;
    cout << "Width: " << width << endl;
    cout << "Area: " << calculateArea() << endl;
    cout << "Perimeter: " << calculatePerimeter() << endl;
}`,
            explanation: `**Class Implementation Explained:**

**Constructor:**
• Initializes private member variables with parameter values
• Sets up the object's initial state

**calculateArea():**
• Returns length × width (area formula for rectangle)
• Uses private member variables

**calculatePerimeter():**
• Returns 2 × (length + width) (perimeter formula)
• Applies mathematical formula correctly

**display():**
• Shows all rectangle information
• Calls other member functions to get calculated values
• Demonstrates encapsulation - uses public interface

**Object-Oriented Principles:**
• Encapsulation: Private data, public interface
• Methods operate on object's own data
• Clean separation of data and functionality`
        },

        {
            id: 'mock_q10',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            marks: 8,
            topic: 'Operator Precedence & Expressions',
            question: 'This program calculates compound expressions but has precedence errors. Fix them:',
            code: `#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 3, c = 2;
    bool result1, result2;
    
    // Expression 1: Should check if a is greater than b AND c is even
    result1 = a > b && c % 2 = 0;  // Error!
    
    // Expression 2: Should calculate (a + b) * c, then check if > 10
    result2 = a + b * c > 10;  // Error!
    
    cout << "Result 1: " << result1 << endl;
    cout << "Result 2: " << result2 << endl;
    
    return 0;
}`,
            markingCriteria: `
**[8 MARKS TOTAL]**

**Error 1 identification & fix:** [4 marks]
• Identify assignment vs equality error [2 marks]
• Correct fix using == instead of = [2 marks]

**Error 2 identification & fix:** [4 marks]
• Identify precedence issue (* before +) [2 marks]
• Correct fix using parentheses (a + b) * c [2 marks]

**Bonus understanding:** [Extra credit possible]
• Explain why parentheses needed [Additional consideration]`,
            answer: `**Fixed Code:**

#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 3, c = 2;
    bool result1, result2;
    
    // Fix 1: Use == for comparison, not = for assignment
    result1 = a > b && c % 2 == 0;
    
    // Fix 2: Add parentheses to force addition before multiplication
    result2 = (a + b) * c > 10;
    
    cout << "Result 1: " << result1 << endl;  // Output: 1 (true)
    cout << "Result 2: " << result2 << endl;  // Output: 1 (true)
    
    return 0;
}

**Errors Fixed:**
1. **Assignment vs Comparison:** c % 2 = 0 → c % 2 == 0
2. **Operator Precedence:** a + b * c → (a + b) * c`,
            explanation: `**Error Analysis with Operator Precedence:**

**Error 1: Assignment vs Equality**
• c % 2 = 0 tries to assign 0 to (c % 2) - invalid!
• c % 2 == 0 compares (c % 2) with 0 - correct!
• = is assignment (level 9), == is comparison (level 6)

**Error 2: Precedence Problem**
• Original: a + b * c = 5 + (3 * 2) = 5 + 6 = 11
• Intended: (a + b) * c = (5 + 3) * 2 = 8 * 2 = 16
• * has higher precedence (level 3) than + (level 4)
• Parentheses () have highest precedence (level 1)

**Results with a=5, b=3, c=2:**
• result1: (5 > 3) && (2 % 2 == 0) = true && true = true
• result2: (5 + 3) * 2 > 10 = 16 > 10 = true

**Key Learning:** Always use parentheses when precedence might be unclear!`
        },

        {
            id: 'mock_q11',
            type: 'Code Trace',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Functions & Scope',
            question: 'What will be the output of the following program?',
            code: `#include <iostream>
using namespace std;

void anotherFunction();

int main() {
    int num = 1;
    cout << "In main, num is " << num << endl;
    anotherFunction();
    cout << "Back in main, num is " << num << endl;
    return 0;
}

void anotherFunction() {
    int num = 20;
    cout << "In anotherFunction, num is " << num << endl;
}`,
            markingCriteria: `
**[5 MARKS TOTAL]**

**Correct output lines:** [4 marks]
• "In main, num is 1" [1 mark]
• "In anotherFunction, num is 20" [1 mark]  
• "Back in main, num is 1" [2 marks - shows understanding of local scope]

**Explanation of scope:** [1 mark]
• Mention that variables are local to their functions [1 mark]`,
            answer: `**Output:**
In main, num is 1
In anotherFunction, num is 20
Back in main, num is 1`,
            explanation: `**Scope Analysis:**
- Each function has its own local variable 'num'
- Variables in different functions don't affect each other
- Local scope means changes in one function don't affect variables in other functions
- The 'num' in main() remains unchanged after calling anotherFunction()`
        },

        {
            id: 'mock_q12',
            type: 'Code Trace',
            difficulty: '⭐⭐⭐ Hard',
            marks: 6,
            topic: 'Static Variables',
            question: 'What will the following program display?',
            code: `#include <iostream>
using namespace std;

int j = 40;

void p() {
    int i = 5;
    static int j = 5;
    i++;
    j++;
    cout << "i is " << i << endl;
    cout << "j is " << j << endl;
}

int main() {
    p();
    p();
    return 0;
}`,
            markingCriteria: `
**[6 MARKS TOTAL]**

**First call output:** [2 marks]
• "i is 6" [1 mark]
• "j is 6" [1 mark]

**Second call output:** [2 marks]  
• "i is 6" [1 mark]
• "j is 7" [1 mark]

**Understanding static vs local:** [2 marks]
• Explain that static j retains value between calls [1 mark]
• Explain that local i resets each call [1 mark]`,
            answer: `**Output:**
i is 6
j is 6
i is 6
j is 7`,
            explanation: `**Static vs Local Variables:**
- **Local variable 'i':** Reinitialized to 5 each function call, then incremented to 6
- **Static variable 'j':** Retains its value between function calls
  - First call: starts at 5, incremented to 6
  - Second call: starts at 6 (retained value), incremented to 7
- **Global 'j':** Not used inside function due to local static 'j' shadowing it`
        },

        {
            id: 'mock_q13',
            type: 'Struct Declaration',
            difficulty: '⭐ Easy',
            marks: 3,
            topic: 'Structures',
            question: 'Given the following struct definition, declare an array named inventory consisting of 100 components of type partsType.',
            code: `struct partsType {
    string partName;
    int partNum;
    double price;
    int quantitiesInStock;
};`,
            markingCriteria: `
**[3 MARKS TOTAL]**

**Correct declaration:** [3 marks]
• Correct syntax: partsType inventory[100]; [2 marks]
• Proper variable name and size [1 mark]

**Common errors deduct marks:**
• Missing semicolon [-1 mark]
• Wrong syntax like struct partsType inventory[100] [-1 mark]`,
            answer: `**Declaration:**
partsType inventory[100];`,
            explanation: `**Array of Structures:**
- **Syntax:** dataType arrayName[size];
- **partsType:** The struct name (data type)
- **inventory:** The array name
- **[100]:** Array size - creates 100 elements
- Each element inventory[i] contains all four struct members`
        },

        {
            id: 'mock_q14', 
            type: 'Debug Code',
            difficulty: '⭐⭐ Medium',
            marks: 4,
            topic: 'Structures',
            question: 'Find the error in the following code segment:',
            code: `struct TwoVals {
    int a, b;
};

int main() {
    TwoVals.a = 10;
    TwoVals.b = 20;
    return 0;
}`,
            markingCriteria: `
**[4 MARKS TOTAL]**

**Error identification:** [2 marks]
• Identify that struct instance needs to be created [2 marks]

**Correct fix:** [2 marks]
• Show proper instance declaration and usage [2 marks]`,
            answer: `**Error:** Cannot access struct members without creating an instance.

**Fixed Code:**
struct TwoVals {
    int a, b;
};

int main() {
    TwoVals myVals;  // Create instance
    myVals.a = 10;   // Access through instance
    myVals.b = 20;
    return 0;
}`,
            explanation: `**Structure Usage:**
- **Error:** TwoVals is a type name, not a variable
- **Fix:** Must declare a variable of type TwoVals
- **Syntax:** structType variableName; then variableName.member
- **Alternative:** TwoVals myVals = {10, 20}; for initialization`
        },

        {
            id: 'mock_q15',
            type: 'Function Writing',
            difficulty: '⭐⭐⭐ Hard',
            marks: 7,
            topic: 'Pointers & Functions',
            question: 'Write a function int getLargest(int *x) that takes a pointer to an integer array and returns the largest number. Assume the array has 5 elements.',
            requirements: 'The function should use pointer arithmetic and return the largest value from the array.',
            markingCriteria: `
**[7 MARKS TOTAL]**

**Function signature:** [1 mark]
• int getLargest(int *x) [1 mark]

**Algorithm logic:** [4 marks]
• Initialize largest with first element [1 mark]
• Loop through all 5 elements [1 mark]  
• Compare each element with current largest [1 mark]
• Update largest when needed [1 mark]

**Pointer usage:** [2 marks]
• Correct pointer dereferencing [1 mark]
• Proper array access via pointer [1 mark]`,
            answer: `**Solution:**

int getLargest(int *x) {
    int largest = x[0];  // or *x
    
    for (int i = 1; i < 5; i++) {
        if (x[i] > largest) {  // or *(x+i) > largest
            largest = x[i];    // or *(x+i)
        }
    }
    
    return largest;
}

**Alternative using pointer arithmetic:**
int getLargest(int *x) {
    int largest = *x;
    
    for (int i = 1; i < 5; i++) {
        if (*(x+i) > largest) {
            largest = *(x+i);
        }
    }
    
    return largest;
}`,
            explanation: `**Key Concepts:**
- **Array-pointer equivalence:** x[i] is same as *(x+i)
- **Pointer arithmetic:** x+i points to i-th element from x
- **Initialization:** Start with first element as initial largest
- **Comparison:** Check each subsequent element against current largest`
        },

        {
            id: 'mock_q16',
            type: 'Code Trace',
            difficulty: '⭐⭐⭐ Hard',
            marks: 6,
            topic: 'Pointer Operations',
            question: 'What output is produced by the following program segment?',
            code: `int x, y;
int *p = &x;
int *q = &y;

x = 35;
y = 46;
p = q;
*p = 78;

cout << x << " " << y << endl;
cout << *p << " " << *q << endl;`,
            markingCriteria: `
**[6 MARKS TOTAL]**

**First output line:** [3 marks]
• x value: 35 [1.5 marks]
• y value: 78 [1.5 marks]

**Second output line:** [3 marks]
• *p value: 78 [1.5 marks]
• *q value: 78 [1.5 marks]`,
            answer: `**Output:**
35 78
78 78`,
            explanation: `**Pointer Trace:**

**Initial state:**
- p points to x, q points to y
- x = 35, y = 46

**After p = q:**
- Both p and q now point to y
- x still = 35, y still = 46

**After *p = 78:**
- Since p points to y, this changes y to 78
- x remains 35, y becomes 78
- Both *p and *q refer to y (which is 78)`
        },

        {
            id: 'mock_q17',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            marks: 5,
            topic: 'Binary Search',
            question: 'Find the error in this binary search implementation and provide the corrected line:',
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
            last = middle - 1;    // ERROR LINE
        else
            first = middle + 1;
    }
    return position;
}`,
            markingCriteria: `
**[5 MARKS TOTAL]**

**Error identification:** [2 marks]
• Identify wrong assignment in else if clause [2 marks]

**Correct fix:** [3 marks]
• Correct line: first = middle + 1; [2 marks]  
• Correct understanding of binary search logic [1 mark]`,
            answer: `**Error:** The line "last = middle - 1;" should be "first = middle + 1;"

**Corrected lines:**
else if (array[middle] < value)
    first = middle + 1;
else  
    last = middle - 1;`,
            explanation: `**Binary Search Logic:**
- **When array[middle] < value:** Target is in upper half, so first = middle + 1
- **When array[middle] > value:** Target is in lower half, so last = middle - 1
- **The error:** Logic was reversed - searching wrong half of array
- **Impact:** Algorithm would fail to find existing values`
        },

        {
            id: 'mock_q18',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            marks: 3,
            topic: 'Enumerations',
            question: 'Given the enumeration: enum cropType {WHEAT, CORN, RYE, BARLEY, OATS}; What is the value of: static_cast<cropType>(static_cast<int>(RYE) - 1)',
            options: [
                'a) WHEAT (0)',
                'b) CORN (1)', 
                'c) RYE (2)',
                'd) BARLEY (3)'
            ],
            correct: 1,
            markingCriteria: `
**[3 MARKS TOTAL]**

✓ Correct answer (b) CORN (1): **[3 marks]**

**Partial credit for working:**
• RYE = 2 [1 mark]
• 2 - 1 = 1 [1 mark]  
• 1 = CORN [1 mark]`,
            answer: 'b) CORN (1)',
            explanation: `**Enumeration Values:**
- WHEAT = 0, CORN = 1, RYE = 2, BARLEY = 3, OATS = 4

**Calculation:**
1. static_cast<int>(RYE) = 2
2. 2 - 1 = 1  
3. static_cast<cropType>(1) = CORN

**Result:** CORN (value 1)`
        },

        {
            id: 'mock_q19',
            type: 'Code Trace',
            difficulty: '⭐⭐⭐ Hard',
            marks: 6,
            topic: 'Complex Pointers',
            question: 'What output is produced by the following C++ program segment?',
            code: `int main() {
    int x, y;
    int *p, *q;
    
    p = &x;
    q = &y;
    x = 55;
    y = 43;
    *q = 22;
    q = p;
    *p = 33;
    
    cout << x << " " << y << endl;
    cout << *p << " " << *q << endl;
    return 0;
}`,
            markingCriteria: `
**[6 MARKS TOTAL]**

**First output line:** [3 marks]
• x value: 33 [1.5 marks]
• y value: 22 [1.5 marks]

**Second output line:** [3 marks]
• *p value: 33 [1.5 marks]
• *q value: 33 [1.5 marks]`,
            answer: `**Output:**
33 22
33 33`,
            explanation: `**Step-by-step trace:**

**Initial setup:**
- p points to x, q points to y
- x = 55, y = 43

**After *q = 22:**
- y becomes 22 (q points to y)
- x = 55, y = 22

**After q = p:**  
- q now points to x (same as p)
- x = 55, y = 22

**After *p = 33:**
- x becomes 33 (p points to x)  
- Since q also points to x, *q also = 33
- Final: x = 33, y = 22`
        },

        {
            id: 'mock_q20',
            type: 'Debug Code',
            difficulty: '⭐⭐ Medium',
            marks: 4,
            topic: 'String Functions',
            question: 'Fix the errors in this C-string length function:',
            code: `int stringLength(char *str) {
    int len = 0;
    while (str-- != '\\0')  // ERROR
        len++;
    return len;
}`,
            markingCriteria: `
**[4 MARKS TOTAL]**

**Error identification:** [2 marks]
• Identify str-- moves pointer backwards [1 mark]
• Identify *str needed for character comparison [1 mark]

**Correct fix:** [2 marks]
• Change to *str++ or str[len] [2 marks]`,
            answer: `**Fixed Code:**

**Option 1:**
int stringLength(char *str) {
    int len = 0;
    while (*str++ != '\\0')
        len++;
    return len;
}

**Option 2:**
int stringLength(char *str) {
    int len = 0;
    while (str[len] != '\\0')
        len++;
    return len;
}`,
            explanation: `**Errors in Original:**
1. **str--:** Moves pointer backwards instead of forwards
2. **Missing *:** Need to dereference pointer to get character value

**Corrections:**
- **str++:** Move pointer forward through string
- ***str:** Dereference to get character at current position
- **Alternative:** Use array notation str[len] and increment len`
        }
    ]
};

// Export for use in main application
window.mockExamData = mockExamData;

// Also try alternative assignment methods
if (typeof window !== 'undefined') {
    window.mockExamData = mockExamData;
}

// For Node.js compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockExamData;
}

// Debug logging
console.log('Mock exam data exported:', !!mockExamData);
console.log('Mock exam questions count:', mockExamData.questions ? mockExamData.questions.length : 0);
