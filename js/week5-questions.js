// Week 5: Sorting & Searching - From your extracted lab exercises
const week5Data = {
    title: 'Week 5: Sorting & Searching Algorithms',
    description: 'Master bubble sort, selection sort, insertion sort, linear search, binary search, and algorithm efficiency from your lab exercises.',
    
    // CHEAT SHEET FROM EXTRACTED LAB CONTENT
    cheatSheet: {
        title: "📚 Week 5 Sorting & Searching Reference - From Lab Exercises",
        sections: [
            {
                title: "🔄 Bubble Sort Algorithm",
                content: `
CONCEPT: Compare adjacent elements, swap if wrong order
Repeat until no swaps needed

IMPLEMENTATION:
void bubbleSort(int arr[], int size) {
    bool swap;
    do {
        swap = false;
        for (int i = 0; i < size-1; i++) {
            if (arr[i] > arr[i+1]) {
                // Swap elements
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swap = true;
            }
        }
    } while (swap);
}

TIME COMPLEXITY: O(n²) worst case`
            },
            {
                title: "🎯 Selection Sort Algorithm",
                content: `
CONCEPT: Find minimum element, place at beginning
Repeat for remaining unsorted portion

IMPLEMENTATION:
void selectionSort(int arr[], int size) {
    for (int start = 0; start < size-1; start++) {
        int minIndex = start;
        int minValue = arr[start];
        
        // Find minimum in remaining array
        for (int i = start+1; i < size; i++) {
            if (arr[i] < minValue) {
                minValue = arr[i];
                minIndex = i;
            }
        }
        
        // Swap minimum to front
        arr[minIndex] = arr[start];
        arr[start] = minValue;
    }
}`
            },
            {
                title: "📥 Insertion Sort Algorithm",
                content: `
CONCEPT: Build sorted array one element at a time
Insert each element in correct position

IMPLEMENTATION:
void insertionSort(int arr[], int size) {
    for (int i = 1; i < size; i++) {
        int key = arr[i];
        int j = i - 1;
        
        // Move elements greater than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

BEST for: Nearly sorted arrays`
            },
            {
                title: "🔍 Search Algorithms",
                content: `
LINEAR SEARCH (Unsorted arrays):
int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target)
            return i;  // Found at index i
    }
    return -1;  // Not found
}

BINARY SEARCH (Sorted arrays only):
int binarySearch(int arr[], int size, int target) {
    int first = 0, last = size - 1;
    while (first <= last) {
        int middle = (first + last) / 2;
        if (arr[middle] == target)
            return middle;
        else if (arr[middle] > target)
            last = middle - 1;
        else
            first = middle + 1;
    }
    return -1;
}`
            },
            {
                title: "📊 Algorithm Efficiency Comparison",
                content: `
SORTING ALGORITHM EFFICIENCY:
• Bubble Sort: O(n²) - Slowest, many swaps
• Selection Sort: O(n²) - Fewer swaps than bubble
• Insertion Sort: O(n²) - Best for small/nearly sorted

SEARCHING EFFICIENCY:
• Linear Search: O(n) - Works on any array
• Binary Search: O(log n) - Requires sorted array

WHEN TO USE:
• Small arrays (<50): Any sort works
• Large arrays: More advanced sorts (Quick, Merge)
• Frequent searches: Keep array sorted, use binary search`
            }
        ]
    },
    
    questions: [
        {
            id: 'w5_q1',
            type: 'MCQ',
            difficulty: '⭐ Easy',
            source: 'Week 5 Lab Exercise - Bubble Sort Manual Trace',
            question: 'Using Bubble Sort on [7, 2, 3, 8, 9, 1], what happens in the first pass?',
            options: [
                'a) Array becomes [1, 2, 3, 7, 8, 9]',
                'b) Largest element (9) moves to the end',
                'c) Array becomes completely sorted',
                'd) Only first two elements swap'
            ],
            correct: 1,
            answer: 'b) Largest element (9) moves to the end',
            explanation: `ANSWER: b) Largest element (9) moves to the end

DETAILED EXPLANATION:
This tests understanding of how bubble sort works during its first pass through the array.

BUBBLE SORT ALGORITHM OVERVIEW:
Bubble sort compares adjacent elements and swaps them if they're in wrong order, "bubbling" larger elements toward the end.

INITIAL ARRAY: [7, 2, 3, 8, 9, 1]

FIRST PASS STEP-BY-STEP TRACE:

COMPARISON 1: Compare arr[0] and arr[1]
- Compare 7 and 2
- 7 > 2, so swap
- Array becomes: [2, 7, 3, 8, 9, 1]

COMPARISON 2: Compare arr[1] and arr[2]
- Compare 7 and 3
- 7 > 3, so swap
- Array becomes: [2, 3, 7, 8, 9, 1]

COMPARISON 3: Compare arr[2] and arr[3]
- Compare 7 and 8
- 7 < 8, no swap needed
- Array remains: [2, 3, 7, 8, 9, 1]

COMPARISON 4: Compare arr[3] and arr[4]
- Compare 8 and 9
- 8 < 9, no swap needed
- Array remains: [2, 3, 7, 8, 9, 1]

COMPARISON 5: Compare arr[4] and arr[5]
- Compare 9 and 1
- 9 > 1, so swap
- Array becomes: [2, 3, 7, 8, 1, 9]

FIRST PASS RESULT: [2, 3, 7, 8, 1, 9]

KEY OBSERVATION:
The largest element (9) has "bubbled" to its correct final position at the end.

WHY OTHER OPTIONS ARE WRONG:

a) Array becomes [1, 2, 3, 7, 8, 9] - INCORRECT
   - This would be the final sorted result
   - Bubble sort takes multiple passes to achieve complete sorting
   - First pass only guarantees largest element is in place

c) Array becomes completely sorted - INCORRECT
   - Complete sorting requires multiple passes
   - Array [2, 3, 7, 8, 1, 9] is not fully sorted
   - Element 1 still needs to move to front

d) Only first two elements swap - INCORRECT
   - Multiple swaps occur in first pass
   - Swaps happen: positions (0,1), (1,2), and (4,5)
   - This describes only the first swap

BUBBLE SORT CHARACTERISTICS:

1. PASS GUARANTEE:
   - After pass 1: Largest element in final position
   - After pass 2: Two largest elements in final positions
   - After pass n-1: Array completely sorted

2. ADJACENT COMPARISONS:
   - Only compares neighboring elements
   - Swaps immediately when out of order
   - Large elements "bubble up" through swaps

3. MULTIPLE PASSES NEEDED:
   - First pass: n-1 comparisons
   - Second pass: n-2 comparisons (last element already sorted)
   - Continues until no swaps occur

COMPLETE BUBBLE SORT TRACE:
Initial: [7, 2, 3, 8, 9, 1]
Pass 1:  [2, 3, 7, 8, 1, 9] ← 9 in place
Pass 2:  [2, 3, 7, 1, 8, 9] ← 8 in place
Pass 3:  [2, 3, 1, 7, 8, 9] ← 7 in place
Pass 4:  [2, 1, 3, 7, 8, 9] ← 3 in place
Pass 5:  [1, 2, 3, 7, 8, 9] ← 2 in place, complete

ALGORITHM EFFICIENCY:
- Time Complexity: O(n²) worst case
- Space Complexity: O(1) - in-place sorting
- Stability: Yes - equal elements maintain relative order
- Best for: Small arrays or educational purposes

BUBBLE SORT OPTIMIZATION:
Early termination when no swaps occur:
bool swapped = true;
while (swapped) {
    swapped = false;
    for (int i = 0; i < n-1; i++) {
        if (arr[i] > arr[i+1]) {
            swap(arr[i], arr[i+1]);
            swapped = true;
        }
    }
    n--; // Last element is sorted
}

PRACTICAL APPLICATIONS:
- Educational tool for understanding sorting
- Small datasets where simplicity matters
- Detecting if array is already sorted
- Base case for hybrid sorting algorithms`
        },
        {
            id: 'w5_q2',
            type: 'Complete Code',
            difficulty: '⭐⭐ Medium',
            source: 'Week 5 Lab Exercise - Selection Sort Implementation',
            question: 'Complete this selection sort to display array after each swap:',
            code: `#include <iostream>
using namespace std;

void selectionSortWithDisplay(int arr[], int size) {
    for (int start = 0; start < size-1; start++) {
        int minIndex = start;
        
        // FIND MINIMUM ELEMENT IN REMAINING ARRAY
        
        // SWAP MINIMUM TO FRONT POSITION
        
        // DISPLAY ARRAY AFTER EACH SWAP
        cout << "After swap " << (start+1) << ": ";
        for (int i = 0; i < size; i++)
            cout << arr[i] << " ";
        cout << endl;
    }
}`,
            answer: `COMPLETE IMPLEMENTATION:
// Find minimum element in remaining unsorted portion
for (int i = start+1; i < size; i++) {
    if (arr[i] < arr[minIndex]) {
        minIndex = i;
    }
}

// Swap minimum element to front position
if (minIndex != start) {
    int temp = arr[start];
    arr[start] = arr[minIndex];
    arr[minIndex] = temp;
}`,
            explanation: `🔍 SELECTION SORT ALGORITHM BREAKDOWN:

🎯 CORE CONCEPT:
Selection sort finds the minimum element in the unsorted portion and places it at the beginning of that portion.

📋 STEP-BY-STEP IMPLEMENTATION:

1️⃣ FIND MINIMUM IN REMAINING ARRAY:
for (int i = start+1; i < size; i++) {
    if (arr[i] < arr[minIndex]) {
        minIndex = i;
    }
}

PROCESS:
• Start from position after 'start'
• Compare each element with current minimum
• Update minIndex when smaller element found
• After loop: minIndex points to smallest element

2️⃣ SWAP MINIMUM TO CORRECT POSITION:
if (minIndex != start) {
    int temp = arr[start];
    arr[start] = arr[minIndex];
    arr[minIndex] = temp;
}

OPTIMIZATION: Only swap if minimum isn't already in correct position

🚀 ALGORITHM TRACE EXAMPLE:
Initial array: [64, 25, 12, 22, 11]

Pass 1 (start=0):
• Find min in [25,12,22,11] → min=11 at index 4
• Swap arr[0] ↔ arr[4]: [11, 25, 12, 22, 64]

Pass 2 (start=1):  
• Find min in [25,12,22,64] → min=12 at index 2
• Swap arr[1] ↔ arr[2]: [11, 12, 25, 22, 64]

Pass 3 (start=2):
• Find min in [25,22,64] → min=22 at index 3
• Swap arr[2] ↔ arr[3]: [11, 12, 22, 25, 64]

Pass 4 (start=3):
• Find min in [25,64] → min=25 at index 3
• No swap needed: [11, 12, 22, 25, 64] ✅ SORTED!

⚡ PERFORMANCE CHARACTERISTICS:
• Time Complexity: O(n²) - always, regardless of input
• Space Complexity: O(1) - sorts in-place
• Stability: Not stable (equal elements may change relative order)
• Comparisons: Always (n-1) + (n-2) + ... + 1 = n(n-1)/2

🎯 ADVANTAGES:
• Simple to understand and implement
• Works well for small datasets
• Minimizes number of swaps (at most n-1)
• In-place sorting (no extra memory needed)

🎯 DISADVANTAGES:
• O(n²) time complexity even for sorted arrays
• Not adaptive (doesn't benefit from partial sorting)
• Not stable sorting algorithm`
        },
        {
            id: 'w5_q3',
            type: 'Find Error',
            difficulty: '⭐⭐ Medium',
            source: 'Week 5 Lab Exercise - Binary Search Debug',
            question: 'Find the error in this binary search implementation:',
            code: `int binarySearch(int arr[], int size, int target) {
    int first = 0, last = size;  // Error here!
    
    while (first <= last) {
        int middle = (first + last) / 2;
        if (arr[middle] == target)
            return middle;
        else if (arr[middle] > target)
            last = middle - 1;
        else
            first = middle + 1;
    }
    return -1;
}`,
            answer: `ERROR: last should be initialized to size-1, not size

CORRECTED LINE:
int first = 0, last = size - 1;`,
            explanation: `🚫 CRITICAL ARRAY BOUNDS ERROR:

❌ PROBLEMATIC LINE: int first = 0, last = size;

🔍 WHY THIS IS WRONG:
• Array indices range from 0 to size-1
• If array has 5 elements: valid indices are 0,1,2,3,4
• Setting last = size = 5 means we might access arr[5]
• arr[5] is OUT OF BOUNDS for a 5-element array!

✅ CORRECT INITIALIZATION: 
int first = 0, last = size - 1;

📊 VISUALIZATION:
Array: [10, 20, 30, 40, 50]  (size = 5)
Indices: 0   1   2   3   4

❌ Wrong: last = 5 → Can access arr[5] (doesn't exist!)
✅ Correct: last = 4 → Only access arr[0] through arr[4]

🚀 ALGORITHM TRACE WITH CORRECTION:
Search for 30 in [10, 20, 30, 40, 50]:

Initial: first=0, last=4
middle = (0+4)/2 = 2
arr[2] = 30 = target ✅ FOUND!

🚀 WHAT HAPPENS WITH THE BUG:
If we search for 50 in [10, 20, 30, 40, 50]:

❌ Buggy version (last=5):
middle = (0+5)/2 = 2
arr[2] = 30 ≠ 50, 30 < 50
first = middle + 1 = 3

middle = (3+5)/2 = 4  
arr[4] = 50 = target ✅ Found (by luck!)

But if we search for 60 (not in array):
Eventually: first=5, last=5
middle = 5
arr[5] → CRASH! Array access violation

💻 RUNTIME CONSEQUENCES:
• Segmentation fault / Access violation
• Unpredictable behavior  
• Program crash
• Memory corruption

🎯 BINARY SEARCH FUNDAMENTALS:
• Only works on SORTED arrays
• Eliminates half the search space each iteration
• Time complexity: O(log n)
• Space complexity: O(1)

🔄 COMPLETE CORRECTED FUNCTION:
int binarySearch(int arr[], int size, int target) {
    int first = 0, last = size - 1;  // ✅ Correct bounds
    
    while (first <= last) {
        int middle = (first + last) / 2;
        if (arr[middle] == target)
            return middle;          // Found at index middle
        else if (arr[middle] > target)
            last = middle - 1;      // Search left half
        else
            first = middle + 1;     // Search right half
    }
    return -1;                      // Not found
}`
        },
        {
            id: 'w5_q4',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 5 Lab Exercise - Algorithm Efficiency',
            question: 'For an array of 1000 elements, approximately how many comparisons does binary search make in the worst case?',
            options: [
                'a) 1000 comparisons',
                'b) 500 comparisons',
                'c) 10 comparisons',
                'd) 1 comparison'
            ],
            correct: 2,
            answer: 'c) 10 comparisons',
            explanation: `🎯 BINARY SEARCH COMPLEXITY ANALYSIS:

📊 ANSWER: c) 10 comparisons

🔍 MATHEMATICAL FOUNDATION:
Binary search has O(log₂ n) time complexity
For n = 1000: log₂(1000) ≈ 9.97 ≈ 10 comparisons

📋 STEP-BY-STEP CALCULATION:
2^? = 1000
2^10 = 1024 (closest power of 2 ≥ 1000)
Therefore: log₂(1000) ≈ 10

🚀 WORST-CASE TRACE (1000 elements):
Array size reduces by half each iteration:

Iteration 1: 1000 elements → Check middle, eliminate 500
Iteration 2: 500 elements → Check middle, eliminate 250  
Iteration 3: 250 elements → Check middle, eliminate 125
Iteration 4: 125 elements → Check middle, eliminate 62
Iteration 5: 62 elements → Check middle, eliminate 31
Iteration 6: 31 elements → Check middle, eliminate 15
Iteration 7: 15 elements → Check middle, eliminate 7
Iteration 8: 7 elements → Check middle, eliminate 3
Iteration 9: 3 elements → Check middle, eliminate 1
Iteration 10: 1 element → Final comparison

Total: 10 comparisons maximum!

📊 COMPARISON WITH OTHER ALGORITHMS:

LINEAR SEARCH: O(n)
• Best case: 1 comparison (first element)
• Worst case: 1000 comparisons (last element or not found)
• Average case: 500 comparisons

BINARY SEARCH: O(log₂ n) - REQUIRES SORTED ARRAY
• Best case: 1 comparison (middle element)
• Worst case: 10 comparisons (for 1000 elements)
• Average case: ~9 comparisons

⚡ EFFICIENCY COMPARISON:
Array Size | Linear Search | Binary Search
     10    |      10      |      4
    100    |     100      |      7
   1000    |    1000      |     10
  10000    |   10000      |     14
 100000    |  100000      |     17

🎯 WHY OTHER OPTIONS ARE WRONG:

a) 1000 comparisons - INCORRECT
   This is linear search worst case, not binary search

b) 500 comparisons - INCORRECT  
   This is linear search average case, not binary search

d) 1 comparison - INCORRECT
   This is binary search best case (target at middle), not worst case

🔑 KEY INSIGHTS:
• Binary search dramatically reduces comparisons
• Logarithmic growth means efficiency scales well
• 1000x larger array only needs ~3x more comparisons
• Trade-off: Requires sorted array (sorting cost)`
        },
        {
            id: 'w5_q5',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 5 Lab Exercise - Alternating Sum Vector',
            question: 'Complete this function that computes alternating sum of vector elements:',
            code: `#include <iostream>
#include <vector>
using namespace std;

// For vector [1, 4, 9, 16, 9, 7, 4, 9, 11]
// Should compute: 1-4+9-16+9-7+4-9+11 = -2
int alternatingSum(vector<int> v) {
    // COMPLETE THIS FUNCTION
}

int main() {
    vector<int> numbers = {1, 4, 9, 16, 9, 7, 4, 9, 11};
    cout << "Alternating sum: " << alternatingSum(numbers) << endl;
    return 0;
}`,
            answer: `COMPLETE IMPLEMENTATION:
int alternatingSum(vector<int> v) {
    int sum = 0;
    for (int i = 0; i < v.size(); i++) {
        if (i % 2 == 0) {
            sum += v[i];    // Add for even indices (0,2,4,...)
        } else {
            sum -= v[i];    // Subtract for odd indices (1,3,5,...)
        }
    }
    return sum;
}`,
            explanation: `🔄 ALTERNATING SUM ALGORITHM IMPLEMENTATION:

🎯 CONCEPT: Add elements at even indices, subtract elements at odd indices

📊 PATTERN ANALYSIS:
Index:  0  1  2  3  4  5  6  7  8
Values: 1  4  9 16  9  7  4  9 11
Action: + -  + -  + -  + -  +
Result: +1-4+9-16+9-7+4-9+11 = -2

📋 STEP-BY-STEP IMPLEMENTATION:

1️⃣ INITIALIZE SUM:
int sum = 0;

2️⃣ ITERATE THROUGH VECTOR:
for (int i = 0; i < v.size(); i++)

3️⃣ CHECK INDEX PARITY:
if (i % 2 == 0)  // Even index: 0,2,4,6,8...
   sum += v[i];   // ADD element
else             // Odd index: 1,3,5,7...  
   sum -= v[i];   // SUBTRACT element

🚀 EXECUTION TRACE:
Vector: [1, 4, 9, 16, 9, 7, 4, 9, 11]

i=0: 0%2==0 (even) → sum = 0 + 1 = 1
i=1: 1%2==1 (odd)  → sum = 1 - 4 = -3
i=2: 2%2==0 (even) → sum = -3 + 9 = 6
i=3: 3%2==1 (odd)  → sum = 6 - 16 = -10
i=4: 4%2==0 (even) → sum = -10 + 9 = -1
i=5: 5%2==1 (odd)  → sum = -1 - 7 = -8
i=6: 6%2==0 (even) → sum = -8 + 4 = -4
i=7: 7%2==1 (odd)  → sum = -4 - 9 = -13
i=8: 8%2==0 (even) → sum = -13 + 11 = -2

Final result: -2 ✅

💡 ALTERNATIVE IMPLEMENTATIONS:

METHOD 1 (Using Multiplier):
int alternatingSum(vector<int> v) {
    int sum = 0;
    for (int i = 0; i < v.size(); i++) {
        int sign = (i % 2 == 0) ? 1 : -1;
        sum += sign * v[i];
    }
    return sum;
}

METHOD 2 (Mathematical Approach):
int alternatingSum(vector<int> v) {
    int sum = 0;
    for (int i = 0; i < v.size(); i++) {
        sum += v[i] * pow(-1, i);  // (-1)^i gives alternating signs
    }
    return sum;
}

METHOD 3 (Range-based Loop with Index):
int alternatingSum(vector<int> v) {
    int sum = 0;
    for (size_t i = 0; i < v.size(); ++i) {
        sum += (i & 1) ? -v[i] : v[i];  // Bitwise check for odd/even
    }
    return sum;
}

🎯 KEY CONCEPTS:
• Modulo operator (%) determines even/odd indices
• Even indices: i % 2 == 0 → ADD element
• Odd indices: i % 2 == 1 → SUBTRACT element
• Pattern: +, -, +, -, +, -, ...

⚡ COMPLEXITY ANALYSIS:
• Time Complexity: O(n) - single pass through vector
• Space Complexity: O(1) - only uses sum variable
• Optimal solution - cannot be improved further`
        },
        {
            id: 'w5_q6',
            type: 'Debug Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 5 Lab Exercise - Sorting Benchmarks',
            question: 'Fix this sorting benchmark program that counts swaps:',
            code: `#include <iostream>
using namespace std;

int bubbleSortCount(int arr[], int size) {
    int swapCount;  // Error 1: Not initialized
    
    for (int pass = 0; pass < size; pass++) {  // Error 2: Too many passes
        for (int i = 0; i < size-1; i++) {
            if (arr[i] > arr[i+1]) {
                // Swap
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapCount++;
            }
        }
    }
    return swapCount;
}`,
            answer: `CORRECTED CODE:
int bubbleSortCount(int arr[], int size) {
    int swapCount = 0;  // Fix 1: Initialize to 0
    
    for (int pass = 0; pass < size-1; pass++) {  // Fix 2: size-1 passes
        for (int i = 0; i < size-1; i++) {
            if (arr[i] > arr[i+1]) {
                // Swap
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapCount++;
            }
        }
    }
    return swapCount;
}`,
            explanation: `🔍 BUBBLE SORT DEBUGGING ANALYSIS:

🚫 ERROR 1 - Uninitialized Variable:
❌ WRONG: int swapCount;
✅ CORRECT: int swapCount = 0;

PROBLEM: Uninitialized variable contains garbage value
CONSEQUENCE: Function returns unpredictable count
SOLUTION: Always initialize counters to 0

🚫 ERROR 2 - Excessive Loop Iterations:
❌ WRONG: for (int pass = 0; pass < size; pass++)
✅ CORRECT: for (int pass = 0; pass < size-1; pass++)

PROBLEM: Bubble sort needs at most n-1 passes for n elements
CONSEQUENCE: Unnecessary extra pass wastes computation
SOLUTION: Use size-1 for outer loop bound

📊 WHY n-1 PASSES ARE SUFFICIENT:

For 4-element array: [4, 3, 2, 1]

Pass 1: [3, 2, 1, 4] ← Largest element (4) "bubbled" to end
Pass 2: [2, 1, 3, 4] ← Second largest (3) in position  
Pass 3: [1, 2, 3, 4] ← Third largest (2) in position
                      ← Smallest (1) automatically in position!

🎯 BUBBLE SORT MECHANICS:
• Each pass moves the largest remaining element to its final position
• After k passes, the last k elements are correctly sorted
• After n-1 passes, all elements are sorted
• The nth pass would find no swaps needed (already sorted)

🚀 CORRECTED FUNCTION TRACE:
Array: [5, 2, 8, 1]  (size = 4)

Pass 0:
Compare 5,2 → swap → [2, 5, 8, 1] swapCount=1
Compare 5,8 → no swap
Compare 8,1 → swap → [2, 5, 1, 8] swapCount=2

Pass 1:  
Compare 2,5 → no swap
Compare 5,1 → swap → [2, 1, 5, 8] swapCount=3
Compare 5,8 → no swap

Pass 2:
Compare 2,1 → swap → [1, 2, 5, 8] swapCount=4
Compare 2,5 → no swap
Compare 5,8 → no swap

Total swaps: 4

⚡ OPTIMIZED VERSION (Early Termination):
int bubbleSortCount(int arr[], int size) {
    int swapCount = 0;
    bool swapped;
    
    for (int pass = 0; pass < size-1; pass++) {
        swapped = false;
        for (int i = 0; i < size-1-pass; i++) {  // Optimization: -pass
            if (arr[i] > arr[i+1]) {
                // Swap
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapCount++;
                swapped = true;
            }
        }
        if (!swapped) break;  // Array is sorted, stop early
    }
    return swapCount;
}

🎯 ADDITIONAL OPTIMIZATIONS:
1. Early termination when no swaps occur
2. Reduce inner loop bound each pass (size-1-pass)
3. These optimizations improve best-case performance

💻 PERFORMANCE CHARACTERISTICS:
• Best Case: O(n) - already sorted array
• Average Case: O(n²) - random order
• Worst Case: O(n²) - reverse sorted array
• Space: O(1) - in-place sorting`
        },
        {
            id: 'w5_q7',
            type: 'MCQ',
            difficulty: '⭐⭐ Medium',
            source: 'Week 5 Lab Exercise - Insertion Sort Manual Trace',
            question: 'Using Insertion Sort on [7, 2, 4, 6, 3, 1], what is the array after inserting 4?',
            options: [
                'a) [2, 4, 7, 6, 3, 1]',
                'b) [7, 2, 4, 6, 3, 1]',
                'c) [1, 2, 3, 4, 6, 7]',
                'd) [2, 7, 4, 6, 3, 1]'
            ],
            correct: 0,
            answer: 'a) [2, 4, 7, 6, 3, 1]',
            explanation: `🔄 INSERTION SORT STEP-BY-STEP TRACE:

📊 INITIAL ARRAY: [7, 2, 4, 6, 3, 1]

🎯 INSERTION SORT CONCEPT:
Build sorted portion one element at a time by inserting each element in its correct position within the already-sorted portion.

📋 DETAILED TRACE TO "INSERTING 4":

STEP 1 - Insert element at index 1 (value 2):
Current: [7, 2, 4, 6, 3, 1]
        sorted↑  unsorted portion
Key = 2, compare with 7
2 < 7, so shift 7 right and insert 2
Result: [2, 7, 4, 6, 3, 1]
       sorted portion↑

STEP 2 - Insert element at index 2 (value 4):  
Current: [2, 7, 4, 6, 3, 1]
       sorted↑  ↑key
Key = 4, compare within sorted portion [2, 7]
4 < 7, so shift 7 right: [2, _, 7, 6, 3, 1]
4 > 2, so insert 4 after 2
Result: [2, 4, 7, 6, 3, 1] ← ANSWER!
      sorted portion↑

🎯 WHY OPTION A IS CORRECT:
After inserting 4, the sorted portion is [2, 4, 7] and the remaining unsorted portion is [6, 3, 1].

❌ WHY OTHER OPTIONS ARE WRONG:

b) [7, 2, 4, 6, 3, 1] - INCORRECT
   This is the array BEFORE any insertion sort steps

c) [1, 2, 3, 4, 6, 7] - INCORRECT  
   This is the FINAL sorted array after all insertions

d) [2, 7, 4, 6, 3, 1] - INCORRECT
   This shows the state after inserting 2 but BEFORE inserting 4

🔍 INSERTION SORT ALGORITHM:
for (int i = 1; i < size; i++) {
    int key = arr[i];
    int j = i - 1;
    
    // Shift elements greater than key to right
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;  // Insert key in correct position
}

📊 VISUAL REPRESENTATION:
Initial:  [7, 2, 4, 6, 3, 1]
After 2:  [2, 7, 4, 6, 3, 1]  ← Element 2 inserted
After 4:  [2, 4, 7, 6, 3, 1]  ← Element 4 inserted ✅
After 6:  [2, 4, 6, 7, 3, 1]  ← Element 6 inserted
After 3:  [2, 3, 4, 6, 7, 1]  ← Element 3 inserted
After 1:  [1, 2, 3, 4, 6, 7]  ← Element 1 inserted (final)

🎯 KEY INSERTION SORT CHARACTERISTICS:
• Stable sort (maintains relative order of equal elements)
• Adaptive (efficient for nearly sorted arrays)
• Online (can sort array as it receives it)
• Time: O(n²) worst case, O(n) best case`
        },
        {
            id: 'w5_q8',
            type: 'Complete Code',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 5 Lab Exercise - Remove Duplicates Vector',
            question: 'Complete this function that removes duplicates from a vector:',
            code: `#include <iostream>
#include <vector>
using namespace std;

// Remove duplicates from [1, 4, 9, 16, 9, 7, 4, 9, 11]
// Result should be [1, 4, 9, 16, 7, 11]
void removeDuplicates(vector<int>& v) {
    // COMPLETE THIS FUNCTION
}

int main() {
    vector<int> numbers = {1, 4, 9, 16, 9, 7, 4, 9, 11};
    removeDuplicates(numbers);
    
    for (int num : numbers) {
        cout << num << " ";
    }
    return 0;
}`,
            answer: `COMPLETE IMPLEMENTATION:
void removeDuplicates(vector<int>& v) {
    for (int i = 0; i < v.size(); i++) {
        for (int j = i + 1; j < v.size(); j++) {
            if (v[i] == v[j]) {
                v.erase(v.begin() + j);
                j--;  // Adjust index after erase
            }
        }
    }
}`,
            explanation: `🔄 DUPLICATE REMOVAL ALGORITHM:

🎯 APPROACH: Nested loop comparison with vector erase

📋 STEP-BY-STEP IMPLEMENTATION:

1️⃣ OUTER LOOP (Reference Element):
for (int i = 0; i < v.size(); i++)
• i tracks the "reference" element to compare against
• Check each element against all elements that come after it

2️⃣ INNER LOOP (Comparison Elements):  
for (int j = i + 1; j < v.size(); j++)
• j starts from i+1 to avoid self-comparison
• Compare v[i] with each subsequent element v[j]

3️⃣ DUPLICATE DETECTION & REMOVAL:
if (v[i] == v[j]) {
    v.erase(v.begin() + j);  // Remove duplicate
    j--;                     // Adjust index
}
• When duplicate found, erase it immediately
• Decrement j because erasing shifts elements left

🚀 ALGORITHM TRACE:
Initial: [1, 4, 9, 16, 9, 7, 4, 9, 11]

i=0 (element 1):
• Check 1 vs 4,9,16,9,7,4,9,11 → No duplicates

i=1 (element 4):  
• Check 4 vs 9,16,9,7,4,9,11
• j=6: v[1]=4, v[6]=4 → DUPLICATE!
• Erase index 6: [1, 4, 9, 16, 9, 7, 9, 11]

i=2 (element 9):
• Check 9 vs 16,9,7,9,11  
• j=4: v[2]=9, v[4]=9 → DUPLICATE!
• Erase index 4: [1, 4, 9, 16, 7, 9, 11]
• j=6: v[2]=9, v[6]=9 → DUPLICATE!  
• Erase index 6: [1, 4, 9, 16, 7, 11]

Final result: [1, 4, 9, 16, 7, 11] ✅

⚠️ CRITICAL: Index Adjustment After Erase
j--;  // Must decrement j after erase!

WHY? When we erase element at index j:
• All elements after j shift left by one position
• The next element to check is now at the same index j
• Without j--, we would skip checking the shifted element

📊 ERASE OPERATION VISUALIZATION:
Before: [1, 4, 9, 16, 9, 7, 4, 9, 11]
               ↑
         Erase index 4 (value 9)
After:  [1, 4, 9, 16, 7, 4, 9, 11]
               ↑
         Element 7 now at index 4

💡 ALTERNATIVE IMPLEMENTATIONS:

METHOD 1 (Set-based approach):
void removeDuplicates(vector<int>& v) {
    set<int> seen;
    v.erase(remove_if(v.begin(), v.end(), 
        [&seen](int x) { return !seen.insert(x).second; }), 
        v.end());
}

METHOD 2 (Sort + unique):
void removeDuplicates(vector<int>& v) {
    sort(v.begin(), v.end());
    v.erase(unique(v.begin(), v.end()), v.end());
}

METHOD 3 (Two-pointer technique):  
void removeDuplicates(vector<int>& v) {
    if (v.empty()) return;
    int writeIndex = 1;
    for (int i = 1; i < v.size(); i++) {
        bool isDuplicate = false;
        for (int j = 0; j < writeIndex; j++) {
            if (v[i] == v[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            v[writeIndex++] = v[i];
        }
    }
    v.resize(writeIndex);
}

⚡ COMPLEXITY ANALYSIS:
• Time Complexity: O(n²) - nested loops
• Space Complexity: O(1) - in-place modification  
• Note: More efficient algorithms exist using hash sets O(n) time`
        },
        {
            id: 'w5_q9',
            type: 'MCQ',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 5 Lab Exercise - String Selection Sort',
            question: 'When modifying selection sort for strings, what changes are needed?',
            code: `void selectionSort(string arr[], int size) {
    for (int start = 0; start < size-1; start++) {
        int minIndex = start;
        for (int i = start+1; i < size; i++) {
            if (arr[i] < arr[minIndex]) {  // This line?
                minIndex = i;
            }
        }
        // Swap logic here
    }
}`,
            options: [
                'a) No changes needed - string comparison works with <',
                'b) Must use strcmp() function',
                'c) Must convert strings to lowercase first',
                'd) Must compare character by character manually'
            ],
            correct: 0,
            answer: 'a) No changes needed - string comparison works with <',
            explanation: `🔤 STRING COMPARISON IN C++ ANALYSIS:

📊 ANSWER: a) No changes needed - string comparison works with <

✅ WHY OPTION A IS CORRECT:
C++ string class has OVERLOADED COMPARISON OPERATORS that work perfectly for sorting!

🎯 C++ STRING COMPARISON FEATURES:

1️⃣ OVERLOADED OPERATORS:
string s1 = "apple";
string s2 = "banana";
bool result = s1 < s2;  // ✅ Works! Returns true

2️⃣ LEXICOGRAPHIC ORDERING:
• Comparison follows dictionary/alphabetical order
• Case-sensitive by default ('A' < 'a')
• Compares character by character using ASCII values

3️⃣ AUTOMATIC STRING SORTING:
void selectionSort(string arr[], int size) {
    for (int start = 0; start < size-1; start++) {
        int minIndex = start;
        for (int i = start+1; i < size; i++) {
            if (arr[i] < arr[minIndex]) {  // ✅ This works perfectly!
                minIndex = i;
            }
        }
        // Standard swap
        string temp = arr[start];
        arr[start] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

🚀 EXAMPLE EXECUTION:
Input: ["zebra", "apple", "banana", "cherry"]

Pass 1: Find min in ["zebra", "apple", "banana", "cherry"]
• "apple" < "zebra" ✓, "apple" < "banana" ✓, "apple" < "cherry" ✓  
• Result: ["apple", "zebra", "banana", "cherry"]

Pass 2: Find min in ["zebra", "banana", "cherry"]  
• "banana" < "zebra" ✓, "banana" < "cherry" ✓
• Result: ["apple", "banana", "zebra", "cherry"]

Pass 3: Find min in ["zebra", "cherry"]
• "cherry" < "zebra" ✓
• Result: ["apple", "banana", "cherry", "zebra"] ✅ SORTED!

❌ WHY OTHER OPTIONS ARE WRONG:

b) Must use strcmp() function - INCORRECT
• strcmp() is for C-style char* strings
• C++ string objects have built-in comparison
• Using strcmp() would require .c_str() conversion (unnecessary)

c) Must convert strings to lowercase first - INCORRECT  
• Depends on sorting requirements
• Basic lexicographic sort works without case conversion
• Case conversion is optional based on business logic

d) Must compare character by character manually - INCORRECT
• C++ string class handles this automatically
• Manual comparison defeats the purpose of using string class
• Would be error-prone and inefficient

🔍 DEEPER COMPARISON MECHANICS:
string comparison using < operator:

"apple" < "banana"
• Compare 'a' vs 'b': 'a'(97) < 'b'(98) ✓ → true
• No need to check remaining characters

"app" < "apple"  
• Compare 'a' vs 'a': equal, continue
• Compare 'p' vs 'p': equal, continue  
• Compare 'p' vs 'p': equal, continue
• "app" length < "apple" length ✓ → true

💡 ADVANCED STRING SORTING OPTIONS:

CASE-INSENSITIVE COMPARISON:
bool compareIgnoreCase(const string& a, const string& b) {
    string lowerA = a, lowerB = b;
    transform(lowerA.begin(), lowerA.end(), lowerA.begin(), ::tolower);
    transform(lowerB.begin(), lowerB.end(), lowerB.begin(), ::tolower);
    return lowerA < lowerB;
}

CUSTOM COMPARISON FUNCTION:
sort(arr, arr + size, compareIgnoreCase);

🎯 KEY TAKEAWAY:
C++ string class is designed for easy use - comparison operators work exactly as expected for sorting algorithms!`
        },
        {
            id: 'w5_q10',
            type: 'Find Error',
            difficulty: '⭐⭐⭐ Hard',
            source: 'Week 5 Lab Exercise - Same Set Function',
            question: 'Fix this function that checks if two arrays have same elements (ignoring order and duplicates):',
            code: `bool sameSet(int a[], int aSize, int b[], int bSize) {
    // First remove duplicates and sort both arrays
    sort(a, a + aSize);
    sort(b, b + bSize);
    
    // Compare sizes
    if (aSize != bSize) return false;  // Error here!
    
    // Compare elements
    for (int i = 0; i < aSize; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
}`,
            answer: `ERROR: Cannot compare original sizes after removing duplicates

CORRECTED APPROACH:
bool sameSet(int a[], int aSize, int b[], int bSize) {
    // Sort both arrays
    sort(a, a + aSize);
    sort(b, b + bSize);
    
    // Remove duplicates and get new sizes
    int newASize = unique(a, a + aSize) - a;
    int newBSize = unique(b, b + bSize) - b;
    
    // Compare sizes of unique elements
    if (newASize != newBSize) return false;
    
    // Compare unique elements
    for (int i = 0; i < newASize; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
}`,
            explanation: `🔍 SET COMPARISON ALGORITHM ERROR ANALYSIS:

🚫 FUNDAMENTAL LOGIC ERROR:
❌ WRONG: if (aSize != bSize) return false;

PROBLEM: Compares original array sizes instead of unique element counts!

📊 COUNTEREXAMPLE:
Array A: [1, 4, 9, 9, 7] (aSize = 5)
Array B: [1, 4, 9, 7]    (bSize = 4)

Unique elements in both: {1, 4, 7, 9}
Arrays have SAME SET of elements but DIFFERENT sizes!

The function incorrectly returns false due to 5 ≠ 4.

✅ CORRECT APPROACH:
1. Sort both arrays
2. Remove duplicates using unique()
3. Compare sizes of unique elements
4. Compare actual unique elements

📋 STEP-BY-STEP CORRECTION:

1️⃣ SORT BOTH ARRAYS:
sort(a, a + aSize);  // [1, 4, 7, 9, 9]
sort(b, b + bSize);  // [1, 4, 7, 9]

2️⃣ REMOVE DUPLICATES:
int newASize = unique(a, a + aSize) - a;  // Returns 4
int newBSize = unique(b, b + bSize) - b;  // Returns 4

After unique():
a: [1, 4, 7, 9, ?, ?] (newASize = 4)
b: [1, 4, 7, 9]       (newBSize = 4)

3️⃣ COMPARE UNIQUE SIZES:
if (newASize != newBSize) return false;  // 4 == 4, continue

4️⃣ COMPARE UNIQUE ELEMENTS:
for (int i = 0; i < newASize; i++) {
    if (a[i] != b[i]) return false;  // All match!
}
return true;  ✅ CORRECT RESULT

🔧 UNDERSTANDING unique() FUNCTION:
unique() removes CONSECUTIVE duplicates from sorted array:
• Requires sorted input
• Moves unique elements to front
• Returns iterator pointing past last unique element
• Original array size unchanged, but unique elements compacted

📊 unique() EXAMPLE:
Before: [1, 4, 7, 9, 9] (sorted)
After:  [1, 4, 7, 9, ?] (unique elements moved to front)
Return: pointer to position after last unique element

newSize = unique(arr, arr + size) - arr;  // Calculate unique count

💡 ALTERNATIVE IMPLEMENTATION (Using vectors):
bool sameSet(vector<int> a, vector<int> b) {
    // Sort both vectors
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    
    // Remove duplicates
    a.erase(unique(a.begin(), a.end()), a.end());
    b.erase(unique(b.begin(), b.end()), b.end());
    
    // Compare vectors directly
    return a == b;  // Vector comparison handles size and elements
}

💡 MODERN C++ APPROACH (Using sets):
bool sameSet(int a[], int aSize, int b[], int bSize) {
    set<int> setA(a, a + aSize);
    set<int> setB(b, b + bSize);
    return setA == setB;
}

🎯 KEY LESSON:
When dealing with "sets" (unique elements), always work with unique element counts, not original array sizes!

⚡ PERFORMANCE CONSIDERATIONS:
• sort(): O(n log n)
• unique(): O(n)  
• Overall: O(n log n) time complexity
• Space: O(1) for in-place approach`
        }
    ]
};

// Export for use in main application
window.week5Data = week5Data;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = week5Data;
}
