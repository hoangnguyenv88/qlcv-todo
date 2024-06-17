<template>
	<div>
		<Header />
		<v-container class="fluid justify-center pa-2 d-flex align-center">
			<v-card class="elevation-0" width="1000px">
				<div class="mt-2 d-flex justify-end logout">
					<router-link
						to="/login"
						:style="{ color: colors.green }"
						style="text-decoration: none"
					>
						<v-icon color="green darken-2"> mdi-logout </v-icon>
						Đăng xuất
					</router-link>
				</div>
				<v-card
					class="justify-center ma-0 elevation-0 d-flex"
					height="100%"
					color="white"
					width="1200"
				>
					<v-card class="ma-0 elevation-0" width="100%">
						<AddTodo :priorities="priorities" />
						<CountTodo />
						<v-list class="pa-0">
							<ListTodo :priorities="priorities" />
						</v-list>
					</v-card>
				</v-card>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import AddTodo from "./GetterForm/AddTodo.vue";
import ListTodo from "./ListTodo/List.vue";
import Header from "./Components/Header.vue";
import CountTodo from "./GetterForm/CountTodo.vue";
import { account } from "@/Stores/account.module";

import colors from "../../Config/colors";
export default {
	components: { AddTodo, ListTodo, Header, CountTodo },
	data() {
		return {
			colors: colors,
			toDos: this.$store.state.toDos,

			priorities: [
				{
					id: 0,
					name: "Cao",
					color: colors.red,
					icon: "mdi-flag",
				},
				{
					id: 1,
					name: "T.bình",
					color: colors.yellow,
					icon: "mdi-flag",
				},
				{
					id: 2,
					name: "Thấp",
					color: colors.green,
					icon: "mdi-flag",
				},
			],
		};
	},
	computed: {
		...mapState({
			account: (state) => state.account,
			users: (state) => state.users.all,
		}),
	},
	created() {
		this.getAllUsers();
	},
	methods: {
		...mapActions("users", {
			getAllUsers: "getAll",
		}),
	},

	watch: {
		toDos: {
			deep: true,
			handler(newValue) {
				localStorage.setItem(
					account.state.user.localStorageKey,
					JSON.stringify(newValue)
				);
			},
		},
	},
};
</script>

<style scoped>
@media only screen and (max-width: 400px) {
	.logout {
		font-size: 0.8rem;
		margin-top: 0 !important;
	}
}
</style>
