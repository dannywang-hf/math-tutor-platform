// PPT演示数据 - 每个知识点的幻灯片内容
const pptData = {
    "1-1": {
        title: "分数乘整数",
        slides: [
            {
                id: 1,
                title: "什么是分数乘整数？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text">
                            <p>分数乘整数 = 求几个相同分数的和</p>
                        </div>
                        <div class="ppt-example">
                            <p>比如：2/3 × 4</p>
                            <p>就是求 <strong>4个 2/3</strong> 相加是多少</p>
                        </div>
                    </div>
                `,
                narration: "同学们好！今天我们来学习分数乘整数。分数乘整数的意思，就是求几个相同分数的和。比如说，三分之二乘以四，其实就是求4个三分之二加起来等于多少。"
            },
            {
                id: 2,
                title: "计算方法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box">
                            <h4>计算法则</h4>
                            <p class="ppt-big-formula">分子 × 整数<br>─────────<br>&nbsp;&nbsp;&nbsp;分母&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <div class="ppt-tip">
                            💡 能约分的要先约分，再计算
                        </div>
                    </div>
                `,
                narration: "那怎么计算呢？记住这个方法：用分子乘以整数作为新的分子，分母保持不变。这里有个小技巧：能约分的要先约分再算，这样数字会小很多，不容易出错。"
            },
            {
                id: 3,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>例题：计算 3/4 × 8</h4>
                            <div class="ppt-step">
                                <span class="step-num">第一步</span>
                                <p>3/4 × 8 = (3×8) / 4</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">第二步</span>
                                <p>= 24 / 4</p>
                            </div>
                            <div class="ppt-step highlight">
                                <span class="step-num">第三步</span>
                                <p>= 6 ✅</p>
                            </div>
                        </div>
                        <div class="ppt-better-way">
                            <p><strong>更简便的方法：</strong></p>
                            <p>3/4 × 8 → 先约分 → 3 × 2 = 6</p>
                        </div>
                    </div>
                `,
                narration: "来看一道例题。四分之三乘以八。第一步，用三乘以八得到二十四，除以四。第二步，二十四除以四等于六。所以答案是六。其实还有更简便的方法：八和四可以先约分，四分之一等于二，那么三乘以二直接就等于六了。两种方法结果一样，但第二种更快哦！"
            },
            {
                id: 4,
                title: "注意事项",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-notes">
                            <div class="note-item">
                                <span class="note-icon">⚠️</span>
                                <p>整数可以看作分母是1的分数</p>
                            </div>
                            <div class="note-item">
                                <span class="note-icon">✅</span>
                                <p>结果要化成最简分数或整数</p>
                            </div>
                            <div class="note-item">
                                <span class="note-icon">📝</span>
                                <p>计算完记得检查一遍</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "最后总结三个注意点：第一，整数可以看作分母是一的分数；第二，计算结果一定要化成最简分数或者整数；第三，做完题目记得检查一遍，养成好习惯。好了，分数乘整数就学到这里，接下来做几道练习巩固一下吧！"
            }
        ]
    },
    "1-2": {
        title: "分数乘分数",
        slides: [
            {
                id: 1,
                title: "分数乘分数的意义",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text">
                            <p>分数乘分数 = 求一个数的几分之几是多少</p>
                        </div>
                        <div class="ppt-example">
                            <p>例如：1/2 × 1/3</p>
                            <p>意思是：<strong>1/2 的 1/3 是多少</strong></p>
                        </div>
                    </div>
                `,
                narration: "现在我们学习分数乘分数。分数乘分数的意思是求一个数的几分之几是多少。比如二分之一乘以三分之一，意思就是问二分之一的三分之一到底是多少呢？"
            },
            {
                id: 2,
                title: "计算方法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box">
                            <h4>核心公式</h4>
                            <p class="ppt-big-formula">a/b × c/d = (a×c) / (b×d)</p>
                            <p style="text-align:center; margin-top:15px;">分子乘分子，分母乘分母</p>
                        </div>
                    </div>
                `,
                narration: "计算方法很简单：分子乘分子作为新的分子，分母乘分母作为新的分母。记住了吗？分子乘分子，分母乘分母。"
            },
            {
                id: 3,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>例题：2/3 × 3/4 = ?</h4>
                            <div class="ppt-step">
                                <span class="step-num">①</span>
                                <p>分子相乘：2 × 3 = 6</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">②</span>
                                <p>分母相乘：3 × 4 = 12</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">③</span>
                                <p>得到：6/12</p>
                            </div>
                            <div class="ppt-step highlight">
                                <span class="step-num">④</span>
                                <p>约分后：1/2 ✅</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "来做个例题。三分之二乘以四分之三。第一步，分子相乘，二乘三等于六。第二步，分母相乘，三乘四等于十二。第三步，得到六分之十二。第四步，约分，六和十二的最大公约数是六，约分后等于二分之一。答案是二分之一。"
            },
            {
                id: 4,
                title: "重要规律",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-rules">
                            <div class="rule-card success">
                                <h5>真分数 × 真分数</h5>
                                <p>积 < 每个因数（越乘越小）</p>
                                <p>例：1/2 × 1/2 = 1/4</p>
                            </div>
                            <div class="rule-card warning">
                                <h5>数 × 大于1的数</h5>
                                <p>积 > 原来的数（变大了）</p>
                                <p>例：1/2 × 3 = 3/2</p>
                            </div>
                            <div class="rule-card info">
                                <h5>数 × 小于1的数</h5>
                                <p>积 < 原来的数（变小了）</p>
                                <p>例：3 × 1/2 = 3/2</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "最后记住三个重要规律。第一，真分数乘真分数，积比每个因数都小，越乘越小。第二，一个数乘大于一的数，积比原来的数大。第三，一个数乘小于一的数，积比原来的数小。这些规律可以帮助你快速检验答案是否合理。"
            }
        ]
    },
    "1-3": {
        title: "分数乘法应用题",
        slides: [
            {
                id: 1,
                title: "解题三部曲",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-steps-flow">
                            <div class="flow-step">
                                <div class="flow-num">1</div>
                                <p>找单位"1"</p>
                            </div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-step">
                                <div class="flow-num">2</div>
                                <p>确定几分之几</p>
                            </div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-step">
                                <div class="flow-num">3</div>
                                <p>列式计算</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "做分数乘法应用题，记住这三步：第一步，找准单位一。第二步，确定要求的量是单位一的几分之几。第三步，列式计算。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box large">
                            <h4>例题</h4>
                            <p class="question-text">一本书有240页，小明第一天看了全书的1/4，第二天看了全书的1/3，两天一共看了多少页？</p>
                            
                            <div class="ppt-analysis">
                                <p><strong>分析：</strong></p>
                                <p>• 单位"1" = 全书240页</p>
                                <p>• 第一天看：240的 1/4</p>
                                <p>• 第二天看：240的 1/3</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "来看这道经典的应用题。一本书有二百四十页，小明第一天看了全书的四分之一，第二天看了全书的三分之一，两天一共看了多少页？首先分析：单位一是全书二百四十页。第一天看的量是二百四十的四分之一，第二天是二百四十的三分之一。"
            },
            {
                id: 3,
                title: "解题过程",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <div class="ppt-step">
                                <span class="step-num">第一天</span>
                                <p>240 × 1/4 = 60（页）</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">第二天</span>
                                <p>240 × 1/3 = 80（页）</p>
                            </div>
                            <div class="ppt-divider">+</div>
                            <div class="ppt-step highlight">
                                <span class="step-num">合计</span>
                                <p>60 + 80 = 140（页）✅</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "开始计算。第一天，二百四十乘以四分之一等于六十页。第二天，二百四十乘以三分之一等于八十页。两天加起来，六十加八十等于一百四十页。所以答案是一百四十页。"
            }
        ]
    },
    "2-1": {
        title: "倒数的认识",
        slides: [
            {
                id: 1,
                title: "什么是倒数？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p class="highlight-text">乘积是1的两个数</p>
                            <p class="sub-text">互为倒数</p>
                        </div>
                        <div class="ppt-example">
                            <p>2/3 和 3/2 互为倒数</p>
                            <p>因为：2/3 × 3/2 = 6/6 = 1 ✅</p>
                        </div>
                    </div>
                `,
                narration: "今天学习倒数。什么叫倒数呢？很简单，两个数相乘的积等于一，这两个数就互为倒数。比如三分之二和三分之三相乘等于一，它们就互为倒数。"
            },
            {
                id: 2,
                title: "求倒数的方法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-methods">
                            <div class="method-card">
                                <h5>🔢 分数</h5>
                                <p>交换分子和分母的位置</p>
                                <p class="example">3/5 → 5/3</p>
                            </div>
                            <div class="method-card">
                                <h5>🔢 整数</h5>
                                <p>看作分母是1的分数，再交换</p>
                                <p class="example">7 → 7/1 → 1/7</p>
                            </div>
                            <div class="method-card special">
                                <h5>⚡ 特殊情况</h5>
                                <p>1的倒数是 1</p>
                                <p>0 没有倒数 ❌</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "怎么求倒数呢？如果是分数，直接把分子和分母交换位置就可以了。比如五分之三的倒数就是五分之三。如果是整数，先把它写成分母为一的分数，然后再交换分子分母。七的倒数就是七分之一。特别注意：一的倒数还是一，零没有倒数，因为任何数乘以零都不可能等于一。"
            }
        ]
    },
    "2-2": {
        title: "分数除以整数",
        slides: [
            {
                id: 1,
                title: "核心规则",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big">
                            <h4>分数除法的关键</h4>
                            <p class="ppt-big-formula highlight-text">除以一个数 = 乘以它的倒数</p>
                            <div class="ppt-example" style="margin-top:20px;">
                                <p>a/b ÷ c = a/b × 1/c</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "分数除法的核心规则一定要记住：除以一个数，等于乘以这个数的倒数。这是解决所有分数除法问题的金钥匙。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>例题：4/5 ÷ 2 = ?</h4>
                            <div class="ppt-step">
                                <span class="step-num">① 变号</span>
                                <p>÷2 → × 1/2</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">② 计算</span>
                                <p>4/5 × 1/2 = 4/10</p>
                            </div>
                            <div class="ppt-step highlight">
                                <span class="step-num">③ 约分</span>
                                <p>4/10 = 2/5 ✅</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "来做道例题。五分之四除以二。第一步，把除法变成乘法，除以二等于乘以二分之一。第二步，五分之四乘以二分之一等于十分之四。第三步，约分，十分之四化简为五分之二。答案是五分之二。"
            }
        ]
    },
    "2-3": {
        title: "一个数除以分数",
        slides: [
            {
                id: 1,
                title: "统一规律",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big">
                            <p class="ppt-big-formula">甲 ÷ 乙 = 甲 × 乙的倒数</p>
                            <p class="sub-text" style="margin-top:15px;">不管乙是整数、分数都适用！</p>
                        </div>
                    </div>
                `,
                narration: "不管是除以整数还是除以分数，规则都是一样的：甲数除以乙数，等于甲数乘以乙数的倒数。这个统一规律一定要背下来。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>例题：6 ÷ 2/3 = ?</h4>
                            <div class="ppt-step">
                                <span class="step-num">① 找倒数</span>
                                <p>2/3 的倒数是 3/2</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">② 改乘法</span>
                                <p>6 ÷ 2/3 = 6 × 3/2</p>
                            </div>
                            <div class="ppt-step highlight">
                                <span class="step-num">③ 算出结果</span>
                                <p>18/2 = 9 ✅</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "例题：六除以三分之二。第一步，找到三分之二的倒数是三分之三。第二步，把除法改成乘法，六乘以三分之三。第三步，计算，六乘以三等于十八，十八除以二等于九。答案是九。"
            }
        ]
    },
    "3-1": {
        title: "比的意义",
        slides: [
            {
                id: 1,
                title: "什么是比？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box">
                            <h4>定义</h4>
                            <p class="ppt-big-formula">两个数相除 又叫做 两个数的比</p>
                        </div>
                        <div class="ppt-parts">
                            <p><strong>3 : 5 = 3 ÷ 5 = 3/5</p>
                            <p>↑ &nbsp; ↑ &nbsp; ↑ &nbsp; ↑</p>
                            <p>前项 比号 后项 比值</p>
                        </div>
                    </div>
                `,
                narration: "什么是比呢？两个数相除又叫做两个数的比。比如三比五，等于三除以五，也等于五分之三。比的各部分有专门的名字：三叫做前项，中间的冒号叫比号，五叫做后项，最后的结果叫比值。"
            }
        ]
    },
    "3-2": {
        title: "比的基本性质",
        slides: [
            {
                id: 1,
                title: "基本性质",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box important">
                            <h4>⭐ 重要性质 ⭐</h4>
                            <p class="ppt-big-formula">比的前项和后项同时<br>乘或除以相同的数(0除外)<br>比值不变</p>
                        </div>
                    </div>
                `,
                narration: "比的基本性质非常重要，一定要记住：比的前项和后项同时乘或者除以相同的数，零除外，比值不变。这个性质是化简比的基础。"
            },
            {
                id: 2,
                title: "化简比",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>例题：化简 12 : 18</h4>
                            <div class="ppt-step">
                                <span class="step-num">① 找公因数</span>
                                <p>12和18的最大公因数是 6</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">② 同时除</span>
                                <p>(12÷6) : (18÷6)</p>
                            </div>
                            <div class="ppt-step highlight">
                                <span class="step-num">③ 结果</span>
                                <p>2 : 3 ✅</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "利用基本性质来化简比。化简十二比十八。第一步，找到十二和十八的最大公因数是六。第二步，前项后项同时除以六。第三步，得到二比三。这就是最简整数比了。"
            }
        ]
    },
    "3-3": {
        title: "比的应用（按比例分配）",
        slides: [
            {
                id: 1,
                title: "按比例分配",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-steps-flow">
                            <div class="flow-step">
                                <div class="flow-num">1</div>
                                <p>求总份数</p>
                            </div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-step">
                                <div class="flow-num">2</div>
                                <p>求每份量</p>
                            </div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-step">
                                <div class="flow-num">3</div>
                                <p>求各部分</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "按比例分配问题，按照这三步来解决。第一步，求总份数，把比的前项后项加起来。第二步，用总量除以总份数，求出每份是多少。第三步，每份量分别乘以各自的份数，得到各部分的数量。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box large">
                            <h4>例题</h4>
                            <p class="question-text">把60本书按2:3分给甲乙两班，各得多少本？</p>
                            
                            <div class="ppt-steps-list">
                                <div class="list-step">
                                    <span>① 总份数：</span>
                                    <span>2 + 3 = 5份</span>
                                </div>
                                <div class="list-step">
                                    <span>② 每份：</span>
                                    <span>60 ÷ 5 = 12本</span>
                                </div>
                                <div class="list-step highlight">
                                    <span>③ 甲班：</span>
                                    <span>12 × 2 = 24本</span>
                                </div>
                                <div class="list-step highlight">
                                    <span>④ 乙班：</span>
                                    <span>12 × 3 = 36本</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                narration: "例题：把六十本书按二比三分给甲乙两班，各得多少本？第一步，总份数是二加三等于五份。第二步，每份是六十除以五等于十二本。第三步，甲班占两份，十二乘二等于二十四本。乙班占三份，十二乘三等于三十六本。验证一下，二十四加三十六正好等于六十，没错！"
            }
        ]
    },
    "4-1": {
        title: "圆的认识",
        slides: [
            {
                id: 1,
                title: "圆的基本概念",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-circle-diagram">
                            <svg viewBox="0 0 200 200" class="circle-svg">
                                <circle cx="100" cy="100" r="80" fill="#e0e7ff" stroke="#4f46e5" stroke-width="3"/>
                                <circle cx="100" cy="100" r="4" fill="#ef4444"/>
                                <line x1="100" y1="100" x2="180" y2="100" stroke="#ef4444" stroke-width="2"/>
                                <text x="185" y="105" font-size="14" fill="#ef4444">r</text>
                                <line x1="20" y1="100" x2="180" y2="100" stroke="#06b6d4" stroke-width="2"/>
                                <text x="90" y="120" font-size="14" fill="#06b6d4">d</text>
                                <text x="92" y="90" font-size="14" fill="#ef4444">O</text>
                            </svg>
                        </div>
                        <div class="ppt-concepts">
                            <div class="concept-item">
                                <span class="concept-color red"></span>
                                <p><strong>O 圆心</strong> - 圆的中心点</p>
                            </div>
                            <div class="concept-item">
                                <span class="concept-color red"></span>
                                <p><strong>r 半径</strong> - 圆心到圆上任意一点的距离</p>
                            </div>
                            <div class="concept-item">
                                <span class="concept-color blue"></span>
                                <p><strong>d 直径</strong> - 通过圆心两端都在圆上的线段</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "认识圆。圆有一个中心点叫做圆心，用字母O表示。从圆心到圆上任意一点的线段叫做半径，用小写字母r表示。通过圆心并且两端都在圆上的线段叫做直径，用小写字母d表示。"
            },
            {
                id: 2,
                title: "半径与直径的关系",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big">
                            <p class="ppt-big-formula">d = 2r</p>
                            <p class="ppt-big-formula">r = d ÷ 2</p>
                        </div>
                        <div class="ppt-example">
                            <p>直径是半径的2倍</p>
                            <p>半径是直径的一半</p>
                        </div>
                    </div>
                `,
                narration: "半径和直径之间有什么关系呢？直径等于半径的两倍，或者说半径等于直径除以二。这个关系非常简单，但是做题的时候经常用到，一定要记住。"
            }
        ]
    },
    "4-2": {
        title: "圆的周长",
        slides: [
            {
                id: 1,
                title: "什么是周长？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text">
                            <p>圆的<strong>周长</strong> = 围成圆一周的长度</p>
                        </div>
                        <div class="ppt-circle-perimeter">
                            <svg viewBox="0 0 200 200" class="circle-svg">
                                <circle cx="100" cy="100" r="70" fill="none" stroke="#22c55e" stroke-width="4" stroke-dasharray="8,4"/>
                                <path d="M 170,100 A 70,70 0 0,1 165,130" fill="none" stroke="#22c55e" stroke-width="4"/>
                                <text x="175" y="125" font-size="16" fill="#22c55e" font-weight="bold">C</text>
                            </svg>
                        </div>
                    </div>
                `,
                narration: "圆的周长是什么意思呢？就是围成圆一周的总长度。想象一下，如果你沿着圆形跑道跑一圈，跑过的距离就是这个圆的周长。"
            },
            {
                id: 2,
                title: "周长公式",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box important">
                            <h4>⭐ 必背公式 ⭐</h4>
                            <p class="ppt-big-formula">C = πd</p>
                            <p class="ppt-big-formula">C = 2πr</p>
                            <div class="ppt-note">
                                <p>π ≈ 3.14 （圆周率）</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "圆的周长公式有两个，都要记住。第一个，周长等于圆周率乘以直径。第二个，周长等于二乘以圆周率再乘以半径。这两个公式是等价的，因为直径等于两倍的半径。圆周率π大约等于三点一四。"
            },
            {
                id: 3,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>例题：半径是4厘米，周长是多少？</h4>
                            <div class="ppt-step">
                                <span class="step-num">已知</span>
                                <p>r = 4厘米</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">选公式</span>
                                <p>C = 2πr</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">代入</span>
                                <p>C = 2 × 3.14 × 4</p>
                            </div>
                            <div class="ppt-step highlight">
                                <span class="step-num">结果</span>
                                <p>C = 25.12 厘米 ✅</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "例题：一个圆的半径是四厘米，周长是多少？已知半径是四厘米，选择公式C等于二πr。代入数值，二乘以三点一四再乘以四。计算结果是二十五点一二厘米。"
            }
        ]
    },
    "4-3": {
        title: "圆的面积",
        slides: [
            {
                id: 1,
                title: "面积公式",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box important big">
                            <h4>⭐ 最重要公式之一 ⭐</h4>
                            <p class="ppt-big-formula huge">S = πr²</p>
                            <p class="sub-text">面积 = 圆周率 × 半径²</p>
                        </div>
                    </div>
                `,
                narration: "圆的面积公式是最重要的公式之一，必须牢牢记住。S等于πr²，也就是面积等于圆周率乘以半径的平方。注意这里是半径的平方，不是半径乘以二，千万不要搞混了。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>例题：直径是10厘米，面积是多少？</h4>
                            <div class="ppt-step">
                                <span class="step-num">① 求半径</span>
                                <p>d=10 → r = 10÷2 = 5厘米</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">② 代入公式</span>
                                <p>S = 3.14 × 5²</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">③ 计算</span>
                                <p>S = 3.14 × 25</p>
                            </div>
                            <div class="ppt-step highlight">
                                <span class="step-num">④ 结果</span>
                                <p>S = 78.5 平方厘米 ✅</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "例题：一个圆的直径是十厘米，面积是多少？这道题给的是直径，不是半径，所以要小心。第一步，先求半径，十除以二等于五厘米。第二步，代入面积公式，三点一四乘以五的平方。第三步，五的平方是二十五。第四步，三点一四乘以二十五等于七八点五平方厘米。注意，如果给的是直径，一定要先转换成半径再计算。"
            }
        ]
    },
    "5-1": {
        title: "百分数的意义",
        slides: [
            {
                id: 1,
                title: "什么是百分数？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p class="highlight-text">表示一个数是另一个数的</p>
                            <p class="highlight-text huge">百分之几</p>
                            <p class="sub-text">也叫 百分率 或 百分比</p>
                        </div>
                    </div>
                `,
                narration: "什么是百分数？百分数表示一个数是另一个数的百分之几。百分数也叫百分率或者百分比。生活中到处都能看到百分数，比如衣服标签上的含棉量、手机电池的电量显示等等。"
            },
            {
                id: 2,
                title: "读写方法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-read-write">
                            <div class="rw-card">
                                <h5>写法</h5>
                                <p>45% — 加上百分号%</p>
                                <p>0.5% — 零点五 percent</p>
                            </div>
                            <div class="rw-card">
                                <h5>读法</h5>
                                <p>45% → 读作 百分之四十五</p>
                                <p>100% → 读作 百分之一百</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "百分数的写法和读法。写的时候在数字后面加上百分号。读的时候，百分之加上数字。比如百分之四十五，百分之一百。"
            }
        ]
    },
    "5-2": {
        title: "百分数与小数、分数的互化",
        slides: [
            {
                id: 1,
                title: "互化方法大全",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-convert-table">
                            <table>
                                <tr>
                                    <th>类型</th>
                                    <th>方法</th>
                                    <th>例子</th>
                                </tr>
                                <tr>
                                    <td>百分数→小数</td>
                                    <td>去掉%，小数点左移2位</td>
                                    <td>45% → 0.45</td>
                                </tr>
                                <tr>
                                    <td>小数→百分数</td>
                                    <td>小数点右移2位，加%</td>
                                    <td>0.35 → 35%</td>
                                </tr>
                                <tr>
                                    <td>百分数→分数</td>
                                    <td>写成分母100，再约分</td>
                                    <td>60% → 3/5</td>
                                </tr>
                                <tr>
                                    <td>分数→百分数</td>
                                    <td>先化小数，再加%</td>
                                    <td>3/4 → 75%</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                `,
                narration: "百分数和小数、分数之间的互化方法。百分数化小数，去掉百分号，小数点向左移动两位。小数化百分数，小数点向右移动两位，再加上百分号。百分数化分数，写成分母是一百的分数，然后约分。分数化百分数，先化成小数，再加上百分号。这四种转化方法考试经常考到。"
            }
        ]
    },
    "5-3": {
        title: "百分数应用题",
        slides: [
            {
                id: 1,
                title: "常见题型",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-types">
                            <div class="type-card">
                                <h5>类型一</h5>
                                <p>求A是B的百分之几</p>
                                <p>A ÷ B × 100%</p>
                            </div>
                            <div class="type-card">
                                <h5>类型二</h5>
                                <p>求A的百分之几是多少</p>
                                <p>A × 百分数</p>
                            </div>
                            <div class="type-card">
                                <h5>类型三</h5>
                                <p>已知A的百分之几是B，求A</p>
                                <p>B ÷ 百分数</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "百分数应用题主要有三种类型。第一种，求甲数是乙数的百分之几，用甲除以乙再乘以百分之一百。第二种，求一个数的百分之几是多少，用乘法。第三种，已知一个数的百分之几是多少，求原数，用除法。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box large">
                            <h4>例题</h4>
                            <p class="question-text">某班有50人，今天出勤48人，出勤率是多少？</p>
                            
                            <div class="ppt-step highlight">
                                <span class="step-num">公式</span>
                                <p>出勤率 = 出勤人数 ÷ 总人数 × 100%</p>
                            </div>
                            <div class="ppt-step">
                                <span class="step-num">代入</span>
                                <p>= 48 ÷ 50 × 100%</p>
                            </div>
                            <div class="ppt-step highlight">
                                <span class="step-num">结果</span>
                                <p>= 96% ✅</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "例题：某班有五十人，今天出勤四十八人，出勤率是多少？首先回忆公式，出勤率等于出勤人数除以总人数再乘以百分之一百。代入数值，四十八除以五十乘以百分之一百。四十八除以五十等于零点九六，乘以百分之一百等于百分之九十六。所以出勤率是百分之九十六。"
            }
        ]
    }
};

