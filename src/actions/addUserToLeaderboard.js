//Simple first action
export const addUserToLeaderboard = (user, score) => (dispatch) => {
	dispatch({
		type: 'FIRST_ACTION',
		user: user,
		score: score
	})
}

//export function addUserToLeaderboard