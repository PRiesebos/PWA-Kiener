import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
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
                requiresAuth: true,
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
    ],
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next("/");
    else if (!requiresAuth && currentUser) next("/");
    else next();
});

export default router;
