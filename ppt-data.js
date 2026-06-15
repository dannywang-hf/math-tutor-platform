// PPT演示数据 - 苏教版六年级数学全册
const pptData = {
    // ====== 第一单元：长方体和正方体 ======
    "1-1": {
        title: "长方体和正方体的认识",
        slides: [
            {
                id: 1,
                title: "生活中找长方体",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text">
                            <p>大家生活中见过哪些<strong>长方体</strong>？</p>
                        </div>
                        <div class="ppt-example">
                            <p>📦 粉笔盒、📚 课本、🧱 砖块、🏠 教室</p>
                        </div>
                        <div class="ppt-tip">
                            <p>今天我们就来研究长方体<strong>长什么样</strong>！</p>
                        </div>
                    </div>
                `,
                narration: "同学们好！今天我们来认识长方体和正方体。大家想想，生活中你见过哪些长方体或正方体形状的物体呢？比如说我们的粉笔盒、数学课本、还有教室里的讲台，这些都是长方体。那正方体呢？魔方、色子就是典型的正方体。我们先从长方体开始学习。"
            },
            {
                id: 2,
                title: "长方体的特征",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box">
                            <h4>📐 长方体的特征</h4>
                            <p class="ppt-big-formula">6个面 · 12条棱 · 8个顶点</p>
                        </div>
                        <div class="ppt-diagram">
                            <div class="diagram-row">
                                <span class="label">面：</span>
                                <span>6个长方形（相对的面完全相同）</span>
                            </div>
                            <div class="diagram-row">
                                <span class="label">棱：</span>
                                <span>12条（相对的棱长度相等）</span>
                            </div>
                            <div class="diagram-row">
                                <span class="label">顶点：</span>
                                <span>8个</span>
                            </div>
                            <div class="diagram-row">
                                <span class="label">长宽高：</span>
                                <span>相交于同一顶点的三条棱</span>
                            </div>
                        </div>
                        <div class="ppt-formula-box" style="margin-top:10px;">
                            <p class="math-formula">棱长总和 = (长 + 宽 + 高) × 4</p>
                        </div>
                    </div>
                `,
                narration: "长方体的特征：六个面、十二条棱、八个顶点。注意，长方体相对的面是完全相同的，相对的棱长度也是相等的。从同一个顶点出发的三条棱，分别叫做长、宽、高。同学们数一数，是不是每个长方体都有六个面、十二条棱和八个顶点？长方体棱长的总和等于长加宽再加高的和乘以四。"
            },
            {
                id: 3,
                title: "正方体的特征",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box important">
                            <h4>📐 正方体 = 特殊的长方体</h4>
                            <p class="ppt-big-formula">6个面 · 12条棱 · 8个顶点</p>
                            <p>所有面完全相同 ✓</p>
                            <p>所有棱长度相等 ✓</p>
                        </div>
                        <div class="ppt-formula-box" style="margin-top:10px;">
                            <p class="math-formula">棱长总和 = 棱长 × 12</p>
                        </div>
                    </div>
                `,
                narration: "再来看正方体。正方体也有六个面、十二条棱和八个顶点。但它的特殊之处在于：六个面都是完全一样的正方形，十二条棱的长度全部相等。所以，我们说正方体是特殊的长方体，也就是长宽高都相等的长方体。正方体棱长的总和等于棱长乘以十二。"
            },
            {
                id: 4,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题</h4>
                            <p class="ppt-question">一个长方体长8厘米，宽6厘米，高4厘米，它的棱长总和是多少？</p>
                            <div class="ppt-step"><span>步骤一</span><p>找出长、宽、高：8cm、6cm、4cm</p></div>
                            <div class="ppt-step"><span>步骤二</span><p>代入公式：(8+6+4)×4</p></div>
                            <div class="ppt-step"><span>步骤三</span><p>= 18×4 = 72（厘米）</p></div>
                            <div class="ppt-step highlight"><span>答案</span><p>72厘米 ✅</p></div>
                        </div>
                    </div>
                `,
                narration: "来看一道例题。一个长方体长八厘米，宽六厘米，高四厘米，它的棱长总和是多少？第一步，我们找出长是八、宽是六、高是四。第二步，代入公式，八加六再加四等于十八，乘以四。第三步，算出来是七十二。所以棱长总和是七十二厘米。同学们记住，做这种题首先要看明白长宽高分别是什么。"
            },
            {
                id: 5,
                title: "易错提醒",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-notes">
                            <div class="note-item warning">
                                <span class="note-icon">⚠️</span>
                                <p><strong>面/棱/顶点记混？</strong> 面6、棱12、顶点8</p>
                            </div>
                            <div class="note-item warning">
                                <span class="note-icon">⚠️</span>
                                <p><strong>"相对的面"理解？</strong> 上下相对、左右相对、前后相对</p>
                            </div>
                            <div class="note-item warning">
                                <span class="note-icon">⚠️</span>
                                <p><strong>别忘单位！</strong> 棱长总和 = 长度单位</p>
                            </div>
                            <div class="note-item success">
                                <span class="note-icon">💡</span>
                                <p><strong>记忆口诀：</strong>长方体，六面八顶十二条棱，对面相等相对棱平</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "同学们注意三个易错点。第一，面棱顶点的数量容易记混，记住口诀：六面、八顶、十二条棱。第二，相对的面一定要成对来看，上下、左右、前后三组。第三，算完棱长总和别忘了写单位。今天我们学了长方体和正方体的特征，同学们课后可以找找身边的长方体，数一数它的面、棱和顶点。"
            }
        ]
    },
    "1-2": {
        title: "长方体和正方体的表面积",
        slides: [
            {
                id: 1,
                title: "什么是表面积？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>给长方体<strong>穿一件衣服</strong></p>
                            <p>需要多大的布？</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>表面积 = 长方体<strong>六个面的总面积</strong></p>
                        </div>
                    </div>
                `,
                narration: "同学们，如果我们想给长方体穿一件紧身衣服，需要多大的布料呢？这个问题其实就是求长方体的表面积。表面积，就是长方体六个面的总面积。我们一起来学习怎么算。"
            },
            {
                id: 2,
                title: "长方体表面积公式",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>📐 长方体表面积公式</h4>
                            <p class="ppt-big-formula">S = (ab + ah + bh) × 2</p>
                            <p>a=长 b=宽 h=高</p>
                        </div>
                        <div class="ppt-diagram-grid">
                            <div class="grid-item">上下面：a×b（2个）</div>
                            <div class="grid-item">前后面：a×h（2个）</div>
                            <div class="grid-item">左右面：b×h（2个）</div>
                        </div>
                    </div>
                `,
                narration: "长方体的表面积等于三个不同面的面积之和再乘以二。为什么乘二呢？因为长方体有三组相对的面，每组两个，所以先算一个面的面积，再乘二。S等于ab加ah再加bh的和乘以二。大家看：ab是上下面，ah是前后面，bh是左右面，注意不要搞混了。"
            },
            {
                id: 3,
                title: "正方体表面积公式",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>📐 正方体表面积公式</h4>
                            <p class="ppt-big-formula">S = 6a²</p>
                            <p>a = 棱长</p>
                        </div>
                        <div class="ppt-tip">
                            <p>正方体6个面完全相同 → 一个面面积a²，6个就是6a²</p>
                        </div>
                    </div>
                `,
                narration: "正方体的表面积就更简单了。因为正方体的六个面大小完全一样，每个面的面积是a的平方，六个面就是六倍的a的平方。所以S等于六a的平方。注意a的平方是棱长乘棱长，不是棱长乘六。"
            },
            {
                id: 4,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题：无盖鱼缸需要多少玻璃？</h4>
                            <p class="ppt-question">长6分米、宽5分米、高4分米的无盖鱼缸，至少需要多少平方分米玻璃？</p>
                            <div class="ppt-step"><span>分析</span><p>无盖→只有5个面（无上面）</p></div>
                            <div class="ppt-step"><span>前后</span><p>2×6×4 = 48 dm²</p></div>
                            <div class="ppt-step"><span>左右</span><p>2×5×4 = 40 dm²</p></div>
                            <div class="ppt-step"><span>底面</span><p>6×5 = 30 dm²</p></div>
                            <div class="ppt-step highlight"><span>总共</span><p>48+40+30 = 118 dm² ✅</p></div>
                        </div>
                    </div>
                `,
                narration: "来做一道无盖鱼缸的应用题。一个长方体鱼缸长六分米、宽五分米、高四分米，没有盖子。首先要理解：无盖意味着只有五个面，没有上面的面。前后两个面是二乘六乘四等于四十八平方分米。左右两个面是二乘五乘四等于四十平方分米。底面是六乘五等于三十平方分米。加起来总共一百一十八平方分米。所以至少需要一百一十八平方分米的玻璃。同学们注意，实际生活中遇到的无盖、无底、通风管等问题，都要先弄清楚需要几个面。"
            },
            {
                id: 5,
                title: "课堂小结",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-notes">
                            <div class="note-item">
                                <span class="note-icon">📝</span>
                                <p>长方体 S = (ab+ah+bh)×2</p>
                            </div>
                            <div class="note-item">
                                <span class="note-icon">📝</span>
                                <p>正方体 S = 6a²</p>
                            </div>
                            <div class="note-item warning">
                                <span class="note-icon">⚠️</span>
                                <p>实际问题先判断需要几个面</p>
                            </div>
                            <div class="note-item success">
                                <span class="note-icon">💡</span>
                                <p>展开图可以帮我们理解表面积</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "今天我们学习了表面积。来回顾一下重点：长方体表面积等于三个不同面面积之和乘以二，正方体表面积等于六倍的棱长的平方。做实际问题时，一定要先判断这个物体有几个面需要计算面积。比如无盖的盒子只有五个面，通风管只有四个面。同学们可以试着画一画正方体和长方体的展开图，展开图能帮助你更直观地理解表面积的计算。"
            }
        ]
    },
    "1-3": {
        title: "体积和体积单位",
        slides: [
            {
                id: 1,
                title: "什么是体积？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>一个粉笔盒和讲台相比</p>
                            <p>谁<strong>占的空间大</strong>？</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>物体<strong>所占空间的大小</strong>就叫体积</p>
                        </div>
                    </div>
                `,
                narration: "同学们，想想看，一个粉笔盒和一个讲台桌，哪个更大呢？当然是讲台桌更大，它占的空间更大。物体所占空间的大小就叫做体积。讲台的体积比粉笔盒大。今天我们学习体积的概念和体积单位。"
            },
            {
                id: 2,
                title: "常用的体积单位",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-units-grid">
                            <div class="unit-card">
                                <div class="unit-icon">📦</div>
                                <h5>立方厘米 cm³</h5>
                                <p>棱长1厘米的正方体</p>
                                <p class="small">大约一个手指尖的大小</p>
                            </div>
                            <div class="unit-card">
                                <div class="unit-icon">📦</div>
                                <h5>立方分米 dm³</h5>
                                <p>棱长1分米的正方体</p>
                                <p class="small">大约一个粉笔盒的大小</p>
                            </div>
                            <div class="unit-card">
                                <div class="unit-icon">📦</div>
                                <h5>立方米 m³</h5>
                                <p>棱长1米的正方体</p>
                                <p class="small">大约一个洗衣机的大小</p>
                            </div>
                        </div>
                        <div class="ppt-formula-box">
                            <p class="ppt-big-formula">1dm³ = 1000cm³</p>
                            <p class="ppt-big-formula">1m³ = 1000dm³</p>
                        </div>
                    </div>
                `,
                narration: "常用的体积单位有三个。立方厘米，棱长一厘米的正方体，大概像我们手指尖那么大。立方分米，棱长一分米的正方体，大概像粉笔盒那么大。立方米，棱长一米的正方体，大概像一台洗衣机那么大。记住它们之间的换算：一立方分米等于一千立方厘米，一立方米等于一千立方分米。"
            },
            {
                id: 3,
                title: "容积与体积的区别",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-compare-table">
                            <div class="compare-item">
                                <h5>📖 体积</h5>
                                <p>物体所占空间的大小</p>
                                <p>从<strong>外部</strong>测量</p>
                                <p>单位：cm³ dm³ m³</p>
                            </div>
                            <div class="compare-vs">VS</div>
                            <div class="compare-item">
                                <h5>💧 容积</h5>
                                <p>容器所能容纳物体的体积</p>
                                <p>从<strong>内部</strong>测量</p>
                                <p>单位：L mL 也可以用cm³ dm³</p>
                            </div>
                        </div>
                        <div class="ppt-formula-box">
                            <p class="math-formula">1L = 1dm³</p>
                            <p class="math-formula">1mL = 1cm³</p>
                            <p class="math-formula">1L = 1000mL</p>
                        </div>
                    </div>
                `,
                narration: "体积和容积有什么区别呢？体积是物体本身占空间的大小，我们要从外面量。容积是容器能装多少东西，要从里面量。它们的单位也有区别，体积用立方单位，容积常用升和毫升。但两者也有联系：一升等于一立方分米，一毫升等于一立方厘米。"
            },
            {
                id: 4,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题</h4>
                            <p class="ppt-question">一个水箱从里面量长5分米、宽4分米、深3分米，容积是多少升？</p>
                            <div class="ppt-step"><span>① 求容积</span><p>5×4×3 = 60立方分米</p></div>
                            <div class="ppt-step"><span>② 换算</span><p>1dm³ = 1L</p></div>
                            <div class="ppt-step highlight"><span>答案</span><p>60升 ✅</p></div>
                        </div>
                    </div>
                `,
                narration: "来看这道例题。一个水箱从里面量长五分米、宽四分米、深三分米，它的容积是多少升？注意题目说从里面量，这是容积的计算。第一步，五十乘四乘三等于六十，单位是立方分米。第二步，因为一立方分米等于一升，所以容积是六十升。同学们以后看到从里面量的数据就是求容积。"
            },
            {
                id: 5,
                title: "课堂小结",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-notes">
                            <div class="note-item"><span class="note-icon">📝</span><p>体积：物体占空间大小（外面量）</p></div>
                            <div class="note-item"><span class="note-icon">📝</span><p>容积：容器能装多少（里面量）</p></div>
                            <div class="note-item"><span class="note-icon">📝</span><p>1dm³=1000cm³ &nbsp; 1m³=1000dm³</p></div>
                            <div class="note-item"><span class="note-icon">📝</span><p>1L=1dm³ &nbsp; 1mL=1cm³</p></div>
                        </div>
                    </div>
                `,
                narration: "来总结一下今天的内容。体积是物体所占空间的大小，从外面量。容积是容器能装多少东西，从里面量。进率要记牢：相邻的体积单位之间进率是一千，一升等于一立方分米，一毫升等于一立方厘米。同学们课后可以观察家里的容器，看看包装上标的是多少毫升或多少升，加深对这些单位的认识。"
            }
        ]
    },
    "1-4": {
        title: "长方体和正方体的体积计算",
        slides: [
            {
                id: 1,
                title: "猜一猜怎么算体积",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>一个长方体有多少个<strong>小正方体</strong>？</p>
                        </div>
                        <div class="ppt-image-desc">
                            <p>长4个、宽3个、高2个小正方体</p>
                            <p class="math-formula">总数 = 4 × 3 × 2 = <strong>24个</strong></p>
                        </div>
                        <div class="ppt-tip">
                            <p>体积就用"小正方体个数"来算！</p>
                        </div>
                    </div>
                `,
                narration: "同学们，我们先来做个想象。如果一个长方体由许多个棱长一厘米的小正方体拼成，它的体积怎么算呢？比如这个长方体，长可以摆四个小正方体，宽可以摆三个，高可以摆两层。那么总数就是长乘宽乘高，四乘三乘二等于二十四个小正方体，所以体积是二十四立方厘米。这就是体积计算的原理。"
            },
            {
                id: 2,
                title: "体积公式",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>📐 体积公式</h4>
                            <p class="ppt-big-formula">V = 长 × 宽 × 高</p>
                            <p class="ppt-big-formula">V = abh</p>
                        </div>
                        <div class="ppt-divider">✦ 正方体特殊 ✦</div>
                        <div class="ppt-formula-box big important">
                            <p class="ppt-big-formula">V = a³</p>
                            <p>a³ = a × a × a（棱长×棱长×棱长）</p>
                        </div>
                        <div class="ppt-formula-box" style="margin-top:10px;">
                            <p class="math-formula">统一公式：V = Sh （底面积×高）</p>
                        </div>
                    </div>
                `,
                narration: "所以我们得到长方体的体积公式：长乘宽乘高，用字母表示就是V等于abh。注意这三个量依次对应长宽高。正方体因为长宽高都相等，所以体积等于a的三次方，也就是棱长乘棱长乘棱长。还有一个统一的公式，V等于Sh，就是底面积乘高。这三个公式大家都要掌握。"
            },
            {
                id: 3,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="example-box-group">
                            <div class="ppt-example-box">
                                <h5>📝 例题1</h5>
                                <p>长方体沙坑，长5米、宽3米、深0.5米，需要多少沙子？</p>
                                <div class="ppt-step"><span>解</span><p>V = 5×3×0.5 = 7.5m³</p></div>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>📝 例题2</h5>
                                <p>正方体铁块棱长6cm，体积是多少？</p>
                                <div class="ppt-step"><span>解</span><p>V = 6³ = 6×6×6 = 216cm³</p></div>
                            </div>
                        </div>
                    </div>
                `,
                narration: "看两道例题。第一个：长方体沙坑长五米、宽三米、深零点五米，需要多少沙子？直接代入公式，五乘三乘零点五等于七点五立方米。第二个：一个正方体铁块的棱长是六厘米，它的体积是多少？用V等于a的三次方，六的三次方就是六乘六乘六等于二百一十六立方厘米。注意a的三次方是三个a相乘，不是三a。"
            },
            {
                id: 4,
                title: "易错提醒",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-notes">
                            <div class="note-item warning">
                                <span class="note-icon">⚠️</span>
                                <p><strong>a³ ≠ 3a！</strong> a³ = a×a×a，3a = a+a+a</p>
                            </div>
                            <div class="note-item warning">
                                <span class="note-icon">⚠️</span>
                                <p>求容积用"从里面量"的数据</p>
                            </div>
                            <div class="note-item warning">
                                <span class="note-icon">⚠️</span>
                                <p>先统一单位再计算</p>
                            </div>
                            <div class="note-item success">
                                <span class="note-icon">💡</span>
                                <p>V=Sh通用于长方体和正方体</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "同学们注意三个易错点。第一，a的三次方是a乘a乘a，不是三a。三a是三个a相加，完全是两码事。第二，求容积记得用从里面量的数据。第三，计算前要检查单位是否统一。最后给大家一个有用的提示：V等于Sh这个公式既适用于长方体也适用于正方体，是通用公式，做题时灵活运用。"
            }
        ]
    },

    // ====== 第二单元：分数乘法 ======
    "2-1": {
        title: "分数乘整数",
        slides: [
            {
                id: 1,
                title: "生活中的分数乘法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>一块蛋糕的 <strong>2/7</strong></p>
                            <p>4个人每人吃一块 → 一共多少？</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>2/7 + 2/7 + 2/7 + 2/7 = 2/7 × 4</p>
                        </div>
                    </div>
                `,
                narration: "同学们好！今天学习分数乘整数。先想一个生活场景：一块蛋糕每人吃七分之二块，四个人一共吃了多少？四个七分之二相加等于七分之八。但四个相同的分数相加，用乘法更方便，所以是七分之二乘以四。这就是分数乘整数的意义——求几个相同分数的和。"
            },
            {
                id: 2,
                title: "计算方法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>📖 计算法则</h4>
                            <p class="ppt-big-formula">分子 × 整数</p>
                            <p class="ppt-big-formula">────────</p>
                            <p class="ppt-big-formula">&nbsp;&nbsp;&nbsp;分母不变&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <div class="ppt-tip important">
                            <p>💡 <strong>先约分再计算</strong> 更简便！</p>
                        </div>
                    </div>
                `,
                narration: "分数乘整数的计算法则是：用分子乘整数的积作为新的分子，分母不变。但有一个小技巧非常重要：能约分的要先约分再计算。比如四分之三乘以八，如果把三乘八得二十四，再除以四是六。但如果先约分，八和四约分后变成二，三乘二直接等于六，快多了。先约分可以让数字变小，不容易算错。"
            },
            {
                id: 3,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题：3/4 × 8</h4>
                            <div class="ppt-step"><span>方法一</span><p>3/4 × 8 = 24/4 = 6</p></div>
                            <div class="ppt-step"><span>方法二⭐</span><p>先约分：8和4约掉得2</p></div>
                            <div class="ppt-step highlight"><span></span><p>3 × 2 = 6 ✅</p></div>
                        </div>
                        <div class="ppt-tip">
                            <p>整数可以看作分母是1的分数 <strong>8 = 8/1</strong></p>
                        </div>
                    </div>
                `,
                narration: "来看这道例题，四分之三乘以八。方法一，分子三乘八得二十四，分母不变还是四，二十四除以四等于六。方法二，先约分，八和四的最大公因数是四，约分后分母变一，分子变二，三乘二直接等于六。两种方法答案一样，但方法二更简便。记住，整数可以看作分母是一的分数。结果要化成最简分数或整数。"
            }
        ]
    },
    "2-2": {
        title: "分数乘分数",
        slides: [
            {
                id: 1,
                title: "分数乘分数怎么理解？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>1/2 × 1/3 表示什么？</p>
                        </div>
                        <div class="ppt-image-desc">
                            <p>把一个圆形平均分成2份</p>
                            <p>取其中一份的 <strong>1/3</strong></p>
                            <p>= 整个圆形的 <strong>1/6</strong></p>
                        </div>
                    </div>
                `,
                narration: "分数乘分数是什么意思呢？二分之一乘以三分之一，表示求二分之一的三分之一是多少。想象一个圆，先把它平均分成两半，取其中的一半，然后再把这半圆的面积平均分成三份取一份，这一份是整个圆的六分之一。所以二分之一的二分之一就是六分之一。"
            },
            {
                id: 2,
                title: "计算方法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>📖 核心公式</h4>
                            <p class="ppt-big-formula">a/b × c/d = (a×c)/(b×d)</p>
                            <p class="sub-text" style="text-align:center;">分子乘分子，分母乘分母</p>
                        </div>
                        <div class="ppt-tip">
                            <p>💡 可以<strong>交叉约分</strong>再计算</p>
                        </div>
                    </div>
                `,
                narration: "分数乘分数的计算方法：分子相乘的积作分子，分母相乘的积作分母。记住口诀：分子乘分子，分母乘分母。同样可以先约分再计算，而且约分可以跨分数进行，比如第一个分数的分子可以和第二个分数的分母约分，这叫交叉约分。"
            },
            {
                id: 3,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题：2/3 × 3/4 = ?</h4>
                            <div class="ppt-step"><span>方法一</span><p>(2×3)/(3×4) = 6/12 = 1/2</p></div>
                            <div class="ppt-step"><span>方法二⭐</span><p>3和3约掉 → 2/4</p></div>
                            <div class="ppt-step highlight"><span></span><p>2/4 = 1/2 ✅</p></div>
                        </div>
                    </div>
                `,
                narration: "例题：三分之二乘以四分之三。方法一，分子乘分子，二乘三得六；分母乘分母，三乘四得十二。六分之十二约分后是二分之一。方法二，先交叉约分，前一个分母的三和后一个分子的三约掉，剩下二分之二，就是二分之一。两种方法结果一样，但先约分可以避免大数字运算。"
            },
            {
                id: 4,
                title: "积的变化规律",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-rules">
                            <div class="rule-card success">
                                <h5>乘 > 1 的数</h5>
                                <p>积 > 原来的数（变大）</p>
                                <p>例：1/2 × 3 = 3/2 > 1/2</p>
                            </div>
                            <div class="rule-card warning">
                                <h5>乘 < 1 的数</h5>
                                <p>积 < 原来的数（变小）</p>
                                <p>例：3 × 1/2 = 3/2 < 3</p>
                            </div>
                            <div class="rule-card info">
                                <h5>乘 = 1 的数</h5>
                                <p>积 = 原来的数</p>
                                <p>例：2/3 × 1 = 2/3</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "最后学习积的变化规律。一个数乘大于一的数，积比这个数大。一个数乘小于一的数，积比这个数小。一个数乘等于一的数，积等于这个数。利用这个规律可以快速检验答案是否合理。比如真分数乘真分数，积一定比这两个分数都小。"
            }
        ]
    },
    "2-3": {
        title: "求一个数的几分之几是多少",
        slides: [
            {
                id: 1,
                title: "核心理解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>求一个数的几分之几</p>
                            <p class="huge">用乘法！</p>
                        </div>
                        <div class="ppt-key-point">
                            <p class="math-formula">单位"1"的量 × 分率 = 所求量</p>
                        </div>
                    </div>
                `,
                narration: "同学们，求一个数的几分之几是多少，核心就是用乘法计算。比如苹果有二十个，梨是苹果的四分之三，求梨有多少个？就是用苹果数二十乘以四分之三。关键是找准单位一是谁，要求的量是单位一的几分之几。"
            },
            {
                id: 2,
                title: "解题三部曲",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-steps-flow">
                            <div class="flow-step">
                                <div class="flow-num">1</div>
                                <h5>找单位"1"</h5>
                                <p>通常是"的"字前面</p>
                            </div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-step">
                                <div class="flow-num">2</div>
                                <h5>确定分率</h5>
                                <p>是单位"1"的几分之几</p>
                            </div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-step">
                                <div class="flow-num">3</div>
                                <h5>列式</h5>
                                <p>单位"1"×分率</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "解这类题分三步。第一步，找准单位一。通常情况下单位一在分的字前面，比如苹果的四分之三，苹果就是单位一。第二步，确定要求的量是单位一的几分之几。第三步，用乘法列式计算。"
            },
            {
                id: 3,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box large">
                            <h4>📝 例题</h4>
                            <p class="ppt-question">果园有苹果树120棵，梨树是苹果树的3/4，梨树有多少棵？</p>
                            <div class="ppt-step"><span>① 单位"1"</span><p>苹果树 120棵</p></div>
                            <div class="ppt-step"><span>② 分率</span><p>梨树 = 苹果树的 3/4</p></div>
                            <div class="ppt-step"><span>③ 列式</span><p>120 × 3/4 = 90（棵）</p></div>
                            <div class="ppt-step highlight"><span>答案</span><p>梨树有90棵 ✅</p></div>
                        </div>
                    </div>
                `,
                narration: "例题：果园有苹果树一百二十棵，梨树的棵数是苹果树的四分之三，梨树有多少棵？第一步，单位一是苹果树，也就是一百二十棵。第二步，梨树是苹果树的四分之三。第三步，列式计算，一百二十乘四分之三。一百二十和四约分后是三十，三十乘三等于九十。所以梨树有九十棵。同学们，做这类题的关键就是找到谁是单位一。"
            }
        ]
    },
    "2-4": {
        title: "倒数的认识",
        slides: [
            {
                id: 1,
                title: "什么是倒数？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p class="huge">2/3 × 3/2 = 1</p>
                        </div>
                        <div class="ppt-key-point important">
                            <p><strong>乘积是1</strong>的两个数互为倒数</p>
                        </div>
                        <div class="ppt-tip">
                            <p>就像猫和老鼠… 不对，就像3和1/3</p>
                        </div>
                    </div>
                `,
                narration: "同学们，什么是倒数？看这个算式，三分之二乘以二分之三等于一。两个数相乘的积是一，它们就互为倒数。三分之二和二分之三就是一对倒数。再比如三乘以三分之一也等于一，那么三和三分之一也是互为倒数。记住：乘积是一的两个数互为倒数。"
            },
            {
                id: 2,
                title: "求倒数的方法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-methods-grid">
                            <div class="method-card">
                                <h5>🔢 分数</h5>
                                <p>交换分子分母</p>
                                <p class="example">3/5 → 5/3</p>
                            </div>
                            <div class="method-card">
                                <h5>🔢 整数</h5>
                                <p>看作分母是1的分数</p>
                                <p class="example">7 → 7/1 → 1/7</p>
                            </div>
                            <div class="method-card">
                                <h5>🔢 带分数</h5>
                                <p>先化假分数</p>
                                <p class="example">1½ → 3/2 → 2/3</p>
                            </div>
                            <div class="method-card special">
                                <h5>⚡ 特殊情况</h5>
                                <p>1的倒数是1</p>
                                <p>0没有倒数</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "怎么求倒数呢？分四种情况。如果是分数，直接把分子和分母交换位置。比如五分之三的倒数是三分之五。如果是整数，先看作分母是一的分数，再交换。七的倒数是七分之一。如果是带分数，比如一又二分之一，先化成假分数二分之三，再交换成三分之二。特别注意，一的倒数还是一，零没有倒数。"
            }
        ]
    },
    "2-5": {
        title: "分数连乘和简便运算",
        slides: [
            {
                id: 1,
                title: "什么是分数连乘？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>多个分数连续相乘</p>
                            <p>可以<strong>一次约分、一次计算</strong></p>
                        </div>
                        <div class="ppt-formula-box">
                            <p class="math-formula">a/b × c/d × e/f = (a×c×e)/(b×d×f)</p>
                        </div>
                    </div>
                `,
                narration: "分数连乘就是三个或三个以上的分数连续相乘。比如三分之二乘以十分之九再乘以六分之五。连乘时我们可以把所有分子乘在一起，所有分母乘在一起，一次性约分，非常高效。记住：分子乘分子，分母乘分母，一次搞定。"
            },
            {
                id: 2,
                title: "运算律的运用",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-rules">
                            <div class="rule-card">
                                <h5>乘法交换律</h5>
                                <p>a×b = b×a</p>
                                <p>换位置不改变结果</p>
                            </div>
                            <div class="rule-card">
                                <h5>乘法结合律</h5>
                                <p>(a×b)×c = a×(b×c)</p>
                                <p>先算哪两个都行</p>
                            </div>
                            <div class="rule-card important">
                                <h5>⭐ 乘法分配律</h5>
                                <p>(a+b)×c = a×c+b×c</p>
                                <p>最常用！一定要掌握！</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "整数乘法的运算律在分数中同样适用。交换律可以调换分数位置。结合律可以先把容易约分的两个先乘。而分配律是最常用的简便方法，比如一加一的和乘以二十四，可以用一乘以二十四加一乘以二十四，避免先通分。能灵活运用分配律会让计算快很多。"
            },
            {
                id: 3,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="example-box-group">
                            <div class="ppt-example-box">
                                <h5>📝 连乘</h5>
                                <p>2/3 × 9/10 × 5/6</p>
                                <div class="ppt-step"><span>解</span><p>= (2×9×5)/(3×10×6) = 1/2</p></div>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>📝 分配律</h5>
                                <p>(1/2+1/3)×12</p>
                                <div class="ppt-step"><span>解</span><p>= 1/2×12 + 1/3×12 = 6+4 = 10</p></div>
                            </div>
                        </div>
                    </div>
                `,
                narration: "两道例题。第一道连乘：三分之二乘十分之九乘六分之五。分子乘分子是二乘九乘五等于九十，分母乘分母是三乘十乘六等于一百八十。约分后是二分之一。第二道用分配律：二分之一加三分之一的和乘十二。如果用分配律，二分之一乘十二是六，三分之一乘十二是四，相加得十，不用通分，非常简便。同学们，简便运算要多练习才能熟练掌握。"
            }
        ]
    },

    // ====== 第三单元：分数除法 ======
    "3-1": {
        title: "分数除以整数",
        slides: [
            {
                id: 1,
                title: "分数除法怎么算？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>把 4/5 平均分成2份</p>
                            <p>每份是多少？</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>4/5 ÷ 2 = (4÷2)/5 = 2/5</p>
                        </div>
                    </div>
                `,
                narration: "同学们，想象一下，我们有五分之四块蛋糕，要平均分给两个人，每人得多少？这就是分数除以整数。我们可以用分子除以整数，得到五分之二。但更通用的方法是乘以整数的倒数。"
            },
            {
                id: 2,
                title: "核心法则",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>⭐ 核心法则</h4>
                            <p class="ppt-big-formula">除以整数 = 乘以它的倒数</p>
                            <p class="math-formula">a/b ÷ c = a/b × 1/c</p>
                        </div>
                        <div class="ppt-tip warning">
                            <p>⚠️ 除数不能为0！</p>
                        </div>
                    </div>
                `,
                narration: "分数除以整数的核心法则：除以一个整数等于乘以这个整数的倒数。比如五分之四除以二，就等于五分之四乘以二分之一。为什么这样算更通用呢？因为当分子不能被整数整除时，比如五分之四除以三，分子四除以三除不尽，但五分之四乘三分之一等于十五分之四，反而更方便。所以记住这个通法。"
            },
            {
                id: 3,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题</h4>
                            <p>6/7 ÷ 2 = ?</p>
                            <div class="ppt-step"><span>① 变号</span><p>÷2 → × 1/2</p></div>
                            <div class="ppt-step"><span>② 计算</span><p>6/7 × 1/2 = 6/14</p></div>
                            <div class="ppt-step highlight"><span>③ 约分</span><p>6/14 = 3/7 ✅</p></div>
                        </div>
                    </div>
                `,
                narration: "例题：七分之六除以二。第一步，把除法变成乘法，除以二变成乘以二分之一。第二步，七分之六乘二分之一等于十四分之六。第三步，约分，六和十四的最大公因数是二，约分后等于七分之三。答案是七分之三。"
            }
        ]
    },
    "3-2": {
        title: "一个数除以分数",
        slides: [
            {
                id: 1,
                title: "统一法则",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>⭐ 统一除法法则</h4>
                            <p class="ppt-big-formula">甲 ÷ 乙 = 甲 × 乙的倒数</p>
                            <p class="sub-text">不管乙是整数、分数都适用！</p>
                        </div>
                        <div class="ppt-example">
                            <p class="math-formula">6 ÷ 2/3 = 6 × 3/2 = 9</p>
                        </div>
                    </div>
                `,
                narration: "不管是一个数除以整数，还是一个数除以分数，使用同一个法则：除以一个数，等于乘这个数的倒数。比如六除以三分之二，就等于六乘二分之三。二分之三就是三分之二的倒数。注意倒过来的是除数，被除数保持不变。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="example-box-group">
                            <div class="ppt-example-box">
                                <h5>📝 例题1</h5>
                                <p>6 ÷ 2/3</p>
                                <div class="ppt-step"><span>解</span><p>= 6 × 3/2 = 18/2 = <strong>9</strong></p></div>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>📝 例题2</h5>
                                <p>3/5 ÷ 2/3</p>
                                <div class="ppt-step"><span>解</span><p>= 3/5 × 3/2 = <strong>9/10</strong></p></div>
                            </div>
                        </div>
                    </div>
                `,
                narration: "看两道例题。第一个，六除以三分之二，等于六乘二分之三。六乘三等于十八，十八除以二等于九。第二个，五分之三除以三分之二，等于五分之三乘二分之三。分子乘分子是三乘三等于九，分母乘分母是五乘二等于十，结果是十分之九。注意第二个例子，我们要求的是除数的倒数，只取除数三分之二的倒数变成二分之三。"
            }
        ]
    },
    "3-3": {
        title: "分数除法应用题",
        slides: [
            {
                id: 1,
                title: "已知部分求整体",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>已知一个数的几分之几是多少</p>
                            <p>求这个数 → <strong>用除法</strong></p>
                        </div>
                        <div class="ppt-formula-box">
                            <p class="ppt-big-formula">已知量 ÷ 对应分率 = 单位"1"</p>
                        </div>
                    </div>
                `,
                narration: "刚才我们学的是已知整体求部分用乘法。现在反过来，已知一个数的几分之几是多少，求这个数，用除法。比如小明看了全书的五分之二，正好是四十页，书有多少页？已知量四十页除以它对应的分率五分之二，就得到全书页数。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box large">
                            <h4>📝 例题</h4>
                            <p class="ppt-question">小明看一本书，看了全书的2/5，正好是40页，这本书有多少页？</p>
                            <div class="ppt-step"><span>① 定"1"</span><p>单位"1" = 全书页数</p></div>
                            <div class="ppt-step"><span>② 对应</span><p>40页对应全书的 2/5</p></div>
                            <div class="ppt-step"><span>③ 列式</span><p>40 ÷ 2/5 = 40 × 5/2 = <strong>100（页）</strong></p></div>
                        </div>
                    </div>
                `,
                narration: "例题：小明看一本书，看了全书的五分之二，正好是四十页，这本书有多少页？第一步，单位一是全书的页数。第二步，四十页正好对应全书的五分之二。第三步，用已知量四十除以对应分率五分之二。四十除以五分之二等于四十乘二分之五，等于一百页。所以全书有一百页。验算一下：一百乘五分之二正好等于四十，正确。"
            }
        ]
    },
    "3-4": {
        title: "分数混合运算",
        slides: [
            {
                id: 1,
                title: "运算顺序",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-steps-flow vertical">
                            <div class="flow-step">
                                <div class="flow-num">1</div>
                                <p><strong>有括号</strong> → 先算括号里</p>
                            </div>
                            <div class="flow-step">
                                <div class="flow-num">2</div>
                                <p><strong>先乘除，后加减</strong></p>
                            </div>
                            <div class="flow-step">
                                <div class="flow-num">3</div>
                                <p><strong>同级</strong> → 从左往右</p>
                            </div>
                        </div>
                        <div class="ppt-tip warning">
                            <p>💡 遇到除法先转化成乘法</p>
                        </div>
                    </div>
                `,
                narration: "分数混合运算的顺序和整数一样。有括号先算括号里面的；没有括号先算乘除后算加减；同一级运算从左到右。特别提醒：遇到除法时，先把除法全部转化成乘法，也就是除以一个数等于乘它的倒数，转化后再统一进行约分和计算，这样最不容易出错。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题</h4>
                            <p>5/6 - 1/3 ÷ 2/3 = ?</p>
                            <div class="ppt-step"><span>① 先除法</span><p>1/3 ÷ 2/3 = 1/3 × 3/2 = 1/2</p></div>
                            <div class="ppt-step"><span>② 再减法</span><p>5/6 - 1/2 = 5/6 - 3/6 = <strong>1/3</strong></p></div>
                        </div>
                    </div>
                `,
                narration: "这道题有减法和除法。先算除法还是减法？应该先算除法。三分之一除以三分之二等于三分之一乘二分之三，等于二分之一。然后算减法，六分之五减二分之一，把二分之一通分成六分之三，六分之五减六分之三等于六分之二，约分后是三分之一。"
            }
        ]
    },
    "3-5": {
        title: "比的认识",
        slides: [
            {
                id: 1,
                title: "什么是比？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>1杯奶昔 = 2份牛奶 + 3份水果</p>
                            <p>牛奶:水果 = <strong>2:3</strong></p>
                        </div>
                        <div class="ppt-key-point">
                            <p>两个数相除又叫做两个数的<strong>比</strong></p>
                        </div>
                    </div>
                `,
                narration: "同学们，做一杯奶昔需要两份牛奶和三份水果，我们就说牛奶和水果的比是二比三。两个数相除又叫做两个数的比。比在生活中很常见，比如地图的比例、菜谱的配比等等。今天我们学习比。"
            },
            {
                id: 2,
                title: "比的各部分名称",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big">
                            <p class="ppt-big-formula">3 &nbsp;:&nbsp; 5 &nbsp;=&nbsp; 3÷5 &nbsp;=&nbsp; 3/5 = 0.6</p>
                            <p>&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓</p>
                            <p>前项 &nbsp;&nbsp; 比号 &nbsp;&nbsp; 后项 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 比值</p>
                        </div>
                        <div class="ppt-compare-table">
                            <div>比 = 除法（前项=被除数）</div>
                            <div>比 = 分数（前项=分子）</div>
                        </div>
                    </div>
                `,
                narration: "在比里，各部分的名称要记清楚。三比五，三叫做前项，冒号叫比号，五叫做后项。前项除以后项的结果叫做比值。比和除法、分数都有联系。比的前项相当于除法里的被除数、分数里的分子；比号相当于除号和分数线。理解了它们之间的关系，对后面的学习很有帮助。"
            }
        ]
    },

    // ====== 第四单元：解决问题的策略 ======
    "4-1": {
        title: "用"假设"策略解决问题",
        slides: [
            {
                id: 1,
                title: "鸡兔同笼问题",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>🐔 鸡和 🐰 兔 在同一个笼子里</p>
                            <p>共8个头，22条腿</p>
                            <p>鸡和兔各有几只？</p>
                        </div>
                    </div>
                `,
                narration: "同学们，著名的鸡兔同笼问题来了！笼子里有鸡和兔共八只，总共有二十二条腿。鸡有两条腿，兔有四条腿。怎么算呢？我们有一种很巧妙的方法——假设法。"
            },
            {
                id: 2,
                title: "假设法解题",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-steps-flow vertical">
                            <div class="flow-step">
                                <div class="flow-num">①</div>
                                <p><strong>假设</strong>全是鸡：8×2=16条腿</p>
                            </div>
                            <div class="flow-step">
                                <div class="flow-num">②</div>
                                <p><strong>比较</strong>：22-16=6条腿（少算的）</p>
                            </div>
                            <div class="flow-step">
                                <div class="flow-num">③</div>
                                <p><strong>替换</strong>：每换一只兔多2条腿</p>
                            </div>
                            <div class="flow-step highlight">
                                <div class="flow-num">④</div>
                                <p><strong>结果</strong>：兔=6÷2=3（只），鸡=8-3=5（只）✅</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "我们用假设法来解。第一步，假设笼子里全是鸡。那么八只鸡就有十六条腿。第二步，但实际有二十二条腿，少了六条腿。为什么会少呢？因为把兔子也当作鸡了，每只兔少算了两条腿。第三步，用少的六条腿除以每只兔子少算的两条腿，得到兔子有三只。第四步，鸡就是八减三等于五只。验算一下，五只鸡十条腿加三只兔十二条腿，正好二十二条腿。"
            }
        ]
    },
    "4-2": {
        title: "用"转化"策略解决问题",
        slides: [
            {
                id: 1,
                title: "什么是转化？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>把<strong>陌生</strong>的问题</p>
                            <p>变成<strong>熟悉</strong>的问题！</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>转化 = 化新为旧、化繁为简</p>
                        </div>
                    </div>
                `,
                narration: "转化策略是数学里最重要的思想之一。简单说，就是把我们没见过的新问题，想办法变成学过的旧问题来解决。比如一杯牛奶的复杂问题，经过分析转化，你会发现其实很简单。"
            },
            {
                id: 2,
                title: "经典例题",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box large">
                            <h4>📝 例题：牛奶和水</h4>
                            <p class="ppt-question">一杯牛奶，先喝半杯，加满水；又喝半杯，再加满水。最后全部喝掉。喝的水多还是牛奶多？</p>
                            <div class="ppt-step"><span>转化思想</span><p>牛奶从头到尾没变，就是 <strong>1杯</strong></p></div>
                            <div class="ppt-step"><span>转化</span><p>加的水 = 1/2 + 1/2 = <strong>1杯</strong></p></div>
                            <div class="ppt-step highlight"><span>结论</span><p>一样多！都喝了1杯 ✅</p></div>
                        </div>
                    </div>
                `,
                narration: "这道题乍一看很复杂，但用转化思想就简单了。问题问喝的水多还是牛奶多？转化一下思维：牛奶最初是一整杯，中间虽然加水了，但牛奶本身没变，最后全部喝掉，所以喝的牛奶正好是一杯。再转化一下：加了多少水呢？第一次加了半杯，第二次又加了半杯，总共加了一杯水，而这杯水最后也被全部喝掉了。所以水和牛奶一样多，都是一杯。"
            }
        ]
    },

    // ====== 第五单元：分数四则混合运算 ======
    "5-1": {
        title: "分数四则混合运算顺序",
        slides: [
            {
                id: 1,
                title: "运算顺序回顾",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-steps-flow vertical">
                            <div class="flow-step important">
                                <div class="flow-num">🥇</div>
                                <p><strong>有括号</strong> → 先算括号里</p>
                            </div>
                            <div class="flow-step">
                                <div class="flow-num">🥈</div>
                                <p><strong>先乘除，后加减</strong></p>
                            </div>
                            <div class="flow-step">
                                <div class="flow-num">🥉</div>
                                <p><strong>同级</strong> → 从左往右</p>
                            </div>
                        </div>
                        <div class="ppt-tip">
                            <p>💡 遇到除法 <strong>先转化成乘法</strong> 再计算</p>
                        </div>
                    </div>
                `,
                narration: "分数四则混合运算的顺序和整数完全一样。记住三点：括号最优先，乘除其次，加减最后。同级运算从左到右。特别提醒：遇到除法时，先把所有的除法变成乘法再计算，这样可以在计算过程中随时约分，避免大数字运算。"
            },
            {
                id: 2,
                title: "例题演示",
                content: `
                    <div class="ppt-slide-content">
                        <div class="example-box-group">
                            <div class="ppt-example-box">
                                <h5>📝 例题1</h5>
                                <p>3/4 + 1/2 × 2/3</p>
                                <div class="ppt-step"><span>先乘</span><p>1/2 × 2/3 = 1/3</p></div>
                                <div class="ppt-step"><span>再加</span><p>3/4 + 1/3 = 13/12 ✅</p></div>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>📝 例题2（有括号）</h5>
                                <p>(3/4 - 1/2) ÷ 1/4</p>
                                <div class="ppt-step"><span>括号</span><p>3/4 - 1/2 = 1/4</p></div>
                                <div class="ppt-step"><span>除法</span><p>1/4 ÷ 1/4 = 1 ✅</p></div>
                            </div>
                        </div>
                    </div>
                `,
                narration: "两道例题。第一道：四分之三加二分之一乘三分之二。先算乘法，二分之一乘三分之二等于三分之一。再加四分之三，通分后十二分之九加十二分之四等于十二分之十三。第二道有括号：四分之三减二分之一的差除以四分之一。先算括号里，四分之三减二分之一等于四分之一。再算除法，四分之一除以四分之一等于一。"
            }
        ]
    },
    "5-2": {
        title: "简便运算（运算律在分数中的应用）",
        slides: [
            {
                id: 1,
                title: "运算律复习",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-rules">
                            <div class="rule-card">
                                <h5>交换律</h5>
                                <p>a+b = b+a</p>
                                <p>a×b = b×a</p>
                            </div>
                            <div class="rule-card">
                                <h5>结合律</h5>
                                <p>(a+b)+c = a+(b+c)</p>
                                <p>(a×b)×c = a×(b×c)</p>
                            </div>
                            <div class="rule-card important">
                                <h5>⭐ 分配律</h5>
                                <p>(a+b)×c = a×c+b×c</p>
                                <p>最常用！</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "复习一下运算律。加法乘法都有交换律和结合律，我们可以调换位置、改变运算顺序。但最常用的是乘法分配律，它可以把括号展开，也可以提取公因数。在分数运算中灵活运用分配律，可以大幅简化计算。"
            },
            {
                id: 2,
                title: "简便运算例题",
                content: `
                    <div class="ppt-slide-content">
                        <div class="example-box-group">
                            <div class="ppt-example-box">
                                <h5>📝 例题1（提取公因数）</h5>
                                <p>3/5 × 7/8 + 3/5 × 1/8</p>
                                <div class="ppt-step"><span>解</span><p>= 3/5 × (7/8+1/8)</p></div>
                                <div class="ppt-step"><span></span><p>= 3/5 × 1 = <strong>3/5</strong></p></div>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>📝 例题2（分配律）</h5>
                                <p>(1/4+2/3)×24</p>
                                <div class="ppt-step"><span>解</span><p>= 1/4×24 + 2/3×24</p></div>
                                <div class="ppt-step"><span></span><p>= 6 + 16 = <strong>22</strong></p></div>
                            </div>
                        </div>
                    </div>
                `,
                narration: "两道简便运算题。第一道，五分之三乘八分之七加五分之三乘八分之一，有公因数五分之三。提取出来，括号里是八分之七加八分之一等于一，结果是五分之三。第二道，四分之一加三分之二的和乘二十四。用分配律展开，四分之一乘二十四得六，三分之二乘二十四得十六，相加得二十二。如果先通分再加再乘，麻烦很多。所以简便运算一定要灵活运用。"
            }
        ]
    },
    "5-3": {
        title: "复杂应用题综合练习",
        slides: [
            {
                id: 1,
                title: "分段思考",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>一批货物，第一天运走1/4</p>
                            <p>第二天运走剩下的2/3</p>
                            <p>还剩120吨，原来多少吨？</p>
                        </div>
                    </div>
                `,
                narration: "这道题看起来复杂，但拆解一步一步来就能解决。一批货物，第一天运走了四分之一，第二天运走了剩下的三分之二，最后还剩一百二十吨。求原来有多少吨。关键是要搞清楚每一个分率对应的是哪个单位一。"
            },
            {
                id: 2,
                title: "分步解析",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box large">
                            <div class="ppt-step"><span>① 第一天剩</span><p>1 - 1/4 = 3/4</p></div>
                            <div class="ppt-step"><span>② 第二天运</span><p>3/4 × 2/3 = 1/2</p></div>
                            <div class="ppt-step"><span>③ 两天共运</span><p>1/4 + 1/2 = 3/4</p></div>
                            <div class="ppt-step"><span>④ 还剩</span><p>1 - 3/4 = 1/4</p></div>
                            <div class="ppt-step highlight"><span>⑤ 原来</span><p>120 ÷ 1/4 = <strong>480（吨）</strong></p></div>
                        </div>
                    </div>
                `,
                narration: "我们来分步解析。第一步，第一天运走四分之一，剩下四分之三。第二步，第二天运走剩下的三分之二，第三天运的量是四分之三乘三分之二等于二分之一。第三步，两天一共运了四分之一加二分之一等于四分之三。第四步，还剩下四分之一。第五步，剩下的一百二十吨对应四分之一，所以原来是一百二十除以四分之一等于四百八十吨。做复杂应用题，关键是耐心分步，每一步搞清楚了再往下走。"
            }
        ]
    },

    // ====== 第六单元：百分数 ======
    "6-1": {
        title: "百分数的意义和写法",
        slides: [
            {
                id: 1,
                title: "生活中处处有百分数",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>📊 衣服标签：含棉 <strong>65%</strong></p>
                            <p>📱 手机电量：<strong>80%</strong></p>
                            <p>🥛 牛奶：脂肪含量 <strong>3.2%</strong></p>
                        </div>
                        <div class="ppt-key-point">
                            <p>百分数 = <strong>百分之几</strong> = 分母是100的分数</p>
                        </div>
                    </div>
                `,
                narration: "同学们，生活中到处都有百分数。衣服标签上写着含棉百分之六十五，手机屏幕显示电量百分之八十，牛奶盒上标脂肪含量百分之三点二。这些带百分号的数就是百分数。百分数表示一个数是另一个数的百分之几，也叫百分率或百分比。"
            },
            {
                id: 2,
                title: "读写方法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-read-write">
                            <div class="rw-card">
                                <h5>✍️ 写法</h5>
                                <p>45% → 数字 + %</p>
                                <p>0.5% → 零点五 + %</p>
                                <p>120% → 一百二十 + %</p>
                            </div>
                            <div class="rw-card">
                                <h5>📢 读法</h5>
                                <p>45% → 百分之四十五</p>
                                <p>0.5% → 百分之零点五</p>
                                <p>100% → 百分之一百</p>
                            </div>
                        </div>
                        <div class="ppt-tip warning">
                            <p>⚠️ 百分数<strong>不能带单位</strong>（表示比率）</p>
                        </div>
                    </div>
                `,
                narration: "百分数的读写很简单。写的时候在数字后面加上百分号就行了。读的时候先读百分之，再读数字。比如百分之四十五、百分之零点五、百分之一百。注意百分数不能带单位，因为它表示的是比率关系。比如不能说百分之五十米，只能说百分之五十。"
            }
        ]
    },
    "6-2": {
        title: "百分数与小数、分数的互化",
        slides: [
            {
                id: 1,
                title: "互化方法",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-convert-grid">
                            <div class="convert-card">
                                <h5>百分数→小数</h5>
                                <p>去掉%，小数点左移2位</p>
                                <p class="example">45% = 0.45</p>
                            </div>
                            <div class="convert-card">
                                <h5>小数→百分数</h5>
                                <p>小数点右移2位，加%</p>
                                <p class="example">0.35 = 35%</p>
                            </div>
                            <div class="convert-card">
                                <h5>百分数→分数</h5>
                                <p>分母100，再约分</p>
                                <p class="example">60% = 60/100 = 3/5</p>
                            </div>
                            <div class="convert-card">
                                <h5>分数→百分数</h5>
                                <p>先变小数，再加%</p>
                                <p class="example">3/4 = 0.75 = 75%</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "四种互化方法要熟记。百分数化小数，去掉百分号，小数点向左移动两位。小数化百分数，小数点向右移动两位，加上百分号。百分数化分数，先写成分母是一百的分数再约分。分数化百分数，先化成小数再变成百分数。这些方法考试中会反复用到。"
            },
            {
                id: 2,
                title: "常见互化表",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-table-box">
                            <table>
                                <tr><th>分数</th><th>小数</th><th>百分数</th></tr>
                                <tr><td>1/2</td><td>0.5</td><td>50%</td></tr>
                                <tr><td>1/4</td><td>0.25</td><td>25%</td></tr>
                                <tr><td>3/4</td><td>0.75</td><td>75%</td></tr>
                                <tr><td>1/5</td><td>0.2</td><td>20%</td></tr>
                                <tr><td>1/8</td><td>0.125</td><td>12.5%</td></tr>
                            </table>
                        </div>
                    </div>
                `,
                narration: "这张常见互化表同学们最好背下来。二分之一等于零点五等于百分之五十，四分之一等于零点二五等于百分之二十五，四分之三等于零点七五等于百分之七十五，五分之一等于零点二等于百分之二十，八分之一等于零点一二五等于百分之十二点五。背熟了这些，做题速度会快很多。"
            }
        ]
    },
    "6-3": {
        title: "求百分率（出勤率、合格率、成活率等）",
        slides: [
            {
                id: 1,
                title: "百分率公式",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>⭐ 通用百分率公式</h4>
                            <p class="ppt-big-formula">百分率 = 部分量 ÷ 总量 × 100%</p>
                        </div>
                        <div class="ppt-examples">
                            <p>📊 出勤率 = 出勤人数 ÷ 总人数 × 100%</p>
                            <p>📊 合格率 = 合格数量 ÷ 总数量 × 100%</p>
                            <p>📊 发芽率 = 发芽种子数 ÷ 种子总数 × 100%</p>
                        </div>
                    </div>
                `,
                narration: "所有百分率的计算方法都有一个通用的公式：百分率等于部分量除以总量再乘百分之百。出勤率、及格率、发芽率、合格率、成活率等等，都是这个公式。记住这个公式，所有类似的题目就都会了。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题</h4>
                            <p class="ppt-question">某班50人，今天出勤48人，出勤率是多少？</p>
                            <div class="ppt-step"><span>公式</span><p>出勤率 = 出勤人数÷总人数×100%</p></div>
                            <div class="ppt-step"><span>代入</span><p>48 ÷ 50 × 100%</p></div>
                            <div class="ppt-step highlight"><span>结果</span><p>= 0.96 × 100% = <strong>96%</strong> ✅</p></div>
                        </div>
                    </div>
                `,
                narration: "例题：某班有五十人，今天出勤四十八人，出勤率是多少？套用公式，出勤率等于出勤人数除以总人数再乘以百分之百。四十八除以五十等于零点九六，乘以百分之百等于百分之九十六。注意，百分率没有单位，而且正常情况不会超过百分之百。比如出勤率最多就是百分之百。"
            }
        ]
    },
    "6-4": {
        title: "百分数应用题（折扣、税率、利率）",
        slides: [
            {
                id: 1,
                title: "打折问题",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>原价200元 → 八折 → 多少钱？</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>打几折 = 原价 × 百分之几十</p>
                            <p class="math-formula">现价 = 原价 × 折扣%</p>
                        </div>
                        <div class="ppt-tip">
                            <p>💡 八折 = 80% = 0.8</p>
                            <p>💡 七五折 = 75% = 0.75</p>
                        </div>
                    </div>
                `,
                narration: "打折是日常生活中最常遇到的数学问题之一。打八折就是按原价的百分之八十出售。比如一件衣服原价二百元，打八折就是二百乘零点八等于一百六十元。同学们要注意，几折就是百分之几十。七五折是百分之七十五，不是百分之七点五。"
            },
            {
                id: 2,
                title: "利率问题",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big">
                            <h4>💰 利息计算</h4>
                            <p class="ppt-big-formula">利息 = 本金 × 利率 × 存期</p>
                            <p class="math-formula">本息和 = 本金 + 利息</p>
                        </div>
                        <div class="ppt-example-box">
                            <h5>📝 例题</h5>
                            <p>5000元存两年，年利率2.25%，到期利息多少？</p>
                            <div class="ppt-step"><span>解</span><p>5000 × 2.25% × 2 = <strong>225（元）</strong></p></div>
                        </div>
                    </div>
                `,
                narration: "利率问题也不难。利息等于本金乘利率乘存期。注意存期和利率要对应，年利率就对应年数。比如小明把五千元存银行，年利率是百分之二点二五，存两年。利息等于五千乘零点零二二五再乘二等于二百二十五元。所以到期能拿到二百二十五元利息。同学们去银行时可以看看利率表，验证一下公式。"
            }
        ]
    },
    "6-5": {
        title: "稍复杂的百分数问题",
        slides: [
            {
                id: 1,
                title: "降价/涨价问题",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big">
                            <p class="math-formula">降价后价格 = 原价 × (1 - 降价%)</p>
                            <p class="math-formula">涨价后价格 = 原价 × (1 + 涨价%)</p>
                        </div>
                        <div class="ppt-tip">
                            <p>💡 关键：找准<strong>单位"1"</strong></p>
                        </div>
                    </div>
                `,
                narration: "稍复杂的百分数问题主要有两类。一是已知降价后价格求原价。比如一件商品降价百分之十五后卖三百四十元，原价是多少？降价后价格是原价的百分之八十五，所以原价等于三百四十除以百分之八十五等于四百元。二是求一个数比另一个数多百分之几。比如去年产两千台，今年产两千五百台，今年比去年增产了百分之二十五。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="example-box-group">
                            <div class="ppt-example-box">
                                <h5>📝 例题1：已知降价后求原价</h5>
                                <p>降价15%后售价340元，原价多少？</p>
                                <div class="ppt-step"><span>分析</span><p>现价是原价的(1-15%)=85%</p></div>
                                <div class="ppt-step"><span>列式</span><p>340 ÷ 0.85 = <strong>400元</strong></p></div>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>📝 例题2：求多百分之几</h5>
                                <p>去年2000台，今年2500台，增产%？</p>
                                <div class="ppt-step"><span>分析</span><p>(2500-2000)÷2000</p></div>
                                <div class="ppt-step"><span>结果</span><p>500÷2000×100% = <strong>25%</strong></p></div>
                            </div>
                        </div>
                    </div>
                `,
                narration: "这两道例题涵盖了两种主要题型。第一题：降价百分之十五后售价三百四十元。降价后的价格相当于原价的百分之八十五，所以用三百四十除以零点八五等于四百元。第二题：求增产百分之几。先算增产了多少台，五百台，再除以单位一去年的两千台，乘以百分之百，等于百分之二十五。做这类题，最关键的是找准单位一。"
            }
        ]
    },

    // ====== 第七单元：扇形统计图 ======
    "7-1": {
        title: "扇形统计图的认识",
        slides: [
            {
                id: 1,
                title: "三种统计图的对比",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-compare-three">
                            <div class="chart-card">
                                <h5>📊 条形统计图</h5>
                                <p>看<strong>数量多少</strong></p>
                            </div>
                            <div class="chart-card">
                                <h5>📈 折线统计图</h5>
                                <p>看<strong>变化趋势</strong></p>
                            </div>
                            <div class="chart-card active">
                                <h5>🥧 扇形统计图</h5>
                                <p>看<strong>占比关系</strong></p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "我们学过的统计图有三种。条形统计图便于看出数量的多少。折线统计图能反映数量的增减变化趋势。扇形统计图能看出各部分与整体的关系。今天重点学习扇形统计图。"
            },
            {
                id: 2,
                title: "扇形统计图的特点",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-pie-chart-desc">
                            <div class="pie-info">
                                <p>🥧 整个圆 = <strong>100%</strong>（总量）</p>
                                <p>🥧 每个扇形 = <strong>各部分的百分比</strong></p>
                                <p>🥧 扇形大小由<strong>百分比</strong>决定</p>
                                <p>🥧 圆心角 = 360° × 百分比</p>
                            </div>
                        </div>
                        <div class="ppt-tip warning">
                            <p>⚠️ 所有扇形百分比之和 = 100%</p>
                        </div>
                    </div>
                `,
                narration: "扇形统计图的特点：整个圆代表百分之百，也就是总量。每个扇形代表各部分所占的比例。扇形越大，占比越高。圆心角的度数可以用三百六十度乘百分比算出来。所有的百分比加起来必须等于百分之百。扇形统计图能直观地显示各部分和整体的关系。"
            }
        ]
    },
    "7-2": {
        title: "扇形统计图的绘制和解读",
        slides: [
            {
                id: 1,
                title: "如何绘制扇形统计图",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-steps-flow vertical">
                            <div class="flow-step"><div class="flow-num">1</div><p>计算各部分的<strong>百分比</strong></p></div>
                            <div class="flow-step"><div class="flow-num">2</div><p>计算各部分的<strong>圆心角</strong></p></div>
                            <div class="flow-step"><div class="flow-num">3</div><p>用量角器<strong>画扇形</strong></p></div>
                            <div class="flow-step"><div class="flow-num">4</div><p>标注<strong>名称和百分比</strong></p></div>
                        </div>
                    </div>
                `,
                narration: "绘制扇形统计图分四步。第一步，计算各部分占总量的百分比。第二步，用三百六十度乘百分比算出各扇形的圆心角。第三步，用量角器画出各个扇形。第四步，标上各部分的名称和百分比。"
            },
            {
                id: 2,
                title: "读图练习",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 读图练习</h4>
                            <p>小明家上月总支出5000元：</p>
                            <p>食品35%、教育25%、交通15%、其他25%</p>
                            <div class="ppt-step"><span>教育支出</span><p>5000×25% = 1250元</p></div>
                            <div class="ppt-step"><span>食品比交通多</span><p>1750-750 = 1000元</p></div>
                            <div class="ppt-step"><span>食品圆心角</span><p>360°×35% = 126°</p></div>
                        </div>
                    </div>
                `,
                narration: "来看一个读图练习。小明家上月总支出五千元，扇形统计图显示食品占百分之三十五，教育占百分之二十五。问题一：教育支出了多少钱？五千的百分之二十五是一千二百五十元。问题二：食品比交通多多少？食品是一千七百五十元，交通是七百五十元，多一千元。问题三：食品的圆心角是多少度？三百六十度乘零点三五等于一百二十六度。"
            }
        ]
    },

    // ====== 第八单元：圆柱和圆锥 ======
    "8-1": {
        title: "圆柱的认识",
        slides: [
            {
                id: 1,
                title: "生活中的圆柱",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>🥫 罐头盒、🕯️ 蜡烛</p>
                            <p>🪣 水桶、🥤 杯子</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>这些都是<strong>圆柱体</strong>！</p>
                        </div>
                    </div>
                `,
                narration: "同学们，生活中到处都有圆柱体。罐头盒、蜡烛、水桶、一次性杯子，都是圆柱形。圆柱体有什么特征呢？今天我们一起来认识圆柱。"
            },
            {
                id: 2,
                title: "圆柱的特征",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-diagram-grid">
                            <div class="grid-item important">
                                <h5>底面</h5>
                                <p>两个完全相同的圆形</p>
                            </div>
                            <div class="grid-item important">
                                <h5>侧面</h5>
                                <p>一个曲面</p>
                                <p>展开 → 长方形/正方形</p>
                            </div>
                            <div class="grid-item important">
                                <h5>高</h5>
                                <p>两个底面之间的距离</p>
                                <p>有<strong>无数条</strong>高</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "圆柱有三个主要特征。第一，两个底面是完全相同的圆形。第二，侧面是一个曲面，沿高剪开，展开后是一个长方形。长方形的长等于底面周长，宽等于圆柱的高。如果底面周长和高相等，展开后就是正方形。第三，两个底面之间的距离叫高，圆柱有无数条高。"
            }
        ]
    },
    "8-2": {
        title: "圆柱的表面积",
        slides: [
            {
                id: 1,
                title: "圆柱的表面积公式",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>📐 圆柱表面积</h4>
                            <p>侧面积 = 底面周长 × 高 = 2πrh</p>
                            <p>底面积 = πr²</p>
                            <p class="ppt-big-formula">S表 = 2πrh + 2πr²</p>
                            <p class="ppt-big-formula">S表 = 2πr(h+r)</p>
                        </div>
                    </div>
                `,
                narration: "圆柱的表面积包含侧面积加两个底面积。侧面积等于底面周长乘以高，就是二πr乘h。底面积是πr的平方。两个底面就是二倍的πr平方。表面积还有一个简便公式：二πr乘以括号里h加r。这两个公式同学们都要掌握。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题</h4>
                            <p>圆柱形茶叶桶，半径5cm，高12cm，需要多少铁皮？</p>
                            <div class="ppt-step"><span>侧面积</span><p>2×3.14×5×12 = 376.8cm²</p></div>
                            <div class="ppt-step"><span>底面积</span><p>3.14×5² = 78.5cm²</p></div>
                            <div class="ppt-step highlight"><span>表面积</span><p>376.8 + 78.5×2 = <strong>533.8cm²</strong></p></div>
                        </div>
                    </div>
                `,
                narration: "例题：圆柱形茶叶桶，底面半径五厘米，高十二厘米，需要多少铁皮？就是要算它的表面积。侧面积等于二乘三点一四乘五乘十二等于三百七十六点八平方厘米。一个底面积是三点一四乘二十五等于七十八点五。两个底面是一百五十七。表面积总计五百三十三点八平方厘米。注意实际问题中如果做无盖的容器，就只算一个底面。"
            }
        ]
    },
    "8-3": {
        title: "圆柱的体积",
        slides: [
            {
                id: 1,
                title: "体积公式推导",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>圆柱 → 拼成 → 近似长方体</p>
                            <p>底面积不变，高不变</p>
                        </div>
                        <div class="ppt-formula-box big important">
                            <p class="ppt-big-formula">V = Sh = πr²h</p>
                        </div>
                    </div>
                `,
                narration: "圆柱体积怎么来的呢？我们把圆柱沿底面直径切开，拼成一个近似的长方体。分的份数越多，拼成的越接近长方体。长方体的底面积等于圆柱的底面积，高等于圆柱的高。所以圆柱的体积等于底面积乘高，也就是πr的平方乘h。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="example-box-group">
                            <div class="ppt-example-box">
                                <h5>📝 例题1</h5>
                                <p>r=3cm, h=10cm, V=?</p>
                                <div class="ppt-step"><span>解</span><p>3.14×9×10 = <strong>282.6cm³</strong></p></div>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>📝 例题2（注意！给的是直径）</h5>
                                <p>d=4dm, h=5dm, V升？</p>
                                <div class="ppt-step"><span>半径</span><p>r=4÷2=2dm</p></div>
                                <div class="ppt-step"><span>体积</span><p>3.14×4×5 = 62.8dm³ = <strong>62.8L</strong></p></div>
                            </div>
                        </div>
                    </div>
                `,
                narration: "两道例题。第一题给了半径，直接代入公式，三点一四乘九乘十等于二百八十二点六立方厘米。第二题给了直径，特别小心！必须先除以二得到半径两分米，再计算。三点一四乘四乘五等于六十二点八立方分米，也就是六十二点八升。同学们，给直径一定不要忘了先除以二。"
            }
        ]
    },
    "8-4": {
        title: "圆锥的认识",
        slides: [
            {
                id: 1,
                title: "生活中的圆锥",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>🎄 圣诞树帽、🍦 蛋筒</p>
                            <p>🔺 金字塔、🎪 帐篷顶</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>这些都是<strong>圆锥体</strong>！</p>
                        </div>
                    </div>
                `,
                narration: "同学们，生活中圆锥体也不少。圣诞老人的帽子、冰淇淋蛋筒、金字塔，这些都是圆锥形。圆锥和圆柱有什么不同呢？我们来看看。"
            },
            {
                id: 2,
                title: "圆锥的特征",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-diagram-grid">
                            <div class="grid-item">
                                <h5>顶点</h5>
                                <p><strong>1个</strong>顶点</p>
                            </div>
                            <div class="grid-item">
                                <h5>底面</h5>
                                <p><strong>1个</strong>圆形底面</p>
                            </div>
                            <div class="grid-item">
                                <h5>侧面</h5>
                                <p>曲面，展开为<strong>扇形</strong></p>
                            </div>
                            <div class="grid-item">
                                <h5>高</h5>
                                <p>顶点→底面圆心</p>
                                <p><strong>只有1条</strong>高</p>
                            </div>
                        </div>
                        <div class="ppt-tip">
                            <p>💡 对比：圆柱有<strong>2个底面、无数条高</strong></p>
                        </div>
                    </div>
                `,
                narration: "圆锥的特征：一个顶点、一个圆形底面、一个曲面侧面、只有一条高。和圆柱对比一下：圆柱有两个底面，圆锥只有一个底面。圆柱有无数条高，圆锥只有一条高。圆锥的侧面展开后是一个扇形。这些都是圆锥和圆柱的重要区别。"
            }
        ]
    },
    "8-5": {
        title: "圆锥的体积",
        slides: [
            {
                id: 1,
                title: "等底等高的秘密",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p class="huge">圆锥 = 1/3 × 圆柱</p>
                            <p>等底等高时</p>
                        </div>
                        <div class="ppt-key-point important">
                            <p>做实验：圆锥装满水倒进圆柱</p>
                            <p><strong>3次</strong>才能倒满！</p>
                        </div>
                    </div>
                `,
                narration: "等底等高的圆柱和圆锥，它们体积之间有什么关系呢？我们来做个实验：把圆锥装满水，倒进等底等高的圆柱里，你猜几次能倒满？答案是三次！也就是说等底等高的圆锥体积是圆柱的三分之一。这是非常重要的结论。"
            },
            {
                id: 2,
                title: "圆锥体积公式与例题",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>📐 圆锥体积公式</h4>
                            <p class="ppt-big-formula">V = 1/3 πr²h</p>
                            <p class="sub-text">千万不能忘了 <strong>1/3</strong>！</p>
                        </div>
                        <div class="ppt-example-box">
                            <h5>📝 例题</h5>
                            <p>圆锥底面直径6cm，高10cm，体积？</p>
                            <div class="ppt-step"><span>半径</span><p>r=6÷2=3cm</p></div>
                            <div class="ppt-step"><span>体积</span><p>1/3 × 3.14 × 9 × 10</p></div>
                            <div class="ppt-step highlight"><span>答案</span><p><strong>94.2 cm³</strong> ✅</p></div>
                        </div>
                    </div>
                `,
                narration: "圆锥体积公式是V等于三分之一πr的平方乘h。注意：三分之一的系数千万不能漏掉！很多同学考试就是在这里丢分。来看例题：圆锥底面直径六厘米，高十厘米。首先直径六厘米除以二得半径三厘米。代入公式，三分之一乘三点一四乘九乘十等于九十四点二立方厘米。记住，圆锥体积永远是等底等高圆柱体积的三分之一。"
            }
        ]
    },

    // ====== 第九单元：比例 ======
    "9-1": {
        title: "比例的意义和基本性质",
        slides: [
            {
                id: 1,
                title: "什么是比例？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>6:3 = 2:1</p>
                            <p>因为 6:3=2 &nbsp; 2:1=2</p>
                            <p>比值相等 → 组成<strong>比例</strong></p>
                        </div>
                        <div class="ppt-key-point">
                            <p>表示两个比相等的式子叫<strong>比例</strong></p>
                        </div>
                    </div>
                `,
                narration: "同学们，六比三等于二比一。六比三的比值是二，二比一的比值也是二，这两个比的比值相等。表示两个比相等的式子叫做比例。注意比和比例的区别：比是两个量相除，比例是两个比相等。"
            },
            {
                id: 2,
                title: "比例的基本性质",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-formula-box big important">
                            <h4>⭐ 比例的基本性质</h4>
                            <p class="ppt-big-formula">a : b = c : d</p>
                            <p>内项积 = 外项积</p>
                            <p class="ppt-big-formula">b × c = a × d</p>
                        </div>
                        <div class="ppt-parts">
                            <p><strong>外项</strong>：a 和 d</p>
                            <p><strong>内项</strong>：b 和 c</p>
                        </div>
                    </div>
                `,
                narration: "比例中四个数有各自的名称。在一比二等于二比四中，一和四是外项，二和三是内项。比例有一个非常重要的性质：两个内项的积等于两个外项的积。比如一比二等于二比四，内项积二乘二等于四，外项积一乘四等于四，相等吧？这个性质是解比例的关键。"
            }
        ]
    },
    "9-2": {
        title: "解比例",
        slides: [
            {
                id: 1,
                title: "什么是解比例？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>已知比例中的三项</p>
                            <p>求另一项 → <strong>解比例</strong></p>
                        </div>
                        <div class="ppt-formula-box">
                            <p class="math-formula">内项积 = 外项积 → 变成方程</p>
                        </div>
                    </div>
                `,
                narration: "解比例就是已知比例中的三项，求未知的第四项。方法是利用比例的基本性质，内项积等于外项积，由此列出一个方程，然后解方程就行。"
            },
            {
                id: 2,
                title: "例题讲解",
                content: `
                    <div class="ppt-slide-content">
                        <div class="example-box-group">
                            <div class="ppt-example-box">
                                <h5>📝 例题1</h5>
                                <p>2:3 = x:12</p>
                                <div class="ppt-step"><span>方程</span><p>3x = 2×12</p></div>
                                <div class="ppt-step"><span>求解</span><p>x = 24÷3 = <strong>8</strong></p></div>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>📝 例题2</h5>
                                <p>1/2:1/3 = x:4</p>
                                <div class="ppt-step"><span>方程</span><p>1/3×x = 1/2×4</p></div>
                                <div class="ppt-step"><span>求解</span><p>x = 2×3 = <strong>6</strong></p></div>
                            </div>
                        </div>
                    </div>
                `,
                narration: "两道解比例例题。第一题，二比三等于x比十二。内项积等于外项积：三乘x等于二乘十二。三x等于二十四，x等于八。验算：二比三等于三分之二，八比十二也等于三分之二，正确。第二题，二分之一比三分之一等于x比四。三分之一乘x等于二分之一乘四，三分之x等于二，x等于六。"
            }
        ]
    },
    "9-3": {
        title: "正比例（y/x=k一定）",
        slides: [
            {
                id: 1,
                title: "什么是正比例？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>单价一定 → 总价随数量变化</p>
                            <p>总价 ÷ 数量 = <strong>单价（一定）</strong></p>
                        </div>
                        <div class="ppt-formula-box big">
                            <p class="ppt-big-formula">y/x = k（一定）</p>
                            <p>两个量的<strong>比值一定</strong></p>
                        </div>
                    </div>
                `,
                narration: "什么是正比例？我们看最生活化的例子：笔记本的单价一定，买的数量和总价之间的关系。买一本总价是单价，买两本总价是两倍的单价，总价除以数量始终等于固定的单价。两个相关的量，它们的比值一定，就成正比例。注意变化方向相同：数量增加，总价也增加。"
            },
            {
                id: 2,
                title: "正比例判断",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h5>📝 判断</h5>
                            <p>圆的周长和直径成正比例吗？</p>
                            <div class="ppt-step"><span>分析</span><p>C÷d = π（一定）</p></div>
                            <div class="ppt-step highlight"><span>结论</span><p>成正比例 ✅</p></div>
                        </div>
                        <div class="ppt-example-box" style="margin-top:10px;">
                            <h5>📝 判断</h5>
                            <p>正方形的边长和面积成正比例吗？</p>
                            <div class="ppt-step"><span>分析</span><p>S÷a = a（不一定）</p></div>
                            <div class="ppt-step highlight"><span>结论</span><p>不❌成正比例</p></div>
                        </div>
                    </div>
                `,
                narration: "判断是否成正比例，看它们的比值是否一定。比如圆的周长除以直径，等于圆周率π，这是一个固定值，所以圆的周长和直径成正比例。再看正方形的边长和面积，面积边长等于边长，边长不是固定值，所以不成正比例。判断的关键是看y除以x是否等于常数k。"
            }
        ]
    },
    "9-4": {
        title: "反比例（xy=k一定）",
        slides: [
            {
                id: 1,
                title: "正反比例对比",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-compare-table">
                            <div class="compare-item">
                                <h5>正比例</h5>
                                <p>y/x = k（一定）</p>
                                <p>变化方向相同</p>
                                <p>图像是直线</p>
                            </div>
                            <div class="compare-vs">VS</div>
                            <div class="compare-item">
                                <h5>反比例</h5>
                                <p>xy = k（一定）</p>
                                <p>变化方向相反</p>
                                <p>图像是曲线</p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "正比例和反比例正好相反。正比例是比值一定，反比例是乘积一定。正比例中两个量同时变大同时变小，反比例中一个变大另一个就变小。比如路程一定，速度越快，时间就越短，这就是反比例。"
            },
            {
                id: 2,
                title: "反比例判断",
                content: `
                    <div class="ppt-slide-content">
                        <div class="example-box-group">
                            <div class="ppt-example-box">
                                <h5>✅ 面积一定 → 长×宽 = 一定</h5>
                                <p>长方形的长和宽<strong>成反比例</strong></p>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>✅ 路程一定 → 速度×时间 = 一定</h5>
                                <p>速度和时间<strong>成反比例</strong></p>
                            </div>
                            <div class="ppt-example-box" style="margin-top:10px;">
                                <h5>❌ 年龄×身高 ≠ 一定</h5>
                                <p>年龄和身高<strong>不成反比例</strong></p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "判断是否成反比例，看它们的乘积是否一定。长方形面积一定，长和宽的乘积就是固定的面积，所以长和宽成反比例。长变大，宽就变小，方向相反。路程一定，速度乘时间等于固定路程，速度和时间也成反比例。但一个人的年龄和身高，乘积不是固定的，所以不成比例。同学们理解了吗？正比例是除法关系，反比例是乘法关系。"
            }
        ]
    },
    "9-5": {
        title: "比例尺",
        slides: [
            {
                id: 1,
                title: "什么是比例尺？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>地图上的1厘米</p>
                            <p>相当于实际多少距离？</p>
                        </div>
                        <div class="ppt-formula-box big">
                            <p class="ppt-big-formula">比例尺 = 图上距离 : 实际距离</p>
                        </div>
                    </div>
                `,
                narration: "我们看地图时，会发现地图上有一厘米的距离，实际可能代表十公里。这个缩小的比例就是比例尺。比例尺等于图上距离比实际距离。比如比例尺一比一百万，就表示图上一厘米代表实际一千万厘米，也就是一百公里。"
            },
            {
                id: 2,
                title: "三种情况的计算",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-steps-flow vertical">
                            <div class="flow-step">
                                <p>求实际距离：<strong>图上距离 ÷ 比例尺</strong></p>
                            </div>
                            <div class="flow-step">
                                <p>求图上距离：<strong>实际距离 × 比例尺</strong></p>
                            </div>
                            <div class="flow-step">
                                <p>求比例尺：<strong>图上距离 : 实际距离</strong></p>
                            </div>
                        </div>
                        <div class="ppt-tip warning">
                            <p>⚠️ 计算前先统一单位！</p>
                        </div>
                    </div>
                `,
                narration: "比例尺的计算有三种情况。知道图上距离和比例尺，求实际距离：图上距离除以比例尺。知道实际距离和比例尺，求图上距离：实际距离乘以比例尺。知道图上和实际距离，求比例尺：两个一除。最重要的一点：计算前一定要先统一单位，都换算成相同单位才能算。比如实际距离是三十千米，要换算成厘米，因为图上距离通常用厘米。"
            }
        ]
    },
    "9-6": {
        title: "图形的放大与缩小",
        slides: [
            {
                id: 1,
                title: "放大与缩小的概念",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>按 <strong>2:1</strong> 放大 → 每条边×2</p>
                            <p>按 <strong>1:2</strong> 缩小 → 每条边÷2</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>形状不变，大小改变</p>
                            <p>所有边按<strong>相同比</strong>变化</p>
                        </div>
                    </div>
                `,
                narration: "图形的放大和缩小，就是每条边都按照相同的比例变化。比如按二比一放大，每条边的长度都扩大到原来的两倍。按一比二缩小，每条边的长度都变成原来的一半。注意：放大缩小后图形的形状不变，只是大小变了。"
            },
            {
                id: 2,
                title: "面积的变化",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 例题</h4>
                            <p>长方形长3cm、宽2cm，按3:1放大</p>
                            <div class="ppt-step"><span>放大后</span><p>长=9cm，宽=6cm</p></div>
                            <div class="ppt-step"><span>原面积</span><p>3×2=6cm²</p></div>
                            <div class="ppt-step"><span>新面积</span><p>9×6=54cm²</p></div>
                            <div class="ppt-step highlight"><span>面积变化</span><p>54÷6 = <strong>9倍</strong>（3²倍）✅</p></div>
                        </div>
                        <div class="ppt-tip important">
                            <p>💡 面积扩大倍数是边长倍数的<strong>平方</strong></p>
                        </div>
                    </div>
                `,
                narration: "这道例题展示了面积的変化规律。长方形长三厘米、宽两厘米，按三比一放大。长变成九厘米，宽变成六厘米。原面积六平方厘米，新面积五十四平方厘米。面积扩大了九倍，而边长只扩大了二倍。面积扩大的倍数是边长扩大倍数的平方。如果按n比一放大，面积就扩大n的平方倍。这个规律一定要记住。"
            }
        ]
    },

    // ====== 第十单元：确定位置 ======
    "10-1": {
        title: "用方向和距离确定位置",
        slides: [
            {
                id: 1,
                title: "如何描述一个物体的位置？",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>📍 学校在图书馆的什么位置？</p>
                        </div>
                        <div class="ppt-key-point">
                            <p>确定位置需要<strong>两个要素</strong>：</p>
                            <p><strong>方向</strong> + <strong>距离</strong></p>
                            <p>缺一不可！</p>
                        </div>
                    </div>
                `,
                narration: "同学们，如果问"学校在图书馆的什么位置"，你不能只说"在那边"，必须说清楚方向和距离。比如"学校在图书馆东偏南三十度方向两百米处"。方向和距离是确定位置的两个要素，缺一不可。"
            },
            {
                id: 2,
                title: "方向描述与相对位置",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-directions">
                            <div class="dir-desc">
                                <h5>方向描述</h5>
                                <p>东偏北30° → 先正东再北偏30°</p>
                                <p>北偏东60° = 东偏北30°</p>
                            </div>
                            <div class="dir-desc">
                                <h5>相对位置</h5>
                                <p>A在B的东偏南30°</p>
                                <p>→ B在A的<strong>西偏北30°</strong></p>
                            </div>
                        </div>
                    </div>
                `,
                narration: "描述方向时，先说正方向再说偏几度。东偏北三十度，就是先朝东，再向北偏三十度。注意东偏北三十度和北偏东六十度是同一个方向。更重要的一点：相对位置的方向是相反的。如果教学楼在图书馆的东偏南三十度，那么图书馆在教学楼的西偏北三十度。想象一下，你面朝东偏南，对方就在你反方向的西偏北。"
            }
        ]
    },
    "10-2": {
        title: "坐标确定位置",
        slides: [
            {
                id: 1,
                title: "用数对表示位置",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-big-text center">
                            <p>数对 <strong>(列, 行)</strong></p>
                        </div>
                        <div class="ppt-formula-box">
                            <p>A点(2,3) → 第2列第3行</p>
                            <p>B点(5,3) → 第5列第3行</p>
                        </div>
                        <div class="ppt-tip">
                            <p>💡 先写<strong>列</strong>后写<strong>行</strong></p>
                            <p>左右移动→列变，上下移动→行变</p>
                        </div>
                    </div>
                `,
                narration: "在方格图中，我们可以用数对来确定位置。数对的形式是括号列逗号行。比如A点坐标是（二,三），表示第二列第三行。注意先写列再写行。左右移动的时候列数变化，上下移动的时候行数变化。A点（二,三）向右移动三格，列加三变成五，行不变，新位置是（五,三）。"
            },
            {
                id: 2,
                title: "坐标应用",
                content: `
                    <div class="ppt-slide-content">
                        <div class="ppt-example-box">
                            <h4>📝 练习</h4>
                            <p>A(2,3)，B(5,3)</p>
                            <div class="ppt-step"><span>A向右3格</span><p>(2+3, 3) = <strong>(5, 3)</strong></p></div>
                            <div class="ppt-step"><span>A向上2格</span><p>(2, 3+2) = <strong>(2, 5)</strong></p></div>
                            <div class="ppt-step"><span>A到B距离</span><p>5-2 = <strong>3格</strong></p></div>
                        </div>
                        <div class="ppt-tip warning">
                            <p>⚠️ 列和行从<strong>1</strong>开始，不是0</p>
                        </div>
                    </div>
                `,
                narration: "来看这个练习。A点是（二,三），B点是（五,三）。问题一，A点向右移动三格到哪里？列增加三，行不变，新位置是（五,三），恰好和B点重合了。问题二，A点向上移动两格到哪里？列不变，行增加二，新位置是（二,五）。问题三，A和B之间相距几格？五减二等于三格。注意列和行都是从一开始数的，不是从零开始。同学们，用坐标确定位置在数学和生活中都很有用，比如看电影找座位也是按列和行来找的。"
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
                                <div class="explanation-text">${errorPptData.formatExplanation(question.explanation)}</div>
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
                                <div class="tips-content">${errorPptData.generateSimilarTips(question)}</div>
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
            1: '<p>长方体有6个面、12条棱、8个顶点，记住这个数字口诀。</p>',
            2: '<p>棱长总和 = (长+宽+高)×4，三边相加再乘4。</p>',
            3: '<p>正方体表面积 S=6a²，棱长的平方再乘6。</p>',
            4: '<p>长方体体积 V=abh，长宽高三者相乘。</p>',
            5: '<p>正方体体积 V=a³，记住是 a×a×a，不是3a。</p>',
            6: '<p>无盖问题注意面数，先判断需要几个面再算。</p>',
            7: '<p>分数乘整数，先约分再计算更简便。</p>',
            8: '<p>分数乘分数：分子乘分子，分母乘分母。</p>',
            10: '<p>求倒数就是交换分子分母的位置。</p>',
            13: '<p>分数除以整数 = 分数乘整数的倒数。</p>',
            14: '<p>一个数除以分数 = 这个数乘分数的倒数。</p>',
            15: '<p>已知部分÷对应分率=单位"1"，先用除法。</p>',
            19: '<p>鸡兔同笼问题，先假设全部是鸡再调整。</p>',
            21: '<p>分数混合运算顺序：先乘除后加减。</p>',
            23: '<p>提取公因数是分数简便运算的常用方法。</p>',
            25: '<p>小数化百分数：小数点右移两位加%号。</p>',
            26: '<p>百分率 = 部分÷总量×100%，注意乘100%。</p>',
            27: '<p>打几折就是乘以百分之几十，八折=80%。</p>',
            28: '<p>降价问题：现价÷(1-降价%) = 原价。</p>',
            29: '<p>增产率 = 增加量÷原量×100%。</p>',
            35: '<p>圆柱体积 V=πr²h，注意区分半径和直径。</p>',
            36: '<p>圆锥体积 V=1/3πr²h，千万不能忘1/3。</p>',
            37: '<p>等底等高时，圆柱体积是圆锥的3倍。</p>',
            40: '<p>解比例：内项积=外项积，列方程解。</p>',
            41: '<p>正比例：y/x=k（一定），比值不变。</p>',
            42: '<p>反比例：xy=k（一定），乘积不变。</p>',
            43: '<p>比例尺计算先统一单位，千米化厘米加5个0。</p>',
            44: '<p>面积扩大倍数 = 边长扩大倍数的平方。</p>',
            45: '<p>确定位置需要方向和距离两个要素。</p>',
            47: '<p>相对位置方向相反：东偏南↔西偏北。</p>'
        };
        return tipsMap[question.id] || '<p>多做类似题目，熟能生巧！</p>';
    }
};
