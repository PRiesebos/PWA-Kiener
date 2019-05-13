<template>
    <div
        class="sticky-top"
        :class="{
            'custom-margin-top': showNavbar,
            'custom-margin-top2': !showNavbar,
        }"
    >
        <div class="border rounded col-md-12">
            <div>
                <p class="font-weight-bold mt-3 text-break">
                    Hey, {{ currentUserData.name.split(" ", 1).toString() }}
                </p>
                <hr class="w-100" />
                <ul class="list-group list-unstyled text-left">
                    <li class="my-1">
                        <router-link to="/account/overview"
                            >Overview</router-link
                        >
                    </li>
                    <li class="my-1">
                        <router-link to="/account/profile">Profile</router-link>
                    </li>
                    <li class="my-1">
                        <router-link to="/account/address"
                            >Addresses</router-link
                        >
                    </li>
                    <li class="my-1">
                        <router-link to="/account/paymentmethods"
                            >Payment methods</router-link
                        >
                    </li>
                    <li class="my-1">
                        <router-link to="/account/orders">Orders</router-link>
                    </li>
                </ul>
                <div>
                    <hr class="w-100" />
                    <button class="btn btn-primary mb-2 w-100" @click="signOut">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from "@/db";
export default {
    name: "AccountPanel",
    data() {
        return {
            showNavbar: true,
        };
    },
    computed: {
        currentUserData() {
            return this.$store.state.currentUserData;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll2);
    },

    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll2);
    },
    methods: {
        async signOut() {
            this.$router.push({ name: "home" });
            await db.signOut();
        },
        onScroll2() {
            if (window.innerWidth >= 575) {
                const currentScrollPosition =
                    window.pageYOffset || document.documentElement.scrollTop;
                if (currentScrollPosition < 0) {
                    return;
                }
                if (
                    Math.abs(currentScrollPosition - this.lastScrollPosition) <
                    56
                ) {
                    return;
                }
                this.showNavbar =
                    currentScrollPosition < this.lastScrollPosition;
                this.lastScrollPosition = currentScrollPosition;
            }
        },
    },
};
</script>

<style scoped>
ul > li > a {
    color: black;
}
.custom-margin-top {
    top: 66px !important;
}
.custom-margin-top2 {
    top: 10px !important;
}
</style>
