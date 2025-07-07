// Main JavaScript for C++ Programming Question Bank
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHamburgerMenu();
    initializeQuestions();
    loadWeekContent();
});

// Make exam preview function globally accessible
window.showExamPreview = showExamPreview;
window.closeExamPreview = closeExamPreview;

// Hamburger menu functionality
function initializeHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navTabs = document.getElementById('navTabs');
    const currentTabTitle = document.querySelector('.current-tab-title');
    const mobileBackdrop = document.getElementById('mobileBackdrop');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            // Toggle hamburger animation
            this.classList.toggle('active');
            
            // Toggle navigation visibility
            navTabs.classList.toggle('active');
            
            // Toggle backdrop
            if (mobileBackdrop) {
                mobileBackdrop.classList.toggle('active');
            }
        });

        // Close menu when clicking backdrop
        if (mobileBackdrop) {
            mobileBackdrop.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                navTabs.classList.remove('active');
                mobileBackdrop.classList.remove('active');
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerBtn.contains(e.target) && !navTabs.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                navTabs.classList.remove('active');
                if (mobileBackdrop) {
                    mobileBackdrop.classList.remove('active');
                }
            }
        });

        // Update current tab title when tab is clicked
        const tabs = document.querySelectorAll('.nav-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                if (currentTabTitle) {
                    currentTabTitle.textContent = this.textContent;
                }
                // Close mobile menu after selection
                hamburgerBtn.classList.remove('active');
                navTabs.classList.remove('active');
                if (mobileBackdrop) {
                    mobileBackdrop.classList.remove('active');
                }
            });
        });
    }
}

// Navigation functionality
function initializeNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            console.log('=== TAB CLICKED ===');
            console.log('Target tab:', targetTab);
            
            // Remove active class from all tabs
            navTabs.forEach(t => t.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update mobile menu title
            const currentTabTitle = document.querySelector('.current-tab-title');
            if (currentTabTitle) {
                currentTabTitle.textContent = this.textContent;
            }
            
            // Show corresponding content
            const targetSection = document.getElementById(targetTab);
            console.log('Target section found:', !!targetSection);
            if (targetSection) {
                targetSection.classList.add('active');
                console.log('Section made active');
                
                // Load week content only for week tabs, mixed, mock-exam, tca-mock, and additional
                if (targetTab.startsWith('week') || targetTab === 'mixed' || targetTab === 'mock-exam' || targetTab === 'tca-mock' || targetTab === 'additional') {
                    console.log('Should load content for tab:', targetTab);
                    console.log('Calling loadWeekQuestions now...');
                    loadWeekQuestions(targetTab);
                } else {
                    console.log('Tab does not require content loading:', targetTab);
                }
                // For overview and quick-ref, content is already in HTML
            } else {
                console.error('Target section not found for tab:', targetTab);
            }
        });
    });

    // Handle week card clicks
    const weekCards = document.querySelectorAll('.week-card');
    weekCards.forEach(card => {
        card.addEventListener('click', function() {
            const weekId = this.getAttribute('data-week');
            
            // Switch to the week tab
            navTabs.forEach(t => t.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            const weekTab = document.querySelector(`[data-tab="${weekId}"]`);
            const weekSection = document.getElementById(weekId);
            
            if (weekTab && weekSection) {
                weekTab.classList.add('active');
                weekSection.classList.add('active');
                loadWeekQuestions(weekId);
                
                // Update mobile menu title
                const currentTabTitle = document.querySelector('.current-tab-title');
                if (currentTabTitle) {
                    currentTabTitle.textContent = weekTab.textContent;
                }
            }
        });
    });
}

// Question functionality
function initializeQuestions() {
    // Initialize show answer buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('show-answer-btn')) {
            const questionId = e.target.getAttribute('data-question');
            toggleAnswer(questionId);
        }
        
        if (e.target.classList.contains('option-btn')) {
            const questionId = e.target.getAttribute('data-question');
            const optionIndex = parseInt(e.target.getAttribute('data-option'));
            selectOption(questionId, optionIndex);
        }
    });
}

// Load week content
function loadWeekContent() {
    // Don't load questions for overview - it has static content
    // Overview section already has all the content in HTML
    console.log('Page loaded - Overview section ready');
}

