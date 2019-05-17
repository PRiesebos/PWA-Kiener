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
                            <div>
                                <label for="inputType" class="mb-0"
                                    >Customer type</label
                                >
                                <select
                                    class="form-control"
                                    id="inputType"
                                    v-model="type"
                                    v-bind:class="{
                                        'is-invalid': typeBlured && !type,
                                    }"
                                    v-on:blur="typeBlured = true"
                                >
                                    <option value="Private customer"
                                        >Private customer</option
                                    >
                                    <option value="Company">Company</option>
                                </select>
                                <div class="invalid-feedback mb-1">
                                    Select a customer type.
                                </div>
                            </div>

                            <!-- Title -->
                            <div>
                                <label for="inputTitle" class="mb-0 mt-2"
                                    >Title</label
                                >
                                <select
                                    class="form-control"
                                    id="inputTitle"
                                    v-model="title"
                                    v-bind:class="{
                                        'is-invalid': titleBlured && !title,
                                    }"
                                    v-on:blur="titleBlured = true"
                                >
                                    <option value="Title" selected disabled
                                        >Title*</option
                                    >
                                    <option value="Mr">Mr</option>
                                    <option value="Ms">Ms</option>
                                </select>
                                <div class="invalid-feedback">
                                    Select a title.
                                </div>
                            </div>
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
                            <div class="mb-2">
                                <input
                                    type="text"
                                    name="inputFirstName"
                                    id="inputFirstName"
                                    class="form-control d-inline test-width mr-5px"
                                    v-model="fname"
                                    v-bind:class="{
                                        'is-invalid':
                                            !validName(fname) && fnameBlured,
                                    }"
                                    v-on:blur="fnameBlured = true"
                                />
                                <!-- Last name -->
                                <input
                                    type="text"
                                    name="inputLastName"
                                    id="inputLastName"
                                    class="form-control d-inline test-width"
                                    v-model="lname"
                                    v-bind:class="{
                                        'is-invalid':
                                            !validName(lname) && lnameBlured,
                                    }"
                                    v-on:blur="lnameBlured = true"
                                />
                                <div class="invalid-feedback">
                                    Enter your name.
                                </div>
                            </div>
                            <!-- Street and number -->
                            <div>
                                <label
                                    for="inputStreetAndNumber"
                                    class="mb-0 mt-2"
                                >
                                    Street and number
                                </label>
                                <input
                                    type="text"
                                    name="inputStreetAndNumber"
                                    id="inputStreetAndNumber"
                                    class="form-control"
                                    v-model="streetAndNumber"
                                    v-bind:class="{
                                        'is-invalid':
                                            !validStreet(streetAndNumber) &&
                                            streetAndNumberBlured,
                                    }"
                                    v-on:blur="streetAndNumberBlured = true"
                                />
                                <div class="invalid-feedback">
                                    Enter your street name followed by a street
                                    number.
                                </div>
                            </div>
                            <!-- labels for zip code and city -->
                            <div class="d-block mt-2">
                                <label for="inputZip" class="mb-0 col-6 px-0">
                                    Zipcode
                                </label>
                                <label for="inputCity" class="mb-0 col-6 px-0">
                                    City
                                </label>
                            </div>
                            <!-- Zip code -->
                            <div>
                                <input
                                    type="text"
                                    name="inputZip"
                                    id="inputZip"
                                    class="form-control d-inline test-width mr-5px"
                                    v-model="zip"
                                    v-bind:class="{
                                        'is-invalid':
                                            !validZip(zip) && zipBlured,
                                    }"
                                    v-on:blur="zipBlured = true"
                                />
                                <!-- City -->
                                <input
                                    type="text"
                                    name="inputCity"
                                    id="inputCity"
                                    class="form-control d-inline test-width"
                                    v-model="city"
                                    v-bind:class="{
                                        'is-invalid': !city && cityBlured,
                                    }"
                                    v-on:blur="cityBlured = true"
                                />
                                <div class="invalid-feedback">
                                    Enter a valid zip and city
                                </div>
                            </div>
                            <!-- Country -->
                            <div>
                                <label for="inputCountry" class="mb-0 mt-2"
                                    >Country</label
                                >
                                <select
                                    class="form-control"
                                    id="inputCountry"
                                    v-model="country"
                                    v-bind:class="{
                                        'is-invalid': countryBlured && !country,
                                    }"
                                    v-on:blur="countryBlured = true"
                                >
                                    <option value="Country" selected disabled
                                        >Country*</option
                                    >
                                    <option value="Belgium">Belgium</option>
                                    <option value="Germany">Germany</option>
                                    <option value="GreatBritain"
                                        >Great Britain</option
                                    >
                                    <option value="Netherlands"
                                        >Netherlands</option
                                    >
                                </select>
                                <div class="invalid-feedback">
                                    Select a country.
                                </div>
                            </div>
                            <!-- Default shipping address -->
                            <div class="mt-4">
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
                                    @click="submit"
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
                            </div>
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
            typeBlured: false,
            title: "",
            titleBlured: false,
            fname: "",
            fnameBlured: false,
            lname: "",
            lnameBlured: false,
            streetAndNumber: "",
            streetAndNumberBlured: false,
            zip: "",
            zipBlured: false,
            city: "",
            cityBlured: false,
            country: "",
            countryBlured: false,
            ship: "",
            shipBlured: false,
            number: "",
            valid: false,
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
        },
        validName(name) {
            let re = /^([a-z\u00C0-\u02AB'´`]{1,}\.?\s?)([a-z\u00C0-\u02AB'´`]?\.?\s?)+$/i;
            return re.test(name);
        },
        validStreet(streetAndNumber) {
            let re = /^[a-zA-Z]+(\s[a-zA-Z-]*)?\s\d+$/;
            return re.test(streetAndNumber);
        },
        validZip(zip) {
            let re = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
            return re.test(zip);
        },
        validate() {
            this.typeBlured = true;
            this.titleBlured = true;
            this.fnameBlured = true;
            this.lnameBlured = true;
            this.streetAndNumberBlured = true;
            this.zipBlured = true;
            this.cityBlured = true;
            this.countryBlured = true;
            this.shipBlured = true;
            if (
                this.type != null &&
                this.title != null &&
                this.validName(this.fname) &&
                this.validName(this.lname) &&
                this.validStreet(this.streetAndNumber) &&
                this.validZip(this.zip) &&
                this.city != null &&
                this.country != null
            ) {
                this.valid = true;
            }
        },
        submit() {
            this.validate();
            if (this.valid) {
                this.addAddress();
            } else {
                alert("Data is not valid!");
            }
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
