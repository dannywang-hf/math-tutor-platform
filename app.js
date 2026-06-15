// 应用主逻辑
let currentUser = null;
let currentExam = null;
let currentQuestionIndex = 0;
let examAnswers = [];
let examStartTime = null;
let examTimer = null;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initAuthTabs();
    initNavigation();
    updateDate();
    checkLoginStatus();
});

// 认证标签切换
function initAuthTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const formId = tab.dataset.tab + '-form';
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.add('hidden');
            });
            document.getElementById(formId).classList.remove('hidden');
        });
    });
}

// 导航（桌面端侧边栏 + 手机端底部导航栏）
function initNavigation() {
    // 桌面端侧边栏
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            switchPage(page);
        });
    });

    // 手机端底部导航栏
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            switchPage(page);
        });
    });
}

// 统一更新导航状态
function updateNavState(page) {
    // 桌面端侧边栏
    document.querySelectorAll('.nav-item').forEach(i => {
        i.classList.toggle('active', i.dataset.page === page);
    });
    // 手机端底部导航栏
    document.querySelectorAll('.bottom-nav-item').forEach(i => {
        i.classList.toggle('active', i.dataset.page === page);
    });
    // 更新手机端顶栏标题
    const titleMap = {
        'dashboard': '学习概览',
        'study': '课程学习',
        'review': '复习巩固',
        'practice': '练习考试',
        'analysis': '学情分析',
        'tutor': 'AI辅导'
    };
    const mobileTitle = document.getElementById('mobile-page-title');
    if (mobileTitle) mobileTitle.textContent = titleMap[page] || '';
}

// 切换页面
function switchPage(page) {
    document.querySelectorAll('.content-page').forEach(p => p.classList.remove('active'));
    document.getElementById(page + '-page').classList.add('active');
    
    updateNavState(page);
    
    // 页面特定初始化
    switch(page) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'study':
            initStudyPage();
            break;
        case 'review':
            initReviewPage();
            break;
        case 'analysis':
            initAnalysisPage();
            break;
        case 'tutor':
            initTutorPage();
            break;
    }
}

// 更新日期
function updateDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        dateEl.textContent = date.toLocaleDateString('zh-CN', options);
    }
}

// 检查登录状态
function checkLoginStatus() {
    const savedUser = localStorage.getItem('currentMathUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainPage();
    }
}

// 登录
function login() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    
    if (!username || !password) {
        alert('请输入用户名和密码');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('mathUsers') || '{}');
    const user = users[username];
    
    if (!user || user.password !== password) {
        alert('用户名或密码错误');
        return;
    }
    
    currentUser = user;
    localStorage.setItem('currentMathUser', JSON.stringify(user));
    showMainPage();
}

