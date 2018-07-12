//Simple first action
export const addUserToLeaderboard = (user, score) => (dispatch) => {
	dispatch({
		type: 'ADD_PERSON',
		user: user,
		score: score
	})
}

export const changeUserScore = (user, changeScore, index) => (dispatch) => {
	dispatch({
		type: 'EDIT_SCORE',
		user,
		changeScore,
		index
	})
}

export const removeUserFromLeaderboard = (user, index) => (dispatch) => {
	dispatch({
		type: 'REMOVE_PERSON',
		user,
		index
	})
}