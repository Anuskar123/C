// Exam Engine - Core functionality for the Ultimate C++ Exam System
class ExamEngine {
    constructor() {
        this.currentExam = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.questionStates = {}; // answered, marked, current
        this.examStartTime = null;
        this.examEndTime = null;
        this.timeRemaining = 0;
        this.isPaused = false;
        this.examConfig = {};
        this.markedQuestions = new Set();
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Start exam button
        document.getElementById('start-exam')?.addEventListener('click', () => {
            this.showQuestionSetup();
        });

        // Question setup form
        document.addEventListener('change', (e) => {
            if (e.target.id === 'exam-preset') {
                this.loadExamPreset(e.target.value);
            }
        });

        // Submit exam
        document.getElementById('submit-exam')?.addEventListener('click', () => {
            this.submitExam();
        });

        // Navigation panel toggle
        document.getElementById('toggle-nav')?.addEventListener('click', () => {
            this.toggleNavigationPanel();
        });

        // Use event delegation for dynamic exam elements
        document.addEventListener('click', (e) => {
            if (e.target.id === 'prev-question') {
                console.log('Prev button clicked via event delegation');
                e.preventDefault();
                this.previousQuestion();
            } else if (e.target.id === 'next-question') {
                console.log('Next button clicked via event delegation');
                e.preventDefault();
                this.nextQuestion();
            } else if (e.target.id === 'mark-review') {
                console.log('Mark review button clicked via event delegation');
                e.preventDefault();
                this.toggleMarkForReview();
            } else if (e.target.id === 'clear-answer') {
                console.log('Clear answer button clicked via event delegation');
                e.preventDefault();
                this.clearCurrentAnswer();
            }
        });
    }

