import firebase from 'firebase/app'

export default {
  state: {
    info: {
    }
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    }
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const id = await dispatch('getId');
        const info = (await firebase.database().ref(`/users/${id}/info`).once('value')).val();
        commit('setInfo', info);
      } catch (error) {
      }

    }
  },
  getters: {
    info: s => s.info
  }
}