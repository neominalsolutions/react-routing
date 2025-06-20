import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMemo, useState } from 'react';

// serverside componentlerle çalışırken useMemo kullanılabilir. Sunucu tabanlı asenkron işlemlerde. Bunun dışında ama client tabanlı state bilgilerini memoize etmektir.

function UseMemoDemo() {
	const [random, setRandom] = useState(0);

	// paranet componenteki state değişimi sonucu ekranda değeri değişmesi gerekenmeyen bir value değeri varsa bu değerin memoize edilmesi gerekir.
	const calculate = useMemo(() => {
		console.log('...calculating');
		return 1000;
	}, []); // no dependency

	return (
		<>
			<Typography>Calculated Value: {calculate}</Typography>
			<Typography>Random: {random}</Typography>
			<Button onClick={() => setRandom(Math.random())}>Random</Button>
		</>
	);
}

export default UseMemoDemo;
