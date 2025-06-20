import { type RouteObject } from 'react-router';
import MainLayout from '../layout/main/main.layout';
import HooksDemo from '../pages/hooks/hooks.demo';

const hookRoutes: RouteObject = {
	path: 'hooks',
	element: <MainLayout />,
	children: [
		{
			index: true,
			Component: HooksDemo,
		},
	],
};

export default hookRoutes;
