# CSS 集锦

#### em、rem
- `em` 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，
   则相对于浏览器的默认字体尺寸。(引自CSS2.0手册)
- 任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。
    + 那么 12px=0.75em,10px=0.625em。为了简化 font-size 的换算，需要在 css 中的 body 
      选择器中声明 Font-size=62.5%，这就使 em 值变为 16px*62.5%=10px, 这样12px=1.2em, 
      10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。
- rem 相对的是 HTML 根元素

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