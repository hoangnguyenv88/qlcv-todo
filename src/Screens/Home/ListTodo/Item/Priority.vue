<template>
	<td :class="isMobile ? 'is-mobile' : 'priority'">
		<div :class="!isMobile ? 'mobile-header' : ''">Ưu tiên</div>
		<div class="d-flex align-center">
			<div
				style="height: 40px; width: 9px"
				:style="{
					backgroundColor: priorities[item.priority_id].color,
				}"
				class="rounded-xl ml-2"
			></div>
			<h4
				:style="{ color: priorities[item.priority_id].color }"
				class="pl-2"
			>
				{{ priorities[item.priority_id].name }}
			</h4>
		</div>
	</td>
</template>

<script>
export default {
	props: {
		item: Object,
		priorities: Array,
		isMobile: Boolean,
	},
};
</script>
