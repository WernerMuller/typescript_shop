import { Grid, Stack, Text, Button, Link } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { initScriptLoader } from "next/script";
import React, { useMemo, useState } from "react";
import api from "../product/api";
import { Product, singleProduct } from "../product/types";

interface Props {
  products: Product;
  single: singleProduct;
}
const IndexRoute: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = React.useState<singleProduct[]>([]);

  const text = useMemo(
    () =>
      cart
        .reduce(
          (mensaje, producto) =>
            mensaje.concat(`* ${producto.title} - $${producto.price}/n`),
          ""
        )
        .concat(
          `/n Total: ${cart.reduce(
            (total, product) => total + product.price,
            0
          )}`
        ),
    [cart]
  );

  function handleCart(product: singleProduct) {
    setCart((cart) => cart.concat(product));
  }

  return (
    <Stack>
      <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
        {products.data.map((product) => (
          <Stack
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
            key={product._id}
          >
            {" "}
            <Text>{product.title.substr(0, 15)}</Text>
            <Text fontSize="sm" fontWeight={520} color="green.500">
              ${product.price}
            </Text>
            <Button
              variant="outline"
              onClick={() => handleCart(product)}
              colorScheme="blue"
              size="sm"
              position="sticky"
              bottom={0}
            >
              Agregar
            </Button>
          </Stack>
        ))}
      </Grid>

      {Boolean(cart.length) && (
        <Button
          as={Link}
          colorScheme="whatsapp"
          href={`https://wa.me/950805821?text=${encodeURIComponent(text)}`}
        >
          {" "}
          ver carrito ({cart.length} productos)
        </Button>
      )}
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    revalidate: 10,
    props: {
      products,
    },
  };
};

export default IndexRoute;
