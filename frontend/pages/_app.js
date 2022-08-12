import App from "next/app";
import Head from "next/head";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import "../styles/globals.scss";
import { createContext, useEffect, useState } from "react";
import { mainTheme, GlobalStyle } from "../settings/";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";

export const GlobalContext = createContext({});

const fetchSettings = {
  populate: {
    footerForm: {
      populate: "*",
    },
    logo: {
      populate: "*",
    },
    favicon: {
      populate: "*",
    },
    main_menu: {
      populate: "*",
    },
    localizations: {
      populate: "*",
    },
    footerInfo: {
      populate: "*",
    },
  },
};

const categoriesFetchSettings = {
  populate: {
    background: {
      populate: "*",
    },
    offers: {
      populate: {
        name: true,
      },
    },
    thumbnail: {
      populate: "*",
    },
  },
};

const MyApp = ({ Component, pageProps }) => {
  const { global, categories } = pageProps;
  const [currentLocale, setCurrentLocale] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (!currentLocale) {
      setCurrentLocale(router.locale);
    } else if (currentLocale !== router.locale) {
      router.reload();
    }
  }, [currentLocale, router, router.locale]);

  const globalContext = {
    global: {
      ...global.data.attributes,
      categories,
    },
  };

  return (
    <>
      <Head>
        <link rel="icon" href={getStrapiMedia(globalContext.global.favicon)} />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <GlobalContext.Provider value={globalContext}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const global = await fetchAPI("/global", {
    ...fetchSettings,
    locale: ctx.router.locale,
  });

  const categories = await fetchAPI("/categories", {
    ...categoriesFetchSettings,
    locale: ctx.router.locale,
  });

  return {
    ...appProps,
    pageProps: { global, categories },
  };
};

export default MyApp;
