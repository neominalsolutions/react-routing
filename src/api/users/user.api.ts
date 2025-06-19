import { jsonPlaceholderApiClient } from '../jsonplaceholder.api';

// API endpoint yazar gibi tanımalamalarımızı yapıyoruz

export const getUsers = async () => {
	const response = await jsonPlaceholderApiClient.get('/users', 8000);
	return response.data;
};

export const getPostsByUserId = async (id: number) => {
	const response = await jsonPlaceholderApiClient.get(
		`/posts?userId=${id}`,
		5000
	);
	return response.data;
};
