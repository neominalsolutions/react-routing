/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { DataGrid, GridCloseIcon } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getPostsByUserId, getUsers } from '../../../api/users/user.api';

function UserPage() {
	const [userState, setUserState] = useState([]);
	const [selectedRow, setSelectedRow] = useState();
	const [userPostsState, setUserPostState] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// 1.yöntem
		// getUsers()
		// 	.then((data) => {
		// 		// set
		// 		setUserState(data);
		// 	})
		// 	.catch((err) => {
		// 		console.log('err', err);
		// 	});

		// async callback func 2.yöntem
		const loadData = async () => {
			setLoading(true);
			const data = await getUsers();
			setUserState(data);
			setLoading(false);
		};

		loadData();
	}, []);

	const columns = [
		{ field: 'id', headerName: 'ID', minWidth: 200 },
		{
			field: 'name',
			headerName: 'İsim',
			minWidth: 200,
			renderCell: (params: any) => (
				<Link to={`/admin/users/${params.row['id']}`}>
					{params.row['name']}
				</Link>
			),
		},
		{ field: 'email', headerName: 'E-Posta', minWidth: 400 },
		{
			field: 'actions',
			headerName: 'İşlemler',
			minWidth: 400,
			renderCell(params: any) {
				return (
					<Button color="primary" onClick={() => setSelectedRow(params.row)}>
						Kullanıcı Makaleleri
					</Button>
				);
			},
		},
	];

	// her bir user seçiminde selectedRow değişince burası tetiklenir.
	useEffect(() => {
		if (selectedRow) {
			// Git kullanıcı postlarını yükle

			getPostsByUserId(Number(selectedRow['id']))
				.then((data) => {
					setUserPostState(data);
				})
				.catch((err) => {
					console.log('user-post-err', err);
				});
		}
	}, [selectedRow]);

	return (
		<>
			{loading ? (
				<>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							minHeight: '100vh',
							alignItems: 'center',
						}}
					>
						<CircularProgress />
					</Box>
				</>
			) : (
				<>
					<Box
						sx={{
							width: '100vw',
						}}
					>
						<DataGrid rows={userState} columns={columns}></DataGrid>
					</Box>

					<Divider />
				</>
			)}

			<Box
				sx={{
					width: '100vw',
					height: '100vh',
				}}
			>
				<Dialog
					onClose={() => setSelectedRow(undefined)}
					open={selectedRow ? true : false}
				>
					<DialogTitle>
						<Grid container>
							<Grid size={11}>
								<Typography variant="h5"> Kullanıcı Postu</Typography>
							</Grid>
							<Grid size={1}>
								<Typography sx={{ cursor: 'pointer' }}>
									<GridCloseIcon onClick={() => setSelectedRow(undefined)} />
								</Typography>
							</Grid>
						</Grid>
					</DialogTitle>
					<DialogContent>
						<List
							sx={{
								padding: 1,
							}}
						>
							{userPostsState.map((item: any) => {
								return (
									<ListItem
										style={{
											margin: 2,
											border: '1px solid blue',
											backgroundColor: '#f5f5f5',
											borderRadius: 2,
										}}
										key={item.id}
									>
										<ListItemText>{item.body}</ListItemText>
									</ListItem>
								);
							})}
						</List>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setSelectedRow(undefined)} color="primary">
							Kapat
						</Button>
					</DialogActions>
				</Dialog>
			</Box>
		</>
	);
}

export default UserPage;
