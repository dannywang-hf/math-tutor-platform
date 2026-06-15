// 六年级数学课程数据
const mathData = {
    // 章节数据
    chapters: [
        {
            id: 1,
            title: "第一章：分数乘法",
            lessons: [
                {
                    id: "1-1",
                    title: "分数乘整数",
                    content: `
                        <h4>知识点讲解</h4>
                        <p>分数乘整数的意义与整数乘法的意义相同，就是求几个相同加数的和的简便运算。</p>
                        
                        <h4>计算方法</h4>
                        <p>分数乘整数，用分子乘整数的积作分子，分母不变。</p>
                        <p class="math-formula">例如：2/3 × 4 = (2×4)/3 = 8/3</p>
                        
                        <h4>注意事项</h4>
                        <ul>
                            <li>能约分的要先约分，再计算</li>
                            <li>整数可以看作分母是1的分数</li>
                            <li>结果要化成最简分数</li>
                        </ul>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>计算：3/4 × 8</p>
                            <p><strong>解：</strong>3/4 × 8 = 3/4 × 8/1 = (3×8)/(4×1) = 24/4 = 6</p>
                            <p>或者先约分：3/4 × 8 = 3 × 2 = 6</p>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "1-2",
                    title: "分数乘分数",
                    content: `
                        <h4>知识点讲解</h4>
                        <p>分数乘分数，用分子相乘的积作分子，分母相乘的积作分母。</p>
                        
                        <h4>计算方法</h4>
                        <p class="math-formula">a/b × c/d = (a×c)/(b×d)</p>
                        
                        <h4>特殊情况</h4>
                        <ul>
                            <li>真分数相乘，积小于每个因数</li>
                            <li>一个数（0除外）乘大于1的数，积大于这个数</li>
                            <li>一个数（0除外）乘小于1的数，积小于这个数</li>
                        </ul>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>计算：2/3 × 3/4</p>
                            <p><strong>解：</strong>2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2</p>
                            <p>先约分更简便：2/3 × 3/4 = 2/4 = 1/2</p>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "1-3",
                    title: "分数乘法应用题",
                    content: `
                        <h4>解题步骤</h4>
                        <ol>
                            <li>找准单位"1"的量</li>
                            <li>确定要求的量是单位"1"的几分之几</li>
                            <li>列式计算</li>
                        </ol>
                        
                        <h4>常见类型</h4>
                        <ul>
                            <li>求一个数的几分之几是多少</li>
                            <li>连续求一个数的几分之几</li>
                            <li>求比一个数多（少）几分之几的数</li>
                        </ul>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>一本书有240页，小明第一天看了全书的1/4，第二天看了全书的1/3，两天一共看了多少页？</p>
                            <p><strong>解：</strong></p>
                            <p>第一天：240 × 1/4 = 60（页）</p>
                            <p>第二天：240 × 1/3 = 80（页）</p>
                            <p>一共：60 + 80 = 140（页）</p>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                }
            ]
        },
        {
            id: 2,
            title: "第二章：分数除法",
            lessons: [
                {
                    id: "2-1",
                    title: "倒数的认识",
                    content: `
                        <h4>知识点讲解</h4>
                        <p>乘积是1的两个数互为倒数。</p>
                        
                        <h4>求倒数的方法</h4>
                        <ul>
                            <li>分数：交换分子和分母的位置</li>
                            <li>整数：看作分母是1的分数，再交换</li>
                            <li>1的倒数是1，0没有倒数</li>
                        </ul>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>写出下列数的倒数：</p>
                            <p>3/5 → 5/3</p>
                            <p>7 → 1/7</p>
                            <p>1 → 1</p>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "2-2",
                    title: "分数除以整数",
                    content: `
                        <h4>计算方法</h4>
                        <p>分数除以整数（0除外），等于分数乘这个整数的倒数。</p>
                        <p class="math-formula">a/b ÷ c = a/b × 1/c = a/(b×c)</p>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>计算：4/5 ÷ 2</p>
                            <p><strong>解：</strong>4/5 ÷ 2 = 4/5 × 1/2 = 4/10 = 2/5</p>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "2-3",
                    title: "一个数除以分数",
                    content: `
                        <h4>计算方法</h4>
                        <p>一个数除以分数，等于这个数乘分数的倒数。</p>
                        <p class="math-formula">a ÷ b/c = a × c/b</p>
                        
                        <h4>统一规律</h4>
                        <p>甲数除以乙数（0除外），等于甲数乘乙数的倒数。</p>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>计算：6 ÷ 2/3</p>
                            <p><strong>解：</strong>6 ÷ 2/3 = 6 × 3/2 = 18/2 = 9</p>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                }
            ]
        },
        {
            id: 3,
            title: "第三章：比和比例",
            lessons: [
                {
                    id: "3-1",
                    title: "比的意义",
                    content: `
                        <h4>知识点讲解</h4>
                        <p>两个数相除又叫做两个数的比。</p>
                        <p class="math-formula">a ÷ b = a : b = a/b (b≠0)</p>
                        
                        <h4>比的各部分名称</h4>
                        <ul>
                            <li>比号前面的数叫前项</li>
                            <li>比号后面的数叫后项</li>
                            <li>比的前项除以后项所得的商叫比值</li>
                        </ul>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>3 : 5 = 3 ÷ 5 = 0.6</p>
                            <p>前项是3，后项是5，比值是0.6</p>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "3-2",
                    title: "比的基本性质",
                    content: `
                        <h4>知识点讲解</h4>
                        <p>比的前项和后项同时乘或除以相同的数（0除外），比值不变。</p>
                        
                        <h4>化简比</h4>
                        <p>把比化成最简单的整数比，叫做化简比。</p>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>化简：12 : 18</p>
                            <p><strong>解：</strong>12 : 18 = (12÷6) : (18÷6) = 2 : 3</p>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "3-3",
                    title: "比的应用",
                    content: `
                        <h4>按比例分配</h4>
                        <p>把一个数量按照一定的比来进行分配。</p>
                        
                        <h4>解题方法</h4>
                        <ol>
                            <li>求总份数</li>
                            <li>求每份是多少</li>
                            <li>求各部分数量</li>
                        </ol>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>把60本书按2:3分给甲乙两个班，各得多少本？</p>
                            <p><strong>解：</strong></p>
                            <p>总份数：2 + 3 = 5</p>
                            <p>每份：60 ÷ 5 = 12（本）</p>
                            <p>甲班：12 × 2 = 24（本）</p>
                            <p>乙班：12 × 3 = 36（本）</p>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                }
            ]
        },
        {
            id: 4,
            title: "第四章：圆",
            lessons: [
                {
                    id: "4-1",
                    title: "圆的认识",
                    content: `
                        <h4>圆的基本概念</h4>
                        <ul>
                            <li><strong>圆心(O)：</strong>圆中心的点</li>
                            <li><strong>半径(r)：</strong>圆心到圆上任意一点的线段</li>
                            <li><strong>直径(d)：</strong>通过圆心两端都在圆上的线段</li>
                        </ul>
                        
                        <h4>重要关系</h4>
                        <p class="math-formula">d = 2r 或 r = d/2</p>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>一个圆的直径是10厘米，半径是多少？</p>
                            <p><strong>解：</strong>r = d/2 = 10/2 = 5（厘米）</p>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "4-2",
                    title: "圆的周长",
                    content: `
                        <h4>圆周率π</h4>
                        <p>圆的周长与直径的比值叫做圆周率，用π表示。</p>
                        <p>π ≈ 3.14</p>
                        
                        <h4>周长公式</h4>
                        <p class="math-formula">C = πd 或 C = 2πr</p>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>一个圆的半径是4厘米，周长是多少？</p>
                            <p><strong>解：</strong>C = 2πr = 2 × 3.14 × 4 = 25.12（厘米）</p>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "4-3",
                    title: "圆的面积",
                    content: `
                        <h4>面积公式</h4>
                        <p class="math-formula">S = πr²</p>
                        
                        <h4>圆环面积</h4>
                        <p class="math-formula">S = π(R² - r²)</p>
                        <p>其中R是外圆半径，r是内圆半径</p>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>一个圆的直径是10厘米，面积是多少？</p>
                            <p><strong>解：</strong></p>
                            <p>r = 10/2 = 5（厘米）</p>
                            <p>S = πr² = 3.14 × 5² = 3.14 × 25 = 78.5（平方厘米）</p>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                }
            ]
        },
        {
            id: 5,
            title: "第五章：百分数",
            lessons: [
                {
                    id: "5-1",
                    title: "百分数的意义",
                    content: `
                        <h4>知识点讲解</h4>
                        <p>表示一个数是另一个数的百分之几的数，叫做百分数。</p>
                        <p>百分数也叫百分率或百分比。</p>
                        
                        <h4>读写方法</h4>
                        <ul>
                            <li>写作：%（百分号）</li>
                            <li>读作：百分之几</li>
                        </ul>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>45% 读作：百分之四十五</p>
                            <p>百分之三十写作：30%</p>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "5-2",
                    title: "百分数与小数、分数的互化",
                    content: `
                        <h4>百分数化小数</h4>
                        <p>去掉百分号，小数点向左移动两位。</p>
                        <p>45% = 0.45</p>
                        
                        <h4>小数化百分数</h4>
                        <p>小数点向右移动两位，添上百分号。</p>
                        <p>0.35 = 35%</p>
                        
                        <h4>百分数化分数</h4>
                        <p>写成分母是100的分数，再约分。</p>
                        <p>60% = 60/100 = 3/5</p>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>将 3/4 化成百分数</p>
                            <p><strong>解：</strong>3/4 = 0.75 = 75%</p>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "5-3",
                    title: "百分数应用题",
                    content: `
                        <h4>常见类型</h4>
                        <ul>
                            <li>求一个数是另一个数的百分之几</li>
                            <li>求一个数的百分之几是多少</li>
                            <li>已知一个数的百分之几是多少，求这个数</li>
                        </ul>
                        
                        <div class="example-box">
                            <h5>例题</h5>
                            <p>某班有50人，今天出勤48人，出勤率是多少？</p>
                            <p><strong>解：</strong></p>
                            <p>出勤率 = 出勤人数 ÷ 总人数 × 100%</p>
                            <p>= 48 ÷ 50 × 100% = 96%</p>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                }
            ]
        }
    ],

    // 题库
    questions: [
        // 分数乘法
        {
            id: 1,
            chapter: 1,
            type: "choice",
            difficulty: "easy",
            content: "3/4 × 8 = ?",
            options: ["6", "8", "4", "2"],
            answer: 0,
            explanation: "3/4 × 8 = 3 × 2 = 6（先约分再计算）"
        },
        {
            id: 2,
            chapter: 1,
            type: "choice",
            difficulty: "medium",
            content: "2/3 × 3/4 = ?",
            options: ["1/2", "2/3", "3/4", "1/3"],
            answer: 0,
            explanation: "2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2"
        },
        {
            id: 3,
            chapter: 1,
            type: "fill",
            difficulty: "medium",
            content: "一本书有120页，小明看了全书的2/3，看了____页。",
            answer: "80",
            explanation: "120 × 2/3 = 80（页）"
        },
        // 分数除法
        {
            id: 4,
            chapter: 2,
            type: "choice",
            difficulty: "easy",
            content: "4/5 ÷ 2 = ?",
            options: ["2/5", "4/5", "8/5", "1/5"],
            answer: 0,
            explanation: "4/5 ÷ 2 = 4/5 × 1/2 = 4/10 = 2/5"
        },
        {
            id: 5,
            chapter: 2,
            type: "choice",
            difficulty: "medium",
            content: "6 ÷ 2/3 = ?",
            options: ["9", "4", "12", "3"],
            answer: 0,
            explanation: "6 ÷ 2/3 = 6 × 3/2 = 18/2 = 9"
        },
        {
            id: 6,
            chapter: 2,
            type: "fill",
            difficulty: "hard",
            content: "一个数的3/4是15，这个数是____。",
            answer: "20",
            explanation: "15 ÷ 3/4 = 15 × 4/3 = 20"
        },
        // 比和比例
        {
            id: 7,
            chapter: 3,
            type: "choice",
            difficulty: "easy",
            content: "12 : 18 化简后是？",
            options: ["2:3", "3:2", "4:6", "6:9"],
            answer: 0,
            explanation: "12 : 18 = (12÷6) : (18÷6) = 2 : 3"
        },
        {
            id: 8,
            chapter: 3,
            type: "choice",
            difficulty: "medium",
            content: "把60本书按2:3分给甲乙两班，甲班得多少本？",
            options: ["24", "36", "20", "40"],
            answer: 0,
            explanation: "总份数5，每份12本，甲班2份得24本"
        },
        {
            id: 9,
            chapter: 3,
            type: "fill",
            difficulty: "hard",
            content: "一个三角形三个内角的比是1:2:3，最大的角是____度。",
            answer: "90",
            explanation: "总份数6，每份30度，最大角3份是90度"
        },
        // 圆
        {
            id: 10,
            chapter: 4,
            type: "choice",
            difficulty: "easy",
            content: "圆的直径是10厘米，半径是？",
            options: ["5厘米", "10厘米", "20厘米", "3.14厘米"],
            answer: 0,
            explanation: "r = d/2 = 10/2 = 5（厘米）"
        },
        {
            id: 11,
            chapter: 4,
            type: "choice",
            difficulty: "medium",
            content: "圆的半径是4厘米，周长约是？（π取3.14）",
            options: ["25.12厘米", "12.56厘米", "50.24厘米", "16厘米"],
            answer: 0,
            explanation: "C = 2πr = 2 × 3.14 × 4 = 25.12（厘米）"
        },
        {
            id: 12,
            chapter: 4,
            type: "fill",
            difficulty: "hard",
            content: "一个圆的半径是5厘米，面积是____平方厘米。（π取3.14）",
            answer: "78.5",
            explanation: "S = πr² = 3.14 × 5² = 3.14 × 25 = 78.5"
        },
        // 百分数
        {
            id: 13,
            chapter: 5,
            type: "choice",
            difficulty: "easy",
            content: "0.75 = ?%",
            options: ["75%", "7.5%", "750%", "0.75%"],
            answer: 0,
            explanation: "0.75 = 75%（小数点右移两位加%）"
        },
        {
            id: 14,
            chapter: 5,
            type: "choice",
            difficulty: "medium",
            content: "某班50人，今天出勤48人，出勤率是？",
            options: ["96%", "95%", "94%", "98%"],
            answer: 0,
            explanation: "48 ÷ 50 × 100% = 96%"
        },
        {
            id: 15,
            chapter: 5,
            type: "fill",
            difficulty: "hard",
            content: "一件商品原价200元，打八折后的价格是____元。",
            answer: "160",
            explanation: "200 × 80% = 200 × 0.8 = 160（元）"
        }
    ],

    // AI辅导回复模板
    tutorResponses: {
        greetings: [
            "你好！我是你的AI数学老师，有什么数学问题可以问我哦~",
            "嗨！今天想学什么数学知识呢？",
            "你好呀！数学学习上有任何疑问都可以问我！"
        ],
        encouragement: [
            "很好！继续加油！💪",
            "做得不错！保持这个状态！",
            "太棒了！你进步很大！",
            "很好理解！继续练习会更熟练的！"
        ],
        hints: [
            "再想想，回忆一下我们学过的方法...",
            "试着画个图帮助理解？",
            "可以先找找题目中的关键信息...",
            "分步骤来做，一步一步来..."
        ]
    },

    // 学习小贴士
    tips: [
        "每天坚持练习10道题，数学成绩会有明显提升！",
        "遇到难题不要急，先理解题意，再寻找解题方法。",
        "做错题是好事，说明发现了知识盲点，及时复习！",
        "数学公式要理解推导过程，不要死记硬背。",
        "画图是解决几何问题的好帮手！",
        "计算时要细心，做完记得检查一遍。",
        "每天复习前一天学过的内容，记忆更牢固。",
        "不懂就问，及时解决疑问才能进步更快！"
    ]
};

// 用户数据存储
const userData = {
    currentUser: null,
    users: JSON.parse(localStorage.getItem('mathUsers')) || {},
    
    saveUser(username, data) {
        this.users[username] = data;
        localStorage.setItem('mathUsers', JSON.stringify(this.users));
    },
    
    getUser(username) {
        return this.users[username] || null;
    },
    
    createDefaultProgress() {
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
};
