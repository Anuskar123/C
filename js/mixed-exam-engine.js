// Mixed Exam Engine - Combines questions from all sources with randomization
class MixedExamEngine {
    constructor() {
        this.allQuestionSources = [];
        this.loadQuestionSources();
    }

    loadQuestionSources() {
        // Load all available question sources
        if (typeof ultimateExamQuestions !== 'undefined') {
            this.allQuestionSources.push({
                name: 'Ultimate Exam Questions',
                source: 'ultimate',
                questions: ultimateExamQuestions,
                description: '40 comprehensive C++ questions covering all difficulty levels'
            });
        }

        if (typeof mixedData !== 'undefined' && mixedData.questions) {
            this.allQuestionSources.push({
                name: 'Mixed Questions (All Weeks)',
                source: 'mixed',
                questions: mixedData.questions,
                description: 'Questions from all 9 weeks of C++ course'
            });
        }

        if (typeof mockExamData !== 'undefined' && mockExamData.questions) {
            this.allQuestionSources.push({
                name: 'Mock Exam (CSY2006)',
                source: 'mock',
                questions: mockExamData.questions,
                description: 'University format mock exam questions'
            });
        }

        if (typeof tcaMockData !== 'undefined' && tcaMockData.questions) {
            this.allQuestionSources.push({
                name: 'TCA Mock Exam',
                source: 'tca',
                questions: tcaMockData.questions,
                description: 'TCA format exam with structs, pointers, and advanced concepts'
            });
        }

        console.log(`📚 Loaded ${this.allQuestionSources.length} question sources`);
    }

    // Get all available question sources for selection
    getAvailableSources() {
        return this.allQuestionSources.map(source => ({
            name: source.name,
            source: source.source,
            description: source.description,
            questionCount: source.questions.length
        }));
    }

    // Create mixed exam with options
    createMixedExam(options = {}) {
        const {
            sources = ['ultimate', 'mixed', 'mock', 'tca'], // Default: all sources
            questionCount = 20,
            difficulties = ['easy', 'medium', 'hard', 'expert'], // All difficulties
            questionTypes = ['mcq', 'fillblanks', 'text', 'code'], // All types
            randomize = true,
            balanceBySource = false, // If true, tries to get equal questions from each source
            excludeWeeks = [], // Exclude specific weeks (for mixed questions)
            prioritizeDifficulty = null // 'easy', 'medium', 'hard', 'expert'
        } = options;

        let allQuestions = [];

        // Collect questions from selected sources
        sources.forEach(sourceKey => {
            const source = this.allQuestionSources.find(s => s.source === sourceKey);
            if (source) {
                let sourceQuestions = [...source.questions];

                // Filter by difficulty if specified
                if (difficulties.length < 4) {
                    sourceQuestions = sourceQuestions.filter(q => {
                        const qDifficulty = this.extractDifficulty(q.difficulty);
                        return difficulties.includes(qDifficulty);
                    });
                }

                // Filter by question type if specified
                if (questionTypes.length < 4) {
                    sourceQuestions = sourceQuestions.filter(q => {
                        return questionTypes.includes(q.type);
                    });
                }

                // Filter by weeks for mixed questions
                if (sourceKey === 'mixed' && excludeWeeks.length > 0) {
                    sourceQuestions = sourceQuestions.filter(q => {
                        const week = this.extractWeek(q.id || q.topic);
                        return !excludeWeeks.includes(week);
                    });
                }

                // Add source identifier to questions
                sourceQuestions = sourceQuestions.map(q => ({
                    ...q,
                    sourceType: sourceKey,
                    sourceName: source.name
                }));

                allQuestions.push(...sourceQuestions);
            }
        });

        console.log(`📊 Total available questions: ${allQuestions.length}`);

        // Balance by source if requested
        if (balanceBySource && sources.length > 1) {
            allQuestions = this.balanceQuestionsBySources(allQuestions, sources, questionCount);
        }

        // Prioritize difficulty if specified
        if (prioritizeDifficulty) {
            allQuestions = this.prioritizeByDifficulty(allQuestions, prioritizeDifficulty);
        }

        // Randomize if requested
        if (randomize) {
            allQuestions = this.shuffleArray(allQuestions);
        }

        // Select the requested number of questions
        const selectedQuestions = allQuestions.slice(0, Math.min(questionCount, allQuestions.length));

        // Add sequential IDs and format for exam engine
        const formattedQuestions = selectedQuestions.map((q, index) => ({
            ...q,
            id: q.id || `mixed_q${index + 1}`,
            questionNumber: index + 1,
            marks: q.marks || this.getDefaultMarks(q.type)
        }));

        console.log(`✅ Created mixed exam with ${formattedQuestions.length} questions`);
        return formattedQuestions;
    }

