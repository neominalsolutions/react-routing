/* eslint-disable @typescript-eslint/no-explicit-any */
import CircularProgress from '@mui/material/CircularProgress';
import useFetcher from '../../hooks/fetcher.hook';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';
import Button from '@mui/material/Button';

function HooksDemo() {
	const [endpoint, setEndpoint] = useState('/users');

	// custom Hook çağırdık
	const { loading, error, data } = useFetcher<any[]>(endpoint);
	const postState = useFetcher<any[]>('/posts');

	const inputRef = useRef<HTMLInputElement>(null);

	console.log('data', data);
	console.log('postState', postState);

	console.log('...rendering');

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

				<input
					ref={inputRef}
					// onBlur={(e: any) => setEndpoint(e.target.value)}
				/>

				<Button
					onClick={() => {
						if (inputRef.current) {
							inputRef.current.value = '';
							inputRef.current.style.background = 'red';
							inputRef.current.style.color = 'white';
						}
					}}
				>
					Temizle
				</Button>
			</>
		);

	return <></>;
}

export default HooksDemo;
