import React from 'react';
import Head from 'next/head';

const EMAIL = 'augustobarco.dev@gmail.com';
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Borrar mi cuenta de Estímalo / Delete my Estímalo account')}&body=${encodeURIComponent('Correo de mi cuenta / My account email: ')}`;

// Google Play requires a web page where users can request deletion of their account and data.
const EstimaloDeleteAccount: React.FC = () => (
  <>
    <Head>
      <title>Estímalo | Borrar cuenta · Delete account</title>
      <meta
        name="description"
        content="Cómo borrar tu cuenta de Estímalo y sus datos. How to delete your Estímalo account and its data."
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
        <strong>Borrar tu cuenta de Estímalo</strong>
      </p>
      <p>
        <a href="#en">Read in English</a>
      </p>
      <p>
        <strong>Desde la app (inmediato)</strong>
      </p>
      <ol>
        <li>
          Abre Estímalo y ve a <em>Ajustes</em>.
        </li>
        <li>
          Toca <em>Borrar cuenta</em>. Antes puedes descargar todos tus
          documentos en un PDF.
        </li>
        <li>Escribe BORRAR y confirma.</li>
      </ol>
      <p>
        <strong>Sin la app</strong>
      </p>
      <p>
        Escríbenos a <a href={MAILTO}>{EMAIL}</a> desde el correo de tu cuenta,
        con el asunto «Borrar mi cuenta de Estímalo». La borramos en un plazo de
        30 días y te confirmamos por correo.
      </p>
      <p>
        <strong>Qué se borra</strong>
      </p>
      <ul>
        <li>Tu cuenta (correo e inicio de sesión con Google).</li>
        <li>
          La copia en la nube: datos del negocio, logo, firma, clientes,
          precios, estimados, facturas, pagos y firmas de clientes.
        </li>
      </ul>
      <p>
        <strong>Qué se conserva</strong>
      </p>
      <ul>
        <li>
          Los datos guardados solo en tu teléfono se borran al borrar la cuenta
          desde la app o al desinstalarla.
        </li>
        <li>
          Los registros de compra de la suscripción los guardan Google Play y
          RevenueCat según sus propias políticas y la ley (por ejemplo, para
          impuestos). No se conservan otros datos.
        </li>
      </ul>

      <hr style={{ margin: '40px 0' }} />

      <p id="en">
        <strong>Delete your Estímalo account</strong>
      </p>
      <p>
        <strong>From the app (immediate)</strong>
      </p>
      <ol>
        <li>
          Open Estímalo and go to <em>Ajustes</em> (Settings).
        </li>
        <li>
          Tap <em>Borrar cuenta</em> (Delete account). You can download all your
          documents as a PDF first.
        </li>
        <li>Type BORRAR and confirm.</li>
      </ol>
      <p>
        <strong>Without the app</strong>
      </p>
      <p>
        Email <a href={MAILTO}>{EMAIL}</a> from your account email with the
        subject &quot;Delete my Estímalo account&quot;. We delete it within 30
        days and confirm by email.
      </p>
      <p>
        <strong>What is deleted</strong>
      </p>
      <ul>
        <li>Your account (email and Google sign-in).</li>
        <li>
          The cloud copy: business details, logo, signature, clients, prices,
          estimates, invoices, payments and client signatures.
        </li>
      </ul>
      <p>
        <strong>What is kept</strong>
      </p>
      <ul>
        <li>
          Data stored only on your phone is removed when you delete the account
          in the app or uninstall it.
        </li>
        <li>
          Subscription purchase records are kept by Google Play and RevenueCat
          under their own policies and the law (for example, for taxes). No
          other data is kept.
        </li>
      </ul>
    </div>
  </>
);

export default EstimaloDeleteAccount;
