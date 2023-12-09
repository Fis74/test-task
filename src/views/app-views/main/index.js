import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => (
	<Suspense fallback={<Loading cover='content' />}>
		<Switch>
			<Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
			<Route path={`${match.url}/editor`} component={lazy(() => import(`./editor`))} />
			<Redirect from={`${match.url}`} to={`${match.url}/clients`} />
		</Switch>
	</Suspense>
);

export default Main;