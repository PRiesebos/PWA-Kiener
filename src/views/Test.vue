<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 col-md-4">
                <h1>Products</h1>
                <p class="col-12 col-md-12 p-0">
                    This will be an introduction text for the products on this
                    page. We could also tell a bit about the demonstrative
                    purpose of this shop.
                </p>
                <button class="btn btn-primary mb-3" @click="storeData">
                    Get data
                </button>
            </div>
            <div class="col-md-8 d-flex flex-wrap px-0">
                <div
                    class="mb-3 col-6 p-2 custom-card"
                    v-for="product in sanitizedData"
                    :key="product.id"
                >
                    <img
                        class="card-img-top"
                        alt="..."
                        :src="product.productImage"
                    />
                    <div class="card-body px-2">
                        <h5
                            class="card-title"
                            v-text="product.productName"
                        ></h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            Card subtitle
                        </h6>
                        <p
                            class="card-text"
                            v-text="product.productDescription"
                        >
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <p class="card-link d-inline font-weight-bold">
                            € {{ product.productPrice.toFixed(2) }}
                        </p>
                        <button
                            class="btn btn-primary card-link float-right"
                            @click="addToCart(product)"
                        >
                            <font-awesome-icon icon="shopping-cart" />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            sanitizedData: [],
            products: [],
        };
    },
    methods: {
        addToCart(product) {
            this.$store.commit("addToCart", product);
        },
        storeData() {
            const test = [];
            this.products.forEach(function(arrayItem) {
                test.push({
                    productName: arrayItem.fields.productName.stringValue,
                    productDescription:
                        arrayItem.fields.productDescription.stringValue,
                    productID: arrayItem.fields.productID.integerValue,
                    productPrice: arrayItem.fields.productPrice.doubleValue,
                    productImage: arrayItem.fields.productImage.stringValue,
                });
            });
            this.sanitizedData = test;
        },
    },
    mounted() {
        axios
            .get(
                "https://firestore.googleapis.com/v1beta1/projects/vuejs-http-53bfb/databases/(default)/documents/products"
            )
            .then(response => {
                this.products = response.data.documents;
            });
    },
};
</script>
<style scoped>
@media (max-width: 992px) {
    .container {
        width: 100%;
        max-width: 100%;
    }
}
.custom-card:after {
    content: "";
    display: block;
    border: 1px solid black;
}
.custom-card {
    transition: transform 0.3s ease;
}
.custom-card:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: box-shadow 500ms;
    margin-top: -5px;
    transform: translateY(-5px);
    transition: transform 0.3s ease;
}
</style>
