# CSS 集锦

#### em、rem


#### 什么情况下用 translate() 而不用绝对定位？什么时候情况相反？
- `transform: translate()` translate 是 transform 的一个值。改变 transform 或 
  opacity 不会触发浏览器重新布局 (reflow) 或 重绘 (repaint), 只会触发复合
  (compositions)。而改变绝对定位会触发重新布局，进而触发重绘和复合。 transform 使浏览器为
  元素创建一个 GPU 图层，但改变绝对定位会使用 CPU。因此 translate() 更高效，可以缩短平滑
  动画的绘制事件。
- 当使用 translate() 时，元素仍然占据其原始空间 (有点像 position:relative;),这与改变
  绝对定位不同。
  
#### 清除浮动的几种方式:
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

#### CSS 实现父元素不知道宽高, 子元素固定宽高比 (比如 16:9)



#### 三栏 - 中栏流动布局
- `../《CSS设计指南》/chapter05-页面布局/5.3.1_用负外距实现中栏流动布局.html`
- `../《CSS设计指南》/chapter05-页面布局/5.3.2_用CSS3单元格实现中栏流动布局.html`