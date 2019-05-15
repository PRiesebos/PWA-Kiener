import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: require("@/views/Home.vue").default,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("./views/About.vue"),
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import("./views/ShoppingCart.vue"),
            meta: {
                layout: "default",
            },
        },
        {
            path: "/test",
            name: "test",
            component: () => import("./views/Test.vue"),
            meta: {
                layout: "default",
                auth: true,
            },
        },
        {
            path: "/products",
            name: "products",
            component: () => import("./views/Products.vue"),
        },
        {
            path: "/account/overview",
            name: "overview",
            component: () => import("./views/Overview.vue"),
            meta: {
                layout: "userpanel",
                auth: true,
            },
        },
        {
            path: "/account/profile",
            name: "profile",
            component: () => import("./views/Profile.vue"),
            meta: {
                layout: "userpanel",
                auth: true,
            },
        },
        {
            path: "/account/address",
            name: "address",
            component: () => import("./views/Address.vue"),
            meta: {
                layout: "userpanel",
                auth: true,
            },
        },
        {
            path: "/account/address/edit/:id",
            name: "addressEdit",
            component: () => import("./views/AddressEdit.vue"),
            meta: {
                layout: "default",
                auth: true,
            },
        },
        {
            path: "/account/address/add",
            name: "addressAdd",
            component: () => import("./views/AddressAdd.vue"),
            meta: {
                layout: "default",
                auth: true,
            },
        },
        {
            path: "/account/paymentmethods",
            name: "paymentmethods",
            component: () => import("./views/PaymentMethods.vue"),
            meta: {
                layout: "userpanel",
                auth: true,
            },
        },
        {
            path: "/account/orders",
            name: "orders",
            component: () => import("./views/Orders.vue"),
            meta: {
                layout: "userpanel",
                auth: true,
            },
        },
        {
            path: "/signin",
            name: "signin",
            meta: { layout: "bare" },
            component: () => import("./views/Signin.vue"),
        },
        {
            path: "/register",
            name: "register",
            meta: { layout: "bare" },
            component: () => import("./views/Register.vue"),
        },
        {
            path: "*",
            name: "404",
            meta: { layout: "bare" },
            component: () => import("./views/404.vue"),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

export default router;
