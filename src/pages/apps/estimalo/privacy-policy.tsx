/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const EMAIL = 'augustobarco.dev@gmail.com';

const Estimalo: React.FC = () => {
  return (
    <>
      <Head>
        <title>Estímalo | Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy for Estímalo, the estimates and invoices app."
        />
      </Head>

      <div
        style={{ backgroundColor: 'white', padding: 70, minHeight: '100vh' }}
      >
        <p>
          <strong>Privacy Policy</strong>
        </p>
        <p>
          <a href="#es">Leer en español</a>
        </p>
        <p>
          This privacy policy applies to the Estímalo app (hereby referred to as
          "Application") for Android devices, created by Augsync (hereby
          referred to as "Service Provider"). Estímalo lets contractors write
          estimates and invoices in Spanish and send them to their clients in
          English, Spanish or both. The Application can be used for free, with
          optional paid features (Estímalo Pro).
        </p>

        <p>
          <strong>Information You Enter</strong>
        </p>
        <p>
          To create your documents, you enter information into the Application,
          such as:
        </p>
        <ul>
          <li>
            Your business details: name, owner name, phone, email, address and
            license number
          </li>
          <li>
            Your clients' details: name, phone, email, job address, preferred
            language and private notes
          </li>
          <li>
            Estimates, invoices, line items, prices, payments you record and
            client signatures
          </li>
          <li>Your logo, PDF color and your own signature</li>
        </ul>
        <p>
          By default this information is stored only on your device. If you
          create an account (with Google or with your email), it is also stored
          in the Service Provider's cloud database so you do not lose it and can
          use it on other phones. You are responsible for having your clients'
          permission to store their contact details in the Application. The
          Service Provider only processes that information on your behalf to
          provide the service.
        </p>

        <p>
          <strong>Voice Dictation</strong>
        </p>
        <p>
          If you use dictation (a Pro feature), your voice is converted to text
          by your phone's speech recognition service (provided by Google on
          Android). The resulting text, not the audio, is sent through the
          Service Provider's server to the Google Gemini API to split it into
          line items and translate it into English. The same service translates
          the descriptions and notes you write. The Service Provider uses Gemini
          under paid terms in which your data is not used to train Google's
          models.
        </p>

        <p>
          <strong>Permissions</strong>
        </p>
        <ul>
          <li>Microphone: only while you dictate.</li>
          <li>Photos: only to pick your business logo.</li>
          <li>
            Contacts: only if you choose to import a client from your contacts.
          </li>
        </ul>

        <p>
          <strong>Purchases</strong>
        </p>
        <p>
          Subscriptions are processed by Google Play. The Service Provider uses
          RevenueCat to check whether your subscription is active. The Service
          Provider does not receive your card or payment details.
        </p>

        <p>
          <strong>Automatically Collected Information</strong>
        </p>
        <p>
          To keep the Application working, the Service Provider may receive
          technical information such as the app version, your device model and
          operating system version, and error reports when the Application
          crashes. The Application does not collect your precise location.
        </p>

        <p>
          <strong>No Ads, No Selling</strong>
        </p>
        <p>
          The Application does not show ads. The Service Provider does not sell
          your information or your clients' information, and does not use it for
          advertising.
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
              Google Play Services, Google Sign-In and speech recognition
            </a>
          </li>
          <li>
            <a href="https://ai.google.dev/gemini-api/terms">
              Google Gemini API
            </a>
          </li>
          <li>
            <a href="https://supabase.com/privacy">Supabase</a> (account and
            cloud storage)
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
          Information stored only on your device is removed when you uninstall
          the Application. Cloud data is kept while your account exists. You can
          delete your account and all its cloud data at any time from the
          Application (Ajustes › Borrar cuenta), or by writing to {EMAIL}.
          Deleted data is removed from the Service Provider's servers within 30
          days. Before deleting, the Application lets you download your
          documents.
        </p>

        <p>
          <strong>Children</strong>
        </p>
        <p>
          The Application is a business tool and is not directed to children
          under 13. The Service Provider does not knowingly collect personal
          information from children under 13. If you believe a child has
          provided personal information, contact {EMAIL} and it will be deleted.
        </p>

        <p>
          <strong>Security</strong>
        </p>
        <p>
          Information sent between the Application and the Service Provider's
          servers is encrypted in transit. Cloud data can only be accessed with
          your account.
        </p>

        <p>
          <strong>Changes</strong>
        </p>
        <p>
          This Privacy Policy may be updated from time to time. Changes will be
          posted on this page. Continued use of the Application after changes
          means you accept them.
        </p>
        <p>This privacy policy is effective as of 2026-11-07.</p>

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
          Esta política aplica a la app Estímalo (la "Aplicación") para Android,
          creada por Augsync (el "Proveedor"). Estímalo sirve para hacer
          estimados y facturas en español y enviarlos a tus clientes en inglés,
          en español o en los dos idiomas. Se puede usar gratis, con funciones
          de pago opcionales (Estímalo Pro).
        </p>

        <p>
          <strong>Datos que escribes</strong>
        </p>
        <ul>
          <li>
            Datos de tu negocio: nombre, tu nombre, teléfono, correo, dirección
            y número de licencia
          </li>
          <li>
            Datos de tus clientes: nombre, teléfono, correo, dirección del
            trabajo, idioma y notas privadas
          </li>
          <li>
            Estimados, facturas, partidas, precios, pagos que registras y firmas
            de tus clientes
          </li>
          <li>Tu logo, el color del PDF y tu firma</li>
        </ul>
        <p>
          Por defecto, estos datos se guardan solo en tu teléfono. Si creas una
          cuenta (con Google o con tu correo), también se guardan en la base de
          datos en la nube del Proveedor para que no se pierdan y puedas usarlos
          en otro teléfono. Tú eres responsable de contar con el permiso de tus
          clientes para guardar sus datos. El Proveedor solo los trata en tu
          nombre para darte el servicio.
        </p>

        <p>
          <strong>Dictado por voz</strong>
        </p>
        <p>
          Si usas el dictado (función Pro), el reconocimiento de voz de tu
          teléfono (de Google, en Android) convierte tu voz en texto. Ese texto,
          no el audio, pasa por el servidor del Proveedor a la API de Google
          Gemini para separarlo en partidas y traducirlo al inglés. El mismo
          servicio traduce las descripciones y notas que escribes. El Proveedor
          usa Gemini con condiciones de pago en las que tus datos no se usan
          para entrenar los modelos de Google.
        </p>

        <p>
          <strong>Permisos</strong>
        </p>
        <ul>
          <li>Micrófono: solo mientras dictas.</li>
          <li>Fotos: solo para elegir el logo de tu negocio.</li>
          <li>
            Contactos: solo si decides importar un cliente de tus contactos.
          </li>
        </ul>

        <p>
          <strong>Compras</strong>
        </p>
        <p>
          Las suscripciones las cobra Google Play. El Proveedor usa RevenueCat
          para saber si tu suscripción está activa. El Proveedor no recibe los
          datos de tu tarjeta ni de tu pago.
        </p>

        <p>
          <strong>Datos técnicos</strong>
        </p>
        <p>
          Para que la Aplicación funcione, el Proveedor puede recibir datos
          técnicos como la versión de la app, el modelo y el sistema de tu
          teléfono, y reportes de errores cuando la Aplicación falla. La
          Aplicación no recoge tu ubicación precisa.
        </p>

        <p>
          <strong>Sin anuncios y sin venta de datos</strong>
        </p>
        <p>
          La Aplicación no muestra anuncios. El Proveedor no vende tus datos ni
          los de tus clientes, ni los usa para publicidad.
        </p>

        <p>
          <strong>Servicios de terceros</strong>
        </p>
        <p>
          Google Play Services, Google Sign-In y el reconocimiento de voz de
          Google, la API de Google Gemini, Supabase (cuenta y nube), RevenueCat
          (suscripciones) y Expo. Cada uno tiene su propia política de
          privacidad, enlazada arriba. El Proveedor también puede revelar datos
          cuando lo exija la ley o para proteger sus derechos o la seguridad de
          otras personas.
        </p>

        <p>
          <strong>Conservación y borrado</strong>
        </p>
        <p>
          Los datos que solo están en tu teléfono se borran al desinstalar la
          Aplicación. Los datos en la nube se guardan mientras exista tu cuenta.
          Puedes borrar tu cuenta y todos sus datos en la nube cuando quieras
          desde la Aplicación (Ajustes › Borrar cuenta) o escribiendo a {EMAIL}.
          Los datos borrados se eliminan de los servidores del Proveedor en un
          plazo de 30 días. Antes de borrar, la Aplicación te deja descargar tus
          documentos.
        </p>

        <p>
          <strong>Menores</strong>
        </p>
        <p>
          La Aplicación es una herramienta de trabajo y no está dirigida a
          menores de 13 años. El Proveedor no recoge a sabiendas datos de
          menores de 13 años. Si crees que un menor dio datos personales,
          escribe a {EMAIL} y se borrarán.
        </p>

        <p>
          <strong>Seguridad</strong>
        </p>
        <p>
          Los datos que viajan entre la Aplicación y los servidores del
          Proveedor van cifrados. Los datos en la nube solo se pueden ver con tu
          cuenta.
        </p>

        <p>
          <strong>Cambios</strong>
        </p>
        <p>
          Esta política puede cambiar. Los cambios se publican en esta página.
          Si sigues usando la Aplicación después de un cambio, lo aceptas.
        </p>
        <p>Vigente desde el 7 de noviembre de 2026.</p>

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

export default Estimalo;
