<template>
    <div>
        <button
            class="btn btn-light text-truncate custom-max-width"
            data-toggle="dropdown"
        >
            <font-awesome-icon :icon="['far', 'user']" />
            {{
                currentUserData != null
                    ? "Hello, " + currentUserData.name.split(" ", 1)
                    : "Sign in"
            }}
        </button>
        <div>
            <ul class="dropdown-menu dropdown-menu-custom-right">
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
                                    Sing in or register to buy our merchandise.
                                </p>
                            </div>
                        </div>
                        <ul class="list-group list-unstyled" v-if="currentUser">
                            <hr class="w-100 my-2" />
                            <li>
                                <router-link
                                    to="/account/overview"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show, .dropdown-menu"
                                    >Overview</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/account/profile"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show, .dropdown-menu"
                                    >Profile</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/account/address"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show, .dropdown-menu"
                                    >Addresses</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/account/paymentmethods"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show, .dropdown-menu"
                                    >Payment methods</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/account/orders"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show, .dropdown-menu"
                                    >Orders</router-link
                                >
                            </li>
                            <div v-if="currentUser != null">
                                <hr class="w-100" />
                                <button
                                    class="btn btn-primary w-100"
                                    @click="signOut"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse.show, .dropdown-menu"
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
        currentUserData() {
            return this.$store.state.currentUserData;
        },
    },
    methods: {
        async signOut() {
            this.$router.push({ name: "home" });
            await db.signOut();
        },
    },
};
</script>

<style scoped>
@media (max-width: 575px) {
    .custom-max-width {
        max-width: 140px;
    }
}
@media (min-width: 575px) {
    .custom-max-width {
        max-width: 160px;
    }
}
ul > li > a {
    color: black;
}
.dropdown-menu {
    min-width: 200px;
    z-index: 1021;
}
.dropdown-menu-custom-right {
    left: auto;
}
</style>
