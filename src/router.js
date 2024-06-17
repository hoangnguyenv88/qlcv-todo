import Vue from "vue";
import Router from "vue-router";

import HomePage from "./Screens/Home/Index.vue";
import LoginPage from "./Screens/Auth/Index.vue";

Vue.use(Router);

export const router = new Router({
	mode: "history",
	routes: [
		{ path: "/", component: HomePage },
		{ path: "/login", component: LoginPage },
		{ path: "*", redirect: "/" },
	],
});

router.beforeEach((to, from, next) => {
	const publicPages = ["/login"];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem("user");

	if (authRequired && !loggedIn) {
		return next("/login");
	}

	next();
});
