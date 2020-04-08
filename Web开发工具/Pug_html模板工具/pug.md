# HTML 模板工具 -- Pug

> [Pug 中文文档](https://pugjs.org/zh-cn/api/getting-started.html)

> [Pug 英文文档](https://pugjs.org/api/getting-started.html)


## Table Of Contents



## New Words



## Content
- Github 主页的一段代码:
  ```base
    doctype html
    html(lang="en")
        head
            title= pageTitle
            script(type="text/javascript").
                if(foo) bar(1 + 5)
        body
            h1 Pug - node template engine
            #container.col
                if youAreUsingPug
                    p You are amazing 
                else
                    p Get on it!
                p.
                    Pug is a terse and simple templating language with
                    a strong focus on performance and powerful features.
  ```