// 错题PPT讲解数据
const errorPptData = {
    // 根据题目ID生成错题讲解
    generateErrorPpt(questionId) {
        const question = mathData.questions.find(q => q.id === questionId);
        if (!question) return null;
        
        return {
            title: `错题解析：${question.content}`,
            slides: [
                {
                    id: 1,
                    title: "题目回顾",
                    content: `
                        <div class="ppt-slide-content">
                            <div class="ppt-question-review">
                                <h4>原题</h4>
                                <p class="question-display">${question.content}</p>
                                ${question.options ? `<div class="options-display">${question.options.map((o, i) => `<span>${String.fromCharCode(65+i)}. ${o}</span>`).join('')}</div>` : ''}
                            </div>
                        </div>
                    `,
                    narration: `让我们来看看这道错题。题目是：${question.content}。${question.options ? '选项有' + question.options.map((o,i) => String.fromCharCode(65+i) + '、' + o).join('，') + '。' : ''}我们先仔细读一遍题目，理解它到底在问什么。`
                },
                {
                    id: 2,
                    title: "正确答案",
                    content: `
                        <div class="ppt-slide-content">
                            <div class="ppt-correct-answer">
                                <h4>✅ 正确答案</h4>
                                <p class="answer-display">${question.type === 'choice' ? String.fromCharCode(65 + question.answer) + '. ' + question.options[question.answer] : question.answer}</p>
                            </div>
                        </div>
                    `,
                    narration: `这道题的正确答案是${question.type === 'choice' ? String.fromCharCode(65 + question.answer) + '选项，' + question.options[question.answer] : question.answer}。`
                },
                {
                    id: 3,
                    title: "详细解析",
                    content: `
                        <div class="ppt-slide-content">
                            <div class="ppt-explanation-detail">
                                <h4>📝 解析过程</h4>
                                <div class="explanation-text">${this.formatExplanation(question.explanation)}</div>
                            </div>
                        </div>
                    `,
                    narration: `下面我来详细解释为什么是这个答案。${question.explanation}`
                },
                {
                    id: 4,
                    title: "举一反三",
                    content: `
                        <div class="ppt-slide-content">
                            <div class="ppt-similar-tips">
                                <h4>💡 同类题目提示</h4>
                                <div class="tips-content">${this.generateSimilarTips(question)}</div>
                            </div>
                        </div>
                    `,
                    narration: `这道题虽然做错了，但是没关系，重要的是从错误中学习。以后遇到类似的题目时，记住这些要点，就不会再错了。`
                }
            ]
        };
    },
    
    formatExplanation(text) {
        return `<p>${text}</p>`;
    },
    
    generateSimilarTips(question) {
        const tipsMap = {
            1: '<p>分数乘整数时，先看看能不能约分，约分后再计算会更简单。</p>',
            2: '<p>分数乘分数，分子乘分子，分母乘分母，最后别忘了约分。</p>',
            4: '<p>分数除以整数，转化为乘以这个整数的倒数。</p>',
            5: '<p>除以分数等于乘以它的倒数，这是分数除法的核心！</p>',
            7: '<p>化简比就是找到前后项的最大公约数，同时除以它。</p>',
            10: '<p>直径和半径的关系：d = 2r，r = d÷2，不要搞混了。</p>',
            11: '<p>周长公式C=2πr，记住是2乘π再乘r，不是其他顺序。</p>',
            12: '<p>面积公式S=πr²，是半径的平方！给的是直径要先除以2。</p>',
            13: '<p>小数转百分数：小数点向右移两位，加上百分号。</p>',
            14: '<p>求百分比：部分÷整体×100%，这个公式要牢记。</p>',
            15: '<p>打折问题：打几折就是乘以零点几，八折就是乘0.8。</p>'
        };
        return tipsMap[question.id] || '<p>多做类似题目，熟能生巧！</p>';
    }
};
