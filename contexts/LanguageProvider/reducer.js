import { LANG_BRA, LANG_ENG } from "./types";

function reducer(state, action) {
    switch (action.type) {
        case LANG_BRA:
            return {
                eng: false
            };

        case LANG_ENG:
            return {
                eng: true
            };

        default:
            return state;
    };
};

export default reducer;