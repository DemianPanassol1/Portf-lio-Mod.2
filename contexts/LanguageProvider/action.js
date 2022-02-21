import { LANG_BRA, LANG_ENG } from "./types";

const switchLang = (dispatch, data) => {
    if (!data) {
        dispatch({ type: LANG_BRA });
    } else {
        dispatch({ type: LANG_ENG });
    };
};

export { switchLang };