    // Balance questions across sources
    balanceQuestionsBySources(allQuestions, sources, totalCount) {
        const questionsPerSource = Math.floor(totalCount / sources.length);
        const remainder = totalCount % sources.length;
        let balancedQuestions = [];

        sources.forEach((source, index) => {
            const sourceQuestions = allQuestions.filter(q => q.sourceType === source);
            const countForThisSource = questionsPerSource + (index < remainder ? 1 : 0);
            
            // Shuffle and take required count
            const shuffled = this.shuffleArray([...sourceQuestions]);
            balancedQuestions.push(...shuffled.slice(0, countForThisSource));
        });

        return this.shuffleArray(balancedQuestions);
    }

    // Prioritize questions by difficulty
    prioritizeByDifficulty(questions, priorityDifficulty) {
        const priority = [];
        const others = [];

        questions.forEach(q => {
            const difficulty = this.extractDifficulty(q.difficulty);
            if (difficulty === priorityDifficulty) {
                priority.push(q);
            } else {
                others.push(q);
            }
        });

        return [...this.shuffleArray(priority), ...this.shuffleArray(others)];
    }

    // Extract difficulty level from question
    extractDifficulty(difficultyString) {
        if (!difficultyString) return 'medium';
        
        const lower = difficultyString.toLowerCase();
        if (lower.includes('easy') || lower.includes('⭐ ')) return 'easy';
        if (lower.includes('medium') || lower.includes('⭐⭐ ')) return 'medium';
        if (lower.includes('hard') || lower.includes('⭐⭐⭐ ')) return 'hard';
        if (lower.includes('expert') || lower.includes('⭐⭐⭐⭐')) return 'expert';
        
        return 'medium';
    }

    // Extract week number from question ID or topic
    extractWeek(identifier) {
        if (!identifier) return null;
        
        const match = identifier.match(/week(\d+)/i);
        return match ? parseInt(match[1]) : null;
    }

    // Get default marks based on question type
    getDefaultMarks(type) {
        const markScheme = {
            'mcq': 2,
            'fillblanks': 3,
            'text': 5,
            'code': 8
        };
        return markScheme[type] || 5;
    }

    // Shuffle array using Fisher-Yates algorithm
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Get exam presets
    getExamPresets() {
        return {
            'quick-mixed': {
                name: '⚡ Quick Mixed Quiz (10 questions)',
                description: 'Fast review with questions from all sources',
                sources: ['ultimate', 'mixed', 'mock', 'tca'],
                questionCount: 10,
                difficulties: ['easy', 'medium'],
                randomize: true,
                balanceBySource: true
            },
            'comprehensive-mixed': {
                name: '📚 Comprehensive Mixed Exam (30 questions)',
                description: 'Thorough assessment covering all topics and difficulties',
                sources: ['ultimate', 'mixed', 'mock', 'tca'],
                questionCount: 30,
                difficulties: ['easy', 'medium', 'hard', 'expert'],
                randomize: true,
                balanceBySource: true
            },
            'advanced-mixed': {
                name: '🔥 Advanced Mixed Challenge (25 questions)',
                description: 'Focus on harder questions from all sources',
                sources: ['ultimate', 'mixed', 'mock', 'tca'],
                questionCount: 25,
                difficulties: ['medium', 'hard', 'expert'],
                randomize: true,
                prioritizeDifficulty: 'hard'
            },
            'mock-focus': {
                name: '🎯 Mock Exam Focus (20 questions)',
                description: 'University-style questions from mock and TCA sources',
                sources: ['mock', 'tca'],
                questionCount: 20,
                difficulties: ['medium', 'hard'],
                randomize: true,
                balanceBySource: true
            },
            'fundamentals-mixed': {
                name: '🌟 Fundamentals Mixed (15 questions)',
                description: 'Basic to medium difficulty questions for foundation building',
                sources: ['ultimate', 'mixed'],
                questionCount: 15,
                difficulties: ['easy', 'medium'],
                randomize: true,
                excludeWeeks: [8, 9] // Exclude advanced weeks
            },
            'custom-randomized': {
                name: '🎲 Custom Randomized Exam',
                description: 'Create your own mix with custom parameters',
                sources: ['ultimate', 'mixed', 'mock', 'tca'],
                questionCount: 20,
                difficulties: ['easy', 'medium', 'hard', 'expert'],
                randomize: true,
                balanceBySource: false,
                allowCustomization: true
            }
        };
    }

