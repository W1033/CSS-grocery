<template>
    <div id="example-121" class="default-div">
        <h2>1.2.1 尽量减少代码重复</h2>
        <button class="bad-example-btn">Yes!</button>
        <button class="good-example-btn">Yes!</button>
    </div>
</template>

<script>
    export default {
        name: 'Example121',
    }
</script>

<style scoped>
    button {
      margin: 10px;
    }
    .bad-example-btn {
      padding: 6px 16px;
      border: 1px solid #446d88;
      background: #58a linear-gradient(#77a0bb, #58a);
      border-radius: 4px;
      box-shadow: 0 1px 5px gray;
      color: white;
      text-shadow: 0 -1px 1px #335166;
      font-size: 20px;
      line-height: 30px;
    }
    .good-example-btn {
      /* - 假设父级元素的字体大小是 16px
       *   1em = 16px ==> 1.6px = 0.1em ==> 0.25em = 4px
       *   1px = 0.0625em
       *   10px = 0.625em
       *   20px = 1.25em,
       *   30px = 1.5em
       */
      /* - 当前 font-size 根据父元素 16px 换打算后 20px = 125% = 1.25em.
       *   那么到现在为止, 请牢记当前 class 下面的 padding, border-radius
       *   (还包含, width, height, box-shadow, text-shadow,
       *   都会根据 1em (= 125% = 1.25em) = 20px 来计算, 此时
       *   1px = 0.05em;
       *   2px = 0.1em
       *   3px = 0.15em
       *   4px = 0.2em
       *   5px = 0.25em
       *   6px = 0.3em
       */
      font-size: 125%;
      /* - line-height: 也是相对于父元素 font-size 的大小来的 */
      line-height: 1.5;
      padding: .3em .8em;
      border: 1px solid #446d88;
      background: #58a linear-gradient(#77a0bb, #58a);
    }
</style>
