import Typography from '@mui/material/Typography';
import { useLocation, useMatch, useParams } from 'react-router';

function UserDetail() {
	const params = useParams(); // route üzerindeki dinamik değerleri yakalamamızı sağlar
	const location = useLocation(); // yönlendirme işlemlerinde tüm rouute patterni veren lokasyon bilgisi
	const match = useMatch('/admin/users/' + params.id); // yönlenen urlin match li olup olmadığını kontrol eden hook

	console.log('location', location);
	console.log('params', params);
	console.log('math', match);

	return (
		<>
			<Typography variant="h4">Kullanıcı ID: {params.id}</Typography>
		</>
	);
}

export default UserDetail;
