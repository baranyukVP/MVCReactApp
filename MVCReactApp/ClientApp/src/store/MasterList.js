const getMastersRequest = 'GET_MASTERS_REQUEST';
const getMastersReceive = 'GET_MASTERS_RECEIVE';
const initialState = { masters: [], isLoading: false };

export const actionCreators = {
    getMastersRequest: masterId => async (dispatch, getState) => {
        if (masterId === getState().masters.masterId) {
        // Don't issue a duplicate request (we already have or are loading the requested data)
        return;
    }

        dispatch({ type: getMastersRequest, masterId });

        const url = `api/Master/${masterId}`;
        const response = await fetch(url);
        const master = await response.json();
        dispatch({ type: getMastersReceive, masterId, master });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === getMastersRequest) {
        return {
            ...state,
            masterId: action.masterId,
            isLoading: true
    };
    }

    if (action.type === getMastersRequest) {
        return {
            ...state,
            masterId: action.masterId,
            masters: action.masters,
            isLoading: false
        };
    }

    return state;
};
