/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import { jsonPlaceholderApiClient } from '../api/jsonplaceholder.api';

type FetcherState<T> = {
	loading: boolean;
	data: T | T[];
	error: any;
};

function useFetcher<T>(endpoint: string) {
	const [state, setState] = useState<FetcherState<T | any>>({
		loading: false,
		data: null,
		error: null,
	});

	useEffect(() => {
		setState({ ...state, loading: true, data: null, error: null });

		jsonPlaceholderApiClient
			.get(endpoint)
			.then((response) => {
				const data = response.data as T;
				setState({ ...state, loading: false, data: data, error: null });
			})
			.catch((err) => {
				setState({ ...state, loading: false, data: null, error: err });
			});
	}, [endpoint]); // endpoint değişersek birdaha get isteği at

	return state;
}

export default useFetcher;
