<template>
	<div>
		<p v-if="toDos.length <= 0" class="text-center">Không có nhiệm vụ!</p>
		<v-list-item-group>
			<v-layout v-resize="onResize" column class="mt-4">
				<v-data-table
					:headers="headers"
					:items="reverseItems"
					disable-pagination
					class="elevation-1 body"
					hide-default-footer
					:hide-default-headers="isMobile"
					fixed-header
					:class="{ mobile: isMobile }"
					height="50vh"
				>
					<template v-slot:item="{ item, index }">
						<Item
							:item="item"
							:priorities="priorities"
							:isMobile="isMobile"
						/>
					</template>
				</v-data-table>
			</v-layout>
		</v-list-item-group>
		<div>
			<v-btn
				text
				@click="removeAll"
				style="background-color: #1f9652"
				class="white--text"
			>
				clear
			</v-btn>
		</div>
	</div>
</template>

<script>
import { account } from "@/Stores/account.module";
import Item from "./Item.vue";

export default {
	components: {
		Item,
	},

	props: {
		priorities: Array,
	},

	data() {
		return {
			toDos: this.$store.state.toDos,
			selected: [],
			search: "",
			isMobile: false,

			headers: [
				{
					text: "Ưu tiên",
					value: "priority_id",
					align: "center",
				},

				{
					text: "Nội dung",
					value: "name",
					align: "start",
				},
				{
					text: "Trạng thái",
					value: "completed",
					align: "center",
					sortable: false,
				},
				{
					text: "Thời hạn",
					value: "deadline",
					align: "center",
				},
				{
					text: "Hành động",
					sortable: false,
					align: "center",
				},
			],
		};
	},

	computed: {
		reverseItems() {
			return this.toDos.slice().reverse();
		},
	},

	methods: {
		onResize() {
			if (window.innerWidth < 550) this.isMobile = true;
			else this.isMobile = false;
		},
		toggleAll() {
			if (this.selected.length) this.selected = [];
			else this.selected = this.desserts.slice();
		},
		changeSort(column) {
			console.log(column);
			if (this.pagination.sortBy === column) {
				this.pagination.descending = !this.pagination.descending;
			} else {
				this.pagination.sortBy = column;
				this.pagination.descending = false;
			}
		},
		removeAll() {
			if (this.toDos.length !== 0) {
				const proceed = confirm("Bạn có chắc muốn xóa tất cả todo?");
				if (proceed) {
					this.toDos.splice(0, this.toDos.length);
				} else {
					console.log("Declined");
				}
			}
		},
	},
};
</script>

<style>
th {
	font-size: 1.1rem !important;
}

@media only screen and (max-width: 400px) {
	.mt-4 {
		margin-top: 0px !important;
	}
}
</style>
