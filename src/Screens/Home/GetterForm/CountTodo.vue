<template>
	<div
		class="text-center align-center justify-center"
		style="flex-wrap: wrap"
	>
		<div class="mx-3" style="font-weight: bold">
			Bạn có {{ allTasks }} nhiệm vụ
		</div>
		<div class="d-flex align-center justify-center">
			<div
				class="px-3 white--text rounded-lg"
				:style="{
					backgroundColor: colors.indio,
				}"
			>
				Mới: {{ newTodo }}
			</div>

			<div
				:style="{
					backgroundColor: colors.green,
				}"
				class="px-4 mx-3 white--text rounded-lg"
			>
				Hoàn thành: {{ done }}
			</div>

			<div
				:style="{
					backgroundColor: colors.red,
				}"
				class="px-4 white--text rounded-lg"
			>
				Hủy bỏ: {{ cancel }}
			</div>
		</div>
		<br />
	</div>
</template>
<script>
import colors from "../../../Config/colors";

export default {
	data() {
		return {
			colors: colors,
		};
	},
	computed: {
		newTodo() {
			return this.$store.getters.newTodo;
		},

		done() {
			return this.$store.getters.done;
		},
		cancel() {
			return this.$store.getters.cancel;
		},
		allTasks() {
			return this.$store.getters.allTasks;
		},
	},
};
</script>

<style scoped>
@media only screen and (max-width: 400px) {
	div {
		font-size: 0.9rem;
	}
}
</style>
