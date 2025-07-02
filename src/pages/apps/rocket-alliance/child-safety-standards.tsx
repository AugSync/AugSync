import React from 'react';
import Head from 'next/head';

const RocketAllianceChildSafetyStandards: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rocket Alliance - Estándares de Seguridad Infantil</title>
        <meta
          name="description"
          content="Información sobre los estándares de seguridad infantil y políticas de protección para Rocket Alliance."
        />
        <meta
          property="og:title"
          content="Rocket Alliance - Estándares de Seguridad Infantil"
        />
        <meta
          property="og:description"
          content="Información sobre los estándares de seguridad infantil y políticas de protección para Rocket Alliance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/rocket-alliance.png" />
        <meta
          property="og:url"
          content="https://augsync.com/apps/rocket-alliance/child-safety-standards"
        />
        <link rel="icon" href="/rocket-alliance-favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
        <section className="max-w-4xl p-8 mx-4 bg-white rounded-lg shadow-lg">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
              Estándares de Seguridad Infantil
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              Rocket Alliance
            </h2>
          </div>

          <div className="space-y-8">
            {/* Compromiso con la seguridad */}
            <section>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Nuestro Compromiso con la Seguridad Infantil
              </h3>
              <p className="leading-relaxed text-gray-600">
                En Rocket Alliance, la seguridad y protección de los menores es
                nuestra máxima prioridad. Estamos comprometidos a proporcionar
                un entorno digital seguro, educativo y apropiado para usuarios
                de todas las edades, cumpliendo con los más altos estándares de
                seguridad infantil.
              </p>
            </section>

            {/* Políticas implementadas */}
            <section>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Políticas de Protección Implementadas
              </h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>
                    Contenido educativo y apropiado para todas las edades
                    relacionado con Rocket League
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>
                    Sin funciones de chat o comunicación directa entre usuarios
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Sin recopilación de datos personales de menores</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Contenido revisado y moderado por nuestro equipo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Sin publicidad dirigida a menores</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>
                    Cumplimiento con COPPA (Children&apos;s Online Privacy
                    Protection Act)
                  </span>
                </li>
              </ul>
            </section>

            {/* Medidas de seguridad técnicas */}
            <section>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Medidas de Seguridad Técnicas
              </h3>
              <div className="p-6 rounded-lg bg-gray-50">
                <ul className="text-gray-600 space-y-2">
                  <li>• Encriptación de datos en tránsito y en reposo</li>
                  <li>• Controles de acceso estrictos a la información</li>
                  <li>• Monitoreo continuo de seguridad</li>
                  <li>• Actualizaciones regulares de seguridad</li>
                  <li>• Revisión periódica de políticas y procedimientos</li>
                </ul>
              </div>
            </section>

            {/* Prevención de explotación y abuso */}
            <section>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Prevención de Explotación y Abuso Sexual Infantil (EASI)
              </h3>
              <div className="p-4 border-l-4 border-red-400 bg-red-50">
                <p className="text-gray-700">
                  Rocket Alliance mantiene una política de tolerancia cero hacia
                  cualquier forma de explotación o abuso sexual infantil.
                  Nuestra aplicación no contiene ni permite:
                </p>
                <ul className="mt-3 text-gray-600 space-y-1">
                  <li>• Contenido que sexualice, explote o abuse de menores</li>
                  <li>• Imágenes, videos o materiales inapropiados</li>
                  <li>
                    • Funciones que faciliten el contacto entre adultos y
                    menores
                  </li>
                  <li>
                    • Cualquier contenido que pueda poner en riesgo la seguridad
                    de los menores
                  </li>
                </ul>
              </div>
            </section>

            {/* Información de contacto */}
            <section>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Contacto para Preocupaciones de Seguridad
              </h3>
              <div className="p-6 rounded-lg bg-blue-50">
                <p className="mb-4 text-gray-700">
                  Si tienes alguna preocupación relacionada con la seguridad
                  infantil en nuestra aplicación, por favor contáctanos
                  inmediatamente:
                </p>
                <div className="text-gray-600 space-y-2">
                  <p>
                    <strong>Email:</strong> augustobarco.dev@gmail.com
                  </p>
                  <p>
                    <strong>Respuesta:</strong> Dentro de 24 horas
                  </p>
                  <p>
                    <strong>Investigación:</strong> Todas las preocupaciones son
                    investigadas inmediatamente
                  </p>
                </div>
              </div>
            </section>

            {/* Cumplimiento normativo */}
            <section>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Cumplimiento Normativo
              </h3>
              <p className="text-gray-600">
                Rocket Alliance cumple con todas las regulaciones aplicables de
                protección infantil, incluyendo:
              </p>
              <ul className="mt-3 ml-4 text-gray-600 space-y-1">
                <li>
                  • COPPA (Children&apos;s Online Privacy Protection Act) -
                  Estados Unidos
                </li>
                <li>
                  • GDPR (General Data Protection Regulation) - Unión Europea
                </li>
                <li>
                  • Políticas del Programa para Desarrolladores de Google Play
                </li>
                <li>
                  • Estándares internacionales de seguridad infantil en línea
                </li>
              </ul>
            </section>

            {/* Fecha de última actualización */}
            <section className="pt-6 border-t">
              <p className="text-sm text-gray-500">
                <strong>Última actualización:</strong>{' '}
                {new Date().toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Esta política se revisa regularmente para asegurar el
                cumplimiento continuo con los estándares de seguridad infantil
                más actuales.
              </p>
            </section>
          </div>
        </section>

        <footer className="mt-8 text-center text-gray-600">
          © {new Date().getFullYear()} Rocket Alliance. Todos los derechos
          reservados.
        </footer>
      </div>
    </>
  );
};

export default RocketAllianceChildSafetyStandards;
