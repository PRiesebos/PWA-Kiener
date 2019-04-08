<template>
    <div class="container mt-4">
        <div>
            <!-- register form -->
            <div class="row justify-content-center">
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
                                Your password must contain at least 6
                                characters.
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
                                <option value="Country" disabled
                                    >Country*</option
                                >
                                <option value="Belgium">Belgium</option>
                                <option value="Germany">Germany</option>
                                <option value="GreatBritain"
                                    >Great Britain</option
                                >
                                <option value="Netherlands">Netherlands</option>
                            </select>
                        </div>
                    </form>
                    <p class="small">The fields marked with * are required.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from "@/db.js";
export default {
    data() {
        return {
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
        };
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
            } else {
                console.log("something went wrong with signup");
            }
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
</style>
