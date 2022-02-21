import { useReducer } from "react";
import { alertContext, dispacthAlertContext } from "./context";
import initialContext from "./data";
import reducer from "./reducer";

function AlertProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialContext);

    return (
        <alertContext.Provider value={state}>
            <dispacthAlertContext.Provider value={dispatch}>
                {props.children}
            </dispacthAlertContext.Provider>
        </alertContext.Provider>
    );
};

export default AlertProvider;