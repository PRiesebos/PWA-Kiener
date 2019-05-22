<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 col-md-4">
                <h1>Products</h1>
                <p class="col-12 col-md-12 p-0 mb-3">
                    This will be an introduction text for the products on this
                    page. We could also tell a bit about the demonstrative
                    purpose of this shop.
                </p>
            </div>
            <!-- First load -->
            <div
                class="col-md-8 d-flex flex-wrap px-0"
                v-if="typeof productData != 'object'"
            >
                <div
                    class="mb-3 col-6 p-2 custom-card rounded-lg"
                    v-for="product in sanitizedData"
                    :key="product.id"
                >
                    <div>
                        <router-link :to="'/products/' + product.productID">
                            <img
                                class="card-img-top"
                                alt="..."
                                :src="product.productImage"
                            />
                        </router-link>

                        <div class="card-body pt-0 px-2">
                            <router-link
                                :to="'/products/' + product.productID"
                                class="text-dark pt-3 pb-2 h5 d-block"
                                v-text="product.productName"
                            >
                            </router-link>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p
                                class="card-text"
                                v-text="product.productDescription"
                            >
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <div class="row mx-1">
                                <p
                                    class="d-inline font-weight-bold col-12 col-md-6 pl-0"
                                >
                                    € {{ product.productPrice.toFixed(2) }}
                                </p>
                                <button
                                    class="btn btn-primary col-12 col-md-6"
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
            <!-- Stored in state -->
            <div
                class="col-md-8 d-flex flex-wrap px-0"
                v-if="typeof productData == 'object'"
            >
                <div
                    class="mb-3 col-6 p-2 custom-card rounded-lg"
                    v-for="productData in productData"
                    :key="productData.id"
                >
                    <div>
                        <router-link :to="'/products/' + productData.productID">
                            <img
                                class="card-img-top"
                                alt="..."
                                :src="productData.productImage"
                            />
                        </router-link>

                        <div class="card-body pt-0 px-2">
                            <router-link
                                :to="'/products/' + productData.productID"
                                class="text-dark pt-3 pb-2 h5 d-block"
                                v-text="productData.productName"
                            >
                            </router-link>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Card subtitle
                            </h6>
                            <p
                                class="card-text"
                                v-text="productData.productDescription"
                            >
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                            <div class="row mx-1">
                                <p
                                    class="d-inline font-weight-bold col-12 col-md-6 pl-0"
                                >
                                    €
                                    {{ productData.productPrice.toFixed(2) }}
                                </p>
                                <button
                                    class="btn btn-primary col-12 col-md-6"
                                    @click="addToCart(productData)"
                                >
                                    <font-awesome-icon icon="shopping-cart" />
                                    Add to cart
                                </button>
                            </div>
                        </div>
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
    computed: {
        productData() {
            return this.$store.state.productData;
        },
    },
    methods: {
        addToCart(product) {
            this.$store.commit("addToCart", product);
        },
        storeData() {
            if (typeof this.productData != "object") {
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
                this.$store.commit("setProductData", this.sanitizedData);
            }
        },
    },
    mounted() {
        if (typeof this.productData != "object") {
            axios
                .get(
                    "https://firestore.googleapis.com/v1beta1/projects/vuejs-http-53bfb/databases/(default)/documents/products"
                )
                .then(response => {
                    this.products = response.data.documents;
                    this.storeData();
                });
        }
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
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.custom-card:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: -5px;
    transform: translateY(-3px);
    transition: box-shadow 0.2s ease, transform 0.3s ease;
}
</style>
