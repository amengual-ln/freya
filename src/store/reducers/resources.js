import { db } from '../../firebase-config'

import { setTasks, deleteTask, createTask, modifyTask } from './tasks'
import { setDocs, deleteDoc, createDoc, modifyDoc } from './docs'
import { setLinks, deleteLink, createLink, modifyLink } from './links'
import { setProjects, deleteProject, createProject, modifyProject } from './projects'
import { setBriefcases, deleteBriefcase, createBriefcase, modifyBriefcase } from './briefcases'

const initialState = {
	loading: 0,
}

export default function state(state = initialState, action) {
	if (action.type === '@resources/SET_LOADING') {
		state.loading = action.payload ? state.loading + 1 : state.loading - 1
	}
	return { ...state }
}

const setLoading = (isLoading) => (dispatch) => {
	dispatch({ type: '@resources/SET_LOADING', payload: isLoading })
}

export const fetchResource = (collection) => async (dispatch, getState) => {
	dispatch(setLoading(true))
	const snapshot = await db.collection(collection).get()
	const action = getAction('set', collection)
	dispatch(action(snapshot.docs))
	dispatch(setLoading(false))
}

export const createResource =
	(collection, payload = null) =>
		async (dispatch, getState) => {
			const action = getAction('save', collection)
			if (payload) {
				payload = {
					...payload,
					createdAt: new Date(),
					updatedAt: new Date()
				}
				const res = await db.collection(collection).add(payload)
				await db.collection(collection).doc(res.id).update({ id: res.id })
				dispatch(action({ id: res.id, ...payload }))
			} else {
				dispatch(action())
			}
		}

export const modifyResource =
	(collection, id, payload) => async (dispatch, getState) => {
		if (collection === 'docs') {
			payload = {
				...payload,
				updatedAt: new Date()
			}
		}
		db.collection(collection).doc(id).update(payload)
		const action = getAction('modify', collection)
		dispatch(action(id, payload))
	}


export const deleteResource =
	(collection, id) => async (dispatch, getState) => {
		db.collection(collection).doc(id).delete()
		const action = getAction('delete', collection)
		dispatch(action(id))
	}

const getAction = (type, collection) => {
	const deleteActions = {
		tasks: deleteTask,
		docs: deleteDoc,
		links: deleteLink,
		projects: deleteProject,
		briefcases: deleteBriefcase,
	}
	const createActions = {
		// should be create
		tasks: createTask,
		docs: createDoc,
		links: createLink,
		projects: createProject,
		briefcases: createBriefcase,
	}
	const setActions = {
		tasks: setTasks,
		docs: setDocs,
		links: setLinks,
		projects: setProjects,
		briefcases: setBriefcases
	}
	const modifyActions = {
		tasks: modifyTask,
		docs: modifyDoc,
		links: modifyLink,
		projects: modifyProject,
		briefcases: modifyBriefcase
	}
	const types = {
		set: setActions,
		delete: deleteActions,
		modify: modifyActions,
		save: createActions, // should be create
	}
	return types[type][collection]
}
