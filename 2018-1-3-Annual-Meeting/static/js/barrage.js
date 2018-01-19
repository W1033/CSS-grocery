/** Created  2018/1/11.*/


var mainMap = {

    // 创建弹幕元素
    fnCreateEle:            function  (ajaxNum,num, curJson) {
        var fragment = document.createDocumentFragment();
        var brgDiv = document.createElement("div");
        brgDiv.className = "barrage-div";
        brgDiv.setAttribute("data-ajax-num", ajaxNum);
        brgDiv.style.marginLeft = (window.innerWidth + 780) + "px";
        // 创建元素后就添加 transitionend 事件，在 transition 执行完毕之后会生成 data-over-flag = 1;
        brgDiv.addEventListener("transitionend", function () {
            this.setAttribute("data-over-flag", 1);
        }, false);
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

    // 清楚执行完毕的弹幕
    fnClear:                function (container) {
        var brgDiv = getClassName("barrage-div", container);
        var i = 0,
            len = brgDiv.length;
        for (; i < len; i++) {
            if (brgDiv[i].getAttribute("data-over-flag") == 1) {

                if (brgDiv[i].parentNode.className = "line1-wall") {
                    brgDiv[i].parentNode.removeChild(brgDiv[i])
                }
                if (brgDiv[i].parentNode.className = "line2-wall") {
                    brgDiv[i].parentNode.removeChild(brgDiv[i])
                }
                if (brgDiv[i].parentNode.className = "line3-wall") {
                    brgDiv[i].parentNode.removeChild(brgDiv[i])
                }
                if (brgDiv[i].parentNode.className = "line3-wall") {
                    brgDiv[i].parentNode.removeChild(brgDiv[i])
                }
            }
        }

    }

};

