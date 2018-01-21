/** Created  2018/1/11.*/


var mainMap = {

    // 创建弹幕元素
    fnCreateEle:            function  (ajaxNum, index, top, curJson) {
        var fragment = document.createDocumentFragment();
        var brgDiv = document.createElement("div");
        brgDiv.className = "barrage-div";
        brgDiv.setAttribute("data-index", index);
        brgDiv.setAttribute("data-ajaxNum", ajaxNum);
        brgDiv.style.marginLeft = (window.innerWidth + 780) + "px";
        // brgDiv.style.marginLeft = 1000 + "px";
        brgDiv.style.marginTop = top;

        // 创建元素后就添加 transitionend 事件，在 transition 执行完毕之后会生成 data-over-flag = 1;
        brgDiv.addEventListener("transitionend", function () {
            this.setAttribute("data-over-flag", 1);
            var self = this;
            setTimeout(function () {
                if (self.getAttribute("data-over-flag") === "1") {
                    if (self.parentNode) {
                        self.parentNode.removeChild(self);
                    }
                }
            }, 2000);
        }, false);


        var firstP = document.createElement("p");
        var hatSpan = document.createElement("span");
        hatSpan.className = "hat";
        hatSpan.style.display = "none";
        var hatSpanImg = document.createElement("img");

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
        brgFont.innerHTML = curJson.realName + "：" +  curJson.sendMsg;

        brgDiv.appendChild(firstP);
        brgDiv.appendChild(brgFont);
        fragment.appendChild(brgDiv);

        if (parseInt(curJson.memberId, 10) === 1) {
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
    fnGenerateTransform:    function (elem, milSeconds, delay) {
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
             "transform " + milSeconds + "s linear " +  delay + "s;";
        } else {
            return elems.init;
        }
    },

    // 向左滚动
    fnScroll:               function (aDiv) {
        var i = 0,
            len = aDiv.length;
        var delay = 0;
        for (; i < len; i++) {
            var brgFont = aDiv[i].getElementsByClassName("barrage-font")[0];
            var fontLength = brgFont.innerHTML.length;

            var styles;
            delay = i/2 ;
            // 根据返回的字符长度，确定滚动速度
            if ( fontLength <= 8 ){
                styles= mainMap.fnGenerateTransform(aDiv[i], 14, delay);
                aDiv[i].setAttribute("style", styles);
            }
            if ( fontLength > 8 && fontLength <= 12  ){
                styles= mainMap.fnGenerateTransform(aDiv[i], 12, delay);
                aDiv[i].setAttribute("style", styles);
            }
            if ( fontLength > 12 &&  fontLength <= 15 ) {
                styles= mainMap.fnGenerateTransform(aDiv[i], 10, delay);
                aDiv[i].setAttribute("style", styles);
            } else {
                styles= mainMap.fnGenerateTransform(aDiv[i], 8, delay);
                aDiv[i].setAttribute("style", styles);
            }

            /*aDiv[i] = function (num) {
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

                }, time + num*200 );
            }(i)*/
        }
    },

};

