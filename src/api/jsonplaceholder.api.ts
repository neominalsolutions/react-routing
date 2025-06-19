/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
	AxiosHeaders,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from 'axios';

const jsonPlaceholderApi = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	timeout: 5000,
	timeoutErrorMessage: 'İstek zaman aşımına uğradı',
});

// her başarılı request loglamak için buraya gir
const onRequestSuccess = (config: InternalAxiosRequestConfig<any>) => {
	return config;
};

const onRequestError = (error: any) => {
	console.log('onRequestError', error);
};

// her başarılı response loglamak için buraya gir
const onReponseSuccess = (response: AxiosResponse) => {
	return response;
};

const onResponseError = (error: any) => {
	console.log('onResponseError', error);
};

// interceptors
jsonPlaceholderApi.interceptors.request.use(onRequestSuccess, onRequestError);
jsonPlaceholderApi.interceptors.response.use(onReponseSuccess, onResponseError);

// base get ve Post yapıları sağladık.
const get = (endpoint: string, headers?: AxiosHeaders, timeout?: number) => {
	return jsonPlaceholderApi.get(endpoint, {
		headers: headers,
		signal: AbortSignal.timeout(timeout || 5000),
	});
};

const post = (
	endpoint: string,
	data: any,
	headers?: AxiosHeaders,
	timeout?: number
) => {
	return jsonPlaceholderApi.post(endpoint, data, {
		headers: headers,
		signal: AbortSignal.timeout(timeout || 5000),
	});
};

export const jsonPlaceholderApiClient = {
	get,
	post,
};
