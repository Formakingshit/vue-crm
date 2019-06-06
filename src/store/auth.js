import firebase from 'firebase'

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e);
        throw e
      }
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      await commit('clearInfo');
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        const uid = await dispatch('getId');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bull: 10000,
          name
        });
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    getId() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    }
  }
}