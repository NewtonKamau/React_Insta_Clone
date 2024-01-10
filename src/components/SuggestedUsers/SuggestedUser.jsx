import { Avatar, Flex, VStack,Text,Button } from "@chakra-ui/react";
import { useState } from "react";


const SuggestedUser = ({ followers, name, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return <Flex justifyContent={ 'space-between' } alignItems={ 'center' } w={ 'full' }>
    <Flex alignItems={'center'} gap={2}>
      <Avatar name={ name } src={ avatar } size={ 'md' } />
      <VStack spacing={2} alignItems={'flex-start'}>
        <Text fontWeight={ 'bold' } fontSize={12} >{ name }</Text>
        <Text>{ followers } followers</Text>
      </VStack>
    </Flex>
    <Button fontSize={ 12 }
      p={ 0 }
      bg={ 'transparent' }
      fontWeight={ 'medium' }
      _hover={ { color:'white' } }
      color={ isFollowed ? 'red' : 'blue' }
      onClick={ () => setIsFollowed(!isFollowed) } colorScheme={ isFollowed ? 'red' : 'blue' }>{ isFollowed ? 'Unfollow' : 'Follow' }
    </Button>
  </Flex>;
}

export default SuggestedUser