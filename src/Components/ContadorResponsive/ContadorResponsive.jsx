import { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Center,
  Container,
  Flex,
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
      maxW={{ base: "100%", md: "50%" }}
      mx={{ base: 0, md: "auto" }}
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
          <Flex direction={{ base: "column", md: "row" }} mt={4}>
            <Button colorScheme="teal" mb={{ base: 2, md: 0 }} mr={{ md: 2 }} onClick={incrementarContador}>
              Incrementar
            </Button>
            <Button colorScheme="yellow" mb={{ base: 2, md: 0 }} mr={{ md: 2 }} onClick={resetContador}>
              Reinicio
            </Button>
            <Button colorScheme="red" onClick={decrementarContador}>
              Decrementar
            </Button>
          </Flex>
        </Center>
      </Box>
    </Container>
  );
};

export { ContadorResponsive };
