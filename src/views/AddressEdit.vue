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
                        <router-link to="/" class="text-primary small"
                            >Edit Address
                        </router-link>
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
                                    type="checkbox"
                                    name="paymentoption"
                                    value="paypal"
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
                                    type="checkbox"
                                    name="paymentoption"
                                    value="paypal"
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
    mounted: function() {
        if (this.currentUserData.FirstName) {
            this.fname = this.currentUserData.FirstName;
            this.lname = this.currentUserData.LastName;
        }
    },
    methods: {
        async editAddress() {
            var number = "Address1";
            var ship = true;
            var bill = true;
            let result = await db.addAddress(
                this.currentUser.uid,
                number,
                this.type,
                this.fname,
                this.lname,
                this.streetAndNumber,
                this.city,
                this.zip,
                this.country,
                ship,
                bill
            );
            if (result) {
                console.log(result);
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
