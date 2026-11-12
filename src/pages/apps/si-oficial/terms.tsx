/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const EMAIL = 'augustobarco.dev@gmail.com';

// Terms of use for Sí, Oficial (linked from the app: Ajustes › Términos de uso).
const SiOficialTerms: React.FC = () => (
  <>
    <Head>
      <title>Sí, Oficial | Términos de uso · Terms of Use</title>
      <meta
        name="description"
        content="Términos de uso de Sí, Oficial. Terms of use for Sí, Oficial."
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
        <strong>Términos de uso de Sí, Oficial</strong>
      </p>
      <p>
        <a href="#en">Read in English</a>
      </p>
      <p>
        Sí, Oficial (la "Aplicación") es una app de Augsync (el "Proveedor")
        para practicar el inglés hablado y las señales de tránsito de una
        inspección en carretera. Al usarla aceptas estos términos.
      </p>
      <p>
        <strong>Es una práctica, no un servicio oficial</strong>
      </p>
      <p>
        La Aplicación no tiene relación con la FMCSA, el Departamento de
        Transporte de EE. UU. ni ninguna policía. Las preguntas son de práctica,
        no son las preguntas oficiales de ningún examen, y la Aplicación no
        garantiza el resultado de ninguna inspección. Las correcciones las hace
        un programa (y a veces inteligencia artificial) y pueden equivocarse.
      </p>
      <p>
        <strong>Plan gratis y Sí, Oficial Pro</strong>
      </p>
      <ul>
        <li>Gratis: 1 simulacro al día y el resto de la práctica.</li>
        <li>
          Pro semanal y Pro mensual: suscripciones que se renuevan solas al
          final de cada periodo hasta que las canceles. Puedes cancelarlas
          cuando quieras en Play Store › Pagos y suscripciones; sigues con Pro
          hasta el final del periodo pagado.
        </li>
        <li>Pro 3 meses: un solo pago por 3 meses que no se renueva solo.</li>
        <li>
          Los cobros, reembolsos y cancelaciones los maneja Google Play, según
          sus políticas.
        </li>
      </ul>
      <p>
        <strong>Uso correcto</strong>
      </p>
      <p>
        No intentes copiar el contenido de la Aplicación para venderlo, ni
        abusar del servicio de corrección (por ejemplo, con programas
        automáticos). La corrección con inteligencia artificial tiene un límite
        diario.
      </p>
      <p>
        <strong>Responsabilidad</strong>
      </p>
      <p>
        La Aplicación se ofrece "tal cual". En la medida que permita la ley, el
        Proveedor no responde por daños derivados de su uso. Maneja siempre con
        seguridad: no uses la Aplicación mientras conduces.
      </p>
      <p>
        <strong>Privacidad</strong>
      </p>
      <p>
        Lee la{' '}
        <a href="/apps/si-oficial/privacy-policy">política de privacidad</a>.
      </p>
      <p>
        <strong>Cambios y contacto</strong>
      </p>
      <p>
        Estos términos pueden cambiar; los cambios se publican en esta página.
        Vigentes desde el 12 de noviembre de 2026. Preguntas: {EMAIL}.
      </p>

      <hr id="en" />

      <p>
        <strong>Sí, Oficial Terms of Use</strong>
      </p>
      <p>
        Sí, Oficial (the "Application") is an app by Augsync (the "Provider") to
        practice the spoken English and the traffic signs of a roadside
        inspection. By using it you accept these terms.
      </p>
      <p>
        <strong>Practice, not an official service</strong>
      </p>
      <p>
        The Application is not affiliated with the FMCSA, the U.S. Department of
        Transportation or any police agency. Questions are for practice, they
        are not the official questions of any test, and the Application does not
        guarantee the result of any inspection. Corrections are made by software
        (sometimes artificial intelligence) and can be wrong.
      </p>
      <p>
        <strong>Free plan and Sí, Oficial Pro</strong>
      </p>
      <ul>
        <li>
          Free: 1 practice inspection per day and the rest of the practice.
        </li>
        <li>
          Weekly and monthly Pro: subscriptions that renew automatically at the
          end of each period until you cancel. Cancel any time in Play Store ›
          Payments &amp; subscriptions; Pro stays on until the end of the paid
          period.
        </li>
        <li>3-month Pro: a single payment for 3 months that does not renew.</li>
        <li>
          Charges, refunds and cancellations are handled by Google Play under
          its policies.
        </li>
      </ul>
      <p>
        <strong>Fair use</strong>
      </p>
      <p>
        Do not copy the Application's content to sell it, or abuse the
        correction service (for example with automated programs). AI corrections
        have a daily limit.
      </p>
      <p>
        <strong>Liability</strong>
      </p>
      <p>
        The Application is provided "as is". To the extent permitted by law, the
        Provider is not liable for damages arising from its use. Always drive
        safely: do not use the Application while driving.
      </p>
      <p>
        <strong>Privacy</strong>
      </p>
      <p>
        Read the <a href="/apps/si-oficial/privacy-policy">privacy policy</a>.
      </p>
      <p>
        <strong>Changes and contact</strong>
      </p>
      <p>
        These terms may change; changes are posted on this page. Effective
        2026-11-12. Questions: {EMAIL}.
      </p>
    </div>
  </>
);

export default SiOficialTerms;
