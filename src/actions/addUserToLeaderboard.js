//Simple first action
export const addUserToLeaderboard = (user, score) => (dispatch) => {
	dispatch({
		type: 'ADD_PERSON',
		user: user,
		score: parseInt(score, 10)
	})
}

//export function addUserToLeaderboard