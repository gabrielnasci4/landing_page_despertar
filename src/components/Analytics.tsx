"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { CLARITY_ID, GA_ID, PIXEL_ID } from "@/lib/ferramentas";

/*
  Ferramentas de medição do site.

  • Microsoft Clarity — roda para TODOS os visitantes, mas SEM COOKIES
    até a pessoa clicar em "Aceitar" (Consent Mode da Microsoft). Sem
    consentimento, cada página vira uma sessão anônima separada; com
    consentimento, o Clarity passa a usar cookies e liga a jornada da
    pessoa entre as páginas. Se ela recusar, os cookies do Clarity são
    apagados e a medição continua anônima.
    ⚠️ No painel do Clarity: Settings > Setup > desligar a opção de
    cookies ("Turn OFF"), para que nenhum cookie seja criado antes do
    consentimento.

  • Google Analytics (GA4) e Pixel do Facebook — só carregam DEPOIS
    que a pessoa aceita (usam cookies e não têm modo sem cookies).

  Para ativar GA/Pixel, defina as variáveis de ambiente na Cloudflare:
    NEXT_PUBLIC_GA_ID          (ex.: G-XXXXXXX)
    NEXT_PUBLIC_META_PIXEL_ID  (ex.: 123456789012345)
  Enquanto não existirem, nada disso é carregado.
*/
// IDs vêm da fonte única (a mesma que a Política de Privacidade lê).
const CHAVE = "despertar-consentimento";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

// Informa ao Clarity a escolha da pessoa. Anúncios ficam sempre
// "denied" (não usamos o Clarity para anúncios).
function sinalizarClarity(analytics: "granted" | "denied") {
  window.clarity?.("consentv2", {
    ad_Storage: "denied",
    analytics_Storage: analytics,
  });
}

export function Analytics() {
  const [liberado, setLiberado] = useState(false);

  useEffect(() => {
    setLiberado(localStorage.getItem(CHAVE) === "aceito");
    const aoConsentir = (e: Event) => {
      const detalhe = (e as CustomEvent).detail;
      if (detalhe === "aceito") {
        setLiberado(true);
        sinalizarClarity("granted");
      } else if (detalhe === "recusado") {
        sinalizarClarity("denied");
      }
    };
    window.addEventListener("consentimento", aoConsentir);
    return () => window.removeEventListener("consentimento", aoConsentir);
  }, []);

  return (
    <>
      {CLARITY_ID && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function () {
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
              // Estado inicial: cookies só se a pessoa já tiver aceitado antes.
              var aceitou = false;
              try { aceitou = localStorage.getItem("${CHAVE}") === "aceito"; } catch (e) {}
              window.clarity("consentv2", {
                ad_Storage: "denied",
                analytics_Storage: aceitou ? "granted" : "denied"
              });
            })();
          `}
        </Script>
      )}

      {liberado && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {liberado && PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
