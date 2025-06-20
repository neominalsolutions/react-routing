import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
	email: Yup.string().email().required('Required'),
	password: Yup.string()
		.min(8, 'Too Short!')
		.max(12, 'Too Long!')
		.lowercase()
		//.matches()
		.required('Required'),
});

function LoginPage() {
	const formik = useFormik({
		validationSchema: loginSchema,
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			console.log('form-submitt', values);
		},
	});

	console.log('formik', formik);

	return (
		<form onSubmit={formik.handleSubmit}>
			<FormGroup>
				<FormControl>
					<label htmlFor="firstName">Email</label>
					<TextField
						id="email"
						type="text"
						{...formik.getFieldProps('email')}
					/>
					{formik.touched.email && formik.errors.email && (
						<FormHelperText>{formik.errors.email}</FormHelperText>
					)}
				</FormControl>

				<FormControl>
					<label htmlFor="password">Password</label>
					<TextField
						id="password"
						type="password"
						{...formik.getFieldProps('password')}
						// value={formik.values.password} // Normal Input kullanımı için
					/>
					{formik.touched.password && formik.errors.password && (
						<FormHelperText>{formik.errors.password}</FormHelperText>
					)}
				</FormControl>
				<Button disabled={formik.isSubmitting} type="submit">
					Login
				</Button>
			</FormGroup>
		</form>
	);
}

export default LoginPage;
