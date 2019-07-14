<template>
    <div>
        <h3>B Component</h3>
        <button @click="send">send</button>
    </div>
</template>

<script>
export default {
    methods: {
        send() {
            this.$dataBus.$emit('data-B', 'Msg from B sended')
        }
    }
}
</script>

<style>
</style>