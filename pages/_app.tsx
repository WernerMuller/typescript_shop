import * as React from "react";
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
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
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
  );
};

export default App;
