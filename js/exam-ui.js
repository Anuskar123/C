// Exam UI - Handles user interface interactions and display
class ExamUI {
    constructor() {
        this.isFullscreen = false;
        this.currentTheme = 'light';
        this.fontSize = 'medium';
        this.initializeUI();
    }

    initializeUI() {
        this.createUIControls();
        this.loadUserPreferences();
        this.addKeyboardShortcuts();
        this.addAccessibilityFeatures();
    }

    createUIControls() {
        // Add UI control panel
        const controlPanel = document.createElement('div');
        controlPanel.id = 'ui-controls';
        controlPanel.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px;
            border-radius: 25px;
            display: flex;
            gap: 10px;
            align-items: center;
            z-index: 1000;
            transition: all 0.3s ease;
            transform: translateY(60px);
        `;

        controlPanel.innerHTML = `
            <button id="fullscreen-toggle" class="ui-btn" title="Toggle Fullscreen (F11)">🔳</button>
            <button id="theme-toggle" class="ui-btn" title="Toggle Theme">🌙</button>
            <button id="font-size-toggle" class="ui-btn" title="Change Font Size">🔍</button>
            <button id="help-toggle" class="ui-btn" title="Show Help (?)">❓</button>
            <button id="settings-toggle" class="ui-btn" title="Settings">⚙️</button>
        `;

        document.body.appendChild(controlPanel);

        // Show controls on hover
        document.addEventListener('mousemove', (e) => {
            if (e.clientY > window.innerHeight - 100) {
                controlPanel.style.transform = 'translateY(0)';
            } else {
                controlPanel.style.transform = 'translateY(60px)';
            }
        });

        // Add control event listeners
        this.addControlListeners();
        this.addUIStyles();
    }

    addControlListeners() {
        document.getElementById('fullscreen-toggle')?.addEventListener('click', () => {
            this.toggleFullscreen();
        });

        document.getElementById('theme-toggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        document.getElementById('font-size-toggle')?.addEventListener('click', () => {
            this.cycleFontSize();
        });

        document.getElementById('help-toggle')?.addEventListener('click', () => {
            this.showHelp();
        });

        document.getElementById('settings-toggle')?.addEventListener('click', () => {
            this.showSettings();
        });
    }

    addUIStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .ui-btn {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
            }
            
            .ui-btn:hover {
                background: rgba(255, 255, 255, 0.3);
                transform: scale(1.1);
            }
            
            .font-small { font-size: 0.9rem; }
            .font-medium { font-size: 1rem; }
            .font-large { font-size: 1.1rem; }
            .font-xlarge { font-size: 1.2rem; }
            
            .theme-dark {
                background: #2c3e50 !important;
                color: #ecf0f1 !important;
            }
            
            .theme-dark .question-container {
                background: #34495e !important;
                color: #ecf0f1 !important;
            }
            
            .theme-dark .mcq-option {
                background: #3a4a5c !important;
                border-color: #4a5d73 !important;
                color: #ecf0f1 !important;
            }
            
            .theme-dark .text-input,
            .theme-dark .blank-input {
                background: #3a4a5c !important;
                color: #ecf0f1 !important;
                border-color: #4a5d73 !important;
            }
        `;
        document.head.appendChild(style);
    }

    toggleFullscreen() {
        if (!this.isFullscreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }

        this.isFullscreen = !this.isFullscreen;
        document.getElementById('fullscreen-toggle').textContent = this.isFullscreen ? '🔲' : '🔳';
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        
        if (this.currentTheme === 'dark') {
            document.body.classList.add('theme-dark');
            document.getElementById('theme-toggle').textContent = '☀️';
        } else {
            document.body.classList.remove('theme-dark');
            document.getElementById('theme-toggle').textContent = '🌙';
        }
        
        this.saveUserPreferences();
    }

