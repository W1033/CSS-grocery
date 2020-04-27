<template>
    <div id="app">
        <img alt="Vue logo" class="logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <Example121/>
    </div>
</template>

<script type="text/javascript">
    import HelloWorld from './components/HelloWorld.vue';
    import Example121 from './components/1.2.1.vue';

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Example121,
        }
    }
</script>

<style src="./assets/typo.css"></style>
<style>
    #app {
        text-align: left;
        color: #2c3e50;
        margin-top: 3px;
    }
    .logo{
        display: block;
        width: 120px;
        height: auto;
        margin: 0 auto;
    }

    /* --------- */
    
    h1, h2, h3, h4 {
        margin: 5px 0;
        font-size: 1.4em;
    }
    p {
        margin: 5px 0;
        line-height: 20px;
    }
    div, p {
        border-radius: 4px;
    }
    button, input, textarea {
        outline: none;
        box-shadow: none;
    }
    button {
        line-height: 16px;
        padding: 3px 6px;
        margin: 6px 6px 6px 0;
        cursor: pointer;
        border-radius: 4px;
        text-align: center;
        background-color: #fafafa;
        border: none;
    }
    button:hover {
        background-color: #e2e6ea;
        color: #222629;
    }
    input {
        min-width:120px;
        line-height: 26px;
        text-indent: 10px;
        border: none;
        border-radius: 4px;
    }
    .default-div {
        margin: 6px 0 6px 12px;
        min-width:260px;
        max-width: 360px;
        min-height: 260px;
        max-height: 360px;
        padding: 0 10px;
        float: left;
        background: #fafafa;
        overflow: hidden;
    }
    
</style>