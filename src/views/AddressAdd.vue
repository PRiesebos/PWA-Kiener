<template>
    <div>
        <div class="container mb-4">
            <div class="row col-lg-6 col-12 mx-auto px-0">
                <div class="w-100">
                    <!-- Page navigation -->
                    <div class="mt-4">
                        <router-link
                            to="/account/overview"
                            class="text-muted small"
                            >Account >
                        </router-link>
                        &nbsp;
                        <router-link
                            to="/account/address/"
                            class="text-muted small"
                            >Addresses >
                        </router-link>
                        &nbsp;
                        <p class="text-primary small d-inline">Add Address</p>
                    </div>
                    <p class="h2 col-12 text-left my-3 pl-0 font-weight-bold">
                        Add an address
                    </p>
                    <!-- Address form -->
                    <div>
                        <form @submit.prevent>
                            <!-- Type -->
                            <label for="inputType" class="mb-0"
                                >Customer type</label
                            >
                            <select
                                class="form-control mb-2"
                                id="inputType"
                                v-model="type"
                            >
                                <option value="Private customer"
                                    >Private customer</option
                                >
                                <option value="Company">Company</option>
                            </select>
                            <!-- Title -->
                            <label for="inputTitle" class="mb-0">Title</label>
                            <select
                                class="form-control mb-3"
                                id="inputTitle"
                                v-model="title"
                            >
                                <option value="Title" selected disabled
                                    >Title*</option
                                >
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                            </select>
                            <hr class="w-100 my-3" />
                            <!-- labels for first and last name -->
                            <div class="d-block">
                                <label
                                    for="inputFirstName"
                                    class="mb-0 col-6 px-0"
                                >
                                    First name
                                </label>
                                <label
                                    for="inputLastName"
                                    class="mb-0 col-6 px-0"
                                >
                                    Last name
                                </label>
                            </div>
                            <!-- First name -->
                            <input
                                type="text"
                                name="inputFirstName"
                                id="inputFirstName"
                                class="form-control mb-2 w-50 d-inline test-width mr-5px"
                                v-model="fname"
                            />
                            <!-- Last name -->
                            <input
                                type="text"
                                name="inputLastName"
                                id="inputLastName"
                                class="form-control mb-3 w-50 d-inline test-width"
                                v-model="lname"
                            />
                            <!-- Street and number -->
                            <label for="inputStreetAndNumber" class="mb-0">
                                Street and number
                            </label>
                            <input
                                type="text"
                                name="inputStreetAndNumber"
                                id="inputStreetAndNumber"
                                class="form-control mb-2"
                                v-model="streetAndNumber"
                            />
                            <!-- labels for zip code and city -->
                            <div class="d-block">
                                <label for="inputZip" class="mb-0 col-6 px-0">
                                    Zipcode
                                </label>
                                <label for="inputCity" class="mb-0 col-6 px-0">
                                    City
                                </label>
                            </div>
                            <!-- Zip code -->
                            <input
                                type="text"
                                name="inputZip"
                                id="inputZip"
                                class="form-control mb-2 d-inline test-width mr-5px"
                                v-model="zip"
                            />
                            <!-- City -->
                            <input
                                type="text"
                                name="inputCity"
                                id="inputCity"
                                class="form-control mb-2 d-inline test-width"
                                v-model="city"
                            />
                            <!-- Country -->
                            <label for="inputCountry" class="mb-0"
                                >Country</label
                            >
                            <select
                                class="form-control mb-4"
                                id="inputCountry"
                                v-model="country"
                            >
                                <option value="Country" selected disabled
                                    >Country*</option
                                >
                                <option value="Belgium">Belgium</option>
                                <option value="Germany">Germany</option>
                                <option value="GreatBritain"
                                    >Great Britain</option
                                >
                                <option value="Netherlands">Netherlands</option>
                            </select>
                            <!-- Default shipping address -->
                            <label
                                class="font-weight-bold col-6 col-md-8 pl-0"
                                v-if="currentUserAddress != null"
                            >
                                <input
                                    type="radio"
                                    name="shippingoption"
                                    value="ship"
                                    v-model="ship"
                                />
                                Set as default shipping address
                            </label>
                            <!-- Submit form -->
                            <button
                                class="btn btn-primary float-right"
                                @click="addAddress"
                            >
                                Save changes
                            </button>
                            <!-- Default billing address -->
                            <label
                                class="font-weight-bold col-6 col-md-8 pl-0"
                                v-if="currentUserAddress != null"
                            >
                                <input
                                    type="radio"
                                    name="shippingoption"
                                    value="bill"
                                    v-model="ship"
                                />
                                Set as default billing address
                            </label>
                        </form>
                    </div>
                </div>
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
            type: "",
            title: "",
            fname: "",
            lname: "",
            streetAndNumber: "",
            zip: "",
            city: "",
            country: "",
            ship: "",
            number: "",
        };
    },
    computed: {
        currentUserAddress() {
            return this.$store.state.currentUserAddress;
        },
        currentUserSecondAddress() {
            return this.$store.state.currentUserSecondAddress;
        },
    },
    methods: {
        async addAddress() {
            this.number =
                this.currentUserAddress == null ? "address1" : "address2";
            this.ship = this.currentUserAddress == null ? "both" : this.ship;
            await db.addAddress(
                this.$store.state.currentUser.uid,
                this.number,
                this.type,
                this.title,
                this.fname,
                this.lname,
                this.streetAndNumber,
                this.city,
                this.zip,
                this.country,
                this.ship
            );
            if (this.number == "address1") {
                this.getAddress();
            } else {
                let shipValue = this.ship == "ship" ? "bill" : "ship";
                await db.updateAddress(
                    this.$store.state.currentUser.uid,
                    "address1",
                    shipValue
                );
                await this.getAddress();
                await this.getSecondAddress();
            }
        },
        async getAddress() {
            let user = await firebase.auth().currentUser;
            await db.getAddress(user.uid, "address1");
            this.$router.push("/account/address");
        },
        async getSecondAddress() {
            let user = await firebase.auth().currentUser;
            await db.getSecondAddress(user.uid, "address2");
            this.$router.push("/account/address");
        },
    },
};
</script>
<style lang="scss" scoped>
.test-width {
    width: calc(50% - 2.5px) !important;
}
.mr-5px {
    margin-right: 5px;
}
</style>
