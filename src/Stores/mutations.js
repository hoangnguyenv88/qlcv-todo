import { account } from "./account.module";

export default {
	addTask(state, payload) {
		if (payload.newToDo.length) {
			state.toDos.push({
				local_storage_key: account.state.user.localStorageKey,
				todo_id: Math.floor(Math.random() * 999),
				name: payload.newToDo,
				completed: 0,
				user_id: account.state.user.id,
				create_at: Date().toString(),
				priority_id: payload.priorityId,
				deadline: payload.deadlines,
			});
		}
		state.newTodo = null;
	},
	deleteToDo(state, item) {
		const index = state.toDos.indexOf(item);
		state.toDos.splice(index, 1);
	},
	doneEdit(state) {
		state.editing = null;
	},
};
