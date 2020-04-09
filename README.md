# CSS grocery(CSS 杂货店)

## Table Of Content
1. css 的 `box-sizing` 属性
2. 


## New Words



## Content
### 1. css 的 `box-sizing` 属性
- `box sizing(盒子大小)` 属性, 包含 2 个值:
    +(1)`content box(内容盒子)`: 是默认值. 如果元素为 100px,
      那么这个元素的内容就会有 100px, 任何 border 和 padding 都会增加到元素宽度的外围.
    +(2)`border box(边框盒子)`: 告诉浏览器去理解你设置的 border 和 padding
      的值是包含在 width 内的.
- 示例见: `./《CSS 揭秘》/2nd chapter 背景与边框/2-0 box-sizing.html`

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
