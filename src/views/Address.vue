<template>
    <div>
        <p class="h1 ml-2 mb-3">Addresses</p>
        <div class="row ml-2 mr-1">
            <div
                class="custom-card col-lg-4 col-md-5 col-12 mr-3 px-0"
                v-if="this.currentUserSecondAddress == null"
            >
                <router-link to="/account/address/add">
                    <div class="custom-card-body">
                        <div class="m-auto py-5">
                            <font-awesome-icon
                                class="text-secondary"
                                icon="plus"
                                size="3x"
                            />
                            <p class="font-weight-bold h3 text-secondary">
                                Add Address
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
            <!-- First address -->
            <div
                class="card custom-card-plain col-lg-4 col-md-5 col-12 px-0"
                v-if="this.currentUserAddress != null"
            >
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li class="font-weight-bold">
                            {{ fname }} {{ lname }}
                        </li>
                        <li>{{ streetAndNumber }}</li>
                        <li>{{ zip }} {{ city }}</li>
                        <li>{{ country }}</li>
                    </ul>
                    <!-- address type (bill,ship,both) -->
                    <p
                        class="small font-weight-bold"
                        v-if="currentUserAddress.ship == 'both'"
                    >
                        Billing and shipping address
                    </p>
                    <p
                        class="small font-weight-bold"
                        v-if="currentUserAddress.ship == 'ship'"
                    >
                        Shipping address
                    </p>
                    <p
                        class="small font-weight-bold"
                        v-if="currentUserAddress.ship == 'bill'"
                    >
                        Billing address
                    </p>
                    <div class="row pl-2">
                        <router-link
                            to="/account/address/edit/1st"
                            class="btn btn-link btn-sm pt-0"
                            >Edit</router-link
                        >
                        |
                        <button
                            class="btn btn-link btn-sm pt-0"
                            @click="deleteAddress('address1')"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <!-- Second address -->
            <div
                class="card custom-card-plain col-lg-4 col-md-5 col-12 px-0 custom-card-align"
                v-if="this.currentUserSecondAddress != null"
            >
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li class="font-weight-bold">
                            {{ altFname }} {{ altLname }}
                        </li>
                        <li>{{ altStreetAndNumber }}</li>
                        <li>{{ altZip }} {{ altCity }}</li>
                        <li>{{ altCountry }}</li>
                    </ul>
                    <!-- address type (bill,ship) -->
                    <p
                        class="small font-weight-bold"
                        v-if="currentUserSecondAddress.ship == 'ship'"
                    >
                        Shipping address
                    </p>
                    <p class="small font-weight-bold" v-if="altShip == 'bill'">
                        Billing address
                    </p>
                    <div class="row pl-2">
                        <router-link
                            to="/account/address/edit/2nd"
                            class="btn btn-link btn-sm pt-0"
                            >Edit</router-link
                        >
                        |
                        <button
                            class="btn btn-link btn-sm pt-0"
                            @click="deleteAddress('address2')"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from "@/db.js";
import store from "@/store.js";
import firebase from "firebase/app";
export default {
    data() {
        return {
            fname: "",
            lname: "",
            streetAndNumber: "",
            zip: "",
            city: "",
            country: "",
            ship: "",
            altFname: "",
            altLname: "",
            altStreetAndNumber: "",
            altZip: "",
            altCity: "",
            altCountry: "",
            altShip: "",
            number: "",
        };
    },
    computed: {
        currentUserData() {
            return this.$store.state.currentUserData;
        },
        currentUserAddress() {
            return this.$store.state.currentUserAddress;
        },
        currentUserSecondAddress() {
            return this.$store.state.currentUserSecondAddress;
        },
    },
    mounted: function() {
        if (this.currentUserAddress != null) {
            this.fname = this.currentUserAddress.fname;
            this.lname = this.currentUserAddress.lname;
            this.streetAndNumber = this.currentUserAddress.street;
            this.zip = this.currentUserAddress.zip;
            this.city = this.currentUserAddress.city;
            this.country = this.currentUserAddress.country;
            this.ship = this.currentUserAddress.ship;
            if (this.currentUserSecondAddress != null) {
                this.altFname = this.currentUserSecondAddress.fname;
                this.altLname = this.currentUserSecondAddress.lname;
                this.altStreetAndNumber = this.currentUserSecondAddress.street;
                this.altZip = this.currentUserSecondAddress.zip;
                this.altCity = this.currentUserSecondAddress.city;
                this.altCountry = this.currentUserSecondAddress.country;
                this.altShip = this.currentUserSecondAddress.ship;
            }
        }
    },
    methods: {
        async deleteAddress(number) {
            await db.deleteAddress(this.$store.state.currentUser.uid, number);
            if (number == "address1") {
                store.commit("setCurrentUserAddress", null);
                await db.updateAddress(
                    this.$store.state.currentUser.uid,
                    "address2",
                    "both"
                );
                await this.getSecondAddress();
            } else {
                store.commit("setCurrentUserSecondAddress", null);
                await db.updateAddress(
                    this.$store.state.currentUser.uid,
                    "address1",
                    "both"
                );
                await this.getAddress();
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
    },
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
    .custom-card,
    .custom-card-body .custom-card-plain {
        height: 250px;
        padding-top: 30px;
        margin-bottom: 15px;
    }
    .list-unstyled {
        margin-bottom: 63px;
    }
    .custom-card-align {
        margin-top: 1rem;
    }
}
@media (min-width: 768px) {
    .custom-card-body {
        padding: 3.9rem;
    }
    .list-unstyled {
        margin-bottom: 90px;
    }
    .custom-card-align {
        margin-left: 1rem;
    }
}

.custom-card {
    border-style: dashed;
    border-width: 2px;
    text-align: center;
    display: table-cell;
    border-radius: 4px;
    border-color: #c7c7c7;
}
.custom-card-plain {
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.16);
}

a:hover {
    text-decoration: none;
}
</style>
