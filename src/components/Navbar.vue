<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-white">
            <div class="container">
                <router-link
                    to="/"
                    class="text-dark navbar-brand"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    >PWA-Webshop</router-link
                >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <font-awesome-icon icon="align-justify" />
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <SearchBar />
                        </li>
                        <li class="dropdown nav-item">
                            <MyAccount />
                        </li>
                        <li
                            class="nav-item"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show"
                        >
                            <router-link to="/about" class="text-dark nav-link"
                                >About</router-link
                            >
                        </li>
                        <li
                            class="nav-item"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show"
                        >
                            <router-link
                                to="/products"
                                class="text-dark nav-link"
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
    props: {},
    components: { SearchBar, MyAccount },
};
</script>

<style lang="scss" scoped>
@media (max-width: 992px) {
    .container {
        max-width: 100%;
        width: 100%;
        padding: 0px;
    }
}
@media (max-width: 567px) {
    .dropdown {
        margin-top: 10px;
    }
}
.navbar-toggler:focus {
    outline: 0px;
}
.navbar-toggler:hover {
    color: gray;
}
</style>
