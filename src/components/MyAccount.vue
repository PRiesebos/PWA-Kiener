<template>
    <div>
        <button class="btn btn-light" data-toggle="dropdown">
            <i class="far fa-user"></i>
            My account
        </button>
        <ul class="dropdown-menu dropdown-menu-right mt-2">
            <li class="px-3 py-2">
                <form class="form" role="form">
                    <p class="font-weight-bold">My account</p>
                    <div v-if="!currentUser">
                        <hr class="w-100 my-2" />
                        <router-link
                            to="/account"
                            class="btn btn-primary d-block col-md-12 mt-3"
                            data-toggle="dropdown"
                            >Sign in</router-link
                        >
                        <div class="form-group text-center mb-0">
                            <p class="d-inline">or</p>
                            <router-link
                                to="/account"
                                class="btn btn-link d-inline pl-1"
                                data-toggle="dropdown"
                                >Register</router-link
                            >
                        </div>
                    </div>
                    <hr class="w-100 my-2" />
                    <ul class="list-group list-unstyled">
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Addresses</a></li>
                        <li><a href="#">Payment methods</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Instant downloads</a></li>
                        <li><a href="#">Wish list</a></li>
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
            await db.signOut();
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
