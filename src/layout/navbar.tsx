import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
	const handleDrawerToggle = () => {
		console.log('drawer');
	};

	const navItems = [
		{
			name: 'Home',
			path: '/',
		},
		{ name: 'About', path: '/about' },
	];

	return (
		<AppBar component="nav">
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					MUI
				</Typography>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					{navItems.map((item, index) => (
						<Button key={index} sx={{ color: '#fff' }}>
							{item.name}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
