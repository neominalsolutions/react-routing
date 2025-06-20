import type { RouteObject } from 'react-router';
import MainLayout from '../layout/main/main.layout';
import Home from '../pages/site/home';
import About from '../pages/site/about';
import ContextDemo from '../pages/context-demo/page';

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
		{
			path: 'context-demo',
			Component: ContextDemo,
		},
	],
};

export default mainRoutes;
