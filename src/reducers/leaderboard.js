// Simple first reducer which returns testing string
export function leaderboard (state = {}, action) {
	switch(action.type) {
		case 'FIRST_ACTION':
			console.log(state);
			return [
				...state,
				{user: action.user, score: action.score}
			]
		case 'SECOND_ACTION':
			return{
				testing: action.a
			}
		default:
			return state
	}
}

export default leaderboard;