// Simple first reducer which returns testing string
export function leaderboard (state = {}, action) {
	switch(action.type) {
		case 'ADD_PERSON':
			return [
				...state,
				{user: action.user, score: parseFloat(action.score, 10)}
			]
		case 'EDIT_SCORE':
			state[action.index].score = action.changeScore;
			return [
				...state
			]
		case 'REMOVE_PERSON':
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			]
		default:
			return [...state]
	}
}

export default leaderboard;