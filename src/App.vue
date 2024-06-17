<template>
	<v-app>
		<div v-if="alert.message" :class="`alert ${alert.type}`">
			<v-alert type="error">
				{{ alert.message }}
			</v-alert>
		</div>
		<router-view></router-view>
	</v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "app",
	computed: {
		...mapState({
			alert: (state) => state.alert,
		}),
	},
	methods: {
		...mapActions({
			clearAlert: "alert/clear",
		}),
	},
	watch: {
		$route(to, from) {
			this.clearAlert();
		},
	},
};
</script>
