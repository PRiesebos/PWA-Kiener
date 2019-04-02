import Vue from "vue";
import Vuex from "vuex";

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
});
