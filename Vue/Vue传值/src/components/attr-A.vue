<template>
    <div>
        <h3>attrA Component Got {{dataA}}</h3>
        <attrB v-bind="$attrs"/>
    </div>
</template>

<script>
import attrB from './attr-B.vue'
export default {
    props: {
        dataA: String
    },
    components: {
        attrB
    },
    created() {
        console.log('attrA中的attrs:', this.$attrs);
        console.log('attrA中的listeners:', this.$listeners);
    }
}
</script>

<style>
</style>