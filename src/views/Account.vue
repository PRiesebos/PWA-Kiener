<template>
    <div class="container mt-4">
        <div class="row">
            <!-- sign in form -->
            <div class="col-12 col-md-4">
                <div
                    class="mb-3 d-flex justify-content-between"
                    v-if="existingUser.error"
                >
                    <div class="col-1 custom-rounded bg-danger d-inline py-3">
                        <i class="fas fa-times fa-2x custom-center"></i>
                    </div>
                    <div class="col-11 d-inline small bgred rounded py-3">
                        {{ existingUser.error }}
                    </div>
                </div>
                <form
                    class="jumbotron px-3 py-4"
                    type="text"
                    @submit.prevent="signIn"
                >
                    <p class="font-weight-bold">I'm already a customer.</p>
                    <hr class="w-100" />
                    <p class="small">
                        Log in with your email address and password.
                    </p>
                    <div>
                        <input
                            type="text"
                            name="LoginEmail"
                            class="form-control my-3"
                            placeholder="Your email adress"
                            v-model="existingUser.email"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="LoginPassword"
                            class="form-control"
                            placeholder="Your password"
                            v-model="existingUser.password"
                        />
                    </div>
                    <button class="btn btn-primary my-3" @click="signIn">
                        Login >
                    </button>
                    <button
                        class="btn btn-link text-primary d-block pl-0"
                        @submit.prevent
                        @click="resetPassword"
                    >
                        Forgot your password?
                    </button>
                </form>
                <div>
                    <p class="font-weight-bold">
                        My benefits
                    </p>

                    <p class="my-1 small">
                        <font-awesome-icon :icon="['fas', 'check']" /> Express
                        shopping
                    </p>
                    <p class="my-1 small">
                        <font-awesome-icon :icon="['fas', 'check']" /> Save your
                        user data and settings
                    </p>
                    <p class="my-1 small">
                        <font-awesome-icon :icon="['fas', 'check']" /> Overview
                        of your orders incl. shipping informations
                    </p>
                    <p class="my-1 small">
                        <font-awesome-icon :icon="['fas', 'check']" /> Manage
                        your newsletter subscription
                    </p>
                </div>
            </div>
            <!-- register form -->
            <div class="col-12 col-md-8 mt-4">
                <p class="font-weight-bold">I'm a new customer</p>
                <hr class="w-100" />
                <form type="text" @submit.prevent>
                    <div>
                        <select
                            class="form-control col-8 col-md-4 my-3"
                            v-model="newUser.customer"
                        >
                            <option value="Iam" disabled>I am*</option>
                            <option value="Private customer"
                                >Private customer</option
                            >
                            <option value="Company">Company</option>
                        </select>
                    </div>
                    <div>
                        <select
                            class="form-control col-8 col-md-4 my-3"
                            v-model="newUser.title"
                        >
                            <option value="Title" disabled>Title*</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="First name*"
                            class="form-control my-3"
                            v-model="newUser.fname"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last name*"
                            class="form-control my-3"
                            v-model="newUser.lname"
                        />
                    </div>
                    <input
                        type="text"
                        name="RegisterEmail"
                        placeholder="Your email address*"
                        class="form-control my-3"
                        v-model="newUser.email"
                    />
                    <div>
                        <input
                            type="password"
                            name="RegisterPassword"
                            placeholder="Your password*"
                            class="form-control my-3"
                            v-model="newUser.password"
                        />
                    </div>
                    <div>
                        <p class="small">
                            Your password must contain at least 6 characters.
                        </p>
                        <p class="small">The password is case sensitive.</p>

                        <br />
                        <p class="font-weight-bold">Your address</p>
                        <hr class="w-100" />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Street and number*"
                            class="form-control my-3"
                            v-model="newUser.streetAndNumber"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Zipcode*"
                            class="form-control d-inline col-4 col-md-4"
                            v-model="newUser.zip"
                        />

                        <input
                            type="text"
                            placeholder="City*"
                            class="form-control d-inline col-8 col-md-8"
                            v-model="newUser.city"
                        />
                    </div>
                    <div>
                        <select
                            class="form-control col-8 col-md-4 my-3"
                            v-model="newUser.country"
                        >
                            <option value="Country" disabled>Country*</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Germany">Germany</option>
                            <option value="GreatBritain">Great Britain</option>
                            <option value="Netherlands">Netherlands</option>
                        </select>
                    </div>
                    <!-- alternative shipping adress -->
                    <div class="form-check my-3 pl-0">
                        <div class="checkbox">
                            <label
                                class="form-check-label"
                                data-toggle="collapse"
                                data-target="#collapseShipping"
                                aria-expanded="false"
                                aria-controls="collapseShipping"
                            >
                                <input type="checkbox" /> The shipping address
                                does not match the billing address</label
                            >
                        </div>
                    </div>
                    <div
                        id="collapseShipping"
                        aria-expanded="false"
                        class="collapse"
                    >
                        <p class="font-weight-bold">
                            Your alternative shipping address
                        </p>
                        <hr class="w-100" />
                        <div>
                            <select class="form-control col-8 col-md-4 my-3">
                                <option value="Title2" disabled>Title*</option>
                                <option value="Mr2">Mr</option>
                                <option value="Ms2">Ms</option>
                            </select>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Company"
                                class="form-control my-3"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Department"
                                class="form-control my-3"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="First name*"
                                class="form-control my-3"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last name*"
                                class="form-control my-3"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Street and number*"
                                class="form-control my-3"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Zipcode*"
                                class="form-control d-inline col-4 col-md-4"
                            />

                            <input
                                type="text"
                                placeholder="City*"
                                class="form-control d-inline col-8 col-md-8"
                            />
                        </div>
                        <div>
                            <select class="form-control col-8 col-md-4 my-3">
                                <option value="Country">Country*</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Germany">Germany</option>
                                <option value="GreatBritain"
                                    >Great Britain</option
                                >
                                <option value="Netherlands">Netherlands</option>
                            </select>
                        </div>
                    </div>
                    <!-- Button trigger modal -->
                    <button
                        class="btn btn-primary col-6 col-md-3 float-right mt-3 mx-3"
                        @click="checkForm"
                    >
                        Continue >
                    </button>
                    <button class="btn btn-warning" @click="fieldValues">
                        Field values
                    </button>
                </form>

                <!-- Modal -->
                <div v-if="showModal">
                    <transition name="modal">
                        <div class="modal-mask">
                            <div class="modal-wrapper">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">
                                                Register
                                            </h5>
                                            <button
                                                type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    @click="showModal = false"
                                                    >&times;</span
                                                >
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div v-if="errors.length">
                                                <b
                                                    >Please correct the
                                                    following error(s):</b
                                                >
                                                <ul>
                                                    <li
                                                        v-for="errors in errors"
                                                        :key="errors"
                                                    >
                                                        {{ errors }}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div v-else>
                                                <b>You succesfully registerd</b>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button
                                                type="button"
                                                class="btn btn-secondary"
                                                @click="showModal = false"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <p class="small">The fields marked with * are required.</p>
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
            existingUser: {
                email: "",
                password: "",
                error: "",
            },
            newUser: {
                customer: "Iam",
                title: "Title",
                fname: "",
                lname: "",
                email: "",
                password: "",
                streetAndNumber: "",
                zip: "",
                city: "",
                country: "Country",
                error: "",
            },
            errors: [],
            showModal: false,
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
    methods: {
        async signUp() {
            let result = await db.signUp(
                this.newUser.email,
                this.newUser.password
            );
            if (result) {
                this.errors.push(result);
                console.log("signed up");
                console.log(this.newUser);
                this.addUser();
            } else {
                console.log("something went wrong with signup");
            }
        },
        async signIn() {
            let result = await db.signIn(
                this.existingUser.email,
                this.existingUser.password
            );
            if (result.message) {
                this.existingUser.error = result.message;
                console.log("something went wrong with signin");
            } else {
                this.getUser();
                console.log("signed in");
            }
        },
        async addUser() {
            let result = await db.addUser(
                this.currentUser.uid,
                this.newUser.customer,
                this.newUser.title,
                this.newUser.fname,
                this.newUser.lname,
                this.newUser.email,
                this.newUser.streetAndNumber,
                this.newUser.zip,
                this.newUser.city,
                this.newUser.country
            );
            if (result) {
                this.errors.push(result);
                console.log("something went wrong with adding the user");
            } else {
                this.getUser();
                console.log("User added");
            }
        },
        async getUser() {
            let result = await db.getUser(this.currentUser.uid);
            if (result) {
                console.log("Couldn't load data");
            } else {
                this.$router.push("/account/overview");
                console.log("loaded user data");
            }
        },
        resetPassword() {
            firebase
                .auth()
                .sendPasswordResetEmail(this.existingUser.email)
                .then(function() {
                    alert("Password Reset Email Sent!");
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode == "auth/invalid-email") {
                        alert(errorMessage);
                    } else if (errorCode == "auth/user-not-found") {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        },
        checkForm() {
            this.errors = [];
            this.showModal = true;

            if (!this.newUser.customer || this.newUser.customer == "Iam") {
                this.errors.push("Customer type required.");
            }
            if (!this.newUser.title || this.newUser.title == "Title") {
                this.errors.push("Customer title required.");
            }
            if (!this.newUser.fname) {
                this.errors.push("First name required.");
            }
            if (!this.newUser.lname) {
                this.errors.push("Last name required.");
            }
            if (!this.newUser.email) {
                this.errors.push("Email required.");
            }
            if (!this.newUser.password) {
                this.errors.push("Password required.");
            }
            if (!this.newUser.streetAndNumber) {
                this.errors.push("Street and streetnumber required.");
            }
            if (!this.newUser.zip) {
                this.errors.push("Zip code required.");
            }
            if (!this.newUser.city) {
                this.errors.push("City required.");
            }
            if (!this.newUser.country || this.newUser.country == "Country") {
                this.errors.push("Country required");
            }
            if (this.errors.length == 0) {
                this.signUp();
            }
        },
        fieldValues() {
            console.log(this.newUser);
        },
    },
};
</script>

<style lang="scss" scoped>
@media (max-width: 992px) {
    .container {
        max-width: 100%;
        width: 100%;
    }
}
.fa-times {
    color: white;
}
.bgred {
    background-color: #faeceb;
}
.custom-rounded {
    border-radius: 0.25rem 0rem 0rem 0.25rem;
}
.custom-center {
    right: 10px;
    top: 3px;
    position: relative;
}
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
</style>
