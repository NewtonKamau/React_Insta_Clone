import { Avatar, Box, Flex,Text } from "@chakra-ui/react";

export const FeedHeader = () => {
  return (
    <Flex justifyContent={ 'space-between' } alignItems={ 'center' }my={2} w={ 'full' }>
      <Flex alignItems={'center'} gap={2} size={'sm'}>
        <Avatar src="./img1.png" alt='user profile pic' />
        <Flex fontSize={ 12 } fontWeight={ 'bold' } gap={ 2 }>
          NewtonKamau
      <Box color={'gray.500'}> 1w</Box>
        </Flex>
      </Flex>
      <Box
      cursor={'pointer'}
      >
        <Text fontSize={12} color={'blue.500'} fontWeight={'bold'} _hover={{color:'white'}} transition={'0.2s ease-in-out'}>
          Unfollow
      </Text>
      </Box>
    </Flex>
  )
}
