import { Box,Image, Container, Flex, VStack } from "@chakra-ui/react";
import AuthForm from "../../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH='100vh' justifyContent='center' alignItems='center' px='4'>
      <Container maxW='md' padding='0' centerContent>
        <Flex justifyContent='center' alignContent='center' gap='10'>
          {/* Left hand side */}
          <Box display={{ base: "none", md:"block"}}>
            <Image src="/auth.png" alt="auth"  h="500"  />
          </Box>
          {/* Right hand side */ }
          <VStack spacing='4'  align='stretch'>
            <AuthForm />
              <Box textAlign='center'>
                  Get the app...
            </Box>
            <Flex gap='5' justifyContent='center'>
              <Image src="/playstore.png" alt="playstore logo" h='10' />
              <Image src="/microsoft.png" alt="microsoft  logo" h='10' />
            </Flex>
          </VStack>
      </Flex>
      </Container>
</Flex>
    );
}

export default AuthPage