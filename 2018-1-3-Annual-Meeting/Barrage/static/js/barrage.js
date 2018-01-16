/** Created  2018/1/11.*/


var mainMap = {

    // 创建弹幕元素
    fnCreateEle:            function  (num, curJson) {
        var fragment = document.createDocumentFragment();
        var brgDiv = document.createElement("div");
        brgDiv.className = "barrage-div";
        brgDiv.style.marginLeft = (window.innerWidth + 780) + "px";


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
        if (curJson.userProfile !== "" || curJson.userProfile !== "undefined" || curJson.userProfile !== null ) {
            portrait.setAttribute("src", curJson.userProfile);
        } else {
            portrait.setAttribute("src", "static/img/user-head/default-avatar.jpg");
        }

        portrait.setAttribute("data-id", curJson.memberId);
        firstP.appendChild(portrait);

        var brgFont = document.createElement("p");
        brgFont.className = "barrage-font";
        brgFont.innerHTML = curJson.realName + "：" +  curJson.sendMsg;

        brgDiv.appendChild(firstP);
        brgDiv.appendChild(brgFont);
        fragment.appendChild(brgDiv);

        if (parseInt(curJson.memberId, 10) === 1) {
            brgDiv.style.backgroundColor = "rgba(216, 188, 125, .9)";
            brgDiv.style.zIndex = "20";
            hatSpan.style.display = "block";
            brgFont.style.color = "#414141";
        }
        return fragment;
    },

    // 生成 transform
    fnGenerateTransform:    function (elem, milSeconds) {

        // 取得当前 elem 上的所有 style 样式
        var iniStyle  = elem.getAttribute("style");

        var maxWidth = String(getStyle(elem, "max-width"));
        var totalWidth = Number(window.innerWidth) +  Number(maxWidth.substring(0, maxWidth.length-2));

        return  iniStyle + " transform: translateX(-" + totalWidth + "px); " +
            "; transition: " +
            "transform " + milSeconds + "s linear;";
    },

    // 向左滚动
    fnScroll:               function (time, aDiv) {
        var i = 0,
            len = aDiv.length;
        for (; i < len; i++) {
            aDiv[i] = function (num) {
                setTimeout(function () {
                    mainMap.fnGenerateTransform(aDiv[num]);

                    var brgFont = aDiv[num].getElementsByClassName("barrage-font")[0];
                    // console.log(brgFont.innerHTML.length);

                    var styles;
                    // 如果字体的长度大于12，就把左滚的速度增快
                    if ( brgFont.innerHTML.length <= 8 ){
                        styles = mainMap.fnGenerateTransform(aDiv[num], 12);
                        aDiv[num].setAttribute("style", styles);
                    }
                    if ( brgFont.innerHTML.length > 8 && brgFont.innerHTML.length <= 12  ){
                        styles = mainMap.fnGenerateTransform(aDiv[num], 10);
                        aDiv[num].setAttribute("style", styles);
                    }
                    if ( brgFont.innerHTML.length > 12 &&  brgFont.innerHTML.length <= 15 ) {
                        styles = mainMap.fnGenerateTransform(aDiv[num], 8);
                        aDiv[num].setAttribute("style", styles);
                    } else {
                        styles = mainMap.fnGenerateTransform(aDiv[num], 6);
                        aDiv[num].setAttribute("style", styles);
                    }

                }, time + i*1600 );
            }(i)
        }
    }

};

