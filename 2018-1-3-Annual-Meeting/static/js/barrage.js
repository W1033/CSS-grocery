/** Created  2018/1/11.*/


var mainMap = {

    // 创建弹幕元素
    fnCreateEle:            function  (ajaxNum,num, curJson) {
        var fragment = document.createDocumentFragment();
        var brgDiv = document.createElement("div");
        brgDiv.className = "barrage-div";
        brgDiv.setAttribute("data-ajax-num", ajaxNum);
        brgDiv.style.marginLeft = (window.innerWidth + 780) + "px";
        // brgDiv.style.visibility = "hidden";

        var firstP = document.createElement("p");
        var hatSpan = document.createElement("span");
        hatSpan.className = "hat";
        hatSpan.style.display = "none";
        var hatSpanImg = document.createElement("img");
        /*if (curJson.userProfile == "" || ) {}*/

        hatSpanImg.setAttribute("src", "static/img/user-head/hat.png");
        hatSpan.appendChild(hatSpanImg);
        firstP.appendChild(hatSpan);

        var portrait = document.createElement("img");
        portrait.className = "portrait";
        portrait.setAttribute("src", curJson.userProfile);
        portrait.setAttribute("data-id", curJson.memberId);
        firstP.appendChild(portrait);

        var brgFont = document.createElement("p");
        brgFont.className = "barrage-font";
        brgFont.innerHTML = brgJson[num].realName + "：" +  brgJson[num].sendMsg;

        brgDiv.appendChild(firstP);
        brgDiv.appendChild(brgFont);
        fragment.appendChild(brgDiv);

        if (parseInt(brgJson[num].memberId, 10) === 1) {
            // brgDiv.style.backgroundColor = "rgb(223, 206, 2)";
            brgDiv.style.opacity = "0.92";
            brgDiv.style.background= "linear-gradient(to bottom, #f5f424, #f0831f)";
            brgDiv.style.zIndex = "20";
            hatSpan.style.display = "block";
            brgFont.style.color = "#101010";
            brgFont.style.fontWeight = "bold";
        }
        return fragment;
    },

    // 生成 transform
    fnGenerateTransform:    function (elem, milSeconds) {
        var elems = {};
        // 取得当前 elem 上的所有 style 样式
        elems.init  = elem.getAttribute("style");

        var getTransition = getCss("transition",elem);
        // console.log(getTransition);

        var maxWidth = String(getStyle(elem, "max-width"));
        var totalWidth = Number(window.innerWidth) +  Number(maxWidth.substring(0, maxWidth.length-2));

        var text = "all 0s ease 0s";
        // 确定有没有添加 transition 如果已添加不允许重复添加
        if (getTransition === text || getTransition === "") {
             return  elems.init + " transform: translateX(-" + totalWidth + "px)" +
             "; transition: " +
             "transform " + milSeconds + "s linear;";
        } else {
            return elems.init;
        }
    },

    // 向左滚动
    fnScroll:               function (time, aDiv) {
        var i = 0,
            len = aDiv.length;
        // console.log(len);
        for (; i < len; i++) {
            aDiv[i] = function (num) {
                setTimeout(function () {
                    var brgFont = aDiv[num].getElementsByClassName("barrage-font")[0];
                    var fontLength = brgFont.innerHTML.length;

                    var styles;
                    // 根据返回的字符长度，确定滚动速度
                    if ( fontLength <= 8 ){
                        styles= mainMap.fnGenerateTransform(aDiv[num], 16);
                        aDiv[num].setAttribute("style", styles);
                    }
                    if ( fontLength > 8 && fontLength <= 12  ){
                        styles= mainMap.fnGenerateTransform(aDiv[num], 14);
                        aDiv[num].setAttribute("style", styles);
                    }
                    if ( fontLength > 12 &&  fontLength <= 15 ) {
                        styles= mainMap.fnGenerateTransform(aDiv[num], 12);
                        aDiv[num].setAttribute("style", styles);
                    } else {
                        styles= mainMap.fnGenerateTransform(aDiv[num], 10);
                        aDiv[num].setAttribute("style", styles);
                    }

                }, time + i*1600 );
            }(i)
        }
    },

    // 每行达到1000条时执行一次清楚,清楚定时为5min[300000ms]之后
   /* fnClear:                function (container, line1, line2, line3, line4) {
        var brgDiv = getClassName("barrage-div", container);
        if (brgDiv.length > 100 && brgDiv.length < 200) {
            console.log("brgDiv.length" + brgDiv.length);

        }
    }*/

};

