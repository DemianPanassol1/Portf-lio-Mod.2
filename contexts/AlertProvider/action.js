import axios from 'axios';

import { CLEAR_ALERT, IS_LOADING, SET_ALERT_ERROR, SET_ALERT_SUCCESS } from "./types";

const sendMessageToUser = async (dispatch, data) => {
    dispatch({ type: IS_LOADING });

    try {
        const res = await axios.post('/api/send-message', data, { headers: { 'Content-Type': 'application/json' } });
        setResponseMessage(dispatch, SET_ALERT_SUCCESS, await res.data.message);

        return true;
    } catch (error) {
        setResponseMessage(dispatch, SET_ALERT_ERROR, error.response.data.message)
        return false;
    };
};

const setResponseMessage = (dispatch, type, data, time = 6500) => {
    dispatch({ type, payload: data });

    setTimeout(() => {
        clearAlert(dispatch);
    }, time);
};

const clearAlert = (dispatch) => {
    dispatch({ type: CLEAR_ALERT });
};

export { sendMessageToUser, clearAlert };