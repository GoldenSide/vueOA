<template>
<div class="appMain">
    <transition name="fade-transform" mode="out-in">
        <!-- :include="cachedViews"  -->
        <keep-alive :max="10">
            <router-view :key="$route.name" />
            <!-- :key="key" -->
        </keep-alive>
    </transition>
</div>
</template>

<script>
export default {
    name: "appMain",
};
</script>

<style scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all 0.5s;
}

.fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
