/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const EMAIL = 'augustobarco.dev@gmail.com';

// Terms of use for Nocturna (linked from the app's Pro screen).
const NocturnaTerms: React.FC = () => (
  <>
    <Head>
      <title>Nocturna | Términos de uso · Terms of Use</title>
      <meta
        name="description"
        content="Términos de uso de Nocturna. Terms of use for Nocturna. Termos de uso do Nocturna."
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
        <strong>Términos de uso de Nocturna</strong>
      </p>
      <p>
        <a href="#en">Read in English</a> · <a href="#pt">Ler em português</a>
      </p>
      <p>
        Nocturna (la "Aplicación") es una app de Augsync (el "Proveedor") que
        narra el juego del hombre lobo para jugar en grupo. Al usarla aceptas
        estos términos.
      </p>
      <p>
        <strong>Plan gratis y Nocturna Pro</strong>
      </p>
      <ul>
        <li>
          Gratis: partidas de 5 jugadores con Lobo, Aldeano, Vidente y
          Curandero, y 1 grupo guardado.
        </li>
        <li>
          Pro (semanal, mensual o anual): hasta 20 jugadores, 2 o más lobos,
          Cazador, Alcalde, Bruja, Cupido y Tonto del pueblo, y grupos guardados
          ilimitados.
        </li>
        <li>
          Las suscripciones se renuevan solas al final de cada periodo hasta que
          las canceles. El plan anual empieza con 3 días gratis para quien nunca
          se suscribió; si lo cancelas antes de que terminen, no se te cobra.
          Puedes cancelar cuando quieras en Play Store › Pagos y suscripciones;
          sigues con Pro hasta el final del periodo pagado.
        </li>
        <li>
          Los cobros, reembolsos y cancelaciones los maneja Google Play, según
          sus políticas.
        </li>
      </ul>
      <p>
        <strong>Uso correcto</strong>
      </p>
      <p>
        No copies el contenido de la Aplicación (voces, música, ilustraciones,
        textos) para venderlo ni distribuirlo. La música es de Kevin MacLeod
        (incompetech.com), con licencia CC BY 4.0.
      </p>
      <p>
        <strong>Responsabilidad</strong>
      </p>
      <p>
        La Aplicación se ofrece "tal cual". En la medida que permita la ley, el
        Proveedor no responde por daños derivados de su uso.
      </p>
      <p>
        <strong>Privacidad</strong>
      </p>
      <p>
        Lee la{' '}
        <a href="/apps/nocturna/privacy-policy">política de privacidad</a>.
      </p>
      <p>
        <strong>Cambios y contacto</strong>
      </p>
      <p>
        Estos términos pueden cambiar; los cambios se publican en esta página.
        Vigentes desde el 13 de noviembre de 2026. Preguntas: {EMAIL}.
      </p>

      <hr id="en" />

      <p>
        <strong>Nocturna Terms of Use</strong>
      </p>
      <p>
        Nocturna (the "Application") is an app by Augsync (the "Provider") that
        narrates the werewolf party game. By using it you accept these terms.
      </p>
      <p>
        <strong>Free plan and Nocturna Pro</strong>
      </p>
      <ul>
        <li>
          Free: 5-player games with Wolf, Villager, Seer and Healer, and 1 saved
          group.
        </li>
        <li>
          Pro (weekly, monthly or yearly): up to 20 players, 2 or more wolves,
          Hunter, Mayor, Witch, Cupid and Village Fool, and unlimited saved
          groups.
        </li>
        <li>
          Subscriptions renew automatically at the end of each period until you
          cancel. The yearly plan starts with 3 free days for people who never
          subscribed; cancel before they end and you are not charged. Cancel any
          time in Play Store › Payments &amp; subscriptions; Pro stays on until
          the end of the paid period.
        </li>
        <li>
          Charges, refunds and cancellations are handled by Google Play under
          its policies.
        </li>
      </ul>
      <p>
        <strong>Fair use</strong>
      </p>
      <p>
        Do not copy the Application's content (voices, music, illustrations,
        texts) to sell or distribute it. Music by Kevin MacLeod
        (incompetech.com), licensed under CC BY 4.0.
      </p>
      <p>
        <strong>Liability</strong>
      </p>
      <p>
        The Application is provided "as is". To the extent permitted by law, the
        Provider is not liable for damages arising from its use.
      </p>
      <p>
        Read the <a href="/apps/nocturna/privacy-policy">privacy policy</a>.
        These terms may change; changes are posted on this page. Effective
        2026-11-13. Questions: {EMAIL}.
      </p>

      <hr id="pt" />

      <p>
        <strong>Termos de uso do Nocturna</strong>
      </p>
      <p>
        O Nocturna (o "Aplicativo") é um app da Augsync (o "Fornecedor") que
        narra o jogo do lobisomem em grupo. Ao usá-lo você aceita estes termos.
      </p>
      <ul>
        <li>
          Grátis: partidas de 5 jogadores com Lobo, Aldeão, Vidente e
          Curandeiro, e 1 grupo salvo.
        </li>
        <li>
          Pro (semanal, mensal ou anual): até 20 jogadores, 2 ou mais lobos,
          Caçador, Prefeito, Bruxa, Cupido e Bobo da vila, e grupos salvos
          ilimitados.
        </li>
        <li>
          As assinaturas renovam sozinhas ao fim de cada período até você
          cancelar. O plano anual começa com 3 dias grátis para quem nunca
          assinou; se cancelar antes do fim, não há cobrança. Cancele quando
          quiser em Play Store › Pagamentos e assinaturas. Cobranças e
          reembolsos são do Google Play.
        </li>
      </ul>
      <p>
        O Aplicativo é oferecido "como está". Leia a{' '}
        <a href="/apps/nocturna/privacy-policy">política de privacidade</a>.
        Vigentes desde 13 de novembro de 2026. Dúvidas: {EMAIL}.
      </p>
    </div>
  </>
);

export default NocturnaTerms;
