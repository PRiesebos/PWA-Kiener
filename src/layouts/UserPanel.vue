<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
import AccountPanel from "@/components/AccountPanel";
export default {
    components: {
        NavBar,
        FooterBar,
        AccountPanel,
    },
};
</script>
<template>
    <div class="wrapper">
        <nav-bar />
        <div class="content container mt-5">
            <div class="row mt-5">
                <div class="col-4 col-md-4 col-lg-2 pr-0">
                    <account-panel />
                </div>
                <div class="col-8 col-md-8 col-lg-10 pr-0">
                    <slot />
                </div>
            </div>
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
