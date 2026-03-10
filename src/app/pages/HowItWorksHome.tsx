import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

export function HowItWorksHome() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('howItWorks.home.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('howItWorks.home.desc')}
          </p>
        </div>

        {/* How to Use */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Modo de Uso
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg">
                  🌀
                </div>
                <h3 className="text-xl font-bold mb-2">1. {t('howToUse.step1')}</h3>
                <p className="text-gray-700">Agita bien el producto antes de cada uso.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg">
                  🎯
                </div>
                <h3 className="text-xl font-bold mb-2">2. Rocía</h3>
                <p className="text-gray-700">Aplica 3-4 pulverizaciones en el área afectada.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg">
                  ✨
                </div>
                <h3 className="text-xl font-bold mb-2">3. Disfruta</h3>
                <p className="text-gray-700">Los olores desaparecen en segundos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">¿Dónde Usar Capitan Home?</h2>
          
          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1724344541945-267ba492ee38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYWlyJTIwZnJlc2hlbmVyJTIwcGxhbnRzfGVufDF8fHx8MTc3MTIwOTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Natural air freshener with plants"
              className="w-full rounded-2xl shadow-lg max-w-2xl mx-auto"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-3">👟</div>
              <h3 className="text-xl font-semibold mb-2">Zapatos</h3>
              <p className="text-gray-700">
                Elimina olores de zapatos deportivos, botas y calzado en general.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-3">🚪</div>
              <h3 className="text-xl font-semibold mb-2">Closets</h3>
              <p className="text-gray-700">
                Mantén tu armario fresco y libre de olores a humedad.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-3">🛋️</div>
              <h3 className="text-xl font-semibold mb-2">Sofás y Muebles</h3>
              <p className="text-gray-700">
                Neutraliza olores de mascotas, humo y otros olores persistentes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-3">🧺</div>
              <h3 className="text-xl font-semibold mb-2">Ropa y Textiles</h3>
              <p className="text-gray-700">
                Refresca cortinas, alfombras y prendas sin necesidad de lavar.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-3">🗑️</div>
              <h3 className="text-xl font-semibold mb-2">Basura</h3>
              <p className="text-gray-700">
                Controla olores en cubos de basura y áreas de reciclaje.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="text-xl font-semibold mb-2">Automóvil</h3>
              <p className="text-gray-700">
                Mantén tu vehículo fresco sin perfumes artificiales.
              </p>
            </div>
          </div>
        </div>

        {/* Formula */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Fórmula Avanzada</h2>
          <div className="bg-green-50 rounded-2xl p-8">
            <p className="text-gray-700 mb-6">
              Capitan Home utiliza tecnología de neutralización de olores con enzimas naturales y aceites esenciales que:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">●</span>
                <span className="text-gray-700">
                  <strong>Descomponen las moléculas de olor</strong> en lugar de solo cubrirlas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">●</span>
                <span className="text-gray-700">
                  <strong>Actúan rápidamente</strong> - resultados visibles en segundos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">●</span>
                <span className="text-gray-700">
                  <strong>Son seguros</strong> - sin químicos tóxicos ni fragancias artificiales
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">●</span>
                <span className="text-gray-700">
                  <strong>No dejan residuos</strong> - se secan rápidamente sin manchar
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{t('detail.ingredients')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                100% Natural
              </h3>
              <p className="text-gray-700">
                {t('howItWorks.ingredients')}
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">🧪</span>
                Probado y Certificado
              </h3>
              <p className="text-gray-700">
                Fórmula probada dermatológicamente y certificada como segura.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Beneficios de Capitan Home</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <span className="text-blue-600 text-2xl">✓</span>
              <span className="text-gray-700">
                <strong>Versátil:</strong> Úsalo en múltiples superficies y espacios del hogar
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <span className="text-blue-600 text-2xl">✓</span>
              <span className="text-gray-700">
                <strong>Seguro:</strong> No tóxico, sin alcohol, sin parabenos
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <span className="text-blue-600 text-2xl">✓</span>
              <span className="text-gray-700">
                <strong>Efectivo:</strong> Neutraliza olores, no los enmascara
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <span className="text-blue-600 text-2xl">✓</span>
              <span className="text-gray-700">
                <strong>Económico:</strong> Alta concentración - poco producto, grandes resultados
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Transforma tu Hogar Hoy</h2>
          <p className="text-xl text-gray-600 mb-6">
            Descubre el poder de la neutralización natural de olores con Capitan Home.
          </p>
          <Link to="/products?category=home">
            <Button size="lg" className="text-lg px-8">
              Ver Productos Capitan Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}