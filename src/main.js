import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Default from "./layouts/Default.vue";
import Bare from "./layouts/Bare.vue";
import UserPanel from "./layouts/UserPanel.vue";

import firebase from "firebase/app";
import "./registerServiceWorker";
import "./scss/custom.scss";
import "jquery";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAlignJustify,
    faSearch,
    faTimes,
    faExclamationTriangle,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faAlignJustify,
    faSearch,
    faTimes,
    faUser,
    faExclamationTriangle,
    faPlus
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("default-layout", Default);
Vue.component("bare-layout", Bare);
Vue.component("userpanel-layout", UserPanel);

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
            path: "/register",
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
