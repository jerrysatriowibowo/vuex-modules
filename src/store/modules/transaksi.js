const transaksi = {
    namespaced: true,
    state: {
        listTransaksi: [
            { 
                id: "TRXIP1",
                donatur: "Anugrah Sandi",
                bantuan: "Gempa Lombok",
                jumlah: 10000,
            },
            { 
                id: "TRXIP2",
                donatur: "Dharma",
                bantuan: "Banjir Bandang",
                jumlah: 250000,
            },
            { 
                id: "TRXIP3",
                donatur: "Asis Ramadhan",
                bantuan: "Beasiswa Pendidikan",
                jumlah: 3000000,
            },
        ],
    },
    mutations: {
        ADD_DONASI: (state, payload) => {
            state.listTransaksi.push(payload);
        },
    },
    actions: {
        save_donasi({ commit, rootState }, payload) {
            rootState.isLoading = true;
            setTimeout(() => {
                commit("ADD_DONASI", payload);
                rootState.isLoading = false;
            }, 1000);
        }
    }
}
export default transaksi;