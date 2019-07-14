<template>
    <div>
        <h3>C Component</h3>
        <h5>msg A:{{msgA}}</h5>
        <h5>msg B:{{msgB}}</h5>
    </div>
</template>

<script>
export default {
    data() {
        return{
            msgA: '',
            msgB: ''
        };
    },
    mounted() {
        this.$dataBus.$on('data-A', msg=> {
            this.msgA = msg;
        });
        this.$dataBus.$on('data-B', msg=> {
            this.msgB = msg;
        });
    }
}
</script>

<style>
</style>