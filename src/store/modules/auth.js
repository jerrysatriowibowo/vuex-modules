import axios from "axios";

const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem("token") || "",
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post(
                    "https://fakestoreapi.com/auth/login",
                    credentials
                );
                const token = response.data.token;

                localStorage.setItem("token", token);
                console.log("Token Tersimpan", token)

                commit("SET_TOKEN", token);
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        logout({ commit }) {
            const token = localStorage.getItem("token");
            localStorage.removeItem("token");
            commit("SET_TOKEN", "");
            console.log("Token Hilang", token)
            window.location.href = "/login";
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
    },
};
export default auth;