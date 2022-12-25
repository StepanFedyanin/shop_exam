const defaultState = {
	themes: "light",
	language: 'ru'
}
const CHANGE_SETTING_THEMES = 'CHANGE_SETTING_THEMES'
export const GlobalThemas = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_SETTING_THEMES:
			return { ...state, themes: action.payload }
		default:
			return state
	}
}
export const changeGlobalThemas = (payload) => { return { type: CHANGE_SETTING_THEMES, payload } }




