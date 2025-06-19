import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Outlet, type RouteObject } from 'react-router';

const adminRoutes: RouteObject = {
	path: 'admin',
	element: (
		<>
			<Container>
				<Typography>Admin Layout</Typography>
				<Outlet />
			</Container>
		</>
	),
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
