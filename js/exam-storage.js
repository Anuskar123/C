// Exam Storage - Handles local storage and progress saving
class ExamStorage {
    constructor() {
        this.storageKey = 'cppExamProgress';
        this.resultsKey = 'cppExamResults';
        this.settingsKey = 'cppExamSettings';
    }

    // Save current exam progress
    saveProgress() {
        const progressData = {
            currentExam: examEngine.currentExam,
            currentQuestionIndex: examEngine.currentQuestionIndex,
            userAnswers: examEngine.userAnswers,
            questionStates: examEngine.questionStates,
            markedQuestions: Array.from(examEngine.markedQuestions),
            examConfig: examEngine.examConfig,
            examStartTime: examEngine.examStartTime,
            timeRemaining: examTimer.getRemainingTime(),
            timestamp: new Date().toISOString()
        };

        try {
            localStorage.setItem(this.storageKey, JSON.stringify(progressData));
            this.showSaveIndicator();
        } catch (error) {
            console.warn('Could not save progress to localStorage:', error);
        }
    }

    // Load saved exam progress
    loadProgress() {
        try {
            const savedData = localStorage.getItem(this.storageKey);
            if (savedData) {
                const progressData = JSON.parse(savedData);
                
                // Check if the saved exam is recent (within 24 hours)
                const saveTime = new Date(progressData.timestamp);
                const now = new Date();
                const hoursDiff = (now - saveTime) / (1000 * 60 * 60);
                
                if (hoursDiff > 24) {
                    this.clearProgress();
                    return null;
                }
                
                return progressData;
            }
        } catch (error) {
            console.warn('Could not load progress from localStorage:', error);
            this.clearProgress();
        }
        return null;
    }

    // Check if there's a saved exam in progress
    hasProgressToRestore() {
        const progress = this.loadProgress();
        return progress !== null;
    }

    // Restore exam from saved progress
    restoreProgress() {
        const progressData = this.loadProgress();
        if (!progressData) return false;

        try {
            // Restore exam state
            examEngine.currentExam = progressData.currentExam;
            examEngine.currentQuestionIndex = progressData.currentQuestionIndex;
            examEngine.userAnswers = progressData.userAnswers;
            examEngine.questionStates = progressData.questionStates;
            examEngine.markedQuestions = new Set(progressData.markedQuestions);
            examEngine.examConfig = progressData.examConfig;
            examEngine.examStartTime = new Date(progressData.examStartTime);

            // Calculate remaining time
            const elapsedTime = Math.floor((new Date() - examEngine.examStartTime) / 1000);
            const originalDuration = progressData.examConfig.duration * 60;
            examTimer.timeRemaining = Math.max(0, originalDuration - elapsedTime);

            return true;
        } catch (error) {
            console.error('Error restoring progress:', error);
            this.clearProgress();
            return false;
        }
    }

    // Clear saved progress
    clearProgress() {
        try {
            localStorage.removeItem(this.storageKey);
        } catch (error) {
            console.warn('Could not clear progress from localStorage:', error);
        }
    }

    // Save exam results
    saveResults(results) {
        const resultData = {
            examName: examEngine.examConfig.name,
            results: results,
            timestamp: new Date().toISOString(),
            examConfig: examEngine.examConfig,
            userAnswers: examEngine.userAnswers,
            totalQuestions: examEngine.currentExam.length
        };

        try {
            // Get existing results
            let allResults = this.getAllResults();
            allResults.push(resultData);
            
            // Keep only last 10 results
            if (allResults.length > 10) {
                allResults = allResults.slice(-10);
            }
            
            localStorage.setItem(this.resultsKey, JSON.stringify(allResults));
            this.clearProgress(); // Clear progress after successful completion
        } catch (error) {
            console.warn('Could not save results to localStorage:', error);
        }
    }

    // Get all saved results
    getAllResults() {
        try {
            const savedResults = localStorage.getItem(this.resultsKey);
            return savedResults ? JSON.parse(savedResults) : [];
        } catch (error) {
            console.warn('Could not load results from localStorage:', error);
            return [];
        }
    }

    // Get last result
    getLastResult() {
        const results = this.getAllResults();
        return results.length > 0 ? results[results.length - 1] : null;
    }

    // Clear all results
    clearAllResults() {
        try {
            localStorage.removeItem(this.resultsKey);
        } catch (error) {
            console.warn('Could not clear results from localStorage:', error);
        }
    }

    // Save user settings/preferences
    saveSettings(settings) {
        try {
            localStorage.setItem(this.settingsKey, JSON.stringify(settings));
        } catch (error) {
            console.warn('Could not save settings to localStorage:', error);
        }
    }

    // Load user settings
    loadSettings() {
        try {
            const savedSettings = localStorage.getItem(this.settingsKey);
            return savedSettings ? JSON.parse(savedSettings) : this.getDefaultSettings();
        } catch (error) {
            console.warn('Could not load settings from localStorage:', error);
            return this.getDefaultSettings();
        }
    }

    // Get default settings
    getDefaultSettings() {
        return {
            autoSave: true,
            soundEnabled: true,
            showTimer: true,
            darkMode: false,
            autoSubmit: true,
            warningsEnabled: true
        };
    }

