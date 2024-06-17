<template>
	<td
		:class="isMobile ? 'is-mobile' : ''"
		style="width: 35%; min-height: 48px; height: unset"
	>
		<div :class="!isMobile ? 'mobile-header' : ''">Nội dung</div>
		<div style="max-width: 270px">
			<h3
				:style="isMobile ? { 'margin-left': '30px' } : ''"
				class="mt-1 black--text font-weight-regular py-4"
				:class="{
					'text-decoration-line-through': item.completed,
				}"
			>
				{{
					(editing === item) & (item.completed === 0)
						? null
						: item.name
				}}
			</h3>
			<v-textarea
				v-if="editing === item && item.completed === 0"
				v-model="item.name"
				@keyup.escape="doneEdit"
				@keyup.enter="doneEdit"
				maxlength="255"
				counter="255"
				v-click-outside="doneEdit"
				outlined
			/>
		</div>
	</td>
</template>

<script>
export default {
	props: {
		item: Object,
		isMobile: Boolean,
		editing: Object,
	},

	data() {
		return {
			rules: [(v) => v.length <= 255 || "Max 25 characters"],
		};
	},

	methods: {
		doneEdit() {
			this.$emit("doneEdit");
		},
	},
};
</script>
