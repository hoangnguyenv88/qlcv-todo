<template>
	<tr
		style="border-bottom: thin solid rgba(0, 0, 0, 0.12) !important"
		class="py-4"
	>
		<Priority :isMobile="isMobile" :priorities="priorities" :item="item" />

		<Title
			:isMobile="isMobile"
			:priorities="priorities"
			:item="item"
			:editing="editing"
			@doneEdit="doneEdit"
		/>

		<Completed :item="item" :isMobile="isMobile" />

		<Deadline :isMobile="isMobile" :item="item" />

		<Action
			:item="item"
			:isMobile="isMobile"
			@edit="edit(item)"
			@Delete="Delete(item)"
		/>
	</tr>
</template>

<script>
import colors from "../../../Config/colors";
import Priority from "./Item/Priority.vue";
import Title from "./Item/Title.vue";
import Completed from "./Item/Completed.vue";
import Deadline from "./Item/Deadline.vue";
import Action from "./Item/Action.vue";

export default {
	components: { Priority, Title, Completed, Deadline, Action },
	props: {
		item: Object,
		priorities: Array,
		isMobile: Boolean,
	},
	data() {
		return {
			editing: this.$store.state.editing,
		};
	},

	methods: {
		Delete(item) {
			this.$store.dispatch("deleteToDo", item);
		},
		edit(item) {
			this.editing = item;
		},
		doneEdit() {
			this.editing = null;
		},
	},
};
</script>
<style>
.mobile-header {
	display: none;
}
.is-mobile {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: none !important;
	width: unset !important;
}
.priority {
	width: 15%;
}
</style>
