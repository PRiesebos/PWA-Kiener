<template>
    <div>
        <!-- Profile change form -->
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
        this.salutation = this.currentUserData.Salutation;
        this.fname = this.currentUserData.FirstName;
        this.lname = this.currentUserData.LastName;
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
            if (result) {
                console.log(result.message);
            }
        },
        // Email update
        async updateUserEmail() {
            let result = await db.signIn(
                this.currentUser.email,
                this.currentPasswordEmail
            );
            var user = firebase.auth().currentUser;
            if (result) {
                console.log(result);
                user.updateEmail(this.newEmail);
                let result2 = await db.updateUserEmail(
                    this.currentUserData.id,
                    this.newEmail
                );
                if (result2) {
                    console.log(result2);
                }
            }
        },
        // password update
        async updateUserPassword() {
            let result = await db.signIn(
                this.currentUser.email,
                this.currentPassword
            );
            var user = firebase.auth().currentUser;
            if (result) {
                console.log(result);
                user.updatePassword(this.newPassword);
            }
        },
        // Data validation
        validateUserInfo() {
            this.salutationBlured = true;
            this.fnameBlured = true;
            this.lnameBlured = true;
            if (this.salutation != "" && this.fname != "" && this.lname != "") {
                this.validUserBool = true;
                this.updateUserInfo();
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
                console.log("Succes User Info");
            } else {
                alert("Data is not valid!");
            }
        },
        submitEmail() {
            this.validateEmail();
            if (this.validEmailBool) {
                this.updateUserEmail();
            } else {
                alert("Data is not valid!");
            }
        },
        submitPassword() {
            this.validatePassword();
            if (this.validPasswordBool) {
                console.log("Succes Password");
                this.updateUserPassword();
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
        height: 278px;
    }
}
</style>
