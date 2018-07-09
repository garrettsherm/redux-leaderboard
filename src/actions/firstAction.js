//Simple first action
export const firstAction = () => dispatch => {
	dispatch({
		type: 'FIRST_ACTION',
		testing: 'first test works'
	})
}