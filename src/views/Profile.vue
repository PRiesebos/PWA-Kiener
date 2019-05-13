<template>
    <!-- Profile change form -->
    <div>
        <!-- Succes alert -->
        <div
            class="alert alert-success sticky-top"
            role="alert"
            v-if="validEmailBool || validPasswordBool || validUserBool"
        >
            <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                @click="
                    validEmailBool = validPasswordBool = validUserBool = false
                "
            >
                <span aria-hidden="true">&times;</span>
            </button>
            <b>You succesfully changed your credentials</b>
        </div>
        <!-- Sticky error alert -->
        <div
            class="alert alert-warning sticky-top"
            role="alert"
            v-if="errors.length"
        >
            <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
            >
                <span aria-hidden="true">&times;</span>
            </button>
            <b>Please correct the following error(s):</b>
            <ul class="list-unstyled">
                <li v-for="errorProfile in errors" :key="errorProfile">
                    {{ errorProfile }}
                </li>
            </ul>
        </div>
        <div>
            <p class="font-weight-bold text-left mt-3">Profile</p>
            <hr class="w-100 mb-4" />
            <form @submit.prevent>
                <float-label :dispatch="false" for="inputSalutation">
                    <select
                        class="form-control col-6 col-md-4"
                        id="inputSalutation"
                        required
                        v-model="salutation"
                        v-bind:class="{
                            'form-control': true,
                            'is-invalid': salutationBlured && !salutation,
                        }"
                        v-on:blur="salutationBlured = true"
                    >
                        <option disabled selected value="">Salutation*</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                    </select>
                    <div class="invalid-feedback">
                        Select a salutation
                    </div>
                </float-label>
                <float-label for="inputFirstName">
                    <input
                        type="text"
                        placeholder="First name"
                        id="inputFirstName"
                        required
                        v-model="fname"
                        v-bind:class="{
                            'form-control': true,
                            'mt-4': true,
                            'is-invalid': fnameBlured && !fname,
                        }"
                        v-on:blur="fnameBlured = true"
                    />
                    <div class="invalid-feedback">
                        Enter your first name
                    </div>
                </float-label>
                <float-label for="inputLastName">
                    <input
                        type="text"
                        placeholder="Last name*"
                        id="inputLastName"
                        required
                        v-model="lname"
                        v-bind:class="{
                            'form-control': true,
                            'mt-4': true,
                            'mb-3':
                                (!lnameBlured && !lname) ||
                                (lnameBlured && lname) ||
                                lname,
                            'is-invalid': lnameBlured && !lname,
                        }"
                        v-on:blur="lnameBlured = true"
                    />
                    <div class="invalid-feedback">
                        Enter your last name
                    </div>
                </float-label>
                <p class="small text-left">
                    The field marked with * are required
                </p>
                <button class="btn btn-primary mb-5" @click="submitUserInfo">
                    Save changes
                </button>
            </form>
        </div>
        <div class="row">
            <!-- Email change form -->
            <div class="col-12 col-md-12 col-lg-6">
                <p class="font-weight-bold">Email address</p>
                <hr class="w-100" />
                <p class="font-weight-bold small mb-1">Current email address</p>
                <p class="small">{{ currentUser.email }}</p>
                <form @submit.prevent>
                    <float-label for="inputNewEmail">
                        <input
                            type="email"
                            class="form-control mt-4"
                            placeholder="New email address*"
                            id="inputNewEmail"
                            required
                            v-model="newEmail"
                            v-bind:class="{
                                'form-control': true,
                                'mt-4': true,
                                'is-invalid':
                                    emailBlured && !validEmail(newEmail),
                            }"
                            v-on:blur="emailBlured = true"
                        />
                        <div class="invalid-feedback">
                            Enter a valid email address
                        </div>
                    </float-label>
                    <float-label for="inputEmailCheck">
                        <input
                            type="email"
                            placeholder="Email confirmation*"
                            id="inputEmailCheck"
                            required
                            v-model="newEmailCheck"
                            v-bind:class="{
                                'form-control': true,
                                'mt-4': true,
                                'is-invalid':
                                    !validEmailCheck(newEmailCheck) &&
                                    emailCheckBlured,
                            }"
                            v-on:blur="emailCheckBlured = true"
                        />
                        <div class="invalid-feedback">
                            Email addresses must match
                        </div>
                    </float-label>
                    <float-label for="inputEmailPassword">
                        <input
                            type="password"
                            class="form-control mt-4 mb-3"
                            placeholder="Your current password*"
                            id="inputEmailPassword"
                            required
                            v-model="currentPasswordEmail"
                            v-bind:class="{
                                'form-control': true,
                                'mt-4': true,
                                'mb-3':
                                    (!emailPasswordBlured &&
                                        !currentPasswordEmail) ||
                                    (emailPasswordBlured &&
                                        currentPasswordEmail),
                                'is-invalid':
                                    emailPasswordBlured &&
                                    !currentPasswordEmail,
                            }"
                            v-on:blur="emailPasswordBlured = true"
                        />
                        <div class="invalid-feedback">
                            Enter your current password
                        </div>
                    </float-label>
                    <p class="small text-left">
                        The field marked with * are required
                    </p>
                    <button class="btn btn-primary mb-5" @click="submitEmail">
                        Save changes
                    </button>
                </form>
            </div>
            <!-- Password change form -->
            <div class="col-12 col-md-12 col-lg-6">
                <p class="font-weight-bold">Password</p>
                <hr class="w-100" />
                <form @submit.prevent>
                    <div class="custom-align">
                        <float-label for="inputNewPassword">
                            <input
                                type="password"
                                placeholder="New password*"
                                id="inputNewPassword"
                                required
                                v-model="newPassword"
                                v-bind:class="{
                                    'form-control': true,
                                    'mt-4': true,
                                    'is-invalid':
                                        passwordBlured &&
                                        !validPassword(newPassword),
                                }"
                                v-on:blur="passwordBlured = true"
                            />
                            <div class="invalid-feedback">
                                Password must be 8 characters long , contain a
                                capital letter and a number
                            </div>
                        </float-label>
                        <float-label for="inputPasswordCheck">
                            <input
                                type="password"
                                placeholder="Re-enter password*"
                                id="inputPasswordCheck"
                                required
                                v-model="newPasswordCheck"
                                v-bind:class="{
                                    'form-control': true,
                                    'mt-4': true,
                                    'is-invalid':
                                        !validPasswordCheck(newPasswordCheck) &&
                                        passwordCheckBlured,
                                }"
                                v-on:blur="passwordCheckBlured = true"
                            />
                            <div class="invalid-feedback">
                                Passwords must match
                            </div>
                        </float-label>
                        <float-label for="inputOldPassword">
                            <input
                                type="password"
                                placeholder="Your current password*"
                                id="inputOldPassword"
                                required
                                v-model="currentPassword"
                                v-bind:class="{
                                    'form-control': true,
                                    'mt-4': true,
                                    'mb-3':
                                        (!passwordOldBlured &&
                                            !currentPassword) ||
                                        (passwordOldBlured && currentPassword),
                                    'is-invalid':
                                        passwordOldBlured && !currentPassword,
                                }"
                                v-on:blur="passwordOldBlured = true"
                            />
                            <div class="invalid-feedback">
                                Enter your current password
                            </div>
                        </float-label>
                        <p class="small text-left">
                            The field marked with * are required
                        </p>
                    </div>
                    <button
                        class="btn btn-primary mb-5"
                        @click="submitPassword"
                    >
                        Save changes
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import FloatLabel from "@/components/FloatLabel";
import db from "@/db.js";
import firebase from "firebase/app";
export default {
    data() {
        return {
            salutation: "",
            fname: "",
            lname: "",
            newEmail: "",
            newEmailCheck: "",
            currentPasswordEmail: "",
            newPassword: "",
            newPasswordCheck: "",
            currentPassword: "",
            validUserBool: false,
            validEmailBool: false,
            validPasswordBool: false,
            salutationBlured: false,
            fnameBlured: false,
            lnameBlured: false,
            emailBlured: false,
            emailCheckBlured: false,
            emailPasswordBlured: false,
            passwordBlured: false,
            passwordCheckBlured: false,
            passwordOldBlured: false,
            errors: [],
            succes: false,
        };
    },
    components: { FloatLabel },
    computed: {
        currentUserData() {
            return this.$store.state.currentUserData;
        },
        currentUser() {
            return this.$store.state.currentUser;
        },
    },
    mounted: function() {
        if (this.currentUserData.firstName) {
            this.salutation = this.currentUserData.salutation;
            this.fname = this.currentUserData.firstName;
            this.lname = this.currentUserData.lastName;
        }
    },
    methods: {
        // Update methods
        // User info update
        async updateUserInfo() {
            let result = await db.updateUserInfo(
                this.currentUserData.id,
                this.salutation,
                this.fname,
                this.lname
            );
            if (result.message) {
                this.errors.push(result.message);
            }
        },
        // Credentials update
        async updateCredentials(type) {
            var user = firebase.auth().currentUser;
            let result = await db.signIn(
                this.currentUser.email,
                this.currentPasswordEmail || this.currentPassword
            );
            if (result.code == "auth/requires-recent-login") {
                this.errors.push("Needs recent login");
                this.validEmailBool = this.validPasswordBool = false;
            } else if (result.code == "auth/wrong-password") {
                this.errors.push("Incorrect password");
                this.validEmailBool = this.validPasswordBool = false;
            } else if (type == "email") {
                this.errors.push(result.message);
                user.updateEmail(this.newEmail);
                let dbinfo = await db.updateUserEmail(
                    this.currentUserData.id,
                    this.newEmail
                );
                if (dbinfo) {
                    this.errors = 0;
                    this.newEmail = "";
                    this.newEmailCheck = "";
                    this.currentPasswordEmail = "";
                    this.emailBlured = this.emailCheckBlured = this.emailPasswordBlured = false;
                }
            } else if (type == "password") {
                this.errors = 0;
                let resultPassword = user.updatePassword(this.newPassword);
                this.errors.push(resultPassword.message);
                this.newEmail = "";
                this.newEmailCheck = "";
                this.currentPasswordEmail = "";
                this.passwordBlured = this.passwordCheckBlured = this.passwordOldBlured = false;
            }
        },
        // Data validation
        validateUserInfo() {
            this.salutationBlured = true;
            this.fnameBlured = true;
            this.lnameBlured = true;
            if (
                this.salutation != "" &&
                this.fname != "" &&
                this.lname != "" &&
                this.fname != this.currentUserData.firstName &&
                this.lname != this.currentUserData.lastName
            ) {
                this.validUserBool = true;
            }
        },
        validateEmail() {
            this.emailBlured = true;
            this.emailCheckBlured = true;
            if (
                this.validEmail(this.newEmail) &&
                this.validEmailCheck(this.newEmailCheck)
            ) {
                this.validEmailBool = true;
            }
        },
        validatePassword() {
            this.passwordBlured = true;
            this.passwordCheckBlured = true;
            if (
                this.validPassword(this.newPassword) &&
                this.validPasswordCheck(this.newPasswordCheck)
            ) {
                this.validPasswordBool = true;
            }
        },
        // regex + data validation checks
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validEmailCheck(email) {
            if (email == this.newEmail) {
                return true;
            } else {
                return false;
            }
        },
        validPassword(password) {
            var re = /^(?=.*?[A-Z])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/;
            return re.test(password);
        },
        validPasswordCheck(password) {
            if (password == this.newPassword) {
                return true;
            } else {
                return false;
            }
        },
        // Submit new data
        submitUserInfo() {
            this.validateUserInfo();
            if (this.validUserBool) {
                this.updateUserInfo();
            } else {
                alert("Data is not valid!");
            }
        },
        submitEmail() {
            this.validateEmail();
            if (this.validEmailBool) {
                this.updateCredentials("email");
            } else {
                alert("Data is not valid!");
            }
        },
        submitPassword() {
            this.validatePassword();
            if (this.validPasswordBool) {
                this.updateCredentials("password");
            } else {
                alert("Data is not valid!");
            }
        },
    },
};
</script>

<style scoped>
@media (min-width: 992px) {
    .custom-align {
        height: 271px;
    }
}
.sticky-top {
    top: 10px;
}
</style>
