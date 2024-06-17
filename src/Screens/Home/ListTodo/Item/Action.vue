<template>
	<td :class="isMobile ? 'is-mobile' : ''">
		<div :class="!isMobile ? 'mobile-header' : ''">Hành động</div>

		<div class="d-flex align-center justify-center">
			<v-btn icon class="rounded-lg" color="yellow">
				<v-icon @click="$emit('edit')" size="22" color="yellow"
					>mdi-pencil-outline
				</v-icon>
			</v-btn>

			<v-btn icon class="rounded-lg" color="red">
				<v-icon @click="$emit('Delete')" size="22" color="red"
					>mdi-trash-can-outline
				</v-icon>
			</v-btn>
		</div>
	</td>
</template>

<script>
export default {
	props: {
		item: Object,
		isMobile: Boolean,
	},
};
</script>
