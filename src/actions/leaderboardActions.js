//Simple first action
export const addUserToLeaderboard = (user, score) => (dispatch) => {
	dispatch({
		type: 'ADD_PERSON',
		user: user,
		score: parseInt(score, 10)
	})
}

export const changeUserScore = (user, changeScore) => (dispatch) => {
	dispatch({
		type: 'EDIT_SCORE',
		user,
		changeScore
	})
}

export const removeUserFromLeaderboard = (user) => (dispatch) => {
	dispatch({
		type: 'REMOVE_PERSON',
		user
	})
}