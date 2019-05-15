<template>
    <div class="container mt-3">
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td v-text="item.title"></td>

                    <td>${{ item.price.toFixed(2) }}</td>

                    <td>
                        <button
                            class="button is-success"
                            @click="addToCart(item)"
                        >
                            Add to Cart
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "Product 1",
                    price: 9.99,
                },
                {
                    id: 2,
                    title: "Product 2",
                    price: 6.66,
                },
                {
                    id: 3,
                    title: "Product 3",
                    price: 15.99,
                },
                {
                    id: 4,
                    title: "Product 4",
                    price: 14.0,
                },
                {
                    id: 5,
                    title: "Product 5",
                    price: 1.2,
                },
                {
                    id: 6,
                    title: "Product 6",
                    price: 10.0,
                },
                {
                    id: 7,
                    title: "Product 7",
                    price: 7.8,
                },
                {
                    id: 8,
                    title: "Product 8",
                    price: 11.3,
                },
                {
                    id: 9,
                    title: "Product 9",
                    price: 5.55,
                },
                {
                    id: 10,
                    title: "Product 10",
                    price: 6.0,
                },
            ],
        };
    },
    methods: {
        addToCart(item) {
            this.$store.commit("addToCart", item);
        },
    },
};
</script>
