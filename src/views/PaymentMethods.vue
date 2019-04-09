<template>
    <div>
        <div>
            <p class="h1 font-weight-bold text-center mb-3">Payment methods</p>
            <p class="font-weight-bold small">
                Please select your preferred type of payment.
            </p>
            <hr class="w-100" />
            <div class="mt-4">
                <div>
                    <div class="ml-3">
                        <div class="input-group">
                            <label class="font-weight-bold d-block">
                                <input
                                    type="radio"
                                    name="paymentoption"
                                    value="creditcard"
                                />
                                Credit Card</label
                            >
                        </div>
                        <img
                            class="ml-3"
                            src="https://www.mollie.com/external/icons/payment-methods/creditcard.png"
                        />
                    </div>
                    <hr class="w-100 my-2" />
                </div>
                <div>
                    <div class="ml-3">
                        <div class="input-group">
                            <label class="font-weight-bold d-block">
                                <input
                                    type="radio"
                                    name="paymentoption"
                                    value="paypal"
                                />
                                PayPal</label
                            >
                        </div>
                        <img
                            class="ml-3"
                            src="https://www.mollie.com/external/icons/payment-methods/paypal.png"
                        />
                    </div>
                    <hr class="w-100 my-2" />
                </div>
                <div>
                    <div class="ml-3">
                        <div class="input-group">
                            <label class="font-weight-bold d-block">
                                <input
                                    type="radio"
                                    name="paymentoption"
                                    value="banktransfer"
                                />
                                Bank transfer</label
                            >
                        </div>
                        <img
                            class="ml-3"
                            src="https://www.mollie.com/external/icons/payment-methods/banktransfer.png"
                        />
                    </div>
                    <hr class="w-100 my-2" />
                </div>
                <div>
                    <div class="ml-3">
                        <div class="input-group">
                            <label class="font-weight-bold d-block">
                                <input
                                    type="radio"
                                    name="paymentoption"
                                    value="bancontact"
                                />
                                Bancontact</label
                            >
                        </div>
                        <img
                            class="ml-3"
                            src="https://www.mollie.com/external/icons/payment-methods/bancontact.png"
                        />
                    </div>
                    <hr class="w-100 my-2" />
                </div>
                <div>
                    <div class="ml-3">
                        <div class="input-group">
                            <label class="font-weight-bold d-block">
                                <input
                                    type="radio"
                                    name="paymentoption"
                                    value="ideal"
                                />
                                IDEAL</label
                            >
                        </div>
                        <img
                            class="ml-3"
                            src="https://www.mollie.com/external/icons/payment-methods/ideal.png"
                        />
                    </div>
                    <hr class="w-100 my-2" />
                </div>
                <div class="mt-4">
                    <router-link to="overview" class="btn btn-light"
                        >Back</router-link
                    >
                    <button class="btn btn-primary float-right">Change</button>
                </div>
            </div>
        </div>
        <p class="mb-5"></p>
    </div>
</template>

<script>
export default {};
</script>