// 注册
function register() {
    const name = document.getElementById('reg-name').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;
    const grade = document.getElementById('reg-grade').value;
    
    if (!name || !username || !password) {
        alert('请填写完整信息');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('mathUsers') || '{}');
    if (users[username]) {
        alert('用户名已存在');
        return;
    }
    
    const newUser = {
        name,
        username,
        password,
        grade,
        progress: createDefaultProgress(),
        joinDate: new Date().toISOString()
    };
    
    users[username] = newUser;
    localStorage.setItem('mathUsers', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentMathUser', JSON.stringify(newUser));
    showMainPage();
}

// 创建默认进度
function createDefaultProgress() {
    return {
        learnedLessons: [],
        completedQuestions: [],
        weakPoints: [],
        practiceCount: 0,
        correctCount: 0,
        streakDays: 0,
        lastStudyDate: null,
        studyTime: 0,
        chapterProgress: {}
    };
}

// 显示主页面
function showMainPage() {
    document.getElementById('auth-page').classList.remove('active');
    document.getElementById('main-page').classList.add('active');
    
    document.getElementById('student-name').textContent = currentUser.name;
    updateDashboard();
}

// 退出登录
function logout() {
    currentUser = null;
    localStorage.removeItem('currentMathUser');
    document.getElementById('main-page').classList.remove('active');
    document.getElementById('auth-page').classList.add('active');
}

// 更新仪表盘
function updateDashboard() {
    if (!currentUser) return;
    
    const progress = currentUser.progress;
    
    // 统计数据
    document.getElementById('learned-count').textContent = progress.learnedLessons.length;
    document.getElementById('practice-count').textContent = progress.practiceCount;
    document.getElementById('streak-days').textContent = progress.streakDays;
    
    const masteryRate = progress.practiceCount > 0 
        ? Math.round((progress.correctCount / progress.practiceCount) * 100) 
        : 0;
    document.getElementById('mastery-rate').textContent = masteryRate + '%';
    
    // 今日任务
    updateTodayTasks();
    
    // 绘制进度图
    drawProgressChart();
}

// 更新今日任务
function updateTodayTasks() {
    const tasksContainer = document.getElementById('today-tasks');
    const progress = currentUser.progress;
    
    // 生成推荐任务
    const tasks = [];
    
    // 检查是否有未完成的薄弱点复习
    if (progress.weakPoints.length > 0) {
        tasks.push({
            id: 'weak-review',
            title: '复习薄弱知识点：' + progress.weakPoints[0].name,
            type: 'review',
            completed: false
        });
    }
    
    // 推荐新课程
    const allLessons = mathData.chapters.flatMap(c => c.lessons);
    const nextLesson = allLessons.find(l => !progress.learnedLessons.includes(l.id));
    if (nextLesson) {
        tasks.push({
            id: 'new-lesson-' + nextLesson.id,
            title: '学习新课程：' + nextLesson.title,
            type: 'study',
            completed: false
        });
    }
    
    // 每日练习
    tasks.push({
        id: 'daily-practice',
        title: '完成10道练习题',
        type: 'practice',
        completed: progress.practiceCount >= 10
    });
    
    if (tasks.length === 0) {
        tasksContainer.innerHTML = '<div class="empty-state">暂无今日任务，开始学习吧！</div>';
        return;
    }
    
    tasksContainer.innerHTML = tasks.map(task => `
        <div class="task-item ${task.completed ? 'completed' : ''}" onclick="handleTask('${task.id}', '${task.type}')">
            <div class="task-checkbox"></div>
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-meta">${task.completed ? '已完成' : '点击开始'}</div>
            </div>
        </div>
    `).join('');
}

// 处理任务点击
function handleTask(taskId, type) {
    switch(type) {
        case 'review':
            switchPage('review');
            break;
        case 'study':
            switchPage('study');
            break;
        case 'practice':
            switchPage('practice');
            break;
    }
}

// 绘制进度图表
function drawProgressChart() {
    const canvas = document.getElementById('progressCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const progress = currentUser.progress;
    
    // 设置画布大小
    canvas.width = canvas.offsetWidth;
    canvas.height = 200;
    
    const chapters = mathData.chapters;
    const barWidth = (canvas.width - 60) / chapters.length;
    const maxHeight = 150;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    chapters.forEach((chapter, index) => {
        const chapterProgress = progress.chapterProgress[chapter.id] || 0;
        const barHeight = (chapterProgress / 100) * maxHeight;
        
        const x = 30 + index * barWidth + barWidth * 0.2;
        const y = canvas.height - 40 - barHeight;
        
        // 绘制柱状图
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, '#4f46e5');
        gradient.addColorStop(1, '#06b6d4');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth * 0.6, barHeight);
        
        // 绘制标签
        ctx.fillStyle = '#64748b';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('第' + chapter.id + '章', x + barWidth * 0.3, canvas.height - 15);
    });
}

