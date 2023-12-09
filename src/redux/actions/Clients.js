import {
  SET_CLIENTS,
  CLIENTS_FETCHING,
  CHANGE_CLIENT,
  SET_LOADING,
  SELECT_CLIENT,
  SET_UPDATE_LOADING,
  SET_UPDATE_STATUS,
  ERROR
} from '../constants/Clients';


export const setClients = (id) => {
    return {
      type: SET_CLIENTS,
      payload: id,
    };
};

export const changeClient = (id) => {
    return {
      type: CHANGE_CLIENT,
      payload: id
    };
};

export const selectClient = (client) => {
  return {
    type: SELECT_CLIENT,
    payload: client,
  };
};

export const fetchClients = () => {
    return {
      type: CLIENTS_FETCHING,
    };
};

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    payload: loading
  };
};

export const setUpdateLoading = (updateLoading) => {
  return {
    type: SET_UPDATE_LOADING,
    payload: updateLoading
  };
};

export const setUpdateStatus = (status) => {
  return {
    type: SET_UPDATE_STATUS,
    payload: status
  };
};

export const setError = (error) => {
  return {
    type: ERROR,
    payload: error
  };
};