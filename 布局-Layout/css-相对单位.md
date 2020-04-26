# CSS 相对单位


## Catalog
1. CSS `px` 像素概述
2. CSS 相对单位



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
### 1. CSS `px` 像素概述
- `px` 像素见: `./css-像素px详解和布局基础.md`


### 3. CSS 相对单位
- **Warning**: 下面这些所有的相对单位(relative units) 都是根据 `px` 像素而言的, 
  但 `px` 也不是绝对像素(absolute units), `px` 像素的详解见上面
  `### 1. CSS px 像素概述`.
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
- (1) `vw`, `vh`, `vmax`, `vmin` 的含义:
    + `vw`: 相对于浏览器可视窗口的宽度, 视口宽度是 100vm.
        - `1vw(viewport width)` =
          `window.innerWidth(浏览器窗口大小/可视窗口大小)` 数值的 1%.
    + `vh` 相对于浏览器可视窗口的高度, 视口高度是 100vh.
        - `1vh(viewport height)` = `window.innerHeight` 值的 1%.
    + `vmin`: vw 和 vh 中的较小值.
    + `vmax`: vw 和 vh 中的较大值.
- (2) `vw`, `vh` 与 `%` 百分比的区别:
    + `%` 是相对于父元素的大小设定的比率, `vw`, `vh` 是根据视口大小决定的.
    + `vw`, `vh` 优势在于能够直接获取高度, 而用 `%` 在没有设置 `body`
      高度的情况下, 是无法正确获得可视区域的高度的.
- (3) `vmin`, `vmax` 的用处.
    + 做移动页面开发时, 如果使用 `vw`, `vh` 设置字体大小(比如 5vw),
      在竖屏和横屏状态下显示的字体大小是不一样的. 
      
      由于 `vmin` 和 `vmax` 是当前较小的 `vw` 和 `vh` 和当前较大的 `vw`
      和 `vh`. 这里就可以用到 `vmin` 和 `vmax`. 使得文字大小在横竖屏下保持一致。