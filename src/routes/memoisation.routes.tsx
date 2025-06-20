import type { RouteObject } from 'react-router';
import MainLayout from '../layout/main/main.layout';
import UseMemoDemo from '../pages/memoisation/usememo.demo';
import UseCallbackDemo from '../pages/memoisation/usecallback.demo';

const memoRoutes: RouteObject = {
	path: 'memo',
	Component: MainLayout,
	children: [
		{
			path: 'useMemo',
			Component: UseMemoDemo,
		},
		{
			path:'useCallback',
			Component:UseCallbackDemo
		}
	],
};

export default memoRoutes;
