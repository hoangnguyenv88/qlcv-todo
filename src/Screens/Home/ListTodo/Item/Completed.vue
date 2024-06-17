<template>
	<td :class="isMobile ? 'is-mobile' : ''" class="mr-0 pr-0">
		<div :class="!isMobile ? 'mobile-header' : ''">Trạng thái</div>
		<div class="d-flex justify-center ml-2" style="width: 160px">
			<v-select
				:items="complete"
				v-model="item.completed"
				item-text="name"
				item-value="id"
				style="font-size: 0.9rem"
				hide-details
				dense
				flat
				solo
				background-color="body"
				append-icon=""
			>
				<template v-slot:selection="{ item }">
					<span
						class="d-flex justify-center rounded-lg align-center font-weight-bold"
						style="width: 120px; height: 20px"
						:style="{
							color: item.color,
						}"
					>
						{{ item.name }}
					</span>
					<v-icon>mdi-menu-down</v-icon>
				</template>
			</v-select>
		</div>
	</td>
</template>

<script>
import colors from "../../../../Config/colors";

export default {
	props: {
		item: Object,
		isMobile: Boolean,
	},

	data() {
		return {
			complete: [
				{
					id: 0,
					name: "Mới",
					color: colors.indio,
				},
				{
					id: 1,
					name: "Hoàn thành",
					color: colors.green,
				},

				{
					id: 2,
					name: "Hủy bỏ",
					color: colors.red,
				},
			],
		};
	},
};
</script>
