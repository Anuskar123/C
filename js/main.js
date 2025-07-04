// Main JavaScript for C++ Ultimate Question Bank
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHamburgerMenu();
    initializeQuestions();
    loadWeekContent();
});

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
                        <div class="answer">${question.answer}</div>
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
    if (!question.options || question.type !== 'MCQ') return '';
    
    let optionsHTML = '<div class="options-container">';
    
    question.options.forEach((option, index) => {
        optionsHTML += `
            <button class="option-btn" data-question="${question.id}" data-option="${index}">
                ${option}
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

// Initialize the application
console.log('C++ Ultimate Question Bank initialized!');
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
