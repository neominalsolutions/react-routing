import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import {
	CounterContext,
	type CounterContextType,
} from '../../context/counter.context';

// Component Memoisation 2 farklı durumda React tarafından otomatik bozulur, Memoize edilmiş component içinde, useState,useContext hook state değişimi veya component içerisine gönderilen propslardaki değişimler. Yani props'un parent component de bir state bağlanması durumu.

function CounterView() {
	const { state } = useContext(CounterContext) as CounterContextType;

	console.log('...rendering CounterView');
	return (
		<>
			<Typography variant="subtitle1">Sayaç: {state.count}</Typography>
		</>
	);
}

const CounterViewMemo = React.memo(CounterView); // Memoisation refransını aldık

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

type Props = {
	randomNumber?: number;
};

function NoContextView({ randomNumber }: Props) {
	console.log('...rendering NoContextView');

	return <>{randomNumber}</>;
}

const NoContextViewMemo = React.memo(NoContextView);

function ContextDemo() {
	console.log('...rendering ContextDemo');
	const [randomNumber, setRandomNumber] = useState<number>(0); // parent component üzerindeki bir state değişiminde parent component içindeki tüm componentler yeniden render olur. re-render.

	// Memoization -> Parent componenteki state değişikliğinin gereksiz render almasını engellemek için kullanılan bir optimizayon tekniği

	return (
		<>
			{/* form step tab için, grid modal gibi local kullanılar için ideal yöntem. */}

			<CounterViewMemo />
			<CounterActions />

			{/* state props'a bağlandı */}
			<NoContextViewMemo randomNumber={randomNumber} />

			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Typography variant="overline">Random Değer: {randomNumber}</Typography>

				<Button
					onClick={() => setRandomNumber(Math.round(Math.random() * 100))}
				>
					Generate Random Number
				</Button>
			</Box>
		</>
	);
}

export default ContextDemo;
