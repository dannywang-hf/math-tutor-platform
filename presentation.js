// PPT演示组件和TTS人声讲解
class MathPPT {
    constructor() {
        this.currentLesson = null;
        this.currentSlide = 0;
        this.slides = [];
        this.isPlaying = false;
        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.ttsSpeed = 0.9; // 语速
        this.ttsPitch = 1.0; // 音调
        this.ttsEnabled = true;
    }
    
    // 加载课程PPT
    loadLessonPpt(lessonId) {
        const ppt = pptData[lessonId];
        if (!ppt) {
            console.log('No PPT found for lesson:', lessonId);
            return false;
        }
        
        this.currentLesson = lessonId;
        this.slides = ppt.slides;
        this.currentSlide = 0;
        return true;
    }
    
    // 加载错题PPT
    loadErrorPpt(questionId) {
        const ppt = errorPptData.generateErrorPpt(questionId);
        if (!ppt) {
            console.log('No error PPT found for question:', questionId);
            return false;
        }
        
        this.currentLesson = 'error-' + questionId;
        this.slides = ppt.slides;
        this.currentSlide = 0;
        return true;
    }
    
    // 打开PPT演示模式
    openPresentation() {
        if (this.slides.length === 0) return;
        
        const modal = document.getElementById('ppt-modal');
        if (!modal) {
            this.createPresentationModal();
        }
        
        document.getElementById('ppt-modal').classList.remove('hidden');
        this.renderSlide();
    }
    
    // 关闭演示
    closePresentation() {
        this.stopNarration();
        document.getElementById('ppt-modal')?.classList.add('hidden');
    }
    
