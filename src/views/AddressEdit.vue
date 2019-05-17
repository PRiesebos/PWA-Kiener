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
                        <p class="text-primary small d-inline">Edit Address</p>
                    </div>
                    <p class="h2 col-12 text-left my-3 pl-0 font-weight-bold">
                        Edit your address
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
                            <div>
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
                            <div class="d-block">
                                <label
                                    for="inputZip"
                                    class="mb-0 col-6 px-0 mt-2"
                                >
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
                                    v-if="currentUserSecondAddress != null"
                                >
                                    <input
                                        type="radio"
                                        name="shippingoption"
                                        value="ship"
                                        v-model="ship"
                                        v-bind:class="{
                                            'is-invalid': shipBlured && !ship,
                                        }"
                                        v-on:blur="shipBlured = true"
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
                                    v-if="currentUserSecondAddress != null"
                                >
                                    <input
                                        type="radio"
                                        name="shippingoption"
                                        value="bill"
                                        v-model="ship"
                                        v-bind:class="{
                                            'is-invalid': shipBlured && !ship,
                                        }"
                                        v-on:blur="shipBlured = true"
                                    />
                                    Set as default billing address
                                </label>
                                <div class="invalid-feedback">
                                    Select an option.
                                </div>
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
        currentUser() {
            return this.$store.state.currentUser;
        },
        currentUserAddress() {
            return this.$store.state.currentUserAddress;
        },
        currentUserSecondAddress() {
            return this.$store.state.currentUserSecondAddress;
        },
    },
    mounted: function() {
        if (this.$route.params.id == "1st") {
            this.type = this.currentUserAddress.type;
            this.title = this.currentUserAddress.title;
            this.fname = this.currentUserAddress.fname;
            this.lname = this.currentUserAddress.lname;
            this.streetAndNumber = this.currentUserAddress.street;
            this.zip = this.currentUserAddress.zip;
            this.city = this.currentUserAddress.city;
            this.country = this.currentUserAddress.country;
        } else {
            this.type = this.currentUserSecondAddress.type;
            this.title = this.currentUserSecondAddress.title;
            this.fname = this.currentUserSecondAddress.fname;
            this.lname = this.currentUserSecondAddress.lname;
            this.streetAndNumber = this.currentUserSecondAddress.street;
            this.zip = this.currentUserSecondAddress.zip;
            this.city = this.currentUserSecondAddress.city;
            this.country = this.currentUserSecondAddress.country;
        }
    },
    methods: {
        async editAddress() {
            let fnameLowerCase = this.fname.toLowerCase();
            let fnameCapitalized =
                fnameLowerCase.charAt(0).toUpperCase() +
                fnameLowerCase.slice(1);
            let lnameLowerCase = this.lname.toLowerCase();
            let lnameCapitalized =
                lnameLowerCase.charAt(0).toUpperCase() +
                lnameLowerCase.slice(1);
            this.number =
                this.$route.params.id == "1st" ? "address1" : "address2";
            await db.addAddress(
                this.currentUser.uid,
                this.number,
                this.type,
                this.title,
                fnameCapitalized,
                lnameCapitalized,
                this.streetAndNumber,
                this.city,
                this.zip,
                this.country,
                this.ship
            );
            if (this.$route.params.id == "2nd") {
                let shipValue = this.ship == "ship" ? "bill" : "ship";
                let number =
                    this.$route.params.id == "1st" ? "address2" : "address1";
                await db.updateAddress(
                    this.$store.state.currentUser.uid,
                    number,
                    shipValue
                );
                await this.getAddress();
                await this.getSecondAddress();
            }
            this.$router.push("/account/address");
        },
        async getAddress() {
            let user = await firebase.auth().currentUser;
            await db.getAddress(user.uid, "address1");
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
        validShip() {
            if (this.currentUserSecondAddress == null) {
                console.log("No second address");
                return true;
            } else if (this.ship == "bill" || this.ship == "ship") {
                console.log("No shipping value selected");
                return true;
            } else {
                return false;
            }
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
                this.validShip() &&
                this.city != null &&
                this.country != null
            ) {
                this.valid = true;
            }
        },
        submit() {
            this.validate();
            if (this.valid) {
                this.editAddress();
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
