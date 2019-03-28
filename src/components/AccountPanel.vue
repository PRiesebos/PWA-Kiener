<template>
    <div class="sticky-top">
        <div class="border rounded col-md-12">
            <div>
                <p class="font-weight-bold mt-3 text-break">
                    Hey, {{ currentUser.displayName }}
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
                        <router-link to="/account/overview"
                            >Addresses</router-link
                        >
                    </li>
                    <li class="my-1">
                        <router-link to="/account/overview"
                            >Payment methods</router-link
                        >
                    </li>
                    <li class="my-1">
                        <router-link to="/account/overview">Orders</router-link>
                    </li>
                    <li class="my-1">
                        <router-link to="/account/overview"
                            >Instant downloads</router-link
                        >
                    </li>
                    <li class="my-1">
                        <router-link to="/account/overview"
                            >Wish list</router-link
                        >
                    </li>
                    <div>
                        <hr class="w-100" />
                        <button
                            class="btn btn-primary mb-2 w-100"
                            @click="signOut"
                        >
                            Log Out
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import db from "@/db";
export default {
    name: "AccountPanel",
    data() {
        return {};
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser;
        },
    },
    methods: {
        async signOut() {
            await db
                .signOut()
                .then(() => {})
                .catch(function(error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode == "auth/invalid-email") {
                        alert(errorMessage);
                    } else if (errorCode == "auth/user-not-found") {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
            this.$router.push({ name: "home" });
        },
    },
};
</script>

<style scoped>
ul > li > a {
    color: black;
}
</style>
