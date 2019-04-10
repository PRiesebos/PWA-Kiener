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
                            alt="Credit card icon"
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
                            alt="Paypal icon"
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
                            alt="Banktransfer icon"
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
                            alt="Bancontact icon"
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
                            alt="IDEAL icon"
                        />
                    </div>
                    <hr class="w-100 my-2" />
                </div>
                <div class="my-4">
                    <router-link to="overview" class="btn btn-light"
                        >Back</router-link
                    >
                    <button class="btn btn-primary float-right">Change</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
