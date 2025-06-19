import type { RouteObject } from 'react-router';
import MainLayout from '../layout/main.layout';
import About from '../pages/about';
import Home from '../pages/home';

const mainRoutes: RouteObject = {
	path: '',
	Component: MainLayout,
	children: [
		{
			index: true, // ilk bu path gelince açılacak ana sayfa
			element: <Home />,
		},
		{
			path: 'about',
			Component: About,
		},
	],
};

export default mainRoutes;
