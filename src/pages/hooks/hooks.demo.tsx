/* eslint-disable @typescript-eslint/no-explicit-any */
import CircularProgress from '@mui/material/CircularProgress';
import useFetcher from '../../hooks/fetcher.hook';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function HooksDemo() {
	const [endpoint, setEndpoint] = useState('/users');

	// custom Hook çağırdık
	const { loading, error, data } = useFetcher<any[]>(endpoint);
	const postState = useFetcher<any[]>('/posts');

	console.log('data', data);
	console.log('postState', postState);

	// useEffect(()=> {
	//     const state2  = useFetcher<any[]>(endpoint);
	// })

	// const onInputChange = () => {
	//     const state2 = useFetcher<any[]>(endpoint);
	// }

	if (loading) return <CircularProgress />;

	if (error) return <>Hata</>;

	if (data)
		return (
			<>
				<Typography> {data.length} </Typography>
				<Typography>EndPoint: {endpoint}</Typography>
				<TextField onBlur={(e: any) => setEndpoint(e.target.value)} />
			</>
		);

	return <></>;
}

export default HooksDemo;
