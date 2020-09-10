<template>
<div class="firstPage">
    我是第一个页面
    <el-input v-model="cal"></el-input>
</div>
</template>

<script>
export default {
    data() {
        return {
            cal: null,
        };
    },
    created() {
        this.$store.dispatch('getData', '我是一段文字')
    },
    mounted() {
        setTimeout(() => {
            console.log(
                this.$store
            )
        }, 5000)
    }

};
</script>

<style></style>