// Load questions for a specific week
function loadWeekQuestions(weekId) {
    console.log('Loading content for:', weekId);
    const weekData = getWeekData(weekId);
    console.log('Week data retrieved:', weekData ? weekData.title : 'No data');
    const contentContainer = document.getElementById(weekId);
    console.log('Container found:', !!contentContainer);
    
    if (contentContainer && weekData) {
        console.log('Questions available:', weekData.questions ? weekData.questions.length : 0);
        const html = createQuestionsHTML(weekData);
        console.log('HTML generated, length:', html.length);
        contentContainer.innerHTML = html;
        
        // Re-initialize Prism.js for syntax highlighting
        if (window.Prism) {
            Prism.highlightAll();
        }
        console.log('Content loaded successfully for:', weekId);
    } else {
        console.error('Failed to load content for:', weekId, 'Container:', !!contentContainer, 'Data:', !!weekData);
    }
}

// Get week data from separate week files
function getWeekData(weekId) {
    console.log('Getting data for:', weekId);
    
    // Special handling for mixed section - now uses comprehensive C++ mixed questions
    if (weekId === 'mixed') {
        console.log('🎯 Mixed section requested - checking window.mixedData:', !!window.mixedData);
        console.log('📊 Available window properties:', Object.keys(window).filter(key => key.includes('Data')));
        
        if (window.mixedData) {
            console.log('✅ Mixed data found!', {
                title: window.mixedData.title,
                questionCount: window.mixedData.questions ? window.mixedData.questions.length : 'No questions',
                hasCheatSheet: !!window.mixedData.cheatSheet
            });
            
            // Validate the data structure
            if (!window.mixedData.questions || !Array.isArray(window.mixedData.questions)) {
                console.error('❌ Mixed data has invalid questions array');
                return {
                    title: 'C++ Programming Questions - Error',
                    description: 'Mixed questions data is corrupted. Please refresh the page.',
                    questions: []
                };
            }
            
            return window.mixedData;
        } else {
            console.error('❌ Mixed data not found! Check if cpp-mixed-questions.js is loaded properly');
            console.log('🔍 All window properties with "mix":', Object.keys(window).filter(key => key.toLowerCase().includes('mix')));
            
            // Try to wait a bit and retry
            setTimeout(() => {
                if (window.mixedData) {
                    console.log('⏰ Mixed data found after delay, reloading...');
                    loadWeekQuestions('mixed');
                }
            }, 1000);
            
            return {
                title: 'C++ Programming Questions - Loading...',
                description: 'Loading C++ programming questions. If this persists, please refresh the page.',
                questions: []
            };
        }
    }
    
    // Special debug for mock exam
    if (weekId === 'mock-exam') {
        console.log('Mock exam requested - checking window.mockExamData:', !!window.mockExamData);
        if (window.mockExamData) {
            console.log('Mock exam found with questions:', window.mockExamData.questions ? window.mockExamData.questions.length : 'No questions');
            return window.mockExamData;
        } else {
            console.error('Mock exam data not found! Creating fallback...');
            return {
                title: 'Mock Exam (Fallback)',
                description: 'Mock exam data could not be loaded.',
                questions: [{
                    id: 'fallback_q1',
                    type: 'Test',
                    difficulty: '⭐ Test',
                    question: 'This is a test question - mock exam data not loaded properly.',
                    answer: 'Test answer',
                    explanation: 'This is a fallback question.'
                }]
            };
        }
    }
    
    // Special debug for TCA mock exam
    if (weekId === 'tca-mock') {
        console.log('TCA Mock exam requested - checking window.tcaMockData:', !!window.tcaMockData);
        if (window.tcaMockData) {
            console.log('TCA Mock exam found with questions:', window.tcaMockData.questions ? window.tcaMockData.questions.length : 'No questions');
            return window.tcaMockData;
        } else {
            console.error('TCA Mock exam data not found! Creating fallback...');
            return {
                title: 'TCA Mock Exam (Fallback)',
                description: 'TCA Mock exam data could not be loaded.',
                questions: [{
                    id: 'tca_fallback_q1',
                    type: 'Test',
                    difficulty: '⭐ Test',
                    question: 'This is a test question - TCA mock exam data not loaded properly.',
                    answer: 'Test answer',
                    explanation: 'This is a fallback question.'
                }]
            };
        }
    }
    
    // Map to individual week data objects
    const weekDataSources = {
        'week1': window.week1Data,
        'week2': window.week2Data, 
        'week3': window.week3Data,
        'week4': window.week4Data,
        'week5': window.week5Data,
        'week6': window.week6Data,
        'week7': window.week7Data,
        'week8': window.week8Data,
        'week9': window.week9Data,
        'mixed': window.mixedData,
        'mock-exam': window.mockExamData,
        'tca-mock': window.tcaMockData
    };
    
    console.log('Looking for data source:', weekId, 'Available:', Object.keys(weekDataSources));
    
    if (weekDataSources[weekId]) {
        console.log('Found data for:', weekId);
        return weekDataSources[weekId];
    }
    
    console.log('No data found for:', weekId);
    // Fallback data if week file not loaded
    return { 
        title: `${weekId.toUpperCase()} - Loading...`, 
        description: 'Please wait while content loads. Make sure the week file is included.',
        questions: [] 
    };
}

