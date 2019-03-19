<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-white">
            <div class="container navbarComp">
                <a class="navbar-brand text-dark" href="/">PWA-Webshop</a>
                <button
                    class="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarComp"
                >
                    <i class="fas fa-align-justify"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarComp">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <SearchBar />
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <router-link to="/" class="text-dark"
                                    >Home</router-link
                                >
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <router-link to="/about" class="text-dark"
                                    >About</router-link
                                >
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <router-link to="/products" class="text-dark"
                                    >Products</router-link
                                >
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
    name: "Navbar",
    props: {},
    components: { SearchBar },
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
</style>
