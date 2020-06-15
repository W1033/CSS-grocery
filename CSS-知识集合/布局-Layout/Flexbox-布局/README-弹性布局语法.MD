# Flex 弹性布局

## 目录 (Catalog)
- (1) Flex(弹性盒子) 布局是什么?
- (2) Flex 布局基本概念
- (3) 弹性容器(flex container) 的属性


## 生词 (New Words)
- **flexible ['fleksɪb(ə)l] --adj.柔软的, 灵活的**
- **flex [fleks]  --v.弯曲, 收缩**
- **axis ['æksɪs] --n.轴, 轴线, 中心线**
- **wrap [ræp] --v.包裹, 包**
    + word wrap 自动换行
    + line wrap  n.自动换行
    + He wrapped his favorite books in paper.
      他把自己最喜欢的书用纸包起来. 
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
- **flow [fləʊ] --vi.流, 流动. --vt.淹没. --n.流量, 流动, 泛滥**
    + to flow southwestward. 往西南方流. 
    + flow control. 流量控制
- **stretch [strɛtʃ] --vt.拉长, 拉伸. --vi.伸展, 扩展, 延伸. --n.伸出, 伸开**
    + I stretched(vt) the pair of gloves to make them fit.  
      我撑开那双手套以使之方便戴上.
    + He stretched(vt) the rope tight. 他把绳索拉紧.
    + at full stretch(n). 尽全力地.
    + a wide stretch(n) of grass land. 一大片草原.
    + for a long stretch(n) of time. 一长段时间
- **order ['ɔrdɚ] (US) --vt&vi.订购, 责令, 指令. --n.命令, 顺序, 秩序**
    + in the order(n) named. 依照所提的顺序
    + take things in order(n). 按顺序处理事情.
    + keep things in order(n). 把东西整理好.
    + the order(n) of nature [things]. 自然界[万物]的法则
    + all orders(n) and degrees of men. 各阶层的人.
    + a different order(n) of ideas. 不同种类的观念.
    + The policeman ordered(n) me back[away]. 警察命令我后腿[离开].
    + He was ordered(vt) out of the room. 他被命令离开那房间.
    + I will order(vt) some new books from England. 我要向英国订购一些新书.
    + She ordered(vt) herself a new dress. 她为自己订购了一件新衣.
    + He likes to ordered(vi) people around. 他喜欢差使人.
- **shrink [ʃrɪŋk] --vi.收缩, 缩小, 缩水. --vt.使...缩小, 缩短.**
    + flex shrink 弹性收缩
    + This cloth does not shrink(vi) in the wash. 这块不洗了不会缩水.
    + flex (up) with cold. 因寒冷而蜷缩身体.


## 内容 (Content)
### (1) Flex(弹性盒子) 布局是什么?
- 弹性盒子 (Flexible Box 或 Flexbox), 是一种用于在页面上布置元素的"布局模式", 
  使得当页面布局必须适应不同的屏幕尺寸和不同的显示设备时, 元素可预测地运行. 弹性盒子模型
  提供了对 块模型 的改进, 因为它不使用浮动, flex 容器的边缘也不会与其内容的边缘折叠.   
  
  弹性布局用来为盒装模型提供最大的灵活性.任何一个容器都可以指定为 Flex 布局. 代码如下:
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
  
  采用 Flex 布局的元素称为 Flex 容器(**flex container**), 简称 "容器". 它的所有
  子元素自动成为容器成员, 称为 Flex 项目(**flex item**),简称 "项目".  
  
  ![弹性容器描述](./images/flexbox.png)  
  
  每个弹性容器(flex-container) 默认包含 2 根轴(axis):
    + (1) 主轴(main axis): 弹性项目(flex item) 沿其依次排列的那根轴称为主轴.
        - 主轴的开始位置(与边框的交叉点)叫做 main start, 结束位置叫做 main end.
    + (2) 交叉轴/侧轴(cross axis): 垂直于主轴的轴为交叉轴.
        - 交叉轴的开始位置叫做(cross start), 结束位置叫做(cross end).
  
  项目默认沿主轴排列. 单个项目占据的主轴空间叫做 main size, 占据的 侧轴/交叉轴 空间
  叫做 cross size.

### (3) 弹性容器(flex container) 的属性: 设置在弹性容器上的属性有 6 个.
> [主要来源:阮一峰博客](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  
> [看看有没有可添加的内容](https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb)   
1. **`flex-direction [伸缩方向]`**: 确立主轴的伸缩方向
    + flex-direction 允许你更改伸缩容器的主轴方向, 默认是row. 它有 4 个值: 
      ```css
        .box {
            flex-direction: row | row-reverse | column | column-reverse;
        }
      ```
      | 属性值 | 描述 |
      |:------|:------ |
      |row (默认值) | 主轴为水平方向, 起点在左端 |
      |row-reverse | 主轴为水平方向, 起点在右端 |
      |column | 主轴为垂直方向, 起点在上沿 |
      |column-reverse | 主轴为垂直方向, 起点在下沿 |
2. **`flex-wrap [换行]`**: 是否换行
    + 默认情况下, 项目都排在一条线(又称"轴线")上. flex-wrap 属性定义,
      如果一条轴线排不下, 如何换行. 它有 3 个值: 
      ```css
        .box {
            flex-wrap: nowrap | wrap | wrap-reverse;
        }
      ```
      | 属性值 | 描述 |
      |:------|:------ |
      |nowrap (默认)| 不换行 |
      |wrap | 换行, 第一行在上方 |
      |wrap-reverse | 换行, 第一行在下方 |
3. **`flex-flow [弹性流]`**: 默认值 `row nowrap`, 为 `flex-direction`
   和 `flex-wrap` 的简写形式.
4. **`justify-content [主轴对齐]`**: (justify content. 证明内容合理)
    + 定义了弹性项目在主轴上的对齐方式. 它包含 5 个值, 具体对其方式与轴的方向有关.
      下面假设主轴为从左到右.
      ```css
        .box {
            justify-content: flex-start | flex-end | center | 
                            space-between | space-around;
        }
      ```
      <img src="./images/bg2015071010.png" style="width:60%; margin-left:0;">

      | 属性值 | 描述 |
      |:------|:------ |
      |flex-start (默认值)| 左对齐 |
      |flex-end | 右对齐 |
      |center |  居中 |
      |space-between | 两端对齐, 项目之间的间隔都相等. |
      |space-around | 每个项目两侧的间隔相等. 所以, 项目之间的间隔比项目与边框的间隔大一倍.|
5. **`align-items [交叉轴对齐]`**: (align items. 对齐项目)
    + 定义了弹性项目在侧轴(交叉轴)上的对齐方式. 它包含 5 个值, 具体的对其方式与交叉轴的
      方向有关, 下面假设交叉轴从上到下. 
      ```css
        .box {
            align-items: flex-start | flex-end | center | baseline | stretch;
        }
      ```
      <img src="./images/bg2015071011.png" style="width: 60%; margin-left:0;">

      | 属性值 | 描述 |
      |:------|:------ |
      |flex-start |  交叉轴的起点对齐.|
      |flex-end |  交叉轴的终点对齐.|
      |center |  交叉轴的中点对齐.|
      |baseline |  项目的第一行文字的基线对齐.|
      |stretch(默认值) |  如果项目位设置高度或设为 auto, 将占满整个容器的高度.|
6. **`align-content [堆栈伸缩行]`**: (align content 内容对齐)
    + 指定容器中存在多行情况下, 在交叉轴上, 行间对齐方式. {1}
      
      Note: 标注 {1} 来自 [Flex 排版源码分析](https://juejin.im/post/5ad1c4a8f265da2389262828)
    
      此属性是对 `flex-item` 一行放不下换行后的展示效果,
      所以该属性对单行弹性盒子模型无效; 带有 `flex-wrap: nowrap` 的也同理.
      
      ```css
        /* - 通过 MDN 的文档可以看出这个属性有很多情况 (详细见同级目录:
         *   `align-content.html`), 不过最常用的应该是下面 7 个. */
        .box {
            align-content: stretch | flex-start | flex-end | center 
                | space-between | space-around | space-evenly;
        }
      ```
      图一

      <img src="./images/bg2015071012.png"  style="width: 60%; margin-left:0;">
      
      图二: (代码示例见同级目录 `align-content_simplify.html`)  
      
      <img src="./images/align-content.png" style="margin-left:0;">

      | 属性值 | 描述 |
      |:------|:------|
      |stretch (默认) | 行在交叉轴上的大小进行拉伸, 铺满容器.|
      |flex-start | 行向交叉轴起点对齐.|
      |flex-end | 行向交叉轴终点对齐.|
      |center | 行在交叉轴上居中.|
      |space-between | 均匀排列每一行, 第一行放置于起点, 最后一行放置于终点.|
      |space-around | 均匀排列每一行, 每一行周围分配相同的空间.|

### (4) 弹性项目(flex item) 的属性: 同样也有 6 个属性.
1. **`order (顺序)`** : 指定项目的排列顺序. 数值越小排列越靠前, 默认为 0, 允许接受负值.
    + ```css
        .item {
            order: 0;
        }
      ```
2. **`flex-grow (弹性增长)`** : 指定项目的放大比例, 默认为 0 (即如果存在剩余空间,
   也不进行放大.)
    + ```css
        .item {
            flex-grow: 0; 
        }
      ```
      <img src="./images/bg2015071014.png" style="width: 76%; margin-left:0;">
   
      如果所有项目的 flex-grow 属性为 1, 则它们将等分剩余空间 (如果有的话). 如果一个
      项目的 flex-grow 属性为 2, 其他项目都为 1, 则前者占据的剩余空间将比其他项多一倍.
3. **`flex-shrink (弹性收缩)`** : 指定项目的缩小比例, 默认为 1, 即在空间不足(仅当
   不换行时候起效), 所有项目等比缩小, 当设置为 0 时, 该项目不进行缩小.
    + ```css
        .item {
            flex-shrink: 1;
        }
      ```
      如果所有项目的 flex-shrink 属性都为 1, 当空间不足时, 都将等比例缩小.
      如果一个项目的 flex-shrink 属性为 0, 其他项目都为 1, 则空间不足时,
      属性为 0 的不缩小, 为 1 等比例缩小.

      <img src="./images/bg2015071015.jpg" style="width: 76%; margin-left:0;">
4. **`flex-basis (弹性基础)`** 执行项目样式在主轴的初始大小, auto 的含义是参考 width
   或 height 的大小.
    + ```css
        .item {
            flex-basis: auto;
        }
      ```
      它可以设为跟 width/height 一样的值 (e.g.: 350px / 20%), 则项目占据固定空间.
5. **`flex`** : flex 属性时 flex-grow, flex-shrink, flex-basis 的简写, 描述
   弹性项目整体的伸缩性, 默认值为 `0 1 auto`. 后两个属性可选.
    + ```css
        .item {
            flex: 0 1 auto;
        }
      ```
      该属性有 2 个快捷键值: `auto(1 1 auto)` 和 `none(0 0 auto)`.
   
      建议优先使用这个属性, 而不是单独写 3 个分离的属性, 因为浏览器会推算相关值.
6. **`align-self (自我对齐)`** : 该属性允许单个项目可有与其他项目不一样的对齐方式, 
   该属性可覆盖 align-items 属性. 默认值为 auto, 表示继承父元素的 align-items 属性,
   如果没有父元素, 则等同于 stretch.
    + ```css
        .item {
            align-self: auto | flex-start | flex-end | center 
                | baseline | stretch;
        }
      ```
      <img src="./images/bg2015071016.png" style="width: 76%; margin-left:0;">
   
      该属性可取 6 个值, 除了 auto, 其他都与弹性容器上的 align-items 属性完全一样.  