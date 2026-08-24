"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

/*
  Carrega o Google Analytics (GA4), o Pixel do Facebook e o
  Microsoft Clarity, mas SOMENTE depois que a pessoa aceitou
  os cookies.

  Para ativar, defina as variáveis de ambiente na Netlify:
    NEXT_PUBLIC_GA_ID          (ex.: G-XXXXXXX)
    NEXT_PUBLIC_META_PIXEL_ID  (ex.: 123456789012345)
    NEXT_PUBLIC_CLARITY_ID     (ex.: abcdef1234)
  Enquanto elas não existirem, nada é carregado — o site
  funciona normalmente sem rastreamento.
*/
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
// ID do Microsoft Clarity. Fica embutido aqui (não é segredo — já
// aparece no navegador) para funcionar em qualquer hospedagem sem
// depender de variável de ambiente. A variável, se existir, tem
// prioridade.
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "xss14ps28x";
const CHAVE = "despertar-consentimento";

export function Analytics() {
  const [liberado, setLiberado] = useState(false);

  useEffect(() => {
    const checar = () => setLiberado(localStorage.getItem(CHAVE) === "aceito");
    checar();
    const aoConsentir = (e: Event) => {
      const detalhe = (e as CustomEvent).detail;
      if (detalhe === "aceito") setLiberado(true);
    };
    window.addEventListener("consentimento", aoConsentir);
    return () => window.removeEventListener("consentimento", aoConsentir);
  }, []);

  if (!liberado) return null;

  return (
    <>
      {GA_ID && (
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

      {PIXEL_ID && (
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

      {CLARITY_ID && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  );
}
