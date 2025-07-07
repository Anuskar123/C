// Exam Timer - Handles all timing functionality
class ExamTimer {
    constructor() {
        this.timeRemaining = 0;
        this.isRunning = false;
        this.isPaused = false;
        this.timerInterval = null;
        this.warningShown = false;
        this.finalWarningShown = false;
        this.pauseCount = 0;
        this.maxPauses = 1;
        this.pauseDuration = 300; // 5 minutes in seconds
        
        this.initializeTimer();
    }

    initializeTimer() {
        this.updateDisplay();
        
        // Add pause button listener
        document.getElementById('pause-exam')?.addEventListener('click', () => {
            this.togglePause();
        });
    }

    start(durationInSeconds) {
        this.timeRemaining = durationInSeconds;
        this.isRunning = true;
        this.isPaused = false;
        this.warningShown = false;
        this.finalWarningShown = false;
        
        this.timerInterval = setInterval(() => {
            if (!this.isPaused) {
                this.tick();
            }
        }, 1000);
        
        this.updateDisplay();
        this.showPauseButton();
    }

    tick() {
        if (this.timeRemaining <= 0) {
            this.timeUp();
            return;
        }
        
        this.timeRemaining--;
        this.updateDisplay();
        this.checkWarnings();
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        const timeDisplay = document.getElementById('time-display');
        if (timeDisplay) {
            timeDisplay.innerHTML = `⏰ ${timeString}`;
            
            // Color coding based on time remaining
            if (this.timeRemaining <= 300) { // 5 minutes
                timeDisplay.style.color = '#e74c3c';
                timeDisplay.style.fontWeight = 'bold';
                timeDisplay.style.animation = 'pulse 1s infinite';
            } else if (this.timeRemaining <= 600) { // 10 minutes
                timeDisplay.style.color = '#f39c12';
                timeDisplay.style.fontWeight = 'bold';
            } else {
                timeDisplay.style.color = '#27ae60';
                timeDisplay.style.fontWeight = 'normal';
                timeDisplay.style.animation = 'none';
            }
        }
        
        // Update page title with remaining time
        if (this.isRunning) {
            document.title = `⏰ ${timeString} - C++ Exam`;
        }
    }

    checkWarnings() {
        // 10-minute warning
        if (this.timeRemaining === 600 && !this.warningShown) {
            this.showWarning('⚠️ 10 minutes remaining!', 'warning');
            this.warningShown = true;
        }
        
        // 5-minute final warning
        if (this.timeRemaining === 300 && !this.finalWarningShown) {
            this.showWarning('🚨 FINAL WARNING: 5 minutes left!', 'danger');
            this.finalWarningShown = true;
        }
        
        // 1-minute critical warning
        if (this.timeRemaining === 60) {
            this.showWarning('🔥 CRITICAL: Only 1 minute remaining!', 'critical');
        }
    }

    showWarning(message, type) {
        // Create warning notification
        const warningDiv = document.createElement('div');
        warningDiv.className = `time-warning ${type}`;
        warningDiv.innerHTML = `
            <div class="warning-content">
                <span class="warning-icon">${type === 'critical' ? '🔥' : type === 'danger' ? '🚨' : '⚠️'}</span>
                <span class="warning-message">${message}</span>
                <button class="warning-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        // Add warning styles
        warningDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        
        if (type === 'critical') {
            warningDiv.style.background = 'linear-gradient(135deg, #c0392b, #e74c3c)';
        } else if (type === 'danger') {
            warningDiv.style.background = 'linear-gradient(135deg, #e67e22, #f39c12)';
        } else {
            warningDiv.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
        }
        
        document.body.appendChild(warningDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (warningDiv.parentElement) {
                warningDiv.remove();
            }
        }, 5000);
        
        // Play warning sound (if supported)
        this.playWarningSound(type);
    }

    playWarningSound(type) {
        try {
            // Create audio context for beep sounds
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Different frequencies for different warning levels
            oscillator.frequency.value = type === 'critical' ? 800 : type === 'danger' ? 600 : 400;
            oscillator.type = 'square';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            // Silent fail if audio is not supported
        }
    }

    togglePause() {
        if (this.pauseCount >= this.maxPauses) {
            alert('You have already used your pause allowance for this exam.');
            return;
        }
        
        if (this.isPaused) {
            this.resume();
        } else {
            this.pause();
        }
    }

    pause() {
        if (!this.isRunning || this.isPaused) return;
        
        this.isPaused = true;
        this.pauseCount++;
        
        // Show pause overlay
        this.showPauseOverlay();
        
        // Update pause button
        const pauseBtn = document.getElementById('pause-exam');
        pauseBtn.innerHTML = '▶️ Resume';
        pauseBtn.classList.remove('btn-warning');
        pauseBtn.classList.add('btn-success');
        
        // Start pause countdown
        this.startPauseCountdown();
    }

    resume() {
        if (!this.isPaused) return;
        
        this.isPaused = false;
        
        // Hide pause overlay
        this.hidePauseOverlay();
        
        // Update pause button
        const pauseBtn = document.getElementById('pause-exam');
        if (this.pauseCount >= this.maxPauses) {
            pauseBtn.style.display = 'none';
        } else {
            pauseBtn.innerHTML = '⏸️ Pause';
            pauseBtn.classList.remove('btn-success');
            pauseBtn.classList.add('btn-warning');
        }
        
        this.updateDisplay();
    }

    showPauseOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'pause-overlay';
        overlay.innerHTML = `
            <div class="pause-content">
                <h2>⏸️ Exam Paused</h2>
                <p>Take a moment to rest. You can pause for up to 5 minutes.</p>
                <div class="pause-timer">
                    <span id="pause-countdown">5:00</span>
                </div>
                <p class="pause-warning">Remaining pauses: ${this.maxPauses - this.pauseCount}</p>
                <button class="btn btn-primary" onclick="examTimer.resume()">▶️ Resume Exam</button>
            </div>
        `;
        
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            color: white;
            text-align: center;
        `;
        
        document.body.appendChild(overlay);
    }

