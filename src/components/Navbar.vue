<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-white">
            <div class="container-fluid">
                <a class="navbar-brand text-dark" href="#">PWA-Webshop</a>
                <button
                    class="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
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
                                    >About</router-link
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
export default {
    name: "Navbar",
    props: {},
};
</script>

<style lang="scss"></style>