// Create HTML for questions
function createQuestionsHTML(weekData) {
    let html = `
        <div class="section-header">
            <h2>${weekData.title}</h2>
            <p class="section-description">${weekData.description}</p>
        </div>
    `;

    // Add mock exam info if this is a mock exam
    if (weekData.timeLimit && weekData.totalMarks) {
        html += createMockExamInfoHTML(weekData);
    }

    // Add cheat sheet if available
    if (weekData.cheatSheet) {
        html += createCheatSheetHTML(weekData.cheatSheet);
    }

    // Add operator precedence reference for mock exam
    if (weekData.operatorPrecedence) {
        html += createOperatorPrecedenceHTML(weekData.operatorPrecedence);
    }

    if (weekData.questions && weekData.questions.length > 0) {
        weekData.questions.forEach((question, index) => {
            html += createQuestionHTML(question, index);
        });
    } else {
        html += `
            <div class="no-questions">
                <p>No questions available for this section yet.</p>
            </div>
        `;
    }

    return html;
}

// Create HTML for cheat sheet
function createCheatSheetHTML(cheatSheet) {
    let html = `
        <div class="cheat-sheet-container">
            <div class="cheat-sheet-header">
                <h3>${cheatSheet.title}</h3>
                <button class="toggle-cheat-btn" onclick="toggleCheatSheet()">Show/Hide Quick Reference</button>
            </div>
            <div class="cheat-sheet-content" id="cheat-sheet-content" style="display: none;">
    `;
    
    cheatSheet.sections.forEach(section => {
        html += `
            <div class="cheat-section">
                <h4>${section.title}</h4>
                <pre class="cheat-content">${section.content}</pre>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// Create HTML for mock exam info
function createMockExamInfoHTML(mockData) {
    return `
        <div class="mock-exam-info">
            <div class="exam-stats">
                <div class="exam-stat">
                    <span class="stat-label">⏰ Time Limit:</span>
                    <span class="stat-value">${mockData.timeLimit}</span>
                </div>
                <div class="exam-stat">
                    <span class="stat-label">📊 Total Marks:</span>
                    <span class="stat-value">${mockData.totalMarks}</span>
                </div>
                <div class="exam-stat">
                    <span class="stat-label">✅ Pass Grade:</span>
                    <span class="stat-value">${mockData.passingGrade}</span>
                </div>
            </div>
            
            <div class="marking-scheme-summary">
                <h3>📋 Marking Scheme</h3>
                <div class="scheme-grid">
                    <div class="scheme-item">MCQ: ${mockData.markingScheme.mcq}</div>
                    <div class="scheme-item">Short Answer: ${mockData.markingScheme.shortAnswer}</div>
                    <div class="scheme-item">Code Completion: ${mockData.markingScheme.codeCompletion}</div>
                    <div class="scheme-item">Debugging: ${mockData.markingScheme.debugging}</div>
                    <div class="scheme-item">Long Answer: ${mockData.markingScheme.longAnswer}</div>
                </div>
            </div>
        </div>
    `;
}

// Create HTML for operator precedence reference
function createOperatorPrecedenceHTML(precedenceData) {
    let html = `
        <div class="operator-precedence-container">
            <div class="precedence-header">
                <h3>${precedenceData.title}</h3>
                <button class="toggle-precedence-btn" onclick="toggleOperatorPrecedence()">Show/Hide Reference</button>
            </div>
            <div class="precedence-content" id="precedence-content" style="display: none;">
                <div class="precedence-table">
    `;
    
    precedenceData.levels.forEach(level => {
        html += `
            <div class="precedence-row">
                <span class="precedence-level">Level ${level.level}</span>
                <span class="precedence-operators">${level.operators}</span>
                <span class="precedence-description">${level.description}</span>
            </div>
        `;
    });
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// Create HTML for individual question
function createQuestionHTML(question, index) {
    const questionNumber = index + 1;
    const isMockExam = question.marks !== undefined; // Check if this is a mock exam question
    
    let questionHTML = `
        <div class="question-card ${isMockExam ? 'mock-exam-question' : ''}" id="question-${question.id}">
            <div class="question-header">
                <div class="question-meta">
                    <span class="question-number">Question ${questionNumber}</span>
                    <span class="question-type">${question.type}</span>
                    <span class="difficulty">${question.difficulty}</span>
                    ${isMockExam ? `<span class="marks-badge">[${question.marks} marks]</span>` : ''}
                </div>
                ${question.source ? `<div class="question-source">Source: ${question.source}</div>` : ''}
                ${question.topic ? `<div class="question-topic">Topic: ${question.topic}</div>` : ''}
            </div>
            
            <div class="question-content">
                <h3 class="question-text">${question.question}</h3>
                
                ${question.requirements ? `
                    <div class="requirements-block">
                        <h4>Requirements:</h4>
                        <div class="requirements-content">${question.requirements}</div>
                    </div>
                ` : ''}
                
                ${question.code ? `
                    <div class="code-block">
                        <pre><code class="language-cpp">${escapeHtml(question.code)}</code></pre>
                    </div>
                ` : ''}
                
                ${question.options ? createOptionsHTML(question) : ''}
                
                <button class="show-answer-btn" data-question="${question.id}">
                    Show Answer ${isMockExam ? '& Marking Scheme' : ''}
                </button>
                
                <div class="answer-section" id="answer-${question.id}">
                    <div class="answer-content">
                        ${isMockExam && question.markingCriteria ? `
                            <div class="marking-criteria">
                                <h4>📊 Marking Criteria:</h4>
                                <div class="marking-content">${question.markingCriteria}</div>
                            </div>
                        ` : ''}
                        <h4>✅ Model Answer:</h4>
                        <div class="answer">${getCorrectAnswer(question)}</div>
                        <h4>💡 Explanation:</h4>
                        <div class="explanation">${question.explanation}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return questionHTML;
}

// Create options HTML for MCQ questions
function createOptionsHTML(question) {
    if (!question.options || (question.type !== 'MCQ' && question.type !== 'Multiple Choice')) return '';
    
    let optionsHTML = '<div class="options-container">';
    
    question.options.forEach((option, index) => {
        optionsHTML += `
            <button class="option-btn" data-question="${question.id}" data-option="${index}">
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            </button>
        `;
    });
    
    optionsHTML += '</div>';
    return optionsHTML;
}

// Toggle answer visibility
function toggleAnswer(questionId) {
    const answerSection = document.getElementById(`answer-${questionId}`);
    const button = document.querySelector(`[data-question="${questionId}"].show-answer-btn`);
    
    if (answerSection && button) {
        const isMockExam = button.textContent.includes('Marking Scheme');
        
        if (answerSection.classList.contains('show')) {
            answerSection.classList.remove('show');
            button.textContent = isMockExam ? 'Show Answer & Marking Scheme' : 'Show Answer';
            button.classList.remove('answer-shown');
        } else {
            answerSection.classList.add('show');
            button.textContent = isMockExam ? 'Hide Answer & Marking Scheme' : 'Hide Answer';
            button.classList.add('answer-shown');
        }
    }
}

// Handle option selection for MCQ questions
function selectOption(questionId, selectedIndex) {
    const questionData = findQuestionById(questionId);
    if (!questionData) return;
    
    const optionButtons = document.querySelectorAll(`[data-question="${questionId}"][data-option]`);
    
    // Remove previous selections
    optionButtons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Mark the selected option
    const selectedButton = document.querySelector(`[data-question="${questionId}"][data-option="${selectedIndex}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
        
        // Show if correct or incorrect
        if (selectedIndex === questionData.correct) {
            selectedButton.classList.add('correct');
        } else {
            selectedButton.classList.add('incorrect');
            // Also highlight the correct answer
            const correctButton = document.querySelector(`[data-question="${questionId}"][data-option="${questionData.correct}"]`);
            if (correctButton) {
                correctButton.classList.add('correct');
            }
        }
        
        // Auto-show the answer
        setTimeout(() => {
            toggleAnswer(questionId);
        }, 1000);
    }
}

// Find question by ID
function findQuestionById(questionId) {
    // Check all available week data sources
    const weekDataSources = {
        'week1': window.week1Data,
        'week2': window.week2Data, 
        'week3': window.week3Data,
        'week4': window.week4Data,
        'week5': window.week5Data,
        'week6': window.week6Data,
        'week7': window.week7Data,
        'week8': window.week8Data,
        'week9': window.week9Data,
        'mixed': window.mixedData,
        'mock-exam': window.mockExamData,
        'tca-mock': window.tcaMockData
    };
    
    for (const weekKey in weekDataSources) {
        const weekData = weekDataSources[weekKey];
        if (weekData && weekData.questions) {
            const question = weekData.questions.find(q => q.id === questionId);
            if (question) return question;
        }
    }
    return null;
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Toggle cheat sheet visibility
function toggleCheatSheet() {
    const cheatContent = document.getElementById('cheat-sheet-content');
    if (cheatContent) {
        cheatContent.style.display = cheatContent.style.display === 'none' ? 'block' : 'none';
    }
}

// Toggle operator precedence visibility
function toggleOperatorPrecedence() {
    const precedenceContent = document.getElementById('precedence-content');
    if (precedenceContent) {
        precedenceContent.style.display = precedenceContent.style.display === 'none' ? 'block' : 'none';
    }
}

// Initialize exam preset buttons when page loads
function initializeExamPresets() {
    const presetButtons = document.querySelectorAll('.btn-preset');
    console.log('Found preset buttons:', presetButtons.length);
    
    presetButtons.forEach((button, index) => {
        console.log(`Setting up preset button ${index + 1}:`, button.getAttribute('data-preset'));
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const preset = this.getAttribute('data-preset');
            console.log('Preset button clicked:', preset);
            
            // Store preset in localStorage so exam.html can use it
            localStorage.setItem('selectedExamPreset', preset);
            console.log('Stored preset in localStorage:', preset);
            
            // Launch exam
            const examWindow = window.open('exam.html', '_blank');
            if (!examWindow) {
                alert('⚠️ Pop-up blocked! Please allow pop-ups for this site or try again.');
            } else {
                console.log('Exam window opened successfully');
            }
        });
    });
    
    console.log('Exam preset buttons initialized successfully');
}

// Call initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ...existing initialization code...
    
    // Initialize exam presets after a delay to ensure all scripts load
    setTimeout(() => {
        console.log('Initializing exam presets...');
        initializeExamPresets();
        
        // Also check if mixed exam engine is available for debugging
        if (typeof mixedExamEngine !== 'undefined') {
            console.log('Mixed exam engine is available on index page');
        } else {
            console.log('Mixed exam engine not yet loaded on index page');
        }
    }, 2000); // Increased delay to ensure scripts load
});

// Initialize the application
console.log('C++ Programming Question Bank initialized!');
if (window.week1Data) {
    console.log('Week-based question files loaded successfully!');
} else {
    console.log('Week question files not loaded yet...');
}

// Check mock exam data specifically
console.log('Mock exam data available:', !!window.mockExamData);
if (window.mockExamData) {
    console.log('Mock exam questions count:', window.mockExamData.questions ? window.mockExamData.questions.length : 'No questions property');
    console.log('Mock exam title:', window.mockExamData.title);
} else {
    console.error('Mock exam data is not loaded!');
}

// Test mock exam data specifically
console.log('Testing mock exam data availability...');
console.log('window.mockExamData exists:', !!window.mockExamData);
if (window.mockExamData) {
    console.log('Mock exam title:', window.mockExamData.title);
    console.log('Mock exam questions count:', window.mockExamData.questions ? window.mockExamData.questions.length : 'No questions');
} else {
    console.error('Mock exam data is not available on window object!');
}

// Get correct answer for different question types
function getCorrectAnswer(question) {
    if (question.type === "Multiple Choice" && question.options && question.options[question.correct] !== undefined) {
        return `<strong>Option ${String.fromCharCode(65 + question.correct)}</strong>: ${question.options[question.correct]}`;
    } else if (question.answer) {
        return question.answer;
    } else {
        return "Answer not available";
    }
}

// Show comprehensive exam preview
function showExamPreview() {
    console.log('🔍 Preview function called');
    
    // Collect sample questions from different sources
    const sampleQuestions = [];
    
    // Add sample from each week (first question only)
    for (let i = 1; i <= 9; i++) {
        const weekDataName = `week${i}Data`;
        console.log(`Checking ${weekDataName}:`, !!window[weekDataName]);
        if (window[weekDataName] && window[weekDataName].questions && window[weekDataName].questions.length > 0) {
            sampleQuestions.push({
                source: `Week ${i}`,
                question: window[weekDataName].questions[0]
            });
            console.log(`✅ Added sample from Week ${i}`);
        }
    }
    
    // Add sample from mock exam
    console.log('Checking mockExamData:', !!window.mockExamData);
    if (window.mockExamData && window.mockExamData.questions && window.mockExamData.questions.length > 0) {
        sampleQuestions.push({
            source: "Mock Exam",
            question: window.mockExamData.questions[0]
        });
        console.log('✅ Added sample from Mock Exam');
    }
    
    // Add sample from TCA mock
    console.log('Checking tcaMockData:', !!window.tcaMockData);
    if (window.tcaMockData && window.tcaMockData.questions && window.tcaMockData.questions.length > 0) {
        sampleQuestions.push({
            source: "TCA Mock",
            question: window.tcaMockData.questions[0]
        });
        console.log('✅ Added sample from TCA Mock');
    }
    
    // Add fallback sample questions if no data is available
    if (sampleQuestions.length === 0) {
        console.log('⚠️ No question data found, using fallback samples');
        sampleQuestions.push(
            {
                source: "Sample - Basic Syntax",
                question: {
                    question: "What is the correct syntax to include the iostream library in C++?",
                    options: ["include <iostream>", "#include <iostream>", "using iostream;", "import iostream;"],
                    type: "Multiple Choice"
                }
            },
            {
                source: "Sample - Data Types",
                question: {
                    question: "Which data type is used to store decimal numbers with double precision?",
                    options: ["int", "float", "double", "char"],
                    type: "Multiple Choice"
                }
            },
            {
                source: "Sample - Operators",
                question: {
                    question: "What is the result of 5 + 3 * 2 in C++?",
                    options: ["16", "11", "13", "10"],
                    type: "Multiple Choice"
                }
            }
        );
    }
    
    console.log(`📊 Total sample questions: ${sampleQuestions.length}`);
    
    console.log(`📊 Total sample questions: ${sampleQuestions.length}`);
    
    // Create preview modal content
    const previewHTML = `
        <div class="preview-modal" id="previewModal">
            <div class="preview-content">
                <div class="preview-header">
                    <h3>🔍 Comprehensive Exam - Question Preview</h3>
                    <button class="close-preview" onclick="closeExamPreview()">×</button>
                </div>
                <div class="preview-body">
                    <p class="preview-intro">Here are sample questions from different sections of the comprehensive exam:</p>
                    ${sampleQuestions.slice(0, 5).map((item, index) => `
                        <div class="preview-question">
                            <div class="preview-source">${item.source}</div>
                            <div class="preview-question-text">${item.question.question}</div>
                            ${item.question.code ? `
                                <pre class="preview-code"><code>${item.question.code}</code></pre>
                            ` : ''}
                            ${item.question.options ? `
                                <div class="preview-options">
                                    ${item.question.options.map((option, i) => `
                                        <div class="preview-option">
                                            ${String.fromCharCode(65 + i)}. ${option}
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                            <div class="preview-type">Type: ${item.question.type || 'Multiple Choice'}</div>
                        </div>
                    `).join('')}
                    <div class="preview-footer">
                        <p><strong>Note:</strong> The actual exam will randomly select questions from all available sources and present them in a timed format.</p>
                        <button class="btn btn-primary" onclick="window.open('cpp-comprehensive-exam.html', '_blank')">
                            🚀 Launch Full Exam
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove any existing preview modal
    const existingModal = document.getElementById('previewModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', previewHTML);
    console.log('✅ Preview modal created and added to DOM');
    
    // Add event listener to close on backdrop click
    const modal = document.getElementById('previewModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeExamPreview();
            }
        });
        console.log('✅ Modal event listeners added');
    } else {
        console.error('❌ Modal not found after creation');
    }
}

// Close exam preview modal
function closeExamPreview() {
    console.log('🔒 Closing preview modal');
    const modal = document.getElementById('previewModal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.remove();
            console.log('✅ Preview modal removed');
        }, 300);
    } else {
        console.log('⚠️ Preview modal not found');
    }
}
