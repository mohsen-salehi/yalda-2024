import '../styles/globals.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import {Provider} from "react-redux";
import store from "../store";
import Head from "next/head";
import React from "react";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>هم فاله،هم هدیه | جشنواره چله پر تخفیف الانزا</title>
                <meta name="theme-color" content="#FF304E"/>
                <meta property="og:image" itemProp="image"
                      content="https://elanza.com/assets/global/favicon/og_image.png"/>
                <link rel='canonical' href='https://landing.elanza.com/yalda'/>
                <link rel="apple-touch-icon" sizes="57x57"
                      href="https://elanza.com/assets/global/favicon/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60"
                      href="https://elanza.com/assets/global/favicon/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72"
                      href="https://elanza.com/assets/global/favicon/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76"
                      href="https://elanza.com/assets/global/favicon/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114"
                      href="https://elanza.com/assets/global/favicon/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120"
                      href="https://elanza.com/assets/global/favicon/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144"
                      href="https://elanza.com/assets/global/favicon/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152"
                      href="https://elanza.com/assets/global/favicon/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180"
                      href="https://elanza.com/assets/global/favicon/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="512x512"
                      href="https://elanza.com/assets/global/favicon/512x512.png"/>
                <link rel="icon" type="image/png" sizes="192x192"
                      href="https://elanza.com/assets/global/favicon/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32"
                      href="https://elanza.com/assets/global/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96"
                      href="https://elanza.com/assets/global/favicon/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16"
                      href="https://elanza.com/assets/global/favicon/favicon-16x16.png"/>
                <link rel="shortcut icon" type="image/x-icon"
                      href="https://elanza.com/assets/global/favicon/favicon-16x16.png"/>
                <meta name="robots" content="index, follow"/>
                <meta name="application-TileImage"
                      content="https://elanza.com/assets/global/favicon/ms-icon-144x144.png"/>
                <meta name='title' content='هم فاله، هم هدیه | جشنواره چله پر تخفیف الانزا'/>
                <meta name='description'
                      content='محصولات آرایشی بهداشتی با تخفیف های هیجان انگیز از 26 الی 30 آذر ماه 1402 در جشنواره چله الانزا'/>
                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                          })(window,document,'script','dataLayer','GTM-KWNHGF5');`,
                }}>
                </script>

            </Head>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=YOUR-GTM-ID`}
                    height="0"
                    width="0"
                    style={{display: 'none', visibility: 'hidden'}}
                ></iframe>
            </noscript>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default MyApp
