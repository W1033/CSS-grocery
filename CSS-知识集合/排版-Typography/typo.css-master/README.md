# Typo.css


## Table Of Contents(目录)
0. Typo.css 中文网页重设与排版
1. 目录结构    
2. Typo.CSS 的设计和使用
3. Typo.CSS 主要包括: 
    + 1. 一般 reset.css 所需的内容
    + 2. `class="typo"` 阅读内容排版
    + 3. 增加类: 



## Content(内容)
### 0. Typo.css 中文网页重设与排版
- 目标: 让页面在浏览器中的排版效果一致化, 构建最适合桌面和移动平台的中文页面排版.  
  预览: [typo.css](http://typo.sofi.sh)

### 1. 目录结构    
- ```base
    |-- README.md     --- 使用帮助
    |-- license.txt   --- 许可证
    |-- typo.css      --- 将应用于你的项目
    |-- typo.html     --- Demo/预览 
  ```
  
### 2. Typo.CSS 的设计和使用


### 3. Typo.CSS 主要包括: 
1. 一般 reset.css 所需的内容
    
    + 目前的设计是这样的, 尽量保持完整的 reset, 比如让 ul/ol 无样式并且无多余的
      `padding`/`margin`, 这是必须的, 因为一个网站可能需要很多自定义的的内容,
      在实践中我们并不希望像 ul/ol 有样式, 这样我们得用优先级去覆盖, 这是非常麻烦的事.
      所以 typo.css 并不像 normalize.css, 后者给每一个元素都预先定义了样式,
      这样在自定义的时候将是非常痛苦的. 要大保持干净的所有元素一致化的 reset 才是最佳实践. 
2. `class="typo"` 阅读内容排版
    + 在文章/文档阅读的页面, 需添加 `.typo` 这个 class, 这样 table/ol/ul
      等都会有预定的样式, 让你的排版像 [http://typo.sofi.sh](http://typo.sofi.sh)
      一样 (Tip: 也可查看当前目录 `./Typo.css - 中文网页重设与排版.pdf` 的备份),
       让用户阅读起来更舒服. 
    
      在父容器没有添加 `class="typo"` 的时候, 可以使用 `class="typo-标签"
      (如 `class="typo-ul"`) 来实现像 `.typo > ul` 这样结构的样式. 
 3. 增加类: 
    + 主要是一些需要中文日常排版需要的元素和语文对应样式的增强, 目前包括: 
        - (1) 专名号: 使用标签 `<u>` 或者 `.typo-u` <br />
        - (2) 着重号: 使用 class `.typo-em` <br />
        - (3) 清理浮动: 与一般 reset.css 保持一致 `.clearfix` <br />
        - (4) 强制换行: 添加 `.textwrap` 到文本所在的容器, 如果是 `table`
          还需要 `.textwrap-table` <br />
        - (5) 衬线字体: 添加 `.serif` <br />
        - (6) 创建 border-box: 在 html 中添加 `.borderbox`
          [#why](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)

### 3. 开源许可
- 基于 [MIT License](http://zh.wikipedia.org/wiki/MIT_License) 开源,
  使用代码只需说明来源, 或者引用
  [license.txt](https://github.com/sofish/typo.css/blob/master/license.txt) 即可. 
