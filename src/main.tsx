import '@fontsource/roboto/400.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './route.config';
import CounterProvider from './context/counter.context';
import { Suspense } from 'react';

// <RouterProvider router={router} /> uygulamadaki routeları yönetmemizi sağlar

// <CounterProvider> tüm uygulamayı kapsar useContext kullan yerler render olur.

// CounterProvider bu her renderda doam girince component memoize edilse dahi componentin render edilmesini zorluyor.

// Suspense componenti ile lazy olarak tanımlanmış olan componentler kendi js chunk dosyaları olarak sadece ilgili linke istek atıldığında yüklenir.

createRoot(document.getElementById('root')!).render(
	<CounterProvider>
		<Suspense>
			<RouterProvider router={router} />
		</Suspense>
	</CounterProvider>
);
