<template>
    <div>
        <nav
            class="navbar navbar-expand-sm navbar-white p-0"
            :class="{
                'bg-dark': page,
                'navbar--hidden': !showNavbar,
                'bg-white': !page,
            }"
        >
            <div
                class="container"
                v-bind:class="{ 'bg-dark': page, 'bg-white': !page }"
            >
                <router-link
                    to="/"
                    class="navbar-brand custom-margin-brand mr-auto font-weight-bold"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    v-bind:class="{
                        'text-light': page,
                        'text-dark': !page,
                    }"
                    >PWA</router-link
                >
                <ul class="navbar-nav d-none d-sm-block">
                    <li
                        class="nav-item pb-0 pt-1"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                    >
                        <router-link
                            to="/products"
                            class="nav-link"
                            v-bind:class="{
                                'text-light': page,
                                'text-dark': !page,
                            }"
                            >Products</router-link
                        >
                    </li>
                </ul>
                <div class="d-sm-none mr-1">
                    <MyAccount />
                </div>
                <div class="nav-item pr-0 d-sm-none">
                    <router-link
                        to="/cart"
                        class="nav-link p-0"
                        v-bind:class="{
                            'text-light': page,
                            'text-dark': !page,
                        }"
                    >
                        <font-awesome-icon
                            icon="shopping-cart"
                            size="2x"
                            v-bind:class="{
                                'text-light': page,
                                'text-dark': !page,
                            }"
                        /><span
                            class="badge"
                            v-bind:class="{
                                'badge-light': page,
                                'badge-dark': !page,
                            }"
                            >{{ cartCount }}</span
                        >
                    </router-link>
                </div>
                <button
                    class="navbar-toggler custom-margin-toggle"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <font-awesome-icon
                        icon="align-justify"
                        v-bind:class="{
                            'text-light': page,
                            'text-dark': !page,
                        }"
                    />
                </button>
                <div
                    class="collapse navbar-collapse"
                    :class="{
                        'bg-dark': page,
                        'bg-white': !page,
                    }"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item custom-margin-navitems">
                            <SearchBar />
                        </li>
                        <li class="d-none d-sm-block mr-1">
                            <MyAccount />
                        </li>
                        <li class="nav-item pr-2 d-none d-sm-block">
                            <router-link
                                to="/cart"
                                class="nav-link p-0 custom-margin-navitems shopping-cart-center"
                                v-bind:class="{
                                    'text-light': page,
                                    'text-dark': !page,
                                }"
                            >
                                <font-awesome-icon
                                    icon="shopping-cart"
                                    size="2x"
                                    v-bind:class="{
                                        'text-light': page,
                                        'text-dark': !page,
                                    }"
                                /><span
                                    class="badge"
                                    v-bind:class="{
                                        'badge-light': page,
                                        'badge-dark': !page,
                                    }"
                                    >{{ cartCount }}</span
                                >
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import MyAccount from "@/components/MyAccount";
export default {
    name: "Navbar",
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },

    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    components: { SearchBar, MyAccount },
    computed: {
        page: function() {
            if (this.$route.name == "home") {
                return false;
            } else {
                return true;
            }
        },
        cartCount() {
            return this.$store.state.cartCount;
        },
    },
    methods: {
        onScroll() {
            if (window.innerWidth >= 575) {
                const currentScrollPosition =
                    window.pageYOffset || document.documentElement.scrollTop;
                if (currentScrollPosition < 0) {
                    return;
                }
                if (
                    Math.abs(currentScrollPosition - this.lastScrollPosition) <
                    56
                ) {
                    return;
                }
                this.showNavbar =
                    currentScrollPosition < this.lastScrollPosition;
                this.lastScrollPosition = currentScrollPosition;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@media (max-width: 992px) {
    .container {
        max-width: 100%;
        width: 100%;
        padding: 0px;
    }
    .custom-margin-brand {
        margin-left: 1rem;
    }
}
@media (max-width: 575px) {
    .dropdown {
        margin-top: 10px;
    }
    .custom-margin-navitems {
        margin-left: 1rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        margin-top: 0.25rem;
    }
    .custom-margin-toggle {
        margin-right: 0.5rem;
    }
    .custom-margin-account {
        margin-left: 1rem;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }
    #navbarSupportedContent {
        position: absolute;
        z-index: 1;
        margin-top: 50px;
        width: 100vw;
    }
}
.collapsing {
    -webkit-transition: none;
    transition: none;
    display: none;
}
.shopping-cart-center {
    margin-top: 2px;
}
.navbar-toggler:focus {
    outline: 0px;
}
.navbar-toggler:hover {
    color: gray;
}
.navbar {
    position: fixed;
    width: 100vw;
    height: 53px;
    z-index: 9999;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
}
</style>
