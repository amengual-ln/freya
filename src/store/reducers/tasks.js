export default function state(state = [], action) {
	if (action.type === '@tasks/SET_TASKS') {
		action.payload.forEach((task) => {
			if (!state.find((previousTask) => previousTask.id === task.id)) {
				state.push({
					id: task.id,
					...task.data(),
				})
			}
		})
	}
	if (action.type === '@tasks/CREATE_TASK') {
		state = state.concat(action.payload)
	}
	if (action.type === '@tasks/MODIFY_TASK') {
		state = state.map((task) => {
			if (task.id === action.payload.id) {
				return {
					...task,
					...action.payload.data,
				}
			}
			return task
		})
	}
	if (action.type === '@tasks/DELETE_TASK') {
		state = state.filter((task) => task.id !== action.payload)
	}
	return state
}

// // // // // // // // // // // // // // // // // //

export const setTasks = (tasks) => async (dispatch, getState) => {
	dispatch({
		type: '@tasks/SET_TASKS',
		payload: tasks,
	})
}

export const deleteTask = (id) => async (dispatch, getState) => {
	dispatch({
		type: '@tasks/DELETE_TASK',
		payload: id,
	})
}

export const modifyTask = (id, data) => async (dispatch, getState) => {
	dispatch({
		type: '@tasks/MODIFY_TASK',
		payload: {
			id,
			data,
		},
	})
}

export const createTask = (task) => async (dispatch, getState) => {
	dispatch({
		type: '@tasks/CREATE_TASK',
		payload: task,
	})
}
