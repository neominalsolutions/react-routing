/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
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

function LoginPageV2() {
	const reactFormsHook = useForm({
		values: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	const onFormSubmit = (values: any) => {
		console.log('values', values);
		reactFormsHook.reset(); // formu temizle
	};

	console.log('watch', reactFormsHook.watch('email')); // useEffect gibi field değişiminde çalışır

	return (
		<form onSubmit={reactFormsHook.handleSubmit(onFormSubmit)}>
			<FormGroup>
				<FormControl>
					<label htmlFor="firstName">Email</label>
					<TextField
						id="email"
						type="text"
						{...reactFormsHook.register('email')}
					/>
					{reactFormsHook.formState.errors.email && (
						<FormHelperText>
							{reactFormsHook.formState.errors.email?.message}
						</FormHelperText>
					)}
				</FormControl>

				<FormControl>
					<label htmlFor="password">Password</label>
					<TextField
						id="password"
						type="password"
						{...reactFormsHook.register('password')}
						// value={formik.values.password} // Normal Input kullanımı için
					/>
					{reactFormsHook.formState.errors.password && (
						<FormHelperText>
							{reactFormsHook.formState.errors.password?.message}
						</FormHelperText>
					)}
				</FormControl>
				<Button disabled={reactFormsHook.formState.isSubmitting} type="submit">
					Login
				</Button>
			</FormGroup>
		</form>
	);
}

export default LoginPageV2;
