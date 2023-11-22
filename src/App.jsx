import "./App.css"
import { ContadorResponsive } from "./Components/ContadorResponsive/ContadorResponsive";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
  <>
    <ChakraProvider>
      <ContadorResponsive />
    </ChakraProvider>
  </>
  )
}

export  default App ;
