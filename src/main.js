import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./scss/custom.scss";
import "./scss/style.scss";
import "jquery";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
