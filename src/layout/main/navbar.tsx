import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './drawer';
import { useState } from 'react';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';

function NavBar() {
	// drawer göster gizle işlemi
	const [visible, setVisible] = useState(false);

	const navigate = useNavigate(); // uygulama içerisinde dinamik yönlememizi sağlayan hook.

	const handleDrawerToggle = () => {
		console.log('drawer');
		setVisible(!visible);
	};

	const navItems = [
		{
			name: 'Home',
			path: '/',
		},
		{ name: 'About', path: '/about' },
		{ name: 'Admin', path: '/admin' },
		{ name: 'Context Demo', path: '/context-demo' },
		{ name: 'Use Memo', path: '/memo/useMemo' },
	];

	return (
		<>
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
							<Button
								onClick={() => navigate(item.path)}
								key={index}
								sx={{ color: '#fff' }}
							>
								{item.name}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>

			{/* visible true ise domda göster değilse gösterme */}

			{visible && (
				<Container maxWidth="xl">
					<Drawer />
				</Container>
			)}
		</>
	);
}

export default NavBar;