// 初始化学习页面
function initStudyPage() {
    const chapterList = document.getElementById('chapter-list');
    const progress = currentUser.progress;
    
    chapterList.innerHTML = mathData.chapters.map(chapter => {
        const chapterProgress = progress.chapterProgress[chapter.id] || 0;
        const completedLessons = chapter.lessons.filter(l => 
            progress.learnedLessons.includes(l.id)
        ).length;
        
        return `
            <div class="chapter-item">
                <div class="chapter-header" onclick="toggleChapter(${chapter.id})">
                    <span>📁</span>
                    <span>${chapter.title}</span>
                    <span class="chapter-progress">${completedLessons}/${chapter.lessons.length}</span>
                </div>
                <div class="lesson-list hidden" id="chapter-${chapter.id}-lessons">
                    ${chapter.lessons.map(lesson => `
                        <div class="lesson-item ${progress.learnedLessons.includes(lesson.id) ? 'completed' : ''}" 
                             onclick="loadLesson('${lesson.id}')">
                            <span>${progress.learnedLessons.includes(lesson.id) ? '✓' : '○'}</span>
                            <span>${lesson.title}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// 切换章节展开/收起
function toggleChapter(chapterId) {
    const lessonList = document.getElementById(`chapter-${chapterId}-lessons`);
    lessonList.classList.toggle('hidden');
}

// 加载课程（手机端全屏显示课程内容，桌面端右侧显示）
function loadLesson(lessonId) {
    const lesson = mathData.chapters
        .flatMap(c => c.lessons)
        .find(l => l.id === lessonId);
    
    if (!lesson) return;
    
    const contentArea = document.getElementById('lesson-content');
    contentArea.innerHTML = `
        <div class="lesson-detail-header">
            <button class="back-btn" onclick="closeLessonDetail()">← 返回</button>
            <span class="lesson-detail-title">${lesson.title}</span>
        </div>
        <div class="lesson-body">
            ${lesson.content}
        </div>
        <div class="lesson-actions" style="margin-top: 24px; display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="btn-primary" onclick="markLessonComplete('${lesson.id}')">
                ✓ 标记为已学完
            </button>
            <button class="btn-secondary" onclick="startLessonPractice('${lesson.id}')">
                ✏️ 做练习题
            </button>
            <button class="presentation-btn" onclick="openLessonPpt('${lesson.id}')">
                📺 视频讲解
            </button>
        </div>
    `;
    
    // 手机端：隐藏章节列表，显示课程内容区域为全屏
    if (window.innerWidth <= 768) {
        contentArea.classList.add('lesson-fullscreen');
        document.getElementById('chapter-list').style.display = 'none';
    }
    
    // 标记为活跃
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.classList.remove('active');
    });
    if (event && event.target) {
        event.target.closest('.lesson-item')?.classList.add('active');
    }
}

// 关闭课程详情，返回章节列表（手机端）
function closeLessonDetail() {
    const contentArea = document.getElementById('lesson-content');
    contentArea.classList.remove('lesson-fullscreen');
    contentArea.innerHTML = `<div class="empty-state"><span class="empty-icon">📖</span><p>选择左侧章节开始学习</p></div>`;
    document.getElementById('chapter-list').style.display = '';
}

// 标记课程完成
function markLessonComplete(lessonId) {
    if (!currentUser.progress.learnedLessons.includes(lessonId)) {
        currentUser.progress.learnedLessons.push(lessonId);
        saveUserData();
        
        // 更新章节进度
        updateChapterProgress();
        
        alert('🎉 恭喜完成本节课学习！');
        initStudyPage();
    }
}

// 更新章节进度
function updateChapterProgress() {
    mathData.chapters.forEach(chapter => {
        const totalLessons = chapter.lessons.length;
        const completedLessons = chapter.lessons.filter(l => 
            currentUser.progress.learnedLessons.includes(l.id)
        ).length;
        currentUser.progress.chapterProgress[chapter.id] = 
            Math.round((completedLessons / totalLessons) * 100);
    });
    saveUserData();
}

// 开始课程练习
function startLessonPractice(lessonId) {
    const chapter = mathData.chapters.find(c => 
        c.lessons.some(l => l.id === lessonId)
    );
    
    const questions = mathData.questions.filter(q => q.chapter === chapter.id);
    if (questions.length === 0) {
        alert('该章节暂无练习题');
        return;
    }
    
    startExam(questions.slice(0, 5), '章节练习：' + chapter.title);
}

// 初始化复习页面
function initReviewPage() {
    const weakList = document.getElementById('weak-list');
    const progress = currentUser.progress;
    
    if (progress.weakPoints.length === 0) {
        weakList.innerHTML = '<div class="empty-state">暂无薄弱知识点，继续保持！</div>';
    } else {
        weakList.innerHTML = progress.weakPoints.map((point, index) => `
            <div class="weak-item">
                <span class="weak-level ${point.level}">${point.level === 'high' ? '重点' : point.level === 'medium' ? '中等' : '一般'}</span>
                <div class="weak-info">
                    <div class="weak-name">${point.name}</div>
                    <div class="weak-desc">${point.description}</div>
                </div>
                <button class="btn-review" onclick="reviewWeakPoint(${index})">去复习</button>
            </div>
        `).join('');
    }
}

// 复习薄弱点
function reviewWeakPoint(index) {
    const point = currentUser.progress.weakPoints[index];
    const questions = mathData.questions.filter(q => 
        q.chapter === point.chapterId
    );
    
    if (questions.length > 0) {
        startExam(questions.slice(0, 5), '薄弱点专项：' + point.name);
    }
}

// 快速练习
function startQuickPractice() {
    const questions = shuffleArray([...mathData.questions]).slice(0, 10);
    startExam(questions, '快速练习');
}

// 章节练习
function startChapterPractice() {
    const chapterId = prompt('请输入章节号（1-5）：');
    if (!chapterId || chapterId < 1 || chapterId > 5) {
        alert('请输入有效的章节号');
        return;
    }
    
    const questions = mathData.questions.filter(q => q.chapter == chapterId);
    if (questions.length === 0) {
        alert('该章节暂无练习题');
        return;
    }
    
    const chapter = mathData.chapters.find(c => c.id == chapterId);
    startExam(questions, '章节练习：' + chapter.title);
}

// 薄弱点专练
function startWeakPointPractice() {
    const weakPoints = currentUser.progress.weakPoints;
    if (weakPoints.length === 0) {
        alert('暂无薄弱知识点，先做几套练习吧！');
        return;
    }
    
    const questions = [];
    weakPoints.forEach(point => {
        const chapterQuestions = mathData.questions.filter(q => q.chapter === point.chapterId);
        questions.push(...chapterQuestions);
    });
    
    startExam(shuffleArray(questions).slice(0, 10), '薄弱点专项练习');
}

// 模拟考试
function startMockExam() {
    const questions = shuffleArray([...mathData.questions]).slice(0, 20);
    startExam(questions, '模拟考试');
}

// 开始考试
function startExam(questions, title) {
    currentExam = questions;
    currentQuestionIndex = 0;
    examAnswers = new Array(questions.length).fill(null);
    examStartTime = Date.now();
    
    document.querySelector('.practice-modes').classList.add('hidden');
    document.getElementById('exam-area').classList.remove('hidden');
    document.getElementById('exam-title').textContent = title;
    document.getElementById('total-questions').textContent = questions.length;
    
    startExamTimer();
    showQuestion(0);
}

// 考试计时器
function startExamTimer() {
    examTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - examStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const seconds = (elapsed % 60).toString().padStart(2, '0');
        document.getElementById('exam-timer').textContent = `${minutes}:${seconds}`;
    }, 1000);
}

