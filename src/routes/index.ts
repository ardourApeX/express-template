import healthCheckRouter from './healthCheck';

const routes = [
	{
		route: '/health-check',
		routeHandler: healthCheckRouter,
	},
];

export default routes;
