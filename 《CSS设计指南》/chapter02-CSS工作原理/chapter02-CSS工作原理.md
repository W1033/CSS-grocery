# 第 2 章 -- CSS 工作原理



## Catalog
+ 2.1 剖析 CSS 规则
    - CSS 规则命名惯例
+ 2.2 上下文选择符 
+ 2.3 特殊的上下文选择符
    - 2.3.1 子选择符 `>` 
    - 2.3.2 紧邻同胞选择符 `+` 
    - 2.3.3 一般同胞选择符 `~` 
    - 2.3.4 通用选择符 `*`
+ 2.4 ID 和类选择符
    - 2.4.1 类属性 
    - 2.4.2 ID 属性
    - 2.4.3 什么时候用 ID, 什么时候用类 
    - 2.4.4 ID 和类的小结 
+ 2.5 属性选择符
    - 2.5.1 属性名选择符
    - 2.5.2 属性值选择符
    - 2.5.3 属性选择符的小结
+ 2.6 伪类 
    - 2.6.1 UI 伪类
    - 2.6.2 结构化伪类
+ 2.7 伪元素 
+ 2.8 继承 
+ 2.9 层叠 
    - 2.9.1 样式来源 
    - 2.9.2 层叠规则 
    - 2.9.3 计算特指度
+ 2.10 规则声明
    - 2.10.1 文本值
    - 2.10.2 数字值
    - 2.10.3 颜色值
+ 2.11 小结 





