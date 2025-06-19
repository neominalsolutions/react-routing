import { Outlet, type RouteObject } from 'react-router';
import LoginPage from '../pages/auth/login/page';

const authRoutes: RouteObject = {
	path: 'auth',
	element: (
		<>
			<Outlet />
		</>
	),
	children: [
		{
			index: true,
			Component: LoginPage,
		},
		{
			path: 'login',
			Component: LoginPage,
		},
		{
			path: 'register',
			element: <>Register</>,
		},
	],
};

export default authRoutes;
