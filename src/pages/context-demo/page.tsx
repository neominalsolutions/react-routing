import type React from 'react';
import CounterProvider, {
	CounterContext,
	type CounterContextType,
} from '../../context/counter.context';
import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function CounterView() {
	const { state } = useContext(CounterContext) as CounterContextType;

	console.log('...rendering CounterView');
	return (
		<>
			<Typography variant="subtitle1">Sayaç: {state.count}</Typography>
		</>
	);
}
function CounterActions() {
	const { reset, increase, decrease } = useContext(
		CounterContext
	) as CounterContextType;
	console.log('...rendering CounterActions');
	return (
		<>
			<ButtonGroup>
				<Button onClick={reset} variant="contained">
					(0)
				</Button>
				<Button onClick={increase} variant="contained">
					(+)
				</Button>
				<Button onClick={decrease} variant="contained">
					(-)
				</Button>
			</ButtonGroup>
		</>
	);
}

const NoContextView: React.FC = () => {
	console.log('...rendering NoContextView');

	return <></>;
};

function ContextDemo() {
	console.log('...rendering ContextDemo');

	return (
		<>
			<CounterProvider>
				<CounterView />
				<CounterActions />
			</CounterProvider>

			<NoContextView />
		</>
	);
}

export default ContextDemo;
