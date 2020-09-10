<template>
  <div class="sideBar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from "./sidebarItem";
export default {
  name: "sideBar",
  components: {
    SidebarItem,
  },
  computed: {
    routes() {
      console.log(this.$router.options.routes);
      return this.$router.options.routes;
    },
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style scoped lang="scss">
.sideBar {
  height: 100%;
  overflow-x: hidden;
  background-image: linear-gradient(-180deg, #497de1 0%, #091f48 100%);
}
</style>
