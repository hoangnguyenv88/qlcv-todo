<template>
	<v-card elevation="0" class="rounded-lg mb-4">
		<v-card class="mt-4" color="body" elevation="0">
			<div class="d-flex align-center">
				<v-text-field
					type="text"
					placeholder="Nhập ở đây..."
					@keyup.enter="Add"
					v-model.trim="newTodo"
					outlined
					dense
					class="rounded-lg pa-2"
					background-color="white"
					maxlength="255"
					counter="255"
				>
					<v-icon slot="prepend-inner" color="green">
						mdi-keyboard-outline
					</v-icon>
				</v-text-field>
			</div>
			<div class="d-flex justify-space-between align-center pa-2 mt-4">
				<v-item-group class="d-flex align-center">
					<div style="width: 140px" class="d-flex align-center">
						<v-menu
							v-model="modal"
							:close-on-content-click="false"
							transition="scale-transition"
							offset-y
							min-width="auto"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-text-field
									style="font-size: 0.8em"
									v-model="deadline"
									readonly
									v-bind="attrs"
									v-on="on"
									placeholder="Thời hạn"
									hide-details
									outlined
									class="rounded-lg mr-4"
									dense
									background-color="white"
								>
									<v-icon slot="prepend-inner" color="green">
										mdi-calendar
									</v-icon>
								</v-text-field>
							</template>
							<v-date-picker
								color="green"
								year-icon="mdi-calendar-blank"
								prev-icon="mdi-skip-previous"
								next-icon="mdi-skip-next"
								v-model="deadline"
								@input="modal = false"
								:allowed-dates="disablePastDates"
							></v-date-picker>
						</v-menu>
					</div>
					<div
						style="width: 120px"
						class="d-flex align-center justify-center"
					>
						<v-select
							:items="priorities"
							v-model="priority"
							item-text="name"
							item-value="id"
							label="Ưu tiên"
							style="font-size: 0.8em"
							hide-details
							outlined
							class="rounded-lg"
							dense
							background-color="white"
						>
							<template slot="append">
								<v-icon color="green"
									>mdi-arrow-down-drop-circle-outline</v-icon
								>
							</template>

							<template slot="item" slot-scope="data">
								<v-icon :color="data.item.color">
									mdi-rectangle
								</v-icon>

								<span class="ml-4">
									{{ data.item.name }}
								</span>
							</template>
						</v-select>
					</div>
				</v-item-group>
				<div>
					<v-btn
						@click="Add"
						class="white--text"
						color="green rounded-lg"
						elevation="0"
					>
						Thêm
					</v-btn>
				</div>
			</div>
		</v-card>
	</v-card>
</template>

<script>
import "../../../Config/colors";

export default {
	props: {
		priorities: Array,
		item: Object,
	},
	data() {
		return {
			newTodo: this.$store.state.newToDo,
			priority: this.$store.state.priorityId,
			deadline: this.$store.state.deadlines,
			modal: false,
			addTodo: false,
			rules: [(v) => v.length <= 255 || "Max 25 characters"],
		};
	},

	methods: {
		Add() {
			const payload = {
				newToDo: this.newTodo,
				priorityId: this.priority.id || this.priority,
				deadlines: this.deadline,
			};

			this.$store.dispatch("addTask", payload);
			this.newTodo = "";
			this.deadline = null;
		},
		disablePastDates(val) {
			return val >= new Date().toISOString().substr(0, 10);
		},
	},
};
</script>

<style scoped>
@media only screen and (max-width: 400px) {
	.v-text-field {
		font-size: 0.8rem;
	}
}
</style>
