import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 px-6">
      <div className="text-center">
        <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-xl text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link to="/">
          <Button size="lg">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
