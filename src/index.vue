<template>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data: function () {
            return {
            }
        },
    }
</script>
<style scoped>
    .wrapper {
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
    }
</style>
