import { createBrowserRouter } from 'react-router';
import adminRoutes from './routes/admin.routes';
import mainRoutes from './routes/main.routes';
import authRoutes from './routes/auth.routes';
import NotFoundPage from './pages/errors/404';

// routing.config.file
const router = createBrowserRouter([
	mainRoutes,
	adminRoutes,
	authRoutes,
	{ path: '*', Component: NotFoundPage }, // Eğer uygulama içerisinde tanımlı routelar dışında bir path browserdan iletilirse o zaman en sonraki * route düşer -> 404 sayfamızı gösterir.
]);

export default router;
