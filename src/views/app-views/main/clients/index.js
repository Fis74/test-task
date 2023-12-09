import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ClientsGroups from './clients-groups';
import ClientsList from './clients-list';
import EditClient from './edit-client';
import { fetchClients } from 'redux/actions/Clients';
import { useDispatch, useSelector } from 'react-redux';

const Clients = ({ match }) => {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.clients.clients);
  const loading = useSelector(state => state.clients.loading);
  const error = useSelector(state => state.clients.error);
  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/clients-list`} />
      <Route
        path={`${match.url}/clients-list`}
        component={() => <ClientsList clients={clients} loading={loading} error={error} />}
      />
      <Route
        path={`${match.url}/edit-client/:id`}
        component={() => <EditClient />}
      />
      <Route
        path={`${match.url}/clients-groups`}
        component={() => <ClientsGroups />}
      />
    </Switch>
  )
};

export default Clients;