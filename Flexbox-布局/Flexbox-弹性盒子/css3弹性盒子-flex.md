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
    + He wrapped his favourite books in paper.
      他把自己最喜欢的书用纸抱起来。
- **justify ['dʒʌstə'fai](us) --vt.证明(...是正当的), 辩护.**
    + justify cotent 证明内容合理
    + The end justifies the means. (谚语)为达目的不择手段.
    + That you were drunk does not justify your violating the rule.
      喝醉酒并不能成为你违规的理由.
    + You're trying to justify your own weakness.  
      你只是在为自己的软弱寻找借口.
- **align [ə'laɪn] --vi.排列，排成一行**
    + align items 对齐项目
- **flow [fləʊ] --vi.流，流动. --vt.淹没. --n.流量，流动，泛滥**
    + to flow southwestward. 往西南方流。
    + flow control. 流量控制


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
- ![弹性容器描述](flexbox.png)  
- 每个弹性容器(flex-cotainer) 默认包含 2 根轴(axis):
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
    + 确立主轴: flex-direction 允许你更改伸缩容器的主轴方向，默认是row。 
    + `flex-direction: row / column / row-reverse / column-reverse;`  
1. **`flex-wrap [换行]`**: 
    + 使用 flex-wrap 你可以为伸缩容器创建多个伸缩行。这个属性接受以下值: 
    + nowrap(默认) / wrap / wrap-reverse /, 设置为 wrap, 在一个伸缩行容不下所有
      伸缩项目时，伸缩项目会换行到一条新增的伸缩行上。新增的伸缩行根据侧轴的方向添加。 
1. **`flex-flow [弹性流]`**: 
1. **`justify-content [主轴对齐]`**: 
    + 定义了在当前行上，弹性项目沿主轴如何排布。 
        + `justify-content: flex-start/flex-end/center/space-between/space-around;`
            - space-between 和 space-around 是分配伸缩项目之间空白空间的不同方法。     
1. **`align-items [侧轴对齐]`**: 
    + 定义了在当前行上，弹性项目沿侧轴默认如何排布 (调整伸缩项目在侧轴上的定位方式)。
    + `align-items: flex-start/flex-end/center/baseline/stretch;` 
1. **`align-content [堆栈伸缩行]`**: 
    + align-content 会更改 flex-wrap 的行为。它和 align-items 相似，但是不是
        对齐伸缩项目，对齐的是伸缩行。
    + stretch(默认) / flex-start / flex-end / center / space-between 
        / space-around 这些值与 justify-content 和 align-items中的值一样。
        具体效果见css3-flex弹性盒子.html 




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