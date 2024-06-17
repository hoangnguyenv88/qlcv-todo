import Vue from "vue";
import VeeValidate from "vee-validate";
import Vuex from "vuex";
import { store } from "./Stores";
import { router } from "./router.js";
import App from "./App.vue";

import vuetify from "./Plugins/vuetify";

Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.config.productionTip = false;

console.log(process.env.VUE_APP_LOCAL_STORAGE_KEY);

import { configureFakeBackend } from "./Routes";
configureFakeBackend();

new Vue({
	el: "#app",
	vuetify,
	router,
	store,
	render: (h) => h(App),
});
