<template>
<div class="sideBarItem">
    <template v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      ">
        <app-link :to="resolvePath(onlyOneChild.path)">
            <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
                <item :meta="Object.assign({}, item.meta, onlyOneChild.meta)" />
            </el-menu-item>
        </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
        <template slot="title">
            <item :meta="item.meta" />
        </template>
        <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" :base-path="resolvePath(child.path)" class="nest-menu" />
    </el-submenu>
</div>
</template>

<script>
import path from "path";
import Item from "./Item";
import AppLink from "./Link";

export default {
    name: "sidebarItem",
    data() {
        return {
            onlyOneChild: null,
        };
    },
    components: {
        Item,
        AppLink,
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
        basePath: {
            type: String,
        },
        isNest: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter((item) => {
                if (item.hidden) {
                    return false;
                } else {
                    // Temp set(will be used if only has one showing child)
                    this.onlyOneChild = item;
                    return true;
                }
            });
            // When there is only one child router, the child router is displayed by default
            if (showingChildren.length === 1) {
                return true;
            }
            // Show parent if there are no child router to display
            if (showingChildren.length === 0) {
                this.onlyOneChild = {
                    ...parent,
                    path: "",
                    noShowingChildren: true
                };
                return true;
            }
            return false;
        },
        resolvePath(routePath) {
            // console.log(this.basePath);
            // console.log(routePath);
            // console.log("--------------");
            // console.log(path.resolve(this.basePath, routePath));
            // console.log("--------------");
            return path.resolve(this.basePath, routePath);
        },
    },
};
</script>

<style lang="scss" scoped>
.submenu-title-noDropdown,
.el-submenu__title {
    &:hover {
        background-color: #263445 !important;
    }
}
</style>
