import { type RouteObject } from 'react-router';
import AdminLayout from '../layout/admin/admin.layout';
import UserPage from '../pages/admin/users/page';
import UserDetail from '../pages/admin/users/id/page';
import UserPageV2 from '../pages/admin/users/pagev2';
import { getUsers } from '../api/users/user.api';
import AuthRouteGuard from '../guards/auth.route.guard';

// Not: AuthRouteGuard dan geçmeden AdminLayout component içerisinde protected routelara gidemezsin.

const adminRoutes: RouteObject = {
	path: 'admin',
	element: (
		<AuthRouteGuard>
			<AdminLayout />
		</AuthRouteGuard>
	),
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
			path: 'users-v2',
			loader: async () => {
				// return data from here
				return { data: await getUsers() }; // const { data } = useLoaderData(); değerler eşleşmelidir.
			}, // sayfa ilk açılışlarında tercih edilecek bir teknik
			Component: UserPageV2,
		},
		{
			path: 'users/:id', // dinamik parametre tanımlama /:name/:code
			Component: UserDetail,
		},
	],
};

export default adminRoutes;
