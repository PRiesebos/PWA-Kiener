<template>
    <div class="bg-light vh-100">
        <div class="bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-signin mt-5 mb-3">
                            <div class="card-body">
                                <h3 class="card-title text-center">Sign in</h3>
                                <form class="form-signin" @submit.prevent>
                                    <div class="form-group">
                                        <label class="mb-0" for="inputEmail"
                                            >Email</label
                                        >
                                        <input
                                            type="email"
                                            id="inputEmail"
                                            required
                                            autofocus
                                            v-model="email"
                                            v-bind:class="{
                                                'form-control': true,
                                                'is-invalid':
                                                    emailBlured &&
                                                    (errors.showEmailError ||
                                                        !validEmail(email)),
                                            }"
                                            v-on:blur="emailBlured = true"
                                        />
                                        <div class="invalid-feedback">
                                            {{ errors.email }}
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="mb-0" for="inputPassword"
                                            >Password</label
                                        >
                                        <a
                                            href="#"
                                            role="button"
                                            tabindex="-1"
                                            class="btn-link float-right text-primary"
                                            @click="resetPassword"
                                            >Forgot your password?</a
                                        >
                                        <input
                                            type="password"
                                            id="inputPassword"
                                            v-model="password"
                                            minlength="8"
                                            required
                                            v-bind:class="{
                                                'form-control': true,
                                                'is-invalid':
                                                    passwordBlured &&
                                                    (errors.showPasswordError ||
                                                        !validPassword(
                                                            password
                                                        )),
                                            }"
                                            v-on:blur="passwordBlured = true"
                                        />
                                        <div class="invalid-feedback">
                                            {{ errors.password }}
                                        </div>
                                    </div>

                                    <button
                                        class="btn btn-md btn-primary btn-block mb-3"
                                        @click="submit"
                                    >
                                        Sign in
                                    </button>
                                    <div class="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            class="custom-control-input"
                                            id="customCheck1"
                                        />
                                        <label
                                            class="custom-control-label mb-0"
                                            for="customCheck1"
                                            >Keep me signed in.</label
                                        >
                                    </div>
                                    <div class="mt-4 mb-2 small d-flex">
                                        <hr class="w-25 mt-2" />
                                        New to PWA-Webshop?
                                        <hr class="w-25 mt-2" />
                                    </div>
                                    <router-link
                                        to="/register"
                                        class="btn btn-md btn-block btn-light"
                                        >Create your PWA-Webshop account
                                    </router-link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="w-100" />
        </div>
        <div class="row mx-0">
            <div class="mx-auto text-center">
                <div class="mb-3">
                    <a href="#" class="mr-3 small">
                        Conditions of Use
                    </a>
                    <a href="#" class="mx-2 small">
                        Privacy Notice
                    </a>
                    <a href="#" class="ml-3 small">
                        Help
                    </a>
                </div>
                <p class="small">
                    © 2018-2019,
                    <router-link class="text-dark" to="/"
                        >PWA-Webshop.com
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import db from "@/db.js";
import firebase from "firebase/app";
export default {
    data() {
        return {
            email: "",
            password: "",
            valid: false,
            emailBlured: false,
            passwordBlured: false,
            errors: {
                email: "Enter a valid email address",
                showEmailError: false,
                password: "Enter a valid password",
                showPasswordError: false,
            },
        };
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser;
        },
    },
    methods: {
        async signIn() {
            let result = await db.signIn(this.email, this.password);
            let errorCode = result.code;
            let errorMessage = result.message;
            if (result) {
                if (
                    errorCode == "auth/invalid-email" ||
                    errorCode == "auth/user-not-found"
                ) {
                    this.errors.email = errorMessage;
                    this.errors.showEmailError = true;
                } else if (
                    errorCode == "auth/invalid-password" ||
                    errorCode == "auth/wrong-password"
                ) {
                    this.errors.password = errorMessage;
                    this.errors.showPasswordError = true;
                } else {
                    if (this.currentUser.uid != null) {
                        this.getAddress();
                        this.getSecondAddress();
                        this.getUser();
                    }
                }
            }
        },
        async getUser() {
            let user = await firebase.auth().currentUser;
            let result = await db.getUser(user.uid);
            if (result) {
                console.log("Couldn't load data");
            } else {
                this.$router.push("/account/overview");
            }
        },
        async getAddress() {
            let user = await firebase.auth().currentUser;
            await db.getAddress(user.uid, "address1");
        },
        async getSecondAddress() {
            let user = await firebase.auth().currentUser;
            await db.getSecondAddress(user.uid, "address2");
        },
        async resetPassword() {
            let result = await db.resetPassword(this.email);
            let errorCode = result.code;
            let errorMessage = result.message;
            if (result) {
                if (errorCode == "auth/invalid-email") {
                    this.errors.showEmailError = true;
                    this.errors.email = errorMessage;
                } else {
                    this.errors.showEmailError = true;
                    this.errors.email = errorMessage;
                }
            }
        },
        validate() {
            this.emailBlured = true;
            this.passwordBlured = true;
            if (
                this.validEmail(this.email) &&
                this.validPassword(this.password)
            ) {
                this.valid = true;
            }
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validPassword(password) {
            var re = /^(?=.*?[A-Z])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/;
            return re.test(password);
        },
        submit() {
            this.validate();
            if (this.valid) {
                this.signIn();
            } else {
                alert("Data is not valid!");
            }
        },
    },
};
</script>
