<template>
    <div>
        <h3>inject-B Component</h3>
        <button @click="test">Click to change sendData</button>
        <button @click="test2">Click to change observable_data</button>
        <h4>inject-B get observable {{observable_data.str}}</h4>
    </div>
</template>

<script>
export default {
    inject: {
        provide_handle: {
            // 函数式组件取值,返回一个{}
            default: ()=> ({})
        },
        observable_data: {
            // 函数式组件取值,返回一个{}
            default: ()=> ({})
        }
    },
    methods: {
        // 修改父组件的值但不会相应
        test() {
            this.provide_handle.sendData = "我injectB借用父组件的this修改了sendData!";
        },
        // 修改父组件的值但因为优化过可以响应,且绕开了this这个'胖子',原本不响应
        test2() {
            this.observable_data = {
                str: "我injectB修改了observable_data,不通过父组件的this!"
            };
            // fail ,没有响应到父组件的observable_data
        }
    }
}
</script>

<style>
</style>