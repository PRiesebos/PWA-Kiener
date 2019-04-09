import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {
        setCurrentUser(state, payload) {
            state.currentUser = payload;
        },
        setCurrentUserData(state, payload) {
            state.currentUserData = payload;
        },
    },
    actions: {},
    plugins: [createPersistedState()],
});
