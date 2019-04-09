<template>
    <div>
        <!-- Profile change form -->
        <div>
            <p class="font-weight-bold text-left mt-3">Profile</p>
            <hr class="w-100" />
            <form @submit.prevent>
                <label for="inputSalutation" class="d-none">Salutation</label>
                <select
                    class="form-control col-6 col-md-4"
                    id="inputSalutation"
                    required
                >
                    <option value="salutation" disabled>Salutation*</option>
                    <option value="mr">Mr</option>
                    <option value="ms">Ms</option>
                </select>
                <label for="inputFirstName" class="d-none">First name</label>
                <input
                    type="text"
                    class="form-control my-3"
                    placeholder="First name*"
                    id="inputFirstName"
                    required
                />
                <label for="inputLastName" class="d-none">Last name</label>
                <input
                    type="text"
                    class="form-control my-3"
                    placeholder="Last name*"
                    id="inputLastName"
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
                    <label for="inputNewEmail" class="d-none">New email</label>
                    <input
                        type="email"
                        class="form-control my-3"
                        placeholder="New email address*"
                        id="inputNewEmail"
                        required
                    />
                    <label for="inputEmailCheck" class="d-none"
                        >Re-enter new email</label
                    >
                    <input
                        type="email"
                        class="form-control my-3"
                        placeholder="Email confirmation*"
                        id="inputEmailCheck"
                        required
                    />
                    <label for="inputEmailPassword" class="d-none"
                        >Password</label
                    >
                    <input
                        type="email"
                        class="form-control my-3"
                        placeholder="Your current password*"
                        id="inputEmailPassword"
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
                        <label for="inputNewPassword" class="d-none"
                            >New password</label
                        >
                        <input
                            type="password"
                            class="form-control my-3"
                            placeholder="New password*"
                            id="inputNewPassword"
                            required
                        />
                        <label for="inputPasswordCheck" class="d-none"
                            >Re-enter new password</label
                        >
                        <input
                            type="password"
                            class="form-control my-3"
                            placeholder="Re-enter password*"
                            id="inputPasswordCheck"
                            required
                        />
                        <label for="inputOldPassword" class="d-none"
                            >Old password</label
                        >
                        <input
                            type="password"
                            class="form-control my-3"
                            placeholder="Your current password*"
                            id="inputOldPassword"
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