    // Create exam from preset
    createExamFromPreset(presetKey) {
        const presets = this.getExamPresets();
        const preset = presets[presetKey];
        
        if (!preset) {
            throw new Error(`Preset '${presetKey}' not found`);
        }

        console.log(`🎯 Creating exam from preset: ${preset.name}`);
        return this.createMixedExam(preset);
    }

    // Get statistics about available questions
    getQuestionStatistics() {
        const stats = {
            totalQuestions: 0,
            bySource: {},
            byDifficulty: { easy: 0, medium: 0, hard: 0, expert: 0 },
            byType: { mcq: 0, fillblanks: 0, text: 0, code: 0 }
        };

        this.allQuestionSources.forEach(source => {
            stats.bySource[source.source] = {
                name: source.name,
                count: source.questions.length
            };
            stats.totalQuestions += source.questions.length;

            source.questions.forEach(q => {
                // Count by difficulty
                const difficulty = this.extractDifficulty(q.difficulty);
                if (stats.byDifficulty[difficulty] !== undefined) {
                    stats.byDifficulty[difficulty]++;
                }

                // Count by type
                if (stats.byType[q.type] !== undefined) {
                    stats.byType[q.type]++;
                }
            });
        });

        return stats;
    }

    // Generate exam summary
    generateExamSummary(questions) {
        const summary = {
            totalQuestions: questions.length,
            totalMarks: questions.reduce((sum, q) => sum + (q.marks || 5), 0),
            bySource: {},
            byDifficulty: { easy: 0, medium: 0, hard: 0, expert: 0 },
            byType: { mcq: 0, fillblanks: 0, text: 0, code: 0 },
            estimatedTime: Math.ceil(questions.length * 2.5) // 2.5 minutes per question
        };

        questions.forEach(q => {
            // Count by source
            const source = q.sourceType || 'unknown';
            summary.bySource[source] = (summary.bySource[source] || 0) + 1;

            // Count by difficulty
            const difficulty = this.extractDifficulty(q.difficulty);
            if (summary.byDifficulty[difficulty] !== undefined) {
                summary.byDifficulty[difficulty]++;
            }

            // Count by type
            if (summary.byType[q.type] !== undefined) {
                summary.byType[q.type]++;
            }
        });

        return summary;
    }
}

// Initialize mixed exam engine with error handling
console.log('=== MIXED EXAM ENGINE INITIALIZATION ===');
try {
    const mixedExamEngine = new MixedExamEngine();
    console.log('✅ Mixed exam engine created successfully');
    console.log('📊 Sources loaded:', mixedExamEngine.allQuestionSources.length);
    
    // Make it available globally
    window.mixedExamEngine = mixedExamEngine;
    
} catch (error) {
    console.error('❌ Error creating mixed exam engine:', error);
    // Create a fallback object
    window.mixedExamEngine = {
        getAvailableSources: () => [],
        getExamPresets: () => ({}),
        getQuestionStatistics: () => ({ totalQuestions: 0, bySource: {}, byDifficulty: {}, byType: {} }),
        createExamFromPreset: () => [],
        createMixedExam: () => []
    };
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MixedExamEngine, mixedExamEngine: window.mixedExamEngine };
}
