<template>
    <div>
        <h3>attrB Component Got {{dataB}}</h3>
        <attrC v-bind="$attrs"/>
    </div>
</template>

<script>
import attrC from './attr-C.vue'
export default {
    props: {
        dataB: String
    },
    components: {
        attrC
    },
    created() {
        console.log('attrB中的attrs:', this.$attrs);
        console.log('attrB中的listeners:', this.$listeners);
    }
}
</script>

<style>
</style>