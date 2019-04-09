<template>
    <div>
        <div class="text-center mb-5">
            <p class="h1 font-weight-bold">Addresses</p>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6 mt-2">
                <p class="font-weight-bold mb-1">Default shipping address</p>
                <p class="font-weight-bold">Default billing address</p>
                <hr class="w-100" />
                <div v-if="currentUserData.zip">
                    <p>
                        {{ currentUserData.fname }}{{ currentUserData.lname }}
                    </p>
                    <p>{{ currentUserData.StreetAndNumber }}</p>
                    <p>{{ currentUserData.zip }} {{ currentUserData.city }}</p>
                    <p>{{ currentUserData.country }}</p>
                    <button class="btn btn-light my-3">Change</button>
                </div>
                <div v-else>
                    <p class="mb-5">No existing billing/shipping address</p>
                    <button class="btn btn-light my-5" disabled>Change</button>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <button class="btn btn-primary btn-block">
                    Create new address
                </button>
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
};
</script>
