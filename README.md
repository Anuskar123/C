# C++ Ultimate Question Bank - Interactive Website

## 📚 Overview

This is a comprehensive, interactive study guide for C++ programming covering all 9 weeks of coursework plus additional exercises. The website features:

- **Interactive Questions**: Click to reveal answers with detailed explanations
- **Multiple Question Types**: MCQs, Find the Error, Predict Output, Complete Code, Brain Teasers
- **Week-by-Week Organization**: Navigate through each week's content
- **Modern UI**: Beautiful, responsive design that works on all devices
- **Quick Reference**: Instant access to C++ syntax and concepts

## 🚀 Features

### Question Types
1. **🧠 Multiple Choice Questions (MCQs)** - 4 options with detailed explanations
2. **🔍 Find the Error** - Spot bugs in code snippets
3. **📊 Predict the Output** - Trace code execution
4. **✍️ Complete the Code** - Fill in missing implementations
5. **🎯 Brain Teasers** - Tricky logic puzzles

### Difficulty Levels
- ⭐ **Easy** - Basic concept application
- ⭐⭐ **Medium** - Requires thinking & analysis  
- ⭐⭐⭐ **Hard** - Tricky logic & edge cases

## 📁 File Structure

```
website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and animations
└── js/
    └── main.js         # Interactive functionality and questions
```

## 🖥️ How to Use

### 1. Opening the Website
- Double-click `index.html` to open in your browser
- Or right-click → "Open with" → Choose your browser

### 2. Navigation
- **Overview Tab**: See all weeks and question types
- **Quick Reference Tab**: Access C++ cheat sheet
- **Week Tabs**: Navigate to specific week content
- **Mixed Tab**: Advanced cross-topic challenges

### 3. Answering Questions
- Read the question and code (if provided)
- For MCQs: Click on an option to select it
- Click "Show Answer" to reveal the correct answer
- Read the detailed explanation to understand the concept

### 4. Week Cards
- Click on any week card in the Overview to jump directly to that week's questions

## 🎯 Week Coverage

### Week 1: Basic Input/Output & Variables
- Hello World variations
- Variable types & declarations
- Input/output operations
- Temperature conversions
- Ticket price calculations

### Week 2: Control Structures & Loops
- If-else statements
- For, while, do-while loops
- Nested loops & patterns
- Prime numbers & factorials
- Number guessing games

### Week 3: Functions
- Function declaration & definition
- Parameter passing (by value, reference)
- Return values
- Function overloading
- Scope & local variables

### Week 4: Arrays
- 1D and 2D arrays
- Array processing
- Searching & validation
- Statistical calculations

### Week 5: Sorting & Searching
- Bubble, selection, insertion sort
- Binary search
- Vector operations
- Algorithm efficiency

### Week 6: Pointers & Dynamic Memory
- Pointer basics
- Dynamic memory allocation (new/delete)
- Pointer arithmetic
- Arrays & pointers
- Memory management

### Week 7: Strings & C-strings
- String class methods
- C-string functions
- String manipulation
- Character processing
- String algorithms

### Week 8: Structures
- Structure definition
- Member access (. and ->)
- Arrays of structures
- Structure functions
- Data organization

### Week 9: Recursion
- Recursive functions
- Base cases
- Recursive algorithms
- Tail recursion
- Iterative vs recursive solutions

### Mixed Challenges
- Cross-topic problems
- Advanced brain teasers
- Error detection challenges
- Complex code analysis

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Structure and content
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript**: Interactive functionality and dynamic content
- **Prism.js**: Syntax highlighting for code blocks
- **Google Fonts**: Inter font family for clean typography

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

### Responsive Design
- Desktop: Full feature experience
- Tablet: Optimized layout
- Mobile: Touch-friendly interface

## 🎨 Customization

### Adding New Questions
Edit `js/main.js` and add questions to the appropriate week in the `weekDataMap` object:

```javascript
{
    id: 'unique_id',
    type: 'MCQ', // or 'Find Error', 'Predict Output', etc.
    difficulty: '⭐⭐ Medium',
    question: 'Your question here',
    code: 'code snippet if needed',
    options: ['a) option1', 'b) option2', 'c) option3', 'd) option4'], // for MCQs
    correct: 0, // index of correct option (for MCQs)
    answer: 'The correct answer',
    explanation: 'Detailed explanation of why this is correct'
}
```

### Styling Changes
Modify `css/styles.css` to change:
- Colors (look for color variables)
- Fonts
- Layout spacing
- Animation effects

### Adding New Weeks
1. Add a new tab in the HTML navigation
2. Create a new section in the HTML
3. Add week data to the JavaScript `weekDataMap`

## 📱 Mobile Experience

The website is fully responsive and includes:
- Touch-friendly buttons
- Readable text on small screens
- Collapsible navigation
- Optimized code blocks

## 🚀 Future Enhancements

Potential features to add:
- **Progress Tracking**: Save user progress locally
- **Search Functionality**: Find questions by topic/keyword
- **Print/Export**: Generate PDF study sheets
- **Timer Mode**: Timed practice sessions
- **Statistics**: Track performance by topic
- **Dark Mode**: Toggle between light/dark themes

## 🤝 Contributing

To add more questions or improve the website:
1. Edit the appropriate files
2. Test in multiple browsers
3. Ensure responsive design works
4. Add clear explanations for all answers

## 📞 Support

If you encounter any issues:
1. Check browser console for errors
2. Ensure JavaScript is enabled
3. Try refreshing the page
4. Test in a different browser

## 🎓 Study Tips

1. **Start with Week 1** and progress sequentially
2. **Read explanations carefully** - they contain important concepts
3. **Practice regularly** - consistency builds programming skills
4. **Use the Quick Reference** for syntax lookup
5. **Challenge yourself** with Mixed questions once comfortable

---

**Happy Coding! 🎉**

*Created for the Ultimate C++ Study Experience*
#   C -  
 # C-
