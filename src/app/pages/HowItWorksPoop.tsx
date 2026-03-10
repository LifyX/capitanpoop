import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import howToUseImage from '../../assets/44f05141ea69ba6f9646cb33b155026057b20ead.png';

export function HowItWorksPoop() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('howItWorks.poop.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('howItWorks.poop.desc')}
          </p>
        </div>

        {/* How it Works - Visual Guide */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {t('howToUse.title')}
            </h2>
            
            {/* Subtitle with emojis */}
            <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
              El uso de Capitan Poop en tres pasos, para decirle adiós al mal olor del number two.
            </p>
            
            {/* Three steps in a row */}
            <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
              <div className="text-center">
                <div className="text-4xl mb-2">🪄</div>
                <p className="font-semibold text-gray-800">Agita</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <div className="text-4xl mb-2">💦</div>
                <p className="font-semibold text-gray-800">Esparse</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚽</div>
                <p className="font-semibold text-gray-800">Siéntate</p>
              </div>
            </div>
            
            {/* Visual Instructions Image */}
            <div className="mb-8">
              <img 
                src={howToUseImage} 
                alt="Cómo usar Capitan Poop - Instrucciones paso a paso" 
                className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Text Instructions */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg">
                  🌀
                </div>
                <h3 className="text-xl font-bold mb-2">1. {t('howToUse.step1')}</h3>
                <p className="text-gray-700">{t('howToUse.step1Desc')}</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg">
                  💨
                </div>
                <h3 className="text-xl font-bold mb-2">2. {t('howToUse.step2')}</h3>
                <p className="text-gray-700">{t('howToUse.step2Desc')}</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg">
                  😊
                </div>
                <h3 className="text-xl font-bold mb-2">3. {t('howToUse.step3')}</h3>
                <p className="text-gray-700">{t('howToUse.step3Desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Science Behind */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">La Ciencia Detrás del Producto</h2>
          
          {/* Visual Section with Image */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1764694187667-f28a05a52c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3NlbnRpYWwlMjBvaWwlMjBzcHJheSUyMGJvdHRsZXxlbnwxfHx8fDE3NzEyMDkxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Natural essential oil spray"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Capitan Poop utiliza una fórmula innovadora basada en aceites esenciales naturales que crean una barrera sobre la superficie del agua. Esta barrera atrapa los olores antes de que se liberen al aire, bloqueándolos de manera efectiva.
              </p>
              <p className="text-gray-700 mb-4">
                A diferencia de los ambientadores tradicionales que solo enmascaran los malos olores con fragancias fuertes, Capitan Poop neutraliza los olores en su origen, proporcionando una solución natural y efectiva.
              </p>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">{t('detail.ingredients')}</h2>
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌿</span>
                  Aceites Esenciales Naturales
                </h3>
                <p className="text-gray-700">
                  Extraídos de plantas de alta calidad para máxima efectividad.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Sin Químicos Agresivos
                </h3>
                <p className="text-gray-700">
                  {t('howItWorks.safety')}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌱</span>
                  Biodegradable
                </h3>
                <p className="text-gray-700">
                  Fórmula amigable con el medio ambiente.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  Seguro para Toda la Familia
                </h3>
                <p className="text-gray-700">
                  Probado dermatológicamente y seguro para uso diario.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Beneficios</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-gray-700">Bloquea olores al instante, no los enmascara</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-gray-700">Fórmula 100% natural con aceites esenciales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-gray-700">Fácil de usar - solo 2-3 pulverizaciones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-gray-700">Portátil y discreto - llévalo a donde quieras</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-gray-700">Larga duración - hasta 300 usos por botella</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Probarlo?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Únete a miles de clientes satisfechos que ya disfrutan de un baño sin malos olores.
          </p>
          <Link to="/products?category=bathroom">
            <Button size="lg" className="text-lg px-8">
              Ver Productos Capitan Poop
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}