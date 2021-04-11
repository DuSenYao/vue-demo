import Cookies from 'js-cookie';
import app from '../mutation-types';

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? Boolean(Number(Cookies.get('sidebarStatus'))) : true
  }
};

const mutations = {
  [app.TOGGLE_SIDEBAR]: state => {
    const sidebar = state.sidebar;
    sidebar.opened = !sidebar.opened;
    Cookies.set('sidebarStatus', sidebar.opened ? 1 : 0);
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit(app.TOGGLE_SIDEBAR);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
