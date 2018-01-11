/** Created  2018/1/11.*/

function Barrage () {
    // 支持实例化无 new 关键字
    /* ECMAScript 5 增加了一个新方法，叫 Object.getPrototypeOf()【getPrototypeOf取得原型】,在所有支持的实现中，这个方法返回 [[Prototype]] 的值。例如：
     * alert(Object.getPrototypeOf(person1) == Person.prototype); //true
     * --《js高程》第6章: 取得原型对象 */
    // typeof this === "undefined" 检测 this 是未定义的，
    // 第二个判断，this 存在但其原型不等于当前构造函数的原型
    if (typeof this === "undefined" || Object.getPrototypeOf(this) !== Barrage.prototype) {
        return new Barrage();
    }
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

