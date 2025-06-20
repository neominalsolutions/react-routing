import '@fontsource/roboto/400.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './route.config';
import CounterProvider from './context/counter.context';

// <RouterProvider router={router} /> uygulamadaki routeları yönetmemizi sağlar

// <CounterProvider> tüm uygulamayı kapsar useContext kullan yerler render olur.

// CounterProvider bu her renderda doam girince component memoize edilse dahi componentin render edilmesini zorluyor.

createRoot(document.getElementById('root')!).render(
	<CounterProvider>
		<RouterProvider router={router} />
	</CounterProvider>
);
