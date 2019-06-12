<template>
    <div class="container mt-4">
        <input
            type="text"
            class="form-control"
            v-model="search"
            placeholder="Seach products ..."
        />
        <table class="table table-striped table-hover col-12">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in filterProducts" :key="product.productID">
                    <img
                        :src="product.productImage"
                        alt="..."
                        height="100px"
                        width="100px"
                        class=""
                    />
                    <td>{{ product.productName }}</td>
                    <td>{{ product.productDescription }}</td>
                    <td>€{{ product.productPrice.toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary" @click="test">Log token</button>
        <button class="btn btn-primary" @click="requestPerm">
            Req perm
        </button>
    </div>
</template>

<script>
import db from "@/db";
import "firebase/messaging";
import firebase from "firebase/app";
const messaging = firebase.messaging();
export default {
    name: "app",
    data() {
        return {
            search: "",
        };
    },
    computed: {
        productData() {
            return this.$store.state.productData;
        },
        filterProducts() {
            return this.productData.filter(product => {
                return product.productName.match(this.search);
            });
        },
    },
    methods: {
        test() {
            messaging
                .getToken()
                .then(function(currentToken) {
                    if (currentToken) {
                        db.sendTokenToServer(currentToken);
                    } else {
                        // Show permission request.
                        console.log(
                            "No Instance ID token available. Request permission to generate one."
                        );
                    }
                })
                .catch(function(err) {
                    console.log(
                        "An error occurred while retrieving token. ",
                        err
                    );
                });
        },
        requestPerm() {
            Notification.requestPermission().then(function(permission) {
                if (permission === "granted") {
                    console.log("Notification permission granted.");
                    // TODO(developer): Retrieve an Instance ID token for use with FCM.
                    // ...
                } else {
                    console.log("Unable to get permission to notify.");
                }
            });
        },
    },
};
</script>
