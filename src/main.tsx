import '@fontsource/roboto/400.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './route.config';

// <RouterProvider router={router} /> uygulamadaki routeları yönetmemizi sağlar

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
