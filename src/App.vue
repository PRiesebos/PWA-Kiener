<template>
    <div id="app">
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<script>
const default_layout = "default";
import "@/db";
export default {
    computed: {
        layout() {
            return (this.$route.meta.layout || default_layout) + "-layout";
        },
    },
};
</script>
