// Week 1: Basic Input/Output & Variables
const week1Data = {
    title: 'Week 1: Basic Input/Output & Variables',
    description: 'Master the fundamentals of C++ programming - variables, data types, input/output operations, and basic program structure.',
    
    // QUICK REFERENCE CHEAT SHEET
    cheatSheet: {
        title: "📚 Week 1 Quick Reference & Concepts",
        sections: [
            {
                title: "🏗️ Basic Program Structure",
                content: `
#include <iostream>    // Preprocessor directive
using namespace std;   // Standard namespace
int main() {          // Main function - program entry point
    // Your code here
    return 0;         // Return statement (0 = success)
}`
            },
            {
                title: "📦 Data Types & Variables",
                content: `
• int: Whole numbers (-2,147,483,648 to 2,147,483,647)
• double: Decimal numbers (15-17 significant digits)
• float: Decimal numbers (6-7 significant digits) 
• char: Single character ('A', 'x', '5')
• string: Text sequences ("Hello World")
• bool: True/false values

Declaration: dataType variableName = value;
Example: int age = 21;
         double gpa = 3.75;
         char grade = 'A';`
            },
            {
                title: "⚡ Constants",
                content: `
const dataType NAME = value;
• Cannot change after initialization
• Use UPPERCASE for names
• Better than #define

Example: const double PI = 3.14159;
         const int MAX_STUDENTS = 30;`
            },
            {
                title: "💬 Input/Output Operations",
                content: `
OUTPUT (cout):
cout << "Text" << variable << endl;
cout << "Age: " << age << " years" << endl;

INPUT (cin):
cin >> variable;
cin >> var1 >> var2 >> var3;  // Multiple inputs

FORMATTING:
#include <iomanip>
cout << fixed << setprecision(2) << price;  // 2 decimal places`
            },
            {
                title: "🔢 Arithmetic Operators",
                content: `
+ Addition        - Subtraction
* Multiplication  / Division
% Modulus (remainder)

PRECEDENCE: (), *, /, %, +, -

INTEGER DIVISION: 7/3 = 2 (not 2.33)
FLOATING DIVISION: 7.0/3 = 2.33`
            },
            {
                title: "🎯 Common Mistakes to Avoid",
                content: `
❌ Using = instead of == for comparison
❌ Integer division when expecting decimals
❌ Forgetting semicolons
❌ Variable names with spaces
❌ Using undefined variables
❌ Missing #include statements
❌ Forgetting return 0; in main()`
            }
        ]
    },
    questions: [
        {
            id: 'w1_q1',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            source: 'CSY2087 C++_Week1 v1.pdf - Basic Program Structure',
            question: 'What is the correct structure of a basic C++ program?',
            code: `#include <iostream>
using namespace std;
int main() {
    cout << "Hello World!";
    return 0;
}`,
            options: [
                'a) This is correct',
                'b) Missing semicolon after cout',
                'c) Should use printf instead',
                'd) Missing using directive'
            ],
            correct: 0,
            answer: 'a) This is correct',
            explanation: `ANSWER: a) This is correct

DETAILED EXPLANATION:
This code demonstrates the standard C++ program structure with all required components.

LINE-BY-LINE ANALYSIS:
1. #include <iostream>
   - Includes input/output stream library for cout functionality
   - Required for console input/output operations

2. using namespace std;
   - Allows use of cout without std:: prefix
   - Alternative: use std::cout instead of cout

3. int main() {
   - Program entry point where execution begins
   - Must return integer value (0 = success, non-zero = error)

4. cout << "Hello World!";
   - Outputs text string to console screen
   - Semicolon terminates the statement properly

5. return 0;
   - Indicates successful program execution
   - Zero means no errors occurred

6. }
   - Closing brace ends main function

WHY OTHER OPTIONS ARE WRONG:
b) Missing semicolon - INCORRECT: cout line has proper semicolon
c) Should use printf - INCORRECT: cout is standard C++ style
d) Missing using directive - INCORRECT: "using namespace std;" is present

VERIFICATION:
This program will compile and execute without any syntax or runtime errors.`
        },
        {
            id: 'w1_q2',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 1 Lab Exercise - Temperature.cpp',
            question: 'Find the error in this temperature conversion program:',
            code: `#include <iostream>
using namespace std;
int main() {
    double celsius, fahrenheit;
    cout << "Enter celsius: ";
    cin >> celsius;
    fahrenheit = (9/5) * celsius + 32;  // Error here!
    cout << "Fahrenheit: " << fahrenheit;
    return 0;
}`,
            answer: 'Change (9/5) to (9.0/5.0) for proper floating-point division',
            explanation: `ERROR LOCATION: Line 6 - fahrenheit = (9/5) * celsius + 32;

DETAILED EXPLANATION:
The problem is integer division when floating-point division is needed.

PROBLEM ANALYSIS:
Current code: (9/5) * celsius + 32
- Both 9 and 5 are integers
- Integer division: 9 ÷ 5 = 1 (not 1.8)
- Wrong formula: fahrenheit = 1 * celsius + 32

CORRECT SOLUTIONS:
Option 1: (9.0/5.0) * celsius + 32
Option 2: (9.0/5) * celsius + 32  
Option 3: (9/5.0) * celsius + 32
Option 4: 1.8 * celsius + 32

WHY IT WORKS:
- When one operand is double, result becomes double
- 9.0/5.0 = 1.8 (correct conversion factor)
- Formula becomes: fahrenheit = 1.8 * celsius + 32

TESTING EXAMPLES:
Wrong calculation:
Input: 100°C
(9/5) * 100 + 32 = 1 * 100 + 32 = 132°F ❌

Correct calculation:
Input: 100°C
(9.0/5.0) * 100 + 32 = 1.8 * 100 + 32 = 212°F ✓

KEY LEARNING:
Always use floating-point literals when you need decimal results.`
        },
        {
            id: 'w1_q3',
            type: 'Complete Code',
            difficulty: '⭐ Easy',
            source: 'Week 1 Lab Exercise - Conversion.cpp',
            question: 'Complete the currency conversion program:',
            code: `#include <iostream>
using namespace std;
int main() {
    const double YEN_PER_DOLLAR = 83.14;
    double dollars, yen;
    
    cout << "Enter dollars: ";
    // COMPLETE THE REST OF THE PROGRAM
}`,
            answer: `cin >> dollars;
yen = dollars * YEN_PER_DOLLAR;
cout << "Yen: " << yen << endl;
return 0;`,
            explanation: `COMPLETE CODE SOLUTION:
cin >> dollars;
yen = dollars * YEN_PER_DOLLAR;
cout << "Yen: " << yen << endl;
return 0;

DETAILED EXPLANATION:
This program converts US dollars to Japanese yen using a fixed exchange rate.

STEP-BY-STEP BREAKDOWN:
1. INPUT FROM USER:
   cin >> dollars;
   - Reads dollar amount from keyboard
   - Stores value in 'dollars' variable

2. PERFORM CALCULATION:
   yen = dollars * YEN_PER_DOLLAR;
   - Multiplies dollars by conversion rate (83.14)
   - Example: $10 × 83.14 = 831.4 yen

3. OUTPUT RESULT:
   cout << "Yen: " << yen << endl;
   - Displays converted amount to user
   - endl adds newline for clean formatting

4. PROGRAM TERMINATION:
   return 0;
   - Ends main function successfully
   - Zero indicates no errors occurred

ALGORITHM LOGIC:
Input → Process → Output
Dollars → Multiply by rate → Display yen

TESTING EXAMPLE:
Input: 50 dollars
Calculation: 50 × 83.14 = 4157 yen
Output: "Yen: 4157"

KEY CONCEPTS:
- const variables for fixed values
- Mathematical operations in C++
- Basic input/output operations`
        },
        {
            id: 'w1_q4',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 1 PDF - Data Types',
            question: 'Which data type should be used to store a student\'s GPA (like 3.75)?',
            options: [
                'a) int',
                'b) char',
                'c) double',
                'd) string'
            ],
            correct: 2,
            answer: 'c) double',
            explanation: `ANSWER: c) double

DETAILED EXPLANATION:
A student's GPA like 3.75 contains decimal places, requiring a floating-point data type.

DATA TYPE ANALYSIS:
a) int - INCORRECT
   - Only stores whole numbers (3, 4, 5)
   - Cannot store 3.75, would truncate to 3
   - Loses important decimal precision

b) char - INCORRECT
   - Stores single characters ('A', 'B', 'C')
   - Used for letter grades, not numeric GPA
   - Cannot perform mathematical operations

c) double - CORRECT
   - Stores decimal numbers with high precision
   - Perfect for GPA values like 3.75, 2.83, 4.00
   - Allows mathematical calculations

d) string - INCORRECT
   - Stores text data ("3.75")
   - Could store GPA as text but cannot do math
   - Would need conversion for calculations

WHY DOUBLE IS BEST:
- GPA needs decimal precision (3.75, not just 3)
- GPA calculations require arithmetic operations
- double provides sufficient precision for GPA ranges
- Standard choice for academic grade calculations

EXAMPLE USAGE:
double gpa = 3.75;
double semester_avg = (gpa + 3.83) / 2;
cout << "Average GPA: " << semester_avg;`
        },
        {
            id: 'w1_q5',
            type: 'Find Error',
            difficulty: '⭐ Easy',
            source: 'Week 1 Lab - Common Mistakes',
            question: 'Find the error in this variable declaration:',
            code: `int student age = 20;
cout << "Age: " << student age;`,
            answer: 'Variable names cannot contain spaces',
            explanation: `ANSWER: Variable names cannot contain spaces

DETAILED EXPLANATION:
C++ variable names must be written as a single continuous word without spaces.

PROBLEM ANALYSIS:
Current code: int student age = 20;
- "student age" contains a space between "student" and "age"
- C++ compiler treats this as two separate identifiers
- This causes a syntax error

CORRECT SOLUTIONS:
Option 1: int studentAge = 20;     (camelCase - recommended)
Option 2: int student_age = 20;    (snake_case)
Option 3: int StudentAge = 20;     (PascalCase)

VARIABLE NAMING RULES:
- Must start with letter or underscore
- Can contain letters, digits, underscores
- Cannot contain spaces or special characters
- Cannot be C++ keywords (int, double, return, etc.)

EXAMPLES:
✓ Valid: age, studentName, test_score, _count
✗ Invalid: student age, 2ndScore, test-score, class`
        },
        {
            id: 'w1_q6',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            source: 'Week 1 PDF - Input/Output',
            question: 'What does the following code output?',
            code: `int x = 5, y = 3;
cout << x << " + " << y << " = " << x + y;`,
            options: [
                'a) x + y = 8',
                'b) 5 + 3 = 8',
                'c) 5 + 3 = x + y',
                'd) Error'
            ],
            correct: 1,
            answer: 'b) 5 + 3 = 8',
            explanation: `ANSWER: b) 5 + 3 = 8

DETAILED EXPLANATION:
The cout statement processes and outputs each part of the expression from left to right.

STEP-BY-STEP OUTPUT ANALYSIS:
Given: int x = 5, y = 3;
Statement: cout << x << " + " << y << " = " << x + y;

Output breakdown:
1. x outputs: 5
2. " + " outputs: (space)+(space)
3. y outputs: 3
4. " = " outputs: (space)=(space)
5. x + y outputs: 5 + 3 = 8

Final result: "5 + 3 = 8"

WHY OTHER OPTIONS ARE WRONG:
a) "x + y = 8" - Would only happen if variables were in quotes
c) "5 + 3 = x + y" - Would happen if (x + y) was in quotes as text
d) Error - No syntax errors in this code

KEY CONCEPTS:
- cout outputs variable values, not variable names
- String literals (in quotes) are printed as-is
- Mathematical expressions are evaluated before output
- Multiple << operators chain outputs together`
        },
        {
            id: 'w1_q7',
            type: 'Complete Code',
            difficulty: '⭐⭐ Medium',
            source: 'Week 1 Lab Exercise - Test Scores',
            question: 'Complete the program to calculate average of 3 test scores:',
            code: `#include <iostream>
using namespace std;
int main() {
    double score1, score2, score3, average;
    
    cout << "Enter three test scores: ";
    cin >> score1 >> score2 >> score3;
    
    // CALCULATE AVERAGE AND DISPLAY RESULT
}`,
            answer: `average = (score1 + score2 + score3) / 3.0;
cout << "Average score: " << average << endl;
return 0;`,
            explanation: `COMPLETE CODE SOLUTION:
average = (score1 + score2 + score3) / 3.0;
cout << "Average score: " << average << endl;
return 0;

DETAILED EXPLANATION:
This program calculates the arithmetic mean of three test scores.

STEP-BY-STEP BREAKDOWN:
1. CALCULATE AVERAGE:
   average = (score1 + score2 + score3) / 3.0;
   - Add all three scores together
   - Divide by 3.0 (not 3) to ensure floating-point division
   - Store result in average variable

2. DISPLAY RESULT:
   cout << "Average score: " << average << endl;
   - Output descriptive text followed by the calculated average
   - endl adds newline for clean formatting

3. PROGRAM TERMINATION:
   return 0;
   - End main function successfully

WHY USE 3.0 INSTEAD OF 3:
- 3.0 is a double literal, 3 is an integer literal
- Division by 3.0 ensures floating-point division
- Example: 85 + 90 + 77 = 252, then 252/3.0 = 84.0
- If we used 252/3, result would be 84 (integer division)

TESTING EXAMPLE:
Input: 85, 90, 77
Calculation: (85 + 90 + 77) / 3.0 = 252 / 3.0 = 84.0
Output: "Average score: 84"

ALGORITHM PATTERN:
Sum all values → Divide by count → Display result`
        },
        {
            id: 'w1_q8',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 1 PDF - Constants',
            question: 'What is the purpose of the const keyword?',
            options: [
                'a) To create variables that can change',
                'b) To create variables that cannot change after initialization',
                'c) To make variables faster',
                'd) To save memory'
            ],
            correct: 1,
            answer: 'b) To create variables that cannot change after initialization',
            explanation: `ANSWER: b) To create variables that cannot change after initialization

DETAILED EXPLANATION:
The const keyword creates constants - variables whose values are fixed and immutable.

CONST KEYWORD PROPERTIES:
1. IMMUTABILITY:
   - Value cannot be changed after initialization
   - Attempting to modify causes compilation error
   - Provides data protection and program safety

2. INITIALIZATION REQUIREMENT:
   - Must be initialized when declared
   - Cannot declare const variable without initial value
   - Example: const double PI = 3.14159;

3. COMPILE-TIME CHECKING:
   - Compiler prevents accidental modifications
   - Catches errors during compilation, not runtime
   - Helps maintain program integrity

WHY OTHER OPTIONS ARE WRONG:
a) Variables that can change - INCORRECT: const prevents changes
c) Make variables faster - INCORRECT: performance is not the primary purpose
d) Save memory - INCORRECT: memory usage is not significantly different

PRACTICAL EXAMPLES:
✓ Correct usage:
const int MAX_STUDENTS = 30;
const double TAX_RATE = 0.08;
const string SCHOOL_NAME = "ABC University";

✗ Invalid operations:
const int SIZE = 10;
SIZE = 20;  // Compilation error!

BENEFITS OF USING CONST:
- Prevents accidental value changes
- Makes code intentions clear
- Enables compiler optimizations
- Improves code readability and maintenance`
        },
        {
            id: 'w1_q9',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 1 Lab - Tickets.cpp',
            question: 'Find the error in this ticket price calculation:',
            code: `#include <iostream>
using namespace std;
int main() {
    int tickets;
    double price = 12.50;
    
    cout << "Enter number of tickets: ";
    cin >> tickets;
    
    total = tickets * price;  // Error!
    cout << "Total: $" << total;
    return 0;
}`,
            answer: 'Variable "total" is not declared',
            explanation: `ANSWER: Variable "total" is not declared

DETAILED EXPLANATION:
The variable "total" is used without being declared first, causing a compilation error.

ERROR ANALYSIS:
Problem line: total = tickets * price;
- "total" is used for assignment
- But "total" was never declared as a variable
- C++ requires all variables to be declared before use

SOLUTION:
Add variable declaration before the calculation:
double total;
total = tickets * price;

Or combine declaration with assignment:
double total = tickets * price;

COMPLETE CORRECTED CODE:
#include <iostream>
using namespace std;
int main() {
    int tickets;
    double price = 12.50;
    double total;  // Add this declaration
    
    cout << "Enter number of tickets: ";
    cin >> tickets;
    
    total = tickets * price;
    cout << "Total: $" << total;
    return 0;
}

C++ VARIABLE DECLARATION RULES:
1. Variables must be declared before first use
2. Declaration specifies data type and name
3. Declaration can include initialization
4. Cannot use undeclared variables

COMMON VARIABLE DECLARATION PATTERNS:
- Declaration only: double total;
- Declaration with initialization: double total = 0.0;
- Multiple declarations: double total, tax, finalAmount;`
        },
        {
            id: 'w1_q10',
            type: 'Complete Code',
            difficulty: '⭐⭐ Medium',
            source: 'Week 1 Lab Exercise - Quote Calculator',
            question: 'Complete the program to calculate material cost with 7% markup:',
            code: `#include <iostream>
using namespace std;
int main() {
    const double MARKUP_RATE = 0.07;
    double materialCost, totalCost;
    
    cout << "Enter material cost: $";
    cin >> materialCost;
    
    // CALCULATE TOTAL WITH MARKUP AND DISPLAY
}`,
            answer: `totalCost = materialCost + (materialCost * MARKUP_RATE);
cout << "Total cost with markup: $" << totalCost << endl;
return 0;`,
            explanation: `COMPLETE CODE SOLUTION:
totalCost = materialCost + (materialCost * MARKUP_RATE);
cout << "Total cost with markup: $" << totalCost << endl;
return 0;

DETAILED EXPLANATION:
This program calculates the final cost by adding a 7% markup to the original material cost.

STEP-BY-STEP CALCULATION:
1. CALCULATE MARKUP AMOUNT:
   materialCost * MARKUP_RATE
   - MARKUP_RATE is 0.07 (which represents 7%)
   - Example: $100 * 0.07 = $7.00 markup

2. ADD MARKUP TO ORIGINAL COST:
   totalCost = materialCost + (materialCost * MARKUP_RATE)
   - Original cost + markup amount = total cost
   - Example: $100 + $7 = $107

3. DISPLAY RESULT:
   cout << "Total cost with markup: $" << totalCost << endl;
   - Show final cost with descriptive text

MARKUP CALCULATION CONCEPTS:
- Markup Rate: 0.07 = 7% = 7/100
- Markup Amount: Original × Rate
- Final Price: Original + Markup

ALTERNATIVE CALCULATION METHOD:
totalCost = materialCost * (1 + MARKUP_RATE);
- This multiplies by 1.07 directly
- Same result: $100 × 1.07 = $107

TESTING EXAMPLE:
Input: $50.00 material cost
Markup: $50.00 × 0.07 = $3.50
Total: $50.00 + $3.50 = $53.50
Output: "Total cost with markup: $53.5"

BUSINESS APPLICATION:
This pattern is common in retail, construction, and service industries for pricing calculations.`
        },
        
        // EXAMINATION-STYLE QUESTIONS BASED ON EXTRACTED CONTENT
        {
            id: 'w1_exam1',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 1 Examination - Data Types Analysis',
            question: 'What will be the output of this program?',
            code: `#include <iostream>
using namespace std;
int main() {
    int x = 7, y = 3;
    double result = x / y;
    cout << result << endl;
    return 0;
}`,
            options: [
                'a) 2.33333',
                'b) 2.0',
                'c) 2',
                'd) Compilation error'
            ],
            correct: 1,
            answer: 'b) 2.0',
            explanation: `ANSWER: b) 2.0

DETAILED EXPLANATION:
This demonstrates the important concept of integer division vs. floating-point division.

STEP-BY-STEP EXECUTION:
1. Variable declarations: int x = 7, y = 3; double result;
2. Expression evaluation: x / y
   - Both x and y are integers
   - Integer division: 7 ÷ 3 = 2 (remainder discarded)
   - Result of division is integer 2

3. Assignment to double: result = 2;
   - Integer 2 is implicitly converted to double 2.0
   - result now contains 2.0

4. Output: cout << result displays 2.0 (or 2 depending on formatting)

WHY NOT 2.33333:
To get 2.33333, you need floating-point division:
- Option 1: double result = 7.0 / 3;
- Option 2: double result = double(x) / y;
- Option 3: double result = static_cast<double>(x) / y;

INTEGER DIVISION RULES:
- int ÷ int = int (fractional part discarded)
- 7 ÷ 3 = 2 (not 2.33)
- 10 ÷ 3 = 3 (not 3.33)
- 5 ÷ 2 = 2 (not 2.5)

FLOATING-POINT DIVISION RULES:
- double ÷ double = double
- double ÷ int = double
- int ÷ double = double

KEY LEARNING:
When you need decimal results, ensure at least one operand is floating-point type.`
        },
        {
            id: 'w1_exam2',
            type: 'Find Error',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 1 Examination - Program Analysis',
            question: 'Identify ALL errors in this student registration program:',
            code: `#include iostream
using namespace std;
int main() {
    string student name = "John";
    const int MAX_CREDITS = 18
    int credits = 21;
    
    cout << "Student: " << student name << endl;
    cout << "Credits: " << credits << endl;
    
    if (credits > MAX_CREDITS)
        cout << "Overloaded!" << endl;
}`,
            answer: '1. Missing <> in #include <iostream>, 2. Space in variable name "student name", 3. Missing semicolon after MAX_CREDITS = 18, 4. Missing return 0;',
            explanation: `ANSWER: Four syntax errors found:
1. Missing <> in #include <iostream>
2. Space in variable name "student name"  
3. Missing semicolon after MAX_CREDITS = 18
4. Missing return 0;

DETAILED ERROR ANALYSIS:

ERROR 1: #include iostream
PROBLEM: Missing angle brackets around header file name
CORRECT: #include <iostream>
EXPLANATION: Header files must be enclosed in < > or " "

ERROR 2: string student name = "John";
PROBLEM: Variable name contains space
CORRECT: string studentName = "John"; or string student_name = "John";
EXPLANATION: C++ identifiers cannot contain spaces

ERROR 3: const int MAX_CREDITS = 18
PROBLEM: Missing semicolon at end of statement
CORRECT: const int MAX_CREDITS = 18;
EXPLANATION: All C++ statements must end with semicolon

ERROR 4: Missing return statement
PROBLEM: main() function should return a value
CORRECT: Add return 0; before closing brace
EXPLANATION: main() should return int to indicate program status

CORRECTED COMPLETE CODE:
#include <iostream>
using namespace std;
int main() {
    string studentName = "John";
    const int MAX_CREDITS = 18;
    int credits = 21;
    
    cout << "Student: " << studentName << endl;
    cout << "Credits: " << credits << endl;
    
    if (credits > MAX_CREDITS)
        cout << "Overloaded!" << endl;
        
    return 0;
}

DEBUGGING STRATEGY:
1. Check #include statements first
2. Verify all variable names follow naming rules
3. Ensure every statement ends with semicolon
4. Confirm main() has return statement`
        },
        {
            id: 'w1_exam3',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 1 Examination - Comprehensive Program',
            question: 'Complete this grade calculator that reads 4 exam scores, calculates average, and determines letter grade:',
            code: `#include <iostream>
#include <iomanip>
using namespace std;
int main() {
    double exam1, exam2, exam3, exam4, average;
    char letterGrade;
    
    cout << "Enter 4 exam scores: ";
    // INPUT ALL 4 SCORES
    
    // CALCULATE AVERAGE
    
    // DETERMINE LETTER GRADE (A>=90, B>=80, C>=70, D>=60, F<60)
    
    // OUTPUT RESULTS WITH 2 DECIMAL PLACES
    
    return 0;
}`,
            answer: `cin >> exam1 >> exam2 >> exam3 >> exam4;

average = (exam1 + exam2 + exam3 + exam4) / 4.0;

if (average >= 90)
    letterGrade = 'A';
else if (average >= 80)
    letterGrade = 'B';
else if (average >= 70)
    letterGrade = 'C';
else if (average >= 60)
    letterGrade = 'D';
else
    letterGrade = 'F';

cout << fixed << setprecision(2);
cout << "Average: " << average << endl;
cout << "Letter Grade: " << letterGrade << endl;`,
            explanation: `COMPLETE CODE SOLUTION:
cin >> exam1 >> exam2 >> exam3 >> exam4;

average = (exam1 + exam2 + exam3 + exam4) / 4.0;

if (average >= 90)
    letterGrade = 'A';
else if (average >= 80)
    letterGrade = 'B';
else if (average >= 70)
    letterGrade = 'C';
else if (average >= 60)
    letterGrade = 'D';
else
    letterGrade = 'F';

cout << fixed << setprecision(2);
cout << "Average: " << average << endl;
cout << "Letter Grade: " << letterGrade << endl;

DETAILED EXPLANATION:
This comprehensive program demonstrates multiple C++ concepts working together.

COMPONENT BREAKDOWN:

1. INPUT SECTION:
   cin >> exam1 >> exam2 >> exam3 >> exam4;
   - Reads four exam scores from user input
   - Multiple variables can be input with single cin statement
   - Space-separated values

2. CALCULATION SECTION:
   average = (exam1 + exam2 + exam3 + exam4) / 4.0;
   - Adds all four scores together
   - Divides by 4.0 (not 4) to ensure floating-point division
   - Stores result in average variable

3. DECISION LOGIC SECTION:
   Multi-way if-else structure for grade determination:
   - if (average >= 90): Grade A (90-100)
   - else if (average >= 80): Grade B (80-89)
   - else if (average >= 70): Grade C (70-79)
   - else if (average >= 60): Grade D (60-69)
   - else: Grade F (below 60)

4. OUTPUT FORMATTING SECTION:
   cout << fixed << setprecision(2);
   - fixed: Forces decimal notation (no scientific notation)
   - setprecision(2): Shows exactly 2 decimal places
   - Requires #include <iomanip>

5. DISPLAY RESULTS:
   - Shows average with 2 decimal places
   - Shows corresponding letter grade

TESTING EXAMPLE:
Input: 85, 92, 78, 88
Calculation: (85 + 92 + 78 + 88) / 4.0 = 343 / 4.0 = 85.75
Grade Logic: 85.75 >= 80 but < 90, so grade = 'B'
Output: "Average: 85.75" and "Letter Grade: B"

PROGRAMMING CONCEPTS DEMONSTRATED:
- Multiple variable input
- Arithmetic calculations
- Multi-way conditional statements
- Character data type usage
- Formatted output with precision control`
        },
        {
            id: 'w1_exam4',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 1 Examination - Memory Concepts',
            question: 'Which statement about constants is FALSE?',
            options: [
                'a) const variables must be initialized when declared',
                'b) const variables cannot change value after initialization',
                'c) const variables use more memory than regular variables',
                'd) const variables help prevent programming errors'
            ],
            correct: 2,
            answer: 'c) const variables use more memory than regular variables',
            explanation: `ANSWER: c) const variables use more memory than regular variables

DETAILED EXPLANATION:
This statement is FALSE. const variables do not use more memory than regular variables.

ANALYSIS OF EACH STATEMENT:

a) const variables must be initialized when declared - TRUE
   - const int SIZE = 10; ✓ Correct
   - const int SIZE; ✗ Compilation error
   - Constants require immediate initialization

b) const variables cannot change value after initialization - TRUE
   - const double PI = 3.14159;
   - PI = 3.14; ✗ Compilation error
   - Immutability is the core purpose of const

c) const variables use more memory than regular variables - FALSE
   - const and regular variables typically use same memory
   - Compiler may optimize const variables even more
   - Memory usage depends on data type, not const keyword
   - Example: const int and int both typically use 4 bytes

d) const variables help prevent programming errors - TRUE
   - Prevents accidental value modifications
   - Compile-time error checking
   - Makes programmer intentions clear

MEMORY COMPARISON:
Regular variable: int count = 10;        (4 bytes)
Const variable:   const int SIZE = 10;   (4 bytes)
Result: Same memory usage

COMPILER OPTIMIZATIONS:
- const variables may be replaced with literal values
- Compiler can perform better optimizations
- May actually use LESS memory due to optimizations

WHY CONST IS BENEFICIAL:
- Type safety and error prevention
- Code documentation and clarity  
- Enables compiler optimizations
- No memory penalty compared to regular variables

CONCLUSION:
Statement (c) is false because const variables do not require additional memory and may even be optimized to use less memory.`
        },
        {
            id: 'w1_exam5',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 1 Examination - Logic Error',
            question: 'This temperature converter has a LOGIC error (not syntax). Find and explain:',
            code: `#include <iostream>
using namespace std;
int main() {
    double fahrenheit, celsius;
    
    cout << "Enter Fahrenheit temperature: ";
    cin >> fahrenheit;
    
    celsius = (fahrenheit - 32) * 9/5;  // Logic error here!
    
    cout << "Celsius: " << celsius << endl;
    return 0;
}`,
            answer: 'Wrong conversion formula: should be (fahrenheit - 32) * 5/9, not 9/5',
            explanation: `ANSWER: Wrong conversion formula: should be (fahrenheit - 32) * 5/9, not 9/5

DETAILED EXPLANATION:
The program uses the wrong conversion factor for Fahrenheit to Celsius conversion.

ERROR ANALYSIS:
Current (incorrect) formula: celsius = (fahrenheit - 32) * 9/5
Correct formula: celsius = (fahrenheit - 32) * 5/9

CONVERSION FORMULAS:
Fahrenheit to Celsius: C = (F - 32) × 5/9
Celsius to Fahrenheit: F = (C × 9/5) + 32

The code mistakenly uses 9/5 (which converts C to F) instead of 5/9 (which converts F to C).

MATHEMATICAL DEMONSTRATION:
Test with freezing point of water:
- Input: 32°F (should convert to 0°C)

Wrong calculation:
celsius = (32 - 32) * 9/5 = 0 * 9/5 = 0 ✓ (works by coincidence)

Test with boiling point of water:
- Input: 212°F (should convert to 100°C)

Wrong calculation:
celsius = (212 - 32) * 9/5 = 180 * 9/5 = 324°C ✗ (should be 100°C)

Correct calculation:
celsius = (212 - 32) * 5/9 = 180 * 5/9 = 100°C ✓

CORRECTED CODE:
celsius = (fahrenheit - 32) * 5/9;
Or to ensure floating-point division:
celsius = (fahrenheit - 32) * 5.0/9.0;

WHY THIS ERROR OCCURS:
- Students often confuse the two conversion formulas
- 9/5 = 1.8 (C to F factor)
- 5/9 ≈ 0.556 (F to C factor)
- The factors are reciprocals of each other

DEBUGGING TIP:
Always test conversion programs with known values like freezing (32°F = 0°C) and boiling points (212°F = 100°C).`
        },
        {
            id: 'w1_exam6',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 1 Examination - Operator Precedence',
            question: 'What is the value of result after this calculation?',
            code: `int a = 10, b = 3, c = 2;
int result = a + b * c;`,
            options: [
                'a) 26',
                'b) 16',
                'c) 32',
                'd) 13'
            ],
            correct: 1,
            answer: 'b) 16',
            explanation: `ANSWER: b) 16

DETAILED EXPLANATION:
This question tests understanding of operator precedence in C++ arithmetic expressions.

GIVEN VALUES:
int a = 10, b = 3, c = 2;
Expression: result = a + b * c;

OPERATOR PRECEDENCE RULES:
In C++, multiplication (*) has higher precedence than addition (+)
This means multiplication is performed BEFORE addition

STEP-BY-STEP CALCULATION:
1. First: Evaluate b * c (multiplication has higher precedence)
   b * c = 3 * 2 = 6

2. Second: Evaluate a + (result from step 1)
   a + 6 = 10 + 6 = 16

3. Final: result = 16

PRECEDENCE ORDER (highest to lowest):
1. Parentheses ()
2. Multiplication *, Division /, Modulus %
3. Addition +, Subtraction -
4. Assignment =

WHY OTHER OPTIONS ARE WRONG:
a) 26 - This would happen if calculated left-to-right: (10 + 3) * 2 = 26
c) 32 - This would happen with different operator precedence
d) 13 - This doesn't match any logical calculation

USING PARENTHESES FOR CLARITY:
Original: a + b * c = 10 + 3 * 2 = 16
Equivalent with parentheses: a + (b * c) = 10 + (3 * 2) = 16
Different grouping: (a + b) * c = (10 + 3) * 2 = 26

MEMORY AID:
Remember "PEMDAS" or "Please Excuse My Dear Aunt Sally"
- Parentheses, Exponents, Multiplication/Division, Addition/Subtraction

PRACTICAL APPLICATION:
Always use parentheses when operator precedence might be unclear to make your intentions explicit in code.`
        },
        {
            id: 'w1_exam7',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 1 Examination - Real-world Application',
            question: 'Complete this payroll calculator for hourly employees:',
            code: `#include <iostream>
#include <iomanip>
using namespace std;
int main() {
    const double OVERTIME_RATE = 1.5;
    const int REGULAR_HOURS = 40;
    double hourlyRate, hoursWorked, regularPay, overtimePay, totalPay;
    
    cout << "Enter hourly rate: $";
    cin >> hourlyRate;
    cout << "Enter hours worked: ";
    cin >> hoursWorked;
    
    // CALCULATE REGULAR PAY AND OVERTIME PAY
    // IF hoursWorked <= 40: no overtime
    // IF hoursWorked > 40: overtime for hours beyond 40
    
    // DISPLAY RESULTS WITH CURRENCY FORMATTING
    
    return 0;
}`,
            answer: `if (hoursWorked <= REGULAR_HOURS) {
    regularPay = hoursWorked * hourlyRate;
    overtimePay = 0;
} else {
    regularPay = REGULAR_HOURS * hourlyRate;
    overtimePay = (hoursWorked - REGULAR_HOURS) * hourlyRate * OVERTIME_RATE;
}

totalPay = regularPay + overtimePay;

cout << fixed << setprecision(2);
cout << "Regular Pay: $" << regularPay << endl;
cout << "Overtime Pay: $" << overtimePay << endl;
cout << "Total Pay: $" << totalPay << endl;`,
            explanation: `COMPLETE CODE SOLUTION:
if (hoursWorked <= REGULAR_HOURS) {
    regularPay = hoursWorked * hourlyRate;
    overtimePay = 0;
} else {
    regularPay = REGULAR_HOURS * hourlyRate;
    overtimePay = (hoursWorked - REGULAR_HOURS) * hourlyRate * OVERTIME_RATE;
}

totalPay = regularPay + overtimePay;

cout << fixed << setprecision(2);
cout << "Regular Pay: $" << regularPay << endl;
cout << "Overtime Pay: $" << overtimePay << endl;
cout << "Total Pay: $" << totalPay << endl;

DETAILED EXPLANATION:
This payroll calculator handles both regular and overtime pay calculations based on hours worked.

ALGORITHM BREAKDOWN:

1. DECISION STRUCTURE:
   Two scenarios based on hours worked vs. regular hours (40)

2. SCENARIO 1: hoursWorked <= 40 (No Overtime)
   regularPay = hoursWorked * hourlyRate;
   overtimePay = 0;
   - Employee gets paid only for actual hours worked
   - No overtime premium applied

3. SCENARIO 2: hoursWorked > 40 (Overtime Required)
   regularPay = REGULAR_HOURS * hourlyRate;
   - Pay for first 40 hours at regular rate
   
   overtimePay = (hoursWorked - REGULAR_HOURS) * hourlyRate * OVERTIME_RATE;
   - Calculate overtime hours: total hours - 40
   - Pay overtime hours at 1.5x regular rate (time-and-a-half)

4. TOTAL CALCULATION:
   totalPay = regularPay + overtimePay;
   - Sum both regular and overtime pay

5. FORMATTED OUTPUT:
   cout << fixed << setprecision(2);
   - Display currency amounts with exactly 2 decimal places
   - Professional payroll format

TESTING EXAMPLES:

Example 1 (No Overtime):
Input: $15/hour, 35 hours worked
Regular Pay: 35 × $15 = $525.00
Overtime Pay: $0.00
Total Pay: $525.00

Example 2 (With Overtime):
Input: $20/hour, 45 hours worked
Regular Pay: 40 × $20 = $800.00
Overtime Hours: 45 - 40 = 5 hours
Overtime Pay: 5 × $20 × 1.5 = $150.00
Total Pay: $800.00 + $150.00 = $950.00

BUSINESS LOGIC CONCEPTS:
- Conditional payment structures
- Time-and-a-half overtime calculation
- Professional payroll formatting
- Legal compliance with labor standards`
        }
    ]
};

// Export for use in main application  
window.week1Data = week1Data;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = week1Data;
}
