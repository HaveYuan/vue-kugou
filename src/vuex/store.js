import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    name: 'lyy'
}

const getters = {
  getterCount(state, n = 0) {
      return state.name
  }
}

const mutations = {
  mutationsAddCount(state, n=0) {
    return (state.count += n);
  },

  mutationsReduceCount(state, n = 0) {
    return (state.count -= n)
  },

  mutationsInitCount(state) {
    return (state.count = 0);
  }
}

const actions = {
  actionsAddCount(context, n = 0) {
    // console.log(context)
    return context.commit('mutationsAddCount', n)
  },
  actionsReduceCount({ commit }, n = 0) {
    return commit('mutationsReduceCount', n)
  },
  actionsInitCount({ commit }) {
    return commit('mutationsInitCount')
  }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})