# CSS grocery(CSS 杂货店)

## Table Of Content
0. HTML 
1. css 的 `box-sizing` 属性
2. box-shadow 属性:
3. CSS 单位  
4. css 强制换行和超出隐藏
5. 表格清除格与格之前的间距的样式
6. 响应式网页的头部:
7. 各种平台样式兼容问题



## New Words
- **compatible [kəm'pætɪb(ə)l] --adj.兼容, 相容的**
     + Their marriage came to end because they were simply not compatible 
       with each other. 他俩简直无法和睦相处, 所以就离婚了. 
     + Driving a car at a speed compatible with safety. 以兼顾安全的速度驾驶车. 
- **incompatible [ɪnkəm'pætɪb(ə)l] --adj.不相容, 合不来的**
     + His plan is incompatible with my intent.  他的计划与我的意图不相符. 
     + Long hours are simply incompatible with family life.
        长时间的工作与家庭生活格格不入. 
- **wrap [ræp] --v.包裹, 包**
    + word wrap 自动换行
    + line wrap  --n.自动换行
    + He wrapped his favourite books in paper.
      他把自己最喜欢的书用纸抱起来. 
- **collapse [kə'læps] --v.倒塌, 崩溃  --n.倒闭, 破产**
    + Numerous houses collapsed in the earthquake. 无数的房屋因地震而倒塌. 
    + Help Help! That boy just collapsed! 快救救他呀哪个男孩晕倒了！
    + He won't be the last one who collapses. 他不会是第一个崩溃的人. 
    + He collapsed on the way to school. 他上学路上晕倒了. 
    + the collapse of plans. 计划失败
    + the collapse of modern society. 现在社会的崩溃. 

## Content

### 0. HTML
#### 0.1 HTML5 新增元素
- 新增的结构元素
    + 结构元素分为: 主体结构元素 和 非主体结构元素
        - 主体结构元素:
            + (1) `article`
            + (2) `aside`
            + (3) `nav`
            + (4) `pubdate`
            + (5) `section`
            + (6) `time`
            + (7) `figure`. 
        - 非主体结构元素: 
            + `address`
            + `header`
            + `hgroup`
            + `footer`
            + `main`
- 新增的其他元素: 
    + (1) `video` 元素: 用于定义视频, 实现播放视频资源. 
    + (2) `audio` 元素: 用于定义音频、实现播放音频资源. 
    + (3) `embed`
    + (4) `mark`: 高亮显示
    + (5) `progress`
    + (6) `ruby` 
        - `rp`
        - `rt`
    + (7) `wbr` 软换行
    + (8) `canvas`: 用于定义自定义图像. 它只是一个容器画布, 绘制图形时需要使用脚本. 
    + (9) `command`
    + (10) `details`: 与 summary 元素配合使用
        - 示例:
        - Firefox 不支持, Chrome & Safari 支持
          ```html
             <details>
                <summary>农夫与蛇</summary>
                一个农夫在寒冷的冬天里看见一条蛇冻僵了, 觉得它很可怜, 就把它拾起来, 小心翼翼地
                揣进怀里, 用暖热的身体温暖着它. 那条蛇受到了暖气, 渐渐复苏了, 又恢复了生机. 等到
                它彻底苏醒过来, 便立即恢复了本性, 用尖利的毒牙狠狠地咬了恩人一口, 使他受到了致命
                的创伤. 农夫临死的时候痛悔地说: “我可怜恶人, 不辨好坏, 结果害了自己, 遭到这样的
                报应.  如果有来世 , 我绝不怜惜像毒蛇一样的恶人. ”
            </details>
          ```
    + 11、`datalist`
    + 12、`datagrid`
    + 13、`keygen`
    + 14、`output`
    + 15、`source`: 为媒体元素（video 和 audio）引入媒介资源. 
    + 16、`menu`

### 1. css 的 `box-sizing` 属性
- `box sizing`(盒子大小) 属性, 包含 2 个值:
    + `border box`(边框盒子): 告诉浏览器去理解你设置的 border 和 padding
    + `content box`(内容盒子): 是默认值. 如果元素为 100px,
      那么这个元素的内容就会有 100px, 任何 border 和 padding 都会增加到元素宽度的外围.
  
  ```css
    /* - apply a natural box layout model to all elements, 
     *   but allowing components to change */
    html {
        box-sizing: border-box;
    }
    html.borderbox *, html.borderbox *:before, html.borderbox *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
  ```
- 示例见: `./《CSS 揭秘》/2nd chapter 背景与边框/2-0 box-sizing.html`

### 2. `box-shadow` 属性:
  ```css
      .box {
          /* - 横向阴影1px, 纵向阴影1px, 模糊半径3px, 阴影展开半径2px, 颜色值. */
          box-shadow: 1px 1px 3px 2px #cfcecf;
          box-shadow: 0 .05em .25em rgba(0, 0, 0, .5);
      }
  ```

### 3 CSS 单位  
- | 单位   | 解释 |
  | ----  | ---- |
  | `%`   | 百分比|
  | `px`  | 像素. 计算机屏幕上的一个点为 1px. |
  | `em`  | 相对单位. 相对于父元素计算, 假如某个 p 元素为 `font-size:12px`,在它内部的 span 标签, 设置 `font-size: 2em`, 那么,  这时候的 span 字体大小为 12*2 = 24px. |
  | `rem` | 相对单位.  相对于根元素 html 的 `font-size`. 例如 html 为 `font-size: 12px`, 那么其内的 div 设置为 `font-size: 2rem`, div 字体大小就为 24px. |
  | `rpx` | 微信小程序相对单位. 1rpx = 屏幕宽度/750px. 在 750px 的设计稿上, 1rpx = 1px |
  | `pt`  | 略 |
  | `ex`  | 略 |

### 4. css 强制换行和超出隐藏
- [参考文章](https://juejin.im/post/5b8905456fb9a01a105966b4)
- ```css
    .textwrap, .textwrap td, .textwrap th {
        word-break: break-all;
        word-wrap: break-word;
        
        /* - white space(空白空间): pre-wrap 只对中文起作用, 强制换行. */
        white-space: pre-wrap;
    }
  ```

### 5. 去掉表格(Table cell)的边距并让其边重合
- ```css
    table {
        border-collapse: collapse;
        border-sapcing: 0;
    }
  ```

### 6. 响应式网页的头部:
- ```html
    <!doctype html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width,
                user-scalabel=no, initial-scale=1.0,
                maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equive="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>

    </body>
    </html>
  ```
    + `viewport` 网页默认的宽度和高度;
    + `width = device-width`网页宽度默认等于屏幕宽度;
    + `initial-scale=1` 原始缩放比例为 1.0, 即网页初始大小占屏幕面积的 100%,
    + `maximum-scale` 允许用户缩放到的最大比例,
    + `user-scalable` 允许用户是否可以手动缩放.

### 7. 各种平台样式兼容问题
- 忽略将页面中的数字识别为电话号码, 忽略 android 平台中对邮箱地址的识别
  ```html
    <meta content="telephone=no, email=no" name="format-detection">
  ```
- 解决点击 `input`, `textarea` 出现边框的问题
  ```css
    input:focus, input:active, input:link, input:visited {
        outline:none;
        border:0;
    }
    textarea:focus, textarea:active, textarea:link, textarea:visited {
        outline:none;
        border:0;
    }
  ```
- 解决 ios 端 `button` 圆角和渐变的问题
  ```css
    input[type=button], input[type=submit], input[type=file], button {
        cursor: pointer;
        -webkit-appearance: none;
    }
  ```
- 解决 ios 端点击按钮会出现暗色背景的问题
  ```css
    input{
        /* 去除系统默认的样式 */
        -webkit-appearance:none;
        /* 点击高亮的颜色 */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  ```
- 去除 chrome 下 `input` 和 `textarea` 的聚焦边框: 
  ```css
    input, button, select, textarea{ outline: none; }
  ```
- 去除 chrome 下 `textarea` 可拖动放大的问题:
  ```css
    textarea{ resize: none; }
  ```




### JavaScript 动画和 CSS 动画该如果抉择
- 根据 Google Developer, 渲染线程分为 主线程(main thread)和
  合成线程(compositor thread). 如果 CSS 动画只是改变 transforms 和 opacity,
  这时整个 CSS 动画得以在 合成线程 完成（而JS动画则会在 主线程 执行,
  然后触发合成线程进行下一步操作）, 在 JS 执行一些昂贵的任务时, 主线程繁忙,
  CSS 动画由于使用了合成线程可以保持流畅
  
  在许多情况下, 也可以由合成线程来处理 transforms 和 opacity 属性值的更改. 
  
  对于帧速表现不好的低版本浏览器, CSS3可以做到自然降级, 而JS则需要撰写额外代码. 
  
  CSS动画有天然事件支持(TransitionEnd、AnimationEnd, 但是它们都需要针对浏览器加前缀),
  JS则需要自己写事件. 
  
  如果有任何动画触发绘画, 布局或两者, 则需要 “主线程” 才能完成工作. 
  这对于基于 CSS 和 JavaScript 的动画都是如此, 布局或绘制的开销可能会使与 CSS 或
  JavaScript 执行相关的任何工作相形见绌, 这使得问题没有实际意义. 
  
  CSS3有兼容性问题, 而JS大多时候没有兼容性问题.
- 总结
  
  如果动画只是简单的状态切换, 不需要中间过程控制, 在这种情况下, css 动画是优选方案.
  它可以让你将动画逻辑放在样式文件里面, 而不会让你的页面充斥 Javascript 库.
  然而如果你在设计很复杂的富客户端界面或者在开发一个有着复杂 UI 状态的 APP.
  那么你应该使用 js 动画, 这样你的动画可以保持高效, 并且你的工作流也更可控.
  所以, 在实现一些小的交互动效的时候, 就多考虑考虑 CSS 动画. 对于一些复杂控制的动画,
  使用 javascript 比较可靠. 
