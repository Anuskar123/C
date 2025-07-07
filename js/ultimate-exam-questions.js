// Ultimate C++ Exam Questions Database
const ultimateExamQuestions = [
    // Basic C++ Concepts (Questions 1-8)
    {
        id: 1,
        type: 'mcq',
        difficulty: 'easy',
        topic: 'Basic Syntax',
        marks: 3,
        question: 'Which of the following is the correct way to declare a variable in C++?',
        options: [
            'int number;',
            'integer number;',
            'var number: int;',
            'declare int number;'
        ],
        correct: 0,
        explanation: 'In C++, variables are declared using the data type followed by the variable name. "int number;" is the correct syntax.'
    },
    {
        id: 2,
        type: 'fillblanks',
        difficulty: 'easy',
        topic: 'Basic Syntax',
        marks: 3,
        question: 'Complete the main function: _____ main() { return _____; }',
        blanks: ['int', '0'],
        explanation: 'The main function in C++ returns an integer and typically returns 0 to indicate successful execution.'
    },
    {
        id: 3,
        type: 'mcq',
        difficulty: 'easy',
        topic: 'Data Types',
        marks: 3,
        question: 'What is the size of an int data type in most modern systems?',
        options: [
            '2 bytes',
            '4 bytes',
            '8 bytes',
            'It depends on the compiler'
        ],
        correct: 1,
        explanation: 'On most modern 32-bit and 64-bit systems, an int is typically 4 bytes (32 bits).'
    },
    {
        id: 4,
        type: 'code',
        difficulty: 'easy',
        topic: 'Input/Output',
        marks: 5,
        question: 'Write a C++ program that asks the user to enter their name and then prints "Hello, [name]!"',
        sample_input: 'John',
        sample_output: 'Hello, John!',
        explanation: 'Use cout for output and cin for input. Remember to include <iostream> header.'
    },
    {
        id: 5,
        type: 'mcq',
        difficulty: 'easy',
        topic: 'Operators',
        marks: 3,
        question: 'What is the result of 15 % 4 in C++?',
        options: ['3', '3.75', '4', '15'],
        correct: 0,
        explanation: 'The modulus operator (%) returns the remainder of division. 15 ÷ 4 = 3 remainder 3.'
    },
    {
        id: 6,
        type: 'fillblanks',
        difficulty: 'easy',
        topic: 'Comments',
        marks: 2,
        question: 'The two ways to write comments in C++ are _____ for single line and _____ for multi-line.',
        blanks: ['//', '/* */'],
        explanation: '// is used for single-line comments, and /* */ is used for multi-line comments.'
    },
    {
        id: 7,
        type: 'mcq',
        difficulty: 'medium',
        topic: 'Control Flow',
        marks: 4,
        question: 'Which loop executes at least once regardless of the condition?',
        options: ['for loop', 'while loop', 'do-while loop', 'nested loop'],
        correct: 2,
        explanation: 'The do-while loop executes the body first, then checks the condition, guaranteeing at least one execution.'
    },
    {
        id: 8,
        type: 'text',
        difficulty: 'medium',
        topic: 'Arrays',
        marks: 4,
        question: 'Explain the difference between array declaration and array initialization in C++. Provide examples.',
        explanation: 'Declaration reserves memory (int arr[5];) while initialization assigns values (int arr[5] = {1,2,3,4,5};).'
    },

    // Intermediate Concepts (Questions 9-20)
    {
        id: 9,
        type: 'mcq',
        difficulty: 'medium',
        topic: 'Pointers',
        marks: 5,
        question: 'What does the following code print?\n\nint x = 10;\nint* ptr = &x;\ncout << *ptr;',
        options: ['Address of x', '10', 'Address of ptr', 'Garbage value'],
        correct: 1,
        explanation: '*ptr dereferences the pointer, giving us the value stored at the address it points to, which is 10.'
    },
    {
        id: 10,
        type: 'code',
        difficulty: 'medium',
        topic: 'Functions',
        marks: 6,
        question: 'Write a function called "factorial" that takes an integer parameter and returns its factorial. Include both the function definition and a main function to test it.',
        sample_input: '5',
        sample_output: '120',
        explanation: 'Factorial of n is n! = n × (n-1) × (n-2) × ... × 1. Can be implemented using recursion or iteration.'
    },
    {
        id: 11,
        type: 'fillblanks',
        difficulty: 'medium',
        topic: 'Strings',
        marks: 4,
        question: 'To use string operations in C++, include _____ header and declare strings using _____ data type.',
        blanks: ['<string>', 'string'],
        explanation: 'The <string> header provides the string class and related functions in C++.'
    },
    {
        id: 12,
        type: 'mcq',
        difficulty: 'medium',
        topic: 'References',
        marks: 5,
        question: 'What is the main difference between a pointer and a reference in C++?',
        options: [
            'References can be null, pointers cannot',
            'Pointers can be reassigned, references cannot',
            'References use more memory than pointers',
            'There is no difference'
        ],
        correct: 1,
        explanation: 'References must be initialized when declared and cannot be reassigned to refer to another object, unlike pointers.'
    },
    {
        id: 13,
        type: 'code',
        difficulty: 'medium',
        topic: 'Arrays',
        marks: 6,
        question: 'Write a function that finds the largest element in an integer array. The function should take the array and its size as parameters.',
        sample_input: 'Array: [3, 7, 1, 9, 4], Size: 5',
        sample_output: '9',
        explanation: 'Iterate through the array, keeping track of the maximum value found so far.'
    },
    {
        id: 14,
        type: 'text',
        difficulty: 'medium',
        topic: 'Memory Management',
        marks: 5,
        question: 'Explain the difference between stack and heap memory allocation in C++. When would you use each?',
        explanation: 'Stack: automatic, fast, limited size, for local variables. Heap: manual (new/delete), slower, larger, for dynamic allocation.'
    },
    {
        id: 15,
        type: 'mcq',
        difficulty: 'medium',
        topic: 'Structures',
        marks: 4,
        question: 'In C++, what is the default access specifier for struct members?',
        options: ['private', 'public', 'protected', 'friend'],
        correct: 1,
        explanation: 'In C++, struct members are public by default, unlike class members which are private by default.'
    },
    {
        id: 16,
        type: 'fillblanks',
        difficulty: 'medium',
        topic: 'File I/O',
        marks: 4,
        question: 'To work with files in C++, include _____ header and use _____ for input and _____ for output.',
        blanks: ['<fstream>', 'ifstream', 'ofstream'],
        explanation: 'fstream header provides file stream classes: ifstream for reading, ofstream for writing.'
    },
    {
        id: 17,
        type: 'code',
        difficulty: 'hard',
        topic: 'Recursion',
        marks: 7,
        question: 'Write a recursive function to calculate the nth Fibonacci number. Include both the function and a main function to test it.',
        sample_input: '6',
        sample_output: '8',
        explanation: 'Fibonacci: F(n) = F(n-1) + F(n-2), with F(0)=0, F(1)=1. The 6th Fibonacci number is 8.'
    },
    {
        id: 18,
        type: 'mcq',
        difficulty: 'hard',
        topic: 'Dynamic Memory',
        marks: 5,
        question: 'What happens if you forget to call delete after using new in C++?',
        options: [
            'Compilation error',
            'Runtime error',
            'Memory leak',
            'Nothing, C++ handles it automatically'
        ],
        correct: 2,
        explanation: 'Forgetting to delete dynamically allocated memory causes memory leaks, where memory remains allocated but inaccessible.'
    },
    {
        id: 19,
        type: 'text',
        difficulty: 'hard',
        topic: 'STL',
        marks: 6,
        question: 'Explain what STL is in C++ and list at least 3 containers with their use cases.',
        explanation: 'STL (Standard Template Library) provides containers (vector, list, map), algorithms, and iterators for common programming tasks.'
    },
    {
        id: 20,
        type: 'code',
        difficulty: 'medium',
        topic: 'Sorting',
        marks: 8,
        question: 'Implement bubble sort algorithm to sort an array of integers in ascending order. Include input/output functionality.',
        sample_input: 'Array: [64, 34, 25, 12, 22, 11, 90]',
        sample_output: 'Sorted: [11, 12, 22, 25, 34, 64, 90]',
        explanation: 'Bubble sort repeatedly compares adjacent elements and swaps them if they are in wrong order.'
    },

    // Advanced Concepts (Questions 21-32)
    {
        id: 21,
        type: 'mcq',
        difficulty: 'hard',
        topic: 'Classes',
        marks: 6,
        question: 'Which of the following is NOT a member of a class in C++?',
        options: [
            'Data members',
            'Member functions',
            'Constructors',
            'Global variables'
        ],
        correct: 3,
        explanation: 'Global variables are not members of a class. Class members include data members, member functions, and constructors/destructors.'
    },
    {
        id: 22,
        type: 'code',
        difficulty: 'hard',
        topic: 'Classes',
        marks: 10,
        question: 'Create a Student class with private data members: name (string), age (int), and grade (float). Include constructor, destructor, and getter/setter methods.',
        sample_input: 'Student s("Alice", 20, 85.5);',
        sample_output: 'Student created: Alice, Age: 20, Grade: 85.5',
        explanation: 'Demonstrate encapsulation with private data members and public methods for controlled access.'
    },
    {
        id: 23,
        type: 'fillblanks',
        difficulty: 'hard',
        topic: 'Inheritance',
        marks: 5,
        question: 'In C++, to inherit from a base class, use the _____ symbol. The access specifier _____ allows derived classes to access base class members.',
        blanks: [':', 'protected'],
        explanation: 'The colon (:) is used for inheritance. Protected members are accessible to derived classes but not to external code.'
    },
    {
        id: 24,
        type: 'mcq',
        difficulty: 'hard',
        topic: 'Polymorphism',
        marks: 6,
        question: 'What keyword is used to enable runtime polymorphism in C++?',
        options: ['virtual', 'override', 'static', 'const'],
        correct: 0,
        explanation: 'The virtual keyword enables runtime polymorphism by allowing function overriding in derived classes.'
    },
    {
        id: 25,
        type: 'text',
        difficulty: 'hard',
        topic: 'Operator Overloading',
        marks: 7,
        question: 'Explain operator overloading in C++. Why would you overload operators and what are the restrictions?',
        explanation: 'Operator overloading allows custom behavior for operators with user-defined types. Cannot create new operators or change precedence.'
    },
    {
        id: 26,
        type: 'code',
        difficulty: 'hard',
        topic: 'Templates',
        marks: 8,
        question: 'Write a template function called "getMax" that returns the maximum of two values of any data type.',
        sample_input: 'getMax(10, 20), getMax(3.14, 2.71)',
        sample_output: '20, 3.14',
        explanation: 'Templates allow writing generic code that works with multiple data types.'
    },
    {
        id: 27,
        type: 'mcq',
        difficulty: 'hard',
        topic: 'Exception Handling',
        marks: 5,
        question: 'Which block is used to handle exceptions in C++?',
        options: ['try-catch', 'if-else', 'switch-case', 'do-while'],
        correct: 0,
        explanation: 'try-catch blocks are used for exception handling. Code that might throw exceptions goes in try, handlers go in catch.'
    },
    {
        id: 28,
        type: 'fillblanks',
        difficulty: 'hard',
        topic: 'Constructors',
        marks: 6,
        question: 'A constructor that creates an object by copying another object is called a _____ constructor. It prevents _____ copy issues.',
        blanks: ['copy', 'shallow'],
        explanation: 'Copy constructors create new objects from existing ones. They prevent shallow copy problems with dynamic memory.'
    },
    {
        id: 29,
        type: 'code',
        difficulty: 'hard',
        topic: 'Linked Lists',
        marks: 12,
        question: 'Implement a simple singly linked list with functions to insert at beginning, delete a node, and display the list.',
        sample_input: 'Insert: 10, 20, 30. Delete: 20',
        sample_output: 'List: 10 -> 30 -> NULL',
        explanation: 'Linked lists use dynamic memory allocation with pointers to create flexible data structures.'
    },
    {
        id: 30,
        type: 'text',
        difficulty: 'expert',
        topic: 'Design Patterns',
        marks: 8,
        question: 'Explain the Singleton design pattern. How would you implement it in C++ and what are its use cases?',
        explanation: 'Singleton ensures only one instance of a class exists. Implemented using private constructor and static instance method.'
    },
    {
        id: 31,
        type: 'mcq',
        difficulty: 'expert',
        topic: 'Memory Management',
        marks: 6,
        question: 'What is the difference between delete and delete[] in C++?',
        options: [
            'delete is for single objects, delete[] is for arrays',
            'delete[] is faster than delete',
            'No difference, they are interchangeable',
            'delete[] checks bounds, delete does not'
        ],
        correct: 0,
        explanation: 'delete is used for single objects allocated with new, while delete[] is used for arrays allocated with new[].'
    },
    {
        id: 32,
        type: 'code',
        difficulty: 'expert',
        topic: 'Smart Pointers',
        marks: 10,
        question: 'Demonstrate the use of unique_ptr in C++. Create a simple example showing automatic memory management.',
        sample_input: 'Dynamic integer allocation',
        sample_output: 'Memory automatically released',
        explanation: 'unique_ptr provides automatic memory management and prevents memory leaks through RAII.'
    },

    // Expert Level (Questions 33-40)
    {
        id: 33,
        type: 'text',
        difficulty: 'expert',
        topic: 'Move Semantics',
        marks: 9,
        question: 'Explain move semantics in C++11. How do rvalue references improve performance?',
        explanation: 'Move semantics allow transferring resources instead of copying them, improving performance for expensive operations.'
    },
    {
        id: 34,
        type: 'code',
        difficulty: 'expert',
        topic: 'Lambda Functions',
        marks: 8,
        question: 'Write a lambda function that captures local variables and sorts a vector of integers in descending order using std::sort.',
        sample_input: 'Vector: [3, 1, 4, 1, 5, 9, 2, 6]',
        sample_output: 'Sorted: [9, 6, 5, 4, 3, 2, 1, 1]',
        explanation: 'Lambda functions provide anonymous function objects with capture lists for accessing local variables.'
    },
    {
        id: 35,
        type: 'mcq',
        difficulty: 'expert',
        topic: 'Concurrency',
        marks: 7,
        question: 'Which C++11 feature is used for thread synchronization?',
        options: ['std::thread', 'std::mutex', 'std::async', 'std::future'],
        correct: 1,
        explanation: 'std::mutex (mutual exclusion) is used to synchronize access to shared resources between threads.'
    },
    {
        id: 36,
        type: 'fillblanks',
        difficulty: 'expert',
        topic: 'RAII',
        marks: 6,
        question: 'RAII stands for _____ _____ Is _____. It ensures resources are _____ in destructors.',
        blanks: ['Resource', 'Acquisition', 'Initialization', 'released'],
        explanation: 'RAII is a C++ programming idiom that ties resource management to object lifetime.'
    },
    {
        id: 37,
        type: 'code',
        difficulty: 'expert',
        topic: 'Binary Trees',
        marks: 15,
        question: 'Implement a binary search tree with insertion, search, and inorder traversal functions.',
        sample_input: 'Insert: 50, 30, 70, 20, 40, 60, 80',
        sample_output: 'Inorder: 20 30 40 50 60 70 80',
        explanation: 'BST maintains sorted order: left subtree < root < right subtree. Inorder traversal gives sorted sequence.'
    },
    {
        id: 38,
        type: 'text',
        difficulty: 'expert',
        topic: 'STL Algorithms',
        marks: 7,
        question: 'Compare std::find, std::binary_search, and std::lower_bound. When would you use each?',
        explanation: 'find: linear search, binary_search: boolean result on sorted data, lower_bound: iterator to insertion point.'
    },
    {
        id: 39,
        type: 'mcq',
        difficulty: 'expert',
        topic: 'Template Specialization',
        marks: 8,
        question: 'What is template specialization in C++?',
        options: [
            'Creating templates with default parameters',
            'Providing specific implementations for certain types',
            'Using templates in multiple files',
            'Inheriting from template classes'
        ],
        correct: 1,
        explanation: 'Template specialization allows providing specific implementations of templates for particular types or values.'
    },
    {
        id: 40,
        type: 'code',
        difficulty: 'expert',
        topic: 'Advanced OOP',
        marks: 12,
        question: 'Design a Shape hierarchy with abstract base class Shape and derived classes Circle and Rectangle. Implement area calculation using virtual functions.',
        sample_input: 'Circle radius 5, Rectangle width 4 height 6',
        sample_output: 'Circle area: 78.54, Rectangle area: 24',
        explanation: 'Abstract base classes define interfaces. Virtual functions enable polymorphic behavior in derived classes.'
    }
];

