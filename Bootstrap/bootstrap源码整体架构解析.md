### 在Bootstrap官网点击下载我们可以看到有用于生产环境中的Bootstrap和Bootstrap源码以及Sass，我们知道Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - Less 和 Sass 开发的。今天我们就来学习一下以Less开发的Bootstrap。如果不熟悉Less语法的朋友可以先在Less官网学习下，在下载的bootstrap-3.3.0\less文件夹中打开bootstrap.less，我们可以看到源码的整体架构: [连接](http://www.cnblogs.com/jesse131/p/5966145.html)

   + mixin 混合
   + carousel       /ˌkærə'sel/     (计) 轮播
   + glyph          /glɪf/          n. 图像字符， 字形
   + scaffolding    /'skæfəʊldɪŋ/   n. 搭脚手架的材料
   * pagination     /ˌpædʒɪ'neʃən/  n. 分页，页码
   + badge          /bædʒ/          n. 徽章，标记
   + thumbnail      /'θʌmnel/       n. 极小的东西，拇指甲。   ajd. 极小的，极短的
   + popovers  --> popups over      弹出式窗口
   

- 1.Core variables and mixins
    + @import "variables.less";             // 定义变量，方便后面调用
    + @import "mixins.less";                // 定义混合 这类似定义函数或者宏，在mixins文件夹中可看到所定义的函数
                

- 2.Reset and dependencies
    + @import "normalize.less";             // 标准化css，这是一个专门将不同浏览器的默认css特性设置为统一效果的css库，编译后对应源码为8~190行 
    + @import "print.less";                 // 打印样式，编译后对应源码为192~266行
    + @import "glyphicons.less";            // 图标样式，编译后对应源码为267~885行
              
- 3.Core CSS  核心CSS
    + @import "scaffolding.less";           // 脚手架，相当于全局样式，编译后对应源码为886~989行   
    + @import "type.less";                  // 排版样式，编译后对应源码为990~1335行                   
    + @import "code.less";                  // 代码样式，编译后对应源码为1336~1389行   
    + @import "grid.less";                  // 栅格系统，这是Bootstrap支持响应式的重点，编译后对应源码为1390~2056行      
    + @import "tables.less";                // 表格样式，编译后对应源码为2057~2296行         
    + @import "forms.less";                 // 表单样式，编译后对应源码为2297~2781行              
    + @import "buttons.less";               // 按钮样式，编译后对应源码为2782~3171行
           
- 4.Components  组件
    + @import "component-animations.less";  // 组件中折叠和隐藏动画，编译后对应源码为2782~3171行
    + @import "dropdowns.less";             // 下拉菜单及下三角符号，编译后对应源码为3209~3348行        
    + @import "button-groups.less";         // 按钮组，编译后对应源码为3349~3520行    
    + @import "input-groups.less";          // 输入框组，编译后对应源码为3521~3674行     
    + @import "navs.less";                  // 导航，编译后对应源码为3675~3868行            
    + @import "navbar.less";                // 导航条，编译后对应源码为3869~4393行           
    + @import "breadcrumbs.less";           // 面包屑，编译后对应源码为4394~4411行     
    + @import "pagination.less";            // 默认分页，编译后对应源码为4412~4504行      
    + @import "pager.less";                 // 翻页，编译后对应源码为4505~4542行       
    + @import "labels.less";                // 标签，编译后对应源码为4543~4609行       
    + @import "badges.less";                // 徽章，编译后对应源码为4610~4648行             
    + @import "jumbotron.less";             // 巨幕，编译后对应源码为4649~4686行            
    + @import "thumbnails.less";            // 缩略图，编译后对应源码为4687~4712行      
    + @import "alerts.less";                // 警告框，编译后对应源码为4713~4787行            
    + @import "progress-bars.less";         // 进度条，编译后对应源码为4788~4881行     
    + @import "media.less";                 // 媒体对象，编译后对应源码为4882~4915行       
    + @import "list-group.less";            // 列表组，编译后对应源码为4916~5091行      
    + @import "panels.less";                // 面板，编译后对应源码为5092~5426行            
    + @import "responsive-embed.less";      // 具有响应式特性的嵌入内容，编译后对应源码为5427~5452行
    + @import "wells.less";                 // well效果，编译后对应源码为5453~5474行    
    + @import "close.less";                 // 关闭按钮图标，编译后对应源码为5475~5499行
    + @import "modals.less";                // 模态框，编译后对应源码为5500~5622行           
    + @import "tooltip.less";               // 工具提示，编译后对应源码为5623~5720行        
    + @import "popovers.less";              // 弹出框，编译后对应源码为5721~5841行     
    + @import "carousel.less";              // 轮播，编译后对应源码为5842~6063行

- 5.Utility classes
    + @import "utilities.less";             // 实用工具类，编译后对应源码为6064~6147行
    + @import "responsive-utilities.less";  // 响应式工具类，编译后对应源码为6148~6357行
  