<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 col-md-4">
                <!-- Popup modal -->
                <div class="custom-modal-bg" v-if="modal"></div>
                <div class="custom-modal" v-if="modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title">Succes!</h3>
                                <button class="btn" @click="modal = false">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p class="font-weight-bold">
                                    Added product to cart.
                                </p>
                                <div class="d-flex flex-wrap">
                                    <div class="col-6">
                                        <img
                                            :src="cartProduct.productImage"
                                            alt="..."
                                            height="150px"
                                            width="140px"
                                            class="img-fluid"
                                        />
                                    </div>
                                    <div class="col-6">
                                        <p class="font-weight-bold">
                                            {{ cartProduct.productName }}
                                        </p>
                                        <p>
                                            Articlenumber:
                                            {{ cartProduct.productID }}
                                        </p>
                                        <p>
                                            Price:
                                            {{
                                                cartProduct.productPrice.toFixed(
                                                    2
                                                )
                                            }}
                                        </p>
                                        <p>
                                            Quantity: {{ cartProduct.quantity }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="border-top">
                                <div class="m-2 d-flex flex-column">
                                    <router-link
                                        to="/cart"
                                        class="btn btn-primary mb-2"
                                        @click="modal = false"
                                        >To cart
                                    </router-link>
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        @click="modal = false"
                                    >
                                        Continue shopping
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Product page -->
                <h1>Products</h1>
                <p class="col-12 col-md-12 p-0 mb-3 text-justify">
                    This will be an introduction text for the products on this
                    page. We could also tell a bit about the demonstrative
                    purpose of this shop.
                </p>
                <hr class="w-100" />
                <div class="col-12 col-md px-0">
                    <p class="h3 mb-3">Category filters</p>
                    <div class="d-flex flex-wrap">
                        <div class="col col-md-12 px-1">
                            <input
                                type="checkbox"
                                name="catergoryFilter"
                                id="clothingFilter"
                                class="mr-2"
                                v-model="clothing"
                                @click="!clothing"
                            />
                            <label for="clothingFilter">Clothing</label>
                        </div>
                        <div class="col col-md-12 px-1">
                            <input
                                type="checkbox"
                                name="catergoryFilter"
                                id="foodFilter"
                                class="mr-2"
                                v-model="food"
                                @click="!food"
                            />
                            <label for="foodFilter">Food</label>
                        </div>
                        <div class="col col-md-12 px-1">
                            <input
                                type="checkbox"
                                name="catergoryFilter"
                                id="utilityFilter"
                                class="mr-2"
                                v-model="utility"
                                @click="!utility"
                            />
                            <label for="utilityFilter">Utility</label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- First load -->
            <div
                class="col-md-8 d-flex flex-wrap px-0"
                v-if="typeof productData != 'object'"
            >
                <input
                    type="text"
                    class="form-control mx-2 mb-3"
                    v-model="search"
                    placeholder="Seach products ..."
                />
                <div
                    class="mx-auto mt-5 px-2"
                    v-if="!filterProductsFirstLoad.length"
                >
                    <p class="h2 mb-3 font-weight-bold">No search results</p>
                    <p class="text-break">
                        Sorry! We couldn't find any articles matching your
                        search query '{{ search }}'.
                    </p>
                    <p>What can you do?</p>
                    <ul>
                        <li>Check the spelling for your search query</li>
                        <li>Try a different search query</li>
                    </ul>
                </div>
                <div
                    class="mb-3 col-6 p-2 custom-card rounded-lg"
                    v-for="product in filterProductsFirstLoad"
                    :key="product.id"
                >
                    <div>
                        <router-link :to="'/products/' + product.productID">
                            <img
                                class="card-img-top img-fluid"
                                alt="..."
                                :src="product.productImage"
                            />
                        </router-link>

                        <div class="card-body pt-0 px-2">
                            <router-link
                                :to="'/products/' + product.productID"
                                class="text-dark pt-3 pb-2 h5 d-block"
                                v-text="product.productName"
                            ></router-link>
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
                                    <font-awesome-icon
                                        icon="shopping-cart"
                                    />Add to cart
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
                <input
                    type="text"
                    class="form-control mx-2 mb-3"
                    v-model="search"
                    placeholder="Seach products ..."
                />
                <div class="mx-auto mt-5 px-2" v-if="!filterProducts.length">
                    <p class="h2 mb-3 font-weight-bold">No search results</p>
                    <p class="text-break">
                        Sorry! We couldn't find any articles matching your
                        search query '{{ search }}'.
                    </p>
                    <p>What can you do?</p>
                    <ul>
                        <li>Check the spelling for your search query</li>
                        <li>Try a different search query</li>
                    </ul>
                </div>
                <div
                    class="mb-3 col-6 p-2 custom-card rounded-lg"
                    v-for="productData in filterProducts"
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
                            ></router-link>
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
                                    @click="
                                        addToCart(productData),
                                            (modal = true),
                                            sendPopupItem(productData)
                                    "
                                >
                                    <font-awesome-icon
                                        icon="shopping-cart"
                                    />Add to cart
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
            search: "",
            clothing: false,
            food: false,
            utility: false,
            modal: false,
            cartProduct: [],
        };
    },
    computed: {
        productData() {
            return this.$store.state.productData;
        },
        filterProducts() {
            return this.productData.filter(product => {
                if (this.clothing) {
                    return product.productCategory
                        .toLowerCase()
                        .match("clothing");
                } else if (this.food) {
                    return product.productCategory.toLowerCase().match("food");
                } else if (this.utility) {
                    return product.productCategory
                        .toLowerCase()
                        .match("utility");
                } else {
                    return product.productName
                        .toLowerCase()
                        .match(this.search.toLowerCase());
                }
            });
        },
        filterProductsFirstLoad() {
            return this.sanitizedData.filter(product => {
                if (this.clothing) {
                    return product.productCategory
                        .toLowerCase()
                        .match("clothing");
                } else if (this.food) {
                    return product.productCategory.toLowerCase().match("food");
                } else if (this.utility) {
                    return product.productCategory
                        .toLowerCase()
                        .match("utility");
                } else {
                    return product.productName
                        .toLowerCase()
                        .match(this.search.toLowerCase());
                }
            });
        },
    },
    methods: {
        addToCart(product) {
            this.$store.commit("addToCart", product);
        },
        sendPopupItem(product) {
            this.cartProduct = product;
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
                        productCategory:
                            arrayItem.fields.productCategory.stringValue,
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
.custom-modal {
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    outline: 0;
    display: block;
}
.custom-modal-bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #0000009c;
    z-index: 1000;
}
</style>
