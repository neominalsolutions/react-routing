import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { memo, useCallback, useState } from 'react';

type Props = {
	onItemSelect(value: string): void;
};
function UseCallbackChild({ onItemSelect }: Props) {
	console.log('...child rendering');
	return (
		<>
			<Button
				variant="text"
				onClick={() => onItemSelect(Math.random().toString())}
			>
				Tıkla
			</Button>
		</>
	);
}
const UseCallbackChildMemo = memo(UseCallbackChild);
function UseCallbackDemo() {
	console.log('...parent rendering');
	const [random, setRandom] = useState(0); // parent componente ait bir state.

	// Sorun: Component random state değişince yeniden render aldığından dolayı ve onSelect functionlar js de referans değer olarak tanımlandığından dolayı. yeni renderda onSelect yeniden referansı oluşur. Buda Props olarak UseCallbackChildMemo props değişikliği olduğunu söyler.
	// Propslar değişirse child component render alırdı.
	// Çözüm yöntemi function propsların referansın memoize etmek.
	const onSelect = useCallback((value: string) => {
		console.log('value', value);
	}, []); // [] state değişikliğine bağlı olana kadar referansını koru.  function memoisation

	// Not. Eğer bir componentin içinde bir function props tanımı varsa parent component içerisinde useCallback function ile çağırılmalıdır. Alışkanlık haline getirelim.
	// UseCallback kullancağımız componentlerin memoize edilmiş olması gerekir. aksi takdirde useCallback bir işe yaramaz.
	return (
		<>
			<Divider />
			<Typography>Child</Typography>
			<UseCallbackChildMemo onItemSelect={onSelect} />
			<Divider />

			<Typography>Parent</Typography>
			<Typography>Random: {random}</Typography>
			<Button onClick={() => setRandom(Math.random() * 100)}>Random</Button>
		</>
	);
}

export default UseCallbackDemo;
