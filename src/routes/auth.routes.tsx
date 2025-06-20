import { Outlet, type RouteObject } from 'react-router';
import LoginPage from '../pages/auth/login/page';
import LoginPageV2 from '../pages/auth/loginv2/page';

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
			path: 'login-v2',
			Component: LoginPageV2,
		},
		{
			path: 'register',
			element: <>Register</>,
		},
	],
};

export default authRoutes;
