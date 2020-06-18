# 第 5 章 -- 页面布局



## Catalog
+ 5.1 布局的基本概念 
    - 5.1.1 布局高度与布局宽度
+ 5.2 三栏 - 固定宽度布局
    - 5.2.1 为栏设定内边距和边框
+ 5.3 三栏 - 中栏流动布局
    - 5.3.1 用负外边距实现
    - 5.3.2 用 CSS3 单元格实现 
+ 5.4 多行多栏布局 
    - 5.4.1 CSS 选择符的实际应用
    - 5.4.2 内部 DIV 实战  
+ 5.5 小结  




## New Word
- **aside [ə'saɪd] --n.旁白; 私语; 悄悄话. --adv.在旁边. --prep.在...旁边**
    + turn aside(adv). 转向一边, 背过脸去.





## Content
### 5.1 布局的基本概念 
- 多栏布局有 3 种基本的实现方案: **固定宽度**, **流动**, **弹性**.
    + (1) 固定宽度布局: 
      
      固定宽度布局的大小不会随用户调整浏览器窗口大小而变化, 一般是 900 到 1100
      像素宽. 其中 960 像素是最常见的, 因为这个宽度适合所有现代显示器,
      而且能够被 16、 12、 10、 8、 6、 5、 4 和 3 整除,
      不仅容易计算等宽分栏的数量, 而且计算结果也能得到没有小数的像素数. 

    + (2) 流动布局: 
      流动布局的大小会随用户调整浏览器窗口大小而变化. 
      这种布局能够更好地适应大屏幕, 但同时也意味着放弃对页面某些方面的控制, 
      比如随着页面宽度变化, 文本行的长度和页面元素之间的位置关系都可能变化. 
      Amazon.com 的页面采用的就是流动中栏布局, 
      在各栏宽度加大时通过为内容元素周围添加空白来保持内容居中, 
      而且现在的导航条会在布局变窄到某个宽度时收缩进一个下拉菜单中,
      从而为内容腾出空间. 
      
      今天, 越来越多的浏览器都支持 CSS 媒体查询了. 
      这就让基于浏览器窗口宽度提供不同的 CSS 样式成为可能. 在这种形势下, 
      适应各种屏幕宽度的可变固定布局, 正逐步取代流动布局. 
      这种可变的固定布局能够适应最大和最小的屏幕, 业界称之为响应式设计. 
      本书第 8 章将专门介绍响应式设计相关的 CSS 技术. 

    + (3) 弹性布局: 
      弹性布局与流动布局类似, 在浏览器窗口变宽时, 不仅布局变宽, 
      而且所有内容元素的大小也会变化, 让人产生一种所有东西都变大了的感觉. 
      到目前为止, 我还没见过设计得非常好的弹性布局, 主要是因为它太过复杂了. 
      本章不介绍这种布局, 而只把笔墨花在固定宽度布局和流动布局上. 

  下面, 我们先来看一看页面的高度和宽度有什么区别.

#### 5.1.1 布局高度与布局宽度
- 在实际地创建页面布局之前, 我想先说说应该怎么看待布局的高度和宽度, 
  因为这两者的控制方法实在太不一样了. 
##### 5.1.1.1 布局高度
- 多数情况下, 布局中结构化元素(乃至任何元素)的高度是不必设定的. 事实上,
  我甚至想告诉你根本不应该给元素设定高度. 除非你确实需要这样做, 
  比如在页面中创造一个绝对定位的元素. 
  
  为什么正常情况下都应该保持元素 `height` 属性的默认值 `auto` 不变呢? 很简单,
  只有这样元素才能随自己包含内容的增加而在垂直方向上扩展. 
  这样扩展的元素会把下方的元素向下推, 而布局也能随着内容数量的增减而垂直伸缩. 
  假如你明确设定了元素的高度, 那么超出的内容要么被剪掉, 
  要么会跑到容器之外——取决于元素 `overflow` 属性的设定. 

##### 5.1.1.2 布局宽度
- 与高度不同, 我们需要更精细地控制布局宽度, 以便随着浏览器窗口宽度的合理变化,
  布局能够作出适当的调整, 确保文本行不会过长或过短. 如果随意给元素添加内边距、边框, 
  或者元素本身过大, 导致浮动元素的宽度超过包含元素的布局宽度, 
  那浮动元素就可能"躲"到其他元素下方. 
  
  当然啦, 即使必须设定栏宽, 也不要给包含在其中的内容元素设定宽度, 
  应该让这些内容元素自动扩展到填满栏的宽度.  本书前面已经讲过了, 
  这是块级元素的默认行为. 简言之, 就是让栏宽限制其中内容元素的宽度. 

  以上这些细节在实际地创建布局时会更容易明白. 眼下, 
  只要知道应该控制布局宽度, 而让内容决定布局高度这个一般原则就好了. 


### 5.2 三栏 - 固定宽度布局
#### 5.2.1 为栏设定内边距和边框
- 预防过大的元素:
    + (1) 比如, 应该预见到可能出现一些过大的元素. 
      如果将来有一张比浮动栏更宽的图片被放到栏中, 就会导致布局变宽, 
      而右边的栏又会滑到下方. 为此, 一个简单的预防措施就是添加一条
      ```css
      .inner img {
          max-width:100%;
        }
      ```
      声明, 以便限制图片的宽度不超过其父元素(在此就是内部 div).
    + (2) 另一个办法是给每个栏(或内部 div) 添加`overflow: hidden` 声明.
    + (3) 对一些长 URL, 甚至长单词 使用
      `word-wrap(自动换行): break-word`:
      只有当一个单词一整行都显示不下时才会拆分换行该单词.
      
        - 更过关于此属性的讲解见: `../../CSS-知识集合/CSS-知识集合.md`.

### 5.3 三栏 - 中栏流动布局
- 实现中栏流动布局有两种方法. 一种是在中栏改变大小时使用负外边距定位右栏,
  另一种是使用 CSS3 让栏容器具有类似表格单元的行为. 负外边距适合比较老的浏览器,
  而 CSS 的 table 属性则要简单得多. 本节介绍这两种方法. 
#### 5.3.1 用负外边距实现
- 实现三栏布局且让中栏内容区流动(不固定)的核心问题, 就是处理右栏的定位, 
  并在中栏内容区大小改变时控制右栏与布局的关系. 
  
  Web 开发人员 Ryan Brill 给出的解决方案是控制两个外包装(通过 ID 值为 wrapper)
  容器的外边距. 其中一个外包装包围所有三栏, 另一个外包装只包围左栏和中栏.

  实现代码如下:
  ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>5.3.1_用负外距实现中栏流动布局</title>
        <link rel="stylesheet" href="../../typo.css">
        <style>
            body {
                /* - 1em = 16px;
                *     + 1px = 0.0625em;
                *     + 4px = 0.25em;
                *     + 5px = 0.315em; (约等于 0.32em)
                *     + 6px = 0.375em;
                *     + 10px = 0.625em; (写为 0.62)
                *     + 20px = 1.25em; 
                */
                font-size: 1em;
            }
            
            .main-wrapper { min-width: 600px; max-width: 1280px; margin: 0 auto; }
            header{ padding: .32em .62em; background: #39b54a; }
            header h1 { font-size: 2.5rem; color: #fff; }

            /* - (1) 三栏外包装(包围全部三栏) */
            .three-column-wrap { width: 100%; overflow: auto;}
            /* - (2) 两栏外包装(包围左栏和中栏) */
            .two-column-wrap {
                /* - (3) 设置当前两栏外包装的 margin-right 为最右侧一栏宽度的负值.
                *   这样既可以把右栏拉到区块外边距腾出的位置上. 
                */
                float: left; width: 100%;
                margin-right: -260px;
                background: lightsalmon;
            }

            nav { 
                float: left; width: 160px; background: lightcoral;
                padding: 1.25em 0;
            }
            /* - 让子元素和边栏保持一定距离的边界. */
            nav > * { margin: 0 .625em; }
            nav li { margin-left: 1.8em; }
            nav a { font-weight: 800; font-size: .7em; color: #fff; }

            article { 
                width: auto;
                /* - (4) 给当前居中的流动栏设置左右外边距,
                *   宽度分别等于第一栏和第三栏的 width 宽度. 你可能会有疑问,
                *   上面 (2) 中不是已经给 two-column-wrap 设置了
                *   margin-right: -260px 让第 3 栏正常显示在布局中了吗,
                *   为什么还要给当前的中栏设置 margin-left/margin-right? 
                *   答: 因为第一栏的(nav) 和第三栏的(aside) 现在的布局都是
                *   浮动(float)的, 只有当前第二栏是正常布局, 浮动布局已经不再
                *   正常的文档流中了, 所以如果我们不给当前第二栏设置 margin-left
                *   和 margin-right, 那么第一栏和第三栏的内容就会覆盖在第二栏的上面.
                *   具体效果请自行注释查看.
                */ 
                margin-left: 160px;
                margin-right: 260px;
                background: #fff; padding: 1.25em 0;
            }
            article > * { margin: 0 1.25em; }
            article h2, ol { font-weight: 700; font-size: 1.25rem; }
            article ol li {
                display: list-item;
                list-style: decimal inside none;
            }
            article h3 { font-size: 1.15rem; }
            article p, li { font-weight: 300; font-size: 1rem; }
            article code { font-size: .9rem; }

            /* - 第三栏 aside 也需要 float */
            aside {
                float:left; width: 260px; background:moccasin;
                padding: 1.25em 0;
            }
            aside > * { margin: 0 .625em; }
            aside p { line-height: 1.5em; }

            footer { clear: both; width: 100%; text-align: center; background: #000; }
            footer p { font-weight: 600; font-size: .7rem; color: #fff; }
            footer a { font-size: 1rem; color: #ffed53; }
        </style>
    </head>
    <body>
        <div class="main-wrapper">
            <header>
                <h1>A Three-Column Fluid Center Layout</h1>
            </header>

            <div class="three-column-wrap">
                <!-- start two-column-wrap -->
                <div class="two-column-wrap">
                    <nav>
                        <ul>
                            <li><a href="#">Nav Link 1</a></li>
                            <li><a href="#">Nav Link 2</a></li>
                        </ul>
                    </nav>

                    <article>
                        <h2>About This Layout</h2>
                        <p>
                            <strong>
                                This page is styled with 
                                <abbr title="Cascading Style Sheets">CSS</abbr>.
                                This layout uses negative margins to create this
                                feature-rich layout.
                            </strong>
                        </p>
                        <h3>Key Features</h3>
                        <p>Resize this page to see the following:</p>
                        <ol>
                            <li>
                                The center content column changes width as you
                                change the browser width.
                            </li>
                            <li>
                                The <code>min-width</code> setting prevents the
                                content being crushed down to nothing; once the
                                content reaches minimum width, the layout gets
                                no narrower.
                            </li>
                            <li>
                                The <code>max-width</code> setting prevents the
                                content getting too wide; once it reaches maximum
                                width, the layout gets no wider and the auto margins
                                center the layout in the browser window.
                            </li>
                            <li>
                                The footer sits below whichever column is longest.
                            </li>
                </ol>
                    </article>
                </div>
                <!-- end two-column-wrap -->
                
                <aside>
                    <h3>Sidebar Area</h3>
                    <p>
                        This column has a negative margin applied to it to draw it
                        inside of the full width content div. A positive margin on
                        the content div ensures there will be room for it.
                    </p>
                </aside>
            </div>

            <footer>
                <p>
                    A CSS template from
                    <a href="http://www.stylinwithcss.com">
                        <em>Stylin' with CSS, Third Edition</em>
                    </a>
                    by Charles Wyke-Smith
                </p>
            </footer>
        </div>
    </body>
    </html>
  ```
  下面简单说明其原理. 三栏中的右栏是 260px 宽. 为了给右栏腾出空间, 中栏 article
  元素有一个 260 像素的右外边距. 当然, 光有这个外边距只能把右栏再向右推 210 像素.
  别急, 包围左栏和中栏的两栏外包装上 210 像素的负右外边距,
  会把右栏拉回 article 元素右外边距(在两栏外包装内部右侧)创造的空间内.
  中栏 article 元素的宽度是 auto(原文 100%有错误.  ——译者注),
  因此它仍然会力求占据浮动左栏剩余的所有空间. 可是,
  一方面它自己的右外边距在两栏外包装内为右栏腾出了空间,
  另一方面两栏外包装的负右外边距又把右栏拉到了该空间内. 总之, 这是个很巧妙的设计.

#### 5.3.2 用 CSS3 单元格实现 
- 尽管利用 HTML 的 `<table>` 标签实现多栏布局是难以接受的, 但使用 CSS
  让布局形如表格则是绝对可以接受的. 这种方法不会导致固定不变的表格布局, 
  也不会出现难以重新应用样式的问题(比如在手持设备上表现为一栏). 说到创建布局, 
  表格的行为确实是非常符合要求的, 下面我来解释一下. 
  
  在最简单的情况下, 表格由三个元素构成. 一个表格外包装 `<table>`, 
  包含着表格行 `<tr>` 和表格数据 `<td>` , 比如下面这个例子:
  ```html
    <table>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
    </table>
  ```
  我们知道, CSS 可以把一个 HTML 元素的 `display` 属性设定为 `table`、
  `table-row` 和 `table-cell`. 通过这种方法可以模拟相应 HTML 元素的行为.
  而通过 CSS 把布局中的栏设定为 `table-cell` 有三个好处:
    + (1) 单元格( table-cell)不需要浮动就可以并排显示, 
      而且直接为它们应用内边距(`padding`)也不会破坏布局. 
    + (2) 默认情况下, 一行中的所有单元格高度相同, 因而也不需要人造的等高栏效果了. 
    + (3) 任何没有明确设定宽度的栏都是流动的. 
  
  不过, CSS3 表格行为是不支持 IE7 及更低版本, 不过已经 2020 年了, IE8
  都已经不做兼容了, 所以这个方法是最值得推荐的.

  关键是, 你甚至都不需要用 div 外包装来扮演 `table` 和 `tr` 元素, 
  仅仅是把三栏的 `display` 属性设定为 `table-cell` 就可以了. 
  浏览器的排版引擎在碰到没有表行(`tr`)的一组单元格时, 会自动为它们添加表行, 
  而在表行没有被 `table` 元素包围时, 会自动为表行添加 `table`. 因此, 
  你不需要多写任何标记, 只要把每一栏的 `display` 属性设定为 `table-cell`, 
  剩下的事儿就可全部交给浏览器负责了. 

  因此, 要实现一个三栏 - 流动中栏布局, 只需要一下标记:
  ```html
    <nav><!-- 内容 --></nav>
    <article><!-- 内容 --></article>
    <aside><!-- 内容 --></aside>
  ```
  和一下 CSS:
  ```css
    nav { 
        display: table-cell; width: 160px; background: lightcoral;
        padding: 1.25em 0;
    }
    article { 
        display:table-cell; width: auto; background: #fff;
        padding: 1.25em 0;
    }
    aside {
        display: table-cell; width: 260px; background:moccasin;
        padding: 1.25em 0;
    }
  ```
  完整代码见当前文件夹: `./5.3.2_用CSS3单元格实现中栏流动布局.html`

### 5.4 多行多栏布局 
- **Added:** `section` 使用说明: 

  一般通过是否包含一个标题 (`<h1>` - `<h6>`) 作为子节点来辨识每一个`<section>`.
  如果元素内容可以分为几个部分的话, 应该使用 `article` 而不是 `section`.
  
  不要把 `section` 元素作为一个普通的容器来使用, 这是本应该是 `div` 的用法
  (特别是当片段(the sectioning )仅仅是为了美化样式的时候). 一般来说, 
  一个 `section` 应该出现在文档大纲中. 
- 本章最后, 为了给第 7 章设计完整的网页做好准备, 我准备向大家展示一个更复杂,
  也更接近实际的页面框架. 这个页面的布局可以用作模板或一个公司网站的基础.

  前面的布局中只包含一个 article、一个 nav..., 因此比较容易选择,
  只要用标签名即可. 而在创建复杂布局时, 一个页面中会出现多个相同的标签, 
  选择的时候就要用上下文选择符来区分它们了. 我想通过下面的例子, 
  告诉你怎么给标记中添加最少的 ID 和类, 同时精确地选择任意元素. 

  本章前面说过, 使用 CSS3 的 `box-sizing:border-box` 声明, 
  可以避免利用内部 div 为内容添加边距. 可是, 这些内部元素, 无论是 div
  还是别的什么元素, 也能辅助添加各种样式, 这个例子会展示它们在这方面的用途. 

  这个布局(如图 5-13 所示)由六行组成, 其中第四行有三栏, 第五行有四栏. 

  布局代码见同级目录: `./5.4-多行多栏布局.html`

  **Notice:** 此 `./5.4-多行多栏布局.html` 页面的布局和作者的写法是有出入的,
  每行的排版被我改成了 flexbox 布局, 如果想看 float 浮动布局, 请查看作者的源代码.

#### 5.4.1 CSS 选择符的实际应用
- 随着页面变得越来越复杂, 相同的 HTML 元素(如 section, article, nav, 等等)
  会出现很多次——比如, 前面布局中的 article 就出现了 7 次. 为了选择某个元素,
  必须区分这些相同的标签名. 为此, 有些新手会给每个标签都添加一个不同的类名. 
  但这种做法是不值得提倡的.
  不仅因为类本身就不该这么用(类应该用于标记具有相同特征的元素),
  而且这么多类会把标记弄得很乱, 让 CSS 也很难看懂. 为了知道每个类代表哪个元素,
  你必须不断地查看 HTML. 
  
  **更好的做法是给标记中每个主要区域的顶级元素添加一个 ID, 这也是使用 ID 的正确方式,
  ID 就是标识页面中唯一元素用的. 然后, 这些 ID 就会成为 HTML 标记中的 "路标",
  放在上下文选择符开头的时候, 它们就能起到框定后代元素的作用.
  这就是在标记中保持类和 ID 属性最少的秘诀. 而且,
  相应的上下文选择符也能清晰地传达出路径信息, 让人从 CSS
  中一眼就能看出它要选择哪个元素.**
  
  英文中经常用 hook (这里译为 "路标", 也有译为"钩子"的),
  表示代码中一个唯一的参照点, 其他代码通过这个参照点可以与相应的代码交互.
  再看看前面的 HTML 标记. 其中的三个 ID 是我精确选择任意元素唯一必要的几个 "路标",
  即使再给布局中添加一些内容元素, 恐怕也用不着更多了, 顶多再多几个. 
#### 5.4.2 内部 DIV 实战  


### 5.5 小结  