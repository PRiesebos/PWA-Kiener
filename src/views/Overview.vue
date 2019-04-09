<template>
    <div class="text-center">
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
        <p class="h1 mb-5 text-break">
            Welcome, {{ currentUserData.name.split(" ", 1).toString() }}
        </p>
        <div class="text-left">
            <p>
                This is your account dashboard which enables you to view your
                account activities.
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
                <router-link to="profile">
                    <button class="btn btn-outline-dark mt-5">
                        Change profile
                    </button>
                </router-link>
            </div>
            <div class="col-12 col-md-6 my-3 text-left">
                <div class="overview-block">
                    <p class="font-weight-bold">
                        Selected payment method
                    </p>
                    <hr class="w-100 my-3" />
                    <p class="my-1 font-weight-bold">Prepayment</p>
                    <p class="my-1">
                        Purchase of instant downloads by debit or credit card
                        only
                    </p>
                </div>
                <router-link to="paymentmethods">
                    <button class="btn btn-outline-dark mt-5">
                        Change payment method
                    </button>
                </router-link>
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
                    <p class="my-1" v-if="currentUserData.streetAndNumber">
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
                <router-link to="addresses">
                    <button class="btn btn-outline-dark mt-5">
                        Change billing address
                    </button>
                </router-link>
            </div>
            <div class="col-12 col-md-6 my-3 text-left">
                <div class="overview-block">
                    <p class="font-weight-bold">
                        Primary shipping address
                    </p>
                    <hr class="w-100 my-3" />
                    <p class="my-1" v-if="currentUserData.streetAndNumber">
                        Equal to the billing address
                    </p>
                    <p v-else>No shipping address set</p>
                </div>
                <router-link to="addresses">
                    <button class="btn btn-outline-dark mt-5">
                        Add different billing address
                    </button>
                </router-link>
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
                        PWA-Webshop newsletter. You have the possibility to
                        unsubscribe at any time.</label
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
};
</script>

<style scoped>
.overview-block {
    height: 155px;
}
</style>
