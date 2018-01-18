<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <title>年会抽奖主页</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta content="telephone=no,email=no" name="format-detection">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">

    <link rel="stylesheet" type="text/css" href="<%=path%>/css/annualMeeting/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="<%=path%>/css/annualMeeting/reset.css">
    <link rel="stylesheet" type="text/css" href="<%=path%>/css/annualMeeting/global.css">
    <link rel="stylesheet" type="text/css" href="<%=path%>/css/annualMeeting/barrage.css">

    <script type="text/javascript" src="<%=path%>/js/jquery.min.js"></script>
    <script type="text/javascript" src="<%=path%>/js/scrollreveal/scrollreveal.min.js"></script>
    <script type="text/javascript" src="<%=path%>/js/global-functions-new.js"></script>
    <script type="text/javascript" src="<%=path%>/js/barrage.js"></script>
    <script type="text/javascript">
        // 加载scrollReveal
        (function(){
            window.sr = ScrollReveal();
        }());
    </script>

    <style type="text/css">
        .wall { position: relative; }
        .container {
            margin-top:15%;
        }
        

        /* 左侧按钮 */
        .side-left > .history-record {
            width:100%; height:185px;
            padding-top:.8em;
            margin-bottom:1em;
            cursor:pointer;
        }

        .history-default-bg {
            background:url("<%=path%>/image/annualMeeting/side-button-bg-lg.png") no-repeat center;
            color:#c30f23;
        }
        .history-bg-hover {
            background:url("<%=path%>/image/annualMeeting/side-button-bg-lg-hover.png") no-repeat center;
            color:#fff;
        }

        /* 中间奖项 */
        .awards-btn {
            display:block; overflow:hidden;
            font-size:50px;  color:#ffffff;
            text-shadow:0 2px 4px rgba(0,0,0,0.50);
            margin:0 auto; line-height:106px;
            text-align:center;
            width:435px; height:105px;
        }
        .img-default-bg {
            background:url("<%=path%>/image/annualMeeting/button-bg-lg.png") no-repeat center;
        }
        .img-hover-bg {
            background:url("<%=path%>/image/annualMeeting/button-bg-lg-hover.png") no-repeat center;
        }
        .row {
            margin-bottom:5em;
        }

    </style>
</head>

