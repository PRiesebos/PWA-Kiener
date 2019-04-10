<template>
    <div>
        <!-- Profile change form -->
        <div>
            <p class="font-weight-bold text-left mt-3">Profile</p>
            <hr class="w-100 mb-4" />
            <form @submit.prevent>
                <float-label :dispatch="false" for="inputSalutation">
                    <select
                        class="form-control col-6 col-md-4"
                        id="inputSalutation"
                        required
                    >
                        <option disabled selected>Salutation*</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                    </select>
                </float-label>
                <float-label for="inputFirstName">
                    <input
                        type="text"
                        class="form-control my-4"
                        placeholder="First name*"
                        id="inputFirstName"
                        required
                    />
                </float-label>
                <float-label for="inputLastName">
                    <input
                        type="text"
                        class="form-control my-4"
                        placeholder="Last name*"
                        id="inputLastName"
                        required
                    />
                </float-label>
                <p class="small text-left">
                    The field marked with * are required
                </p>
                <button class="btn btn-primary mb-5" type="submit">
                    Save changes
                </button>
            </form>
        </div>
        <div class="row">
            <!-- Email change form -->
            <div class="col-12 col-md-12 col-lg-6">
                <p class="font-weight-bold">Email address</p>
                <hr class="w-100" />
                <p class="font-weight-bold small mb-1">Current email address</p>
                <p class="small">{{ currentUserData.email }}</p>
                <form @submit.prevent>
                    <float-label for="inputNewEmail">
                        <input
                            type="email"
                            class="form-control my-4"
                            placeholder="New email address*"
                            id="inputNewEmail"
                            required
                        />
                    </float-label>
                    <float-label for="inputEmailCheck">
                        <input
                            type="email"
                            class="form-control my-4"
                            placeholder="Email confirmation*"
                            id="inputEmailCheck"
                            required
                        />
                    </float-label>
                    <float-label for="inputEmailPassword">
                        <input
                            type="password"
                            class="form-control my-4"
                            placeholder="Your current password*"
                            id="inputEmailPassword"
                            required
                        />
                    </float-label>
                    <p class="small text-left">
                        The field marked with * are required
                    </p>
                    <button class="btn btn-primary mb-5" type="submit">
                        Save changes
                    </button>
                </form>
            </div>
            <!-- Password change form -->
            <div class="col-12 col-md-12 col-lg-6">
                <p class="font-weight-bold">Password</p>
                <hr class="w-100" />
                <form @submit.prevent>
                    <div class="custom-align">
                        <float-label for="inputNewPassword">
                            <input
                                type="password"
                                class="form-control my-4"
                                placeholder="New password*"
                                id="inputNewPassword"
                                required
                            />
                        </float-label>
                        <float-label for="inputPasswordCheck">
                            <input
                                type="password"
                                class="form-control my-4"
                                placeholder="Re-enter password*"
                                id="inputPasswordCheck"
                                required
                            />
                        </float-label>
                        <float-label for="inputOldPassword">
                            <input
                                type="password"
                                class="form-control my-4"
                                placeholder="Your current password*"
                                id="inputOldPassword"
                                required
                            />
                        </float-label>
                        <p class="small text-left">
                            The field marked with * are required
                        </p>
                    </div>
                    <button class="btn btn-primary mb-5" type="submit">
                        Save changes
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import FloatLabel from "@/components/FloatLabel";
export default {
    data() {
        return {};
    },
    components: { FloatLabel },
    computed: {
        currentUserData() {
            return this.$store.state.currentUserData;
        },
    },
};
</script>

<style scoped>
@media (min-width: 992px) {
    .custom-align {
        height: 278px;
    }
}
</style>
