# CSS 相对单位


## Catalog
1. CSS 单位概述
2. CSS 绝对单位
3. CSS 相对单位



## New Words
- **unit ['juːnɪt] --n.单元, 单位, 部, 机组, 部件**
    + A unit vector has a magnitude. 单位矢量的大小为1.
    + a unit of measurement.计量单位. 
- **author ['ɔːθə]/['ɔθɚ] --n.作家; 作者. --vt.编写; 创作**
    + CSS brings a late-binding of styles to the web page:
      The content and its styles aren't pulled together until after
      the authoring(vt-ing) of both is complete.
      CSS 为网页带来了样式的后期绑定:
      直到内容(content)和样式(styles)两者的创作都完成之后, 它们才会融合在一起.


## Content
### 1. CSS 单位概述
- CSS提供了很多种方式去定义一个值(e.g.
  `15px`/`1em`/`1rem`/`100%`/`1inch`/`72pt`...).
  例如最熟悉的是`像素(pixel)`,它被称为 "绝对单位".
  也就是说, 5px 在不同的场景下是一样的值. 而其他的单位, 如 `em` 和 `rem`,
  不是绝对的而是相对的. 相对单位的值会根据外部影响因素的变化而变化.
  例如, 2em 的值取决于你在哪个元素使用它(有时甚至是哪个属性). 很自然,
  相对单位使用起来会比较困难.

  CSS 为网页带来了样式的后期绑定:
  直到内容(content)和样式(styles)两者的创作都完成之后, 它们才会融合在一起.

  随着智能手机的出现, 开发人员不得不放弃已知的多栏定宽(px)布局, 并开始考虑响应式设计.
    + **响应式**: 在 CSS 中指的是针对不同大小的浏览器窗口,
      用不同的方式响应更新页面的样式.
  
  所以到现在为止, 我们对于网页中的单位使用, 需要面对不同的设备做出相对应的调整,

### 2. CSS 绝对单位
| 绝对单位 | 解释 |
| :---: | :---: |
| `px` | 像素. 计算机屏幕上的一个点为 1px. |
| `pt` | 略 |
| `ex` | 略 |
#### 2.1 `px` 像素
- 关于 `像素密度`, `CSS 像素`, `物理像素` 见:
  [`../《高性能响应式Web开发实战》/chapter02-响应式中要面对的问题/chapter02-响应式中要面对的问题.md`](File:///Users/WANG/Github-clone/CSS-grocery/《高性能响应式Web开发实战》/chapter02-响应式中要面对的问题/chapter02-响应式中要面对的问题.md)


### 3. CSS 相对单位
  | 相对单位 | 解释 |
  | :---: | :---: |
  | `%` | 百分比|
  | `em` | 相对单位. 相对于父元素计算, 假如某个 p 元素为 `font-size:12px`,在它内部的 span 标签, 设置 `font-size: 2em`, 那么,  这时候的 span 字体大小为 12*2 = 24px. |
  | `rem` | 相对单位.  相对于根元素 html 的 `font-size`. 例如 html 为 `font-size: 12px`, 那么其内的 div 设置为 `font-size: 2rem`, div 字体大小就为 24px. |
  | `rpx` | 微信小程序相对单位. 1rpx = 屏幕宽度/750px. 在 750px 的设计稿上, 1rpx = 1px |
  | `vw` | 相对于浏览器可视窗口的宽度, 视口宽度是 100vm.<br>`1vw(viewport width)` = `window.innerWidth(浏览器窗口大小/可视窗口大小)` 数值的 1% |
  | `vh` | 相对于浏览器可视窗口的高度, 视口高度是 100vh.<br>`1vh(viewport height)` = `window.innerHeight` 值的 1%  |
  | `vmin`| vw 和 vh 中的较小值 |
  | `vmax`| vw 和 vh 中的较大值 |

#### 3.1 `%` 百分比 

#### 3.2 `em`
- 一般情况下, 浏览器的默认字体大小是**16px**, 所有未经调整的浏览器都符合
  `1em = 16px`.
  
  目前(2020 年), 我用 MacOS 下的 Chrome 查看 "虎嗅", "Vue 官网",
  "WikiWand" 网站时, 发现默认的字体大小都是 16px, 也就是说他们并没有修改默认字体,
  但仍然有很多网站的默认字体是 14px, 所以网站中究竟设置多大字体,
  还是根据设计师的要求来. 接下来我们分别说一下这两种尺寸的使用:
    + (1) 设置默认字体是 14px. 为了在写代码时方便, 我们可以在 CSS 中这样设置:
      ```css
        html {
            /* - 默认 16px = 100%, 那么 1px = 6.25%; 10px = 62.5% */
            font-size: 62.5%;
        }
        body {
            /* - 当前 em 相对单位是相对于父元素 html 来的, 由于 html 中
             *   font-size = 10px  所以当前 1em = 10px, 
             *   1.4em = 14px. 这样就给 body 初始化了 14px 的字体. */
            font-size: 1.4em;
        }
      ```
    + (2) 设置默认字体是 16px:
      ```css
        /* - 由于浏览器默认字体就是 16px, 所以此处直接写 1em = 16px 即可,
         *   1em = 16px ==> 1.6px = 0.1em ==> 0.25em = 4px
         *   1px = 0.0625em
         *   10px = 0.625em
         *   14px = 0.875em
         *   16px = 1em 
         *   18px = 1.125em
         *   20px = 1.25em
         *   30px = 1.5em
         *   40px = 2.5em
         *   60px = 3.75em
         *   80px = 5em
         *   100px = 6.25em
         *   200px = 12.5em 
         */
        body {
            /* - 300 为 font-weight; 1.8 为 line-height */
            font: 300 1em/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei,
            Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
        }
      ```

#### 3.3 `rem` 

#### 3.4 `vw`/`vh`/`vmin`/`vmax` 
