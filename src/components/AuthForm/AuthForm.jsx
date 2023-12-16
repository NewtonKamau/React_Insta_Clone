import { Box, VStack, Image, Input, Button, Flex,Text } from "@chakra-ui/react";
import { useState } from "react";

const AuthForm = () => {
    const [isLogin,setIsLogin] = useState(false)
    return (
      <>
      <Box border='1px solid gray' borderRadius='4' padding='5'>
          <VStack spacing='4'>
              <Image src="./logo.png" h='20' cursor='pointer' alt='Instagram' />
              <Input
                  type="text"
                  placeholder='Phone number, username or email'
                    fontSize='14px'
              />
              <Input
                  type="password"
                  placeholder='Password'
                    fontSize='14px'
              />
              { !isLogin ? (
               <Input
                  type=" confirm password"
                  placeholder='confirm passord'
                  fontSize='14px'
              />
              ): null
              }
              <Button
                  colorScheme='blue'
                  fontSize='14'
                  size='sm'
              >
                  {isLogin ? 'Login In' : 'Sign Up'}
              </Button>
              {/* .............................OR................... */}
              <Flex alignItems='center' justifyContent='center' my='4' gap='1' w='full'>
                  <Box flex='2' h='1px' bg="gray.400" />
                  <Text mx='1' color='white'>OR</Text>
                  <Box flex='2' h='1px' bg="gray.400" />
              </Flex>
              
              <Flex alignItems='center' justifyContent='center' cursor='pointer'>
                  <Image src="/google.png" alt="google logo" w='5' />
                  <Text mx='1' color='blue.500'>Log in with Google</Text>
              </Flex>
          </VStack>
    </Box>
        <Box border='1px solid gray' borderRadius='4' padding='5px'>
                <Flex alignItems='center' justifyContent='center'>
                    <Box mx='2' fontSize='14'>
                        {isLogin ? "Don't have an account?": "Already have an account?"}
                    </Box>
                    <Box onClick={()=>setIsLogin(!isLogin)} color='blue.500' cursor='pointer'>
                        {isLogin ? "Sign Up" : "Login In"}
                    </Box>
        </Flex>
            </Box>
      
      </>
  )
}

export default AuthForm