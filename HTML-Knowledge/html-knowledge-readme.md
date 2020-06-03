# HTML Knowledge (HTML 知识)


## Table Of Contents
1. HTML5 新增元素
2. `<img>` 标签的 `hspace` 和 `vspace` 属性可以设置图像周围的空间。
3. `<code>` 标签

## New Words



## Content 
### 1. HTML5 新增元素
- 新增的结构元素
    + 结构元素分为: 主体结构元素 和 非主体结构元素
        - 主体结构元素: `article`, `aside`, `nav`, `pubdate`, `section`,
          `time`, `figure`. 
        - 非主体结构元素: `address`, `header`, `hgroup`, `footer`, `main`.
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

### 2. `<img>` 标签的 `hspace` 和 `vspace` 属性可以设置图像周围的空间。
- 通常图形浏览器不会在图像和其周围的文字之间留出很多空间.
  除非创建一个透明的图像边框来扩大这些间距, 否则图像与其周围文字之间默认的两个像素的距离,
  对于大多数设计者来说是太近了. 如果把图像放在超链接中,
  特殊颜色的边框会把你费尽心思留出的所有间距都占据了,
  而且还会使人们注意到文字与图像是多么接近. 
  
  `hspace` 和 `vspace` 属性可以给图像一个自由呼吸的空间.
    + 通过 `hspace`, 可以以像素为单位, 指定图像左边和右边的文字与图像之间的间距;
    + 而 `vspace` 值则是上面的下面的文字与图像之间的距离的像素数. 

  我们确信您同意这一点, 也就是在这些图像周围留出额外的空间, 会使文本更容易阅读,
  而且页面整体上看上去会更引人入胜. 

  使用示例:
  ```html
    <img src="w3school.gif" hspace="30" vspace="30" />
  ```

### 3. `<code>` 标签
- `<code>` 元素呈现一段计算机代码. 默认情况下, 它以浏览器的默认等宽字体显示. 例如:
  ```html
    <p>Regular text. <code>This is code.</code> Regular text.</p>
  ```