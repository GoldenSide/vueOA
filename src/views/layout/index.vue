<template>
<div class="container">
    <aside>
        <sideBar />
    </aside>
    <article>
        <header>
            <navsView />
        </header>
        <main>
            <appMain />
        </main>
    </article>
</div>
</template>

<script>
import sideBar from "./components/sideBar";
import navsView from "./components/navsView";
import appMain from "./components/appMain";
export default {
    components: {
        sideBar,
        navsView,
        appMain,
    },
    watch: {
        $route: {
            immediate: true,
            deep: true,
            handler(val) {
                console.log(val);
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: row;

    aside {
        width: 150px;
    }

    article {
        flex: 1;
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        header {
            height: 100px;
        }

        main {
            flex: 1;
            flex-grow: 1;
        }
    }
}
</style>
