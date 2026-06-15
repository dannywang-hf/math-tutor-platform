// 六年级数学课程数据 - 苏教版完整版
const mathData = {
    // 章节数据
    chapters: [
        // ====== 上册 ======
        {
            id: 1,
            title: "第一单元：长方体和正方体",
            lessons: [
                {
                    id: "1-1",
                    title: "长方体和正方体的认识",
                    content: `
                        <div class="lesson-body">
                            <h4>📐 长方体的特征</h4>
                            <p>长方体是由6个长方形（特殊情况有两个相对的面是正方形）围成的立体图形。</p>
                            <p>长方体有<strong>6个面</strong>，<strong>12条棱</strong>，<strong>8个顶点</strong>。</p>
                            <p>在一个长方体中，<strong>相对的面完全相同</strong>，<strong>相对的棱长度相等</strong>。</p>
                            
                            <h4>📐 正方体的特征</h4>
                            <p>正方体是由6个完全相同的正方形围成的立体图形。</p>
                            <p>正方体有<strong>6个面</strong>，<strong>12条棱</strong>，<strong>8个顶点</strong>。</p>
                            <p>正方体的<strong>所有棱长度都相等</strong>，<strong>所有面都完全相同</strong>。</p>
                            
                            <h4>长、宽、高</h4>
                            <p>长方体相交于同一个顶点的三条棱分别叫做长方体的<strong>长、宽、高</strong>。</p>
                            <p class="math-formula">长方体棱长总和 = (长 + 宽 + 高) × 4</p>
                            <p class="math-formula">正方体棱长总和 = 棱长 × 12</p>
                            
                            <h4>📊 长方体与正方体的关系</h4>
                            <p>正方体是<strong>特殊的长方体</strong>（长、宽、高都相等的长方体）。</p>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>一个长方体长8厘米，宽6厘米，高4厘米，它的棱长总和是多少厘米？</p>
                                <p><strong>解：</strong></p>
                                <p>棱长总和 = (长 + 宽 + 高) × 4</p>
                                <p>= (8 + 6 + 4) × 4</p>
                                <p>= 18 × 4 = <strong>72（厘米）</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>面/棱/顶点的数量要一一对应记忆，不要把6、12、8搞混</li>
                                <li>长方体中"相对的面"需要两个一起看，不能只看一个面</li>
                                <li>棱长总和算完要写单位，别忘了括号</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 20
                },
                {
                    id: "1-2",
                    title: "长方体和正方体的表面积",
                    content: `
                        <div class="lesson-body">
                            <h4>🧩 表面积的概念</h4>
                            <p>长方体（或正方体）<strong>6个面的总面积</strong>，叫做它的表面积。</p>
                            
                            <h4>🧩 长方体表面积公式</h4>
                            <p class="math-formula">S = (ab + ah + bh) × 2</p>
                            <p>其中 a 为长，b 为宽，h 为高。</p>
                            <p>也可以分别计算三组对面再相加：</p>
                            <p class="math-formula">S = 2ab + 2ah + 2bh</p>
                            
                            <h4>🧩 正方体表面积公式</h4>
                            <p class="math-formula">S = 6a²</p>
                            <p>其中 a 为棱长。</p>
                            
                            <h4>📐 展开图理解</h4>
                            <p>把长方体和正方体沿棱剪开，可以得到它们的展开图。展开图中每个面之间通过棱连接，形成了平面图形。</p>
                            <p>展开图可以帮助我们<strong>直接看到每个面</strong>，理解表面积公式的由来：</p>
                            <ul>
                                <li>长方体展开后得到6个长方形（或正方形）</li>
                                <li>正方体展开后有11种不同的展开图</li>
                                <li>展开图中"对面"一定不相邻</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>做一个长6分米、宽5分米、高4分米的无盖玻璃鱼缸，至少需要多少平方分米的玻璃？</p>
                                <p><strong>解：</strong>无盖鱼缸只有5个面（没有上面）</p>
                                <p>前后两面：2 × 6 × 4 = 48（平方分米）</p>
                                <p>左右两面：2 × 5 × 4 = 40（平方分米）</p>
                                <p>底面：6 × 5 = 30（平方分米）</p>
                                <p><strong>总面积：48 + 40 + 30 = 118（平方分米）</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>求实际问题时先判断是几个面（无盖/无底/通风管等）</li>
                                <li>注意单位统一</li>
                                <li>正方体表面积公式 S=6a² 中的 a² 是棱长乘棱长</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 25
                },
                {
                    id: "1-3",
                    title: "体积和体积单位",
                    content: `
                        <div class="lesson-body">
                            <h4>📦 体积的概念</h4>
                            <p>物体<strong>所占空间的大小</strong>叫做物体的体积。</p>
                            
                            <h4>📏 常用的体积单位</h4>
                            <ul>
                                <li><strong>立方厘米（cm³）</strong>：棱长1厘米的正方体，体积是1立方厘米</li>
                                <li><strong>立方分米（dm³）</strong>：棱长1分米的正方体，体积是1立方分米</li>
                                <li><strong>立方米（m³）</strong>：棱长1米的正方体，体积是1立方米</li>
                            </ul>
                            <p class="math-formula">1立方分米 = 1000立方厘米</p>
                            <p class="math-formula">1立方米 = 1000立方分米</p>
                            <p class="math-formula">1立方米 = 1000000立方厘米</p>
                            
                            <h4>💧 容积</h4>
                            <p>容器<strong>所能容纳物体的体积</strong>叫做容器的容积。</p>
                            <p>常用的容积单位有<strong>升（L）</strong>和<strong>毫升（mL）</strong>。</p>
                            <p class="math-formula">1升 = 1立方分米 &nbsp;&nbsp; 1毫升 = 1立方厘米</p>
                            <p class="math-formula">1升 = 1000毫升</p>
                            
                            <h4>⚠️ 体积与容积的区别</h4>
                            <ul>
                                <li><strong>意义不同</strong>：体积是"物体占空间"，容积是"容器能装多少"</li>
                                <li><strong>测量方法不同</strong>：体积从外部量，容积从内部量</li>
                                <li><strong>单位不同</strong>：体积用体积单位，容积用升/毫升也可用体积单位</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>一个水箱从里面量长5分米、宽4分米、深3分米，这个水箱的容积是多少升？</p>
                                <p><strong>解：</strong></p>
                                <p>容积 = 5 × 4 × 3 = 60（立方分米）</p>
                                <p>60立方分米 = <strong>60升</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "1-4",
                    title: "长方体和正方体的体积计算",
                    content: `
                        <div class="lesson-body">
                            <h4>📐 长方体体积公式</h4>
                            <p>长方体的体积 = <strong>长 × 宽 × 高</strong></p>
                            <p class="math-formula">V = abh</p>
                            
                            <h4>📐 正方体体积公式</h4>
                            <p>正方体的体积 = <strong>棱长 × 棱长 × 棱长</strong></p>
                            <p class="math-formula">V = a³</p>
                            
                            <h4>📐 统一公式</h4>
                            <p>长方体（正方体）的底面积公式：</p>
                            <p class="math-formula">S底 = ab（长×宽） 或 S底 = a²（棱长×棱长）</p>
                            <p>体积还可以用统一公式表示：</p>
                            <p class="math-formula">V = Sh（底面积 × 高）</p>
                            
                            <div class="example-box">
                                <h5>📝 例题1</h5>
                                <p>一个长方体沙坑，长5米、宽3米、深0.5米，需要多少立方米的沙子才能填满？</p>
                                <p><strong>解：</strong>V = 5 × 3 × 0.5 = <strong>7.5（立方米）</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>一个正方体铁块，棱长是6厘米，它的体积是多少立方厘米？</p>
                                <p><strong>解：</strong>V = 6³ = 6 × 6 × 6 = <strong>216（立方厘米）</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>体积公式中的三个量必须是"长、宽、高"一一对应</li>
                                <li>a³ 表示 a × a × a，不是 3a（3a是3个a相加）</li>
                                <li>计算前检查单位是否统一，不统一先换算</li>
                                <li>求容积时用"从里面量"的数据</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 25
                }
            ]
        },
        {
            id: 2,
            title: "第二单元：分数乘法",
            lessons: [
                {
                    id: "2-1",
                    title: "分数乘整数",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 意义</h4>
                            <p>分数乘整数的意义与整数乘法相同：求<strong>几个相同加数的和的简便运算</strong>。</p>
                            <p>例如：2/3 × 4 表示求<strong>4个2/3相加的和</strong>。</p>
                            
                            <h4>📖 计算方法</h4>
                            <p>分数乘整数，用<strong>分子乘整数的积作分子，分母不变</strong>。</p>
                            <p class="math-formula">a/b × n = (a × n) / b</p>
                            
                            <h4>💡 约分技巧</h4>
                            <ul>
                                <li><strong>先约分再计算</strong>：将整数和分母先约分（约去最大公因数）</li>
                                <li>约分可以使数字变小，计算更简便</li>
                                <li>整数可以看作分母是1的分数</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>计算：3/4 × 8</p>
                                <p><strong>方法一（先算再约分）：</strong></p>
                                <p>3/4 × 8 = (3×8)/4 = 24/4 = 6</p>
                                <p><strong>方法二（先约分再算）：</strong></p>
                                <p>3/4 × 8 = 3 × (8÷4) = 3 × 2 = <strong>6</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>能约分的先约分，再计算</li>
                                <li>结果要化成最简分数或整数</li>
                                <li>0乘任何数都得0</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "2-2",
                    title: "分数乘分数",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 计算方法</h4>
                            <p>分数乘分数，用<strong>分子相乘的积作分子，分母相乘的积作分母</strong>。</p>
                            <p class="math-formula">a/b × c/d = (a × c) / (b × d)</p>
                            
                            <h4>💡 约分技巧</h4>
                            <ul>
                                <li>可以分子与分母之间<strong>交叉约分</strong></li>
                                <li>先约分再计算，避免最后结果数字太大</li>
                            </ul>
                            
                            <h4>📊 积的变化规律</h4>
                            <ul>
                                <li>一个数（0除外）乘<strong>大于1</strong>的数，积<strong>大于</strong>这个数</li>
                                <li>一个数（0除外）乘<strong>小于1</strong>的数，积<strong>小于</strong>这个数</li>
                                <li>一个数乘<strong>等于1</strong>的数，积<strong>等于</strong>这个数</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>计算：2/3 × 3/4</p>
                                <p><strong>解（不约分）：</strong></p>
                                <p>2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2</p>
                                <p><strong>解（先约分）：</strong></p>
                                <p>2/3 × 3/4 = 2/4 = <strong>1/2</strong>（3和3约掉）</p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>分数乘分数，结果一定要化成最简分数</li>
                                <li>约分可以在计算过程中随时进行</li>
                                <li>带分数先化成假分数再相乘</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "2-3",
                    title: "求一个数的几分之几是多少",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 关键理解</h4>
                            <p>求一个数的几分之几，用<strong>乘法</strong>计算。</p>
                            <p class="math-formula">这个数 × 几分之几 = 结果</p>
                            
                            <h4>📝 解题三部曲</h4>
                            <ol>
                                <li><strong>找单位"1"</strong>：确定"整体"是哪个量</li>
                                <li><strong>确定分率</strong>：要求的量是单位"1"的几分之几</li>
                                <li><strong>列式计算</strong>：单位"1"的量 × 分率 = 所求量</li>
                            </ol>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>果园里有苹果树120棵，梨树的棵数是苹果树的3/4，梨树有多少棵？</p>
                                <p><strong>分析：</strong></p>
                                <p>单位"1"：苹果树的棵数（120棵）</p>
                                <p>梨树 = 苹果树 × 3/4</p>
                                <p><strong>解：</strong>120 × 3/4 = 120 ÷ 4 × 3 = 30 × 3 = <strong>90（棵）</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2（连续两个几分之几）</h5>
                                <p>一袋大米重50千克，第一天吃了1/5，第二天吃了剩下的1/4，第二天吃了多少千克？</p>
                                <p><strong>解：</strong></p>
                                <p>第一天后剩下：50 × (1 - 1/5) = 50 × 4/5 = 40（千克）</p>
                                <p>第二天：40 × 1/4 = <strong>10（千克）</strong></p>
                            </div>

                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>分清"谁的几分之几"，找准单位"1"</li>
                                <li>连续求几分之几要分步计算</li>
                                <li>求"剩下的几分之几"时，先从1里减去已用的分率</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 25
                },
                {
                    id: "2-4",
                    title: "倒数的认识",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 什么是倒数</h4>
                            <p><strong>乘积是1的两个数</strong>互为倒数。</p>
                            <p>例如：2/3 × 3/2 = 1，所以2/3和3/2互为倒数。</p>
                            
                            <h4>📖 求倒数的方法</h4>
                            <ul>
                                <li><strong>分数</strong>：交换分子和分母的位置</li>
                                <li><strong>整数</strong>：看作分母是1的分数，再交换位置</li>
                                <li><strong>带分数</strong>：先化成假分数，再交换分子分母</li>
                                <li><strong>小数</strong>：先化成分数，再交换分子分母</li>
                            </ul>
                            
                            <h4>📊 特殊情况</h4>
                            <ul>
                                <li><strong>1</strong>的倒数是<strong>1</strong>（因为1×1=1）</li>
                                <li><strong>0</strong><strong>没有倒数</strong>（因为任何数×0=0≠1）</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>写出下列数的倒数：</p>
                                <p>（1）3/5 → <strong>5/3</strong></p>
                                <p>（2）7 → 7=7/1 → <strong>1/7</strong></p>
                                <p>（3）1 → <strong>1</strong></p>
                                <p>（4）2/3 → <strong>3/2</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "2-5",
                    title: "分数连乘和简便运算",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 分数连乘</h4>
                            <p>几个分数连续相乘时，可以<strong>一次约分、一次计算</strong>。</p>
                            <p class="math-formula">a/b × c/d × e/f = (a×c×e) / (b×d×f)</p>
                            
                            <h4>📖 运算律在分数中的应用</h4>
                            <p>整数乘法中的运算律同样适用于分数：</p>
                            <ul>
                                <li><strong>交换律</strong>：a×b = b×a</li>
                                <li><strong>结合律</strong>：(a×b)×c = a×(b×c)</li>
                                <li><strong>分配律</strong>：(a+b)×c = a×c + b×c</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题1（连乘）</h5>
                                <p>计算：2/3 × 9/10 × 5/6</p>
                                <p><strong>解（一次约分再计算）：</strong></p>
                                <p>2/3 × 9/10 × 5/6</p>
                                <p>= (2×9×5) / (3×10×6)</p>
                                <p>= (2×3×3×5) / (3×2×5×6) = <strong>1/2</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2（运用分配律）</h5>
                                <p>计算：(1/2 + 1/3) × 12</p>
                                <p><strong>解：</strong></p>
                                <p>(1/2 + 1/3) × 12 = 1/2 × 12 + 1/3 × 12 = 6 + 4 = <strong>10</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>约分是对分子和分母约分，注意整体约分</li>
                                <li>运用乘法分配律时，括号里的每一项都要乘</li>
                                <li>计算过程要书写规范</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                }
            ]
        },
        {
            id: 3,
            title: "第三单元：分数除法",
            lessons: [
                {
                    id: "3-1",
                    title: "分数除以整数",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 计算方法</h4>
                            <p>分数除以整数（0除外），等于分数<strong>乘这个整数的倒数</strong>。</p>
                            <p class="math-formula">a/b ÷ c = a/b × 1/c = a/(b×c) （c≠0）</p>
                            
                            <h4>💡 理解过程</h4>
                            <p>以 4/5 ÷ 2 为例：</p>
                            <p>4/5 ÷ 2 就是把 4/5 平均分成2份，每份是 (4÷2)/5 = 2/5。</p>
                            <p>用倒数的算法：4/5 ÷ 2 = 4/5 × 1/2 = 4/10 = 2/5，结果一样！</p>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>计算：6/7 ÷ 2</p>
                                <p><strong>解：</strong>6/7 ÷ 2 = 6/7 × 1/2 = <strong>3/7</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>计算：4/5 ÷ 6</p>
                                <p><strong>解：</strong>4/5 ÷ 6 = 4/5 × 1/6 = <strong>4/30 = 2/15</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>除数不能为0</li>
                                <li>分数除以整数 = 分数 × 这个整数的倒数</li>
                                <li>结果要化成最简分数</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "3-2",
                    title: "一个数除以分数",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 计算方法</h4>
                            <p>一个数除以分数，等于这个数<strong>乘分数的倒数</strong>。</p>
                            <p class="math-formula">a ÷ b/c = a × c/b （b≠0，c≠0）</p>
                            
                            <h4>📖 统一除法法则</h4>
                            <p><strong>甲数除以乙数（0除外），等于甲数乘乙数的倒数。</strong></p>
                            <p class="math-formula">a ÷ b = a × 1/b（b≠0）</p>
                            <p class="math-formula">a ÷ c/d = a × d/c（c≠0, d≠0）</p>
                            
                            <div class="example-box">
                                <h5>📝 例题1</h5>
                                <p>计算：6 ÷ 2/3</p>
                                <p><strong>解：</strong>6 ÷ 2/3 = 6 × 3/2 = 18/2 = <strong>9</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>计算：3/5 ÷ 2/3</p>
                                <p><strong>解：</strong>3/5 ÷ 2/3 = 3/5 × 3/2 = <strong>9/10</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>除号变乘号，除数取倒数</li>
                                <li>只取除数的倒数，被除数不变</li>
                                <li>能约分的先约分再计算</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "3-3",
                    title: "分数除法应用题",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 题型特征</h4>
                            <p>已知一个数的几分之几是多少，求这个数。用<strong>除法</strong>计算。</p>
                            <p class="math-formula">已知量 ÷ 对应分率 = 单位"1"的量</p>
                            
                            <h4>📝 解题步骤</h4>
                            <ol>
                                <li><strong>找单位"1"</strong>（一般是"的"字前面的量）</li>
                                <li><strong>确定分率对应量</strong>：哪个具体的数对应几分之几</li>
                                <li><strong>列式计算</strong>：已知量 ÷ 它的分率 = 单位"1"</li>
                            </ol>
                            
                            <div class="example-box">
                                <h5>📝 例题1</h5>
                                <p>一个数的3/4是15，这个数是多少？</p>
                                <p><strong>解：</strong>单位"1"是这个数本身，3/4对应15</p>
                                <p>这个数 = 15 ÷ 3/4 = 15 × 4/3 = <strong>20</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>小明看一本书，看了全书的2/5，正好是40页，这本书有多少页？</p>
                                <p><strong>解：</strong>单位"1"是全书页数</p>
                                <p>全书 = 40 ÷ 2/5 = 40 × 5/2 = <strong>100（页）</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                },
                {
                    id: "3-4",
                    title: "分数混合运算",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 运算顺序</h4>
                            <p>分数四则混合运算的顺序与整数相同：</p>
                            <ol>
                                <li><strong>先算乘除，后算加减</strong></li>
                                <li><strong>有括号先算括号里面的</strong></li>
                                <li><strong>同一级运算按从左到右的顺序计算</strong></li>
                            </ol>
                            
                            <h4>📖 注意事项</h4>
                            <ul>
                                <li>遇到除法，先把除法转化成乘法（除以一个数等于乘它的倒数）</li>
                                <li>除法转化后再进行约分和计算</li>
                                <li>运算律同样适用</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>计算：5/6 - 1/3 ÷ 2/3</p>
                                <p><strong>解：</strong></p>
                                <p>先算除法：1/3 ÷ 2/3 = 1/3 × 3/2 = 1/2</p>
                                <p>再算减法：5/6 - 1/2 = 5/6 - 3/6 = <strong>1/3</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2（含括号）</h5>
                                <p>计算：(2/3 + 1/6) × 12</p>
                                <p><strong>解：</strong></p>
                                <p>先算括号里：2/3 + 1/6 = 4/6 + 1/6 = 5/6</p>
                                <p>再算乘法：5/6 × 12 = <strong>10</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>不要随意调换运算顺序</li>
                                <li>除法不能先算"除"再"乘"，要先转化</li>
                                <li>每一步计算的结果都要检查</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                },
                {
                    id: "3-5",
                    title: "比的认识",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 比的意义</h4>
                            <p>两个数相除又叫做两个数的<strong>比</strong>。</p>
                            <p class="math-formula">a ÷ b = a : b = a/b （b≠0）</p>
                            
                            <h4>📖 比的各部分名称</h4>
                            <ul>
                                <li><strong>前项</strong>：比号前面的数</li>
                                <li><strong>比号</strong>：符号":"，读作"比"</li>
                                <li><strong>后项</strong>：比号后面的数</li>
                                <li><strong>比值</strong>：前项÷后项所得的结果</li>
                            </ul>
                            <p>例如 <strong>3 : 5</strong> 中，3是前项，5是后项，比值是3÷5=0.6。</p>
                            
                            <h4>📊 比与除法、分数的关系</h4>
                            <p class="math-formula">a : b = a ÷ b = a/b （b≠0）</p>
                            <table border="1" cellpadding="5" style="border-collapse:collapse;width:100%">
                                <tr><th></th><th>比</th><th>除法</th><th>分数</th></tr>
                                <tr><td>前项</td><td>a</td><td>被除数</td><td>分子</td></tr>
                                <tr><td>后项</td><td>b</td><td>除数</td><td>分母</td></tr>
                                <tr><td>结果</td><td>比值</td><td>商</td><td>分数值</td></tr>
                            </table>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>红花和黄花共24朵，红花与黄花的比是5:3，红花和黄花的数量比是多少？比值是多少？</p>
                                <p><strong>解：</strong></p>
                                <p>红花:黄花 = 5:3</p>
                                <p>比值 = 5 ÷ 3 = <strong>5/3</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                }
            ]
        },
        {
            id: 4,
            title: "第四单元：解决问题的策略",
            lessons: [
                {
                    id: "4-1",
                    title: "用\"假设\"策略解决问题",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 什么是假设策略</h4>
                            <p>当遇到有两个（或两个以上）未知量的实际问题时，可以<strong>先假设全部是同一个量</strong>，再根据假设与实际结果的差异进行调整。</p>
                            
                            <h4>📝 解题步骤</h4>
                            <ol>
                                <li><strong>假设</strong>：假设全部是其中一个量</li>
                                <li><strong>计算</strong>：算出假设情况下的总数</li>
                                <li><strong>比较</strong>：比较假设结果与实际结果的差</li>
                                <li><strong>调整</strong>：用差÷单位差，求出另一个量</li>
                            </ol>
                            
                            <div class="example-box">
                                <h5>📝 经典例题（鸡兔同笼）</h5>
                                <p>笼子里有鸡和兔共8只，共有22条腿。鸡和兔各有多少只？</p>
                                <p><strong>解（假设法）：</strong></p>
                                <p>① 假设全是鸡：8×2=16（条腿）</p>
                                <p>② 比实际少：22-16=6（条腿）</p>
                                <p>③ 每只兔比鸡多：4-2=2（条腿）</p>
                                <p>④ 兔的只数：6÷2=<strong>3（只）</strong></p>
                                <p>⑤ 鸡的只数：8-3=<strong>5（只）</strong></p>
                                <p><strong>验算：</strong>5×2+3×4=10+12=22（条）✓</p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>假设不同，计算过程不同，但结果相同</li>
                                <li>做完后一定要验算！</li>
                                <li>注意"单位差"是每个互换带来的变化量</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                },
                {
                    id: "4-2",
                    title: "用\"转化\"策略解决问题",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 什么是转化策略</h4>
                            <p>把<strong>复杂的、陌生的问题</strong>，通过某种方式<strong>转化为简单的、熟悉的问题</strong>来解决。</p>
                            <p>"转化"是数学中最重要的思想方法之一。</p>
                            
                            <h4>📖 常见转化方式</h4>
                            <ul>
                                <li><strong>化新为旧</strong>：新问题转化成学过的旧问题</li>
                                <li><strong>化繁为简</strong>：复杂问题分解成简单问题</li>
                                <li><strong>化抽象为具体</strong>：用图形、表格等方式呈现</li>
                                <li><strong>化未知为已知</strong>：设未知数，用方程解决</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>一杯牛奶，小红先喝了半杯，加满水，又喝了半杯，再加满水。最后全部喝掉。小红喝的水多还是牛奶多？</p>
                                <p><strong>分析：</strong></p>
                                <p>不管怎么加水，牛奶最初是一整杯，最后全部喝掉。</p>
                                <p>所以小红喝的<strong>牛奶正好是1杯</strong>。</p>
                                <p>第一次加满水加了半杯水，第二次加满了又加了半杯水。</p>
                                <p>所以两次共加了 <strong>1/2 + 1/2 = 1（杯水）</strong>。</p>
                                <p><strong>结论：牛奶和喝一样多，都是1杯。</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2（化繁为简）</h5>
                                <p>计算：1/2 + 1/6 + 1/12 + 1/20</p>
                                <p><strong>解（转化法）：</strong></p>
                                <p>1/2 = 1 - 1/2</p>
                                <p>1/6 = 1/2 - 1/3</p>
                                <p>1/12 = 1/3 - 1/4</p>
                                <p>1/20 = 1/4 - 1/5</p>
                                <p>原式 = (1-1/2)+(1/2-1/3)+(1/3-1/4)+(1/4-1/5)</p>
                                <p>= 1 - 1/5 = <strong>4/5</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                }
            ]
        },
        {
            id: 5,
            title: "第五单元：分数四则混合运算",
            lessons: [
                {
                    id: "5-1",
                    title: "分数四则混合运算顺序",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 运算顺序（与整数相同）</h4>
                            <ol>
                                <li><strong>有括号</strong>：先算括号里面的，再算括号外面的</li>
                                <li><strong>无括号</strong>：先算乘除，后算加减</li>
                                <li><strong>同级运算</strong>：从左往右依次计算</li>
                            </ol>
                            
                            <h4>💡 特别提醒</h4>
                            <ul>
                                <li><strong>遇到除法先转化</strong>：先把所有除法变成乘法（乘倒数）</li>
                                <li>转化后再找约分机会</li>
                                <li>多步运算时每一步都要写清楚</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题1</h5>
                                <p>计算：3/4 + 1/2 × 2/3</p>
                                <p><strong>解：</strong></p>
                                <p>先算乘法：1/2 × 2/3 = 1/3</p>
                                <p>再算加法：3/4 + 1/3 = 9/12 + 4/12 = <strong>13/12 = 1又1/12</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>计算：(3/4 - 1/2) ÷ 1/4</p>
                                <p><strong>解：</strong></p>
                                <p>先算括号：3/4 - 1/2 = 3/4 - 2/4 = 1/4</p>
                                <p>再算除法：1/4 ÷ 1/4 = 1/4 × 4 = <strong>1</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>不要跳步，一步一步算</li>
                                <li>除法转化后注意约分</li>
                                <li>最后结果能约分的要约成最简分数</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                },
                {
                    id: "5-2",
                    title: "简便运算（运算律在分数中的应用）",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 运算律回顾</h4>
                            <p>加法交换律：a + b = b + a</p>
                            <p>加法结合律：(a + b) + c = a + (b + c)</p>
                            <p>乘法交换律：a × b = b × a</p>
                            <p>乘法结合律：(a × b) × c = a × (b × c)</p>
                            <p><strong>乘法分配律</strong>：a × (b + c) = a × b + a × c</p>
                            
                            <h4>📖 分数简便运算技巧</h4>
                            <ul>
                                <li><strong>交换位置</strong>：把容易约分的放在一起</li>
                                <li><strong>提取公因数</strong>：找到相同的分数因数</li>
                                <li><strong>拆分法</strong>：把一个分数拆成两个分数的和或差</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题1（提取公因数）</h5>
                                <p>计算：3/5 × 7/8 + 3/5 × 1/8</p>
                                <p><strong>解：</strong></p>
                                <p>= 3/5 × (7/8 + 1/8)</p>
                                <p>= 3/5 × 1</p>
                                <p>= <strong>3/5</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2（乘法分配律）</h5>
                                <p>计算：(1/4 + 2/3) × 24</p>
                                <p><strong>解：</strong></p>
                                <p>= 1/4 × 24 + 2/3 × 24</p>
                                <p>= 6 + 16</p>
                                <p>= <strong>22</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>运用分配律时一定要乘到每一项</li>
                                <li>分数化简后再进行简便运算</li>
                                <li>没有简便算法时不要强求</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                },
                {
                    id: "5-3",
                    title: "复杂应用题综合练习",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 综合应用策略</h4>
                            <p>解决较复杂的分数应用题，需要综合运用<strong>画图分析、列方程、分步计算</strong>等多种方法。</p>
                            
                            <h4>📝 常用方法对比</h4>
                            <ul>
                                <li><strong>算术法</strong>：数量关系明确时直接用加减乘除</li>
                                <li><strong>方程法</strong>：逆向思维时设未知数列方程更简单</li>
                                <li><strong>画图法</strong>：用线段图、饼图辅助理解数量关系</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题1（综合运算）</h5>
                                <p>计算：1/2 + 1/3 × (5/6 - 1/4)</p>
                                <p><strong>解：</strong></p>
                                <p>先算括号：5/6 - 1/4 = 10/12 - 3/12 = 7/12</p>
                                <p>再算乘法：1/3 × 7/12 = 7/36</p>
                                <p>再算加法：1/2 + 7/36 = 18/36 + 7/36 = <strong>25/36</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2（应用）</h5>
                                <p>一批货物，第一天运走了1/4，第二天运走了剩下的2/3，还剩120吨。这批货物原来有多少吨？</p>
                                <p><strong>解：</strong></p>
                                <p>第一天剩下：1 - 1/4 = 3/4</p>
                                <p>第二天运走：3/4 × 2/3 = 1/2</p>
                                <p>两天共运走：1/4 + 1/2 = 3/4</p>
                                <p>还剩：1 - 3/4 = 1/4</p>
                                <p>原来吨数：120 ÷ 1/4 = <strong>480（吨）</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>多个分率要注意"单位1"是否一致</li>
                                <li>"剩下的几分之几"要先求剩下的分率</li>
                                <li>做完用结果反推验证一遍</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 30
                }
            ]
        },
        {
            id: 6,
            title: "第六单元：百分数",
            lessons: [
                {
                    id: "6-1",
                    title: "百分数的意义和写法",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 百分数的意义</h4>
                            <p><strong>百分数</strong>表示一个数是另一个数的百分之几。</p>
                            <p>百分数也叫<strong>百分率</strong>或<strong>百分比</strong>。</p>
                            
                            <h4>📖 读写方法</h4>
                            <ul>
                                <li><strong>写法</strong>：数字后面加上百分号"%"</li>
                                <li><strong>读法</strong>：先读"百分之"，再读数字</li>
                            </ul>
                            <p>例如：45% 读作"<strong>百分之四十五</strong>"</p>
                            <p>100% 读作"<strong>百分之一百</strong>"</p>
                            
                            <h4>📊 百分数与分数的区别</h4>
                            <ul>
                                <li>百分数<strong>不能带单位</strong>（因为表示比率）</li>
                                <li>分数既可以表示比率，也可以表示具体数量</li>
                                <li>百分数的分母固定是100</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>读出下面各百分数：</p>
                                <p>（1）65% → <strong>百分之六十五</strong></p>
                                <p>（2）0.5% → <strong>百分之零点五</strong></p>
                                <p>（3）120% → <strong>百分之一百二十</strong></p>
                                <p>（4）100% → <strong>百分之一百</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "6-2",
                    title: "百分数与小数、分数的互化",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 互化方法</h4>
                            
                            <h5>百分数 ⇌ 小数</h5>
                            <ul>
                                <li><strong>百分数→小数</strong>：去掉%号，小数点<strong>左移两位</strong></li>
                                <li><strong>小数→百分数</strong>：小数点<strong>右移两位</strong>，加上%号</li>
                            </ul>
                            
                            <h5>百分数 ⇌ 分数</h5>
                            <ul>
                                <li><strong>百分数→分数</strong>：写成分母是100的分数，再<strong>约分</strong></li>
                                <li><strong>分数→百分数</strong>：先化成小数（除不尽保留三位小数），再化成百分数</li>
                            </ul>
                            
                            <h4>📊 互化对照表</h4>
                            <table border="1" cellpadding="4" style="border-collapse:collapse;width:100%">
                                <tr><th>分数</th><th>小数</th><th>百分数</th></tr>
                                <tr><td>1/2</td><td>0.5</td><td>50%</td></tr>
                                <tr><td>1/4</td><td>0.25</td><td>25%</td></tr>
                                <tr><td>3/4</td><td>0.75</td><td>75%</td></tr>
                                <tr><td>1/5</td><td>0.2</td><td>20%</td></tr>
                                <tr><td>1/3</td><td>0.333...</td><td>33.3%</td></tr>
                            </table>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>（1）将45%化成小数：<strong>0.45</strong></p>
                                <p>（2）将0.35化成百分数：<strong>35%</strong></p>
                                <p>（3）将60%化成分数：60% = 60/100 = <strong>3/5</strong></p>
                                <p>（4）将3/4化成百分数：3/4 = 0.75 = <strong>75%</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "6-3",
                    title: "求百分率（出勤率、合格率、成活率等）",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 百分率的含义</h4>
                            <p><strong>百分率</strong>是指部分量占总量的百分之几。</p>
                            <p class="math-formula">百分率 = 部分量 ÷ 总量 × 100%</p>
                            
                            <h4>📖 常见的百分率公式</h4>
                            <ul>
                                <li><strong>出勤率</strong> = 出勤人数 ÷ 总人数 × 100%</li>
                                <li><strong>合格率</strong> = 合格数量 ÷ 总数量 × 100%</li>
                                <li><strong>发芽率</strong> = 发芽种子数 ÷ 种子总数 × 100%</li>
                                <li><strong>成活率</strong> = 成活数 ÷ 总数 × 100%</li>
                                <li><strong>含盐率</strong> = 盐的质量 ÷ 盐水质量 × 100%</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>某班有50人，今天出勤48人，出勤率是多少？</p>
                                <p><strong>解：</strong></p>
                                <p>出勤率 = 48 ÷ 50 × 100% = 0.96 × 100% = <strong>96%</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>用200粒种子做发芽试验，有190粒发芽，发芽率是多少？</p>
                                <p><strong>解：</strong></p>
                                <p>发芽率 = 190 ÷ 200 × 100% = 0.95 × 100% = <strong>95%</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>百分率<strong>不能超过100%</strong>（出勤率、合格率等）</li>
                                <li>百分率不写单位</li>
                                <li>百分率公式中×100%不可缺少</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "6-4",
                    title: "百分数应用题（折扣、税率、利率）",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 折扣</h4>
                            <p><strong>几折</strong>就是<a href="#" class="math-formula-inline">十分之几</a>，也就是<a href="#" class="math-formula-inline">百分之几十</a>。</p>
                            <ul>
                                <li>八折 = 80%</li>
                                <li>七五折 = 75%</li>
                                <li>五折 = 50%</li>
                            </ul>
                            <p class="math-formula">现价 = 原价 × 折扣</p>
                            
                            <h4>📖 税率</h4>
                            <p><strong>应纳税额</strong> = 应纳税所得额 × 税率</p>
                            <p class="math-formula">税款 = 收入 × 税率</p>
                            
                            <h4>📖 利率</h4>
                            <p><strong>利息</strong>的计算公式：</p>
                            <p class="math-formula">利息 = 本金 × 利率 × 存期</p>
                            <p>取回的钱 = 本金 + 利息</p>
                            
                            <div class="example-box">
                                <h5>📝 例题1（折扣）</h5>
                                <p>一件商品原价200元，打八折出售，现价是多少元？</p>
                                <p><strong>解：</strong>200 × 80% = 200 × 0.8 = <strong>160（元）</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2（折扣）</h5>
                                <p>一件衣服打九折后是270元，原价是多少？</p>
                                <p><strong>解：</strong>270 ÷ 90% = 270 ÷ 0.9 = <strong>300（元）</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题3（利率）</h5>
                                <p>小明把5000元存入银行，定期两年，年利率2.25%，到期后可得到利息多少元？</p>
                                <p><strong>解：</strong></p>
                                <p>利息 = 5000 × 2.25% × 2 = 5000 × 0.0225 × 2 = <strong>225（元）</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>打折问题：打几折就是乘以百分之几十</li>
                                <li>利率计算中存期单位要统一（年对应年利率）</li>
                                <li>税率、利率百分数要化为小数计算</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                },
                {
                    id: "6-5",
                    title: "稍复杂的百分数问题",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 常见题型</h4>
                            
                            <h5>类型一：已知比一个数多（少）百分之几是多少，求这个数</h5>
                            <p class="math-formula">单位"1" × (1 ± 百分数) = 对应量</p>
                            <p class="math-formula">对应量 ÷ (1 ± 百分数) = 单位"1"</p>
                            
                            <h5>类型二：求一个数比另一个数多（少）百分之几</h5>
                            <p class="math-formula">(大数 - 小数) ÷ 标准量 × 100%</p>
                            
                            <div class="example-box">
                                <h5>📝 例题1</h5>
                                <p>一件商品降价15%后售价340元，原价是多少元？</p>
                                <p><strong>解：</strong></p>
                                <p>降价15%，表明现价是原价的(1-15%)</p>
                                <p>现价 = 原价 × 85%</p>
                                <p>原价 = 340 ÷ 85% = 340 ÷ 0.85 = <strong>400（元）</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>某厂去年生产电视机2000台，今年生产了2500台，今年比去年增产了百分之几？</p>
                                <p><strong>解：</strong></p>
                                <p>增加量：2500 - 2000 = 500（台）</p>
                                <p>增产：500 ÷ 2000 × 100% = <strong>25%</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>"比谁多/少百分之几"中的标准量（单位"1"）要找准</li>
                                <li>降价后的价格 = 原价 × (1 - 降价百分率)</li>
                                <li>涨价后的价格 = 原价 × (1 + 涨价百分率)</li>
                                <li>注意区分"多百分之几"和"是百分之几"</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 30
                }
            ]
        },
        // ====== 下册 ======
        {
            id: 7,
            title: "第七单元：扇形统计图",
            lessons: [
                {
                    id: "7-1",
                    title: "扇形统计图的认识",
                    content: `
                        <div class="lesson-body">
                            <h4>📊 扇形统计图的特点</h4>
                            <p>扇形统计图用<strong>整个圆</strong>表示总数（也就是单位"1"），用圆内的<strong>扇形大小</strong>表示各部分占总数的百分比。</p>
                            
                            <h4>📊 与条形、折线统计图的对比</h4>
                            <table border="1" cellpadding="5" style="border-collapse:collapse;width:100%">
                                <tr><th>类型</th><th>特点</th><th>适用范围</th></tr>
                                <tr><td><strong>条形统计图</strong></td><td>便于看出数量的多少</td><td>比较多个数量</td></tr>
                                <tr><td><strong>折线统计图</strong></td><td>能反映数量增减变化趋势</td><td>变化趋势分析</td></tr>
                                <tr><td><strong>扇形统计图</strong></td><td>能看出部分与整体的关系</td><td>占比分析</td></tr>
                            </table>
                            
                            <h4>📖 如何读懂扇形统计图</h4>
                            <ul>
                                <li>整个圆代表<strong>100%</strong>（即总量）</li>
                                <li>每个扇形的<strong>圆心角</strong>大小反映所占百分比</li>
                                <li>圆心角 = 360° × 所占百分比</li>
                                <li>所有扇形的百分比加起来 = 100%</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>下面是六（1）班同学最喜欢的运动项目统计图（扇形图描述）。已知全班有50人，喜欢篮球的扇形占30%，喜欢足球的占20%，喜欢乒乓球的占28%，喜欢其他的占22%。喜欢篮球的有多少人？</p>
                                <p><strong>解：</strong></p>
                                <p>篮球人数 = 50 × 30% = 50 × 0.3 = <strong>15（人）</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>扇形统计图<strong>只能看出比例</strong>，不能直接看出具体数量</li>
                                <li>所有扇形百分比之和必须是100%</li>
                                <li>扇形大小要和百分比对应</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "7-2",
                    title: "扇形统计图的绘制和解读",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 扇形统计图的绘制步骤</h4>
                            <ol>
                                <li><strong>计算百分比</strong>：各部分 ÷ 总量 × 100%</li>
                                <li><strong>计算圆心角</strong>：360° × 各部分百分比</li>
                                <li><strong>画圆并分割</strong>：用量角器画出各扇形</li>
                                <li><strong>标注说明</strong>：写上名称和百分比</li>
                            </ol>
                            
                            <h4>📖 扇形统计图的解读</h4>
                            <ul>
                                <li>读图时先看<strong>标题</strong>和<strong>单位</strong></li>
                                <li>找到各部分<strong>百分比</strong>和<strong>对应的含义</strong></li>
                                <li>可以对比不同部分之间的<strong>大小关系</strong></li>
                                <li>结合总量可以求出各部分的<strong>具体数量</strong></li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>小明家上个月总支出是5000元，扇形统计图显示：食品支出占35%，交通占15%，教育占25%，其他占25%。</p>
                                <p>（1）教育支出了多少钱？</p>
                                <p><strong>解：</strong>5000 × 25% = 1250（元）</p>
                                <p>（2）食品比交通多支出多少钱？</p>
                                <p><strong>解：</strong>食品 = 5000×35% = 1750元，交通 = 5000×15% = 750元</p>
                                <p>食品比交通多 = 1750 - 750 = <strong>1000（元）</strong></p>
                                <p>（3）食品支出的圆心角是多少度？</p>
                                <p><strong>解：</strong>360° × 35% = 360° × 0.35 = <strong>126°</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                }
            ]
        },
        {
            id: 8,
            title: "第八单元：圆柱和圆锥",
            lessons: [
                {
                    id: "8-1",
                    title: "圆柱的认识",
                    content: `
                        <div class="lesson-body">
                            <h4>📐 圆柱的特征</h4>
                            <p>圆柱由<strong>两个底面</strong>和<strong>一个侧面</strong>组成：</p>
                            <ul>
                                <li><strong>底面</strong>：两个<strong>完全相同的圆</strong></li>
                                <li><strong>侧面</strong>：一个<strong>曲面</strong>，沿高展开是一个<strong>长方形</strong>（或正方形）</li>
                                <li><strong>高</strong>：两个底面之间的<strong>距离</strong>，有<strong>无数条</strong>高</li>
                            </ul>
                            
                            <h4>📐 圆柱各部分展开</h4>
                            <p>圆柱侧面沿高剪开，展开后得到：</p>
                            <ul>
                                <li>一个<strong>长方形</strong>：长 = 底面周长（2πr），宽 = 圆柱的高</li>
                                <li>当底面周长 = 高时，展开是<strong>正方形</strong></li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>一个圆柱的底面半径是3厘米，高是10厘米。它的侧面展开图的长和宽各是多少？</p>
                                <p><strong>解：</strong></p>
                                <p>展开图（长方形）：</p>
                                <p>长 = 底面周长 = 2πr = 2 × 3.14 × 3 = <strong>18.84（厘米）</strong></p>
                                <p>宽 = 圆柱的高 = <strong>10（厘米）</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "8-2",
                    title: "圆柱的表面积",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 圆柱表面积公式</h4>
                            <p>圆柱的表面积 = <strong>侧面积 + 底面积 × 2</strong></p>
                            
                            <h5>侧面积</h5>
                            <p class="math-formula">侧面积 = 底面周长 × 高 = 2πr × h</p>
                            
                            <h5>底面积</h5>
                            <p class="math-formula">底面积 = πr²</p>
                            
                            <h5>表面积</h5>
                            <p class="math-formula">S表 = 2πrh + 2πr²</p>
                            <p>也可以写作：</p>
                            <p class="math-formula">S表 = 2πr(h + r)</p>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>一个圆柱形茶叶桶，底面半径是5厘米，高是12厘米。做一个茶叶桶至少需要多少平方厘米铁皮？</p>
                                <p><strong>解：</strong></p>
                                <p>侧面积 = 2πrh = 2 × 3.14 × 5 × 12 = 376.8（cm²）</p>
                                <p>底面积 = πr² = 3.14 × 5² = 78.5（cm²）</p>
                                <p>表面积 = 376.8 + 78.5 × 2 = <strong>533.8（平方厘米）</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>区分"表面积""侧面积"和"底面积"的不同含义</li>
                                <li>实际问题注意是否需要两个底（如无盖圆柱只算1个底）</li>
                                <li>计算时π一般取3.14，有说明按题目要求取值</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 25
                },
                {
                    id: "8-3",
                    title: "圆柱的体积",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 圆柱体积公式</h4>
                            <p>圆柱的体积 = <strong>底面积 × 高</strong></p>
                            <p class="math-formula">V = Sh = πr²h</p>
                            
                            <h4>📖 公式推导（转化法）</h4>
                            <p>将圆柱<strong>沿底面半径切开</strong>，拼成一个近似的长方体：</p>
                            <ul>
                                <li>长方体的底面积 = 圆柱的底面积</li>
                                <li>长方体的高 = 圆柱的高</li>
                                <li>所以圆柱体积 = 底面积 × 高</li>
                            </ul>
                            <p>分的份数越多，拼成的图形越接近长方体。</p>
                            
                            <div class="example-box">
                                <h5>📝 例题1</h5>
                                <p>一个圆柱的底面半径是3厘米，高是10厘米，体积是多少？</p>
                                <p><strong>解：</strong></p>
                                <p>V = πr²h = 3.14 × 3² × 10</p>
                                <p>= 3.14 × 9 × 10 = <strong>282.6（立方厘米）</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>一个圆柱形水桶，底面直径是4分米，高是5分米，能装水多少升？</p>
                                <p><strong>解：</strong></p>
                                <p>r = 4÷2 = 2（分米）</p>
                                <p>V = 3.14 × 2² × 5 = 3.14 × 4 × 5 = 62.8（立方分米）</p>
                                <p>62.8立方分米 = <strong>62.8升</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>区分半径和直径，给的是直径要先÷2</li>
                                <li>体积单位是"立方"，面积单位是"平方"</li>
                                <li>容积单位换算：1dm³ = 1L，1cm³ = 1mL</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 25
                },
                {
                    id: "8-4",
                    title: "圆锥的认识",
                    content: `
                        <div class="lesson-body">
                            <h4>📐 圆锥的特征</h4>
                            <ul>
                                <li>圆锥有<strong>1个顶点</strong>、<strong>1个底面</strong>、<strong>1个侧面</strong></li>
                                <li><strong>底面</strong>是一个<strong>圆形</strong></li>
                                <li><strong>侧面</strong>是一个<strong>曲面</strong>，展开后是一个<strong>扇形</strong></li>
                                <li><strong>高</strong>：从顶点到底面圆心的距离，有<strong>1条</strong>高</li>
                            </ul>
                            
                            <h4>📐 圆锥与圆柱的对比</h4>
                            <table border="1" cellpadding="5" style="border-collapse:collapse;width:100%">
                                <tr><th>特征</th><th>圆柱</th><th>圆锥</th></tr>
                                <tr><td>顶点</td><td>无顶点</td><td>1个顶点</td></tr>
                                <tr><td>底面</td><td>2个相同的圆</td><td>1个圆</td></tr>
                                <tr><td>侧面</td><td>曲面（展开为长方形）</td><td>曲面（展开为扇形）</td></tr>
                                <tr><td>高</td><td>无数条</td><td>1条</td></tr>
                            </table>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>一个圆锥的底面半径是4厘米，高是6厘米。它的底面周长和底面面积各是多少？</p>
                                <p><strong>解：</strong></p>
                                <p>底面周长 = 2πr = 2 × 3.14 × 4 = <strong>25.12（厘米）</strong></p>
                                <p>底面面积 = πr² = 3.14 × 4² = <strong>50.24（平方厘米）</strong></p>
                            </div>
                        </div>
                    `,
                    difficulty: "easy",
                    estimatedTime: 15
                },
                {
                    id: "8-5",
                    title: "圆锥的体积",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 圆锥体积公式</h4>
                            <p>圆锥的体积 = <strong>1/3 × 底面积 × 高</strong></p>
                            <p class="math-formula">V = 1/3 Sh = 1/3 πr²h</p>
                            
                            <h4>📖 等底等高关系</h4>
                            <p>等底等高的圆柱和圆锥：</p>
                            <ul>
                                <li>圆柱体积 = 3 × 圆锥体积</li>
                                <li>圆锥体积 = 1/3 × 圆柱体积</li>
                            </ul>
                            <p>这就意味着：等底等高的圆柱和圆锥，<strong>圆柱体积是圆锥的3倍</strong>。</p>
                            
                            <h4>📖 实验验证</h4>
                            <p>用等底等高的圆柱和圆锥做倒水实验：</p>
                            <p>装满圆锥的水倒进圆柱，刚好倒<strong>3次</strong>才装满圆柱。</p>
                            <p>说明：圆锥体积 = 圆柱体积的<strong>1/3</strong>。</p>
                            
                            <div class="example-box">
                                <h5>📝 例题1</h5>
                                <p>一个圆锥的底面直径是6厘米，高是10厘米。体积是多少？（π取3.14）</p>
                                <p><strong>解：</strong></p>
                                <p>r = 6÷2 = 3（厘米）</p>
                                <p>V = 1/3 × 3.14 × 3² × 10</p>
                                <p>= 1/3 × 3.14 × 9 × 10</p>
                                <p>= 1/3 × 282.6 = <strong>94.2（立方厘米）</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>一个圆锥的体积是56.52立方厘米，底面积是28.26平方厘米，高是多少？</p>
                                <p><strong>解：</strong></p>
                                <p>V = 1/3 Sh ⇒ h = 3V ÷ S</p>
                                <p>h = 3 × 56.52 ÷ 28.26 = <strong>6（厘米）</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>圆锥体积公式中的<strong>1/3</strong>千万不能忘！</li>
                                <li>等底等高圆柱是圆锥体积的3倍</li>
                                <li>求高时记得先乘以3再除以底面积</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                }
            ]
        },
        {
            id: 9,
            title: "第九单元：比例",
            lessons: [
                {
                    id: "9-1",
                    title: "比例的意义和基本性质",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 比例的意义</h4>
                            <p><strong>比例</strong>：表示两个比相等的式子。</p>
                            <p class="math-formula">a : b = c : d （b≠0，d≠0）</p>
                            <p>例如：6:3 = 2:1，因为6:3=2，2:1=2，比值相等。</p>
                            
                            <h4>📖 比例的各部分名称</h4>
                            <p>在比例 a : b = c : d 中：</p>
                            <ul>
                                <li><strong>内项</strong>：b 和 c</li>
                                <li><strong>外项</strong>：a 和 d</li>
                                <li><strong>内项积</strong> = b × c</li>
                                <li><strong>外项积</strong> = a × d</li>
                            </ul>
                            
                            <h4>📖 比例的基本性质</h4>
                            <p><strong>在比例中，两个内项的积等于两个外项的积。</strong></p>
                            <p class="math-formula">a : b = c : d ⇒ b × c = a × d</p>
                            <p>这个性质非常重要，是解比例的基础。</p>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>判断下面哪一组中的两个比可以组成比例。</p>
                                <p>（1）6:9 和 8:12</p>
                                <p><strong>解：</strong></p>
                                <p>6:9 = 2/3，8:12 = 2/3，比值相等，可以组成比例。</p>
                                <p>验证内项积=外项积：6×12=72，9×8=72 ✓</p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>比和比例的区别：比是两个量相除；比例是两个比相等</li>
                                <li>判断是否成比例，可以比比值，也可以用基本性质</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "9-2",
                    title: "解比例",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 什么是解比例</h4>
                            <p>已知比例中的<strong>三项</strong>，求另一项，叫做<strong>解比例</strong>。</p>
                            
                            <h4>📖 解比例的方法</h4>
                            <p>利用<strong>比例的基本性质</strong>（内项积 = 外项积）：</p>
                            <ol>
                                <li>设未知项为x</li>
                                <li>根据比例基本性质写成<strong>方程</strong></li>
                                <li><strong>解方程</strong></li>
                            </ol>
                            
                            <div class="example-box">
                                <h5>📝 例题1</h5>
                                <p>解比例：2:3 = x:12</p>
                                <p><strong>解：</strong></p>
                                <p>3x = 2 × 12</p>
                                <p>3x = 24</p>
                                <p>x = 8</p>
                                <p><strong>验算：</strong>2:3=2/3，8:12=2/3 ✓</p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2（含分数）</h5>
                                <p>解比例：1/2 : 1/3 = x : 4</p>
                                <p><strong>解：</strong></p>
                                <p>内项积 = 外项积</p>
                                <p>1/3 × x = 1/2 × 4</p>
                                <p>1/3 x = 2</p>
                                <p>x = 2 × 3 = <strong>6</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>内项积=外项积，注意哪两个是内项、哪两个是外项</li>
                                <li>解比例的结果要代入验算</li>
                                <li>遇到分数时注意正确处理</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "9-3",
                    title: "正比例（y/x=k一定）",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 正比例的意义</h4>
                            <p>两种<strong>相关联</strong>的量，一种量变化，另一种量也随着变化。</p>
                            <p>如果这两种量中<strong>相对应的两个数的比值（商）一定</strong>，</p>
                            <p>这两种量就叫作<strong>成正比例的量</strong>，它们的关系叫作<strong>正比例关系</strong>。</p>
                            <p class="math-formula">y/x = k（一定）</p>
                            
                            <h4>📖 正比例的判断方法</h4>
                            <ol>
                                <li>两种量<strong>相关联</strong>（一个变另一个跟着变）</li>
                                <li>它们的<strong>比值一定</strong>（y÷x = 固定值k）</li>
                                <li>两种量变化的<strong>方向相同</strong>（x变大y也变大）</li>
                            </ol>
                            
                            <h4>📖 常见正比例例子</h4>
                            <ul>
                                <li>路程 ÷ 时间 = 速度（一定）→ 路程与时间成正比例</li>
                                <li>总价 ÷ 数量 = 单价（一定）→ 总价与数量成正比例</li>
                                <li>工作总量 ÷ 工作时间 = 工作效率（一定）</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>判断下面各题中的两个量是否成正比例：</p>
                                <p>（1）圆的周长和它的直径</p>
                                <p><strong>解：</strong>C/d = π（一定），所以圆的周长和直径<strong>成正比例</strong>。</p>
                                <p>（2）正方形的边长和面积</p>
                                <p><strong>解：</strong>S= a²，S÷a = a（不一定），所以正方形的边长和面积<strong>不成</strong>正比例。</p>
                            </div>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "9-4",
                    title: "反比例（xy=k一定）",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 反比例的意义</h4>
                            <p>两种<strong>相关联</strong>的量，一种量变化，另一种量也随着变化。</p>
                            <p>如果这两种量中<strong>相对应的两个数的积一定</strong>，</p>
                            <p>这两种量就叫作<strong>成反比例的量</strong>，它们的关系叫作<strong>反比例关系</strong>。</p>
                            <p class="math-formula">x × y = k（一定）</p>
                            
                            <h4>📖 反比例的判断方法</h4>
                            <ol>
                                <li>两种量<strong>相关联</strong></li>
                                <li>它们的<strong>乘积一定</strong>（x×y = 固定值k）</li>
                                <li>两种量变化的<strong>方向相反</strong>（x变大y反而变小）</li>
                            </ol>
                            
                            <h4>📖 正反比例对比</h4>
                            <table border="1" cellpadding="5" style="border-collapse:collapse;width:100%">
                                <tr><th></th><th>正比例</th><th>反比例</th></tr>
                                <tr><td>关系式</td><td>y/x = k（一定）</td><td>xy = k（一定）</td></tr>
                                <tr><td>变化方向</td><td>相同</td><td>相反</td></tr>
                                <tr><td>图像</td><td>一条通过原点的直线</td><td>一条曲线</td></tr>
                            </table>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>判断下面各题中的两个量是否成反比例：</p>
                                <p>（1）长方形面积一定，长和宽</p>
                                <p><strong>解：</strong>长×宽=面积（一定），所以长和宽<strong>成反比例</strong>。</p>
                                <p>（2）路程一定，速度和时间</p>
                                <p><strong>解：</strong>速度×时间=路程（一定），所以速度和时间<strong>成反比例</strong>。</p>
                                <p>（3）一个人的年龄和身高</p>
                                <p><strong>解：</strong>年龄×身高≠固定值，所以<strong>不成</strong>反比例。</p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>正比例是比值（商）一定，反比例是乘积一定</li>
                                <li>判断时一定要验证"k"是否一定</li>
                                <li>两种量必须相关联才可能成比例</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "9-5",
                    title: "比例尺（数值比例尺、线段比例尺）",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 比例尺的意义</h4>
                            <p><strong>比例尺</strong>：图上距离与实际距离的比。</p>
                            <p class="math-formula">比例尺 = 图上距离 : 实际距离</p>
                            <p class="math-formula">图上距离 ÷ 实际距离 = 比例尺</p>
                            <p class="math-formula">实际距离 = 图上距离 ÷ 比例尺</p>
                            <p class="math-formula">图上距离 = 实际距离 × 比例尺</p>
                            
                            <h4>📖 比例尺的两种形式</h4>
                            <ul>
                                <li><strong>数值比例尺</strong>：如1:1000000，表示图上1厘米代表实际1000000厘米（10千米）</li>
                                <li><strong>线段比例尺</strong>：如"0 10 20 30千米"的线段图</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题1</h5>
                                <p>一幅地图的比例尺是1:500000，甲、乙两地的图上距离是4厘米，实际距离是多少千米？</p>
                                <p><strong>解：</strong></p>
                                <p>实际距离 = 4 ÷ 1/500000 = 4 × 500000 = 2000000（厘米）</p>
                                <p>2000000厘米 = <strong>20千米</strong></p>
                            </div>
                            
                            <div class="example-box">
                                <h5>📝 例题2</h5>
                                <p>A、B两地实际相距30千米，在地图上的距离是3厘米，这幅地图的比例尺是多少？</p>
                                <p><strong>解：</strong></p>
                                <p>30千米 = 3000000厘米</p>
                                <p>比例尺 = 3 : 3000000 = <strong>1:1000000</strong></p>
                            </div>
                            
                            <h4>⚠️ 易错提醒</h4>
                            <ul>
                                <li>比例尺是<strong>没有单位</strong>的（前项和后项单位要统一）</li>
                                <li>计算时<strong>先统一单位</strong></li>
                                <li>比例尺<strong>前项是1</strong>时表示缩小比例尺</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "hard",
                    estimatedTime: 25
                },
                {
                    id: "9-6",
                    title: "图形的放大与缩小",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 图形的放大</h4>
                            <p>把图形的各边按<strong>相同的比</strong>放大，原图与放大后的图形<strong>形状相同，大小不同</strong>。</p>
                            <p>比如按<strong>2:1</strong>放大，就是把每条边的长度都扩大到原来的2倍。</p>
                            
                            <h4>📖 图形的缩小</h4>
                            <p>把图形的各边按<strong>相同的比</strong>缩小，原图与缩小后的图形<strong>形状相同，大小不同</strong>。</p>
                            <p>比如按<strong>1:2</strong>缩小，就是把每条边的长度都缩小到原来的1/2。</p>
                            
                            <h4>📖 放大与缩小的关键</h4>
                            <ul>
                                <li>所有的边要<strong>按同样的比</strong>放大或缩小</li>
                                <li>放大或缩小后，图形<strong>形状不变</strong>（角度不变）</li>
                                <li>面积扩大（缩小）的倍数是边长倍数的<strong>平方</strong></li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>一个长方形的长是3厘米，宽是2厘米，按3:1放大后，长和宽各是多少厘米？面积扩大了多少倍？</p>
                                <p><strong>解：</strong></p>
                                <p>放大后长：3 × 3 = <strong>9（厘米）</strong></p>
                                <p>放大后宽：2 × 3 = <strong>6（厘米）</strong></p>
                                <p>原面积：3×2 = 6（平方厘米）</p>
                                <p>新面积：9×6 = 54（平方厘米）</p>
                                <p>面积扩大了：54÷6 = <strong>9倍</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>放大的比是"新:旧"（如3:1表示新边长是原来的3倍）</li>
                                <li>缩小的比也是"新:旧"（如1:3表示新边长是原来的1/3）</li>
                                <li>面积的变化倍数是边长变化倍数的平方</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                }
            ]
        },
        {
            id: 10,
            title: "第十单元：确定位置",
            lessons: [
                {
                    id: "10-1",
                    title: "用方向和距离确定位置",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 确定位置的两要素</h4>
                            <p>要确定一个物体的位置，需要知道：</p>
                            <ul>
                                <li><strong>方向</strong>（东、南、西、北等基本方向或偏角）</li>
                                <li><strong>距离</strong>（物体到观测点的距离）</li>
                            </ul>
                            <p>方向和距离<strong>缺一不可</strong>！</p>
                            
                            <h4>📖 方向描述方法</h4>
                            <ul>
                                <li><strong>东偏北</strong>：先向正东方向，再向北偏多少度</li>
                                <li><strong>北偏东</strong>：先向正北方向，再向东偏多少度</li>
                                <li>通常用"偏"字，也可以"东偏北30°"表示</li>
                            </ul>
                            
                            <h4>📖 描述路线图</h4>
                            <p>描述行走路线时，要<strong>依次</strong>说出：</p>
                            <ol>
                                <li>从哪儿出发</li>
                                <li>向什么方向走</li>
                                <li>走了多远</li>
                                <li>到达哪里</li>
                            </ol>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>学校的教学楼在图书馆的东偏南30°方向，距离图书馆200米。请描述图书馆在教学楼的什么方向？</p>
                                <p><strong>解：</strong></p>
                                <p>方向相反：两地的相对方向刚好相反</p>
                                <p>教学楼在图书馆的东偏南30°，</p>
                                <p>那么图书馆在教学楼的<strong>西偏北30°</strong>（或<strong>北偏西60°</strong>）方向200米处。</p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>描述方向时先定"正方向"再定"偏几度"</li>
                                <li>相对位置的方向是相反的</li>
                                <li>距离是相同的</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                },
                {
                    id: "10-2",
                    title: "坐标确定位置",
                    content: `
                        <div class="lesson-body">
                            <h4>📖 用数对表示位置</h4>
                            <p>在平面图上，可以用<strong>数对（列，行）</strong>来确定一个点的位置。</p>
                            <ul>
                                <li><strong>列</strong>：一般情况下从左往右数</li>
                                <li><strong>行</strong>：一般情况下从前往后数（从下往上数）</li>
                            </ul>
                            <p class="math-formula">数对 (a, b) 表示第a列第b行</p>
                            
                            <h4>📖 用数对描述路线</h4>
                            <p>在方格图中，可以用数对的变化来描述行走：</p>
                            <ul>
                                <li><strong>列变化</strong>（左右移动）：数对的第一个数变化</li>
                                <li><strong>行变化</strong>（上下移动）：数对的第二个数变化</li>
                            </ul>
                            
                            <div class="example-box">
                                <h5>📝 例题</h5>
                                <p>在方格图上，A点的位置是（2,3），B点的位置是（5,3）。</p>
                                <p>（1）A点向右移动3格后到哪个位置？</p>
                                <p><strong>解：</strong>列增加3，行不变。新位置 = (2+3, 3) = <strong>(5, 3)</strong></p>
                                <p>（2）A点向上移动2格后到哪个位置？</p>
                                <p><strong>解：</strong>列不变，行增加2。新位置 = (2, 3+2) = <strong>(2, 5)</strong></p>
                                <p>（3）A点和B点之间相距几格？</p>
                                <p><strong>解：</strong>5-2 = <strong>3格</strong></p>
                            </div>
                            
                            <h4>⚠️ 注意事项</h4>
                            <ul>
                                <li>数对中先写列（横轴），后写行（纵轴）</li>
                                <li>左右移动改"列"，上下移动改"行"</li>
                                <li>列和行从第1开始，不是从0开始</li>
                            </ul>
                        </div>
                    `,
                    difficulty: "medium",
                    estimatedTime: 20
                }
            ]
        }
    ],

    // 题库（50+道题，覆盖所有章节）
    questions: [
        // 第一单元：长方体和正方体
        {
            id: 1,
            chapter: 1,
            type: "choice",
            difficulty: "easy",
            content: "长方体有____个面、____条棱、____个顶点。",
            options: ["6、12、8", "6、8、12", "12、6、8", "8、12、6"],
            answer: 0,
            explanation: "长方体有6个面、12条棱、8个顶点。"
        },
        {
            id: 2,
            chapter: 1,
            type: "choice",
            difficulty: "easy",
            content: "一个长方体长8厘米、宽6厘米、高4厘米，棱长总和是____厘米。",
            options: ["72", "48", "36", "24"],
            answer: 0,
            explanation: "棱长总和 = (8+6+4)×4 = 18×4 = 72厘米"
        },
        {
            id: 3,
            chapter: 1,
            type: "choice",
            difficulty: "medium",
            content: "一个正方体的棱长是5厘米，它的表面积是____平方厘米。",
            options: ["150", "125", "100", "175"],
            answer: 0,
            explanation: "S = 6a² = 6×5² = 6×25 = 150平方厘米"
        },
        {
            id: 4,
            chapter: 1,
            type: "fill",
            difficulty: "medium",
            content: "一个长方体长6分米、宽4分米、高3分米，体积是____立方分米。",
            answer: "72",
            explanation: "V = 6×4×3 = 72立方分米"
        },
        {
            id: 5,
            chapter: 1,
            type: "fill",
            difficulty: "hard",
            content: "一个正方体棱长总和是36厘米，体积是____立方厘米。",
            answer: "27",
            explanation: "棱长 = 36÷12 = 3厘米，V = 3³ = 27立方厘米"
        },
        {
            id: 6,
            chapter: 1,
            type: "choice",
            difficulty: "hard",
            content: "一个长8分米、宽5分米、高4分米的无盖鱼缸，至少需要多少平方分米的玻璃？",
            options: ["144", "184", "160", "124"],
            answer: 0,
            explanation: "前后：2×8×4=64，左右：2×5×4=40，底：8×5=40，合计：64+40+40=144平方分米"
        },

        // 第二单元：分数乘法
        {
            id: 7,
            chapter: 2,
            type: "choice",
            difficulty: "easy",
            content: "3/5 × 10 = ?",
            options: ["6", "30/5", "3/50", "15"],
            answer: 0,
            explanation: "3/5 × 10 = 3×2 = 6（先约分：10÷5=2）"
        },
        {
            id: 8,
            chapter: 2,
            type: "choice",
            difficulty: "medium",
            content: "2/3 × 6/7 = ?",
            options: ["4/7", "12/21", "2/7", "8/21"],
            answer: 0,
            explanation: "2/3 × 6/7 = (2×6)/(3×7) = 12/21 = 4/7"
        },
        {
            id: 9,
            chapter: 2,
            type: "fill",
            difficulty: "medium",
            content: "果园有苹果树120棵，梨树的棵数是苹果树的3/4，梨树有____棵。",
            answer: "90",
            explanation: "120 × 3/4 = 90棵"
        },
        {
            id: 10,
            chapter: 2,
            type: "choice",
            difficulty: "easy",
            content: "5/8 的倒数是____。",
            options: ["8/5", "5/8", "8/5", "1"],
            answer: 0,
            explanation: "5/8的倒数是8/5"
        },
        {
            id: 11,
            chapter: 2,
            type: "fill",
            difficulty: "medium",
            content: "计算：(1/2 + 1/3) × 12 = ____。",
            answer: "10",
            explanation: "1/2×12 + 1/3×12 = 6 + 4 = 10"
        },
        {
            id: 12,
            chapter: 2,
            type: "fill",
            difficulty: "hard",
            content: "一袋大米50千克，第一天吃了1/5，第二天吃了剩下的1/4，第二天吃了____千克。",
            answer: "10",
            explanation: "第一天剩50×4/5=40千克，第二天40×1/4=10千克"
        },

        // 第三单元：分数除法
        {
            id: 13,
            chapter: 3,
            type: "choice",
            difficulty: "easy",
            content: "4/5 ÷ 2 = ?",
            options: ["2/5", "8/5", "3/5", "1/5"],
            answer: 0,
            explanation: "4/5 ÷ 2 = 4/5 × 1/2 = 4/10 = 2/5"
        },
        {
            id: 14,
            chapter: 3,
            type: "choice",
            difficulty: "medium",
            content: "6 ÷ 2/3 = ?",
            options: ["9", "4", "18", "12"],
            answer: 0,
            explanation: "6 ÷ 2/3 = 6 × 3/2 = 18/2 = 9"
        },
        {
            id: 15,
            chapter: 3,
            type: "fill",
            difficulty: "medium",
            content: "一个数的3/4是15，这个数是____。",
            answer: "20",
            explanation: "15 ÷ 3/4 = 15 × 4/3 = 20"
        },
        {
            id: 16,
            chapter: 3,
            type: "choice",
            difficulty: "hard",
            content: "比的前项是12，后项是18，比值是____。",
            options: ["2/3", "3/2", "6", "1.5"],
            answer: 0,
            explanation: "比值 = 前项÷后项 = 12÷18 = 2/3"
        },
        {
            id: 17,
            chapter: 3,
            type: "fill",
            difficulty: "hard",
            content: "小明看一本书，看了全书的2/5，正好是40页，这本书有____页。",
            answer: "100",
            explanation: "40 ÷ 2/5 = 40 × 5/2 = 100页"
        },
        {
            id: 18,
            chapter: 3,
            type: "choice",
            difficulty: "hard",
            content: "计算：5/6 - 1/3 ÷ 2/3 = ?",
            options: ["1/3", "2/3", "1/2", "5/6"],
            answer: 0,
            explanation: "先算除法：1/3÷2/3=1/2，再算减法：5/6-1/2=5/6-3/6=1/3"
        },

        // 第四单元：解决问题的策略
        {
            id: 19,
            chapter: 4,
            type: "choice",
            difficulty: "hard",
            content: "笼子里鸡和兔共8只，共有22条腿。鸡有多少只？",
            options: ["5", "3", "6", "2"],
            answer: 0,
            explanation: "假设全是鸡：8×2=16条，差6条，每只兔多2条，兔=6÷2=3只，鸡=8-3=5只"
        },
        {
            id: 20,
            chapter: 4,
            type: "fill",
            difficulty: "hard",
            content: "停车场共停着12辆车（汽车和三轮车），共有车轮40个，三轮车有____辆。",
            answer: "8",
            explanation: "假设全是汽车：12×4=48个，差8个，三轮车比汽车少1个轮，三轮车=8÷1=8辆"
        },

        // 第五单元：分数四则混合运算
        {
            id: 21,
            chapter: 5,
            type: "choice",
            difficulty: "medium",
            content: "3/4 + 1/2 × 2/3 = ?",
            options: ["13/12", "7/12", "5/4", "3/4"],
            answer: 0,
            explanation: "先乘：1/2×2/3=1/3，再加：3/4+1/3=9/12+4/12=13/12"
        },
        {
            id: 22,
            chapter: 5,
            type: "fill",
            difficulty: "medium",
            content: "计算：(3/4 - 1/2) ÷ 1/4 = ____。",
            answer: "1",
            explanation: "括号：3/4-1/2=1/4，除法：1/4÷1/4=1"
        },
        {
            id: 23,
            chapter: 5,
            type: "choice",
            difficulty: "hard",
            content: "简便计算：3/5 × 7/8 + 3/5 × 1/8 = ?",
            options: ["3/5", "7/5", "1", "21/40"],
            answer: 0,
            explanation: "提取公因数：3/5×(7/8+1/8)=3/5×1=3/5"
        },
        {
            id: 24,
            chapter: 5,
            type: "fill",
            difficulty: "hard",
            content: "一批货物，第一天运走1/4，第二天运走剩下的2/3，还剩120吨，原来有____吨。",
            answer: "480",
            explanation: "第一天剩3/4，第二天运走3/4×2/3=1/2，共运走1/4+1/2=3/4，剩1/4，120÷1/4=480吨"
        },

        // 第六单元：百分数
        {
            id: 25,
            chapter: 6,
            type: "choice",
            difficulty: "easy",
            content: "0.75化成百分数是____。",
            options: ["75%", "7.5%", "0.75%", "750%"],
            answer: 0,
            explanation: "小数点右移两位加%：0.75=75%"
        },
        {
            id: 26,
            chapter: 6,
            type: "fill",
            difficulty: "medium",
            content: "某班50人，今天出勤48人，出勤率是____%。",
            answer: "96",
            explanation: "48÷50×100%=96%"
        },
        {
            id: 27,
            chapter: 6,
            type: "fill",
            difficulty: "medium",
            content: "一件商品原价200元，打八折后的价格是____元。",
            answer: "160",
            explanation: "200×80%=200×0.8=160元"
        },
        {
            id: 28,
            chapter: 6,
            type: "choice",
            difficulty: "hard",
            content: "一件商品降价15%后售价340元，原价是____元。",
            options: ["400", "391", "289", "300"],
            answer: 0,
            explanation: "340÷(1-15%)=340÷0.85=400元"
        },
        {
            id: 29,
            chapter: 6,
            type: "choice",
            difficulty: "hard",
            content: "去年生产2000台，今年生产2500台，今年比去年增产____%。",
            options: ["25%", "20%", "125%", "80%"],
            answer: 0,
            explanation: "(2500-2000)÷2000×100%=500÷2000×100%=25%"
        },
        {
            id: 30,
            chapter: 6,
            type: "fill",
            difficulty: "medium",
            content: "用200粒种子做发芽试验，有190粒发芽，发芽率是____%。",
            answer: "95",
            explanation: "190÷200×100%=95%"
        },

        // 第七单元：扇形统计图
        {
            id: 31,
            chapter: 7,
            type: "choice",
            difficulty: "easy",
            content: "扇形统计图用____表示总数。",
            options: ["整个圆", "扇形的面积", "圆心角", "直径"],
            answer: 0,
            explanation: "扇形统计图中，整个圆表示总数（100%）"
        },
        {
            id: 32,
            chapter: 7,
            type: "fill",
            difficulty: "medium",
            content: "扇形统计图中，食品支出占35%的圆心角是____度。",
            answer: "126",
            explanation: "360°×35%=360×0.35=126°"
        },
        {
            id: 33,
            chapter: 7,
            type: "choice",
            difficulty: "medium",
            content: "全班50人，喜欢篮球占30%，喜欢篮球的有____人。",
            options: ["15", "20", "25", "10"],
            answer: 0,
            explanation: "50×30%=50×0.3=15人"
        },

        // 第八单元：圆柱和圆锥
        {
            id: 34,
            chapter: 8,
            type: "choice",
            difficulty: "easy",
            content: "圆柱有____条高。",
            options: ["无数", "1", "2", "12"],
            answer: 0,
            explanation: "圆柱两个底面之间的距离处处相等，有无数条高。"
        },
        {
            id: 35,
            chapter: 8,
            type: "fill",
            difficulty: "medium",
            content: "一个圆柱底面半径3厘米、高10厘米，体积是____立方厘米。（π取3.14）",
            answer: "282.6",
            explanation: "V=πr²h=3.14×9×10=282.6立方厘米"
        },
        {
            id: 36,
            chapter: 8,
            type: "choice",
            difficulty: "hard",
            content: "一个圆锥的底面直径6厘米、高10厘米，体积是多少？（π取3.14）",
            options: ["94.2", "282.6", "31.4", "188.4"],
            answer: 0,
            explanation: "r=3，V=1/3×3.14×9×10=94.2立方厘米"
        },
        {
            id: 37,
            chapter: 8,
            type: "fill",
            difficulty: "medium",
            content: "等底等高的圆柱体积是圆锥体积的____倍。",
            answer: "3",
            explanation: "等底等高的圆柱体积是圆锥体积的3倍"
        },
        {
            id: 38,
            chapter: 8,
            type: "choice",
            difficulty: "medium",
            content: "一个圆柱的底面半径是5厘米、高12厘米，它的表面积是多少？（侧面积+2个底面积，π取3.14）",
            options: ["533.8", "376.8", "157", "733.8"],
            answer: 0,
            explanation: "侧=2×3.14×5×12=376.8，底=3.14×25=78.5，S=376.8+78.5×2=533.8"
        },

        // 第九单元：比例
        {
            id: 39,
            chapter: 9,
            type: "choice",
            difficulty: "easy",
            content: "在比例a:b=c:d中，b和c叫做比例的____。",
            options: ["内项", "外项", "前项", "后项"],
            answer: 0,
            explanation: "a:b=c:d中，b和c是内项，a和d是外项"
        },
        {
            id: 40,
            chapter: 9,
            type: "fill",
            difficulty: "medium",
            content: "解比例：2:3 = x:12，x=____。",
            answer: "8",
            explanation: "3x=2×12=24，x=8"
        },
        {
            id: 41,
            chapter: 9,
            type: "choice",
            difficulty: "medium",
            content: "下面哪一对量成正比例？",
            options: ["速度一定，路程和时间", "路程一定，速度和时间", "面积一定，长和宽", "总价一定，单价和数量"],
            answer: 0,
            explanation: "速度一定时，路程÷时间=速度（一定），所以路程和时间成正比例"
        },
        {
            id: 42,
            chapter: 9,
            type: "choice",
            difficulty: "medium",
            content: "下面哪一对量成反比例？",
            options: ["路程一定，速度和时间", "速度一定，路程和时间", "单价一定，总价和数量", "工作效率一定，工作总量和工作时间"],
            answer: 0,
            explanation: "路程一定时，速度×时间=路程（一定），所以速度和时间成反比例"
        },
        {
            id: 43,
            chapter: 9,
            type: "fill",
            difficulty: "hard",
            content: "地图比例尺1:500000，图上距离4厘米表示实际____千米。",
            answer: "20",
            explanation: "4×500000=2000000厘米=20千米"
        },
        {
            id: 44,
            chapter: 9,
            type: "choice",
            difficulty: "hard",
            content: "长方形长3厘米、宽2厘米，按3:1放大后，面积扩大了____倍。",
            options: ["9", "3", "6", "12"],
            answer: 0,
            explanation: "边长扩大3倍，面积扩大3²=9倍"
        },

        // 第十单元：确定位置
        {
            id: 45,
            chapter: 10,
            type: "choice",
            difficulty: "easy",
            content: "确定一个物体的位置需要知道方向和____。",
            options: ["距离", "大小", "颜色", "形状"],
            answer: 0,
            explanation: "确定位置需要方向和距离两个要素"
        },
        {
            id: 46,
            chapter: 10,
            type: "fill",
            difficulty: "medium",
            content: "A点的位置是(2,3)，向右移动3格后位置是(____,3)。",
            answer: "5",
            explanation: "(2+3,3)=(5,3)"
        },
        {
            id: 47,
            chapter: 10,
            type: "choice",
            difficulty: "medium",
            content: "教学楼在图书馆的东偏南30°方向，图书馆在教学楼的____方向。",
            options: ["西偏北30°", "东偏北30°", "西偏南30°", "北偏东30°"],
            answer: 0,
            explanation: "相对方向相反，东偏南的相反方向是西偏北"
        },

        // 补充题目凑足50+
        {
            id: 48,
            chapter: 2,
            type: "choice",
            difficulty: "medium",
            content: "1/4 的倒数乘以 4/5 等于多少？",
            options: ["16/5", "4/5", "1/5", "1"],
            answer: 0,
            explanation: "1/4的倒数是4，4 × 4/5 = 16/5"
        },
        {
            id: 49,
            chapter: 3,
            type: "choice",
            difficulty: "medium",
            content: "一个三角形的三个内角度数比是1:2:3，这个三角形是____。",
            options: ["直角三角形", "锐角三角形", "钝角三角形", "等腰三角形"],
            answer: 0,
            explanation: "总份数6，最大角=3/6×180°=90°，所以是直角三角形"
        },
        {
            id: 50,
            chapter: 6,
            type: "fill",
            difficulty: "medium",
            content: "存入银行5000元，年利率2.25%，定期两年，到期利息是____元。",
            answer: "225",
            explanation: "5000×2.25%×2=5000×0.0225×2=225元"
        },
        {
            id: 51,
            chapter: 5,
            type: "choice",
            difficulty: "medium",
            content: "计算：1/2 + 1/3 × 3/4 = ?",
            options: ["5/8", "7/12", "5/6", "11/12"],
            answer: 0,
            explanation: "先乘：1/3×3/4=1/4，再加：1/2+1/4=2/4+1/4=3/4=5/8"
        },
        {
            id: 52,
            chapter: 8,
            type: "choice",
            difficulty: "medium",
            content: "圆锥有____个顶点、____个底面。",
            options: ["1个顶点、1个圆底面", "1个顶点、2个底面", "0个顶点、1个底面", "2个顶点、1个底面"],
            answer: 0,
            explanation: "圆锥有1个顶点和1个圆形底面"
        },
        {
            id: 53,
            chapter: 9,
            type: "fill",
            difficulty: "medium",
            content: "解比例：1/2 : 1/3 = x : 4，x = ____。",
            answer: "6",
            explanation: "内项积=外项积：1/3×x=1/2×4=2，x=2×3=6"
        },
        {
            id: 54,
            chapter: 4,
            type: "choice",
            difficulty: "medium",
            content: "鸡兔同笼共10个头28条腿，兔有____只。",
            options: ["4", "6", "3", "7"],
            answer: 0,
            explanation: "假设全是鸡：10×2=20，差8，兔=8÷2=4只"
        },
        {
            id: 55,
            chapter: 1,
            type: "fill",
            difficulty: "easy",
            content: "正方体有____条棱，全部的长度都相等。",
            answer: "12",
            explanation: "正方体有12条棱，且所有棱长度相等"
        }
    ],

    // AI辅导回复模板（与原来保持一致，略有扩充）
    tutorResponses: {
        greetings: [
            "你好！我是你的AI数学老师，有什么数学问题可以问我哦~",
            "嗨！今天想学什么数学知识呢？",
            "你好呀！数学学习上有任何疑问都可以问我！",
            "欢迎来到数学课堂！我们一起学习吧！",
            "准备好上课了吗？今天我们学点新知识！"
        ],
        encouragement: [
            "很好！继续加油！💪",
            "做得不错！保持这个状态！",
            "太棒了！你进步很大！",
            "很好理解！继续练习会更熟练的！",
            "答对了！你真是个数学小天才！🌟",
            "不着急，慢慢想，会越来越好的！",
            "错误是最好的学习机会，下次一定对！"
        ],
        hints: [
            "再想想，回忆一下我们学过的方法...",
            "试着画个图帮助理解？",
            "可以先找找题目中的关键信息...",
            "分步骤来做，一步一步来...",
            "有没有学过的类似题目可以参考？",
            "想想公式是什么？从已知条件开始推..."
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
        "不懂就问，及时解决疑问才能进步更快！",
        "把错题整理到错题本上，定期回顾。",
        "数学需要练习，但不是盲目刷题，要动脑思考。"
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
