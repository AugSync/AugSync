/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const EMAIL = 'augustobarco.dev@gmail.com';

// Privacy policy for Nocturna (linked from Google Play and from the app's Pro screen).
const NocturnaPrivacy: React.FC = () => (
  <>
    <Head>
      <title>Nocturna | Política de privacidad · Privacy Policy</title>
      <meta
        name="description"
        content="Política de privacidad de Nocturna. Privacy policy for Nocturna. Política de privacidade do Nocturna."
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
        <strong>Política de privacidad de Nocturna</strong>
      </p>
      <p>
        <a href="#en">Read in English</a> · <a href="#pt">Ler em português</a>
      </p>
      <p>
        Esta política aplica a la app Nocturna (la "Aplicación") para Android,
        creada por Augsync (el "Proveedor"). Nocturna hace de narradora del
        juego del hombre lobo para jugar en grupo con un solo teléfono. Se puede
        usar gratis, con funciones de pago opcionales (Nocturna Pro, una
        suscripción).
      </p>
      <p>
        <strong>Sin cuenta y sin servidor</strong>
      </p>
      <p>
        La Aplicación no tiene cuentas y no te pide correo ni teléfono. No tiene
        un servidor propio: la partida, la narración y la música funcionan
        dentro del teléfono, sin conexión.
      </p>
      <p>
        <strong>Datos guardados en tu teléfono</strong>
      </p>
      <ul>
        <li>Los nombres de los jugadores y los grupos guardados</li>
        <li>Las grabaciones de voz de los nombres (ver «Micrófono»)</li>
        <li>La partida en curso y tus ajustes</li>
      </ul>
      <p>
        Estos datos no salen de tu teléfono. Puedes borrarlos quitando jugadores
        y grupos en la Aplicación, borrando los datos de la app en los ajustes
        de Android o desinstalándola.
      </p>
      <p>
        <strong>Micrófono</strong>
      </p>
      <p>
        La Aplicación pide el micrófono solo cuando un jugador elige grabar su
        nombre, para que la narradora lo diga con su propia voz. La grabación se
        guarda como archivo de audio en el teléfono, no se envía a ningún sitio
        y se borra al quitar al jugador o al desinstalar la Aplicación.
      </p>
      <p>
        <strong>Compras</strong>
      </p>
      <p>
        Las suscripciones las cobra Google Play. Para saber si tu suscripción
        está activa, la Aplicación consulta a RevenueCat, que recibe un
        identificador anónimo de la app y el recibo de compra de Google Play. El
        Proveedor no recibe los datos de tu tarjeta ni de tu pago.
      </p>
      <p>
        <strong>Sin anuncios, sin estadísticas, sin venta de datos</strong>
      </p>
      <p>
        La Aplicación no muestra anuncios, no usa herramientas de estadísticas
        ni de publicidad y no recoge tu ubicación. El Proveedor no vende tus
        datos.
      </p>
      <p>
        <strong>Servicios de terceros</strong>
      </p>
      <ul>
        <li>
          <a href="https://policies.google.com/privacy">Google Play</a>{' '}
          (descarga y pagos)
        </li>
        <li>
          <a href="https://www.revenuecat.com/privacy">RevenueCat</a> (estado de
          la suscripción)
        </li>
      </ul>
      <p>
        El Proveedor también puede revelar datos cuando lo exija la ley o para
        proteger sus derechos o la seguridad de otras personas.
      </p>
      <p>
        <strong>Menores</strong>
      </p>
      <p>
        La Aplicación es un juego de grupo para mayores de 13 años y no está
        dirigida a menores de 13. El Proveedor no recoge a sabiendas datos de
        menores. Si crees que un menor dio datos personales, escribe a {EMAIL}.
      </p>
      <p>
        <strong>Cambios</strong>
      </p>
      <p>
        Esta política puede cambiar. Los cambios se publican en esta página.
        Vigente desde el 13 de noviembre de 2026.
      </p>
      <p>
        <strong>Contacto</strong>
      </p>
      <p>Escribe a {EMAIL}.</p>

      <hr id="en" />

      <p>
        <strong>Nocturna Privacy Policy</strong>
      </p>
      <p>
        This privacy policy applies to the Nocturna app (the "Application") for
        Android devices, created by Augsync (the "Service Provider"). Nocturna
        narrates the werewolf party game so a group can play with one phone. It
        can be used for free, with optional paid features (Nocturna Pro, a
        subscription).
      </p>
      <p>
        <strong>No Account, No Server</strong>
      </p>
      <p>
        The Application has no user accounts and does not ask for your email or
        phone number. It has no server of its own: the game, the narration and
        the music run on the phone, offline.
      </p>
      <p>
        <strong>Information Stored on Your Phone</strong>
      </p>
      <ul>
        <li>Player names and saved groups</li>
        <li>Voice recordings of the players' names (see "Microphone")</li>
        <li>The game in progress and your settings</li>
      </ul>
      <p>
        This information never leaves your phone. You can erase it by removing
        players and groups in the Application, by clearing the app's data in
        Android settings, or by uninstalling it.
      </p>
      <p>
        <strong>Microphone</strong>
      </p>
      <p>
        The Application asks for the microphone only when a player chooses to
        record their name, so the narrator can say it in their own voice. The
        recording is stored as an audio file on the phone, is not sent anywhere,
        and is deleted when the player is removed or the Application is
        uninstalled.
      </p>
      <p>
        <strong>Purchases</strong>
      </p>
      <p>
        Subscriptions are processed by Google Play. To check whether your
        subscription is active, the Application asks RevenueCat, which receives
        an anonymous app identifier and the Google Play purchase receipt. The
        Service Provider does not receive your card or payment details.
      </p>
      <p>
        <strong>No Ads, No Analytics, No Selling</strong>
      </p>
      <p>
        The Application shows no ads, uses no analytics or advertising tools and
        does not collect your location. The Service Provider does not sell your
        information.
      </p>
      <p>
        <strong>Third Party Services</strong>
      </p>
      <p>
        Google Play (download and payments) and RevenueCat (subscription
        status), each with its own privacy policy, linked above. The Service
        Provider may also disclose information as required by law or to protect
        their rights or the safety of others.
      </p>
      <p>
        <strong>Children</strong>
      </p>
      <p>
        The Application is a party game for ages 13 and up and is not directed
        to children under 13. The Service Provider does not knowingly collect
        information from children. If you believe a child has provided personal
        information, contact {EMAIL}.
      </p>
      <p>
        <strong>Changes</strong>
      </p>
      <p>
        This policy may be updated; changes will be posted on this page.
        Effective as of 2026-11-13.
      </p>
      <p>
        <strong>Contact Us</strong>
      </p>
      <p>Email {EMAIL}.</p>

      <hr id="pt" />

      <p>
        <strong>Política de privacidade do Nocturna</strong>
      </p>
      <p>
        Esta política se aplica ao app Nocturna (o "Aplicativo") para Android,
        criado pela Augsync (o "Fornecedor"). O Nocturna narra o jogo do
        lobisomem para um grupo jogar com um só celular. Pode ser usado de
        graça, com recursos pagos opcionais (Nocturna Pro, uma assinatura).
      </p>
      <p>
        <strong>Sem conta e sem servidor</strong>
      </p>
      <p>
        O Aplicativo não tem contas e não pede e-mail nem telefone. Não tem
        servidor próprio: a partida, a narração e a música funcionam no celular,
        sem internet.
      </p>
      <p>
        <strong>Dados guardados no seu celular</strong>
      </p>
      <p>
        Os nomes dos jogadores, os grupos salvos, as gravações de voz dos nomes,
        a partida em andamento e os seus ajustes ficam só no celular. Você pode
        apagá-los removendo jogadores e grupos no Aplicativo, limpando os dados
        do app nas configurações do Android ou desinstalando-o.
      </p>
      <p>
        <strong>Microfone</strong>
      </p>
      <p>
        O Aplicativo pede o microfone só quando um jogador escolhe gravar o
        próprio nome, para a narradora dizê-lo com a voz dele. A gravação fica
        no celular, não é enviada a lugar nenhum e é apagada ao remover o
        jogador ou desinstalar o Aplicativo.
      </p>
      <p>
        <strong>Compras</strong>
      </p>
      <p>
        As assinaturas são cobradas pelo Google Play. Para saber se a sua
        assinatura está ativa, o Aplicativo consulta a RevenueCat, que recebe um
        identificador anônimo do app e o recibo do Google Play. O Fornecedor não
        recebe dados do seu cartão nem do pagamento.
      </p>
      <p>
        <strong>Sem anúncios, sem estatísticas, sem venda de dados</strong>
      </p>
      <p>
        O Aplicativo não mostra anúncios, não usa ferramentas de estatísticas
        nem de publicidade e não coleta a sua localização. O Fornecedor não
        vende os seus dados.
      </p>
      <p>
        <strong>Menores</strong>
      </p>
      <p>
        O Aplicativo é um jogo em grupo para maiores de 13 anos e não é
        direcionado a menores de 13. Contato: {EMAIL}. Vigente desde 13 de
        novembro de 2026.
      </p>
    </div>
  </>
);

export default NocturnaPrivacy;
