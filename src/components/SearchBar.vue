<template>
    <div>
        <div class="input-group md-form form-sm form-2 pl-0 searchBar">
            <input
                class="form-control my-0 py-1 lime-border"
                type="text"
                placeholder="Search"
                aria-label="Search"
            />
            <div class="input-group-append mr-2">
                <span class="input-group-text lighten-2" id="basic-text1">
                    <i class="fas fa-search text-grey" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@media (min-width: 680px) {
    .searchBar {
        width: 300px;
    }
}
@media (min-width: 768px) {
    .searchBar {
        width: 283px;
    }
}
@media (min-width: 965px) {
    .searchBar {
        width: 403px;
    }
}
@media (min-width: 992px) {
    .searchBar {
        width: 413px;
    }
}
@media (min-width: 1200px) {
    .searchBar {
        width: 532px;
    }
}
</style>
