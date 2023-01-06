import axios from "axios";

export default {
    async GET_PRODUCTS_FROM_API({ commit }) {
        const { data } = await axios.get("http://localhost:3000/products");
        commit("SET_PRODUCTS_TO_STATE", data);
    },
};
