import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "../Config/colors";

const opts = {
	theme: {
		themes: {
			light: {
				...colors,
			},

			dark: {},
		},
	},
	icons: {
		iconfont: "mdi", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
	},
};

Vue.use(Vuetify);

export default new Vuetify(opts);
