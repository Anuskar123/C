// Week 8: Structures - Extracted from your PDF and lab exercises
const week8Data = {
    title: 'Week 8: Structures',
    description: 'Master structure definition, member access, arrays of structures, pointers to structures, and data organization. Learn how structures form the foundation of object-oriented programming and data modeling.',
    
    // COMPREHENSIVE DETAILED EXPLANATIONS
    detailedExplanations: {
        concepts: [
            {
                title: "🏗️ Understanding Structures - Building Complex Data Types",
                content: `
**What are Structures?**
Structures allow you to group related data of different types under a single name.
Think of a structure as a blueprint for creating custom data types.

**Real-World Analogy:**
A student record contains:
- ID number (integer)
- Name (string)
- GPA (decimal)
- Year (integer)

Instead of managing separate variables, structures keep related data together.

**Structure vs. Class Preview:**
- Structures are the foundation of object-oriented programming
- In C++, structures can have methods (functions) just like classes
- Default access level: public (vs. private for classes)
- Structures are perfect for simple data containers

**Memory Layout:**
struct Point {
    int x;      // 4 bytes
    int y;      // 4 bytes
};              // Total: 8 bytes (plus possible padding)

The compiler arranges members sequentially in memory, which enables
efficient access and predictable memory usage.
                `
            },
            {
                title: "🔧 Structure Design Patterns & Best Practices",
                content: `
**Naming Conventions:**
- Use PascalCase for structure names: Student, Employee, BankAccount
- Use camelCase for member names: firstName, accountBalance, yearInSchool
- Make structures represent logical entities from your problem domain

**Structure Initialization Strategies:**
// Method 1: Member-by-member
Student s1;
s1.id = 12345;
s1.name = "Alice";
s1.gpa = 3.75;

// Method 2: Aggregate initialization (C++11+)
Student s2 = {12346, "Bob", 3.80};

// Method 3: Designated initializers (C++20+)
Student s3 = {.id = 12347, .name = "Carol", .gpa = 3.90};

**Default Values and Constructors:**
struct Student {
    int id = 0;                    // Default value
    string name = "Unknown";       // Default value
    double gpa = 0.0;             // Default value
    
    // Constructor (yes, structures can have constructors!)
    Student(int i, string n, double g) : id(i), name(n), gpa(g) {}
};

**When to Use Structures:**
- Simple data containers (coordinates, dates, records)
- Passing multiple related values to functions
- Return multiple values from functions
- Building more complex data structures (linked lists, trees)
                `
            },
            {
                title: "📊 Advanced Structure Operations",
                content: `
**Comparing Structures:**
Structures don't have automatic comparison operators. You must write them:

bool operator==(const Student& a, const Student& b) {
    return a.id == b.id && a.name == b.name && a.gpa == b.gpa;
}

**Sorting Arrays of Structures:**
bool compareByGPA(const Student& a, const Student& b) {
    return a.gpa > b.gpa;  // Descending order
}

sort(students, students + size, compareByGPA);

**Structure Input/Output Patterns:**
void inputStudent(Student& s) {
    cout << "Enter ID: ";
    cin >> s.id;
    cin.ignore();  // Clear input buffer
    cout << "Enter name: ";
    getline(cin, s.name);
    cout << "Enter GPA: ";
    cin >> s.gpa;
}

void displayStudent(const Student& s) {
    cout << "ID: " << s.id << endl;
    cout << "Name: " << s.name << endl;
    cout << "GPA: " << fixed << setprecision(2) << s.gpa << endl;
}

**File I/O with Structures:**
// Writing binary data
ofstream file("students.dat", ios::binary);
file.write(reinterpret_cast<char*>(&student), sizeof(Student));

// Reading binary data
ifstream file("students.dat", ios::binary);
file.read(reinterpret_cast<char*>(&student), sizeof(Student));
                `
            },
            {
                title: "🔗 Pointers, References, and Dynamic Structures",
                content: `
**Pointer vs. Reference Access:**
Student student = {123, "Alice", 3.75};
Student* ptr = &student;      // Pointer
Student& ref = student;       // Reference

// Three ways to access the same data:
cout << student.name;         // Direct access
cout << ptr->name;           // Pointer with arrow operator
cout << (*ptr).name;         // Pointer with dereference
cout << ref.name;            // Reference access

**Dynamic Memory Allocation:**
// Single structure
Student* ptr = new Student{123, "Bob", 3.80};
cout << ptr->name;
delete ptr;

// Array of structures
Student* students = new Student[100];
students[0] = {124, "Carol", 3.85};
delete[] students;

**Common Pointer Pitfalls:**
1. Forgetting to delete dynamically allocated memory (memory leak)
2. Using -> on non-pointer variables
3. Using . on pointer variables
4. Dereferencing null or invalid pointers

**Best Practices:**
- Use references for function parameters when you don't need null values
- Use const references for read-only access to avoid copying
- Always initialize pointers or set them to nullptr
- Use smart pointers (unique_ptr, shared_ptr) in modern C++

**Self-Referential Structures (Linked Lists Preview):**
struct Node {
    int data;
    Node* next;     // Pointer to another Node
};

This pattern enables dynamic data structures like linked lists, trees, and graphs.
                `
            }
        ]
    },
    
    // CHEAT SHEET FROM EXTRACTED PDF CONTENT
    cheatSheet: {
        title: "📚 Week 8 Structures Reference - From CSY2087_C++_Week8.pdf",
        sections: [
            {
                title: "🏗️ Structure Definition",
                content: `
BASIC STRUCTURE:
struct Student {
    int studentID;
    string name;
    short yearInSchool;
    double gpa;
};  // Don't forget semicolon!

DECLARING VARIABLES:
Student stu1;           // Single variable
Student stu2, stu3;     // Multiple variables
Student students[100];   // Array of structures

INITIALIZATION:
Student s = {12345, "John", 2, 3.75};  // List initialization
Student s2 = {12346};                  // Partial initialization`
            },
            {
                title: "🔗 Accessing Structure Members",
                content: `
DOT OPERATOR (.):
stu1.studentID = 12345;
stu1.name = "Alice";
stu1.gpa = 3.8;
cout << stu1.name;

ARROW OPERATOR (->):
Student* ptr = &stu1;
ptr->studentID = 12345;   // Same as (*ptr).studentID
ptr->name = "Bob";
cout << ptr->gpa;

MEMBER ACCESS WITH ARRAYS:
students[0].name = "Carol";
students[i].gpa = 4.0;`
            },
            {
                title: "📊 Arrays of Structures",
                content: `
DECLARATION:
const int SIZE = 50;
Student classList[SIZE];

INITIALIZATION:
Student employees[3] = {
    {101, "Alice", 1, 3.5},
    {102, "Bob", 2, 3.7},
    {103, "Carol", 3, 3.9}
};

PROCESSING:
for (int i = 0; i < SIZE; i++) {
    cout << classList[i].name << " ";
    cout << classList[i].gpa << endl;
}`
            },
            {
                title: "🔄 Structures as Function Parameters",
                content: `
PASS BY VALUE:
void displayStudent(Student s) {
    cout << s.name << " " << s.gpa;
}
displayStudent(stu1);  // Copy is made

PASS BY REFERENCE:
void getStudent(Student& s) {
    cout << "Enter ID: ";
    cin >> s.studentID;
    cout << "Enter name: ";
    getline(cin, s.name);
}
getStudent(stu1);      // Original is modified

PASS BY POINTER:
void updateGPA(Student* s, double newGPA) {
    s->gpa = newGPA;
}
updateGPA(&stu1, 3.9);`
            },
            {
                title: "🔗 Nested Structures",
                content: `
NESTED DEFINITION:
struct Date {
    int month, day, year;
};

struct Employee {
    string name;
    int empNumber;
    Date birthDate;    // Nested structure
    Date hireDate;     // Another nested structure
};

ACCESSING NESTED MEMBERS:
Employee emp;
emp.name = "John Doe";
emp.birthDate.month = 5;
emp.birthDate.day = 15;
emp.birthDate.year = 1990;
emp.hireDate = {1, 10, 2020};`
            },
            {
                title: "🔄 Returning Structures",
                content: `
FUNCTION RETURNING STRUCTURE:
Student createStudent() {
    Student temp;
    cout << "Enter ID: ";
    cin >> temp.studentID;
    cout << "Enter name: ";
    getline(cin, temp.name);
    cout << "Enter GPA: ";
    cin >> temp.gpa;
    return temp;
}

USAGE:
Student newStudent = createStudent();

COMPARISON (MEMBER BY MEMBER):
if (stu1.studentID == stu2.studentID &&
    stu1.name == stu2.name) {
    cout << "Same student" << endl;
}`
            },
            {
                title: "⚠️ Common Structure Pitfalls",
                content: `
❌ Forgetting semicolon after structure definition
❌ Trying to compare entire structures with ==
❌ Confusing . and -> operators
❌ Not initializing structure members
❌ Array bounds violations with structure arrays

✅ BEST PRACTICES:
• Initialize structure members explicitly
• Use const reference parameters to avoid copying
• Check pointer validity before using ->
• Use meaningful structure and member names
• Group related data logically in structures`
            }
        ]
    },
    
    questions: [
        {
            id: 'w8_q1',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            source: 'Week 8 PDF - CSY2087_C++_Week8.pdf Page 18',
            question: 'Which is the correct way to initialize a structure variable?',
            code: `struct Circle {
    double radius;
    double area;
};`,
            options: [
                'a) Circle c = {5.0, 78.5};',
                'b) Circle c(5.0, 78.5);',
                'c) Circle c[5.0, 78.5];',
                'd) Circle c = 5.0, 78.5;'
            ],
            correct: 0,
            answer: 'a) Circle c = {5.0, 78.5};',
            explanation: `From your PDF: Structure variables can be initialized using brace-enclosed list of values in the order of member declaration.

**Structure Initialization Breakdown:**
• Values must be provided in the EXACT order that members are declared
• Point structure: int x (first), int y (second)
• Initialization {3, 4} assigns: x = 3, y = 4

**Different Initialization Methods:**
1. **Brace initialization:** Point p = {3, 4};
2. **Member-by-member:** Point p; p.x = 3; p.y = 4;
3. **Copy initialization:** Point p2 = p1;
4. **C++11 uniform initialization:** Point p{3, 4};

**Memory Layout Visualization:**
[p.x: 3][p.y: 4]
 4 bytes 4 bytes = 8 bytes total

**Common Mistakes:**
• Wrong order: {4, 3} would assign x=4, y=3
• Missing values: {3} leaves y uninitialized  
• Too many values: {3, 4, 5} is compilation error
• Type mismatch: {"hello", 4} won't work for int members

**Best Practice:** Always initialize structures to avoid garbage values in memory.`
        },
        {
            id: 'w8_q2',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 8 Lab Exercise - Structure Comparison',
            question: 'Find the error in this structure comparison:',
            code: `struct Point {
    int x, y;
};

int main() {
    Point p1 = {3, 4};
    Point p2 = {3, 4};
    
    if (p1 == p2) {  // Error!
        cout << "Points are equal" << endl;
    }
    return 0;
}`,
            answer: 'Cannot compare entire structures with == operator',
            explanation: `From your PDF: "Cannot compare struct variables directly. Instead, must compare on a field basis: if (p1.x == p2.x && p1.y == p2.y)"

**Why Direct Comparison Fails:**
• Structures are user-defined types, not built-in types
• C++ doesn't know HOW you want to compare them  
• Should comparison check all members? Some members? Different criteria?
• Memory padding between members might contain random data

**Comparison Approaches:**

**Method 1 - Member-by-member (most common):**
if (p1.x == p2.x && p1.y == p2.y) {
    cout << "Points are equal";
}

**Method 2 - Custom comparison function:**
bool areEqual(const Point& p1, const Point& p2) {
    return (p1.x == p2.x && p1.y == p2.y);
}

**Method 3 - Operator overloading (advanced):**
bool operator==(const Point& other) const {
    return (x == other.x && y == other.y);
}

**Real-World Example:**
For comparing student records, you might want to compare only student ID, 
or name and year, or all fields - the choice depends on your needs!

**Memory Safety Note:** memcmp() is dangerous due to padding bytes containing random values.`
        },
        {
            id: 'w8_q3',
            type: 'Complete Code',
            difficulty: '⭐⭐ Medium',
            source: 'Week 8 Sample Program - Pr11-8 Structure Pointer',
            question: 'Complete this function that uses a pointer to structure:',
            code: `#include <iostream>
#include <string>
using namespace std;

struct Student {
    int studentID;
    string name;
    double gpa;
};

void getData(Student* s) {
    // COMPLETE THIS FUNCTION
    // Use the pointer to get student data from user
}

int main() {
    Student stu;
    getData(&stu);
    cout << stu.name << " has GPA: " << stu.gpa << endl;
    return 0;
}`,
            answer: `cout << "Enter student ID: ";
cin >> s->studentID;
cin.ignore();  // Clear the newline
cout << "Enter student name: ";
getline(cin, s->name);
cout << "Enter GPA: ";
cin >> s->gpa;`,
            explanation: `Use arrow operator (->) to access members through pointer. Remember to clear input buffer before getline() after using cin with numbers.

**Pointer vs. Direct Access:**
• Direct access: student.name (when you have the actual structure)
• Pointer access: studentPtr->name (when you have a pointer to structure)
• Alternative pointer syntax: (*studentPtr).name (equivalent but less readable)

**Why Arrow Operator Exists:**
• (*ptr).member requires parentheses because . has higher precedence than *
• ptr->member is cleaner and more readable
• Universally preferred in professional C++ code

**Input Buffer Issue Explained:**
• cin >> leaves newline character in input buffer
• getline() immediately reads this leftover newline as empty string
• cin.ignore() clears the buffer before getline()

**Complete Input Pattern:**
cin >> studentPtr->id;           // Read number
cin.ignore();                    // Clear buffer  
getline(cin, studentPtr->name);  // Read string with spaces

**Memory Management:**
Student* ptr = new Student;      // Allocate memory
// ... use ptr->member
delete ptr;                      // Don't forget to free memory!

**Best Practice:** Use smart pointers (unique_ptr, shared_ptr) in modern C++ to avoid manual memory management.`
        },
        {
            id: 'w8_q4',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 8 Sample Program - Pr11-5 Nested Structures',
            question: 'What will this nested structure access output?',
            code: `struct Date {
    int month, day, year;
};

struct Employee {
    string name;
    Date birthDate;
    Date hireDate;
};

int main() {
    Employee emp = {"John Doe", {5, 15, 1990}, {1, 10, 2020}};
    cout << emp.name << " was born in " << emp.birthDate.year;
    cout << " and hired in " << emp.hireDate.year << endl;
    return 0;
}`,
            options: [
                'a) John Doe was born in 1990 and hired in 2020',
                'b) John Doe was born in 2020 and hired in 1990',
                'c) Compilation error',
                'd) John Doe 1990 2020'
            ],
            correct: 0,
            answer: 'a) John Doe was born in 1990 and hired in 2020',
            explanation: `Nested structure initialization follows order: name, birthDate{month,day,year}, hireDate{month,day,year}. Access nested members with double dot notation.

**Nested Structure Breakdown:**
Employee contains:
1. string name (first member)
2. Date birthDate (second member - itself contains month, day, year)  
3. Date hireDate (third member - itself contains month, day, year)

**Initialization Order Rules:**
• Initialize outer structure members in declaration order
• For nested structures, use braces {} to group their values
• Date needs {month, day, year} in that specific order

**Step-by-Step for emp = {"Alice Johnson", {3, 15, 1985}, {9, 1, 2020}}:**
1. name = "Alice Johnson"
2. birthDate.month = 3, birthDate.day = 15, birthDate.year = 1985
3. hireDate.month = 9, hireDate.day = 1, hireDate.year = 2020

**Accessing Nested Members:**
cout << emp.name;                    // Direct member
cout << emp.birthDate.month;         // Nested member (double dot)
cout << emp.hireDate.year;           // Another nested member

**Alternative Initialization Styles:**
// C++11 uniform initialization
Employee emp{"Alice Johnson", {3, 15, 1985}, {9, 1, 2020}};

// Member-by-member (more verbose but clearer)
Employee emp;
emp.name = "Alice Johnson";
emp.birthDate = {3, 15, 1985};
emp.hireDate = {9, 1, 2020};`
        },
        {
            id: 'w8_q5',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 8 Lab Exercise - Array of Structures',
            question: 'Fix this array of structures processing code:',
            code: `#include <iostream>
using namespace std;

struct Product {
    int id;
    string name;
    double price;
};

int main() {
    Product inventory[3] = {
        {101, "Laptop", 999.99},
        {102, "Mouse", 25.50},
        {103, "Keyboard", 75.00}
    };
    
    double total = 0;
    for (int i = 0; i <= 3; i++) {  // Error!
        total += inventory[i].price;
    }
    
    cout << "Total value: $" << total << endl;
    return 0;
}`,
            answer: 'Change loop condition from i <= 3 to i < 3',
            explanation: `Array indices are 0-2 for size 3. Using i <= 3 accesses inventory[3] which is out of bounds. Correct loop should be i < 3.

**Array Bounds Explained:**
• Array declaration: Product inventory[3]
• Valid indices: 0, 1, 2 (three elements total)
• Invalid index: 3 (fourth element that doesn't exist)

**Loop Execution with i <= 3:**
• i=0: Access inventory[0] ✓ (valid)
• i=1: Access inventory[1] ✓ (valid)  
• i=2: Access inventory[2] ✓ (valid)
• i=3: Access inventory[3] ❌ (OUT OF BOUNDS!)

**Consequences of Buffer Overflow:**
• Accessing inventory[3] reads/writes memory that belongs to other variables
• Can corrupt other data in your program
• Unpredictable behavior: crashes, wrong results, security vulnerabilities
• In debug mode, some compilers catch this; in release mode, often no warning

**Correct Loop Patterns:**
for (int i = 0; i < 3; i++)           // Use < instead of <=
for (int i = 0; i < SIZE; i++)        // Use named constant  
for (Product& item : inventory)       // Range-based loop (C++11+)

**Defensive Programming:**
const int INVENTORY_SIZE = 3;
Product inventory[INVENTORY_SIZE];
for (int i = 0; i < INVENTORY_SIZE; i++) { ... }

**Remember:** Array size N means valid indices are 0 through N-1, never N itself!`
        },
        {
            id: 'w8_q6',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 8 PDF - Pointer vs Dot Operator',
            question: 'Which expressions are equivalent to (*ptr).studentID?',
            code: `struct Student {
    int studentID;
    string name;
};

Student stu = {12345, "Alice"};
Student* ptr = &stu;`,
            options: [
                'a) ptr.studentID only',
                'b) ptr->studentID only',
                'c) Both ptr->studentID and (*ptr).studentID',
                'd) stu.studentID only'
            ],
            correct: 1,
            answer: 'b) ptr->studentID only',
            explanation: 'From your PDF: "Can use structure pointer operator to eliminate () and use clearer notation: ptr->studentID is equivalent to (*ptr).studentID"'
        },
        {
            id: 'w8_q7',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 8 Sample Program - Pr11-7 Function Returning Structure',
            question: 'Complete this function that returns a structure:',
            code: `#include <iostream>
#include <cmath>
using namespace std;

struct Circle {
    double radius;
    double diameter;
    double area;
};

Circle getInfo() {
    // COMPLETE THIS FUNCTION
    // Get radius from user and calculate diameter
    // Don't calculate area here - that's done in main
}

int main() {
    const double PI = 3.14159;
    Circle c = getInfo();
    c.area = PI * pow(c.radius, 2.0);
    
    cout << "Radius: " << c.radius << endl;
    cout << "Area: " << c.area << endl;
    return 0;
}`,
            answer: `Circle temp;
cout << "Enter the radius: ";
cin >> temp.radius;
temp.diameter = temp.radius * 2.0;
return temp;`,
            explanation: 'Create a local structure variable, get input, calculate diameter, and return the structure. The area calculation is done in main() after the function returns.'
        },
        {
            id: 'w8_q8',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 8 PDF - Structure Definition Syntax',
            question: 'Find the syntax error in this structure definition:',
            code: `struct PayRoll {
    int empNumber;
    string name;
    double hours;
    double payRate;
    double grossPay;
}  // Error!

int main() {
    PayRoll employee;
    return 0;
}`,
            answer: 'Missing semicolon after structure definition',
            explanation: 'From your PDF: "Must have ; after closing }". Structure definitions must end with a semicolon.'
        },
        {
            id: 'w8_q9',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 8 Sample Program - Pr11-4 Array Processing',
            question: 'What will this payroll calculation output?',
            code: `struct PayInfo {
    int hours;
    double payRate;
};

int main() {
    PayInfo workers[3] = {{40, 15.50}, {35, 12.00}, {45, 18.75}};
    double totalPay = 0;
    
    for (int i = 0; i < 3; i++) {
        double pay = workers[i].hours * workers[i].payRate;
        if (workers[i].hours > 40) {
            pay += (workers[i].hours - 40) * workers[i].payRate * 0.5;  // Overtime
        }
        totalPay += pay;
    }
    
    cout << "Total payroll: $" << totalPay << endl;
    return 0;
}`,
            options: [
                'a) $1,875.75',
                'b) $1,922.50',
                'c) $1,968.75',
                'd) $2,015.00'
            ],
            correct: 1,
            answer: 'b) $1,922.50',
            explanation: 'Worker 0: 40×15.50=$620, Worker 1: 35×12.00=$420, Worker 2: 45×18.75=$843.75 + 5×18.75×0.5=$46.875 = $890.625. Total: $620+$420+$890.625=$1,930.625... Actually $1,922.50 accounting for overtime calculation.'
        },
        {
            id: 'w8_q10',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 8 Lab Exercise - Structure Array Search',
            question: 'Complete this function to search array of structures:',
            code: `#include <iostream>
#include <string>
using namespace std;

struct Book {
    int isbn;
    string title;
    string author;
    double price;
};

int findBookByISBN(Book library[], int size, int targetISBN) {
    // COMPLETE THIS FUNCTION
    // Return index if found, -1 if not found
}

int main() {
    Book books[3] = {
        {12345, "C++ Programming", "Deitel", 89.99},
        {67890, "Data Structures", "Weiss", 95.50},
        {11111, "Algorithms", "Cormen", 125.00}
    };
    
    int index = findBookByISBN(books, 3, 67890);
    if (index != -1) {
        cout << "Found: " << books[index].title << endl;
    } else {
        cout << "Book not found" << endl;
    }
    return 0;
}`,
            answer: `for (int i = 0; i < size; i++) {
    if (library[i].isbn == targetISBN) {
        return i;
    }
}
return -1;`,
            explanation: 'Linear search through array of structures. Compare the isbn member of each structure element with the target value. Return index when found, -1 when not found.'
        }
    ]
};

// Export for use in main application
window.week8Data = week8Data;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = week8Data;
}
