<template>
    <div class="indicator">
        <div class="indicator_container">
            <div :class="[setIndex(position-1)]" v-for="position in indicatorCount">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "CustomIndicator",
        props: ['indicatorCount', 'index'],
        data: function () {
            return {}
        },
        methods: {
            setIndex: function (pos) {
                return pos === this.index ? 'selectStyle' : 'unselectStyle'
            }
        }
    }
</script>
<style scoped>
    .indicator {
        width: 750px;
        height: 50px;
    }

    .indicator_container {
        flex-direction: row;
        position: absolute;
        right: 25px;
        bottom: 30px;
        align-items: flex-end;
    }

    .selectStyle {
        width: 14px;
        height: 14px;
        margin-left: 5px;
        margin-right: 5px;
        background-color: #FFFFFF;
    }

    .unselectStyle {
        width: 14px;
        height: 6px;
        margin-left: 5px;
        margin-right: 5px;
        background-color: rgba(255, 255, 255, 0.5);;
    }
</style>