// 显示题目
function showQuestion(index) {
    currentQuestionIndex = index;
    const question = currentExam[index];
    
    document.getElementById('current-question').textContent = index + 1;
    
    const questionArea = document.getElementById('question-area');
    
    let optionsHtml = '';
    if (question.type === 'choice') {
        optionsHtml = `
            <div class="options-list">
                ${question.options.map((opt, i) => `
                    <div class="option-item ${examAnswers[index] === i ? 'selected' : ''}" 
                         onclick="selectAnswer(${i})">
                        <span class="option-label">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        optionsHtml = `
            <input type="text" class="fill-blank-input" 
                   placeholder="请输入答案" 
                   value="${examAnswers[index] || ''}"
                   onchange="fillAnswer(this.value)">
        `;
    }
    
    questionArea.innerHTML = `
        <div class="question-number">第 ${index + 1} 题</div>
        <div class="question-content">${question.content}</div>
        ${optionsHtml}
    `;
    
    // 更新按钮状态
    document.getElementById('btn-prev').disabled = index === 0;
    
    if (index === currentExam.length - 1) {
        document.getElementById('btn-next').classList.add('hidden');
        document.getElementById('btn-submit').classList.remove('hidden');
    } else {
        document.getElementById('btn-next').classList.remove('hidden');
        document.getElementById('btn-submit').classList.add('hidden');
    }
}

