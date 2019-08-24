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


## 使用 CSS 弹性盒子

> 生词
- flexible ['fleksɪb(ə)l] --adj.柔软的，灵活的
- flex [fleks]  --v.弯曲，收缩
- axis ['æksɪs] --n.轴，轴线，中心线
- wrap [ræp] ---v.包裹，包
    + --> word wrap 自动换行
    + --> line wrap  n.自动换行
    + --> He wrapped his favourite books in paper.
      他把自己最喜欢的书用纸抱起来。


> CSS3弹性盒子 (Flexible Box 或 Flexbox),是一种用于在页面上布置元素的"布局模式"，使得当
  页面布局必须适应不同的屏幕尺寸和不同的显示设备时，元素可预测地运行。弹性盒子模型提供了对
  块模型的改进，因为它不使用浮动，flex 容器的边缘也不会与其内容的边缘折叠。
- (1.) 弹性盒布局概念: 弹性布局是指通过调整其内部元素的宽高，从而在任何显示设备上实现对可用
  显示空间最佳填充的能力。 弹性容器扩展其内部元素来填充可用空间，或将其收缩来避免溢出。
- (2.) 弹性盒子布局: ![弹性容器描述](flexbox.png)
    1. **弹性容器 [Flex container** 包含着弹性项目的父元素。通过设置 
       display: flex / inline-flex 来定义弹性容器。
    1. **弹性项目 [Flex item]**: 弹性容器的每个子元素都称为弹性项目。弹性容器直接包含的文本将
       被包覆成匿名弹性单元。
    1. **轴 [Axis]**: 
        + 每个弹性框布局包含两个轴。弹性项目沿其依次排列的那根轴称为
          主轴 (main axis)。垂直于主轴的轴为侧轴 (cross axis).
    1. **flex-direction [伸缩方向]** 
        + 确立主轴: flex-direction 允许你更改伸缩容器的主轴方向，默认是row。 
        + `flex-direction: row / column / row-reverse / column-reverse;`  
    1. **justify-content [主轴对齐]**: 
        + 定义了在当前行上，弹性项目沿主轴如何排布。 
        + [详细教程](http://www.w3cplus.com/blog/666.html)
        + `justify-content: flex-start/flex-end/center/space-between/space-around;`
            - space-between 和 space-around 是分配伸缩项目之间空白空间的不同方法。     
    1. **align-items [侧轴对齐]**: 
        + 定义了在当前行上，弹性项目沿侧轴默认如何排布 (调整伸缩项目在侧轴上的定位方式)。
        + `align-items: flex-start/flex-end/center/baseline/stretch;` 
    1. **align-self [自我对齐]**: 
        + 定义了单个弹性项目在侧轴上应当如何对齐，这个定义会覆盖由 align-items 所确立的默认值.
    1. **flex-wrap [换行]**: 
        + 使用 flex-wrap 你可以为伸缩容器创建多个伸缩行。这个属性接受以下值: 
        + nowrap(默认) / wrap / wrap-reverse /, 设置为 wrap, 在一个伸缩行容不下所有
          伸缩项目时，伸缩项目会换行到一条新增的伸缩行上。新增的伸缩行根据侧轴的方向添加。             
    1. **align-content [堆栈伸缩行]** : 
        + align-content 会更改 flex-wrap 的行为。它和 align-items 相似，但是不是
          对齐伸缩项目，对齐的是伸缩行。
        + stretch(默认) / flex-start / flex-end / center / space-between 
          / space-around 这些值与 justify-content 和 align-items中的值一样。
          具体效果见css3-flex弹性盒子.html 
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
 
