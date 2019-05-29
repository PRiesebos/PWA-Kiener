<template>
    <div class="container mt-4">
        <input
            type="text"
            class="form-control"
            v-model="search"
            placeholder="Seach products ..."
        />
        <table class="table table-striped table-hover col-12">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in filterProducts" :key="product.productID">
                    <img
                        :src="product.productImage"
                        alt="..."
                        height="100px"
                        width="100px"
                        class=""
                    />
                    <td>{{ product.productName }}</td>
                    <td>{{ product.productDescription }}</td>
                    <td>€{{ product.productPrice.toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            search: "",
        };
    },
    computed: {
        productData() {
            return this.$store.state.productData;
        },
        filterProducts() {
            return this.productData.filter(product => {
                return product.productName.match(this.search);
            });
        },
    },
};
</script>
