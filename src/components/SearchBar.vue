<template>
    <div class="input-group md-form form-sm form-2 pl-0 searchBar">
        <input
            class="form-control my-0 py-1 lime-border"
            type="text"
            placeholder="Search"
            aria-label="Search"
        />
        <div class="input-group-append mr-2">
            <span class="input-group-text lighten-2" id="basic-text1">
                <font-awesome-icon icon="search" />
            </span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@media (min-width: 576px) and (max-width: 679px) {
    .searchBar {
        width: 114px;
    }
}
@media (min-width: 680px) {
    .searchBar {
        width: 210px;
    }
}
@media (min-width: 800px) {
    .searchBar {
        width: 330px;
    }
}
@media (min-width: 992px) {
    .searchBar {
        width: 345px;
    }
}
@media (min-width: 1200px) {
    .searchBar {
        width: 465px;
    }
}
</style>