## New Words
- **descendant [dɪ'sɛndənt] --n.后代; 后裔, 儿孙. --adj.起源的.**
    + female descendant. 雌性后代
    + Chinese descendant. 炎黄子孙





## Content

### 2.1 剖析 CSS 规则
#### CSS 规则命名惯例


### 2.2 上下文选择符 
- 上下文选择符, 严格来讲(也就是 CSS 规范里), 叫
  `后代组合式选择符(descendant combinator selector) (或称: 后代选择器)`,
  **就是一组以空格分隔的标签名**. 用于选择作为指定祖先元素后代的标签.
  ```css
    article p {font-weight:bold;}
  ```
  这个例子中的上下文选择符表明, 只有是 article 后代的 p 元素才会应用后面的样式.

  换句话说, 上面这条规则的目标是位于 article 后代中的 p 元素.

  可以通过下面这段代码来更深入地理解上下文选择符的含义.
  ```html
    <body>
        <article>
            <h1>Contextual selectors are <em>very</em> selective</h1>
            <p>This example shows how to target a <em>specific</em> tag.</p>
        </article>
        <aside>
            <p>Contextual selectors are <em>very</em> useful!</p>
        </aside>
    </body>
  ```

### 2.3 特殊的上下文选择符
#### 2.3.1 子选择符 `>` 
#### 2.3.2 紧邻同胞选择符 `+` 
#### 2.3.3 一般同胞选择符 `~` 
#### 2.3.4 通用选择符 `*`


### 2.4 ID 和类选择符
#### 2.4.1 类属性 
#### 2.4.2 ID 属性
#### 2.4.3 什么时候用 ID, 什么时候用类 
#### 2.4.4 ID 和类的小结 


### 2.5 属性选择符
#### 2.5.1 属性名选择符
#### 2.5.2 属性值选择符
#### 2.5.3 属性选择符的小结


### 2.6 伪类 
- 伪类这个叫法源自它们与类相似, 但实际上并没有类(class)会附加到当前标记中的标签上. 
  伪类分两种:
    + UI(User Interface, 用户界面) 伪类会在 HTML
      元素处于某个状态时(比如鼠标指针位于链接上), 为该元素应用 CSS 样式. 
    + 结构化伪类会在标记中存在某种结构上的关系时
      (如某个元素是一组元素中的第一个或最后一个), 为相应元素应用 CSS 样式. 
#### 2.6.1 UI 伪类.
- UI 伪类会基于特定 HTML 元素的状态应用样式. 最常使用 UI 伪类的元素是链接
  (`a` 元素), 利用 UI 伪类, 链接可以在用户鼠标悬停时改变文本颜色, 
  或者去掉文本的下划线. 此外, 还可以有其他响应方式, 比如悬停时显示一个信息面板, 
  相关内容在我们讨论交互组件的时候再聊. 
##### 2.6.1.1 链接伪类
- 针对链接的伪类一共有 4 个, 因为链接始终会处于如下 4 种状态之一. 
    + `link`. 此时, 链接就在那儿等着用户点击. 
    + `visited`. 用户此前点击过这个链接. 
    + `hover`. 鼠标指针正悬停在链接上. 
    + `active`. 链接正在被点击(鼠标在元素上按下, 还没有释放). 
    
  以下就是这些状态对应的 4 个伪类选择符(使用了 a 选择符和一些示例声明):
  ```css
    a:link {color:black;}
    a:visited {color:gray;}
    a:hover {text-decoration:none;}
    a:active {color:red;}
  ```
  **Notice:** 一个冒号(`:`)表示伪类, 两个冒号(`::`)表示 CSS3 新增的伪元素.
  尽管浏览器目前都支持对 CSS 1 和 CSS 2 的伪元素使用一个冒号, 
  但希望你能习惯于用双冒号代替单冒号, 因为这些单冒号的伪元素最终可能都会被淘汰掉.
  更多相关信息, 可以参见这里: 
  http://www.w3.org/TR/2005/WD-css3-selectors-20051215/#pseudo-elements. 
  
  不一定非得把这 4 个状态都写出来. 如果你只想定义 `:link` 和 `:hover` 状态,
  大多数情况下这也足够了. 但如果你有一个长长的目录链接,
  那么用稍浅一些的颜色显示出那些已经访问过(`:visited`)(即点击过)的链接,
  对用户会很有帮助. 
  
  **Important:** 注意, 有些伪类可以用于任何元素, 而不仅仅是 `a` 元素. 比如,
  下面这条规则能让段落背景在鼠标悬停时变成灰色:
  ```css
    p:hover {
        background-color: gray;
    }
  ```
##### 2.6.1.2 `:focus` 伪类
- `e:focus`: 在这个以及后续的例子中, `e`(element) 表示任何元素, 如
  `p`/`h1`/`section`.等等.

  表单中的文本字段在用户单击它时会获得焦点, 然后用户才能在其中输入字符. 
  下面的规则:
  ```css
    input:focus {border: 1px solid blue;}
  ```
  会在光标位于 `input` 字段中时, 为该字段添加一个蓝色边框. 
  这样可以让用户明确地知道输入的字符会出现在哪里. 
##### 2.6.1.3 `:target` 伪类
- `e:target`: 如果用户点击一个指向页面中其他元素的链接,
  则那个元素就是目标(target), 可以用 `:target` 伪类选中它. 对于下面这个链接
  ```js
    <a href="#more_info">More Information</a>
  ```
  位于页面其他地方. ID 为 `more_info` 的那个元素就是目标. 该元素可能是这样的:
  ```html
    <h2 id="more_info">This is the information you are looking for.</h2>
  ```
  那么, 如下 CSS 规则
  ```css
    #more_info:target {background:#eee;}
  ```
  会在用户单击链接转向 ID 为 `more_info` 的元素时, 为该元素添加浅灰色背景. 

  维基百科在其引证中大量使用了 `:target` 伪类. 
  维基百科的引证链接就是正文里那些不起眼的数字链接. 引证本身则位于长长的页面的最下方.
  如果没有 `:target` 应用的突出显示, 很难知道你点击的链接对应着一大堆引证中的哪一个. 

#### 2.6.2 结构化伪类
##### 2.6.2.1 `:first-child` 和 `:last-child`
- 例如如下示例:
  ```html
    <style>
        ol.results li:first-child { color: blue; }
        ol.results li:last-child { color: red; }
    </style>

    <ol class="results">
        <li>My Fast Pony</li>
        <li>Steady Trotter</li>
        <li>Slow Ol' Nag</li>
    </ol>
  ```
  文本 "My Fast Pony" 就会变成蓝色. "Slow Ol’ Nag" 变成红色.
##### 2.6.2.2 `:nth-child(n)`
- `e:nth-child(n)`: e 表示元素名, n 表示一个数值(也可以使用 odd 或 even).
  例如:
  ```css
    li:nth-child(3)
  ```
  会选择一组 li 列表项中的每个第 3 项.

  还有其他一些结构化伪类, 完整的信息请参考这里: http://www.stylinwithcss.com. 


### 2.7 伪元素 
- 此章笔记见: `../../CSS-知识集合/CSS伪元素/CSS伪元素.md`


### 2.8 继承 


### 2.9 层叠 
#### 2.9.1 样式来源 
#### 2.9.2 层叠规则 
#### 2.9.3 计算特指度


### 2.10 规则声明
#### 2.10.1 文本值
#### 2.10.2 数字值
#### 2.10.3 颜色值


### 2.11 小结 