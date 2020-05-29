<template>
    <div id="example-121" class="default-div">
        <h2>1.2.1 尽量减少代码重复</h2>
        <button class="bad-example-btn">Yes!</button>
        <button class="good-example-btn yes">Yes!</button>
        <button class="good-example-btn ok">OK</button>
        <button class="good-example-btn cancel">Cancel</button>
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
       *   30px = 1.875em
       *
       * - 当前 font-size 根据父元素 16px 换打算后 20px = 125% = 1.25em.
       *   那么从此刻开始, 请牢记下面 class 的 width / height /
       *   border-radius / padding / margin / border-radius ......
       *   都会根据 1em (= 125% = 1.25em) = 20px 来计算, 此时
       *   1px = 0.05em  2px = 0.1em   3px = 0.15em
       *   4px = 0.2em   5px = 0.25em  6px = 0.3em
       *   10px = 0.5em  20px = 1em    30px = 1.5em
       */
      font-size: 125%;
      line-height: 1.5;     /* 30px */
      padding: .3em .8em;
      border-radius: .2em;  /* 4px */
      border: 1px solid #446d88;
      box-shadow: 0 .05em .25em gray;
      text-shadow: 0 -.05em . #335166;
      color: white;
    }
    .yes {
         background: #58a linear-gradient(#77a0bb, #58a);
    }
    .ok {
        background-color: #6b0;
        border: 0;
    }
    .cancel {
        background-color: #c00;
        border: 0;
    }
</style>
