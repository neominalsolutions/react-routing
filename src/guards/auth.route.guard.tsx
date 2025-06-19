/* eslint-disable @typescript-eslint/no-explicit-any */

import { Navigate, useLocation } from 'react-router';

function AuthRouteGuard({ children }: any) {
	const location = useLocation();
	console.log('location', location);

	const isAdminPage = location.pathname.startsWith('/admin');
	// ve aynı zamanda login oluşmuş ise yola devam ama biri eksik ise o zaman login ol.

	// cookie de token var mı localStorage token varmı?

	// <Navigate /> bir component yerine başka bir componente yönlendirilmemizi sağlayan bir component.

	if (isAdminPage) {
		return <Navigate to="/auth/login" />;
	} else {
		return <>{children}</>;
	}
}

export default AuthRouteGuard;
