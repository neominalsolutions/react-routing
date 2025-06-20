import type { RouteObject } from 'react-router';
import ContextDemo from '../pages/context-demo/page';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/site/home'));
const About = lazy(() => import('../pages/site/about'));
const MainLayout = lazy(() => import('../layout/main/main.layout'));

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
