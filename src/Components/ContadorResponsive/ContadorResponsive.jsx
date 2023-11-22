import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Center,
  Container,
} from "@chakra-ui/react";

const ContadorResponsive = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };
  const resetContador = () => {
    setContador(0);
  };

  return (
    <Container
      display="flex"
      flexWrap="wrap"
      alignContent="space-around"
      centerContent
    >
      <Box
        p={8}
        bg="gray.100"
        borderRadius="lg"
        h="400px"
        bgGradient="linear-gradient(135deg, #E41A65, #9e69c5)"
      >
        <Center>
          <Heading
            mb={4}
            fontSize={{ base: "2xl", md: "4xl" }}
            color="white"
            transition="0.3s"
          >
            Contador: {contador}
          </Heading>
        </Center>
        <Center>
          <Button colorScheme="teal" mr={2} onClick={incrementarContador}>
            Incrementar
          </Button>
          <Button colorScheme="yellow" mr={2} onClick={resetContador}>
            Reinicio
          </Button>
          <Button colorScheme="red" onClick={decrementarContador}>
            Decrementar
          </Button>
        </Center>
      </Box>
    </Container>
  );
};

export { ContadorResponsive };
