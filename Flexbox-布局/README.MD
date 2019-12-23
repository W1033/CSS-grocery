## 待写的 flex 布局示例:
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [阮一峰 Flex Box 讲解](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [搞定 flex 布局](https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb)


# Flex 布局


## 目录 (Catalog)
- (1) Flex(弹性盒子) 布局是什么?
- (2) Flex 布局基本概念
- (3) 弹性容器(flex container) 的属性



## 生词 (New Words)
- **flexible ['fleksɪb(ə)l] --adj.柔软的，灵活的**
- **flex [fleks]  --v.弯曲，收缩**
- **axis ['æksɪs] --n.轴，轴线，中心线**
- **wrap [ræp] --v.包裹，包**
    + word wrap 自动换行
    + line wrap  n.自动换行
    + He wrapped his favorite books in paper.
      他把自己最喜欢的书用纸抱起来。
- **justify ['dʒʌstə'fai] (us) --vt.证明(...是正当的), 辩护.**
    + justify content 证明内容合理
    + The end justifies the means. (谚语)为达目的不择手段.
    + That you were drunk does not justify your violating the rule.
      喝醉酒并不能成为你违规的理由.
    + You're trying to justify your own weakness.  
      你只是在为自己的软弱寻找借口.
- **align [ə'laɪn] --vt.排列, 调整; 使一致. --vi.成一条线**
    + align item. 对齐项目
    + horizontal align. 水平对齐
    + How should we highlight the labels and how should we align them?
      我们应该怎么样高亮标签, 应该怎么样排列它们?
- **flow [fləʊ] --vi.流，流动. --vt.淹没. --n.流量，流动，泛滥**
    + to flow southwestward. 往西南方流。
    + flow control. 流量控制
- **stretch [strɛtʃ] --vt.拉长, 拉伸. --vi.伸展, 扩展, 延伸. --n.伸出, 伸开**
    + I stretched(vt) the pair of gloves to make them fit.  
      我撑开那双手套以使之方便戴上.
    + He stretched(vt) the rope tight. 他把绳索拉紧.
    + at full stretch(n). 尽全力地.
    + a wide stretch(n) of grass land. 一大片草原.
    + for a long stretch(n) of time. 一长段时间




## 内容 (Content)
### (1) Flex(弹性盒子) 布局是什么?
- 弹性盒子 (Flexible Box 或 Flexbox), 是一种用于在页面上布置元素的"布局模式"，
  使得当页面布局必须适应不同的屏幕尺寸和不同的显示设备时，元素可预测地运行。弹性盒子模型
  提供了对 块模型 的改进，因为它不使用浮动，flex 容器的边缘也不会与其内容的边缘折叠。  
- 弹性布局用来为盒装模型提供最大的灵活性.任何一个容器都可以指定为 Flex 布局. 代码如下:
  ```css
    /* - 只需要在元素上添加 display:flex 属性即可 */
    .box {
        display: flex;
    }
    /* - 行内元素也可以使用 Flex 布局 */
    .box {
        display: inline-flex;
    }
  ```
### (2) Flex 布局基本概念
- 弹性布局可以通过调整其内部元素的宽高, 从而在任何显示设备上实现对可用显示空间最佳填充
  的能力. 弹性容器扩展其内部元素来填充可用空间, 或将其收缩来避免溢出.
- 采用 Flex 布局的元素称为 Flex 容器(**flex container**), 简称 "容器". 它的所有
  子元素自动成为容器成员, 称为 Flex 项目(**flex item**),简称 "项目".  
- ![弹性容器描述](./images/flexbox.png)  
- 每个弹性容器(flex-container) 默认包含 2 根轴(axis):
    + (1) 主轴(main axis): 弹性项目(flex item) 沿其依次排列的那根轴称为主轴.
        - 主轴的开始位置(与边框的交叉点)叫做 main start, 结束位置叫做 main end.
    + (2) 侧轴/交叉轴(cross axis): 垂直于主轴的轴为侧轴.
        - 侧轴的开始位置叫做(cross start), 结束位置叫做(cross end).
- 项目默认沿主轴排列. 单个项目占据的主轴空间叫做 main size, 占据的 侧轴/交叉轴 空间
  叫做 cross size.
### (3) 弹性容器(flex container) 的属性: 设置在弹性容器上的属性有 6 个.
> [来源: 阮一峰的博客](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  
> [看看有没有可添加的内容](https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb)  

1. **`flex-direction [伸缩方向]`**: 
    + 确立主轴: flex-direction 允许你更改伸缩容器的主轴方向，默认是row。它有 4 个值: 
      ```css
        .box {
            flex-direction: row | row-reverse | colum | colum-reverse;
        }
      ```
        - row (默认值): 主轴为水平方向，起点在左端。
        - row-reverse: 主轴为水平方向，起点在右端。
        - column: 主轴为垂直方向，起点在上沿。
        - column-reverse: 主轴为垂直方向，起点在下沿。
2. **`flex-wrap [换行]`**: 
    + 默认情况下, 项目都排在一条线（又称"轴线"）上。flex-wrap 属性定义，如果一条轴线
      排不下，如何换行。 它有 3 个值: 
      ```css
        .box {
            flex-wrap: nowrap | wrap | wrap-reverse;
        }
      ```
        - (1) nowrap（默认）：不换行。
        - (2) wrap：换行，第一行在上方。
        - (3) wrap-reverse：换行，第一行在下方。
3. **`flex-flow [弹性流]`**: 
    + flex-flow 属性是 flex-direction 和 flex-wrap 的简写形式, 默认值是 
      `row nowrap`.
4. **`justify-content [主轴对齐]`**: (justify content. 证明内容合理)
    + 定义了弹性项目在主轴上的对齐方式。它包含 5 个值, 具体对其方式与轴的方向有关.
      下面假设主轴为从左到右.
      ```css
        .box {
            justify-content: flex-start | flex-end | center | 
                             space-between | space-around;
        }
      ```
        - <img src="./images/bg2015071010.png" 
                style="width: 66%; margin-left:0;">
        - flex-start（默认值）：左对齐
        - flex-end：右对齐
        - center： 居中
        - space-between：两端对齐，项目之间的间隔都相等。
        - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
5. **`align-items [侧轴对齐]`**:  (align items. 对齐项目)
    + 定义了弹性项目在侧轴(交叉轴)上的对齐方式。它包含 5 个值, 具体的对其方式与交叉轴的
      方向有关, 下面假设交叉轴从上到下. 
      ```css
        .box {
            align-item: flex-start | flex-end | center | baseline | stretch;
        }
      ```
        - <img src="./images/bg2015071011.png" 
                style="width: 66%; margin-left:0;">
        - flex-start: 交叉轴的起点对齐.
        - flex-end: 交叉轴的终点对齐.
        - center: 交叉轴的中点对齐.
        - baseline: 项目的第一行文字的基线对齐.
        - stretch(默认值): 如果项目位设置高度或设为 auto, 将占满整个容器的高度.
6. **`align-content [堆栈伸缩行]`**: (align content 对齐内容)
    + 定义了多根轴线的对其方式. 如果项目只有一根轴线, 该属性不起作用. [该属性对单行
      弹性盒子模型无效. 即: 带有 flex-wrap: nowrap].
      ```css
        .box {
            align-content: flex-start | flex-end | center | space-between | space-around;
        }
      ```
        - <img src="./images/bg2015071012.png" 
                style="width: 66%; margin-left:0;">



1. **align-self [自我对齐]**: 
    + 定义了单个弹性项目在侧轴上应当如何对齐，这个定义会覆盖由 align-items 所确立的默认值.        
1. **方向 [Direction]**: 
    + 弹性容器的主轴起点 (main start) / 主轴终点 (main end) 和 侧轴起点 
        (cross start) / 侧轴终点 (cross end) 描述了弹性项目排布的起点和终点。他们具体
        取决于弹性容器的主轴和侧轴中，由writing-mode确立的方向(从左到右，从右到左，等等)。
1. order 属性将元素与序号关联起来，依次决定哪些元素先出现。
1. flex-flow 属性是 flex-direction 和 flex-wrap 属性的简写，决定弹性项目如何排布。
1. 行 (Line): 根据 flex-wrap 属性，弹性项目可以排布在单个行或者多个行中。此属性控制
    侧轴的方向和新行排列的方向。
1. 尺寸(Dimension): 根据弹性容器的主轴和侧轴，弹性项目的宽和高中，对应主轴的称为
    "主轴尺寸(main size)"





## flexbox - 综合总结
> flex 布局发生在父容器和子容器之间。 父容器需要有 flex 的环境(display:flex)，子容器
  才能根据自身的属性来布局，简单来说，就是瓜分父容器的空间。 
- flex: flex-grow flex-shrink flex-basis; 不同比例 (设置在当前元素上)
    + [详细讲解](http://zhoon.github.io/css3/2014/08/23/flex.html)
    + flex-grow: (default:0) 索取父容器的剩余空间，默认值是0,。
    + flex-shrink: 定义子一个子容器的压缩比例。
    + flex-basis: width 的替代品，权限高于 width。


## 深入理解 css3 中的 flex-grow、flex-shrink、flex-basis 
> [详细讲解教程，需翻墙](http://zhoon.github.io/css3/2014/08/23/flex.html)
1. flex-grow
2. flex-basis: 如果伸缩元素设置了 flex-basis 或者 width, 那么在分配空间之前，他们会先跟
   父容器预约这么多的空间，剩下的才是归入到剩余空间，然后父容器再把剩余空间分配给设置了 
   flex-grow 的容器。如果同时设置 flex-basis 和 width , 那么 width 属性会被覆盖，也
   就是说 flex-basis 的优先级比 width 高。有一点需要注意，如果 flex-basis 和 width 其中
   有一个是 auto，那么另外一个非 auto 的属性优先级会更高。
3. flex-shrink
- flex: 语法讲解示例: 
    + ![flex语法详细讲解](flex-acronym.jpg)    