// 选择答案
function selectAnswer(optionIndex) {
    examAnswers[currentQuestionIndex] = optionIndex;
    
    document.querySelectorAll('.option-item').forEach((item, i) => {
        item.classList.toggle('selected', i === optionIndex);
    });
}

// 填空答案
function fillAnswer(value) {
    examAnswers[currentQuestionIndex] = value.trim();
}

// 上一题
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

// 下一题
function nextQuestion() {
    if (currentQuestionIndex < currentExam.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    }
}

// 提交试卷
function submitExam() {
    clearInterval(examTimer);
    
    let correct = 0;
    const wrongQuestions = [];
    
    currentExam.forEach((q, i) => {
        const userAnswer = examAnswers[i];
        const isCorrect = q.type === 'choice' 
            ? userAnswer === q.answer 
            : userAnswer == q.answer;
        
        if (isCorrect) {
            correct++;
        } else {
            wrongQuestions.push({
                question: q,
                userAnswer: userAnswer
            });
        }
    });
    
    // 更新用户数据
    currentUser.progress.practiceCount += currentExam.length;
    currentUser.progress.correctCount += correct;
    
    // 分析薄弱点
    analyzeWeakPoints(wrongQuestions);
    
    saveUserData();
    
    // 显示结果
    showExamResult(correct, currentExam.length, wrongQuestions);
}

// 分析薄弱点
function analyzeWeakPoints(wrongQuestions) {
    const chapterWrongCount = {};
    
    wrongQuestions.forEach(({ question }) => {
        chapterWrongCount[question.chapter] = (chapterWrongCount[question.chapter] || 0) + 1;
    });
    
    Object.entries(chapterWrongCount).forEach(([chapterId, count]) => {
        if (count >= 2) {
            const chapter = mathData.chapters.find(c => c.id == chapterId);
            const existingIndex = currentUser.progress.weakPoints.findIndex(
                p => p.chapterId == chapterId
            );
            
            const weakPoint = {
                chapterId: parseInt(chapterId),
                name: chapter.title,
                description: `该章节错题${count}道，需要加强练习`,
                level: count >= 3 ? 'high' : 'medium'
            };
            
            if (existingIndex >= 0) {
                currentUser.progress.weakPoints[existingIndex] = weakPoint;
            } else {
                currentUser.progress.weakPoints.push(weakPoint);
            }
        }
    });
}

