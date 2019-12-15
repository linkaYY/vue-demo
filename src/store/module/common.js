/**
 * 公共状态
 */
const state = {
  lang: "cn-ZH"
};

const getters = {};

const actions = {};

const mutations = {
  setLang(state, lang) {
    state.lang = lang;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
