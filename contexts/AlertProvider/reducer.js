import { CLEAR_ALERT, IS_LOADING, SET_ALERT_ERROR, SET_ALERT_SUCCESS } from "./types";

function reducer(state, action) {
    switch (action.type) {
        case SET_ALERT_SUCCESS:
            return {
                ...state,
                alertSuccess: { br: action.payload.br, eng: action.payload.eng },
                isLoading: false
            };

        case SET_ALERT_ERROR:
            return {
                ...state,
                alertError: { br: action.payload.br, eng: action.payload.eng },
                isLoading: false
            };

        case CLEAR_ALERT:
            return {
                ...state,
                alertSuccess: { br: null, eng: null },
                alertError: { br: null, eng: null },
                isLoading: false
            };

        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            };

        default:
            return state;
    };
};

export default reducer;