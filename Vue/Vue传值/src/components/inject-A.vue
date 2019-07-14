<template>
    <div>
        <h3>inject-A Component Got</h3>
        <h4>{{provide_data}}</h4>
    </div>
</template>

<script>
export default {
    inject: ['provide_data']
}
</script>

<style>
</style>