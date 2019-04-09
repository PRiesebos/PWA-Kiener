<template>
    <div class="wrapper">
        <div class="content container text-center">
            <p class="h1 my-5">Test page</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem esse, sed dolorum quos a quam sit pariatur impedit
                minima tenetur.
            </p>
        </div>
        <div class="footer container">
            <div class="d-none d-md-block">
                <hr class="w-100" />
                <div class="d-flex justify-content-between">
                    <ul class="list-unstyled">
                        <p class="h3">PWA-Webshop</p>
                        <li>
                            <router-link to="/" class="text-dark"
                                >Home</router-link
                            >
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul class="list-unstyled">
                        <p class="h3">Features</p>
                        <li>
                            <router-link to="/" class="text-dark"
                                >Home</router-link
                            >
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul class="list-unstyled">
                        <p class="h3">Support</p>
                        <li>
                            <router-link to="/" class="text-dark"
                                >Home</router-link
                            >
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul class="list-unstyled">
                        <p class="h3">Company</p>
                        <li>
                            <router-link to="/" class="text-dark"
                                >Home</router-link
                            >
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <hr class="w-100" />
                <div class="footer-copyright text-center py-3">
                    <router-link to="/" class="text-dark"
                        >© 2018-2019, PWA-Webshop</router-link
                    >
                </div>
            </div>
            <!-- Mobile footer -->
            <div class="row m-0">
                <!-- first block -->
                <div class="col-sm-12">
                    <div
                        id="accordion1"
                        role="tablist"
                        aria-multiselectable="true"
                        class="widget d-block d-md-none"
                    >
                        <div role="tab" id="headingOne">
                            <h4
                                class="card-header py-3 border-0 text-uppercase text-bold"
                            >
                                <a
                                    data-toggle="collapse"
                                    data-parent="#accordion1"
                                    href="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                    >PWA-Webshop</a
                                >
                            </h4>
                        </div>
                        <div
                            id="collapseOne"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="headingOne"
                        >
                            <div class="card-block">
                                <ul class="widget-list list-unstyled">
                                    <li class="mb-2 text-left">
                                        <a href="#!">Payments</a>
                                    </li>
                                    <li class="mb-2 text-left">
                                        <a href="#!">Recurring</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- second block -->
                <div class="col-sm-12">
                    <div
                        id="accordion2"
                        role="tablist"
                        aria-multiselectable="true"
                        class="widget d-block d-md-none"
                    >
                        <div role="tab" id="headingTwo">
                            <h4
                                class="card-header py-3 border-0 text-uppercase text-bold"
                            >
                                <a
                                    data-toggle="collapse"
                                    data-parent="#accordion2"
                                    href="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                    >Features</a
                                >
                            </h4>
                        </div>
                        <div
                            id="collapseTwo"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo"
                        >
                            <div class="card-block">
                                <ul class="widget-list list-unstyled">
                                    <li class="mb-2 text-left">
                                        <a href="#!">Payments</a>
                                    </li>
                                    <li class="mb-2 text-left">
                                        <a href="#!">Recurring</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- third block -->
                <div class="col-sm-12">
                    <div
                        id="accordion3"
                        role="tablist"
                        aria-multiselectable="true"
                        class="widget d-block d-md-none"
                    >
                        <div role="tab" id="headingThree">
                            <h4
                                class="card-header py-3 border-0 text-uppercase text-bold"
                            >
                                <a
                                    data-toggle="collapse"
                                    data-parent="#accordion3"
                                    href="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                    >Support</a
                                >
                            </h4>
                        </div>
                        <div
                            id="collapseThree"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree"
                        >
                            <div class="card-block">
                                <ul class="widget-list list-unstyled">
                                    <li class="mb-2 text-left">
                                        <a href="#!">Payments</a>
                                    </li>
                                    <li class="mb-2 text-left">
                                        <a href="#!">Recurring</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fourth block -->
                <div class="col-sm-12">
                    <div
                        id="accordion4"
                        role="tablist"
                        aria-multiselectable="true"
                        class="widget d-block d-md-none"
                    >
                        <div role="tab" id="headingFour">
                            <h4
                                class="card-header py-3 border-0 text-uppercase text-bold"
                            >
                                <a
                                    data-toggle="collapse"
                                    data-parent="#accordion4"
                                    href="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                    >Company</a
                                >
                            </h4>
                        </div>
                        <div
                            id="collapseFour"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="headingFour"
                        >
                            <div class="card-block">
                                <ul class="widget-list list-unstyled">
                                    <li class="mb-2 text-left">
                                        <a href="#!">Payments</a>
                                    </li>
                                    <li class="mb-2 text-left">
                                        <a href="#!">Recurring</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@media (max-width: 768px) {
    .container {
        max-width: 100%;
        width: 100%;
        padding: 0px;
    }
}

html {
    display: flex;
}

.wrapper {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.header,
.footer {
    flex-shrink: 0;
}

.content {
    flex-grow: 1;
}

h3,
a,
p {
    color: #1f2124;
}
.widget-list {
    li {
        a {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.widget {
    .card-header {
        background: #fff;
        a {
            width: 100%;
            display: block;
            &:before {
                content: "+";
                position: absolute;
                right: 40px;
                top: 0.9rem;
                transition: transform 0.25s ease-in-out;
            }
            &:hover,
            &:focus {
                text-decoration: none;
            }
            &[aria-expanded="true"] {
                &:before {
                    transform: rotate(45deg);
                }
            }
        }
    }
    .card-block {
        padding: 0 1.3rem;
        .widget-list {
            li {
                margin-bottom: 4px;
            }
        }
    }
}
</style>
