import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "*",
            name: "404",
            component: () => import("./views/404.vue"),
        },
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("./views/About.vue"),
        },
        {
            path: "/test",
            name: "test",
            component: () => import("./views/Test.vue"),
            meta: {
                auth: true,
            },
        },
        {
            path: "/products",
            name: "products",
            component: () => import("./views/Products.vue"),
        },
        {
            path: "/account",
            name: "account",
            component: () => import("./views/Account.vue"),
        },
        {
            path: "/account/overview",
            name: "profile",
            component: () => import("./views/Overview.vue"),
        },
    ],
});

export default router;
