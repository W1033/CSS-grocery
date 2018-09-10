## Sass(Syntactically Awesome StyleSheets)

```base
    1. syntactical /sin'tæktikəl/   adj. 句法的；依照句法的(等于 syntactic)
        --> syntactical analysis 句法分析
    2. syntax /'sɪntæks/            n. 语法；句法
        --> the syntax of English. 英语的句法。
    3. interpolation /ɪnˌtəpəʊˈleɪʃən/ n. 插入; 插值
    4. sassy  /'sæsɪ/               adj. 时髦的； 漂亮的
    5. partial /'pɑːʃ(ə)l/          adj. 局部的；偏爱的
    6. funky /'fʌŋkɪ/               adj. 时髦的；畏缩的
    7. fantasy /'fæntəsɪ/           n. 幻想；幻觉
    8. parentheses /pə'rɛnθəsɪz/    n. 圆括号
```


[官网中文文档](http://sass.bootcss.com/docs/sass-reference/)


### 语法: 
  - Sass 有2中语法: 
    + 第一种被称为 SCSs(Sassy CSS)，是一个 CSS3 语法的扩充版本，这份参考资料用的就是此语法。
    + 第二种比较老的语法称为缩排语法(或者称为"Sass")， 提供了一种更简洁的 CSS 书写方式。它不适用花括号，
    而是通过缩排的方式来表达选择符的嵌套层级, 而且也不适用分号，而是使用换行符来分割属性。
    
    
### CSS 扩展 (CSS Extensions)
  - 嵌套规则 (Nested Rules)
    + Sass 允许将一个 CSS 样式嵌套进另一个样式中，内层样式仅适用于外层样式的选择器范围内 (愚人码头注: 
       可以理解为层级选择器)，例如:
        ```base
          #main p {
              color: #00ff00; width: 97%;
              
              .redbox {background-color: #ff0000;color: #000000 }
          }
          编译为:
          #main p {...}
          #main p .redbox {...}
        ```
        ```base
            #main {
                width: 97%;
                
                p, div { 
                    font-size: 2em;
                    a { font-weith: bold; }
                }
                
                pre { font-size: 3em; }
            }
            编译后
            #main {...}
            #main p, #main div{...}
            #main p a, #main div a {...}
            #main in pre P{...}
        ```
        
  - 引用父选择器 `&` (Referencing Parent Selectors `&`)
    + 有些时候需要直接使用嵌套外层的父选择器，这个就很有用了，例如:
        ```base
            a {
                font-weight: bold; text-decortation: none;
                
                &:hover { text-decoration: underline; }
                body.firefox `&` { font-weight: normal; }
            }
            编译为
            a {...}
            a:hover {...}
            body.firefox a {...}        
        ```
    + 但也可以跟随后缀，将被添加到父选择器的后面，例如:
        ```base
            #main {
                color: black;
                &-sidebar { border: 1px solid; }
            }
            编译为
            #main {...}
            #main-sidebar { border: 1px solid; }
        ```
        
  
  - 嵌套属性 (Nested Properties)
    + CSS 中有一些属性遵循相同的“命名空间”; 比如, font-family, font-size 和 font-weight 都在
    font 命名空间中。在 CSS 中，如果你想在同一个命名空间中设置一串属性，你必须每次都输出。 Sass 为
    此提供了一个快捷方式: 只需要输入一次命名空间， 然后再其内部嵌套子属性。 例如:
    ```base
          .funky {
               font-family: fantasy;
               font-size: 30em;
               font-weight: bold;
          }
          命名空间也可以有自己的属性值，例如:
          .funky {
               font: 20px/24px fantasy {
                   weight: bold;
               }
          }
          编译为: 
          .funky {
              font: 20px/24px fantasy;
              font-weight: bold;
          }
    ```
    
  
  - 占位符选择器 : %foo (Placeholder Selector: %foo)
    + Sass 支持一种特殊类型的选择器，叫做“占位符选择器 (placeholder selector)”。 这些看起来像 class 和
    id 选择器， 除了 #/. 用 % 替换。 他们需要在 [@extend 指令] 中使用; 有关信息请参阅 
    [@extend-only Selectors](http://www.css88.com/doc/sass/#placeholders).
    当他们单独使用的时候，即没有使用 @extend 的，使用占位符选择器的规则集将不会被渲染为 CSS

### 注释: `/**/` 和 //
  - Sass 支持标注你的 CSS 多行注释和单行注释。在尽可能的情况下，多行注释会被保留在输出的 CSS 中， 
  而单行注释会被删除。
  
  
### SassScript
  除了普通的 CSS 属性的语法，Sass 支持一些扩展。 SassScript 允许属性使用变量，算术和额外功能。 SassScript
  可以再任何属性值被使用。
  SassScript 可以被用来生成选择器和属性名称，当编写 mixins 时非常用用。这是通过 interpolation (插值) 完成。
  - 交互式 shell (Interactive Shell)
  
  - 变量 $ (Variables $)
    + 使用 SassScript 最直接了当的方法是使用变量。变量以美元符号开始，赋值像设置 CSS 属性那样:
    ```base
        $wid5em: 5em;
        
        你可以在属性中引用他们:
        #main { width: $wid5em; }
    ```
  
  - 数据类型 (Data Types)
    + 字符串 (Strings)  
    + 列表  (Lists) 
    + Maps
    + 颜色 (Colors)
  
  - 运算 (Operations)
    + 数字运算 (Number Opetraiont)
        - 除法和 / (Division and /)
        - 减法、负数， 和 -  (Subtraction, Negative Numbers, and -)
    + 颜色运算 (Color Operations)
    + 字符串运算 (String Operations)
    + 布尔运算 (Boolean Operations)
    + 列表运算 (List Operations)
  - 圆括号 (Parentheses)
  - 函数 (Functions)
    + 关键词参数 (Keyword Arguments)
  - 插值 #{} (Interpolation: #{})
  - SassScript 中的 & (& in SassScript)
  - 变量默认 !default (Variable Defaults: !default)
  
### 规则和指令  (@-Rules and Directives)
  - @import 
    + Parials
    + 嵌套 @import (Nested @import)
  - @media
  - @extend
    + 它是如何工作的 (How it Works)
    + 扩展复杂的选择器 (Extending Complex Selectors)
    + 多重扩展 (Multiple Extends)
    + 链式扩展 (Chaining Extends)
    + 选择器序列 (Selector Sequences)
        - 合并选择器序列 (Merging Selector Sequences)
    + @extend-only 选择器 (@extend-only Selector)
  -  ！optional 标记 (The !optional Flag)
  - 指令中的 @extend (@extend in Directives)
  - at-root 
    + @at-root (without:...) 和 @at-rot (with:...)
  - @debug
  - @warn
  - @error
  
### 控制指令和表达式 (Control Directives & Expressions) 
  - if()
  - @if
  - @for
  - @each
    + 多重赋值 (Multiple Assignment)
  - @while

### 混合指令 (Mixin Directives)
  - 定义一个混入 @mixin (Defining a Mixin: @mixin)
  - 引用混合样式 @include (Including a Mixin: @include)
  - 参数 Arguments
    + 关键字参数 (Keyword Arguments)
    + 可变参数 (Variable Arguments)
  - 传递内容块到混入 (Passing Content Blocks to a Mixin)
    + 变量的作用域和内容快 (Variable Scope and Content Blocks) 

### 函数指令 (Function Directives)

### 输出格式 (Output Style)
  - :nested
  _ :expanded
  - :compact
  - :compressed

### 扩展 Sass (Extending Sass)
  - 自定义 Sass 函数 (Defining Custom Sass Functions)
  - 缓存存储 (Cache Stores)
  - 自定义导入 (Custom Importers)     
  
  
  
  ```base
      
  ```