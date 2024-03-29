import { Flex, GridItem, Text, Image, useDisclosure, Box, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Avatar, Divider, VStack } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import FeedFooter from "../FeedPosts/FeedFooter";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <>
    <GridItem
      cursor={ "pointer" }
      borderRadius={ 4 }
      overflow={ "hidden" }
      borderColor={ "whiteAlpha.300" }
      position={ "relative" }
      aspectRatio={ 1 / 1 }
      onClick={ onOpen }
    >
      <Flex opacity={ 0 }
        _hover={ { opacity: 1 } }
        position={ "absolute" }
        top={ 0 }
        right={ 0 }
        bottom={ 0 }
        bg={ "blackAlpha.700" }
        transition={ "all 0.3s ease" }
        zIndex={ 1 }
        justifyContent={ "center" } >
        <Flex
          alignItems={ "center" }
          justifyContent={ "center" }
          gap={ 50 }>
          <Flex>
            <AiFillHeart size={ 20 } />
            <Text fontWeight={ "bold" } ml={ 2 }> 7</Text>
          </Flex>
          <Flex>
            <FaComment size={ 20 } />
            <Text fontWeight={ "bold" } ml={ 2 }> 7</Text>
          </Flex>
        </Flex>
      </Flex>

      <Image src={ img } alt="profile post" w={ "100%" } h={ "100%" } objectFit={ "cover" } />
    </GridItem>
    <Modal isOpen={ isOpen } onClose={ onClose }
      isCentered={ true }
      size={ { base: "3xl", md: '5xl' } }

    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody bg={ 'black' } pb={ 5 }>
          <Flex gap={ 4 } w={ { base: '90%', sm: '70%', md: 'full' } } mx={ 'auto' }>
            <Box
              borderRadius={ 4 }
              overflow={ 'hidden' }
              border={ '1px solid' }
              borderColor={ 'whiteAlpha.300' }
              flex={ 1.5 }
            >
              <Image src={ img } alt="profile post image" />
            </Box>
            <Flex flex={ 1 } flexDirection={ 'column' }
              px={ 10 }
              display={ { base: 'none', md: 'flex' } }
            >
              <Flex alignItems={ 'center' } justifyContent={ 'space-between' }>
                <Flex alignItems={'center'} gap={4}>
                  <Avatar src="/profilepic.jpg" size={ 'sm' } name="NewtonKamau" />
                  <Text fontSize={ '12' } fontWeight={ 'bold' }>NewtonKamau</Text>
                </Flex>
                <Box _hover={ { bg: 'whiteAlpha.300 ', color: 'red' } } borderRadius={ 4 } px={ 1 } >
                  <MdDelete size={ 20 } cursor={ 'pointer' } />
                </Box>
              </Flex>
              <Divider my={ 4 } bg={ 'gray.500' } />
              <VStack w={'full'} alignItems={'start'} maxH={'350px'} overflow={'auto'}>
                <Comment
                  createAt='1 day ago'
                  username='Tom Doe'
                  comment='This is a comment'
                  profilePic='https://bit.ly/ryan-florence'
                  
                />
                <Comment
                  createAt='4 days ago'
                  username='JohnDoe'
                  comment='Awesome content'
                  profilePic={'https://bit.ly/dan-abramov'}
                  
                  />
                <Comment
                  createAt='13 days ago'
                  username='kent'
                  comment='Never settle'
                  profilePic={'https://bit.ly/kent-c-dodds'}
                  
                />
              </VStack>
              <Divider my={ 4 } bg={ 'gray.800' } />
              <FeedFooter  isProfilePage={true}/>

            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>

  </>;
};

export default ProfilePost;