import {
    SET_CLIENTS,
    SET_UPDATE_LOADING,
    SET_LOADING,
    SELECT_CLIENT,
    SET_UPDATE_STATUS,
    ERROR
  } from '../constants/Clients';

const initState = {
    clients: [],
    loading: false,
    selectClient: false,
    updateLoading: false,
    updateStatus: false,
    error: false
}

const clients = (state = initState, action) => {
	  switch (action.type) {
          case SET_CLIENTS: {
                  return {
                    ...state,
                    clients: [...action.payload],
                  };
                }
          case SET_LOADING: {
            return {
                ...state,
                loading: action.payload,
            }
          }
          case SELECT_CLIENT: {
            return {
              ...state,
              selectClient: state.clients.find(clients => clients.id === action.payload),
            }
          }
          case SET_UPDATE_LOADING: {
            return {
                ...state,
                updateLoading: action.payload,
            }
          }
          case SET_UPDATE_STATUS: {
            return {
                ...state,
                updateStatus: action.payload,
            }
          }
          case ERROR: {
            return {
                ...state,
                error: action.payload,
            }
          }
		default:
			return state;
	}
}

export default clients