export default {
    ADD_TO_CART({ commit }, product) {
        commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
        commit("REMOVE_FROM_CART", index);
    },
    INCREMENT_FROM_CART({ commit }, index) {
        commit("INCREMENT", index);
    },
    DECREMENT_FROM_CART({ commit }, index) {
        commit("DECREMENT", index);
    },
};
