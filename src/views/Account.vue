<template>
    <div class="container mt-4">
        <div class="row">
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
                <form class="jumbotron px-3 py-4" type="text" @submit.prevent>
                    <p class="font-weight-bold">I'm already a customer.</p>
                    <hr class="w-100" />
                    <p class="small">
                        Log in with your email address and password.
                    </p>
                    <input
                        type="text"
                        class="form-control my-3"
                        placeholder="Your email adress"
                        v-model="existingUser.email"
                    />
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Your password"
                        v-model="existingUser.password"
                    />
                    <a class="text-primary d-block my-3"
                        >Forgot your password?</a
                    >
                    <button class="btn btn-primary" @click="signIn">
                        Login >
                    </button>
                </form>
                <p class="font-weight-bold">
                    My benefits
                </p>

                <p class="my-1 small">
                    <i class="fas fa-check"></i> Express shopping
                </p>
                <p class="my-1 small">
                    <i class="fas fa-check"></i> Save your user data and
                    settings
                </p>
                <p class="my-1 small">
                    <i class="fas fa-check"></i> Overview of your orders incl.
                    shipping informations
                </p>
                <p class="my-1 small">
                    <i class="fas fa-check"></i> Manage your newsletter
                    subscription
                </p>
            </div>
            <div class="col-12 col-md-8 mt-4">
                <p class="font-weight-bold">I'm a new customer</p>
                <hr class="w-100" />
                <form type="text" @submit.prevent="checkForm">
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
                    <select
                        class="form-control col-8 col-md-4 my-3"
                        v-model="newUser.title"
                    >
                        <option value="Title" disabled>Title*</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                    </select>
                    <input
                        type="text"
                        placeholder="First name*"
                        class="form-control my-3"
                        v-model="newUser.fname"
                    />
                    <input
                        type="text"
                        placeholder="Last name*"
                        class="form-control my-3"
                        v-model="newUser.lname"
                    />
                    <input
                        type="email"
                        placeholder="Your email address*"
                        class="form-control my-3"
                        v-model="newUser.email"
                    />
                    <input
                        type="password"
                        placeholder="Your password*"
                        class="form-control my-3"
                        v-model="newUser.password"
                    />
                    <p class="small">
                        Your password must contain at least 8 characters.
                    </p>
                    <p class="small">The password is case sensitive.</p>

                    <br />
                    <p class="font-weight-bold">Your address</p>
                    <hr class="w-100" />
                    <input
                        type="text"
                        placeholder="Street and number*"
                        class="form-control my-3"
                        v-model="newUser.streetAndNumber"
                    />
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
                        <select class="form-control col-8 col-md-4 my-3">
                            <option value="Title2" disabled>Title*</option>
                            <option value="Mr2">Mr</option>
                            <option value="Ms2">Ms</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Company"
                            class="form-control my-3"
                        />
                        <input
                            type="text"
                            placeholder="Department"
                            class="form-control my-3"
                        />
                        <input
                            type="text"
                            placeholder="First name*"
                            class="form-control my-3"
                        />
                        <input
                            type="text"
                            placeholder="Last name*"
                            class="form-control my-3"
                        />
                        <input
                            type="text"
                            placeholder="Street and number*"
                            class="form-control my-3"
                        />
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
                        <select class="form-control col-8 col-md-4 my-3">
                            <option value="Country">Country*</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Germany">Germany</option>
                            <option value="GreatBritain">Great Britain</option>
                            <option value="Netherlands">Netherlands</option>
                        </select>
                    </div>
                    <!-- Button trigger modal -->
                    <button
                        class="btn btn-primary col-6 col-md-3 float-right mt-3 mx-3"
                        @click="signUp"
                    >
                        Continue >
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
                                        <div class="modal-body my-3">
                                            <p>{{ newUser.error }}</p>
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
export default {
    data() {
        return {
            existingUser: {
                email: "",
                password: "",
                error: "",
            },
            newUser: {
                errors: [],
                customer: "",
                title: "",
                fname: "",
                lname: "",
                email: "",
                password: "",
                streetAndNumber: "",
                zip: "",
                city: "",
                country: "",
                error: "",
            },
            showModal: false,
        };
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser;
        },
    },
    methods: {
        async signUp() {
            let result = await db.signUp(
                this.newUser.email,
                this.newUser.password
            );
            if (result.message) {
                this.newUser.error = result.message;
                this.showModal = true;
            } else {
                this.showModal = false;
                this.$router.push("/");
                console.log(this.newUser);
            }
        },
        async signIn() {
            let result = await db.signIn(
                this.existingUser.email,
                this.existingUser.password
            );
            if (result.message) {
                this.existingUser.error = result.message;
            } else {
                this.$router.push("/");
            }
        },
        checkForm() {
            if (this.newUser.fname && this.newUser.lname) {
                return true;
            }

            this.errors = [];

            if (!this.newUser.fname) {
                this.errors.push("First name required.");
            }
            if (!this.newUser.lname) {
                this.errors.push("Last name required");
            }
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
