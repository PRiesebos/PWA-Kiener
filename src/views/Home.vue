<template>
    <div class="home">
        <div class="homepage">
            <div class="m-auto inline-content">
                <h1 class="h1 text-white text-center mb-4">
                    Effortless <br />merchandise
                </h1>
                <p class="text-white text-center">
                    Be part of our movement to make payments as effortless as
                    possible. What better way to tell our story than by wearing
                    our beautiful merchandise?
                </p>
                <div class="row mt-4 mx-auto col-12">
                    <div class="btn-group btn-group-lg">
                        <a href="/about" class="btn btn-outline-light"
                            >About Mollie payments</a
                        >
                        <a href="/products" class="btn btn-primary ml-2"
                            >Explore our merchandise</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "home",
    components: {},
};
</script>
<style lang="scss" scoped>
.homepage {
    background-position: right top;
    height: calc(100vh - 56px);
    background-size: auto 100%;
    background-image: url("../assets/images/t-shirt-black-home.webp"),
        linear-gradient(to bottom, #2f2f2f 0%, #1e1e1e 100%);
    background-repeat: no-repeat;
    display: flex;
}

@media (max-width: 768px) {
    .homepage {
        background-image: linear-gradient(to bottom, #2f2f2f 0%, #1e1e1e 100%);
    }
}

.inline-content {
    max-width: 33.5rem;
    display: block;
}
</style>