    hidePauseOverlay() {
        const overlay = document.getElementById('pause-overlay');
        if (overlay) {
            overlay.remove();
        }
        
        if (this.pauseInterval) {
            clearInterval(this.pauseInterval);
            this.pauseInterval = null;
        }
    }

    startPauseCountdown() {
        let pauseTimeRemaining = this.pauseDuration;
        
        this.pauseInterval = setInterval(() => {
            pauseTimeRemaining--;
            
            const minutes = Math.floor(pauseTimeRemaining / 60);
            const seconds = pauseTimeRemaining % 60;
            const pauseCountdown = document.getElementById('pause-countdown');
            
            if (pauseCountdown) {
                pauseCountdown.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }
            
            if (pauseTimeRemaining <= 0) {
                this.resume();
                alert('Pause time expired. Resuming exam automatically.');
            }
        }, 1000);
    }

    stop() {
        this.isRunning = false;
        this.isPaused = false;
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        
        if (this.pauseInterval) {
            clearInterval(this.pauseInterval);
            this.pauseInterval = null;
        }
        
        this.hidePauseOverlay();
        this.hidePauseButton();
        
        // Reset page title
        document.title = 'C++ Ultimate Mock Exam System';
    }

    timeUp() {
        this.stop();
        
        // Show time up notification
        const timeUpDiv = document.createElement('div');
        timeUpDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #e74c3c, #c0392b);
                color: white;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
                z-index: 10001;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                animation: pulse 1s infinite;
            ">
                <h2>⏰ TIME'S UP!</h2>
                <p>Your exam time has expired.</p>
                <p>Submitting your answers automatically...</p>
            </div>
        `;
        
        document.body.appendChild(timeUpDiv);
        
        // Auto-submit after 3 seconds
        setTimeout(() => {
            timeUpDiv.remove();
            examEngine.submitExam();
        }, 3000);
        
        // Play time up sound
        this.playTimeUpSound();
    }

    playTimeUpSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Play a sequence of beeps
            const playBeep = (frequency, duration, delay) => {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.value = frequency;
                    oscillator.type = 'square';
                    
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + duration);
                }, delay);
            };
            
            // Play sequence: beep beep beep beeeep
            playBeep(800, 0.2, 0);
            playBeep(800, 0.2, 300);
            playBeep(800, 0.2, 600);
            playBeep(1000, 0.8, 900);
            
        } catch (e) {
            // Silent fail if audio is not supported
        }
    }

    showPauseButton() {
        const pauseBtn = document.getElementById('pause-exam');
        if (pauseBtn && this.pauseCount < this.maxPauses) {
            pauseBtn.style.display = 'inline-flex';
        }
    }

    hidePauseButton() {
        const pauseBtn = document.getElementById('pause-exam');
        if (pauseBtn) {
            pauseBtn.style.display = 'none';
        }
    }

    getRemainingTime() {
        return this.timeRemaining;
    }

    getFormattedTime() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    addTime(seconds) {
        // Admin function to add time if needed
        this.timeRemaining += seconds;
        this.updateDisplay();
    }

    getElapsedTime(startTime) {
        const now = new Date();
        const elapsed = Math.floor((now - startTime) / 1000);
        return elapsed;
    }
}

// Add pulse animation for critical warnings
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .time-warning {
        animation: slideInRight 0.3s ease;
    }
    
    .warning-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .warning-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    }
    
    .warning-close:hover {
        opacity: 0.7;
    }
    
    .pause-content {
        background: rgba(0, 0, 0, 0.8);
        padding: 40px;
        border-radius: 15px;
        border: 2px solid #3498db;
    }
    
    .pause-timer {
        font-size: 3rem;
        font-weight: bold;
        color: #3498db;
        margin: 20px 0;
    }
    
    .pause-warning {
        color: #f39c12;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;
document.head.appendChild(style);

// Initialize timer
const examTimer = new ExamTimer();