    cycleFontSize() {
        const sizes = ['small', 'medium', 'large', 'xlarge'];
        const currentIndex = sizes.indexOf(this.fontSize);
        const nextIndex = (currentIndex + 1) % sizes.length;
        this.fontSize = sizes[nextIndex];
        
        // Remove all font size classes
        sizes.forEach(size => {
            document.body.classList.remove(`font-${size}`);
        });
        
        // Add new font size class
        document.body.classList.add(`font-${this.fontSize}`);
        
        // Update button text
        const icons = { small: '🔍', medium: '🔍', large: '🔍', xlarge: '🔍' };
        document.getElementById('font-size-toggle').textContent = icons[this.fontSize];
        
        this.saveUserPreferences();
    }

    showHelp() {
        const helpModal = document.createElement('div');
        helpModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10002;
            backdrop-filter: blur(10px);
        `;

        helpModal.innerHTML = `
            <div style="
                background: white;
                padding: 40px;
                border-radius: 20px;
                max-width: 700px;
                max-height: 85vh;
                overflow-y: auto;
                position: relative;
                box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
                width: 90%;
            ">
                <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    background: #e74c3c;
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
                ">×</button>
                
                <div style="text-align: center; margin-bottom: 35px;">
                    <h2 style="color: #2c3e50; margin-bottom: 10px; font-size: 2.2rem; font-weight: 700;">📚 Exam Help & Shortcuts</h2>
                    <p style="color: #6c757d; font-size: 1.1rem;">Master your exam experience with these tips</p>
                </div>
                
                <div style="display: grid; gap: 30px;">
                    <div style="
                        background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
                        padding: 25px;
                        border-radius: 15px;
                        border-left: 5px solid #3498db;
                    ">
                        <h3 style="color: #2c3e50; margin-bottom: 15px; font-size: 1.4rem;">⌨️ Keyboard Shortcuts</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: 600;"><kbd style="background: #f8f9fa; padding: 4px 8px; border-radius: 4px; border: 1px solid #ddd;">←</kbd> / <kbd style="background: #f8f9fa; padding: 4px 8px; border-radius: 4px; border: 1px solid #ddd;">→</kbd></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">Navigate questions</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: 600;"><kbd style="background: #f8f9fa; padding: 4px 8px; border-radius: 4px; border: 1px solid #ddd;">Space</kbd></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">Mark for review</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: 600;"><kbd style="background: #f8f9fa; padding: 4px 8px; border-radius: 4px; border: 1px solid #ddd;">Enter</kbd></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">Next question</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: 600;"><kbd style="background: #f8f9fa; padding: 4px 8px; border-radius: 4px; border: 1px solid #ddd;">Ctrl + S</kbd></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">Save progress</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: 600;"><kbd style="background: #f8f9fa; padding: 4px 8px; border-radius: 4px; border: 1px solid #ddd;">F11</kbd></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">Toggle fullscreen</td></tr>
                            <tr><td style="padding: 8px; font-weight: 600;"><kbd style="background: #f8f9fa; padding: 4px 8px; border-radius: 4px; border: 1px solid #ddd;">?</kbd></td><td style="padding: 8px;">Show this help</td></tr>
                        </table>
                    </div>
                    
                    <div style="
                        background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
                        padding: 25px;
                        border-radius: 15px;
                        border-left: 5px solid #27ae60;
                    ">
                        <h3 style="color: #2c3e50; margin-bottom: 15px; font-size: 1.4rem;">🎯 Answer Types</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px;"><strong>📝 Multiple Choice:</strong> Click the correct option</li>
                            <li style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px;"><strong>📝 Fill in Blanks:</strong> Type exact answers in fields</li>
                            <li style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px;"><strong>💻 Code Questions:</strong> Write complete C++ code</li>
                            <li style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px;"><strong>✍️ Text Answers:</strong> Provide explanations</li>
                        </ul>
                    </div>
                    
                    <div style="
                        background: linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%);
                        padding: 25px;
                        border-radius: 15px;
                        border-left: 5px solid #f39c12;
                    ">
                        <h3 style="color: #2c3e50; margin-bottom: 15px; font-size: 1.4rem;">💡 Pro Tips</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px;">⭐ Mark difficult questions for review</li>
                            <li style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px;">💾 Your progress is automatically saved</li>
                            <li style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px;">⏰ Watch the timer - it changes color as time runs out</li>
                            <li style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px;">🔍 Use navigation panel to jump between questions</li>
                            <li style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px;">🌙 Toggle dark mode for eye comfort</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(helpModal);
    }

    showSettings() {
        const settingsModal = document.createElement('div');
        settingsModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10002;
            backdrop-filter: blur(10px);
        `;

        const settings = examStorage.loadSettings();

        settingsModal.innerHTML = `
            <div style="
                background: white;
                padding: 40px;
                border-radius: 20px;
                max-width: 600px;
                width: 90%;
                position: relative;
                box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
                border: 3px solid transparent;
                background-clip: padding-box;
            ">
                <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    background: #e74c3c;
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
                ">×</button>
                
                <div style="text-align: center; margin-bottom: 35px;">
                    <h2 style="color: #2c3e50; margin-bottom: 10px; font-size: 2.2rem; font-weight: 700;">⚙️ Exam Settings</h2>
                    <p style="color: #6c757d; font-size: 1.1rem;">Customize your exam experience</p>
                </div>
                
                <div id="settings-form" style="display: grid; gap: 25px;">
                    <label style="
                        display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        padding: 15px 20px;
                        background: #f8f9fa;
                        border-radius: 12px;
                        border: 2px solid #e9ecef;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    " onmouseover="this.style.borderColor='#3498db'; this.style.background='#e3f2fd';" onmouseout="this.style.borderColor='#e9ecef'; this.style.background='#f8f9fa';">
                        <input type="checkbox" ${settings.autoSave ? 'checked' : ''} data-setting="autoSave" style="
                            width: 20px; 
                            height: 20px; 
                            accent-color: #3498db;
                            cursor: pointer;
                        ">
                        <span style="font-size: 1.1rem; font-weight: 500; color: #2c3e50;">💾 Auto-save progress</span>
                    </label>
                    
                    <label style="
                        display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        padding: 15px 20px;
                        background: #f8f9fa;
                        border-radius: 12px;
                        border: 2px solid #e9ecef;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    " onmouseover="this.style.borderColor='#3498db'; this.style.background='#e3f2fd';" onmouseout="this.style.borderColor='#e9ecef'; this.style.background='#f8f9fa';">
                        <input type="checkbox" ${settings.soundEnabled ? 'checked' : ''} data-setting="soundEnabled" style="
                            width: 20px; 
                            height: 20px; 
                            accent-color: #3498db;
                            cursor: pointer;
                        ">
                        <span style="font-size: 1.1rem; font-weight: 500; color: #2c3e50;">🔊 Enable warning sounds</span>
                    </label>
                    
                    <label style="
                        display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        padding: 15px 20px;
                        background: #f8f9fa;
                        border-radius: 12px;
                        border: 2px solid #e9ecef;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    " onmouseover="this.style.borderColor='#3498db'; this.style.background='#e3f2fd';" onmouseout="this.style.borderColor='#e9ecef'; this.style.background='#f8f9fa';">
                        <input type="checkbox" ${settings.showTimer ? 'checked' : ''} data-setting="showTimer" style="
                            width: 20px; 
                            height: 20px; 
                            accent-color: #3498db;
                            cursor: pointer;
                        ">
                        <span style="font-size: 1.1rem; font-weight: 500; color: #2c3e50;">⏰ Show timer</span>
                    </label>
                    
                    <label style="
                        display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        padding: 15px 20px;
                        background: #f8f9fa;
                        border-radius: 12px;
                        border: 2px solid #e9ecef;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    " onmouseover="this.style.borderColor='#3498db'; this.style.background='#e3f2fd';" onmouseout="this.style.borderColor='#e9ecef'; this.style.background='#f8f9fa';">
                        <input type="checkbox" ${settings.autoSubmit ? 'checked' : ''} data-setting="autoSubmit" style="
                            width: 20px; 
                            height: 20px; 
                            accent-color: #3498db;
                            cursor: pointer;
                        ">
                        <span style="font-size: 1.1rem; font-weight: 500; color: #2c3e50;">📤 Auto-submit when time expires</span>
                    </label>
                    
                    <label style="
                        display: flex; 
                        align-items: center; 
                        gap: 15px; 
                        padding: 15px 20px;
                        background: #f8f9fa;
                        border-radius: 12px;
                        border: 2px solid #e9ecef;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    " onmouseover="this.style.borderColor='#3498db'; this.style.background='#e3f2fd';" onmouseout="this.style.borderColor='#e9ecef'; this.style.background='#f8f9fa';">
                        <input type="checkbox" ${settings.warningsEnabled ? 'checked' : ''} data-setting="warningsEnabled" style="
                            width: 20px; 
                            height: 20px; 
                            accent-color: #3498db;
                            cursor: pointer;
                        ">
                        <span style="font-size: 1.1rem; font-weight: 500; color: #2c3e50;">⚠️ Enable time warnings</span>
                    </label>
                </div>
                
                <div style="margin-top: 35px; display: flex; gap: 20px; justify-content: center;">
                    <button class="btn btn-primary" onclick="examUI.saveSettings()" style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 12px;
                        font-size: 1.1rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
                    ">💾 Save Settings</button>
                    <button class="btn btn-outline" onclick="examUI.resetSettings()" style="
                        background: white;
                        color: #6c757d;
                        border: 2px solid #e9ecef;
                        padding: 15px 30px;
                        border-radius: 12px;
                        font-size: 1.1rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">🔄 Reset to Default</button>
                </div>
                
                <div style="margin-top: 30px; padding-top: 25px; border-top: 2px solid #e9ecef;">
                    <h3 style="color: #2c3e50; margin-bottom: 15px; font-size: 1.3rem;">📊 Storage Info</h3>
                    <div id="storage-info" style="
                        font-size: 0.95rem; 
                        color: #6c757d;
                        background: #f8f9fa;
                        padding: 15px;
                        border-radius: 10px;
                        border: 1px solid #e9ecef;
                    "></div>
                </div>
            </div>
        `;

        document.body.appendChild(settingsModal);
        this.updateStorageInfo();
    }

    saveSettings() {
        const checkboxes = document.querySelectorAll('#settings-form input[type="checkbox"]');
        const settings = {};
        
        checkboxes.forEach(checkbox => {
            settings[checkbox.dataset.setting] = checkbox.checked;
        });
        
        examStorage.saveSettings(settings);
        examStorage.showNotification('⚙️ Settings saved!', 'success');
        
        // Close modal
        document.querySelector('[style*="position: fixed"][style*="z-index: 10002"]')?.remove();
    }

    resetSettings() {
        const defaultSettings = examStorage.getDefaultSettings();
        examStorage.saveSettings(defaultSettings);
        examStorage.showNotification('🔄 Settings reset to default!', 'info');
        
        // Close and reopen modal to show updated values
        document.querySelector('[style*="position: fixed"][style*="z-index: 10002"]')?.remove();
        setTimeout(() => this.showSettings(), 100);
    }

    updateStorageInfo() {
        const storageInfo = examStorage.getStorageInfo();
        const infoElement = document.getElementById('storage-info');
        
        if (infoElement) {
            infoElement.innerHTML = `
                <p>Progress: ${storageInfo.progress} KB</p>
                <p>Results: ${storageInfo.results} KB</p>
                <p>Settings: ${storageInfo.settings} KB</p>
                <p><strong>Total: ${storageInfo.total} KB</strong></p>
                <div style="margin-top: 10px;">
                    <button class="btn btn-outline" onclick="examStorage.exportData()" style="font-size: 0.8rem;">
                        📤 Export Backup
                    </button>
                </div>
            `;
        }
    }

    addKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Don't trigger shortcuts when typing in input fields
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    examEngine.previousQuestion();
                    break;
                case 'ArrowRight':
                case 'Enter':
                    e.preventDefault();
                    examEngine.nextQuestion();
                    break;
                case ' ':
                    e.preventDefault();
                    examEngine.toggleMarkForReview();
                    break;
                case '?':
                    e.preventDefault();
                    this.showHelp();
                    break;
                case 'F11':
                    e.preventDefault();
                    this.toggleFullscreen();
                    break;
            }

            // Ctrl combinations
            if (e.ctrlKey) {
                switch (e.key) {
                    case 's':
                        e.preventDefault();
                        examStorage.saveProgress();
                        break;
                }
            }
        });
    }

    addAccessibilityFeatures() {
        // Add focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                // Ensure proper tab order
                this.manageFocus();
            }
        });

        // Add screen reader announcements
        this.addScreenReaderSupport();
    }

    manageFocus() {
        const focusableElements = document.querySelectorAll(
            'button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        // Ensure all interactive elements are accessible
        focusableElements.forEach(element => {
            if (!element.hasAttribute('aria-label') && !element.textContent.trim()) {
                element.setAttribute('aria-label', 'Interactive element');
            }
        });
    }

    addScreenReaderSupport() {
        // Create announcement area for screen readers
        const announcements = document.createElement('div');
        announcements.setAttribute('aria-live', 'polite');
        announcements.setAttribute('aria-atomic', 'true');
        announcements.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(announcements);

        // Announce question changes
        this.announceElement = announcements;
    }

    announceToScreenReader(message) {
        if (this.announceElement) {
            this.announceElement.textContent = message;
        }
    }

    showAnswerReview(questions, userAnswers) {
        // Create review panel
        const reviewPanel = document.createElement('div');
        reviewPanel.id = 'answer-review';
        reviewPanel.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            z-index: 10001;
            overflow-y: auto;
        `;

        let reviewHTML = `
            <div class="review-header">
                <h2>📝 Answer Review</h2>
                <button class="btn btn-outline" onclick="document.getElementById('answer-review').remove(); document.getElementById('results-panel').style.display = 'block';">
                    ← Back to Results
                </button>
            </div>
            <div class="review-content">
        `;

        questions.forEach((question, index) => {
            const userAnswer = userAnswers[question.id];
            const isCorrect = this.checkAnswer(question, userAnswer);
            const statusClass = isCorrect ? 'correct' : (userAnswer ? 'incorrect' : 'unanswered');
            const statusText = isCorrect ? '✅ Correct' : (userAnswer ? '❌ Incorrect' : '⚪ Not Answered');
            
            reviewHTML += `
                <div class="review-question ${statusClass}">
                    <div class="review-header">
                        <div>
                            <h3>Question ${index + 1}</h3>
                            <span class="marks">Marks: ${question.marks || 5}</span>
                        </div>
                        <span class="answer-status ${statusClass}">
                            ${statusText}
                        </span>
                    </div>
                    
                    <div class="review-content-section">
                        <div class="question-text">
                            ${question.question}
                        </div>
                        
                        ${this.generateReviewAnswer(question, userAnswer)}
                        
                        ${question.explanation ? `
                            <div class="explanation">
                                <h4>💡 Explanation:</h4>
                                <p>${question.explanation}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });

        reviewHTML += `
            </div>
            <div class="review-navigation">
                <button class="review-nav-btn" onclick="document.getElementById('answer-review').scrollTo(0, 0)">
                    ↑ Top
                </button>
                <button class="review-nav-btn" onclick="document.getElementById('answer-review').remove(); document.getElementById('results-panel').style.display = 'block';">
                    ← Results
                </button>
            </div>
        `;
        reviewPanel.innerHTML = reviewHTML;
        
        // Hide results panel and show review
        document.getElementById('results-panel').style.display = 'none';
        document.body.appendChild(reviewPanel);
        
        // Add scroll-to-top functionality
        reviewPanel.addEventListener('scroll', () => {
            const scrollPercent = (reviewPanel.scrollTop / (reviewPanel.scrollHeight - reviewPanel.clientHeight)) * 100;
            const topBtn = reviewPanel.querySelector('.review-nav-btn');
            if (topBtn) {
                topBtn.style.opacity = scrollPercent > 20 ? '1' : '0.7';
            }
        });
    }

    generateReviewAnswer(question, userAnswer) {
        let html = '';
        
        switch (question.type) {
            case 'mcq':
                html += '<div class="mcq-review">';
                question.options.forEach((option, index) => {
                    const isCorrect = index === question.correct;
                    const isSelected = userAnswer === index;
                    
                    let optionClass = 'neutral';
                    if (isCorrect) optionClass = 'correct';
                    else if (isSelected) optionClass = 'incorrect';
                    
                    html += `
                        <div class="option-review ${optionClass}">
                            ${isCorrect ? '✅' : isSelected ? '❌' : '⚪'} ${option}
                            ${isCorrect ? ' <strong>(Correct Answer)</strong>' : ''}
                            ${isSelected && !isCorrect ? ' <strong>(Your Answer)</strong>' : ''}
                        </div>
                    `;
                });
                html += '</div>';
                break;

            case 'fillblanks':
                html += '<div class="fillblanks-review">';
                html += '<h4>Your Answers vs Correct Answers:</h4>';
                question.blanks.forEach((correct, index) => {
                    const userBlankAnswer = userAnswer && userAnswer[index] ? userAnswer[index] : 'Not answered';
                    const isCorrect = userAnswer && userAnswer[index] && 
                                     userAnswer[index].toLowerCase().trim() === correct.toLowerCase().trim();
                    
                    html += `
                        <div class="blank-comparison">
                            <div class="blank-answer ${isCorrect ? 'user-correct' : 'user-incorrect'}">
                                <strong>Your answer:</strong> ${userBlankAnswer}
                            </div>
                            <div class="blank-answer correct-answer">
                                <strong>Correct answer:</strong> ${correct}
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
                break;

            case 'text':
            case 'code':
                html += `
                    <div class="text-review">
                        <div style="margin-bottom: 20px;">
                            <h4>Your Answer:</h4>
                            <div class="user-answer-block">
                                ${userAnswer || 'No answer provided'}
                            </div>
                        </div>
                        ${question.sample_output ? `
                            <div>
                                <h4>Expected Output:</h4>
                                <div class="expected-output-block">
                                    ${question.sample_output}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                `;
                break;
        }
        
        return html;
    }

    checkAnswer(question, userAnswer) {
        if (!userAnswer) return false;
        
        switch (question.type) {
            case 'mcq':
                return userAnswer === question.correct;
            case 'fillblanks':
                return Array.isArray(userAnswer) && 
                       userAnswer.length === question.blanks.length &&
                       userAnswer.every((answer, i) => 
                           answer && answer.toLowerCase().trim() === question.blanks[i].toLowerCase().trim());
            case 'text':
            case 'code':
                // For demo purposes, consider answered if more than 10 characters
                return userAnswer.trim().length > 10;
            default:
                return false;
        }
    }

    loadUserPreferences() {
        const settings = examStorage.loadSettings();
        
        // Apply theme
        if (settings.darkMode) {
            this.currentTheme = 'dark';
            document.body.classList.add('theme-dark');
            document.getElementById('theme-toggle').textContent = '☀️';
        }
        
        // Apply font size
        if (settings.fontSize) {
            this.fontSize = settings.fontSize;
            document.body.classList.add(`font-${this.fontSize}`);
        }
    }

    saveUserPreferences() {
        const currentSettings = examStorage.loadSettings();
        currentSettings.darkMode = this.currentTheme === 'dark';
        currentSettings.fontSize = this.fontSize;
        examStorage.saveSettings(currentSettings);
    }

    // Update question display when question changes
    updateQuestionDisplay() {
        if (examEngine.currentExam && examEngine.currentQuestionIndex >= 0) {
            const question = examEngine.currentExam[examEngine.currentQuestionIndex];
            this.announceToScreenReader(
                `Question ${examEngine.currentQuestionIndex + 1} of ${examEngine.currentExam.length}. ${question.question}`
            );
        }
    }
}

// Initialize UI
const examUI = new ExamUI();
