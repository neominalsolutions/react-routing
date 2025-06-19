import { createBrowserRouter } from 'react-router';
import adminRoutes from './routes/admin.routes';
import mainRoutes from './routes/main.routes';

// routing.config.file
const router = createBrowserRouter([mainRoutes, adminRoutes]);

export default router;
