import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function UseMemoDemo() {
	const [random, setRandom] = useState(0);

	// paranet componenteki state değişimi sonucu ekranda değeri değişmesi gerekenmeyen bir value değeri varsa bu değerin memoize edilmesi gerekir.
	const calculate = () => {
		console.log('...calculating');
		return 0;
	};

	const value = calculate();

	return (
		<>
			{value}

			<Typography>Random: {random}</Typography>
			<Button onClick={() => setRandom(Math.random())}>Random</Button>
		</>
	);
}

export default UseMemoDemo;
