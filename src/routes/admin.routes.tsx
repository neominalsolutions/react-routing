import { type RouteObject } from 'react-router';
import AdminLayout from '../layout/admin/admin.layout';

const adminRoutes: RouteObject = {
	path: 'admin',
	Component: AdminLayout,
	children: [
		{
			index: true, // ilk bu path gelince açılacak ana sayfa
			element: <>Dashboard Page</>,
		},
		{
			path: 'users',
			element: <>Users Page</>,
		},
	],
};

export default adminRoutes;
