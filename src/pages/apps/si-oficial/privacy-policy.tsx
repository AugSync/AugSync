/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const EMAIL = 'augustobarco.dev@gmail.com';

const SiOficial: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sí, Oficial | Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy for Sí, Oficial, the English practice app for truck drivers."
        />
      </Head>

      <div
        style={{
          backgroundColor: 'white',
          padding: 70,
          minHeight: '100vh',
          maxWidth: 820,
        }}
      >
        <p>
          <strong>Privacy Policy</strong>
        </p>
        <p>
          <a href="#es">Leer en español</a>
        </p>
        <p>
          This privacy policy applies to the Sí, Oficial app (hereby referred to
          as "Application") for Android devices, created by Augsync (hereby
          referred to as "Service Provider"). Sí, Oficial helps Spanish-speaking
          truck drivers practice the spoken English and the traffic signs of a
          roadside inspection. The Application can be used for free, with
          optional paid features (a subscription).
        </p>

        <p>
          <strong>No Account</strong>
        </p>
        <p>
          The Application does not ask for your name, email or phone number and
          has no user accounts. To limit how many answers each phone can send to
          the correction service, the Application may create an anonymous
          identifier that is not linked to your identity.
        </p>

        <p>
          <strong>Information Stored on Your Phone</strong>
        </p>
        <ul>
          <li>Your practice progress, scores and settings</li>
          <li>
            The optional details you type in "Tus datos" (for example the city
            you leave from, your company, your cargo and your truck), used to
            fill in the model answers
          </li>
        </ul>
        <p>
          This information stays on your device. You can erase it at any time in
          the Application (Ajustes › Borrar mi progreso) or by uninstalling it.
        </p>

        <p>
          <strong>Microphone and Speech</strong>
        </p>
        <p>
          The Application asks for the microphone only to listen to your spoken
          answers while you practice. Your voice is converted to text by your
          phone's speech recognition service (provided by Google on Android).
          The Application does not record or keep your audio. To correct an
          answer, the resulting text (not the audio), together with the practice
          question, may be sent through the Service Provider's server to the
          Google Gemini API, which returns a grade and a suggested answer.
          Gemini is used under terms in which your data is not used to train
          Google's models.
        </p>

        <p>
          <strong>Purchases</strong>
        </p>
        <p>
          Subscriptions are processed by Google Play. The Service Provider uses
          RevenueCat to check whether your subscription is active. The Service
          Provider does not receive your card or payment details.
        </p>

        <p>
          <strong>Usage and Technical Information</strong>
        </p>
        <p>
          To improve the Application, the Service Provider may receive anonymous
          usage events (for example, that a practice test was started or
          finished, or that the subscription screen was shown), the app version,
          your device model and operating system version, and error reports when
          the Application crashes. The Application does not collect your
          location.
        </p>

        <p>
          <strong>Notifications</strong>
        </p>
        <p>
          If you turn on the daily reminder, the Application schedules it on
          your phone. No information is sent to do this.
        </p>

        <p>
          <strong>No Ads, No Selling</strong>
        </p>
        <p>
          The Application does not show ads. The Service Provider does not sell
          your information and does not use it for advertising.
        </p>

        <p>
          <strong>Third Party Services</strong>
        </p>
        <p>
          The Application uses third-party services that have their own privacy
          policies:
        </p>
        <ul>
          <li>
            <a href="https://www.google.com/policies/privacy/">
              Google Play Services and speech recognition
            </a>
          </li>
          <li>
            <a href="https://ai.google.dev/gemini-api/terms">
              Google Gemini API
            </a>
          </li>
          <li>
            <a href="https://supabase.com/privacy">Supabase</a> (server and
            anonymous usage events)
          </li>
          <li>
            <a href="https://www.revenuecat.com/privacy">RevenueCat</a>{' '}
            (subscriptions)
          </li>
          <li>
            <a href="https://expo.dev/privacy">Expo</a>
          </li>
        </ul>
        <p>The Service Provider may also disclose information:</p>
        <ul>
          <li>
            as required by law, such as to comply with a subpoena or similar
            legal process;
          </li>
          <li>
            when they believe in good faith that disclosure is necessary to
            protect their rights, protect your safety or the safety of others,
            investigate fraud, or respond to a government request.
          </li>
        </ul>

        <p>
          <strong>Data Retention and Deletion</strong>
        </p>
        <p>
          Information on your phone is removed when you choose "Borrar mi
          progreso" or uninstall the Application. Anonymous usage events and
          correction counts on the server are kept for up to 12 months. You can
          ask for their deletion at any time by writing to {EMAIL}; see{' '}
          <a href="/apps/si-oficial/delete-data">how to delete your data</a>.
        </p>

        <p>
          <strong>Not an Official Service</strong>
        </p>
        <p>
          The Application is a practice tool. It is not affiliated with the
          FMCSA, the U.S. Department of Transportation or any police agency, and
          it does not guarantee the result of any inspection.
        </p>

        <p>
          <strong>Children</strong>
        </p>
        <p>
          The Application is meant for adult professional drivers and is not
          directed to children under 13. The Service Provider does not knowingly
          collect personal information from children under 13. If you believe a
          child has provided personal information, contact {EMAIL} and it will
          be deleted.
        </p>

        <p>
          <strong>Security</strong>
        </p>
        <p>
          Information sent between the Application and the Service Provider's
          server is encrypted in transit.
        </p>

        <p>
          <strong>Changes</strong>
        </p>
        <p>
          This Privacy Policy may be updated from time to time. Changes will be
          posted on this page. Continued use of the Application after changes
          means you accept them.
        </p>
        <p>This privacy policy is effective as of 2026-11-12.</p>

        <p>
          <strong>Contact Us</strong>
        </p>
        <p>
          If you have any questions about privacy in the Application, email{' '}
          {EMAIL}.
        </p>

        <hr id="es" />

        <p>
          <strong>Política de privacidad</strong>
        </p>
        <p>
          Esta política aplica a la app Sí, Oficial (la "Aplicación") para
          Android, creada por Augsync (el "Proveedor"). Sí, Oficial ayuda a los
          camioneros hispanos a practicar el inglés hablado y las señales de
          tránsito de una inspección en carretera. Se puede usar gratis, con
          funciones de pago opcionales (una suscripción).
        </p>

        <p>
          <strong>Sin cuenta</strong>
        </p>
        <p>
          La Aplicación no te pide nombre, correo ni teléfono y no tiene
          cuentas. Para limitar cuántas respuestas manda cada teléfono al
          servicio de corrección, puede crear un identificador anónimo que no
          está unido a tu identidad.
        </p>

        <p>
          <strong>Datos guardados en tu teléfono</strong>
        </p>
        <ul>
          <li>Tu progreso, tus notas y tus ajustes</li>
          <li>
            Los datos opcionales que escribes en «Tus datos» (por ejemplo, la
            ciudad de donde sales, tu compañía, tu carga y tu camión), que
            sirven para completar las respuestas modelo
          </li>
        </ul>
        <p>
          Estos datos se quedan en tu teléfono. Puedes borrarlos cuando quieras
          en la Aplicación (Ajustes › Borrar mi progreso) o desinstalándola.
        </p>

        <p>
          <strong>Micrófono y voz</strong>
        </p>
        <p>
          La Aplicación pide el micrófono solo para escuchar tus respuestas
          mientras practicas. El reconocimiento de voz de tu teléfono (de
          Google, en Android) convierte tu voz en texto. La Aplicación no graba
          ni guarda tu audio. Para corregir una respuesta, ese texto (no el
          audio), junto con la pregunta, puede pasar por el servidor del
          Proveedor a la API de Google Gemini, que devuelve una nota y una
          respuesta sugerida. Gemini se usa con condiciones en las que tus datos
          no sirven para entrenar los modelos de Google.
        </p>

        <p>
          <strong>Compras</strong>
        </p>
        <p>
          Las suscripciones las cobra Google Play. El Proveedor usa RevenueCat
          para saber si tu suscripción está activa. El Proveedor no recibe los
          datos de tu tarjeta ni de tu pago.
        </p>

        <p>
          <strong>Datos de uso y técnicos</strong>
        </p>
        <p>
          Para mejorar la Aplicación, el Proveedor puede recibir eventos de uso
          anónimos (por ejemplo, que empezaste o terminaste un simulacro, o que
          viste la pantalla de suscripción), la versión de la app, el modelo y
          el sistema de tu teléfono, y reportes de errores cuando la Aplicación
          falla. La Aplicación no recoge tu ubicación.
        </p>

        <p>
          <strong>Avisos</strong>
        </p>
        <p>
          Si activas el recordatorio diario, la Aplicación lo programa en tu
          teléfono. No se envía ningún dato para eso.
        </p>

        <p>
          <strong>Sin anuncios y sin venta de datos</strong>
        </p>
        <p>
          La Aplicación no muestra anuncios. El Proveedor no vende tus datos ni
          los usa para publicidad.
        </p>

        <p>
          <strong>Servicios de terceros</strong>
        </p>
        <p>
          Google Play Services y el reconocimiento de voz de Google, la API de
          Google Gemini, Supabase (servidor y eventos de uso anónimos),
          RevenueCat (suscripciones) y Expo. Cada uno tiene su propia política
          de privacidad, enlazada arriba. El Proveedor también puede revelar
          datos cuando lo exija la ley o para proteger sus derechos o la
          seguridad de otras personas.
        </p>

        <p>
          <strong>Conservación y borrado</strong>
        </p>
        <p>
          Los datos de tu teléfono se borran con «Borrar mi progreso» o al
          desinstalar la Aplicación. Los eventos de uso anónimos y el conteo de
          correcciones en el servidor se guardan hasta 12 meses. Puedes pedir
          que se borren cuando quieras escribiendo a {EMAIL}; mira{' '}
          <a href="/apps/si-oficial/delete-data">cómo borrar tus datos</a>.
        </p>

        <p>
          <strong>No es un servicio oficial</strong>
        </p>
        <p>
          La Aplicación es una herramienta para practicar. No tiene relación con
          la FMCSA, el Departamento de Transporte de EE. UU. ni ninguna policía,
          y no garantiza el resultado de ninguna inspección.
        </p>

        <p>
          <strong>Menores</strong>
        </p>
        <p>
          La Aplicación es para conductores profesionales adultos y no está
          dirigida a menores de 13 años. El Proveedor no recoge a sabiendas
          datos de menores de 13 años. Si crees que un menor dio datos
          personales, escribe a {EMAIL} y se borrarán.
        </p>

        <p>
          <strong>Seguridad</strong>
        </p>
        <p>
          Los datos que viajan entre la Aplicación y el servidor del Proveedor
          van cifrados.
        </p>

        <p>
          <strong>Cambios</strong>
        </p>
        <p>
          Esta política puede cambiar. Los cambios se publican en esta página.
          Si sigues usando la Aplicación después de un cambio, lo aceptas.
        </p>
        <p>Vigente desde el 12 de noviembre de 2026.</p>

        <p>
          <strong>Contacto</strong>
        </p>
        <p>
          Si tienes preguntas sobre tu privacidad en la Aplicación, escribe a{' '}
          {EMAIL}.
        </p>
      </div>
    </>
  );
};

export default SiOficial;
