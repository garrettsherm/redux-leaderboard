//Simple second action
export const secondAction = () => dispatch => {
	dispatch({
		type: 'SECOND_ACTION',
		testing: 'second test works'
	})
}