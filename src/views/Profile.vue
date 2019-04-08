<template>
    <div>
        <!-- Profile change form -->
        <div>
            <p class="font-weight-bold text-left mt-3">Profile</p>
            <hr class="w-100" />
            <form @submit.prevent>
                <select class="form-control col-6 col-md-4" required>
                    <option value="salutation" disabled>Salutation*</option>
                    <option value="mr">Mr</option>
                    <option value="ms">Ms</option>
                </select>
                <input
                    type="text"
                    class="form-control my-3"
                    placeholder="First name*"
                    required
                />
                <input
                    type="text"
                    class="form-control my-3"
                    placeholder="Last name*"
                    required
                />
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
                    <input
                        type="email"
                        class="form-control my-3"
                        placeholder="New email address*"
                        required
                    />
                    <input
                        type="email"
                        class="form-control my-3"
                        placeholder="Email confirmation*"
                        required
                    />
                    <input
                        type="email"
                        class="form-control my-3"
                        placeholder="Your current password*"
                        required
                    />
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
                        <input
                            type="password"
                            class="form-control my-3"
                            placeholder="New password*"
                            required
                        />
                        <input
                            type="password"
                            class="form-control my-3"
                            placeholder="Re-enter password*"
                            required
                        />
                        <input
                            type="password"
                            class="form-control my-3"
                            placeholder="Your current password*"
                            required
                        />
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

<style scoped>
@media (min-width: 992px) {
    .custom-align {
        height: 250px;
    }
}
</style>