    showQuestionSetup() {
        try {
            console.log('=== EXAM SETUP DEBUG ===');
            console.log('mixedExamEngine exists:', typeof window.mixedExamEngine !== 'undefined');
            console.log('mixedExamEngine methods:', window.mixedExamEngine ? Object.keys(window.mixedExamEngine) : 'N/A');
            
            // Check if mixed exam engine is available
            if (typeof window.mixedExamEngine === 'undefined' || !window.mixedExamEngine) {
                console.error('Mixed exam engine not loaded');
                alert('⚠️ Exam system not fully loaded. Please refresh the page and try again.');
                return;
            }

            // Get available sources and presets from mixed exam engine
            const availableSources = window.mixedExamEngine.getAvailableSources();
            const examPresets = window.mixedExamEngine.getExamPresets();
            const stats = window.mixedExamEngine.getQuestionStatistics();

            console.log('Available sources:', availableSources.length);
            console.log('Available presets:', Object.keys(examPresets));
            console.log('Total questions:', stats.totalQuestions);
            console.log('Question stats:', stats);

        const setupHTML = `
            <div class="question-setup">
                <h2>🎓 Ultimate C++ Exam Setup</h2>
                <p class="subtitle">Configure your personalized C++ programming examination</p>
                
                <!-- Question Bank Statistics -->
                <div class="stats-panel">
                    <h3>📊 Available Questions</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-number">${stats.totalQuestions}</span>
                            <span class="stat-label">Total Questions</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${Object.keys(stats.bySource).length}</span>
                            <span class="stat-label">Question Banks</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${stats.byDifficulty.easy + stats.byDifficulty.medium}</span>
                            <span class="stat-label">Easy-Medium</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${stats.byDifficulty.hard + stats.byDifficulty.expert}</span>
                            <span class="stat-label">Hard-Expert</span>
                        </div>
                    </div>
                </div>

                <form class="setup-form" id="exam-setup-form">
                    <div class="form-group">
                        <label for="exam-preset">🎯 Choose Exam Type:</label>
                        <select id="exam-preset" required>
                            <option value="">Select a preset...</option>
                            ${Object.entries(examPresets).map(([key, preset]) => `
                                <option value="${key}">${preset.name}</option>
                            `).join('')}
                        </select>
                    </div>

                    <!-- Question Sources Selection -->
                    <div class="form-group">
                        <label>📚 Question Sources:</label>
                        <div class="sources-grid">
                            ${availableSources.map(source => `
                                <div class="source-option" data-source="${source.source}">
                                    <input type="checkbox" id="source-${source.source}" value="${source.source}" checked>
                                    <label for="source-${source.source}">
                                        <h4>${source.name}</h4>
                                        <div class="source-desc">${source.description}</div>
                                        <div class="source-count">${source.questionCount} questions</div>
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div id="custom-config" style="display: none;">
                        <div class="form-group">
                            <label for="question-count">Number of Questions (5-40):</label>
                            <input type="number" id="question-count" min="5" max="40" value="20">
                        </div>

                        <div class="form-group">
                            <label for="exam-duration">Duration (minutes):</label>
                            <input type="number" id="exam-duration" min="10" max="180" value="60">
                        </div>

                        <div class="form-group">
                            <label>Difficulty Levels:</label>
                            <div class="difficulty-grid">
                                <div class="difficulty-option" data-difficulty="easy">
                                    <input type="checkbox" id="diff-easy" value="easy" checked>
                                    <label for="diff-easy">
                                        <h4>⭐ Easy</h4>
                                        <div class="description">Basic concepts, syntax</div>
                                        <div class="count">${stats.byDifficulty.easy} questions</div>
                                    </label>
                                </div>
                                <div class="difficulty-option" data-difficulty="medium">
                                    <input type="checkbox" id="diff-medium" value="medium" checked>
                                    <label for="diff-medium">
                                        <h4>⭐⭐ Medium</h4>
                                        <div class="description">Functions, arrays, loops</div>
                                        <div class="count">${stats.byDifficulty.medium} questions</div>
                                    </label>
                                </div>
                                <div class="difficulty-option" data-difficulty="hard">
                                    <input type="checkbox" id="diff-hard" value="hard" checked>
                                    <label for="diff-hard">
                                        <h4>⭐⭐⭐ Hard</h4>
                                        <div class="description">Classes, pointers, STL</div>
                                        <div class="count">${stats.byDifficulty.hard} questions</div>
                                    </label>
                                </div>
                                <div class="difficulty-option" data-difficulty="expert">
                                    <input type="checkbox" id="diff-expert" value="expert">
                                    <label for="diff-expert">
                                        <h4>⭐⭐⭐⭐ Expert</h4>
                                        <div class="description">Advanced OOP, templates</div>
                                        <div class="count">${stats.byDifficulty.expert} questions</div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Question Types:</label>
                            <div class="types-grid">
                                <div class="type-option">
                                    <input type="checkbox" id="type-mcq" value="mcq" checked>
                                    <label for="type-mcq">
                                        <h4>📝 Multiple Choice</h4>
                                        <div class="count">${stats.byType.mcq} questions</div>
                                    </label>
                                </div>
                                <div class="type-option">
                                    <input type="checkbox" id="type-fillblanks" value="fillblanks" checked>
                                    <label for="type-fillblanks">
                                        <h4>📝 Fill in Blanks</h4>
                                        <div class="count">${stats.byType.fillblanks} questions</div>
                                    </label>
                                </div>
                                <div class="type-option">
                                    <input type="checkbox" id="type-text" value="text" checked>
                                    <label for="type-text">
                                        <h4>✍️ Text Answer</h4>
                                        <div class="count">${stats.byType.text} questions</div>
                                    </label>
                                </div>
                                <div class="type-option">
                                    <input type="checkbox" id="type-code" value="code" checked>
                                    <label for="type-code">
                                        <h4>💻 Code Writing</h4>
                                        <div class="count">${stats.byType.code} questions</div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Randomization Options:</label>
                            <div class="options-grid">
                                <label class="option-item">
                                    <input type="checkbox" id="randomize-questions" checked>
                                    <span>🎲 Randomize Question Order</span>
                                </label>
                                <label class="option-item">
                                    <input type="checkbox" id="balance-sources" checked>
                                    <span>⚖️ Balance by Sources</span>
                                </label>
                                <label class="option-item">
                                    <input type="checkbox" id="randomize-options">
                                    <span>🔀 Randomize MCQ Options</span>
                                </label>
                            </div>
                        </div>
                    </div>
                                    <div class="description">Intermediate topics</div>
                                    <input type="checkbox" value="medium" checked>
                                </div>
                                <div class="difficulty-option" data-difficulty="hard">
                                    <h4>Hard</h4>
                                    <div class="stars">⭐⭐⭐</div>
                                    <div class="description">Advanced concepts</div>
                                    <input type="checkbox" value="hard">
                                </div>
                                <div class="difficulty-option" data-difficulty="expert">
                                    <h4>Expert</h4>
                                    <div class="stars">⭐⭐⭐⭐</div>
                                    <div class="description">Expert level</div>
                                    <input type="checkbox" value="expert">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="topic-selection">Focus Topics (optional):</label>
                            <select id="topic-selection" multiple>
                                <option value="all">All Topics</option>
                                <option value="basics">Basic Syntax</option>
                                <option value="functions">Functions</option>
                                <option value="arrays">Arrays & Strings</option>
                                <option value="oop">Object-Oriented Programming</option>
                                <option value="pointers">Pointers & Memory</option>
                                <option value="stl">Standard Template Library</option>
                                <option value="advanced">Advanced Topics</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="btn btn-outline" onclick="examEngine.hideQuestionSetup()">
                            ❌ Cancel
                        </button>
                        <button type="button" class="btn btn-primary" onclick="examEngine.startExamWithConfig()">
                            🚀 Create & Start Exam
                        </button>
                    </div>
                </form>
            </div>
        `;

        // Replace current content with setup
        const examContainer = document.getElementById('exam-container');
        examContainer.innerHTML = setupHTML;

        // Add event listeners for form changes
        const presetSelect = document.getElementById('exam-preset');
        if (presetSelect) {
            presetSelect.addEventListener('change', (e) => {
                console.log('Preset changed to:', e.target.value);
                this.loadExamPreset(e.target.value);
            });
        } else {
            console.error('Preset select element not found after HTML insertion!');
        }

        console.log('Exam setup HTML inserted successfully');

        } catch (error) {
            console.error('Error setting up exam:', error);
            alert('⚠️ Error setting up exam. Please refresh the page and try again.');
        }
    }

    // Hide question setup and return to main page
    hideQuestionSetup() {
        console.log('Hiding question setup and restoring interface...');
        
        // Use the same restore method for consistency
        this.restoreExamInterface();
        
        // Re-initialize the start exam button
        const startButton = document.getElementById('start-exam');
        if (startButton) {
            startButton.addEventListener('click', () => {
                this.showQuestionSetup();
            });
        } else {
            console.error('Start exam button not found after interface restore!');
        }
    }

    // Load exam preset configuration
    loadExamPreset(presetKey) {
        console.log('Loading preset:', presetKey);
        
        if (!window.mixedExamEngine) {
            console.error('Mixed exam engine not available');
            return;
        }
        
        const examPresets = window.mixedExamEngine.getExamPresets();
        const preset = examPresets[presetKey];
        
        console.log('Found preset:', preset ? preset.name : 'Not found');
        
        if (!preset) {
            console.warn('Preset not found:', presetKey);
            return;
        }

        // Show/hide custom configuration
        const customConfig = document.getElementById('custom-config');
        console.log('Custom config element found:', !!customConfig);
        
        if (customConfig) {
            if (preset.allowCustomization || presetKey === 'custom-randomized') {
                customConfig.style.display = 'block';
                console.log('Showing custom config');
                
                // Pre-fill form with preset values
                const questionCountInput = document.getElementById('question-count');
                const examDurationInput = document.getElementById('exam-duration');
                
                if (questionCountInput) questionCountInput.value = preset.questionCount || 20;
                if (examDurationInput) examDurationInput.value = this.calculateDuration(preset.questionCount || 20);
                
                // Set difficulty checkboxes
                this.setCheckboxes('diff-', preset.difficulties || ['easy', 'medium', 'hard', 'expert']);
                
                // Set question type checkboxes
                this.setCheckboxes('type-', preset.questionTypes || ['mcq', 'fillblanks', 'text', 'code']);
                
                // Set source checkboxes
                this.setCheckboxes('source-', preset.sources || ['ultimate', 'mixed', 'mock', 'tca']);
                
                // Set options
                const randomizeQuestions = document.getElementById('randomize-questions');
                const balanceSources = document.getElementById('balance-sources');
                
                if (randomizeQuestions) randomizeQuestions.checked = preset.randomize !== false;
                if (balanceSources) balanceSources.checked = preset.balanceBySource !== false;
                
            } else {
                customConfig.style.display = 'none';
                console.log('Hiding custom config');
            }

            // Update preview
            this.updateExamPreview(preset);
        } else {
            console.warn('Custom config element not found in DOM');
        }
    }

    // Set checkbox values based on array
    setCheckboxes(prefix, values) {
        // First uncheck all
        document.querySelectorAll(`input[id^="${prefix}"]`).forEach(cb => cb.checked = false);
        
        // Then check specified values
        values.forEach(value => {
            const checkbox = document.getElementById(`${prefix}${value}`);
            if (checkbox) checkbox.checked = true;
        });
    }

    // Calculate recommended duration
    calculateDuration(questionCount) {
        return Math.max(Math.ceil(questionCount * 2.5), 15); // 2.5 minutes per question, minimum 15 minutes
    }

    // Update exam preview
    updateExamPreview(preset) {
        let previewHTML = `
            <div class="exam-preview">
                <h4>📋 Exam Preview</h4>
                <p><strong>Name:</strong> ${preset.name}</p>
                <p><strong>Description:</strong> ${preset.description}</p>
                <div class="preview-stats">
                    <span>Questions: ${preset.questionCount}</span>
                    <span>Duration: ${this.calculateDuration(preset.questionCount)} min</span>
                    <span>Sources: ${preset.sources.length}</span>
                </div>
            </div>
        `;
        
        // Add preview to form if it doesn't exist
        let previewElement = document.querySelector('.exam-preview');
        if (!previewElement) {
            const form = document.getElementById('exam-setup-form');
            form.insertAdjacentHTML('beforeend', previewHTML);
        } else {
            previewElement.outerHTML = previewHTML;
        }
    }

    // Start exam with configuration
    startExamWithConfig() {
        console.log('Starting exam with configuration...');
        
        const form = document.getElementById('exam-setup-form');
        if (!form) {
            console.error('Exam setup form not found!');
            alert('❌ Setup form not found. Please refresh and try again.');
            return;
        }
        
        const presetSelect = document.getElementById('exam-preset');
        if (!presetSelect) {
            console.error('Exam preset selector not found!');
            alert('❌ Preset selector not found. Please refresh and try again.');
            return;
        }
        
        const presetKey = presetSelect.value;
        console.log('Selected preset:', presetKey);
        
        if (!presetKey) {
            alert('Please select an exam type!');
            return;
        }

        try {
            let examQuestions;
            
            if (presetKey === 'custom-randomized') {
                console.log('Creating custom exam...');
                // Create custom exam based on form inputs
                const config = this.getCustomConfig();
                console.log('Custom config:', config);
                examQuestions = window.mixedExamEngine.createMixedExam(config);
            } else {
                console.log('Creating exam from preset:', presetKey);
                // Use preset
                examQuestions = window.mixedExamEngine.createExamFromPreset(presetKey);
            }

            console.log('Exam questions created:', examQuestions.length);

            if (examQuestions.length === 0) {
                alert('No questions match your criteria. Please adjust your settings.');
                return;
            }

            // Restore exam interface before starting
            this.restoreExamInterface();
            
            // Create summary object for the exam
            const examSummary = {
                estimatedTime: examQuestions.length * 2.5, // 2.5 minutes per question
                totalQuestions: examQuestions.length,
                presetKey: presetKey
            };
            
            // Start the exam directly
            this.startExam(examQuestions, examSummary);
            
        } catch (error) {
            console.error('Error creating exam:', error);
            alert('❌ Error creating exam: ' + error.message);
        }
    }

    // Get custom configuration from form
    getCustomConfig() {
        return {
            sources: this.getSelectedValues('source-'),
            questionCount: parseInt(document.getElementById('question-count').value) || 20,
            difficulties: this.getSelectedValues('diff-'),
            questionTypes: this.getSelectedValues('type-'),
            randomize: document.getElementById('randomize-questions').checked,
            balanceBySource: document.getElementById('balance-sources').checked,
            randomizeOptions: document.getElementById('randomize-options')?.checked || false
        };
    }

    // Get selected checkbox values
    getSelectedValues(prefix) {
        const checkboxes = document.querySelectorAll(`input[id^="${prefix}"]:checked`);
        return Array.from(checkboxes).map(cb => cb.value);
    }

    // Show exam confirmation dialog
    showExamConfirmation(questions, summary) {
        const confirmationHTML = `
            <div id="exam-confirmation" class="confirmation-modal">
                <div class="confirmation-content">
                    <h2>🚀 Ready to Start Exam?</h2>
                    
                    <div class="exam-summary">
                        <div class="summary-header">
                            <h3>📊 Exam Summary</h3>
                        </div>
                        
                        <div class="summary-grid">
                            <div class="summary-item">
                                <span class="label">Total Questions:</span>
                                <span class="value">${summary.totalQuestions}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Total Marks:</span>
                                <span class="value">${summary.totalMarks}</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Estimated Time:</span>
                                <span class="value">${summary.estimatedTime} minutes</span>
                            </div>
                        </div>

                        <div class="breakdown">
                            <div class="breakdown-section">
                                <h4>📚 By Source:</h4>
                                ${Object.entries(summary.bySource).map(([source, count]) => `
                                    <div class="breakdown-item">
                                        <span>${this.getSourceName(source)}:</span>
                                        <span>${count} questions</span>
                                    </div>
                                `).join('')}
                            </div>
                            
                            <div class="breakdown-section">
                                <h4>⭐ By Difficulty:</h4>
                                ${Object.entries(summary.byDifficulty).map(([diff, count]) => {
                                    if (count > 0) {
                                        return `
                                            <div class="breakdown-item">
                                                <span>${this.getDifficultyName(diff)}:</span>
                                                <span>${count} questions</span>
                                            </div>
                                        `;
                                    }
                                    return '';
                                }).join('')}
                            </div>
                            
                            <div class="breakdown-section">
                                <h4>📝 By Type:</h4>
                                ${Object.entries(summary.byType).map(([type, count]) => {
                                    if (count > 0) {
                                        return `
                                            <div class="breakdown-item">
                                                <span>${this.getTypeName(type)}:</span>
                                                <span>${count} questions</span>
                                            </div>
                                        `;
                                    }
                                    return '';
                                }).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="confirmation-actions">
                        <button class="btn btn-outline" onclick="examEngine.cancelExamStart()">
                            ❌ Cancel
                        </button>
                        <button class="btn btn-primary" onclick="examEngine.confirmExamStart()">
                            🚀 Start Exam
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Store questions for later use
        this.pendingExamQuestions = questions;
        this.pendingExamSummary = summary;

        // Show confirmation modal
        document.body.insertAdjacentHTML('beforeend', confirmationHTML);
    }

    // Helper methods for display names
    getSourceName(source) {
        const names = {
            'ultimate': 'Ultimate Questions',
            'mixed': 'Mixed (All Weeks)',
            'mock': 'Mock Exam',
            'tca': 'TCA Mock'
        };
        return names[source] || source;
    }

    getDifficultyName(difficulty) {
        const names = {
            'easy': '⭐ Easy',
            'medium': '⭐⭐ Medium', 
            'hard': '⭐⭐⭐ Hard',
            'expert': '⭐⭐⭐⭐ Expert'
        };
        return names[difficulty] || difficulty;
    }

    getTypeName(type) {
        const names = {
            'mcq': 'Multiple Choice',
            'fillblanks': 'Fill in Blanks',
            'text': 'Text Answer',
            'code': 'Code Writing'
        };
        return names[type] || type;
    }

    // Confirm exam start
    confirmExamStart() {
        if (!this.pendingExamQuestions) {
            alert('No exam questions available');
            return;
        }

        // Close confirmation modal
        document.getElementById('exam-confirmation')?.remove();

        // Start the exam
        this.startExam(this.pendingExamQuestions, this.pendingExamSummary);
        
        // Clear pending data
        this.pendingExamQuestions = null;
        this.pendingExamSummary = null;
    }

    // Cancel exam start
    cancelExamStart() {
        document.getElementById('exam-confirmation')?.remove();
        this.pendingExamQuestions = null;
        this.pendingExamSummary = null;
    }

    // Start the actual exam
    startExam(questions, summary) {
        console.log('=== STARTING EXAM ===');
        console.log('Questions received:', questions.length);
        console.log('Summary:', summary);
        
        try {
            // Set exam data
            this.currentExam = questions;
            this.currentQuestionIndex = 0;
            this.userAnswers = {};
            this.questionStates = {};
            this.markedQuestions = new Set();
            this.examStartTime = new Date();
            this.timeRemaining = (summary.estimatedTime || 60) * 60; // Convert to seconds
            
            console.log('✅ Exam data initialized');
            
            // Initialize question states
            questions.forEach((q, index) => {
                this.questionStates[q.id] = {
                    answered: false,
                    marked: false,
                    visited: index === 0
                };
            });
            
            console.log('✅ Question states initialized');

            // Update exam info with safe element checks
            const examTitleElement = document.getElementById('exam-title');
            const totalQuestionsElement = document.getElementById('total-questions');
            
            if (examTitleElement) {
                examTitleElement.textContent = '📝 C++ Ultimate Exam - In Progress';
                console.log('✅ Exam title updated');
            } else {
                console.error('❌ Element #exam-title not found!');
            }
            
            if (totalQuestionsElement) {
                totalQuestionsElement.textContent = questions.length;
                console.log('✅ Total questions updated');
            } else {
                console.error('❌ Element #total-questions not found!');
            }

            // Hide start button, show exam controls with safe element checks
            const startButton = document.getElementById('start-exam');
            const submitButton = document.getElementById('submit-exam');
            const pauseButton = document.getElementById('pause-exam');
            const navPanel = document.getElementById('nav-panel');
            
            if (startButton) {
                startButton.style.display = 'none';
                console.log('✅ Start button hidden');
            } else {
                console.error('❌ Element #start-exam not found!');
            }
            
            if (submitButton) {
                submitButton.style.display = 'inline-block';
                console.log('✅ Submit button shown');
            } else {
                console.error('❌ Element #submit-exam not found!');
            }
            
            if (pauseButton) {
                pauseButton.style.display = 'inline-block';
                console.log('✅ Pause button shown');
            } else {
                console.error('❌ Element #pause-exam not found!');
            }
            
            // Show navigation panel
            if (navPanel) {
                navPanel.style.display = 'block';
                console.log('✅ Navigation panel shown');
            } else {
                console.error('❌ Element #nav-panel not found!');
            }

            // Show the exam content and hide instructions
            const examContent = document.getElementById('exam-content');
            const examInstructions = document.getElementById('exam-instructions');
            
            if (examContent) {
                examContent.style.display = 'block';
                console.log('✅ Exam content shown');
            } else {
                console.error('❌ Element #exam-content not found!');
            }
            
            if (examInstructions) {
                examInstructions.style.display = 'none';
                console.log('✅ Exam instructions hidden');
            }
            
            // Initialize timer
            if (typeof examTimer !== 'undefined' && examTimer && typeof examTimer.start === 'function') {
                examTimer.start(this.timeRemaining);
                console.log('✅ Timer started with', this.timeRemaining, 'seconds');
            } else {
                console.warn('⚠️ examTimer not available or start method missing');
                console.log('examTimer type:', typeof examTimer);
                console.log('examTimer value:', examTimer);
                if (examTimer) {
                    console.log('examTimer methods:', Object.getOwnPropertyNames(examTimer));
                }
            }
            
            // Initialize the question navigation grid
            console.log('Initializing navigation...');
            this.setupQuestionNavigation();
            console.log('✅ Navigation setup complete');
            
            // Show the first question
            console.log('Loading first question...');
            this.showQuestion(0);
            console.log('✅ First question loaded');
            
            console.log('🎉 Exam started successfully!');
            
        } catch (error) {
            console.error('❌ Error in startExam:', error);
            alert('Error starting exam: ' + error.message);
        }
    }

    // Use existing exam content structure instead of creating new one
    prepareExamContent() {
        console.log('Preparing existing exam content...');
        
        // The exam content already exists in HTML, just ensure it's ready
        const examContent = document.getElementById('exam-content');
        if (!examContent) {
            console.error('Exam content element not found in HTML!');
            return;
        }
        
        // Ensure the content is hidden initially
        examContent.style.display = 'none';
        
        console.log('✅ Exam content prepared successfully');
    }

    // Show a specific question
    showQuestion(index) {
        if (index < 0 || index >= this.currentExam.length) return;
        
        this.currentQuestionIndex = index;
        const question = this.currentExam[index];
        
        // Mark as visited
        this.questionStates[question.id].visited = true;
        
        // Update question header with safe checks
        const questionNumberElement = document.getElementById('question-number');
        const questionMarksElement = document.getElementById('question-marks');
        const questionDifficultyElement = document.getElementById('question-difficulty');
        
        if (questionNumberElement) {
            questionNumberElement.textContent = `Question ${index + 1} of ${this.currentExam.length}`;
        } else {
            console.error('Element #question-number not found!');
        }
        
        if (questionMarksElement) {
            questionMarksElement.textContent = `Marks: ${question.marks || 5}`;
        } else {
            console.error('Element #question-marks not found!');
        }
        
        if (questionDifficultyElement) {
            questionDifficultyElement.textContent = question.difficulty || '⭐⭐ Medium';
        } else {
            console.error('Element #question-difficulty not found!');
        }
        
        // Update question content
        const questionTextElement = document.getElementById('question-text');
        const answerSectionElement = document.getElementById('answer-section');
        
        if (questionTextElement) {
            questionTextElement.innerHTML = this.formatQuestionText(question);
        } else {
            console.error('Element #question-text not found!');
        }
        
        if (answerSectionElement) {
            answerSectionElement.innerHTML = this.generateQuestionOptions(question);
        } else {
            console.error('Element #answer-section not found!');
        }
        
        // Update navigation buttons with safe checks
        const prevButton = document.getElementById('prev-question');
        const nextButton = document.getElementById('next-question');
        
        if (prevButton) {
            prevButton.disabled = index === 0;
        } else {
            console.error('Element #prev-question not found!');
        }
        
        if (nextButton) {
            nextButton.textContent = index === this.currentExam.length - 1 ? 'Finish' : 'Next →';
        } else {
            console.error('Element #next-question not found!');
        }
        
        // Update mark button with safe checks
        const markBtn = document.getElementById('mark-review');
        if (markBtn) {
            if (this.markedQuestions.has(question.id)) {
                markBtn.textContent = '⭐ Marked';
                markBtn.classList.add('marked');
            } else {
                markBtn.textContent = '⭐ Mark for Review';
                markBtn.classList.remove('marked');
            }
        } else {
            console.error('Element #mark-review not found!');
        }
        
        // Restore user answer if exists
        this.restoreUserAnswer(question);
        
        // Update navigation grid
        this.updateNavigationGrid();
        
        // Announce to screen reader (only if examUI is available)
        try {
            if (typeof window.examUI !== 'undefined' && window.examUI && typeof window.examUI.updateQuestionDisplay === 'function') {
                window.examUI.updateQuestionDisplay();
            } else {
                console.log('[examEngine] examUI.updateQuestionDisplay not available');
            }
        } catch (error) {
            console.warn('⚠️ examUI.updateQuestionDisplay failed:', error.message);
        }
    }

    // Format question text with code highlighting
    formatQuestionText(question) {
        let html = `<div class="question-main">${question.question}</div>`;
        
        if (question.code) {
            html += `
                <div class="code-block">
                    <pre><code class="language-cpp">${question.code}</code></pre>
                </div>
            `;
        }
        
        return html;
    }

    // Generate question options based on type
    generateQuestionOptions(question) {
        console.log('Generating options for question:', question.id, 'Type:', question.type);
        console.log('Question structure:', question);
        
        // Normalize the question type
        const questionType = (question.type || 'text').toLowerCase();
        
        switch (questionType) {
            case 'mcq':
            case 'multiple-choice':
                return this.generateMCQOptions(question);
            case 'fillblanks':
            case 'fill-blanks':
            case 'fill_blanks':
                return this.generateFillBlanksOptions(question);
            case 'text':
            case 'short-answer':
            case 'essay':
                return this.generateTextOptions(question);
            case 'code':
            case 'programming':
                return this.generateTextOptions(question);
            default:
                console.warn('Unknown question type:', question.type, 'for question:', question.id);
                // Default to text input for unknown types
                return this.generateTextOptions(question);
        }
    }

    // Generate MCQ options
    generateMCQOptions(question) {
        let html = '<div class="mcq-options">';
        
        question.options.forEach((option, index) => {
            const optionId = `option-${index}`;
            html += `
                <div class="mcq-option">
                    <input type="radio" id="${optionId}" name="mcq-answer" value="${index}">
                    <label for="${optionId}">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </label>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }

    // Generate fill in blanks options
    generateFillBlanksOptions(question) {
        let html = '<div class="fillblanks-container">';
        
        if (question.blanks && question.blanks.length > 0) {
            html += '<div class="blanks-instructions">Fill in the blanks below:</div>';
            question.blanks.forEach((blank, index) => {
                html += `
                    <div class="blank-item">
                        <label for="blank-${index}">Blank ${index + 1}:</label>
                        <input type="text" id="blank-${index}" class="blank-input" placeholder="Enter your answer">
                    </div>
                `;
            });
        }
        
        html += '</div>';
        return html;
    }

    // Generate text/code options
    generateTextOptions(question) {
        const isCode = question.type === 'code' || question.type === 'programming';
        const isShortAnswer = question.answer && question.answer.length < 50; // Short answer detection
        
        // For very short answers, use input field instead of textarea
        if (isShortAnswer && !isCode) {
            return `
                <div class="text-answer-container">
                    <div class="answer-instructions">Enter your answer below:</div>
                    <input 
                        type="text" 
                        id="text-answer" 
                        class="text-input short-answer" 
                        placeholder="Enter your answer here..."
                    />
                    <div class="answer-hint">💡 Provide a concise answer</div>
                </div>
            `;
        }
        
        const placeholder = isCode ? 'Write your C++ code here...' : 'Enter your answer here...';
        
        return `
            <div class="text-answer-container">
                <div class="answer-instructions">${isCode ? 'Write your C++ code:' : 'Enter your answer:'}</div>
                <textarea 
                    id="text-answer" 
                    class="text-input ${isCode ? 'code-input' : ''}" 
                    placeholder="${placeholder}"
                    rows="${isCode ? '10' : '5'}"
                ></textarea>
                ${isCode ? '<div class="code-hint">💡 Write complete, executable C++ code</div>' : '<div class="answer-hint">💡 Provide a detailed answer</div>'}
            </div>
        `;
    }

    // Restore user answer for current question
    restoreUserAnswer(question) {
        const answer = this.userAnswers[question.id];
        if (!answer) return;
        
        switch (question.type) {
            case 'mcq':
                if (typeof answer === 'number') {
                    const radio = document.querySelector(`input[name="mcq-answer"][value="${answer}"]`);
                    if (radio) radio.checked = true;
                }
                break;
            case 'fillblanks':
                if (Array.isArray(answer)) {
                    answer.forEach((value, index) => {
                        const input = document.getElementById(`blank-${index}`);
                        if (input) input.value = value || '';
                    });
                }
                break;
            case 'text':
            case 'code':
            case 'short-answer':
            case 'essay':
            case 'programming':
                // Try textarea first, then input field
                let textElement = document.getElementById('text-answer');
                if (textElement) {
                    textElement.value = answer || '';
                } else {
                    console.warn('No text input element found for question:', question.id);
                }
                break;
        }
    }

    // Setup question navigation grid
    setupQuestionNavigation() {
        const grid = document.getElementById('question-grid');
        let html = '';
        
        this.currentExam.forEach((question, index) => {
            html += `
                <button class="nav-question" data-index="${index}" onclick="examEngine.goToQuestion(${index})">
                    ${index + 1}
                </button>
            `;
        });
        
        grid.innerHTML = html;
        this.updateNavigationGrid();
    }

    // Update navigation grid status
    updateNavigationGrid() {
        const buttons = document.querySelectorAll('.nav-question');
        
        buttons.forEach((button, index) => {
            const questionId = this.currentExam[index].id;
            const state = this.questionStates[questionId];
            
            // Remove all status classes
            button.classList.remove('answered', 'marked', 'current');
            
            // Add appropriate status
            if (index === this.currentQuestionIndex) {
                button.classList.add('current');
            } else if (state.answered) {
                button.classList.add('answered');
            }
            
            if (this.markedQuestions.has(questionId)) {
                button.classList.add('marked');
            }
        });
    }

    // Navigation methods
    goToQuestion(index) {
        this.saveCurrentAnswer();
        this.showQuestion(index);
    }

    previousQuestion() {
        console.log('Previous button clicked! Current index:', this.currentQuestionIndex);
        if (this.currentQuestionIndex > 0) {
            this.saveCurrentAnswer();
            this.showQuestion(this.currentQuestionIndex - 1);
        } else {
            console.log('Already at first question');
        }
    }

    nextQuestion() {
        console.log('Next button clicked! Current index:', this.currentQuestionIndex);
        this.saveCurrentAnswer();
        
        if (this.currentQuestionIndex < this.currentExam.length - 1) {
            this.showQuestion(this.currentQuestionIndex + 1);
        } else {
            console.log('Last question reached, asking for submission');
            // Last question - ask to submit
            this.confirmSubmission();
        }
    }

    // Save current answer
    saveCurrentAnswer() {
        const question = this.currentExam[this.currentQuestionIndex];
        let answer = null;
        
        // Normalize question type
        const questionType = (question.type || 'text').toLowerCase();
        
        switch (questionType) {
            case 'mcq':
            case 'multiple-choice':
                const selected = document.querySelector('input[name="mcq-answer"]:checked');
                if (selected) answer = parseInt(selected.value);
                break;
            case 'fillblanks':
            case 'fill-blanks':
            case 'fill_blanks':
                answer = [];
                if (question.blanks && question.blanks.length > 0) {
                    question.blanks.forEach((blank, index) => {
                        const input = document.getElementById(`blank-${index}`);
                        answer.push(input ? input.value.trim() : '');
                    });
                } else {
                    // Fallback to single text input
                    const textElement = document.getElementById('text-answer');
                    if (textElement) answer = textElement.value.trim();
                }
                break;
            case 'text':
            case 'code':
            case 'short-answer':
            case 'essay':
            case 'programming':
            default:
                // Try to get text input (could be textarea or input field)
                const textElement = document.getElementById('text-answer');
                if (textElement) answer = textElement.value.trim();
                break;
        }
        
        // Save answer and update state
        if (answer !== null && answer !== '' && (Array.isArray(answer) ? answer.some(a => a !== '') : true)) {
            this.userAnswers[question.id] = answer;
            this.questionStates[question.id].answered = true;
        } else {
            delete this.userAnswers[question.id];
            this.questionStates[question.id].answered = false;
        }
        
        // Auto-save progress
        if (typeof examStorage !== 'undefined') {
            examStorage.saveProgress();
        }
    }

    // Toggle mark for review
    toggleMarkForReview() {
        const question = this.currentExam[this.currentQuestionIndex];
        
        if (this.markedQuestions.has(question.id)) {
            this.markedQuestions.delete(question.id);
        } else {
            this.markedQuestions.add(question.id);
        }
        
        // Update button and navigation
        const markBtn = document.getElementById('mark-review');
        if (this.markedQuestions.has(question.id)) {
            markBtn.textContent = '⭐ Marked';
            markBtn.classList.add('marked');
        } else {
            markBtn.textContent = '⭐ Mark for Review';
            markBtn.classList.remove('marked');
        }
        
        this.updateNavigationGrid();
    }

    // Clear current answer
    clearCurrentAnswer() {
        const question = this.currentExam[this.currentQuestionIndex];
        const questionType = (question.type || 'text').toLowerCase();
        
        switch (questionType) {
            case 'mcq':
            case 'multiple-choice':
                document.querySelectorAll('input[name="mcq-answer"]').forEach(radio => {
                    radio.checked = false;
                });
                break;
            case 'fillblanks':
            case 'fill-blanks':
            case 'fill_blanks':
                if (question.blanks && question.blanks.length > 0) {
                    question.blanks.forEach((blank, index) => {
                        const input = document.getElementById(`blank-${index}`);
                        if (input) input.value = '';
                    });
                } else {
                    // Fallback to text input
                    const textElement = document.getElementById('text-answer');
                    if (textElement) textElement.value = '';
                }
                break;
            case 'text':
            case 'code':
            case 'short-answer':
            case 'essay':
            case 'programming':
            default:
                const textElement = document.getElementById('text-answer');
                if (textElement) textElement.value = '';
                break;
        }
        
        // Remove from answers and update state
        delete this.userAnswers[question.id];
        this.questionStates[question.id].answered = false;
        this.updateNavigationGrid();
    }

    // Confirm submission
    confirmSubmission() {
        const answered = Object.keys(this.userAnswers).length;
        const total = this.currentExam.length;
        const unanswered = total - answered;
        
        if (unanswered > 0) {
            const proceed = confirm(`You have ${unanswered} unanswered questions. Do you want to submit anyway?`);
            if (!proceed) return;
        }
        
        this.submitExam();
    }

    // Submit exam
    submitExam() {
        this.saveCurrentAnswer();
        this.examEndTime = new Date();
        
        console.log('Exam submitted');
        console.log('Answers:', this.userAnswers);
        
        // Calculate results
        this.calculateResults();
    }

    // Calculate and show results
    calculateResults() {
        const results = {
            totalQuestions: this.currentExam.length,
            answered: Object.keys(this.userAnswers).length,
            correct: 0,
            totalMarks: 0,
            earnedMarks: 0,
            timeSpent: Math.floor((this.examEndTime - this.examStartTime) / 1000),
            details: []
        };
        
        // Calculate scores
        this.currentExam.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            const marks = question.marks || 5;
            results.totalMarks += marks;
            
            let isCorrect = false;
            
            // Simple checking logic (can be enhanced)
            if (userAnswer !== undefined) {
                switch (question.type) {
                    case 'mcq':
                        isCorrect = userAnswer === question.correct;
                        break;
                    case 'fillblanks':
                        isCorrect = Array.isArray(userAnswer) && 
                                   userAnswer.length === question.blanks.length &&
                                   userAnswer.every((answer, i) => 
                                       answer.toLowerCase().trim() === question.blanks[i].toLowerCase().trim());
                        break;
                    case 'text':
                    case 'code':
                        // For demo, give marks if answer is substantial
                        isCorrect = userAnswer.length > 10;
                        break;
                }
            }
            
            if (isCorrect) {
                results.correct++;
                results.earnedMarks += marks;
            }
            
            results.details.push({
                question: question,
                userAnswer: userAnswer,
                isCorrect: isCorrect,
                marks: marks
            });
        });
        
        results.percentage = Math.round((results.earnedMarks / results.totalMarks) * 100);
        
        // Show results
        this.showResults(results);
    }

    // Show results page
    showResults(results) {
        // Store results for later access
        this.lastResults = results;
        
        const examContainer = document.getElementById('exam-container');
        
        const resultsHTML = `
            <div class="results-panel">
                <div class="results-header">
                    <h2>📊 Exam Results</h2>
                    <div class="result-score ${results.percentage >= 50 ? 'pass' : 'fail'}">
                        ${results.percentage}%
                    </div>
                </div>
                
                <div class="results-summary">
                    <div class="summary-stats">
                        <div class="stat">
                            <span class="stat-value">${results.correct}</span>
                            <span class="stat-label">Correct</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${results.answered - results.correct}</span>
                            <span class="stat-label">Incorrect</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${results.totalQuestions - results.answered}</span>
                            <span class="stat-label">Unanswered</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${Math.floor(results.timeSpent / 60)}m ${results.timeSpent % 60}s</span>
                            <span class="stat-label">Time Taken</span>
                        </div>
                    </div>
                </div>
                
                <div class="results-actions">
                    <button class="btn btn-primary" onclick="examEngine.showAnswerReview()">
                        📝 Review Answers
                    </button>
                    <button class="btn btn-outline" onclick="location.reload()">
                        🔄 Retake Exam
                    </button>
                    <button class="btn btn-outline" onclick="window.close()">
                        ❌ Close
                    </button>
                </div>
            </div>
        `;
        
        examContainer.innerHTML = resultsHTML;
        
        // Save results
        if (typeof examStorage !== 'undefined') {
            examStorage.saveResults(results);
        }
    }

    // Show answer review
    showAnswerReview() {
        try {
            if (typeof window.examUI !== 'undefined' && window.examUI && typeof window.examUI.showAnswerReview === 'function') {
                window.examUI.showAnswerReview(this.currentExam, this.userAnswers);
            } else {
                console.log('[examEngine] examUI.showAnswerReview not available, using fallback.');
                this.showBasicAnswerReview();
            }
        } catch (error) {
            console.warn('⚠️ examUI.showAnswerReview failed:', error.message);
            this.showBasicAnswerReview();
        }
    }

    // Basic answer review functionality
    showBasicAnswerReview() {
        const examContainer = document.getElementById('exam-container');
        if (!examContainer) return;
        
        let reviewHTML = `
            <div class="answer-review">
                <div class="review-header">
                    <h2>📝 Answer Review</h2>
                    <p>Review your answers and the correct solutions</p>
                </div>
                <div class="review-content">
        `;
        
        this.currentExam.forEach((question, index) => {
            const userAnswer = this.userAnswers[question.id];
            const isCorrect = this.checkAnswer(question, userAnswer);
            
            reviewHTML += `
                <div class="review-question ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-question-header">
                        <span class="question-num">Question ${index + 1}</span>
                        <span class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                            ${isCorrect ? '✅ Correct' : '❌ Incorrect'}
                        </span>
                    </div>
                    <div class="review-question-content">
                        <div class="question-text">${question.question}</div>
                        ${question.code ? `<div class="code-block"><pre><code>${question.code}</code></pre></div>` : ''}
                        <div class="answer-comparison">
                            <div class="user-answer">
                                <strong>Your Answer:</strong> ${this.formatUserAnswer(question, userAnswer)}
                            </div>
                            <div class="correct-answer">
                                <strong>Correct Answer:</strong> ${this.formatCorrectAnswer(question)}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        reviewHTML += `
                </div>
                <div class="review-actions">
                    <button class="btn btn-outline" onclick="examEngine.showResults(examEngine.lastResults)">
                        ← Back to Results
                    </button>
                    <button class="btn btn-outline" onclick="location.reload()">
                        🔄 Retake Exam
                    </button>
                </div>
            </div>
        `;
        
        examContainer.innerHTML = reviewHTML;
    }

    // Check if answer is correct (basic implementation)
    checkAnswer(question, userAnswer) {
        if (!userAnswer) return false;
        
        switch (question.type) {
            case 'mcq':
                return userAnswer === question.correct;
            case 'fillblanks':
                return Array.isArray(userAnswer) && 
                       userAnswer.length === question.blanks.length &&
                       userAnswer.every((answer, i) => 
                           answer.toLowerCase().trim() === question.blanks[i].toLowerCase().trim());
            case 'text':
            case 'code':
                return userAnswer.length > 10; // Basic check for substantial answer
            default:
                return false;
        }
    }

    // Format user answer for display
    formatUserAnswer(question, userAnswer) {
        if (!userAnswer) return '<span class="no-answer">No answer provided</span>';
        
        switch (question.type) {
            case 'mcq':
                return question.options[userAnswer] || 'Invalid option';
            case 'fillblanks':
                return Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer;
            case 'text':
            case 'code':
                return `<div class="text-answer">${userAnswer}</div>`;
            default:
                return userAnswer.toString();
        }
    }

    // Format correct answer for display
    formatCorrectAnswer(question) {
        switch (question.type) {
            case 'mcq':
                return question.options[question.correct];
            case 'fillblanks':
                return question.blanks.join(', ');
            case 'text':
            case 'code':
                return question.answer || 'See explanation below';
            default:
                return 'N/A';
        }
    }

    // Restore the complete exam interface
    restoreExamInterface() {
        console.log('Restoring complete exam interface...');
        
        const examContainer = document.getElementById('exam-container');
        if (!examContainer) {
            console.error('Exam container not found!');
            return;
        }
        
        // Restore the complete original exam interface
        examContainer.innerHTML = `
            <!-- Exam Header -->
            <header class="exam-header">
                <div class="exam-info">
                    <h1 id="exam-title">📝 C++ Programming Ultimate Mock Exam</h1>
                    <div class="exam-meta">
                        <div class="meta-item">
                            <span class="label">Time Remaining:</span>
                            <span id="time-display" class="timer">⏰ 90:00</span>
                        </div>
                        <div class="meta-item">
                            <span class="label">Total Marks:</span>
                            <span class="marks">100</span>
                        </div>
                        <div class="meta-item">
                            <span class="label">Questions:</span>
                            <span id="total-questions">20</span>
                        </div>
                        <div class="meta-item">
                            <span class="label">Passing Grade:</span>
                            <span class="passing">50%</span>
                        </div>
                    </div>
                </div>
                <div class="exam-controls">
                    <button id="start-exam" class="btn btn-primary">🚀 Start Exam</button>
                    <button id="submit-exam" class="btn btn-success" style="display:none;">📤 Submit Exam</button>
                    <button id="pause-exam" class="btn btn-warning" style="display:none;">⏸️ Pause</button>
                </div>
            </header>

            <!-- Question Navigation Panel -->
            <div id="nav-panel" class="navigation-panel" style="display:none;">
                <div class="nav-header">
                    <h3>📋 Question Navigator</h3>
                    <button id="toggle-nav" class="btn-toggle">←</button>
                </div>
                <div id="question-grid" class="question-grid"></div>
                <div class="legend">
                    <div class="legend-item">
                        <span class="status answered"></span>
                        <span>Answered</span>
                    </div>
                    <div class="legend-item">
                        <span class="status current"></span>
                        <span>Current</span>
                    </div>
                    <div class="legend-item">
                        <span class="status unanswered"></span>
                        <span>Not Answered</span>
                    </div>
                    <div class="legend-item">
                        <span class="status marked"></span>
                        <span>Marked for Review</span>
                    </div>
                </div>
                <div class="nav-summary">
                    <div class="summary-item">
                        <span>Answered: </span>
                        <span id="answered-count">0</span>
                    </div>
                    <div class="summary-item">
                        <span>Not Answered: </span>
                        <span id="unanswered-count">20</span>
                    </div>
                    <div class="summary-item">
                        <span>Marked: </span>
                        <span id="marked-count">0</span>
                    </div>
                </div>
            </div>

            <!-- Exam Instructions -->
            <div id="exam-instructions" class="instructions-panel">
                <div class="instructions-content">
                    <h2>📋 Exam Instructions</h2>
                    <div class="instructions-grid">
                        <div class="instruction-section">
                            <h3>⏰ Time Management</h3>
                            <ul>
                                <li>Total time: <strong>90 minutes</strong></li>
                                <li>Timer will be displayed throughout the exam</li>
                                <li>Auto-submit when time expires</li>
                                <li>You can pause the exam once for 5 minutes</li>
                            </ul>
                        </div>
                        <div class="instruction-section">
                            <h3>📝 Question Types</h3>
                            <ul>
                                <li><strong>Multiple Choice:</strong> Select one correct answer</li>
                                <li><strong>Fill in the Blank:</strong> Type exact answers</li>
                                <li><strong>Code Completion:</strong> Write complete code</li>
                                <li><strong>Short Answer:</strong> Brief explanations</li>
                                <li><strong>Programming:</strong> Write full programs</li>
                            </ul>
                        </div>
                        <div class="instruction-section">
                            <h3>✏️ Answering Questions</h3>
                            <ul>
                                <li>Navigate using the question panel or Next/Previous buttons</li>
                                <li>Mark questions for review using the star button</li>
                                <li>All answers are auto-saved</li>
                                <li>You can change answers anytime before submission</li>
                            </ul>
                        </div>
                        <div class="instruction-section">
                            <h3>⚠️ Important Notes</h3>
                            <ul>
                                <li>Ensure stable internet connection</li>
                                <li>Do not refresh or close the browser</li>
                                <li>Code questions are case-sensitive</li>
                                <li>Spelling and syntax matter for programming questions</li>
                            </ul>
                        </div>
                    </div>
                    <div class="instructions-footer">
                        <label class="checkbox-container">
                            <input type="checkbox" id="agree-instructions">
                            <span class="checkmark"></span>
                            I have read and understood all the instructions
                        </label>
                    </div>
                </div>
            </div>

            <!-- Exam Content -->
            <main id="exam-content" style="display:none;">
                <div class="question-container">
                    <div class="question-header">
                        <div class="question-info">
                            <span id="question-number" class="question-num">Question 1 of 20</span>
                            <span id="question-marks" class="marks-display">Marks: 5</span>
                            <span id="question-difficulty" class="difficulty">⭐⭐ Medium</span>
                            <span id="question-topic" class="topic">Structs & Pointers</span>
                        </div>
                        <div class="question-actions">
                            <button id="mark-review" class="btn btn-outline">⭐ Mark for Review</button>
                            <button id="clear-answer" class="btn btn-outline">🗑️ Clear Answer</button>
                        </div>
                    </div>

                    <div class="question-content">
                        <div id="question-text" class="question-text"></div>
                        <div id="question-code" class="code-block" style="display:none;"></div>
                        <div id="answer-section" class="answer-section"></div>
                    </div>

                    <div class="question-navigation">
                        <button id="prev-question" class="btn btn-secondary">← Previous</button>
                        <div class="nav-info">
                            <span id="progress-text">1 of 20 questions</span>
                            <div class="progress-bar">
                                <div id="progress-fill" class="progress-fill"></div>
                            </div>
                        </div>
                        <button id="next-question" class="btn btn-secondary">Next →</button>
                    </div>
                </div>
            </main>

            <!-- Results Panel -->
            <div id="results-panel" style="display:none;">
                <div class="results-content">
                    <h2>📊 Exam Results</h2>
                    <div class="results-summary">
                        <div class="score-display">
                            <div class="score-circle">
                                <span id="final-score">0</span>
                                <span class="score-total">/100</span>
                            </div>
                            <div class="grade-info">
                                <span id="grade-letter" class="grade">F</span>
                                <span id="grade-status" class="status">Failed</span>
                            </div>
                        </div>
                        <div class="results-details">
                            <div class="detail-item">
                                <span>Time Taken:</span>
                                <span id="time-taken">--:--</span>
                            </div>
                            <div class="detail-item">
                                <span>Correct Answers:</span>
                                <span id="correct-answers">0</span>
                            </div>
                            <div class="detail-item">
                                <span>Wrong Answers:</span>
                                <span id="wrong-answers">0</span>
                            </div>
                            <div class="detail-item">
                                <span>Unanswered:</span>
                                <span id="unanswered-final">0</span>
                            </div>
                        </div>
                    </div>
                    <div class="results-actions">
                        <button id="review-answers" class="btn btn-primary">📝 Review Answers</button>
                        <button id="retake-exam" class="btn btn-outline">🔄 Retake Exam</button>
                        <button id="export-results" class="btn btn-outline">📄 Export Results</button>
                    </div>
                </div>
            </div>
        `;
        
        console.log('Exam interface restored successfully');
    }

    // Toggle navigation panel visibility
    toggleNavigationPanel() {
        const navPanel = document.getElementById('nav-panel');
        if (navPanel) {
            navPanel.classList.toggle('active');
        }
    }
}

// Initialize the exam engine when the page loads
let examEngine;

document.addEventListener('DOMContentLoaded', function() {
    console.log('=== EXAM PAGE INITIALIZATION ===');
    
    // Hide loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
        console.log('✅ Loading overlay hidden');
    }
    
    // Check if all required scripts are loaded
    console.log('Script availability check:');
    console.log('- ultimateExamQuestions:', typeof ultimateExamQuestions !== 'undefined');
    console.log('- mixedData:', typeof mixedData !== 'undefined');
    console.log('- mockExamData:', typeof mockExamData !== 'undefined');
    console.log('- tcaMockData:', typeof tcaMockData !== 'undefined');
    console.log('- mixedExamEngine:', typeof window.mixedExamEngine !== 'undefined');
    
    // Wait for all scripts to load
    setTimeout(() => {
        console.log('=== DELAYED INITIALIZATION ===');
        
        try {
            // Initialize exam engine
            examEngine = new ExamEngine();
            console.log('✅ ExamEngine created successfully');
            
            // Check if a preset was selected from index.html
            const selectedPreset = localStorage.getItem('selectedExamPreset');
            console.log('Selected preset from localStorage:', selectedPreset);
            
            if (selectedPreset) {
                // Clear the preset from storage
                localStorage.removeItem('selectedExamPreset');
                console.log('Starting exam setup with preset:', selectedPreset);
                
                // Start exam setup immediately
                examEngine.showQuestionSetup();
                
                // If not custom, auto-select the preset
                if (selectedPreset !== 'custom-randomized') {
                    setTimeout(() => {
                        const presetSelect = document.getElementById('exam-preset');
                        if (presetSelect) {
                            presetSelect.value = selectedPreset;
                            examEngine.loadExamPreset(selectedPreset);
                            console.log('✅ Preset auto-selected:', selectedPreset);
                        } else {
                            console.error('❌ Preset select not found after setup');
                        }
                    }, 1000);
                }
            } else {
                // Set up initial state - show the start exam interface
                const startButton = document.getElementById('start-exam');
                if (startButton) {
                    startButton.style.display = 'inline-block';
                    console.log('✅ Start exam button is visible');
                    
                    // Ensure the event listener is attached
                    startButton.addEventListener('click', () => {
                        console.log('Start exam button clicked!');
                        examEngine.showQuestionSetup();
                    });
                } else {
                    console.error('❌ Start exam button not found');
                }
            }
            
            console.log('✅ Exam engine initialized successfully');
            
        } catch (error) {
            console.error('❌ Error during exam initialization:', error);
            alert('Failed to initialize exam system: ' + error.message);
        }
    }, 2000); // Increased delay for script loading
});
