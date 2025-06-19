import Container from '@mui/material/Container';
import SideMenu from './side.menu';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router';
import Grid from '@mui/material/Grid';

function AdminLayout() {
	return (
		<>
			<Container maxWidth={'xl'}>
				<Grid container spacing={2}>
					<Grid size={2}>
						<SideMenu />
					</Grid>

					<Grid size={8}>
						<Box
							sx={{
								padding: 5,
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'left',
							}}
						>
							<Outlet />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default AdminLayout;
