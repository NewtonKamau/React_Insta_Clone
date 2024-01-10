import { Flex, VStack,Text, Box} from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link } from "react-router-dom";
const SuggestedUsers = () => {
  return  <VStack py={ 8 } px={ 6 } gap={ 4 }>
        <SuggestedHeader />
        <Flex alignItems={ 'center' } justifyContent={ 'space-between' } w={ 'full' }>
            <Text fontSize={12} fontWeight={'bold'} color="gray.500" >
            Suggested for you
            </Text>
            <Text fontSize={ 12 } fontWeight={ 'bold' } color="gray.500"  _hover={{color:'gray.400'}} cursor={'pointer'}>
            See All
            </Text>
            

        </Flex>
      <SuggestedUser name={'Ashley Doe' } followers={1230} avatar='https://bit.ly/dan-abramov' />
      <SuggestedUser name={'Tom Doe' } followers={548} avatar='https://bit.ly/ryan-florence' />
      <SuggestedUser name={'Christian Doe' } followers={230} avatar='https://bit.ly/code-beast' />
       
      
      <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
       &#169; {new Date().getFullYear()}  Built by { '' }
          <Link to='https://newtonkamau.github.io/' target="_blank" color="blue.500" fontSize={ 14 }>
              Newton Kamau
          </Link>
          
      </Box>
        
  </VStack>
  
}

export default SuggestedUsers