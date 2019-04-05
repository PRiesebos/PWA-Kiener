<template>
    <div>
        <button class="btn btn-light" data-toggle="dropdown">
            <font-awesome-icon :icon="['far', 'user']" /> My account
        </button>
        <div>
            <ul class="dropdown-menu dropdown-menu-right mt-2">
                <li class="px-3 py-2">
                    <form class="form" role="form" @submit.prevent>
                        <p class="font-weight-bold">My account</p>
                        <div v-if="!currentUser">
                            <hr class="w-100 my-2" />
                            <div>
                                <router-link
                                    to="/signin"
                                    class="btn btn-primary d-block col-md-12 mt-3"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show, .dropdown-menu"
                                    >Sign in</router-link
                                >
                            </div>
                            <div class="form-group text-center mb-0">
                                <p class="d-inline">or</p>
                                <div class="d-inline">
                                    <router-link
                                        to="/register"
                                        class="btn btn-link d-inline pl-1"
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse.show, .dropdown-menu"
                                        >Register</router-link
                                    >
                                </div>
                            </div>
                            <div v-if="currentUser == null">
                                <hr class="w-100" />
                                <p>
                                    Sing up or register to buy our merchandise.
                                </p>
                            </div>
                        </div>
                        <ul class="list-group list-unstyled" v-if="currentUser">
                            <hr class="w-100 my-2" />
                            <li>
                                <router-link
                                    to="/account/user/overview"
                                    data-toggle="dropdown"
                                    >Overview</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/account/user/profile"
                                    data-toggle="dropdown"
                                    >profile</router-link
                                >
                            </li>
                            <li><a href="#">Addresses</a></li>
                            <li><a href="#">Payment methods</a></li>
                            <li><a href="#">Orders</a></li>
                            <div v-if="currentUser != null">
                                <hr class="w-100" />
                                <button
                                    class="btn btn-primary w-100"
                                    @click="signOut"
                                >
                                    Log Out
                                </button>
                            </div>
                        </ul>
                    </form>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import db from "@/db";
export default {
    name: "MyAccount",
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
.dropdown-menu {
    min-width: 200px;
}
</style>
