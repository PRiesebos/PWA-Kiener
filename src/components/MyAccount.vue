<template>
    <div>
        <button class="btn btn-light" data-toggle="dropdown">
            <i class="far fa-user"></i>
            My account
        </button>
        <ul class="dropdown-menu dropdown-menu-right mt-2">
            <li class="px-3 py-2">
                <form class="form" role="form">
                    <p class="font-weight-bold">My account</p>
                    <hr class="w-100 my-2" />
                    <a
                        class="btn btn-primary d-block col-md-12 mt-3"
                        href="/account"
                    >
                        Sign in
                    </a>
                    <div class="form-group text-center mb-0">
                        <p class="d-inline">or</p>
                        <a class="btn btn-link d-inline pl-1" href="/account">
                            register
                        </a>
                    </div>
                    <hr class="w-100 my-2" />
                    <ul class="list-group list-unstyled">
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Addresses</a></li>
                        <li><a href="#">Payment methods</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Instant downloads</a></li>
                        <li><a href="#">Wish list</a></li>
                    </ul>
                </form>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul > li > a {
    color: black;
}
</style>
