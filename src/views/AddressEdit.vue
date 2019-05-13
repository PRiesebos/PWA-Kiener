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
                            <label class="font-weight-bold col-6 col-md-8 pl-0">
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
                                @click="editAddress"
                            >
                                Save changes
                            </button>
                            <!-- Default billing address -->
                            <label class="font-weight-bold col-6 col-md-8 pl-0">
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
            this.number =
                this.$route.params.id == "1st" ? "address1" : "address2";
            await db.addAddress(
                this.currentUser.uid,
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