// 显示考试结果
function showExamResult(correct, total, wrongQuestions) {
    const score = Math.round((correct / total) * 100);
    const questionArea = document.getElementById('question-area');
    
    let message = '';
    if (score >= 90) message = '🎉 太棒了！成绩优秀！';
    else if (score >= 80) message = '👍 很好！继续保持！';
    else if (score >= 60) message = '💪 及格了，还有进步空间！';
    else message = '📚 需要加强练习，不要气馁！';
    
    questionArea.innerHTML = `
        <div class="result-summary">
            <h2>练习完成！</h2>
            <div class="result-score">${score}分</div>
            <div class="result-message">${message}</div>
            <div class="result-details">
                <div class="result-stat">
                    <h4>总题数</h4>
                    <div class="value">${total}</div>
                </div>
                <div class="result-stat">
                    <h4>正确</h4>
                    <div class="value" style="color: var(--success);">${correct}</div>
                </div>
                <div class="result-stat">
                    <h4>错误</h4>
                    <div class="value" style="color: var(--danger);">${total - correct}</div>
                </div>
            </div>
            ${wrongQuestions.length > 0 ? `
                <div style="margin-top: 30px; text-align: left;">
                    <h3 style="margin-bottom: 16px;">错题回顾</h3>
                    ${wrongQuestions.map(({ question, userAnswer }, i) => `
                        <div style="background: #fef2f2; padding: 16px; border-radius: 12px; margin-bottom: 12px;">
                            <p style="font-weight: 500; margin-bottom: 8px;">${i + 1}. ${question.content}</p>
                            <p style="color: var(--danger); font-size: 14px;">你的答案：${userAnswer !== null ? (question.type === 'choice' ? String.fromCharCode(65 + userAnswer) : userAnswer) : '未作答'}</p>
                            <p style="color: var(--success); font-size: 14px;">正确答案：${question.type === 'choice' ? String.fromCharCode(65 + question.answer) : question.answer}</p>
                            <div style="display: flex; gap: 10px; margin-top: 12px;">
                                <button class="btn-secondary" onclick="showExplanation(${question.id})">📺 视频讲解</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            <div style="margin-top: 30px;">
                <button class="btn-primary" onclick="backToPractice()">返回练习页面</button>
            </div>
        </div>
    `;
    
    document.getElementById('btn-prev').classList.add('hidden');
    document.getElementById('btn-next').classList.add('hidden');
    document.getElementById('btn-submit').classList.add('hidden');
}

// 显示解析 - 打开PPT讲解
function showExplanation(questionId) {
    // 关闭结果弹窗
    document.getElementById('explanation-modal')?.classList.add('hidden');
    
    // 使用PPT方式展示错题解析
    if (ppt.loadErrorPpt(questionId)) {
        ppt.openPresentation();
    } else {
        // 如果没有PPT数据，回退到弹窗方式
        const question = mathData.questions.find(q => q.id === questionId);
        if (!question) return;
        
        document.getElementById('explanation-content').innerHTML = `
            <div class="question-content" style="margin-bottom: 20px;">${question.content}</div>
            <div style="background: #f0f9ff; padding: 20px; border-radius: 12px;">
                <h4 style="color: var(--secondary); margin-bottom: 12px;">解析</h4>
                <p>${question.explanation}</p>
            </div>
            <button class="video-btn" style="margin-top: 20px; width: 100%;" onclick="showExplanation(${questionId}); ppt.loadErrorPpt(${questionId}); ppt.openPresentation();">
                📺 观看视频讲解
            </button>
        `;
        
        document.getElementById('explanation-modal').classList.remove('hidden');
    }
}

// 打开课程PPT讲解
function openLessonPpt(lessonId) {
    if (ppt.loadLessonPpt(lessonId)) {
        ppt.openPresentation();
    } else {
        alert('抱歉，暂无此课程的讲解视频');
    }
}

// 关闭弹窗
function closeModal() {
    document.getElementById('explanation-modal').classList.add('hidden');
}

// 返回练习页面
function backToPractice() {
    document.getElementById('exam-area').classList.add('hidden');
    document.querySelector('.practice-modes').classList.remove('hidden');
    document.getElementById('btn-prev').classList.remove('hidden');
}

// 初始化学情分析页面
function initAnalysisPage() {
    drawRadarChart();
    drawTrendChart();
    generateAnalysisReport();
}

// 绘制雷达图
function drawRadarChart() {
    const canvas = document.getElementById('radarCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;
    
    const chapters = mathData.chapters;
    const progress = currentUser.progress;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;
    const angleStep = (Math.PI * 2) / chapters.length;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制网格
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.strokeStyle = '#e2e8f0';
        for (let j = 0; j < chapters.length; j++) {
            const angle = j * angleStep - Math.PI / 2;
            const x = centerX + Math.cos(angle) * (radius * i / 5);
            const y = centerY + Math.sin(angle) * (radius * i / 5);
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }
    
    // 绘制数据
    ctx.beginPath();
    ctx.fillStyle = 'rgba(79, 70, 229, 0.3)';
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    
    chapters.forEach((chapter, i) => {
        const chapterProgress = progress.chapterProgress[chapter.id] || 0;
        const angle = i * angleStep - Math.PI / 2;
        const value = chapterProgress / 100;
        const x = centerX + Math.cos(angle) * (radius * value);
        const y = centerY + Math.sin(angle) * (radius * value);
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        
        // 绘制标签
        const labelX = centerX + Math.cos(angle) * (radius + 25);
        const labelY = centerY + Math.sin(angle) * (radius + 25);
        ctx.fillStyle = '#64748b';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('第' + chapter.id + '章', labelX, labelY);
    });
    
    ctx.closePath();
    ctx.fillStyle = 'rgba(79, 70, 229, 0.3)';
    ctx.fill();
    ctx.stroke();
}

// 绘制趋势图
function drawTrendChart() {
    const canvas = document.getElementById('trendCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 250;
    
    // 模拟学习趋势数据
    const data = [60, 65, 70, 68, 75, 80, 82, 85, 88, 90];
    const labels = ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周', '第8周', '第9周', '第10周'];
    
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const stepX = chartWidth / (data.length - 1);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制坐标轴
    ctx.strokeStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // 绘制折线
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 3;
    
    data.forEach((value, i) => {
        const x = padding + i * stepX;
        const y = canvas.height - padding - (value / 100) * chartHeight;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // 绘制数据点
    data.forEach((value, i) => {
        const x = padding + i * stepX;
        const y = canvas.height - padding - (value / 100) * chartHeight;
        
        ctx.beginPath();
        ctx.fillStyle = '#4f46e5';
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // 标签
        ctx.fillStyle = '#64748b';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(labels[i], x, canvas.height - padding + 20);
    });
}

// 生成分析报告
function generateAnalysisReport() {
    const progress = currentUser.progress;
    const totalLessons = mathData.chapters.reduce((sum, c) => sum + c.lessons.length, 0);
    const learnedCount = progress.learnedLessons.length;
    const masteryRate = progress.practiceCount > 0 
        ? Math.round((progress.correctCount / progress.practiceCount) * 100) 
        : 0;
    
    let report = `
        <h4>📊 整体学习情况</h4>
        <p>已完成 ${learnedCount}/${totalLessons} 个知识点的学习，完成度 ${Math.round((learnedCount/totalLessons)*100)}%。</p>
        <p>累计练习 ${progress.practiceCount} 道题，正确率 ${masteryRate}%。</p>
        
        <h4 style="margin-top: 24px;">💪 优势领域</h4>
    `;
    
    // 找出掌握好的章节
    const goodChapters = mathData.chapters.filter(c => 
        (progress.chapterProgress[c.id] || 0) >= 70
    );
    
    if (goodChapters.length > 0) {
        report += `<p>${goodChapters.map(c => c.title).join('、')} 掌握较好，继续保持！</p>`;
    } else {
        report += `<p>还在学习初期，继续加油！</p>`;
    }
    
    // 薄弱点
    report += `<h4 style="margin-top: 24px;">📚 需要加强</h4>`;
    if (progress.weakPoints.length > 0) {
        report += `<p>${progress.weakPoints.map(p => p.name).join('、')} 需要重点复习。</p>`;
    } else {
        report += `<p>暂无明显的薄弱知识点，继续保持！</p>`;
    }
    
    // 建议
    report += `
        <h4 style="margin-top: 24px;">💡 学习建议</h4>
        <ul style="margin-left: 20px; line-height: 2;">
            <li>每天坚持学习20-30分钟，保持学习的连续性</li>
            <li>对于薄弱知识点，建议多做专项练习</li>
            <li>遇到不懂的问题及时使用AI辅导功能</li>
            <li>定期回顾错题，巩固知识</li>
        </ul>
    `;
    
    document.getElementById('analysis-report').innerHTML = report;
}

// 初始化AI辅导页面
function initTutorPage() {
    // 显示随机学习小贴士
    const tip = mathData.tips[Math.floor(Math.random() * mathData.tips.length)];
    document.getElementById('daily-tip').textContent = tip;
}

// 发送消息
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // 添加用户消息
    addMessage(message, 'user');
    input.value = '';
    
    // AI回复
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessage(response, 'system');
    }, 500);
}

// 添加消息到聊天区
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const avatar = sender === 'user' ? '👦' : '🤖';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 生成AI回复
function generateAIResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    // 常见问题回复
    if (lowerMsg.includes('分数') && lowerMsg.includes('通分')) {
        return `通分的方法：
1. 找出几个分数分母的最小公倍数
2. 把每个分数化成以最小公倍数为分母的分数
3. 分子也要相应扩大相同的倍数

例如：1/2 和 1/3 通分
- 2和3的最小公倍数是6
- 1/2 = 3/6
- 1/3 = 2/6`;
    }
    
    if (lowerMsg.includes('圆') && lowerMsg.includes('面积')) {
        return `圆的面积公式是：S = πr²

其中：
- S 表示面积
- π ≈ 3.14
- r 表示半径

例如：半径是5厘米的圆
S = 3.14 × 5² = 3.14 × 25 = 78.5（平方厘米）`;
    }
    
    if (lowerMsg.includes('解方程')) {
        return `解方程的一般步骤：
1. 去分母（如果有分数）
2. 去括号
3. 移项（把含未知数的项移到一边，常数项移到另一边）
4. 合并同类项
5. 系数化为1

记住：移项要变号！`;
    }
    
    if (lowerMsg.includes('比例')) {
        return `比例应用题的解题方法：
1. 找出题目中的比关系
2. 算出总份数
3. 用总数除以总份数，得到每份的数量
4. 分别算出各部分的数量

关键是找准"单位1"和对应的份数！`;
    }
    
    // 通用鼓励回复
    const encouragements = mathData.tutorResponses.encouragement;
    return encouragements[Math.floor(Math.random() * encouragements.length)];
}

// 快速提问
function askQuick(question) {
    document.getElementById('chat-input').value = question;
    sendMessage();
}

// 插入公式（简化版）
function insertFormula() {
    const input = document.getElementById('chat-input');
    input.value += ' [公式] ';
    input.focus();
}

// 上传图片（简化版）
function uploadImage() {
    alert('图片上传功能需要后端支持，当前为演示版本');
}

// 保存用户数据
function saveUserData() {
    if (!currentUser) return;
    
    const users = JSON.parse(localStorage.getItem('mathUsers') || '{}');
    users[currentUser.username] = currentUser;
    localStorage.setItem('mathUsers', JSON.stringify(users));
    localStorage.setItem('currentMathUser', JSON.stringify(currentUser));
}

// 工具函数：随机打乱数组
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 键盘事件
document.addEventListener('keydown', (e) => {
    // 聊天输入框回车发送
    if (e.key === 'Enter' && !e.shiftKey && document.activeElement.id === 'chat-input') {
        e.preventDefault();
        sendMessage();
    }
});
