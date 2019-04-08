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
    <div>
        <nav-bar />
        <div class="container">
            <div class="row mt-5">
                <div class="col-4 col-md-4 col-lg-2 pl-0">
                    <account-panel />
                </div>
                <div class="col-8 col-md-8 col-lg-10 text-center">
                    <slot />
                </div>
            </div>
        </div>
        <footer-bar />
    </div>
</template>
