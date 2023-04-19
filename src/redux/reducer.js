import {ACTIONS_TYPES} from './actions.js';
const initialState = {
    isLoggedIn: Boolean(localStorage.getItem('isLoggedIn')),
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.LOGIN:
            return { ...state, isLoggedIn: true };
        case ACTIONS_TYPES.LOGOUT:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}
