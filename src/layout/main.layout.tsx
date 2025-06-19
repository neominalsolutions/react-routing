import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function MainLayout() {
	return (
		<Container
			maxWidth="xl"
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Typography variant="h3">Main Layout</Typography>
		</Container>
	);
}

export default MainLayout;
