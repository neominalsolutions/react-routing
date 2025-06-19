import Container from '@mui/material/Container';
import Navbar from './navbar';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router';

function MainLayout() {
	return (
		<Container
			maxWidth="xl"
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			{/* <Typography variant="h3">Main Layout</Typography> */}

			<Navbar />

			<Box sx={{ padding: 10 }}>
				{/* Layoutda Outlet ile işaretlediğimiz kısma dinamik olarak rotalanan sayfalar yüklenecek */}
				<Outlet />
			</Box>
		</Container>
	);
}

export default MainLayout;
