import type { RouteObject } from 'react-router';
import MainLayout from '../layout/main/main.layout';
import UseMemoDemo from '../pages/memoisation/usememo.demo';

const memoRoutes: RouteObject = {
	path: 'memo',
	Component: MainLayout,
	children: [
		{
			path: 'useMemo',
			Component: UseMemoDemo,
		},
	],
};

export default memoRoutes;
