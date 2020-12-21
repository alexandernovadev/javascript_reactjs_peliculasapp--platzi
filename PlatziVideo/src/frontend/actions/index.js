// Agrega a la lista un item
export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
})

// Delete Item

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
})

export const loginRequest = (payload) => ({
	type: 'LOGIN_REQUEST',
	payload,
});

export const registerRequest = (payload) => ({
	type: 'REGISTER_REQUEST',
	payload,
});

export const logoutRequest = (payload) => ({
	type: 'LOGOUT_REQUEST',
	payload,
});

export const getVideoSource = (payload) => ({
	type: 'GET_VIDEO_SOURCE',
	payload,
});

export const searchVideo = (payload) => ({
	type: 'SEARCH_VIDEOS',
	payload,
});