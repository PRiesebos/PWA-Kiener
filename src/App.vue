<template>
    <div id="app">
        <navbar />
        <router-view />
        <footerComp />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import FooterComp from "@/components/FooterComp";
import "@/db";
export default {
    components: {
        Navbar,
        FooterComp,
    },
};
</script>

<style lang="scss"></style>
