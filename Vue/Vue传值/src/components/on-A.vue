<template>
    <div>
        <h3>A Component</h3>
        <button @click="send">send</button>
    </div>
</template>

<script>
export default {
    methods: {
        send() {
            this.$dataBus.$emit('data-A', 'Msg from A sended')
        }
    }
}
</script>

<style>
</style>
