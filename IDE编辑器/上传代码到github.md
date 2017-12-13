1. #### 创建git仓库
       #####上传代码之前一定要把本地的git升级到最新版本，不要问我为什么
      cd 到你的本地项目根目录下，执行git命令：<br/>
      git init  //把这个目录变成Git可以管理的仓库 
2. #### 将项目的所有文件添加到仓库中
        git add . 
        (.代表全部)(如果只想添加某个特定的文件，只需要把.换成特定的文件名即可)
       
3. #### 将add的文件commit(委托，提交)到仓库
        git commit -m "注释语句"
        
4. #### 去github上创建自己的Repository，(也可以使用现有的仓库)

5. #### 将本地的仓库关联到github上
        git remote add origin https://xxx//xxxx//xxx/xxxxx.git (仓库名尽量不要用驼峰写法，因为会报错)
        (链接地址就是打开创建的仓库之后那个写着"Clone or download"的长条绿色按钮)

6. #### 上传github之前，需要先pull(拉下)一下，执行命令如下:<br/>
        git pull origin master              
        [下拉(pull)时提示错误 Fatal:refulsing to merge unrelated histories(拒绝合并最近的历史记录)]的解决方法，把上面的代码改为:
        git  pull origin master --allow-unrelated-histories  [allow前面有两个破折号(dash)]
        
7. #### 最后一步上传代码到github远程仓库
        git push -u origin master 
(执行完后如果没有异常就说明上传成功了，中间肯能会让输入Username和Password，输入github的账号和密码就好了)
