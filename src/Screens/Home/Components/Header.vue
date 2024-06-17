<template>
	<div class="white--text">
		<div
			class="text-center py-1"
			:style="{
				backgroundColor: colors.green,
			}"
		>
			<h1 class="font-weight-medium">TO DO LIST</h1>
			<span class="font-weight-medium"
				>Chào mừng {{ account.user.username }}!</span
			>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

import colors from "../../../Config/colors";

export default {
	data() {
		return {
			colors: colors,
		};
	},
	computed: {
		...mapState({
			account: (state) => state.account,
		}),
	},
};
</script>

<style scoped>
@media only screen and (max-width: 400px) {
	h1 {
		font-size: 0.9rem;
	}

	span {
		font-size: 0.9rem;
	}
}
</style>
