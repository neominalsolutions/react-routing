import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

const Drawer = () => {
	const navItems = [
		{
			name: 'Home',
			path: '/',
		},
		{ name: 'About', path: '/about' },
	];

	return (
		<Box
			width={'100%'}
			sx={{
				textAlign: 'center',
				display: { lg: 'none', md: 'none', xl: 'none', sm: 'none' },
			}}
		>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map((item, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={<Link to={item.path}>{item.name}</Link>} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default Drawer;
