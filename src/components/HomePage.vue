<template>
    <div class="wrapper">
        <home_title></home_title>
        <home_tab_layout></home_tab_layout>
    </div>
</template>
<script>
    import HomeTitle from '@/components/HomeTitle'
    import HomeTabLayout from '@/components/HomeTabLayout'

    export default {
        name: "HomePgae",
        data: function () {
            return {}
        },
        components: {
            "home_title": HomeTitle,
            "home_tab_layout": HomeTabLayout,
        },
    }

</script>
<style scoped>
    .wrapper {
        flex-direction: column;
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
    }
</style>
