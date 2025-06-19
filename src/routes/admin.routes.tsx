import { type RouteObject } from 'react-router';
import AdminLayout from '../layout/admin/admin.layout';
import UserPage from '../pages/admin/users/page';
import UserDetail from '../pages/admin/users/id/page';

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
			Component: UserPage,
		},
		{
			path: 'users/:id', // dinamik parametre tanımlama /:name/:code
			Component: UserDetail,
		},
	],
};

export default adminRoutes;
