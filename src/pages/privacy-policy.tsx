import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const EMAIL = 'augustobarco.dev@gmail.com';

// Generic policy for the shared Google sign-in screen («AugSync»): it covers every app, and each app keeps its own policy.
const APPS: { name: string; href: string }[] = [
  { name: 'Estímalo', href: '/apps/estimalo/privacy-policy' },
  { name: 'Rocket Alliance', href: '/apps/rocket-alliance' },
  { name: 'Life Calendar', href: '/apps/life-calendar/privacy-policy' },
  { name: 'Impostor', href: '/apps/impostor-game/privacy-policy' },
  { name: 'Football Fan 2026', href: '/apps/football-fan-2026/privacy-policy' },
  { name: 'Bubble Zen', href: '/apps/bubble-zen/privacy-policy' },
  {
    name: 'Capybara Stack',
    href: '/apps/capybara-stack-pet-tower-jump/privacy-policy',
  },
  {
    name: 'Flashlight Compass',
    href: '/apps/flashlight-compass/privacy-policy',
  },
  { name: 'Jewel Blast Saga', href: '/apps/jewel-blast-saga/privacy-policy' },
  { name: 'Leveler 360', href: '/apps/leveler-360/privacy-policy' },
  { name: 'Ludo Savage', href: '/apps/ludo-savage/privacy-policy' },
];

const AppList = () => (
  <ul>
    {APPS.map((a) => (
      <li key={a.href}>
        <Link href={a.href}>{a.name}</Link>
      </li>
    ))}
  </ul>
);

const PrivacyPolicy: React.FC = () => (
  <>
    <Head>
      <title>AugSync | Privacy Policy · Política de privacidad</title>
      <meta
        name="description"
        content="How AugSync apps handle your data, including Sign in with Google. Cómo tratan tus datos las apps de AugSync."
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
        <strong>AugSync Privacy Policy</strong>
      </p>
      <p>Last updated: November 8, 2026</p>
      <p>
        <a href="#es">Leer en español</a>
      </p>
      <p>
        AugSync (César Augusto Barco De Gouveia) develops the mobile apps listed
        below. This policy covers what we receive when you sign in with your
        Google Account in any of them. Each app also has its own privacy policy
        with the details of the data that app uses.
      </p>
      <p>
        <strong>Sign in with Google</strong>
      </p>
      <ul>
        <li>
          We receive your name, email address, profile picture and a Google
          account identifier. We do not receive your password.
        </li>
        <li>
          We use them only to create your account in that app, sign you in and
          identify you in it.
        </li>
        <li>
          We do not sell this data, use it for advertising or share it with
          third parties, except the service providers that host the app (for
          example, its database), bound to the same purpose.
        </li>
        <li>
          Use of information received from Google APIs adheres to the{' '}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </li>
      </ul>
      <p>
        <strong>Deleting your data</strong>
      </p>
      <p>
        You can delete your account from inside each app when it offers
        accounts, or write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> from the
        email of your account. We delete it within 30 days and confirm by email.
        You can also remove our access at any time in your Google Account, under
        Security › Third-party apps.
      </p>
      <p>
        <strong>App policies</strong>
      </p>
      <AppList />
      <p>
        <strong>Contact</strong>: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>

      <hr id="es" style={{ margin: '40px 0' }} />

      <p>
        <strong>Política de privacidad de AugSync</strong>
      </p>
      <p>Última actualización: 8 de noviembre de 2026</p>
      <p>
        AugSync (César Augusto Barco De Gouveia) desarrolla las apps móviles de
        la lista. Esta política cubre lo que recibimos cuando inicias sesión con
        tu Cuenta de Google en cualquiera de ellas. Cada app tiene además su
        propia política con el detalle de los datos que usa.
      </p>
      <p>
        <strong>Iniciar sesión con Google</strong>
      </p>
      <ul>
        <li>
          Recibimos tu nombre, tu correo, tu foto de perfil y un identificador
          de tu cuenta de Google. No recibimos tu contraseña.
        </li>
        <li>
          Los usamos solo para crear tu cuenta en esa app, iniciar tu sesión e
          identificarte en ella.
        </li>
        <li>
          No vendemos estos datos, no los usamos para publicidad ni los
          compartimos con terceros, salvo los proveedores que alojan la app (por
          ejemplo, su base de datos), con el mismo fin.
        </li>
        <li>
          El uso de la información recibida de las API de Google cumple la{' '}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Política de datos del usuario de los servicios de API de Google
          </a>
          , incluidos los requisitos de uso limitado.
        </li>
      </ul>
      <p>
        <strong>Borrar tus datos</strong>
      </p>
      <p>
        Puedes borrar tu cuenta desde cada app que ofrezca cuentas, o
        escribirnos a <a href={`mailto:${EMAIL}`}>{EMAIL}</a> desde el correo de
        tu cuenta. La borramos en un plazo de 30 días y te lo confirmamos por
        correo. También puedes quitarnos el acceso cuando quieras en tu Cuenta
        de Google, en Seguridad › Apps de terceros.
      </p>
      <p>
        <strong>Políticas de cada app</strong>
      </p>
      <AppList />
      <p>
        <strong>Contacto</strong>: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </div>
  </>
);

export default PrivacyPolicy;
