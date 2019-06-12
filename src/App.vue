<template>
    <div id="app">
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<script>
const default_layout = "default";
import db from "@/db";
export default {
    computed: {
        layout() {
            return (this.$route.meta.layout || default_layout) + "-layout";
        },
    },
    created() {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                console.log("Notification permission granted.");
                db.retrieveToken();
            } else {
                console.log("Unable to get permission to notify.");
            }
        });
    },
};
</script>
