<template>
    <div class="container mt-4">
        <div class="justify-content-center">
            <div class="bg-light py-4 col-12">
                <div class="d-flex flex-wrap">
                    <div class="col-12 col-md-6">
                        <div class="my-4 mx-4">
                            <img
                                :src="productData[productNumber].productImage"
                                alt="..."
                                class="img-fluid"
                            />
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mt-5">
                        <p class="mt-4 display-3 font-weight-bold text-break">
                            {{ productData[productNumber].productName }}
                        </p>
                        <p class="my-4">
                            Dit is een faketekst. Alles wat hier staat is
                            slechts om een indruk te geven van het grafische
                            effect van tekst op...
                        </p>
                        <p class="mb-0 h4 font-weight-bold">
                            €{{
                                productData[productNumber].productPrice.toFixed(
                                    2
                                )
                            }}
                            <span>*</span>
                        </p>
                        <p class="small mb-5">
                            Prices incl. VAT plus shipping costs
                        </p>
                        <div>
                            <!-- Adding custom amount to cart needs fixing -->

                            <!-- <button
                                class="btn btn-secondary btn-quantity"
                                type="button"
                                name="button"
                                @click="itemCount--"
                            >
                                -
                            </button>
                            <p class="d-inline mx-3">{{ itemCount }}</p>
                            <button
                                class="btn btn-secondary btn-quantity mr-4"
                                type="button"
                                name="button"
                                @click="itemCount++"
                            >
                                +
                            </button> -->
                            <button
                                class="btn btn-primary"
                                @click="setCart(productData[productNumber])"
                            >
                                <font-awesome-icon icon="shopping-cart" />
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 px-0 my-5">
                <p class="h2 font-weight-bold">Description</p>
                <hr class="w-100" />
                <p class="font-weight-bold">
                    Product information "{{
                        productData[productNumber].productName
                    }}"
                </p>
                <p>
                    Dit is een faketekst. Alles wat hier staat is slechts om een
                    indruk te geven van het grafische effect van tekst op deze
                    plek. Wat u hier leest is een voorbeeldtekst. Deze wordt
                    later vervangen door de uiteindelijke tekst, die nu nog niet
                    bekend is. De faketekst is dus een tekst die eigenlijk
                    nergens over gaat. Het grappige is, dat mensen deze toch
                    vaak lezen. Zelfs als men weet dat het om een faketekst
                    gaat, lezen ze toch door.
                </p>
                <p class="font-weight-bold">
                    Related links to "{{
                        productData[productNumber].productName
                    }}"
                </p>
                <router-link to="/products">
                    <p class="mb-1 text-primary">
                        > Do you have any questions concerning this product?
                    </p></router-link
                >
                <router-link to="/products">
                    <p class="text-primary">
                        > Further products by Mollie
                    </p></router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productNumber: "",
            itemCount: "1",
        };
    },
    computed: {
        productData() {
            return this.$store.state.productData;
        },
        cart() {
            return this.$store.state.cart;
        },
    },
    beforeMount() {
        this.productNumber = this.$route.params.id - 1;
    },
    methods: {
        setCart(product) {
            this.$store.commit("addToCart", product);
        },
    },
};
</script>
<style scoped>
@media (max-width: 992px) {
    .container {
        width: 100%;
        max-width: 100%;
    }
    .img-size {
        height: 25rem;
    }
}
.display-3 {
    line-height: 1;
}
.btn-quantity {
    width: 40px;
}
</style>
