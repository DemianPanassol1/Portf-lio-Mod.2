import { useReducer } from "react";
import { dispatchLanguageContext, languageContext } from "./context";
import initialContext from "./data";
import reducer from "./reducer";

function LanguageProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialContext);

    return (
        <languageContext.Provider value={state}>
            <dispatchLanguageContext.Provider value={dispatch}>
                {props.children}
            </dispatchLanguageContext.Provider>
        </languageContext.Provider>
    );
};

export default LanguageProvider;