// Question categories and difficulty levels
const questionCategories = {
    'Basic Syntax': { range: [1, 6], color: '#27ae60' },
    'Data Types': { range: [3, 3], color: '#3498db' },
    'Input/Output': { range: [4, 4], color: '#9b59b6' },
    'Operators': { range: [5, 5], color: '#e67e22' },
    'Comments': { range: [6, 6], color: '#34495e' },
    'Control Flow': { range: [7, 7], color: '#e74c3c' },
    'Arrays': { range: [8, 13, 20], color: '#f39c12' },
    'Pointers': { range: [9, 9], color: '#1abc9c' },
    'Functions': { range: [10, 10], color: '#2ecc71' },
    'Strings': { range: [11, 11], color: '#8e44ad' },
    'References': { range: [12, 12], color: '#d35400' },
    'Memory Management': { range: [14, 18, 31], color: '#c0392b' },
    'Structures': { range: [15, 15], color: '#16a085' },
    'File I/O': { range: [16, 16], color: '#7f8c8d' },
    'Recursion': { range: [17, 17], color: '#9c88ff' },
    'Dynamic Memory': { range: [18, 18], color: '#ff6b6b' },
    'STL': { range: [19, 38], color: '#4ecdc4' },
    'Sorting': { range: [20, 20], color: '#45b7d1' },
    'Classes': { range: [21, 22], color: '#96ceb4' },
    'Inheritance': { range: [23, 23], color: '#ffeaa7' },
    'Polymorphism': { range: [24, 24], color: '#dda0dd' },
    'Operator Overloading': { range: [25, 25], color: '#98d8c8' },
    'Templates': { range: [26, 39], color: '#f7dc6f' },
    'Exception Handling': { range: [27, 27], color: '#bb8fce' },
    'Constructors': { range: [28, 28], color: '#85c1e9' },
    'Linked Lists': { range: [29, 29], color: '#f8c471' },
    'Design Patterns': { range: [30, 30], color: '#d7bde2' },
    'Smart Pointers': { range: [32, 32], color: '#a9dfbf' },
    'Move Semantics': { range: [33, 33], color: '#f9e79f' },
    'Lambda Functions': { range: [34, 34], color: '#d5a6bd' },
    'Concurrency': { range: [35, 35], color: '#aed6f1' },
    'RAII': { range: [36, 36], color: '#a3e4d7' },
    'Binary Trees': { range: [37, 37], color: '#f4d03f' },
    'Advanced OOP': { range: [40, 40], color: '#cd6155' }
};

