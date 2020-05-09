# Stylus 

- [Stylus 官网文档]()


## Catalog
1. Stylus 基础语法
    + 1.1 Selector (选择器)
    + 1.2 Variable (变量)
    + 1.3 Interpolation (插值)
    + 1.4 Operators (运算符)
    + 1.5 Functions (函数)
    + 1.6 关键字参数
    + 1.7 Built-in Functions(内置函数)
    + 1.8 Rest parameters (剩余参数)
    + 1.9 注释 (comment)
    + 1.10 Conditionals (条件句)
    + 1.11 Hashes (哈希)
    + 1.12 Iteration (迭代)
    + 1.13 `@import` and `@require`
    + 1.14 `@media`
    + 1.15 `@font-face`
    + 1.16 `@keyframes`
    + 1.17 Other `@-Rules`
    + 1.18 `@extend`
    + 1.19 `@block`
    + 1.20 `url()`
    + 1.21 CSS 字面量
    + 1.22 CSS 格式的语法
    + 1.23 字符转码
    + 1.24 Executable (可执行的)
    + 1.25 错误报告
    + 1.26 Connect middleware (连接中间件)
    + 1.27 Introspection API (内省 API)
    + 1.28 JavaScript API
    + 1.29 SourceMaps (资源图)
    + 1.30 CSS3 extensions with NIB
2. 在 Vue 组件中使用 stylus



## New Words
- **interpolation [ɪn,tɚpə'leʃən]{US} --n.插值; 插入; 填写**
    + linear interpolation. 线性插值.
- **operator ['ɒpəreɪtə]/['ɑpəretɚ] --n.[计]操作符, 运算符; 操作员; 经营者**
    + operator overloading 运算符重载.
    + Operator, I want to make a long distance call.
      话务员, 我要打长途电话.
- **conditional [kən'dɪʃ(ə)n(ə)l] --adj.有条件的, 受约束的**
    + a conditional contract 附有条件的契约
    + conditional comment. 条件注释. 
- **comment ['kɒment] --n.评论, 注释  --v.评论；注释**
    + Comment is needless. 解释是不必要的. 
    + add comments or explanations. 加注释或说明. 
    + the top commenter, a bottom-pinner,    
- **iteration [ˌɪtə'reɪʃn] --n.迭代, 重复, 反复**
    + Let's listen to the next iteration of this theme. 我们来听下一段主题. 
    + So this process takes about four or five iterations.
        这个过程需要四到五此反复. 
    + Iterators are just objects with a specific interface designed for 
        iteration. 迭代器是一种特殊对象, 它具有一些专门为迭代过程设计的专有接口. 
- **executable ['eksikju:təbl] --adj.可执行的, 实行的**
    + C++ Executable  C++ 可执行文件
- **introspection ['ɪntrə'spɛkʃən] --n.内省; 反省.**
    + And with this, they gained introspection.
      有了这样的认知, 它们学会了自省.


## Content
### 1. Stylus 基础语法
#### 1.1 选择器
##### 1.1 Selector (选择器)

##### 1.2 Variable (变量)

##### 1.3 Interpolation (插值)

##### 1.4 Operators (运算符)

##### 1.5 Functions (函数)

##### 1.6 关键字参数

##### 1.7 Built-in Functions(内置函数)

##### 1.8 Rest parameters (剩余参数)

##### 1.9 注释 (comment)

##### 1.10 Conditionals (条件句)

##### 1.11 Hashes (哈希)

##### 1.12 Iteration (迭代)

##### 1.13 `@import` and `@require`

##### 1.14 `@media`

##### 1.15 `@font-face`

##### 1.16 `@keyframes`

##### 1.17 Other `@-Rules`

##### 1.18 `@extend`

##### 1.19 `@block`

##### 1.20 `url()`

##### 1.21 CSS 字面量

##### 1.22 CSS 格式的语法

##### 1.23 字符转码

##### 1.24 Executable (可执行的)

##### 1.25 错误报告

##### 1.26 Connect middleware (连接中间件)

##### 1.27 Introspection API (内省 API)

##### 1.28 JavaScript API

##### 1.29 SourceMaps (资源图)

##### 1.30 CSS3 extensions with NIB





### 2. 在 Vue 组件中使用 stylus
- 比如在 Vue 项目的 `src/assets` 文件夹下有个 `stylus` 的文件夹, 里面有这几个文件: 
    + `base.styl`
    + `icon.styl`
    + `index.styl`
    + `mixin.styl`
    + `reset.styl`
    + `variable.styl`
### (2.1) 在 Vue 的单文件组件中引入 stylus
```vue
<template>
    <div>
    </div>
</template>
<script>
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~assets/stylus/variable";
</style>
```
### (2.2) 定义变量
```stylus
// - variable.styl 

// - 颜色定义规范
$color-background-black = #222
$color-highlight-background = #333
$color-dialog-background = #666
$color-theme = #ffcd32
$color-theme-d = rgba(255, 205, 49, .5)
$color-sub-theme = #d93f30
$color-text = #fff
$color-text-d = rgba(255, 255, 255, .3)
$color-text-l = rgba(255, 255, 255, .5)
$color-text-ll = rgba(255, 255, 255, .8)

// - 字体定义规范
$font-size-medium = 13px
$font-size-medium-x = 15px
$font-size-large = 18px
$font-size-large-x = 22px
```
### (2.3) 在 `*.styl` 中引入其他 `*.styl` 文件
```stylus
// - index.styl
@import "reset.styl"
@import "base.styl"
@import "icon.styl"
```