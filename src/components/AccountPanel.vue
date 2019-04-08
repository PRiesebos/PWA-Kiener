<template>
    <div class="sticky-top">
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
        currentUserData() {
            return this.$store.state.currentUserData;
        },
    },
    methods: {
        async signOut() {
            this.$router.push({ name: "home" });
            let result = await db.signOut();
            if (result.message) {
                console.log(result.message);
            }
        },
    },
};
</script>

<style scoped>
ul > li > a {
    color: black;
}
</style>