const difficultyLevels = {
    easy: { 
        name: 'Easy', 
        stars: '⭐', 
        color: '#27ae60', 
        description: 'Basic concepts and syntax',
        timePerQuestion: 2 
    },
    medium: { 
        name: 'Medium', 
        stars: '⭐⭐', 
        color: '#f39c12', 
        description: 'Intermediate programming concepts',
        timePerQuestion: 4 
    },
    hard: { 
        name: 'Hard', 
        stars: '⭐⭐⭐', 
        color: '#e74c3c', 
        description: 'Advanced topics and problem solving',
        timePerQuestion: 6 
    },
    expert: { 
        name: 'Expert', 
        stars: '⭐⭐⭐⭐', 
        color: '#8e44ad', 
        description: 'Expert level concepts and design',
        timePerQuestion: 8 
    }
};

// Exam configuration presets
const examPresets = {
    'quick-quiz': {
        name: 'Quick Quiz',
        description: 'Short assessment - 10 questions',
        duration: 20,
        totalQuestions: 10,
        difficulty: ['easy', 'medium'],
        topics: ['Basic Syntax', 'Data Types', 'Control Flow', 'Functions']
    },
    'midterm': {
        name: 'Midterm Exam',
        description: 'Comprehensive midterm - 20 questions',
        duration: 45,
        totalQuestions: 20,
        difficulty: ['easy', 'medium', 'hard'],
        topics: ['Basic Syntax', 'Arrays', 'Pointers', 'Functions', 'Classes']
    },
    'final': {
        name: 'Final Exam',
        description: 'Complete assessment - 30 questions',
        duration: 90,
        totalQuestions: 30,
        difficulty: ['easy', 'medium', 'hard', 'expert'],
        topics: 'all'
    },
    'expert-challenge': {
        name: 'Expert Challenge',
        description: 'Advanced topics only - 15 questions',
        duration: 60,
        totalQuestions: 15,
        difficulty: ['hard', 'expert'],
        topics: ['Templates', 'STL', 'Advanced OOP', 'Concurrency']
    }
};

// Utility functions
function getQuestionsByDifficulty(difficulty) {
    return ultimateExamQuestions.filter(q => q.difficulty === difficulty);
}

function getQuestionsByTopic(topic) {
    return ultimateExamQuestions.filter(q => q.topic === topic);
}

function getRandomQuestions(count, difficulties = ['easy', 'medium', 'hard'], topics = 'all') {
    let filteredQuestions = ultimateExamQuestions.filter(q => 
        difficulties.includes(q.difficulty) &&
        (topics === 'all' || topics.includes(q.topic))
    );
    
    // Shuffle array
    for (let i = filteredQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
    }
    
    return filteredQuestions.slice(0, count);
}

function calculateTotalMarks(questions) {
    return questions.reduce((total, question) => total + question.marks, 0);
}

function estimateExamDuration(questions) {
    return questions.reduce((total, question) => {
        const timePerQuestion = difficultyLevels[question.difficulty].timePerQuestion;
        return total + timePerQuestion;
    }, 0);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ultimateExamQuestions,
        questionCategories,
        difficultyLevels,
        examPresets,
        getQuestionsByDifficulty,
        getQuestionsByTopic,
        getRandomQuestions,
        calculateTotalMarks,
        estimateExamDuration
    };
}
