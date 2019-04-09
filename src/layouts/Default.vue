<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
export default {
    components: {
        NavBar,
        FooterBar,
    },
};
</script>

<template>
    <div class="wrapper">
        <nav-bar />
        <div class="content">
            <slot />
        </div>
        <footer-bar />
    </div>
</template>

<style scoped>
html {
    display: flex;
}

.wrapper {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.header,
.footer {
    flex-shrink: 0;
}

.content {
    flex-grow: 1;
}
</style>
