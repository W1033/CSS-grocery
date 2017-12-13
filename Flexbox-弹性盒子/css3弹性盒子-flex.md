## 使用 CSS 弹性盒子

// flexible /'fleksɪb(ə)l/ adj.柔软的，灵活的
// flex /fleks/  v. 弯曲，收缩

### CSS3弹性盒子(Flexible Box 或 Flexbox),是一种用于在页面上布置元素的"布局模式"，使得当页面布局必须适应不同的屏幕尺寸和不同的显示设备时，元素可预测地运行。弹性盒子模型提供了对块模型的改进，因为它不实用浮动，flex容器的边缘也不会与其内容的边缘折叠。
- (1.) 弹性盒布局概念: 弹性布局是指通过调整其内部元素的宽高，从而在任何显示设备上实现对可用显示空间最佳填充的能力。 弹性容器扩展其内部元素来填充可用空间，或将其收缩来避免溢出。

- (2.) 弹性盒子布局: ![弹性容器描述](flexbox.png)
 + (2-1.) 弹性容器(Flex container): 包含着弹性项目的父元素。通过设置 display 属性的值为 flex 或 inline-flex来定义弹性容器。
               display: flex/inline-flex

 + (2-2.) 弹性项目(Flex item):弹性容器的每个子元素都称为弹性项目。弹性容器直接包含的文本将被包覆成匿名弹性单元。

 + (2-3.) 轴(Axis):        每个弹性框布局包含两个轴。弹性项目沿其依次排列的那根轴称为主轴(main axis)。垂直于主轴的轴为侧轴(cross axis).<br>
        1. flex-direction 【伸缩方向】 确立主轴。: flex-direction允许你更改伸缩容器的主轴方向，默认是row。 <br> 
                    - row/column/row-reverse/column-reverse; <br>
        2. justify-content【主轴对齐】 定义了在当前行上，弹性项目沿主轴如何排布。 [详细教程](http://www.w3cplus.com/blog/666.html) <br> 
                    - flex-start(默认)/flex-end/center/space-between/space-around/ : space-between 和 space-around 是分配伸缩项目之间空白空间的不同方法。<br> 
        3. align-items    【侧轴对齐】 定义了在当前行上，弹性项目沿侧轴默认如何排布(调整伸缩项目在侧轴上的定位方式)。 <br>
                    - flex-start(默认)/flex-end/center/baseline/stretch   <br>
        4. align-self     【自我对齐】 定义了单个弹性项目在侧轴上应当如何对齐，这个定义会覆盖由 align-items所确立的默认值。<br>
        5. flex-wrap      【换行】使用flex-wrap你可以为伸缩容器创建多个伸缩行。这个属性接受一下值:  wrap /ræp/ vt 包，隐藏 <br>
                    - nowrap(默认)/wrap/wrap-reverse/,设置为wrap,在一个伸缩行容不下所有伸缩项目时，伸缩项目会换行到一条新增的伸缩行上。新增的伸缩行根据侧轴的方向添加。 <br>
        6. align-content  【堆栈伸缩行】align-content会更改flex-wrap的行为。它和align-items相似，但是不是对齐伸缩项目，对齐的是伸缩行。<br>
                    - stretch(默认)/flex-start/flex-end/center/space-between/space-around 这些值与 justify-content 和 align-items中的值一样。具体效果见css3-flex弹性盒子.html  <br>

 + (2-4.) 方向(Direction):  弹性容器的主轴起点(main start)/主轴终点(main end) 和 侧轴起点(cross start)/侧轴终点(cross end)描述了弹性项目排布的起点和终点。他们具体取决于弹性容器的主轴和侧轴中，由writing-mode确立的方向(从左到右，从右到左，等等)。
        1. order 属性将元素与序号关联起来，依次决定哪些元素先出现。<br>
        2. flex-flow 属性是 flex-direction 和 flex-wrap 属性的简写，决定弹性项目如何排布。<br>

 + (2-5.) 行(Line):         根据flex-wrap属性，弹性项目可以排布在单个行或者多个行中。此属性控制侧轴的方向和新行排列的方向。
 + (2-6.) 尺寸(Dimension):  根据弹性容器的主轴和侧轴，弹性项目的宽和高中，对应主轴的称为"主轴尺寸(main size)"
 
 
### 深入理解css3中的flex-grow、flex-shrink、flex-basis 
  [详细讲解教程，需翻墙](http://zhoon.github.io/css3/2014/08/23/flex.html)
- 1. flex-grow
- 2. flex-basis: 如果伸缩元素设置了flex-basis或者width,那么在分配空间之前，他们会先跟父容器预约这么多的空间，剩下的才是归入到剩余空间，然后富容器再把剩余空间分配给设置了flex-grow的容器。如果同时设置flex-basis和width,那么width属性会被覆盖，也就是说flex-basis的优先级比width高。有一点需要注意，如果flex-basis和width其中有一个是auto，那么另外一个非auto的属性优先级会更高。
- 3. flex-shrink
+ flex: 语法讲解示例: 
 ![flex语法详细讲解](flex-acronym.jpg)