    // 创建演示弹窗
    createPresentationModal() {
        const modalHtml = `
            <div class="ppt-modal" id="ppt-modal">
                <div class="ppt-container">
                    <div class="ppt-header">
                        <div class="ppt-title" id="ppt-title"></div>
                        <div class="ppt-controls">
                            <button class="ppt-control-btn" onclick="ppt.toggleTTS()" title="开关语音" id="tts-toggle">
                                <span id="tts-icon">🔊</span>
                            </button>
                            <button class="ppt-control-btn" onclick="ppt.prevSlide()" title="上一页">◀</button>
                            <span class="ppt-progress" id="ppt-progress">1 / 1</span>
                            <button class="ppt-control-btn" onclick="ppt.nextSlide()" title="下一页">▶</button>
                            <button class="ppt-control-btn play-btn" onclick="ppt.togglePlay()" title="自动播放" id="play-btn">
                                ▶️
                            </button>
                            <button class="ppt-close-btn" onclick="ppt.closePresentation()">×</button>
                        </div>
                    </div>
                    <div class="ppt-content" id="ppt-slide-content">
                        <!-- 幻灯片内容 -->
                    </div>
                    <div class="ppt-footer">
                        <div class="ppt-thumbnails" id="ppt-thumbnails">
                            <!-- 缩略图 -->
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // 键盘控制
        document.addEventListener('keydown', (e) => {
            if (!document.getElementById('ppt-modal')?.classList.contains('hidden')) {
                if (e.key === 'ArrowRight' || e.key === ' ') this.nextSlide();
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'Escape') this.closePresentation();
            }
        });
    }
    
    // 渲染当前幻灯片
    renderSlide() {
        if (this.currentSlide >= this.slides.length) return;
        
        const slide = this.slides[this.currentSlide];
        const content = document.getElementById('ppt-slide-content');
        
        if (!content) return;
        
        // 更新标题和进度
        document.getElementById('ppt-title').textContent = slide.title;
        document.getElementById('ppt-progress').textContent = 
            `${this.currentSlide + 1} / ${this.slides.length}`;
        
        // 渲染内容
        content.innerHTML = `
            <div class="ppt-slide">
                <div class="ppt-slide-header">
                    <h2>${slide.title}</h2>
                </div>
                <div class="ppt-slide-body">
                    ${slide.content}
                </div>
            </div>
        `;
        
        // 更新缩略图
        this.renderThumbnails();
        
        // 自动播放旁白
        if (this.isPlaying) {
            this.playNarration(slide.narration);
        }
    }
    
    // 渲染缩略图
    renderThumbnails() {
        const container = document.getElementById('ppt-thumbnails');
        if (!container) return;
        
        container.innerHTML = this.slides.map((slide, i) => `
            <div class="ppt-thumb ${i === this.currentSlide ? 'active' : ''}" 
                 onclick="ppt.goToSlide(${i})">
                <span>${i + 1}</span>
            </div>
        `).join('');
    }
    
    // 上一页
    prevSlide() {
        if (this.currentSlide > 0) {
            this.stopNarration();
            this.currentSlide--;
            this.renderSlide();
        }
    }
    
    // 下一页
    nextSlide() {
        if (this.currentSlide < this.slides.length - 1) {
            this.stopNarration();
            this.currentSlide++;
            this.renderSlide();
        } else {
            // 播放完成
            this.stopPlay();
        }
    }
    
    // 跳转到指定页
    goToSlide(index) {
        if (index >= 0 && index < this.slides.length) {
            this.stopNarration();
            this.currentSlide = index;
            this.renderSlide();
        }
    }
    
    // 播放/暂停切换
    togglePlay() {
        if (this.isPlaying) {
            this.stopPlay();
        } else {
            this.startPlay();
        }
    }
    
    // 开始自动播放
    startPlay() {
        this.isPlaying = true;
        document.getElementById('play-btn').textContent = '⏸️';
        document.getElementById('play-btn').title = '暂停播放';
        
        // 从当前页开始播放
        const slide = this.slides[this.currentSlide];
        if (slide) {
            this.playNarration(slide.narration);
        }
    }
    
    // 停止自动播放
    stopPlay() {
        this.isPlaying = false;
        document.getElementById('play-btn').textContent = '▶️';
        document.getElementById('play-btn').title = '自动播放';
        this.stopNarration();
    }
    
    // 播放旁白
    playNarration(text) {
        if (!this.ttsEnabled || !text) return;
        
        this.stopNarration();
        
        // 使用Web Speech API
        if ('speechSynthesis' in window) {
            this.currentUtterance = new SpeechSynthesisUtterance(text);
            this.currentUtterance.lang = 'zh-CN';
            this.currentUtterance.rate = this.ttsSpeed;
            this.currentUtterance.pitch = this.ttsPitch;
            this.currentUtterance.volume = 1;
            
            // 选择中文语音
            const voices = this.speechSynthesis.getVoices();
            const zhVoice = voices.find(v => v.lang.includes('zh')) || 
                           voices.find(v => v.lang.includes('CN')) ||
                           voices[0];
            if (zhVoice) {
                this.currentUtterance.voice = zhVoice;
            }
            
            // 自动播放下一页
            this.currentUtterance.onend = () => {
                if (this.isPlaying && this.currentSlide < this.slides.length - 1) {
                    setTimeout(() => {
                        this.nextSlide();
                    }, 500);
                } else if (this.isPlaying) {
                    this.stopPlay();
                }
            };
            
            this.speechSynthesis.speak(this.currentUtterance);
        }
    }
    
    // 停止旁白
    stopNarration() {
        if ('speechSynthesis' in window) {
            this.speechSynthesis.cancel();
        }
        this.currentUtterance = null;
    }
    
    // 切换TTS开关
    toggleTTS() {
        this.ttsEnabled = !this.ttsEnabled;
        document.getElementById('tts-icon').textContent = this.ttsEnabled ? '🔊' : '🔇';
        
        if (!this.ttsEnabled) {
            this.stopNarration();
            this.stopPlay();
        }
    }
    
    // 设置语速
    setSpeed(speed) {
        this.ttsSpeed = speed;
    }
}

// 全局PPT实例
let ppt = new MathPPT();

// 页面加载时初始化语音
document.addEventListener('DOMContentLoaded', () => {
    if ('speechSynthesis' in window) {
        // 等待语音列表加载
        speechSynthesis.onvoiceschanged = () => {
            speechSynthesis.getVoices();
        };
    }
});
