/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import { jsonPlaceholderApiClient } from '../api/jsonplaceholder.api';

type FetcherState<T> = {
	loading: boolean;
	data: T | T[];
	error: any;
};

// Hook function içinde hook kullanılabilir.

function useFetcher<T>(endpoint: string) {
	const [state, setState] = useState<FetcherState<T | any>>({
		loading: true,
		data: null,
		error: null,
	});

	useEffect(() => {
		setState({ ...state, loading: true, data: null, error: null });

		setTimeout(() => {
			jsonPlaceholderApiClient
				.get(endpoint)
				.then((response) => {
					const data = response.data as T;
					setState({ ...state, loading: false, data: data, error: null });
				})
				.catch((err) => {
					setState({ ...state, loading: false, data: null, error: err });
				});
		}, 5000);
	}, [endpoint]); // endpoint değişersek birdaha get isteği at

	return state;
}

export default useFetcher;
