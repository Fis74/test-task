import ApiService from 'services/ApiService';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { setClients, setUpdateLoading, setLoading, setUpdateStatus, setError } from '../actions/Clients';
import { CLIENTS_FETCHING, CHANGE_CLIENT } from '../constants/Clients';

export function* getClients() {
  yield takeEvery(CLIENTS_FETCHING, function* () {
      try {
          yield put(setLoading(true));

          const clients = yield call(ApiService.getClients);
          
          if (clients.length) {
            yield put(setClients(clients));
          }
      } catch (err) {
          yield put(setError(err.message));
      } finally {
          yield put(setLoading(false));
      }
  });
}

export function* updateClient() {
  yield takeEvery(CHANGE_CLIENT, function* (values) {
      try {
          yield put(setUpdateLoading(true));  

          const status = yield call(ApiService.updateClient, values.payload); 

          yield put(setUpdateStatus(status));
      } catch (err) {
          yield put(setUpdateStatus(err.message));
      } finally {
          yield put(setUpdateStatus(false));
          
          yield put(setUpdateLoading(false));
      }
  });
}


export default function* rootSaga() {
  yield all([
    fork(getClients),
    fork(updateClient)
  ]);
}