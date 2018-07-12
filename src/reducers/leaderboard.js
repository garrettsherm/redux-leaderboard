// Simple first reducer which returns testing string
export function leaderboard (state = {}, action) {
	switch(action.type) {
		case 'ADD_PERSON':
			return [
				...state,
				{user: action.user, score: parseFloat(action.score, 10)}
			]
		case 'EDIT_SCORE':
			let editIndex = null;
			state.forEach((person, i) => {
				if(person.user === action.user){
					editIndex = i
				}
			});
			if(editIndex >= 0){
				let testNewScore = state[editIndex].score + parseFloat(action.changeScore, 10);
				if(!isNaN(testNewScore)){
					state[editIndex].score += parseFloat(action.changeScore, 10);
				}
			}
			return [
				...state
			]
		case 'REMOVE_PERSON':
			let removeIndex = null;
			state.forEach((person, i) => {
				if(person.user === action.user){
					removeIndex = i
				}
			});			
			return [
				...state.slice(0, removeIndex),
				...state.slice(removeIndex + 1)
			]
		default:
			return [...state]
	}
}

export default leaderboard;