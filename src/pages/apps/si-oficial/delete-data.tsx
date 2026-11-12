/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const EMAIL = 'augustobarco.dev@gmail.com';
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Borrar mis datos de Sí, Oficial / Delete my Sí, Oficial data')}`;

// Google Play's data safety form links here: how to delete the app's data (there are no accounts).
const SiOficialDeleteData: React.FC = () => (
  <>
    <Head>
      <title>Sí, Oficial | Borrar datos · Delete data</title>
      <meta
        name="description"
        content="Cómo borrar tus datos de Sí, Oficial. How to delete your Sí, Oficial data."
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
        <strong>Borrar tus datos de Sí, Oficial</strong>
      </p>
      <p>
        <a href="#en">Read in English</a>
      </p>
      <p>
        Sí, Oficial no tiene cuentas: no te pide nombre, correo ni teléfono. Tu
        progreso y «Tus datos» se guardan solo en tu teléfono.
      </p>
      <p>
        <strong>Desde la app (inmediato)</strong>
      </p>
      <ol>
        <li>
          Abre Sí, Oficial y ve a <em>Ajustes</em>.
        </li>
        <li>
          Toca <em>Borrar mi progreso</em> y confirma con <em>Sí, borrar</em>.
        </li>
      </ol>
      <p>Desinstalar la app también borra todo lo que guarda en tu teléfono.</p>
      <p>
        <strong>Datos en el servidor</strong>
      </p>
      <p>
        El servidor solo guarda eventos de uso anónimos y el conteo diario de
        correcciones, unidos a un identificador anónimo. Para que los borremos,
        escríbenos a <a href={MAILTO}>{EMAIL}</a> con el asunto «Borrar mis
        datos de Sí, Oficial». Los borramos en un plazo de 30 días. Si no los
        pides, se borran solos a los 12 meses.
      </p>
      <p>
        Tu suscripción la maneja Google Play: cancélala en Play Store › Pagos y
        suscripciones.
      </p>

      <hr id="en" />

      <p>
        <strong>Delete your Sí, Oficial data</strong>
      </p>
      <p>
        Sí, Oficial has no accounts: it does not ask for your name, email or
        phone number. Your progress and "Tus datos" are stored only on your
        phone.
      </p>
      <p>
        <strong>In the app (immediate)</strong>
      </p>
      <ol>
        <li>
          Open Sí, Oficial and go to <em>Ajustes</em> (Settings).
        </li>
        <li>
          Tap <em>Borrar mi progreso</em> (Erase my progress) and confirm with{' '}
          <em>Sí, borrar</em>.
        </li>
      </ol>
      <p>
        Uninstalling the app also deletes everything it stores on your phone.
      </p>
      <p>
        <strong>Data on the server</strong>
      </p>
      <p>
        The server only keeps anonymous usage events and the daily count of
        corrections, linked to an anonymous identifier. To have them deleted,
        email <a href={MAILTO}>{EMAIL}</a> with the subject "Delete my Sí,
        Oficial data". We delete them within 30 days. If you do not ask, they
        are deleted automatically after 12 months.
      </p>
      <p>
        Your subscription is managed by Google Play: cancel it in Play Store ›
        Payments &amp; subscriptions.
      </p>
    </div>
  </>
);

export default SiOficialDeleteData;
