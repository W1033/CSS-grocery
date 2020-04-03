# CSS3 过渡(transiton) 和 动画(Animation)


## 目录(Catalog)
1. CSS3 transition (CSS3 过渡)
    + 1.1 css3 过渡介绍
    + 1.2 过渡属性
    + 1.3 贝塞尔曲线
        - 1.3.1 贝塞尔曲线简介
        - 1.3.2 使用示例
        - 1.3.3 几个常用的固定值对应的 `cubic-bezier` 值以及速度曲线
    + 1.4 基本示例
2. 



## 生词(New Words)
- **transition [træn'zɪʃən] --n.过渡; 转换; 变迁**
    + transition animation. 过渡动画
    + a period of transition. 过渡时期
- **duration [djʊ'reɪʃ(ə)n]/[du'reʃən] --n.持续时间; 时长; 期间.**
    + a long[short] duration. 长期[短期]的
    + for the duration of. ...(在)...的期间
    + for a duration of ten minutes. 十分钟的时间.
- **cubic ['kjuːbɪk] --adj.立方体的，立方的**
    + cubic content. 容积; 体积.
    + a cubic equation. 三次方程
    + The volume of this container is 1000 cubic metres.
      这个集装箱的容量是 1000 立方米.
- **volume ['vɒljuːm] --n.体积; 卷; 音量.**
    + the volume of water in a lake. 湖内水的容积.
    + He truned up[down] the volume on the television. 
      他把电视机的音量调大[小]了.
    + Our school has a library of 100,000 volumes.
      我们学校有一所藏书十万册的图书馆
- **bezier  贝塞尔**
- **curve [kɜːv] --n.曲线; 弯曲. --vt.使弯曲. --vi.成曲形. --adj.弯曲的**
    + in a curve(n). 成曲线地
    + a curve in the road(n). 道路的弯曲处.
    + go round[take, turn] a curve. 转弯
- **rotate [rə(ʊ)'teɪt]/['rotet] --vi.旋转;循环. --vt.使旋转; 使转动.**
    + The seasons rotate(vi). 四季周而复始.
    + the discovery that the earth rotates(vi). 地球自转的发现.
    + Your can rotate(vt) the wheel with your hand.
      你可以用手转动轮子.
    + This large gear turns the small one to rotate(vt) the cylinder.
      这个大齿轮带动小齿轮使滚动旋转.
- **skew [skjuː] --n.斜交,歪曲. --adj.斜的,歪曲的.**
    + 我们把不同在任何一个平面内的两条直线叫做**异面直线 (skew lines)**
    + The picture is a bit skew(adj). 这幅画有点歪.
- **scale [skeɪl] --n.刻度, 规模, 比例.  --v.攀登**
    + How much does it read on the scale? 刻度显示的是多少？  
- **translate [træns'leɪt] --vt.翻译;转化;解释. --vi.翻译**
    + translate into. 翻译成
    + Can you translate(vt) an English sentence into Japanese?
      你能把把英文句子翻译成日文?
    + How would you translate(vt) his conduct? 你如何解释它的举动呢?
    + I transalted(vt) his silence as a refusal.
      我把它的缄默解释为拒接.
    + I could hardly translate(vt) my thoughts into words.
      我几乎不能把我的想法用言语表达出来.
    + Her novels translate(vi) well. 她的小说容易翻译.
      

## 内容(Content)
### 1. CSS3 transition (CSS3 过渡)
##### 1.1 css3 过渡介绍
- CSS3 过渡是元素从一种样式逐渐改变为另一种的效果. 要实现这一点,
    必须规定 2 项内容:
    + (1) 你希望把效果添加到哪个 CSS 属性(e.g.
        `width`/`height`/`opacity`/...)上.
    + (2) 效果的时长. (Notice: 如果时长未规定, 则不会有过渡效果, 默认值为 0.)

##### 1.2 过渡属性
1. `transition`: 下面 4 种属性的简写.
2. `transition-property`(过渡属性): 应用过渡的 CSS 属性名
    (e.g. width/height/opacity/...).
3. `transition-duration`(过渡持续时间): 过渡效果的持续时间. 默认为 0. 
4. `transition-timing-function`(过渡时间函数): 过渡效果的时间曲线.
    默认是 "ease". 取值范围如下:
    + (1) `linear`:  匀速(cubic-bezier(0.00, 0.0, 1.0, 1.0))
    + (2) `ease`:   匀加速-匀减速 (cubic-bezier(0.25, 0.1, 0.25, 1))
    + (3) `ease-in`:  匀加速 (cubic-bezier(0.42, 0, 1, 1))
    + (4) `ease-out`: 匀减速 (cubic-bezier(0, 0, 0.58, 1))
    + (5) `ease-in-out`: 加速-减速 (cubic-bezier(0.42, 0, 0.58, 1))
5. `transition-delay`(过渡延迟): 规定过渡效果何时开始(即:多长时间后执行过渡).
   默认是 0.

##### 1.3 贝塞尔曲线
- 1.3.1 贝塞尔曲线简介
    + 在 `1.2 过渡属性` 的 `transition-timing-function(过渡时间函数)`
      属性中可以设置过渡效果的时间曲线, 这个 `cubic-bezier` 又称 **三次贝塞尔**,
      主要是为 `transition`, `animation` 生成速度曲线的函数, 规定是:
      `cubic-bezier(<x1>, <y1>, <x2>, <y2>)`.
      
      我们可以从下图中简要理解一下 `cubic-bezier`:

      <img src="">

- 1.3.2 使用示例
- 1.3.3 几个常用的固定值对应的 `cubic-bezier` 值以及速度曲线
##### 1.4 基本示例
    + 示例 (1): 向宽度, 高度和转换(transform)添加过渡效果:
      ```css
        div {
            transition: width 2s, height 2s, transform 2s;
            /* 带有浏览器前缀的兼容写法省略 ... */
        }
      ```
    + 示例 (2): 在一个示例中使用所有过渡属性:
      ```css
        div {
            transition: width 1s linear 2s;
            /* 简写属性等于下面的分开写法 */
            /*
            transition-property: width;
            transition-duration: 1s;
            transition-timing-function: linear;
            transition-delay: 2s;
             */
        }
      ```




### transform -- 改变 :
transform的属性包括: rotate() / skew() / scale() /  translate()
transform:translate()：变动，位移