<body>

    <div class="wall">

        <!--绝对定位背景大图-->
        <div class="absolute-bg">
            <img src="<%=path%>/image/annualMeeting/bg.png" alt="">
        </div>
        
        
         <!-- 弹幕 barrage /'bærɑːʒ/ n.弹幕 -->
	    <div class="barrage-container">
	        <!-- first line -- 第1行 -->
	        <div class="line1-wall every-line-wall"></div>
	        <!-- second line -- 第2行 -->
	        <div class="line2-wall every-line-wall"></div>
	        <!-- third line -- 第3行 -->
	        <div class="line3-wall every-line-wall"></div>
	        <!-- fourth line -- 第4行 -->
	        <div class="line4-wall every-line-wall"></div>
	    </div>
	        
        
       

        <!--左侧竖排按钮-->
        <div class="side-left">
            <p class="history-record history-default-bg" onclick="javascript:window.location.href='lotteryWinners.htm'">历史记录</p>
            <p class="switch-btn switch-btn-default-bg">关</p>
        </div>


        <div class="container">
        	<div class="row">
                <p class="col-lg-6 col-md-6">
                    <a href="setWinNumber.htm?prize=5">
                        <span class="awards-btn img-default-bg">美容券</span>
                    </a>
                </p>
                <p class="col-lg-6 col-md-6">
                    <a href="setWinNumber.htm?prize=4">
                        <span class="awards-btn img-default-bg">四等奖</span>
                    </a>
                </p>
            </div>
            <div class="row">
                <p class="col-lg-6 col-md-6">
                    <a href="setWinNumber.htm?prize=3">
                        <span class="awards-btn img-default-bg">三等奖</span>
                    </a>
                </p>
                <p class="col-lg-6 col-md-6">
                    <a href="setWinNumber.htm?prize=2">
                        <span class="awards-btn img-default-bg">二等奖</span>
                    </a>
                </p>
            </div>
            <div class="row">
                <p class="col-lg-6 col-md-6">
                    <a href="setWinNumber.htm?prize=1">
                        <span class="awards-btn img-default-bg">一等奖</span>
                    </a>
                </p>
                <p class="col-lg-6 col-md-6">
                    <a href="setWinNumber.htm?prize=8">
                        <span class="awards-btn img-default-bg">特等奖</span>
                    </a>
                </p>
            </div>
              <div class="row">
                <p class="col-lg-12 col-md-12">
                	<span class="awards-btn img-default-bg"><a href="barrageIndex.htm" style="color:#fff;">留言幸运奖 </a></span>
                </p>
            </div>
        </div>
    </div>

    <script type="text/javascript">

        // 元素配置表: 缓存静态html元素
        var eleConfMap = {
        
        	// 弹幕
            brgContainer:       getClassName("barrage-container")[0],
            line1Wall:          getClassName("line1-wall")[0],
            line2Wall:          getClassName("line2-wall")[0],
            line3Wall:          getClassName("line3-wall")[0],
            line4Wall:          getClassName("line4-wall")[0],

            // 左侧边2个按钮
            $historyRecord:     $(".history-record"),
            $switchBtn:         $(".switch-btn"),

            // 中间奖项按钮
            $awardsBtn:         $(".awards-btn")
        };
        
        
        // ajax 配置图
        var ajaxMap = {

            // 按固定间隔时间读取数据
            ajaxGetJson: function () {
                var getJson = null;
                $.ajax({
                    url:'<%=request.getContextPath()%>/annualMeeting/showBarrage.htm',
                    type:'post',
                    async : false, // false/true 同步/异步
                    error:function(){ },
                    success:function(data){
                        if (typeof data === "string") {
                            data = JSON.parse(data);
                        }
                        getJson = data;
                        // console.log(getJson);
                    }
                });
                return getJson;
            }
        };


        window.onload = function(){

			// 弹幕
            (function () {

             	// dataLength 记录数据总长度 
               var dataLength = null; 
               var num = 0; 
               function barrage() { 
                   var json = ajaxMap.ajaxGetJson(); 
                   var i = 0, 
                       len = json.length; 
                   dataLength = len;

                   // 输出数据的长度 
                   console.log("输出数据的长度 " + dataLength);
                    
                   // num +1 
                   console.log("统计读取Ajax次数 " + num++); 
                    
                   var fragment; 
                   if (len > 0) { 

                       // 创建弹幕 div 
                       for (; i < len; i++) { 
                           if (i % 4 === 1) { 
                               // 创建元素 
                               fragment = mainMap.fnCreateEle(i, json[i]); 
                               eleConfMap.line1Wall.appendChild(fragment); 
                           } 
                           if (i % 4 === 2) { 
                               // 创建元素 
                               fragment = mainMap.fnCreateEle(i, json[i]); 
                               eleConfMap.line2Wall.appendChild(fragment); 
                           } 
                           if (i % 4 === 3) { 
                               // 创建元素 
                               fragment = mainMap.fnCreateEle(i, json[i]); 
                               eleConfMap.line3Wall.appendChild(fragment); 
                           } 
                           if (i % 4 === 0) { 
                               // 创建元素 
                               fragment = mainMap.fnCreateEle(i, json[i]); 
                               eleConfMap.line4Wall.appendChild(fragment); 
                           } 
                       } 

                        
                       // 滚动弹幕: 第一行: 
                       var aLin1DIV = getClassName("barrage-div", eleConfMap.line1Wall); 
                       mainMap.fnScroll(600, aLin1DIV); 
                       // 滚动弹幕: 第二行 
                       var aLin2DIV = getClassName("barrage-div", eleConfMap.line2Wall); 
                       mainMap.fnScroll(400, aLin2DIV); 
                       // 滚动弹幕: 第三行 
                       var aLin3DIV = getClassName("barrage-div", eleConfMap.line3Wall); 
                       mainMap.fnScroll(500, aLin3DIV); 
                       // 滚动弹幕: 第四行 
                       var aLin4DIV = getClassName("barrage-div", eleConfMap.line4Wall); 
                       mainMap.fnScroll(200, aLin4DIV); 

                       // 创建完之后清除当前 json 数据 
                       json = null; 
                   }

                    connection(dataLength);
                }

               // 如果当前 dataLength 等于0，就立马开始 
               if (dataLength === null) { 
                   barrage();
               } 

               function connection(dataLength){
                    dataLength = dataLength || 0;
                    if (dataLength === 0) {
                        equalZero();
                    }

                    if (dataLength > 0 && dataLength < 50) {
                        less50(dataLength)
                    }

                   if (dataLength >= 50 && dataLength <= 100) {
                       less100(dataLength);
                   }
               }

                var num1 = 0;
                var num2 = 0;
                var num3 = 0;
                function equalZero () {
                    setTimeout(function () {
                        console.log("equalZero num1 " + num1++);
                        barrage();
                    }, 6000);
                }

                function less50 (dataLength) {
                    setTimeout(function () {
                        console.log("largeZero num2 " + num2++);
                        barrage();
                    }, dataLength * 5 * 100);
                }

                function less100 (dataLength) {
                    setTimeout(function () {
                        console.log("largeZero num3 " + num3++);
                        barrage();
                    }, dataLength * 3 * 100);
                }


                
                // 弹幕开关
                eleConfMap.$switchBtn.click(function () {
                    if ( Number(eleConfMap.brgContainer.style.zIndex) === -20) {
                        eleConfMap.brgContainer.style.zIndex = "10";
                    } else {
                        eleConfMap.brgContainer.style.zIndex = "-20";
                    }
                })

            })();
			




            var i = 0,
                len =eleConfMap.$awardsBtn.length;
            for (; i < len; i++) {
                if(i < 2){
                    sr.reveal(eleConfMap.$awardsBtn[i], {
                        origin:     "bottom",
                        distance:   "80px",
                        opacity:    0,
                        scale:      1,
                        delay:      200,
                        easing:     "ease",
                        reset:      false,
                        mobile:     true,
                        duration:   600
                    });
                } else if(i<4) {
                    sr.reveal(eleConfMap.$awardsBtn[i], {
                        origin:     "bottom",
                        distance:   "80px",
                        opacity:    0,
                        scale:      1,
                        delay:      600,
                        easing:     "ease",
                        reset:      false,
                        mobile:     true,
                        duration:   600
                    });
                } else {
                    sr.reveal(eleConfMap.$awardsBtn[i], {
                        origin:     "bottom",
                        distance:   "80px",
                        opacity:    0,
                        scale:      1,
                        delay:      800,
                        easing:     "ease",
                        reset:      false,
                        mobile:     true,
                        duration:   600
                    });
                }
            }

            // 左侧"历史记录"
            eleConfMap.$historyRecord.click(function () {
                if($(this).hasClass("history-default-bg")){
                    $(this).removeClass("history-default-bg").addClass("history-bg-hover");
                } else {
                    $(this).removeClass("history-bg-hover").addClass("history-default-bg");
                }
            });


            // 左侧弹幕开关按钮hover效果
            eleConfMap.$switchBtn.click(function () {
                if($(this).hasClass("switch-btn-default-bg")){
                    $(this).removeClass("switch-btn-default-bg").addClass("switch-btn-bg-hover");
                    $(this).html("开");
                } else {
                    $(this).removeClass("switch-btn-bg-hover").addClass("switch-btn-default-bg");
                    $(this).html("关");
                }
            });

            // 4个奖项按钮hover效果
            eleConfMap.$awardsBtn.each(function(){
                $(this).hover(
                   function () {
                       if($(this).hasClass("img-default-bg")){
                           $(this).removeClass("img-default-bg").addClass("img-hover-bg");
                       } else {
                           $(this).removeClass("img-hover-bg").addClass("img-default-bg");
                       }
                   }
                )
            })
        }
    </script>
</body>
</html>

