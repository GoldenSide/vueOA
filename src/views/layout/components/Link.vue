<template>
<!-- eslint-disable vue/require-component-is -->
<!--   <component v-bind="linkProps(to)">
    <slot />
</component>-->
<div class="container"></div>
</template>

<script>
import {
    isExternal
} from "@/utils/validate";
export default {
    props: {
        to: {
            type: String,
            required: true,
        },
    },
    methods: {
        linkProps(url) {
            if (isExternal(url)) {
                return {
                    is: "a",
                    href: url,
                    target: "_blank",
                    rel: "noopener",
                };
            }
            return {
                is: "router-link",
                to: url,
            };
        },
    },
};
</script>
