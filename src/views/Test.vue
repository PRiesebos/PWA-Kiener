<template>
    <div>
        <p class="h1 ml-2 mb-3">Addresses</p>
        <div class="row ml-2">
            <div>
                <div class="custom-card">
                    <a href="">
                        <div class="custom-card-body">
                            <div class="m-auto p-5">
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
                    </a>
                </div>
            </div>
            <div class="col-sm-5">
                <div
                    class="card"
                    style="height: 314px; box-shadow: 0 2px 1px 0 rgba(0,0,0,.16)"
                >
                    <div class="card-body">
                        <ul class="list-unstyled h-75 mb-5">
                            <li class="font-weight-bold">Peter Riesebos</li>
                            <li>Merelweg 4</li>
                            <li>9765JT, Paterswolde, Drenthe</li>
                            <li>Netherlands</li>
                            <li>Phone number: +31503096858</li>
                        </ul>
                        <dir class="row pl-2">
                            <button class="btn btn-link btn-sm pt-0">
                                Edit
                            </button>
                            |
                            <button class="btn btn-link btn-sm pt-0">
                                Delete</button
                            >|
                            <button class="btn btn-link btn-sm pt-0">
                                Set as Default
                            </button>
                        </dir>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.custom-card {
    border-style: dashed;
    border-width: 2px;
    text-align: center;
    display: table-cell;
    border-radius: 4px;
    border-color: #c7c7c7;
    height: 314px;
    width: 320px;
}

.custom-card-body {
    padding: 2.85rem;
}
a:hover {
    text-decoration: none;
}
</style>
