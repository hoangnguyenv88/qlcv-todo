<template>
	<v-container class="fill-height justify-center pr-6 pl-6">
		<v-card
			class="justify-center row ma-0 elevation-10 d-flex rounded-xl"
			height="60vh"
			max-width="1100"
			style="overflow: hidden"
		>
			<v-col cols="12" md="4" sm="12" class="pa-0">
				<v-card
					class="text-center d-flex flex-column align-center justify-center"
					height="100%"
					color="green"
					tile
				>
					<div>
						<v-icon size="70">mdi-clipboard-list</v-icon>
						<v-card-title class="justify-center; white--text"
							>TodoApp</v-card-title
						>
						<v-card-subtitle class="text-center; white--text"
							>Lists & Tasks</v-card-subtitle
						>
					</div>
				</v-card>
			</v-col>

			<v-col
				cols="12"
				md="8"
				sm="12"
				class="d-flex flex-column align-center justify-center pr-4 pl-4"
			>
				<v-card class="flex-column elevation-0" min-width="310">
					<v-card-title class="justify-center pa-0"
						>Đăng nhập</v-card-title
					>
					<Form />
				</v-card>
			</v-col>
		</v-card>
	</v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Form from "./Form.vue";
export default {
	components: { Form },
};
</script>
