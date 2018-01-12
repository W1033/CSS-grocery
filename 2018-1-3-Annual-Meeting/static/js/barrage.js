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


/*
Barrage.prototype.defaults = {
    origin:     "bottom",
    distance:   "20px",
    duration:   500,
    delay:      0,
    opacity:    0,
    scale:      0.9,
    easing:     "cubic-bezier(0.6, 0.2, 0.1, 1)",
    container:  window.document.documentElement,
};
*/

