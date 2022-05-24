// 1. import `ChakraProvider` component
import { Button, Box, ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>

      <Button colorScheme="blue">Button</Button>
    </ChakraProvider>
  );
}

export default App;
