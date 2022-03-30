import settings from './settings'
import {createStore} from 'vuex'


export const store = new createStore({
  modules: {
    settings,
  },
})