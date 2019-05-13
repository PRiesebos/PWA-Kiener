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
            <div class="container">
                <router-link
                    to="/"
                    class="navbar-brand custom-margin-brand"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    v-bind:class="{
                        'text-light': page,
                        'text-dark': !page,
                    }"
                    >PWA-Webshop</router-link
                >
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
                        <li class="dropdown nav-item custom-margin-account">
                            <MyAccount />
                        </li>
                        <li
                            class="nav-item"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show"
                        >
                            <router-link
                                to="/about"
                                class="nav-link custom-margin-navitems"
                                v-bind:class="{
                                    'text-light': page,
                                    'text-dark': !page,
                                }"
                                >About</router-link
                            >
                        </li>
                        <li
                            class="nav-item pr-0"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show"
                        >
                            <router-link
                                to="/products"
                                class="nav-link custom-margin-navitems custom-margin-rightmostitem"
                                v-bind:class="{
                                    'text-light': page,
                                    'text-dark': !page,
                                }"
                                >Products</router-link
                            >
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
    .custom-margin-rightmostitem {
        margin-right: 2rem;
    }
}
@media (max-width: 575px) {
    .dropdown {
        margin-top: 10px;
    }

    .custom-margin-navitems {
        margin-left: 1rem;
        margin-right: 0.75rem;
    }
    .custom-margin-toggle {
        margin-right: 0.5rem;
    }
    .custom-margin-account {
        margin-left: 1rem;
        margin-right: 1rem;
    }
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
    height: 56px;
    z-index: 9999;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
}
</style>
