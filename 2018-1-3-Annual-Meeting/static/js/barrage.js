/** Created  2018/1/11.*/

function Barrage () {
    // 支持实例化无 new 关键字
    if (typeof this === "undefined" || Object.getPrototypeOf(this) !== Barrage.prototype) {
        return new Barrage();
    }

    // 保存对实例的引用
    var brg;
    brg = this;

    brg.sequence = {};      // 当前序列
    brg.uid = 0;            // this.uid

    return brg;
}


var mainMap = {

    // 创建弹幕元素
    fnCreateEle:            function  (num, curJson) {
        var fragment = document.createDocumentFragment();
        var brgDiv = document.createElement("div");
        brgDiv.className = "barrage-div";
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
            brgDiv.style.backgroundColor = "rgba(216, 188, 125, .9)";
            brgDiv.style.zIndex = "20";
            hatSpan.style.display = "block";
            brgFont.style.color = "#414141";
        }
        return fragment;
    },

    // 生成 transform
    fnGenerateTransform:    function (elem, milSeconds) {
        var elems = {};
        // 取得当前 elem 上的所有 style 样式
        elems.init  = elem.getAttribute("style");

        var maxWidth = String(getStyle(elem, "max-width"));
        var totalWidth = Number(window.innerWidth) +  Number(maxWidth.substring(0, maxWidth.length-2));
        elems.target = elems.init +
            " transform: translateX(-" + totalWidth + "px); " +
            "translate: transform " + milSeconds + "s linear;";
        // console.log(elems.target);


        return  elems.init + " transform: translateX(-" + totalWidth + "px); " +
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

