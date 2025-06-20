import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import {
	CounterContext,
	type CounterContextType,
} from '../../context/counter.context';

function Home() {
	const { state } = useContext(CounterContext) as CounterContextType;

	console.log('...rendering');

	return (
		<>
			<Typography variant="h3">Home Page</Typography>
			<Typography variant="subtitle1">Sayac: {state.count}</Typography>

			<Typography>Application Mode: {import.meta.env.VITE_ENV_MODE}</Typography>
		</>
	);
}

export default Home;
