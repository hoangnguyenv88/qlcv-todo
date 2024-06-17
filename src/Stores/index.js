import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getter from "./getter";
import { alert } from "./alert.module";
import { account } from "./account.module";
import { users } from "./users.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		alert,
		account,
		users,
	},
	state: {
		toDos: JSON.parse(localStorage.getItem(account.state.user.localStorageKey)) || [],
		newTodo: null,
		editting: null,
		deadlines: null,
		priorityId: 2,
	},
	mutations: mutations,
	getters: getter,
	actions: actions,
});
