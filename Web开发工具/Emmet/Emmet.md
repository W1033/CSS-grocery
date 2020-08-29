# Emmet

## Table Of Contents
1. VSCode 中使用 Emmet 设置
2. Emmet 官网文档
3. Emmet 常用语法
    + 3.1 基础用法
    + 3.2 进阶语法



## New Words
- **expansion [ɪk'spænʃ(ə)n] --n.扩张, 扩充**
    + Seagate expansion drive. 希捷扩展驱动器
    + expansion card. 扩展卡
    + expansion slots. 扩展槽
    + an expansion of a river. 河流的延伸部分




## Content
- Emmet (即之前著名的 Zen Coding) 是一个网页开发者工具, 可以大大地提高你的
  html & css 开发效率。
### 1. VSCode 中使用 Emmet 设置
- 默认情况下, VSCode 中按下 `Tab` 键不会启用 Emmet 展开缩写, 需要在
  `setting.json` 中添加设置:
  ```json
    {
        "emmet.triggerExpansionOnTab": true,
    }
  ```

### 2. Emmet 官网文档
- [Emmet 官网英文文档](https://docs.emmet.io/abbreviations/syntax/) 

### 3. Emmet 常用语法
- > [参考文章](https://www.cnblogs.com/summit7ca/p/6944215.html)
- 语法的基本规则如下:
  | 用法 | 说明 |
  |:---  |:--- |
  | E (`element`)| 代表 HTML 标签 |
  | E#id | 代表 id 属性 |
  | E.class | 代表 id 属性 |
  | E[attr=foo] | 代表某一个特定属性 |
  | E{foo} | 代表标签包含的内容是 foo. |
  | E>N | 代表 N 是 E 的子元素 |
  | E+N | 代表 N 是 E 的同级元素 |
  | E^N | 代表 N 是 E 的上级元素 |
#### 3.1 基础用法
- **元素 (Elements)**
    + 你可以使用元素的名称, 如 `div` 或 `p` 来生成 HTML 标签. Emmet
      没有一组可用的标签名称, 可以写任何单词并将其转换为标签.
      也就是只要知道元素的缩写, Emmet 会自动转换成对应标签. 形如:
      | 缩写 | 转换后对应标签 |
      |:------|:------|
      |div | `<div> </div>`|
      |foo | `<foo> </foo>`|
      |html:5 | 将生成 html5 标准的包含 body 为空基本 `dom`|
      |html:xt | 生成 XHTML 过渡文档类型, `DOCTYPE` 为 `XHTML`|
      |html:4s | 生成 HTML4 严格文档类型, `DOCTYPE` 为 `HTML 4.01`|
      |a:mail          |`<a href="mailto:"></a>`|
      |a:link          |`<a href="http://"></a>`|
      |base            |`<base href="">`|
      |br              |`<br>`|
      |link            |`<link rel="stylesheet" href="">`|
      |script:src      |`<script src=""></script>`|
      |form:get        |`<form action="" method="get"></form>`|
      |label           |`<label for=""></label>`|
      |input           |`<input type="text">`|
      |inp             |`<input type="text" name="" id="">`|
      |input:hidden    |`<input type="hidden" name=""> input:h亦可`|
      |input:email     |`<input type="email" name="" id="">`|
      |input:password  |`<input type="password" name="" id="">`|
      |input:checkbox  |`<input type="checkbox" name="" id="">`|
      |input:radio     |`<input type="radio" name="" id="">`|
      |select          |`<select name="" id=""></select>`|
      |option          |`<option value=""></option>`|
      |bq              |`<blockquote></blockquote>`|
      |btn             |`<button></button>`|
      |btn:s           |`<button type="submit"></button>`|
      |btn:r           |`<button type="reset"></button>`|
- **文本操作符 (Text)**: 如果想在生成元素的同时添加文本内容可以使用`{}`
  ```html
    <!-- Emmet 写法 -->
    div{这是一段文本}
    <!-- 转换后对应标签 -->
    <div>这是一段文本</div>

    <!-- Emmet 写法 -->
    a{点我点我}
    <!-- 转换后对应标签 -->
    <a href="">点我点我</a>  
  ```
- **属性操作符(Attribute operators)**: 属性运算符用于修改输出元素的属性.
    + (1) `id` 和 `Class` (`ele#id` and `ele.class`)
      ```html
        div.test  => <div class="test"></div>
        div#page => <div id="page"></div>
      ```
      隐式标签则会自动联想生成对应元素, 根据配置规则不同生成的结果也是不同的.
      ```html
        .class
        =>
        <div class></div>

        em>.class
        =>
        <em><span class></span></em>

        table>.row>.col
        =>
        <table>
            <tr class="row">
                <td class="col"></td>
            </tr>
        </table>
      ```
      绑定多个类名用
      ```html
        div.test1.test2.test3
        =>
        <div class="test1 test2 test3"></div>
      ```
    + (1) 自定义属性使用 [`attr1=''` `attr2=''`]
      ```html
        a[href='#' data-title='customer' target='_blank']
        =>
        <a href="#" data-title="customer" target="_blank"></a>
      ```
- **嵌套操作符(Nesting operators)**: 嵌套操作符用于将缩写元素放置在生成的树中,
  是否应放置在上下文元素的内部或附近.
    + 子级 **`>`**: 通过 `>` 标识元素可以生成嵌套子级元素, 可以配合元素属性进行连写.
      ```html
        div#page>ul>li 
        => 
        <div id="page">
            <ul>
                <li></li>
            </ul>
        </div>
      ```
    + 同级 **`+`**: `+` 字符表示生成兄弟级元素.
      ```html
        div#page+div.child
        =>
        <div id="page"></div>
        <div class="child"></div>
      ```
    + 父级 **`^`**: 用于生成父级元素的同级元素, 从这个字符所在位置开始,
      查找左侧最近的元素的父级元素并生成其兄弟级元素.
      ```html
        div>p.parent>span.child^ul.brother>li
        =>
        <div>
            <p class="parent"><span class="child"></span></p>
            <ul class="brother">
                <li></li>
            </ul>
        </div>
      ```
- **分组操作符(Grouping)**: 分组使用 **`()`** 来实现缩写的分离. 比如这个例子,
  如果不加括号那么 a 将作为 span 的子级元素生成. 加上括号 a 与 `()` 内的元素同级.
  ```html
    div>(ul>li+span)>a
    =>
    <div>
        <ul>
            <li></li>
            <span></span>
        </ul>
        <a href=""></a>
    </div>
  ```
- **乘法(Multiplication)**: 使用 N 即可自动生成重复项. N 是一个正整数.
  在使用时请注意 N 所在位置, 位置不同生成的结果不同.
  ```html
    ul>li*3
    =>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
  ```
- **自动计数(numbering)**: **`$`** 对生成的重复项增加一个序号.
  ```html
    ul>li.item${item number:$}*3
    <ul>
        <li class="item1">item number:1</li>
        <li class="item2">item number:2</li>
        <li class="item3">item number:3</li>
    </ul>
  ```
  如果生成两位数则使用两个连续的 **`$$`**, 更多位数以此类推...
  
  使用 **`@`** 修饰符, 可以更改编号方向(升序或降序) 和基数(例如起始值). 
  注意这个操作符在 `$` 之后添加
    + `@-`: 表示降序;
    + `@+`: 表示升序, 默认使用升序.

  `@N` 可以改变起始值. 需要注意的是如果配合升降序使用的话N是放到 `+/-` 符后.
  ```html
    ul>li.item$@-*3
    =>
    <ul>
        <li class="item3"></li>
        <li class="item2"></li>
        <li class="item1"></li>
    </ul>
    ---------------------------
    ul>li.item$@-10*3
    =>
    <ul>
        <li class="item12"></li>
        <li class="item11"></li>
        <li class="item10"></li>
    </ul>
  ```

#### 3.2 进阶语法
- **模拟文本/随机文本**
- **包装文本**
- ****