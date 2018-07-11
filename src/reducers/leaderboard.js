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
			let testScore = parseFloat(action.score, 10);
			if(isNaN(testScore)){
				console.log('not a number!');
				return [
					...state
				]
			}
			return [
				...state,
				{user: action.user, score: parseFloat(action.score, 10)}
			]
		case 'EDIT_SCORE':
			let changeIndex = null;
			state.forEach((person, i) => {
				if(person.user === action.user){
					console.log('person exists');

					changeIndex = i
				}
			});
			if(changeIndex >= 0){
				console.log('changeIndex exists');
				let testNewScore = state[changeIndex].score + parseFloat(action.changeScore, 10);
				if(!isNaN(testNewScore)){
					state[changeIndex].score += parseFloat(action.changeScore, 10);
				}
			}
			return [
				...state
			]
		default:
			return [...state]
	}
}

export default leaderboard;