import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "./registerServiceWorker";
import "./scss/custom.scss";
import "./scss/style.scss";
import "jquery";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAlignJustify,
    faSearch,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAlignJustify, faSearch, faCheck, faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

let app;

const initialize = () => {
    if (!app) {
        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount("#app");
    }
};

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.state.currentUser) {
        next({
            path: "/account",
        });
    } else {
        next();
    }
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        store.commit("setCurrentUser", user);
    } else {
        store.commit("setCurrentUser", null);
    }
    initialize();
});
