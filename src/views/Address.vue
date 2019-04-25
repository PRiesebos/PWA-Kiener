<template>
    <div>
        <p class="h1 ml-2 mb-3">Addresses</p>
        <div class="row ml-2 mr-1">
            <div class="custom-card col-lg-4 col-md-5 col-12 mr-3 px-0">
                <router-link to="/account/address/edit">
                    <div class="custom-card-body">
                        <div class="m-auto py-5">
                            <font-awesome-icon
                                class="text-secondary"
                                icon="plus"
                                size="3x"
                            />
                            <p class="font-weight-bold h3 text-secondary">
                                Add Address
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="card custom-card-plain col-lg-4 col-md-5 col-12 px-0">
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li class="font-weight-bold">John Doe</li>
                        <li>De Hoogte 3</li>
                        <li>1234 AB, Leek, Drenthe</li>
                        <li>Netherlands</li>
                        <li>Phone number: +31507384219</li>
                    </ul>
                    <!-- address type (bill,ship,both) -->
                    <p class="small font-weight-bold">
                        Billing and shipping address
                    </p>
                    <div class="row pl-2">
                        <router-link
                            to="/account/address/edit"
                            class="btn btn-link btn-sm pt-0"
                            >Edit</router-link
                        >
                        |
                        <router-link
                            to="/account/address/edit"
                            class="btn btn-link btn-sm pt-0"
                            >Delete</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        currentUserData() {
            return this.$store.state.currentUserData;
        },
    },
    methods: {
        addAddress() {},
    },
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
    .custom-card,
    .custom-card-body .custom-card-plain {
        height: 250px;
        padding-top: 30px;
        margin-bottom: 15px;
    }
    .list-unstyled {
        margin-bottom: 63px;
    }
}
@media (min-width: 768px) {
    .custom-card-body {
        padding: 3.9rem;
    }
    .list-unstyled {
        margin-bottom: 90px;
    }
}

.custom-card {
    border-style: dashed;
    border-width: 2px;
    text-align: center;
    display: table-cell;
    border-radius: 4px;
    border-color: #c7c7c7;
}
.custom-card-plain {
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.16);
}

a:hover {
    text-decoration: none;
}
</style>
