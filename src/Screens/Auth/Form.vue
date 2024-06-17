<template>
	<form @submit.prevent="handleSubmit" class="pr-4 pl-4">
		<div class="form-group">
			<br />

			<v-text-field
				type="text"
				v-model="username"
				name="username"
				class="form-control"
				placeholder="Tên người dùng..."
				:class="{
					'is-invalid': submitted && !username,
				}"
				required
			></v-text-field>
			<v-progress-circular
				class="mb-2"
				style="left: 45%"
				v-show="status.loggingIn"
				indeterminate
				color="green"
			></v-progress-circular>
			<div
				v-show="submitted && !username"
				class="invalid-feedback mb-2"
				style="color: red"
			>
				Tên người dùng không được để trống
			</div>
		</div>
		<div class="form-group">
			<v-btn
				class="mr-4 mt-4; white--text rounded-lg"
				color="green"
				block
				:disabled="status.loggingIn"
				@click="handleSubmit"
			>
				<a href="http://localhost:8080/login"></a>
				Đăng nhập
			</v-btn>
		</div>
	</form>
</template>
<script>
import { mapState, mapActions } from "vuex";

import "../../Config/colors";

export default {
	data() {
		return {
			username: "",
			submitted: false,
		};
	},
	computed: {
		...mapState("account", ["status"]),
	},
	created() {
		this.logout();
	},
	methods: {
		...mapActions("account", ["login", "logout"]),
		handleSubmit(e) {
			this.submitted = true;
			const { username } = this;
			if (username) {
				this.login({ username });
			}
		},
	},
};
</script>
