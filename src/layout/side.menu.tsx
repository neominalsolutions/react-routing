import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

function SideMenu() {
	return (
		<Drawer
			sx={{
				width: 240,
				flexShrink: 0,
				display: 'block',
				'& .MuiDrawer-paper': {
					width: 240,
					boxSizing: 'border-box',
				},
			}}
			variant="permanent"
			anchor="left"
		>
			<Toolbar>
				<Typography>Admin</Typography>
			</Toolbar>
			<Divider />
			<List>
				{[
					{ name: 'Users', path: '/admin/users' },
					{ name: 'Roles', path: '/admin/roles' },
				].map((item, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton>
							<ListItemText primary={<Link to={item.path}>{item.name}</Link>} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['Posts', 'Todos'].map((text, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}

export default SideMenu;
