<template>
    <div class="app-wrapper">
        <router-view class="r-box1"></router-view>
        <navigation_bar></navigation_bar>
    </div>
</template>

<script>
    import NavigationBar from '@/components/NavigationBar'
    export default {
        name: 'App',
        data:function() {
            return {}
        },
        components: {
            "navigation_bar": NavigationBar
        }
    }
</script>
<style>
    body{
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color:#333;
    }
</style>
<style scoped>
    .app-wrapper {
        flex-direction: column-reverse;
        background-color: #f4f4f4;
    }
    .r-box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
