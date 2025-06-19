import { useEffect, useState } from 'react';
import { getUsers } from '../../api/users/user.api';

function UserPage() {
	const [userState, setUserState] = useState([]);

	useEffect(() => {
		// axios
		// 	.get('https://jsonplaceholder.typicode.com/users')
		// 	.then((response) => {
		// 		setUserState(response.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log('err', err);
		// 	});

		// 1.yöntem
		getUsers()
			.then((data) => {
				// set
				setUserState(data);
			})
			.catch((err) => {
				console.log('err', err);
			});

		// async callback func 2.yöntem
		// const loadData = async () => {
		// 	const data = await getUsers();
		// 	setUserState(data);
		// };

		// loadData();
	}, []);

	return <>Users: {userState.length}</>;
}

export default UserPage;
