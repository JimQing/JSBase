<template>
    <div>
        <h3>attrC Component Got {{dataC}}</h3>

    </div>
</template>

<script>
export default {
    props: {
        dataC: String
    },
    created() {
        console.log('attrC中的attrs:', this.$attrs);
        console.log('attrC中的listeners:', this.$listeners);
    }
}
</script>

<style>
</style>