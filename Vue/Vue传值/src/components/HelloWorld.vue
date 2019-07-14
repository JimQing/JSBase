<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="$emit('changeSendData', 'hello Father')">
        props传入的值：
        {{sendData}}
    </h2>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
        sendData: {
            type: String,
            required: true
        }
    },
    methods: {
        speakHello() {
            // 父组件实例
            console.log(this.$parent);
            window.alert('hello');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h2{
    cursor: pointer;
}
</style>
