import { useEffect, useState } from 'react';
import { getUsers } from '../../api/users/user.api';

function UserPage() {
	const [userState, setUserState] = useState([]);

	useEffect(() => {
		getUsers()
			.then((data) => {
				// set
				setUserState(data);
			})
			.catch((err) => {
				console.log('err', err);
			});
	}, []);

	return <>Users: {userState.length}</>;
}

export default UserPage;