    // Show save indicator
    showSaveIndicator() {
        const indicator = document.getElementById('save-indicator') || this.createSaveIndicator();
        indicator.style.opacity = '1';
        indicator.innerHTML = '💾 Saved';
        
        setTimeout(() => {
            indicator.style.opacity = '0.3';
            indicator.innerHTML = '💾';
        }, 1000);
    }

    // Create save indicator element
    createSaveIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'save-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(39, 174, 96, 0.9);
            color: white;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            z-index: 10000;
            opacity: 0.3;
            transition: opacity 0.3s ease;
        `;
        indicator.innerHTML = '💾';
        document.body.appendChild(indicator);
        return indicator;
    }

    // Show progress restoration dialog
    showRestoreDialog() {
        const progress = this.loadProgress();
        if (!progress) return false;

        const saveTime = new Date(progress.timestamp);
        const examName = progress.examConfig.name;
        const questionIndex = progress.currentQuestionIndex + 1;
        const totalQuestions = progress.currentExam.length;

        const restoreDialog = document.createElement('div');
        restoreDialog.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
        `;

        restoreDialog.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 15px;
                max-width: 500px;
                text-align: center;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            ">
                <h2 style="color: #3498db; margin-bottom: 20px;">📚 Resume Previous Exam</h2>
                <p style="margin-bottom: 15px;">We found a saved exam in progress:</p>
                <div style="
                    background: #f8f9fa;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    text-align: left;
                ">
                    <p><strong>Exam:</strong> ${examName}</p>
                    <p><strong>Progress:</strong> Question ${questionIndex} of ${totalQuestions}</p>
                    <p><strong>Last saved:</strong> ${saveTime.toLocaleString()}</p>
                </div>
                <p style="margin-bottom: 25px; color: #666;">
                    Would you like to continue where you left off or start fresh?
                </p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button class="btn btn-primary" onclick="examStorage.continueExam()">
                        📚 Continue Exam
                    </button>
                    <button class="btn btn-outline" onclick="examStorage.startFresh()">
                        🔄 Start Fresh
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(restoreDialog);
        return true;
    }

    // Continue saved exam
    continueExam() {
        document.querySelector('[style*="position: fixed"][style*="z-index: 10001"]')?.remove();
        
        if (this.restoreProgress()) {
            // Update UI
            examEngine.updateExamHeader();
            examEngine.createNavigationPanel();
            examEngine.showExamContent();
            examEngine.displayCurrentQuestion();
            
            // Start timer with remaining time
            examTimer.start(examTimer.timeRemaining);
            
            // Show exam interface
            document.getElementById('exam-instructions').style.display = 'none';
            document.getElementById('nav-panel').style.display = 'block';
            document.getElementById('exam-content').style.display = 'block';
            document.getElementById('start-exam').style.display = 'none';
            document.getElementById('submit-exam').style.display = 'inline-flex';
            
            this.showNotification('📚 Exam resumed successfully!', 'success');
        } else {
            this.showNotification('❌ Could not restore exam. Starting fresh.', 'error');
            this.startFresh();
        }
    }

    // Start fresh exam
    startFresh() {
        document.querySelector('[style*="position: fixed"][style*="z-index: 10001"]')?.remove();
        this.clearProgress();
        this.showNotification('🔄 Starting fresh exam!', 'info');
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;

        switch (type) {
            case 'success':
                notification.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                break;
            case 'error':
                notification.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
                break;
            case 'warning':
                notification.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
                break;
            default:
                notification.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
        }

        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>${message}</span>
                <button style="
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.2rem;
                    cursor: pointer;
                    padding: 0;
                    margin-left: auto;
                " onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // Export exam data for backup
    exportData() {
        const data = {
            progress: this.loadProgress(),
            results: this.getAllResults(),
            settings: this.loadSettings(),
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cpp-exam-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Import exam data from backup
    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (data.progress) {
                    localStorage.setItem(this.storageKey, JSON.stringify(data.progress));
                }
                if (data.results) {
                    localStorage.setItem(this.resultsKey, JSON.stringify(data.results));
                }
                if (data.settings) {
                    localStorage.setItem(this.settingsKey, JSON.stringify(data.settings));
                }
                
                this.showNotification('✅ Data imported successfully!', 'success');
            } catch (error) {
                this.showNotification('❌ Invalid backup file!', 'error');
            }
        };
        reader.readAsText(file);
    }

    // Get storage usage info
    getStorageInfo() {
        const usage = {
            progress: 0,
            results: 0,
            settings: 0,
            total: 0
        };

        try {
            const progressData = localStorage.getItem(this.storageKey);
            const resultsData = localStorage.getItem(this.resultsKey);
            const settingsData = localStorage.getItem(this.settingsKey);

            usage.progress = progressData ? progressData.length : 0;
            usage.results = resultsData ? resultsData.length : 0;
            usage.settings = settingsData ? settingsData.length : 0;
            usage.total = usage.progress + usage.results + usage.settings;

            // Convert to KB
            Object.keys(usage).forEach(key => {
                usage[key] = Math.round(usage[key] / 1024 * 100) / 100;
            });

        } catch (error) {
            console.warn('Could not calculate storage usage:', error);
        }

        return usage;
    }
}

// Initialize storage
const examStorage = new ExamStorage();

// Check for existing progress when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (examStorage.hasProgressToRestore()) {
        examStorage.showRestoreDialog();
    }
});
