const transaksi = {
    namespaced: true,
    state: {
        listTransaksi: [
            { 
                id: "TRXIP1",
                donatur: "Anugrah Bakti",
                bantuan: "Gempa Lombok",
                jumlah: 150000,
            },
            { 
                id: "TRXIP2",
                donatur: "Dharma Mahmud",
                bantuan: "Banjir Bandang",
                jumlah: 250000,
            },
            { 
                id: "TRXIP3",
                donatur: "Axis Mahardika",
                bantuan: "Beasiswa Pendidikan",
                jumlah: 300000,
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
            }, 3000);
        }
    }
}
export default transaksi;