// Simple first reducer which returns testing string
export function firstReducer (state = {}, action) {
	switch(action.type) {
		case 'FIRST_ACTION':
			return{
				testing: action.testing
			}
		case 'SECOND_ACTION':
			return{
				testing: action.testing
			}
		default:
			return state
	}
}

export default firstReducer;