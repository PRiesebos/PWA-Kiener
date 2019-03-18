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

export default {
    components: {
        Navbar,
        FooterComp,
    },
};
</script>

<style lang="scss"></style>
