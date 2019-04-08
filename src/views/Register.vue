<template>
    <div class="bg-light vh-100">
        <div class="bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-signin mt-5 mb-3">
                            <div class="card-body">
                                <h3 class="card-title text-center">
                                    Create account
                                </h3>
                                <form
                                    class="form-signin"
                                    autocomplete="new-password"
                                    @submit.prevent
                                >
                                    <div class="form-group">
                                        <label class="mb-0" for="inputName"
                                            >Your name</label
                                        >
                                        <input
                                            type="text"
                                            id="inputName"
                                            required
                                            autofocus
                                            v-model="name"
                                            v-bind:class="{
                                                'form-control': true,
                                                'is-invalid':
                                                    !validName(name) &&
                                                    nameBlured,
                                            }"
                                            v-on:blur="nameBlured = true"
                                        />
                                        <div class="invalid-feedback">
                                            Enter your name
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="mb-0" for="inputEmail"
                                            >Email</label
                                        >
                                        <input
                                            type="email"
                                            id="inputEmail"
                                            required
                                            v-model="email"
                                            v-bind:class="{
                                                'form-control': true,
                                                'is-invalid':
                                                    !validEmail(email) &&
                                                    emailBlured,
                                            }"
                                            v-on:blur="emailBlured = true"
                                        />
                                        <div class="invalid-feedback">
                                            Enter a valid email address
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="mb-0" for="inputPassword"
                                            >Password</label
                                        >
                                        <input
                                            type="password"
                                            id="inputPassword"
                                            placeholder="At least 8 characters"
                                            required
                                            v-model="password"
                                            v-bind:class="{
                                                'form-control': true,
                                                'is-invalid':
                                                    !validPassword(password) &&
                                                    passwordBlured,
                                            }"
                                            v-on:blur="passwordBlured = true"
                                        />
                                        <div class="invalid-feedback">
                                            Password must be 8 characters long ,
                                            contain a capital letter and a
                                            number
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="mb-0" for="inputPassword"
                                            >Re-enter password</label
                                        >
                                        <input
                                            type="password"
                                            id="inputPasswordCheck"
                                            required
                                            v-model="passwordCheck"
                                            v-bind:class="{
                                                'form-control': true,
                                                'is-invalid':
                                                    !validPasswordCheck(
                                                        passwordCheck
                                                    ) && passwordCheckBlured,
                                            }"
                                            v-on:blur="
                                                passwordCheckBlured = true
                                            "
                                        />
                                        <div class="invalid-feedback">
                                            Passwords must match
                                        </div>
                                    </div>

                                    <button
                                        class="btn btn-md btn-primary btn-block mb-3"
                                        @click="submit"
                                    >
                                        Create your PWA-Webshop account
                                    </button>
                                    <p class="small">
                                        By creating an account, you agree to
                                        PWA-Webshop's Conditions of Use and
                                        Privacy Notice.
                                    </p>
                                    <hr class="w-100 my-3" />
                                    <div class="d-inline">
                                        <p class="small mb-0">
                                            Already have an account?
                                            <router-link to="/signin"
                                                >Sign in >
                                            </router-link>
                                        </p>
                                    </div>
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
            name: "",
            email: "",
            password: "",
            passwordCheck: "",
            valid: false,
            emailBlured: false,
            nameBlured: false,
            passwordBlured: false,
            passwordCheckBlured: false,
            errors: [],
        };
    },
    methods: {
        async signUp() {
            let result = await db.signUp(this.email, this.password);
            if (result) {
                this.addUser();
            } else {
                console.log(result.message);
            }
        },
        async addUser() {
            let user = await firebase.auth().currentUser;
            let result = await db.addUser(user.uid, this.email, this.name);
            if (result) {
                this.errors.push(result);
            } else {
                this.getUser();
            }
        },
        async getUser() {
            let user = await firebase.auth().currentUser;
            let result = await db.getUser(user.uid);
            if (result) {
                console.log("Couldn't load data");
            } else {
                this.$router.push("/account/overview");
                console.log("loaded user data");
            }
        },
        validate() {
            this.emailBlured = true;
            this.nameBlured = true;
            this.passwordBlured = true;
            this.passwordCheckBlured = true;
            if (
                this.validEmail(this.email) &&
                this.validName(this.name) &&
                this.validPassword(this.password) &&
                this.validPasswordCheck(this.passwordCheck)
            ) {
                this.valid = true;
            }
        },
        validEmail(email) {
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email.toLowerCase());
        },
        validName(name) {
            let re = /^(?=.{1,25}$)[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
            return re.test(name);
        },
        validPassword(password) {
            var re = /^(?=.*?[A-Z])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/;
            return re.test(password);
        },
        validPasswordCheck(passwordCheck) {
            if (passwordCheck == this.password) {
                var re = /^(?=.*?[A-Z])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/;
                return re.test(passwordCheck);
            } else {
                return false;
            }
        },
        submit() {
            this.validate();
            if (this.valid) {
                this.signUp();
            } else {
                alert("Data is not valid!");
            }
        },
    },
};
</script>
