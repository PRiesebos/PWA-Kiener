<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 col-md-4">
                <div
                    class="mb-3 d-flex justify-content-between"
                    v-if="existingUser.error != ''"
                >
                    <div class="col-1 custom-rounded bg-danger d-inline py-3">
                        <i class="fas fa-times fa-2x custom-center"></i>
                    </div>
                    <div class="col-11 d-inline small bg-red rounded py-3">
                        {{ existingUser.error }}
                    </div>
                </div>
                <div class="jumbotron px-3 py-4">
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
                    <button class="btn btn-primary" @click="signin">
                        Login >
                    </button>
                </div>
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
                <select class="form-control col-8 col-md-4 my-3" required>
                    <option value="Iam">I am*</option>
                    <option value="Private customer">Private customer</option>
                    <option value="Company">Company</option>
                </select>
                <select class="form-control col-8 col-md-4 my-3" required>
                    <option value="Title">Title*</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                </select>
                <input
                    type="text"
                    placeholder="First name*"
                    class="form-control my-3"
                    required
                />
                <input
                    type="text"
                    placeholder="Last name*"
                    class="form-control my-3"
                    required
                />
                <input
                    type="email"
                    placeholder="Your email address*"
                    class="form-control my-3"
                    required
                    v-model="user.email"
                />
                <input
                    type="password"
                    placeholder="Your password*"
                    class="form-control my-3"
                    required
                    v-model="user.password"
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
                    required
                />
                <input
                    type="text"
                    placeholder="Zipcode*"
                    class="form-control d-inline col-4 col-md-4"
                    required
                />
                <input
                    type="text"
                    placeholder="City*"
                    class="form-control d-inline col-8 col-md-8"
                    required
                />
                <select class="form-control col-8 col-md-4 my-3" required>
                    <option value="Country">Country*</option>
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
                            <input type="checkbox" /> The shipping address does
                            not match the billing address</label
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
                    <select class="form-control col-8 col-md-4 my-3" required>
                        <option value="Title2">Title*</option>
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
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last name*"
                        class="form-control my-3"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Street and number*"
                        class="form-control my-3"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Zipcode*"
                        class="form-control d-inline col-4 col-md-4"
                        required
                    />
                    <input
                        type="text"
                        placeholder="City*"
                        class="form-control d-inline col-8 col-md-8"
                        required
                    />
                    <select class="form-control col-8 col-md-4 my-3" required>
                        <option value="Country">Country*</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Germany">Germany</option>
                        <option value="GreatBritain">Great Britain</option>
                        <option value="Netherlands">Netherlands</option>
                    </select>
                </div>
                <button
                    class="btn btn-primary col-6 col-md-3 float-right mt-3"
                    @click="register"
                >
                    Continue >
                </button>
                <p class="small">The fields marked with * are required</p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            existingUser: {
                email: "",
                password: "",
                error: "",
            },
            user: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(
                    this.user.email,
                    this.user.password
                )
                .then(
                    user => {
                        alert(`Account created for ${user.email}`);
                    },
                    err => {
                        alert(err.message);
                    }
                );
        },
        signin() {
            firebase
                .auth()
                .signInWithEmailAndPassword(
                    this.existingUser.email,
                    this.existingUser.password
                )
                .then(
                    existingUser => {
                        alert(`logged in as ${this.existingUser.email}`);
                    },
                    err => {
                        this.existingUser.error = err.message;
                    }
                );
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
.bg-red {
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
</style>
