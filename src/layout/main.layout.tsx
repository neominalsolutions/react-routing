import Container from '@mui/material/Container';
import Navbar from './navbar';

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
		</Container>
	);
}

export default MainLayout;
