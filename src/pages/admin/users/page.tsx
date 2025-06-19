/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getPostsByUserId, getUsers } from '../../../api/users/user.api';
import { DataGrid, GridCloseIcon } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function UserPage() {
	const [userState, setUserState] = useState([]);
	const [selectedRow, setSelectedRow] = useState();
	const [userPostsState, setUserPostState] = useState([]);

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
			const data = await getUsers();
			setUserState(data);
		};

		loadData();
	}, []);

	const columns = [
		{ field: 'id', headerName: 'ID', minWidth: 200 },
		{ field: 'name', headerName: 'İsim', minWidth: 200 },
		{ field: 'email', headerName: 'E-Posta', minWidth: 400 },
		{
			field: 'actions',
			headerName: 'İşlemler',
			minWidth: 400,
			renderCell(params: any) {
				console.log('params', params.row);
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
			<Box
				sx={{
					width: '100vw',
				}}
			>
				<DataGrid rows={userState} columns={columns}></DataGrid>
			</Box>

			<Divider />

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
						<List>
							{userPostsState.map((item: any) => {
								return (
									<ListItem key={item.id}>
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
