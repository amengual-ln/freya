import { db } from '../../firebase-config'

export default function state(state = [], action) {
	if (action.type === '@links/SET_LINKS') {
		action.payload.forEach((link) => {
			if (!state.find((previousLink) => previousLink.id === link.id)) {
				state.push({
					id: link.id,
					...link.data(),
				})
			}
		})
	}
	if (action.type === '@links/CREATE_LINK') {
		state = state.concat(action.payload)
	}
	if (action.type === '@links/SAVE_CHANGES') {
		const now = new Date()
		const values = { ...action.payload, updatedAt: now }
		db.collection('links').doc(values.id).update(values)
		state = state.map((link) => {
			if (link.id === values.id) {
				return {
					id: values.id ? values.id : link.id,
					title: values.title ? values.title : link.title,
					content: values.content ? values.content : link.content,
					updatedAt: now,
				}
			}
			return link
		})
	}
	if (action.type === '@links/REMOVE_LINK') {
		state = state.filter((link) => link.id !== action.payload)
	}
	return state
}

// // // // // // // // // // // // // // // // // //

export const createLink = (link) => async (dispatch, getState) => {
	dispatch({
		type: '@links/CREATE_LINK',
		payload: link,
	})
}

export const setLinks = (links) => async (dispatch, getState) => {
	dispatch({
		type: '@links/SET_LINKS',
		payload: links,
	})
}

export const modifyLink = (link) => async (dispatch, getState) => {}

export const deleteLink = (id) => async (dispatch, getState) => {
	dispatch({
		type: '@links/REMOVE_LINK',
		payload: id,
	})
}
