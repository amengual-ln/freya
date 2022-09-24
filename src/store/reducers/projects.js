
export default function state(state = [], action) {
	if (action.type === '@projects/SET_PROJECTS') {
		action.payload.forEach((project) => {
			if (!state.find((previousProject) => previousProject.id === project.id)) {
				state.push({
					id: project.id,
					...project.data(),
				})
			}
		})
	}
	if (action.type === '@projects/CREATE_PROJECT') {
		state = state.concat(action.payload)
	}
	if (action.type === '@projects/MODIFY_PROJECT') {
		state = state.map((project) => {
			if (project.id === action.payload.id) {
				project = {
					...action.payload.project
				}
			}
			return project
		})
	}
	return state
}

export const createProject = (project) => async (dispatch, getState) => {
	dispatch({
		type: '@projects/CREATE_PROJECT',
		payload: project,
	})
}

export const setProjects = (projects) => async (dispatch, getState) => {
	dispatch({
		type: '@projects/SET_PROJECTS',
		payload: projects,
	})
}

export const modifyProject = (id, project) => async (dispatch, getState) => {
	dispatch({
		type: '@projects/MODIFY_PROJECT',
		payload: {
			id,
			project
		}
	})
}

export const deleteProject = (id) => async (dispatch, getState) => {
	dispatch({
		type: '@projects/REMOVE_PROJECT',
		payload: id,
	})
}