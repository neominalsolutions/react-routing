import '@fontsource/roboto/400.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainLayout from './layout/main.layout.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MainLayout />
	</StrictMode>
);
