import { createBrowserRouter } from 'react-router';
import MainLayout from './layout/main.layout';
import Typography from '@mui/material/Typography';

// routing.config.file
const router = createBrowserRouter([
	{
		path: '',
		Component: MainLayout,
		children: [
			{
				index: true,
				element: (
					<>
						<Typography variant="h3">Home Page</Typography>
					</>
				),
			},
		],
	},
]);

export default router;
