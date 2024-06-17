<template>
	<td
		:class="isMobile ? 'is-mobile' : ''"
		style="text-align: center; vertical-align: middle; height: 60px"
	>
		<div :class="!isMobile ? 'mobile-header' : ''">Thời hạn</div>
		<v-list-item-action style="" class="ma-0">
			<v-menu
				v-model="modal"
				:close-on-content-click="false"
				:nudge-left="180"
				transition="scale-transition"
				offset-y
				min-width="auto"
			>
				<template v-slot:activator="{ on, attrs }">
					<v-text-field
						style="
							width: 97px;
							font-size: 0.9rem;
							background-color: white;
						"
						v-model="item.deadline"
						readonly
						v-bind="attrs"
						v-on="on"
						placeholder="Thời hạn"
						hide-details
						outlined
						class="rounded-lg mr-4"
						dense
						:disabled="item.completed !== 0"
					></v-text-field>
				</template>
				<v-date-picker
					color="green"
					year-icon="mdi-calendar-blank"
					prev-icon="mdi-skip-previous"
					next-icon="mdi-skip-next"
					v-model="item.deadline"
					@input="modal = false"
					:allowed-dates="disablePastDates"
				></v-date-picker>
			</v-menu>
		</v-list-item-action>
	</td>
</template>

<script>
export default {
	props: {
		item: Object,
		isMobile: Boolean,
	},
	data() {
		return {
			deadline: this.$store.state.deadlines,
			modal: false,
		};
	},

	methods: {
		disablePastDates(val) {
			return val >= new Date().toISOString().substr(0, 10);
		},
	},
};
</script>
