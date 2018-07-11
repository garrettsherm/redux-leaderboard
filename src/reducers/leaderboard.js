// Simple first reducer which returns testing string
export function leaderboard (state = {}, action) {
	switch(action.type) {
		case 'ADD_PERSON':
			let personExists = false;

			state.forEach(person => {if(person.user === action.user){personExists = true}});
			if(personExists){
				return [
					...state
				]
			}
			return [
				...state,
				{user: action.user, score: action.score}
			]
		case 'SECOND_ACTION':
			return [
				...state
			]
		default:
			return [...state]
	}
}

export default leaderboard;