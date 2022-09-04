import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  return (
    <Html>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics . should be first in head */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive" id='id-script-gtag'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "${googleAnalyticsId}");
          `}
        </Script>

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
       
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* SavvyCall start here  */}
        <Script strategy="lazyOnload" id='id-SavvyCall-1'>
          {`
            window.SavvyCal =
            window.SavvyCal ||
            function () {
              (SavvyCal.q = SavvyCal.q || []).push(arguments);
            };
          `}
        </Script>
        <Script
          src="https://embed.savvycal.com/v1/embed.js"
          strategy="lazyOnload"
        />
        <Script strategy="lazyOnload" id='id-SavvyCall-2'>
          {`
        SavvyCal("init", {
          widget: {
            enabled: true,
            backgroundColor: "#DF292D",
            link: "nathankrasney/14601a74",
            prompt: "Schedule 1x1 with Nathan",
          },
        });
        `}
        </Script>

        {/* SavvyCall finish here  */}
      </body>
    </Html>
  );
}
