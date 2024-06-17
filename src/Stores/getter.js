export default {
	newTodo: (state) => {
		return state.toDos.filter((m) => m.completed == 0).length;
	},
	done: (state) => {
		return state.toDos.filter((m) => m.completed == 1).length;
	},
	cancel: (state) => {
		return state.toDos.filter((m) => m.completed == 2).length;
	},
	allTasks: (state) => {
		return state.toDos.length;
	},
	count: (state) => {
		return state.count;
	},
};
