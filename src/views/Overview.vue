<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-4 col-md-4 col-lg-2 pl-0"><AccountPanel /></div>
            <div class="col-8 col-md-8 col-lg-10 text-center">
                <p class="h1 my-5">Welcome, {{ currentUser.email }}</p>
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
                            <p class="my-1">Titel FName LName</p>
                            <p class="my-1">Email@email.nl</p>
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
                            <p class="my-1">Titel FName LName</p>
                            <p class="my-1">Street + number</p>
                            <p class="my-1">Zip + city</p>
                            <p class="my-1">Country</p>
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
                            <p class="my-1">Equal to the billing address</p>
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
                                <input type="checkbox" />
                                &nbsp;Yes, I would like to subscribe to the free
                                Mollie newsletter. You have the possibility to
                                unsubscribe at any time.</label
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
import db from "@/db";
export default {
    computed: {
        currentUser() {
            return this.$store.state.currentUser;
        },
    },
    components: { AccountPanel },
    methods: {
        deleteAccount() {
            var user = firebase.auth().currentUser;

            user.delete()
                .then(function() {
                    alert("Account deleted");
                    this.signOut();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        async signOut() {
            await db
                .signOut()
                .then(() => {
                    this.$router.push("/");
                })
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
        },
    },
};
</script>

<style scoped>
p {
    word-wrap: break-word;
}
.overview-block {
    height: 150px;
}
</style>
