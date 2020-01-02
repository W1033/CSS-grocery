# CSS 集锦

#### em、rem
- 任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。
    + 那么 12px=0.75em,10px=0.625em。为了简化 font-size 的换算，需要在 css 中的 body 
      选择器中声明 Font-size=62.5%，这就使 em 值变为 16px*62.5%=10px, 这样12px=1.2em, 
      10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。
- 2、CSS 单位  
  + | 单位   | 解释 |
    | ----  | ---- |
    | `%`   | 百分比|
    | `px`  | 像素。计算机屏幕上的一个点为 1px. |
    | `em`  | 相对单位。相对于父元素计算，假如某个 p 元素为 `font-size:12px`,在它内部的 span 标签，设置 `font-size: 2em`, 那么， 这时候的 span 字体大小为 12*2 = 24px。|
    | `rem` | 相对单位。 相对于根元素 html 的 `font-size`. 例如 html 为 `font-size: 12px`, 那么其内的 div 设置为 `font-size: 2rem`, div 字体大小就为 24px. |
    | `rpx` | 微信小程序相对单位。1rpx = 屏幕宽度/750px. 在 750px 的设计稿上，1rpx = 1px |
    | `pt`  | 略 |
    | `ex`  | 略 |


#### 什么情况下用 translate() 而不用绝对定位？什么时候情况相反？
- `trasform: translate()` translate 是 transform 的一个值。改变 transform 或 
  opacity 不会触发浏览器重新布局 (reflow) 或 重绘 (repaint), 只会触发复合
  (compositions)。而改变绝对定位会触发重新布局，进而触发重绘和复合。 transform 使浏览器为
  元素创建一个 GPU 图层，但改变绝对定位会使用 CPU。因此 translate() 更高效，可以缩短平滑
  动画的绘制事件。
- 当使用 translate() 时，元素仍然占据其原始空间 (有点像 position:relative;),这与改变
  绝对定位不同。
  
#### 清楚浮动的几种方式:
+ 默认 html 布局:
    - ```html
        <div class='container'>
            <ul class="box">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li></li>
            </ul>
        </div>
      ```
+ (1). 给父级元素添加伪元素 :after/:before (推荐)。
    - ```css
       .box:after {
           content: '';
           display: block;
           clear: both;
       }
      ``` 
+ (2). 给父容器添加 `overflow: hidden/auto;` 包裹子元素。
    - 如果子元素的高度大于父元素，设置了 overflow: hidden; 会导致子元素显示
      不完整。
+ (3). 或者给子元素添加一个空元素，设置 `style:'clear: both';`
    - 但是这个也有问题，如果利用：.box > li {} 这样统一给 li 添加了样式，利用
      `<li style="clear:both;"></li>` 这种写法，并不能清楚浮动，所以最好的
      解决方案就是第一种。  