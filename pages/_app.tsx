import * as React from "react";
import { useEffect } from "react";
import {
  ChakraProvider,
  Container,
  VStack,
  Image,
  Text,
  Heading,
  Box,
  Divider,
} from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "../theme";
import TagManager from "react-gtm-module";
import { useRouter } from "next/router";
import { pageview } from "../lib/ga";
import Script from "next/script";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const gtmID = "GTM-56FGDNF";
  const tagManagerArgs = {
    gtmId: gtmID,
  };

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
          
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XQFLDMRVFP"
      ></Script>
          
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XQFLDMRVFP', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <ChakraProvider theme={theme}>
        <Box padding={4}>
          <Container
            backgroundColor={"white"}
            boxShadow="md"
            marginY={4}
            maxWidth="container.xl"
            padding={4}
            borderRadius="sm"
          >
            <VStack marginBottom={6}>
              <Image
                borderRadius={9999}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xmqqf3t_zKomZB_LE3K6V_HWVEOoKZohQQ&usqp=CAU"
              ></Image>
              <Heading>Store</Heading>
              <Text>Esto es un store cualquiera</Text>
            </VStack>
            <Divider marginY={6} />
            <Component {...pageProps} />
          </Container>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default App;
