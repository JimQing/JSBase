<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld 
        ref='helloworld'
        msg="Welcome to Your Vue.js App"
        :sendData="sendData"
        @changeSendData="changeSendData"/>
        <hr>
    <h2>通过全局变量 $dataBus 传值</h2>
    <A />
    <B />
    <C />
    <hr>
    <h2>通过全局变量 $attr 传值</h2>
    <attrA 
        dataA="dataAAAA"
        dataB="dataBBBB"
        dataC="dataCCCC"
        @tapA="console.log('tap attrA')"
    />
    <hr>
    <h2>通过provide&inject 传值</h2>
    <injectA />
    <button @click="changeInjectAData">Click To Change injectA But will fail</button>
    <injectB />
  </div>
</template>

<script>
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import A from './components/on-A.vue'
import B from './components/on-B.vue'
import C from './components/on-C.vue'
import attrA from './components/attr-A.vue'
import injectA from './components/inject-A.vue'
import injectB from './components/inject-B.vue'
export default {
  name: 'app',
    data() {
        return {
            sendData: 'hello Child',
            provide_data: '通过provide传过去的data',
            observable_data: {
                str: '优化后的provide传过去的data'
            }
        };
    },
    //通过 return 拿到this
    provide() {
        // 使用 Vue.observable 优化响应式 provide
        this.observable_data = Vue.observable({
            str: '优化后的provide传过去的data'
        });
        return {
            // 传统做法
            provide_data: this.provide_data,
            // 提供父组件的实例
            provide_handle: this,
            // 提供优化过的值，this携带太多，用observable可以减少多余的依赖
            observable_data: this.observable_data
        }
    },
    components: {
        HelloWorld,
        A,
        B,
        C,
        attrA,
        injectA,
        injectB
    },
    methods: {
        changeSendData(value) {
            this.sendData = value;
        },
        changeInjectAData() {
            this.provide_data = '被修改的data';
        }
    },
    mounted() {
        // 通过ref获取子组件并调用子组件的方法 $child/$father
        const com_hello = this.$refs.helloworld;

        com_hello.speakHello();
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
