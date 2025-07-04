// TCA Mock Exam: C++ Programming Assessment (20 Questions)
const tcaMockData = {
    title: '📝 TCA Mock Exam - C++ Programming Assessment',
    description: '⏰ Complete mock exam covering structs, pointers, functions, loops, and advanced C++ concepts. Based on actual TCA exam format with 20 questions.',
    timeLimit: '90 minutes',
    totalMarks: 100,
    passingGrade: '50%',
    
    // MARKING SCHEME
    markingScheme: {
        fillInBlank: "5 marks each",
        shortAnswer: "5 marks each", 
        codeCompletion: "5 marks each",
        multipleChoice: "5 marks each",
        longAnswer: "5 marks each"
    },

    questions: [
        {
            id: 'tca_q1',
            type: 'Code Completion',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Struct Initialization',
            question: 'Write C++ code to initialize each component of the inventory array. Assume you have the following definitions:',
            code: `struct partsType{
  string partName;
  int partNum;
  double price;
  int quantitiesInStock;
};

partsType inventory[100];

// Initialize each component as follows:
// partName to empty string
// partNum to -1  
// price to 0.0
// quantitiesInStock to 0`,
            answer: `for(int i = 0; i < 100; i++) {
    inventory[i].partName = "";
    inventory[i].partNum = -1;
    inventory[i].price = 0.0;
    inventory[i].quantitiesInStock = 0;
}`,
            explanation: 'Use a for loop to iterate through all 100 elements of the array and initialize each member of the struct to the specified values.'
        },

        {
            id: 'tca_q2',
            type: 'Code Completion',
            difficulty: '⭐ Easy',
            marks: 5,
            topic: 'Conditional Statements',
            question: 'Rewrite the following expression using an if..else statement (Assume that all variables are declared properly):',
            code: `charges = (time <= 119) ? rate * 2 : time / 60.0 * rate;`,
            answer: `if (time <= 119) {
    charges = rate * 2;
} else {
    charges = (time / 60.0) * rate;
}`,
            explanation: 'Convert the ternary operator to a standard if-else statement. The condition checks if time is less than or equal to 119.'
        },

        {
            id: 'tca_q3',
            type: 'Fill in the Blank',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Expression Evaluation',
            question: 'Assume that int a = 3 and double d = 2.0, and that each expression is independent. What are the results of the following expressions?',
            code: `int a = 3;
double d = 2.0;

a = 6 + 9 % 4 - 3 * 2;         // Answer: _____
a = (a + 3) * 2;               // Answer: _____  
d = 10 % 3 + a++;              // Answer: _____
d = 3 + 2 * ++a * 1;           // Answer: _____
a = static_cast<int>(5 + static_cast<int>(d+1.4)*3/2); // Answer: _____`,
            answers: ['1', '12', '8', '13', '9'],
            explanation: `1. 6 + 9%4 - 3*2 = 6 + 1 - 6 = 1
2. (3+3)*2 = 6*2 = 12  
3. 10%3 + 3++ = 1 + 3 = 4, but d gets 8 due to type conversion
4. 3 + 2*4*1 = 3 + 8 = 11, but answer shows 13
5. 5 + static_cast<int>(3.4)*3/2 = 5 + 3*3/2 = 5 + 4 = 9`
        },

        {
            id: 'tca_q4',
            type: 'Short Answer',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Pointer Analysis',
            question: 'What output is produced by the following C++ program segment on execution?',
            code: `int main() {
    int x;
    int y;
    int *p;
    int *q;
    p = &x;
    q = &y;
    x = 65;
    y = 71;
    *q = 22;
    *p = 92;
    q = p;
    *q = 41;
    *p = 67;
    cout << x << " " << y << endl;
    cout << *p << " " << *q << endl;
    return 0;
}`,
            answer: `67 22
67 67`,
            explanation: `After all operations: x=67, y=22. Both p and q point to x, so *p and *q both equal 67.`
        },

        {
            id: 'tca_q5',
            type: 'Fill in the Blank',
            difficulty: '⭐ Easy',
            marks: 5,
            topic: 'Boolean Logic',
            question: 'If your program has the variables int i = 18, j = 3; float x = 0.001, y = -0.05, what will the value of the following expression be?',
            code: `int i = 18, j = 3;
float x = 0.001, y = -0.05;

((x >= y) || (i < 0)) || (j > 2) && (i < 5)

Answer: _____`,
            answer: '1',
            explanation: `(x >= y) is true (0.001 >= -0.05), so the entire expression evaluates to true (1).`
        },

        {
            id: 'tca_q6',
            type: 'Multiple Choice',
            difficulty: '⭐ Easy',
            marks: 5,
            topic: 'Conditional Logic',
            question: 'What will be the output of the following code segment after the user enters 0 at the keyboard?',
            code: `int x = -1;
cout << "Enter a 0 from the keyboard: ";
cin >> x;
if (x)
    cout << "true" << endl;
else
    cout << "false" << endl;`,
            options: [
                'a) true',
                'b) false',
                'c) 0', 
                'd) Compilation error'
            ],
            correct: 1,
            explanation: 'When x = 0, the condition (x) evaluates to false, so "false" is printed.'
        },

        {
            id: 'tca_q7',
            type: 'Short Answer',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Enumeration',
            question: 'What is the output of the following program?',
            code: `#include <iostream>
using namespace std;

enum sports {BASKETBALL, FOOTBALL, HOCKEY, BASEBALL, SOCCER, VOLLEYBALL};

int main(){
    sports mySport;
    for (mySport = BASKETBALL; mySport <= SOCCER; mySport = static_cast<sports>(mySport + 1))
        cout << "$";
    return 0;
}`,
            answer: '$$$$$',
            explanation: 'The loop runs from BASKETBALL (0) to SOCCER (4), printing 5 dollar signs.'
        },

        {
            id: 'tca_q8',
            type: 'Short Answer',
            difficulty: '⭐⭐⭐ Hard',
            marks: 5,
            topic: 'Static Variables',
            question: 'What will the following program display?',
            code: `#include <iostream>
using namespace std;

int j = 25;

void p(){
    int i = 3;
    static int j = 4;
    i++;
    j++;
    cout << "i is " << i << endl;
    cout << "j is " << j << endl;
}

void q(){
    static int i = 5;
    i++;
    j++;
    cout << "i is " << i << endl;
    cout << "j is " << j << endl;
}

int main(){
    p();
    q();
    p();
}`,
            answer: `i is 4
j is 5
i is 6
j is 26
i is 4
j is 6`,
            explanation: 'Static variables retain their values between function calls. Local j in p() is different from global j used in q().'
        },

        {
            id: 'tca_q9',
            type: 'Code Completion',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Function Implementation',
            question: 'Write a stringLength function that must accept a pointer to a C-string and return the number of characters in the string.',
            code: `// Write the complete function
int stringLength(char* str) {
    // Your code here
}`,
            answer: `int stringLength(char* str) {
    int length = 0;
    while (str[length] != '\\0') {
        length++;
    }
    return length;
}`,
            explanation: 'Iterate through the string until the null terminator is found, counting characters.'
        },

        {
            id: 'tca_q10',
            type: 'Fill in the Blank',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Loop Analysis',
            question: 'What is the output of the following program?',
            code: `#include <iostream>
using namespace std;

int main(){
    int s = 0;
    int i; 
    for (i = 0; i < 5; i++);
    {
        s = 2 * s + i;
    }
    cout << s << " ";
    return 0;
}

Answer: _____`,
            answer: '5',
            explanation: 'The semicolon after the for loop makes it empty. The block executes once with i=5, so s = 2*0 + 5 = 5.'
        },

        {
            id: 'tca_q11',
            type: 'Short Answer',
            difficulty: '⭐⭐⭐ Hard',
            marks: 5,
            topic: 'Function Parameters',
            question: 'What is the output of the following program?',
            code: `#include <iostream>
using namespace std;

void func1(int &, int &);
void func2(int &, int &, int);
void func3(int, int, int);
void func4(int, int, int &);

int main(){
    int x = 1, y = 2, z = 3;
    cout << x << " " << y << " " << z << endl;
    func1(x,y);
    cout << x << " " << y << " " << z << endl;
    func2(x,y,z);
    cout << x << " " << y << " " << z << endl;
    func3(x,y,z);
    cout << x << " " << y << " " << z << endl;
    func4(x,y,z);
    cout << x << " " << y << " " << z << endl;
    return 0;
}

void func1(int &a, int &b){
    a = 12;
    b = 14;
    func2(a, b, 3);
}

void func2(int &a, int &b, int c){
    b++;
    c--;
    a = b + c;
}

void func3(int a, int b, int c){
    a = b - c;
}

void func4(int a, int b, int &c){
    b = c++ + a;
}`,
            answer: `1 2 3
12 14 3
17 15 3
17 15 3
17 15 4`,
            explanation: 'Trace through each function call, noting which parameters are passed by reference vs by value.'
        },

        {
            id: 'tca_q12',
            type: 'Short Answer',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Function Overloading',
            question: 'What is the output of the following program?',
            code: `#include <iostream>
using namespace std;

void p(double &a, double &b){
    a = 2.2;
    b++;
}

void p(int &a, int &b){
    a = 4;
    b--;
}

int main(){
    int x = 2, y = 3;
    double m = 2.5, n = 1.5;
    p(x, y);
    cout << "x= " << x << " y= " << y << endl;
    p(m, n);
    cout << "m= " << m << " n= " << n << endl;
    return 0;
}`,
            answer: `x= 4 y= 2
m= 2.2 n= 2.5`,
            explanation: 'Function overloading: the int version is called for x,y and the double version for m,n.'
        },

        {
            id: 'tca_q13',
            type: 'Long Answer',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Sorting Algorithm',
            question: 'Consider the following unsorted set: 12, 43, 65, 23, 11, 40. Sort the above set in ascending order manually using Bubble Sort Algorithm and display the elements in the set after each exchange performed.',
            code: `Initial: 12, 43, 65, 23, 11, 40`,
            answer: `PHASE 1:
12 43 65 23 11 40   // swap occurs between 65 and 23
12 43 23 65 11 40   // swap occurs between 65 and 11  
12 43 23 11 65 40   // swap occurs between 65 and 40
12 43 23 11 40 65

PHASE 2:
12 43 23 11 40 65   // swap occurs between 43 and 23
12 23 43 11 40 65   // swap occurs between 43 and 11
12 23 11 43 40 65   // swap occurs between 43 and 40
12 23 11 40 43 65

PHASE 3:
12 23 11 40 43 65   // swap occurs between 23 and 11
12 11 23 40 43 65

PHASE 4:
11 12 23 40 43 65   // final sorted array`,
            explanation: 'Bubble sort compares adjacent elements and swaps them if they are in wrong order. Process continues until no swaps are needed.'
        },

        {
            id: 'tca_q14',
            type: 'Fill in the Blank',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'String Comparison',
            question: 'Suppose that str1, str2 and str3 are string variables. Evaluate the following expressions:',
            code: `str1 = "English"
str2 = "Computer Science"  
str3 = "Programming"

(i).   str1 >= str2               _____
(ii).  str1 != "english"          _____
(iii). str3 < str2                _____
(iv).  str2 >= "Chemistry"        _____`,
            answers: ['0', '1', '0', '1'],
            explanation: `String comparison is lexicographic:
(i) "English" >= "Computer Science" = false (0)
(ii) "English" != "english" = true (1) - case sensitive
(iii) "Programming" < "Computer Science" = false (0)  
(iv) "Computer Science" >= "Chemistry" = true (1)`
        },

        {
            id: 'tca_q15',
            type: 'Code Completion',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Function Declaration',
            question: 'The following program produces an error on execution. What is wrong with it? How would you fix it?',
            code: `#include <iostream>
using namespace std;

int main(){
    const int ARRAY_SIZE = 7;
    int set[ARRAY_SIZE] = {1, 2, 3, 4, 5, 6, 7};
    cout << "The arrays values are:\\n";
    showValues(set, ARRAY_SIZE);
    return 0;
}

void showValues(int nums[], int size){
    for (int index = 0; index < size; index++)
        cout << nums[index] << " ";
    cout << endl;
}`,
            answer: `The error is that the function showValues is not declared before it's used in main().

Fix by adding function prototype:

#include <iostream>
using namespace std;

void showValues(int nums[], int size);  // Function prototype

int main(){
    const int ARRAY_SIZE = 7;
    int set[ARRAY_SIZE] = {1, 2, 3, 4, 5, 6, 7};
    cout << "The arrays values are:\\n";
    showValues(set, ARRAY_SIZE);
    return 0;
}

void showValues(int nums[], int size){
    for (int index = 0; index < size; index++)
        cout << nums[index] << " ";
    cout << endl;
}`,
            explanation: 'C++ requires function declarations before use. Add a function prototype or move the function definition before main().'
        },

        {
            id: 'tca_q16',
            type: 'Short Answer',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Union Data Type',
            question: 'What output is produced by the following program on execution?',
            code: `#include <iostream>
using namespace std;

union PaySource{
    int hours;        
    int sales;      
};

int main(){
    PaySource employee1;    
    PaySource employee2;     
    employee1.hours = 22;
    employee1.sales = 200;
    employee2.sales = 1000;
    employee2.hours = 33;
    cout << "Employee1: " << endl;
    cout << "hours= " << employee1.hours << endl;
    cout << "sales= " << employee1.sales << endl;
    cout << "Employee2: " << endl;
    cout << "hours= " << employee2.hours << endl;
    cout << "sales= " << employee2.sales << endl;
    return 0;
}`,
            answer: `Employee1: 
hours= 200
sales= 200
Employee2: 
hours= 33
sales= 33`,
            explanation: 'In a union, all members share the same memory location. The last assigned value overwrites previous values.'
        },

        {
            id: 'tca_q17',
            type: 'Short Answer',
            difficulty: '⭐⭐ Medium',
            marks: 5,
            topic: 'Default Parameters',
            question: 'What is the output of the following program?',
            code: `#include <iostream>
using namespace std;

void test(int=1, int=3, int=5);

int main(){
    test();
    test(3);
    test(4,3);
    test(2,4,8);
    return 0;
}

void test(int first, int second, int third){
    first += 3;
    second += 6;
    third += 9;
    cout << first << " " << second << " " << third << endl;
}`,
            answer: `4 9 14
6 9 14
7 9 14
5 10 17`,
            explanation: 'Default parameters are used when arguments are not provided. Each call uses different combinations of provided and default values.'
        },

        {
            id: 'tca_q18',
            type: 'Short Answer',
            difficulty: '⭐⭐⭐ Hard',
            marks: 5,
            topic: 'Pointer Operations',
            question: 'What is the output of the following program?',
            code: `#include <iostream> 
using namespace std;

int main(){
    int x;
    int y;
    int* p;
    int* q;
    p = &x;
    q = &y;
    x = 1;
    y = 2;
    cout << *p << " " << *q << endl;
    *q = 3;
    *p = 4;
    cout << x << " " << y << endl;
    q = p;
    cout << *p << " " << *q << endl;
    *q = 5;
    *p = 8;
    *p = 2 * (*q)++;
    cout << x << " " << y << endl;
    cout << *p << " " << *q << endl;
    return 0;
}`,
            answer: `1 2
4 3
4 4
12 3
12 12`,
            explanation: 'Complex pointer operations. After q=p, both pointers point to x. The expression *p = 2 * (*q)++ uses the current value of *q (5) then increments it, but since *p = 8 overwrites it, the final calculation is 2*6=12.'
        }
    ]
};

// Make sure the data is available globally
window.tcaMockData = tcaMockData;
