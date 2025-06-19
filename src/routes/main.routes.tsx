import type { RouteObject } from 'react-router';
import About from '../pages/about';
import Home from '../pages/home';
import MainLayout from '../layout/main/main.layout';

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
