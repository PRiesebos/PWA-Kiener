let cart = window.localStorage.getItem("cart");
let cartCount = window.localStorage.getItem("cartCount");

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
        cartCount: cartCount ? parseInt(cartCount) : 0,
    },
    mutations: {
        setCurrentUser(state, payload) {
            state.currentUser = payload;
        },
        setCurrentUserData(state, payload) {
            state.currentUserData = payload;
        },
        setCurrentUserAddress(state, payload) {
            state.currentUserAddress = payload;
        },
        setCurrentUserSecondAddress(state, payload) {
            state.currentUserSecondAddress = payload;
        },
        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);

            if (found) {
                found.quantity++;
                found.totalPrice = found.quantity * found.price;
            } else {
                state.cart.push(item);

                Vue.set(item, "quantity", 1);
                Vue.set(item, "totalPrice", item.price);
            }

            state.cartCount++;
        },
        removeFromCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);
            let index = state.cart.indexOf(item);

            if (found && found.quantity > 1) {
                found.quantity--;
                found.totalPrice = found.quantity * found.price;
                state.cartCount--;
            } else {
                let product = state.cart[index];
                state.cartCount -= product.quantity;

                state.cart.splice(index, 1);
                this.commit("saveCart");
            }
        },
        deleteFromCart(state, item) {
            let index = state.cart.indexOf(item);

            if (index > -1) {
                let product = state.cart[index];
                state.cartCount -= product.quantity;

                state.cart.splice(index, 1);
            }
            this.commit("saveCart");
        },
        saveCart(state) {
            window.localStorage.setItem("cart", JSON.stringify(state.cart));
            window.localStorage.setItem("cartCount", state.cartCount);
        },
    },
    actions: {},
    plugins: [createPersistedState()],
});
