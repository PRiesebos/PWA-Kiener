<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-4 col-md-4 col-lg-2 pl-0"><AccountPanel /></div>
            <div class="col-8 col-md-8 col-lg-10 text-center">
                <div v-if="newsletter">
                    <div class="alert alert-info" role="alert">
                        Your subscription has changed.
                        <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <p class="h1 my-5 text-break">
                    Welcome, {{ currentUserData.name.split(" ", 1).toString() }}
                </p>
                <div class="text-left">
                    <p>
                        This is your account dashboard which enables you to view
                        your account activities.
                    </p>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 my-3 text-left">
                        <div class="overview-block">
                            <p class="font-weight-bold">Profile</p>
                            <hr class="w-100 my-3" />
                            <p class="my-1">
                                {{ currentUserData.name }}
                            </p>
                            <p class="my-1">{{ currentUserData.email }}</p>
                            <p class="my-1">
                                Verified email: {{ currentUser.emailVerified }}
                            </p>
                        </div>
                        <button class="btn btn-outline-dark mt-5">
                            Change profile
                        </button>
                    </div>
                    <div class="col-12 col-md-6 my-3 text-left">
                        <div class="overview-block">
                            <p class="font-weight-bold">
                                Selected payment method
                            </p>
                            <hr class="w-100 my-3" />
                            <p class="my-1 font-weight-bold">Prepayment</p>
                            <p class="my-1">
                                Purchase of instant downloads by debit or credit
                                card only
                            </p>
                        </div>
                        <button class="btn btn-outline-dark mt-5">
                            Change payment method
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 my-3 text-left">
                        <div class="overview-block">
                            <p class="font-weight-bold">
                                Primary billing address
                            </p>
                            <hr class="w-100 my-3" />
                            <p class="my-1">
                                {{ currentUserData.name }}
                            </p>
                            <p
                                class="my-1"
                                v-if="currentUserData.streetAndNumber"
                            >
                                {{ currentUserData.streetAndNumber }}
                            </p>
                            <p v-else>No billing address set</p>
                            <p class="my-1" v-if="currentUserData.zip">
                                {{ currentUserData.zip }}
                                {{ currentUserData.city }}
                            </p>
                            <p class="my-1" v-if="currentUserData.country">
                                {{ currentUserData.country }}
                            </p>
                        </div>
                        <button class="btn btn-outline-dark mt-5">
                            Change billing address
                        </button>
                    </div>
                    <div class="col-12 col-md-6 my-3 text-left">
                        <div class="overview-block">
                            <p class="font-weight-bold">
                                Primary shipping address
                            </p>
                            <hr class="w-100 my-3" />
                            <p
                                class="my-1"
                                v-if="currentUserData.streetAndNumber"
                            >
                                Equal to the billing address
                            </p>
                            <p v-else>No shipping address set</p>
                        </div>
                        <button class="btn btn-outline-dark mt-5">
                            Add different billing address
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12 my-3 text-left">
                        <div class="overview-block">
                            <hr class="w-100" />
                            <label>
                                <input
                                    type="checkbox"
                                    @click="newsletter = !newsletter"
                                />
                                &nbsp;Yes, I would like to subscribe to the free
                                PWA-Webshop newsletter. You have the possibility
                                to unsubscribe at any time.</label
                            >
                            <button
                                class="btn btn-warning mt-3"
                                @click.once="deleteAccount"
                            >
                                Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AccountPanel from "@/components/AccountPanel";
import firebase from "firebase/app";

export default {
    data() {
        return {
            newsletter: false,
        };
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser;
        },
        currentUserData() {
            return this.$store.state.currentUserData;
        },
    },
    components: { AccountPanel },
    methods: {
        deleteAccount() {
            var user = firebase.auth().currentUser;

            user.delete()
                .then(function() {})
                .catch(function(error) {
                    console.log(error);
                });
            this.$router.push("/");
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style scoped>
.overview-block {
    height: 150px;
}
</style>
