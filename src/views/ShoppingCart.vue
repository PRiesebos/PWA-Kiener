<template>
    <div class="container">
        <div class="justify-content center my-4">
            <p class="h1 font-weight-bold mb-4" id="pageTitle">Shopping cart</p>
            <div v-if="$store.state.cart.length > 0" class="my-4">
                <a
                    v-for="item in $store.state.cart"
                    :key="item.id"
                    class="nounderline"
                >
                    <hr class="w-100" />
                    <div class="d-flex justify-content-between">
                        <div class="mt-2 col-2">{{ item.title }}</div>
                        <div class="p-0">
                            <button
                                class="btn btn-secondary btn-quantity"
                                type="button"
                                name="button"
                                @click="removeFromCart(item)"
                            >
                                -
                            </button>
                            <p class="d-inline mx-3">{{ item.quantity }}</p>
                            <button
                                class="btn btn-secondary btn-quantity"
                                type="button"
                                name="button"
                                @click="addToCart(item)"
                            >
                                +
                            </button>
                        </div>
                        <div class="mt-2 text-dark col-2 p-0">
                            Price: ${{ item.totalPrice }}
                        </div>
                        <button
                            class="removeBtn btn"
                            title="Remove from cart"
                            @click.prevent="deleteFromCart(item)"
                        >
                            X
                        </button>
                    </div>
                </a>
                <hr class="navbar-divider" />
            </div>
            <div
                v-else
                class="alert alert-warning alert-border mt-4"
                role="alert"
            >
                Your Shopping Cart is empty.
            </div>
            <div
                class="alert-warning mt-3 mx-0 row rounded-lg"
                v-if="$store.state.cart.length > 0"
            >
                <div class="col-7">
                    <p class="mt-3 h5 font-weight-bold text-dark">
                        Payment info
                    </p>
                    <p class="text-primary">
                        <span class="h4">></span> Insert voucher
                    </p>
                </div>
                <div class="col-md-5 col-sm-12 my-3">
                    <p class="mb-0 text-dark">
                        Total products
                        <span class="text-dark font-weight-bold float-right"
                            >$ {{ totalPrice }}</span
                        >
                    </p>
                    <p class="mb-0 text-dark">
                        Shipping cost
                        <span class="text-success font-weight-bold float-right"
                            >Free</span
                        >
                    </p>
                    <hr class="w-100 my-1 border-dark" />
                    <p class="text-dark font-weight-bold mt-1">
                        Total
                        <strong class="float-right">$ {{ totalPrice }}</strong>
                    </p>
                    <button class="btn btn-primary float-right shadow-sm">
                        > To Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemCount: "",
        };
    },
    computed: {
        totalPrice() {
            let total = 0;

            for (let item of this.$store.state.cart) {
                total += item.totalPrice;
            }

            return total.toFixed(2);
        },
    },
    methods: {
        addToCart(item) {
            this.$store.commit("addToCart", item);
        },
        removeFromCart(item) {
            this.$store.commit("removeFromCart", item);
        },
        deleteFromCart(item) {
            this.$store.commit("deleteFromCart", item);
        },
    },
};
</script>
<style lang="scss" scoped>
@media (max-width: 992px) {
    .container {
        max-width: 100%;
        width: 97%;
        padding: 0px;
    }
    #pageTitle {
        margin-left: 1rem;
    }
}
.alert-border {
    border-left: 3px solid #ff9800;
}
.removeBtn {
    margin-right: 1rem;
    color: red;
}
.nounderline {
    text-decoration: none !important;
}
.btn-quantity {
    width: 40px;
}
</style>
