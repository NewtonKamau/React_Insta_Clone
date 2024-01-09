import { Container, Flex, SkeletonCircle, VStack ,Skeleton, Box} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";


const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  },[]);
  
  return (
    <Container maxW={ 'container.sm' } py={ 10 } px={ 2 } >
      { isLoading && [0, 1, 2, 3].map((_, idx) => (
        <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={ 10 } />
            <VStack gap={ 2 } alignItems={ 'flex-start' }>
                <Skeleton height={10} w={200} />
                <Skeleton height={10} w={200} />

            </VStack>
          </Flex>
          <Skeleton w={ 'full' }>
            <Box h={500}></Box>
          </Skeleton>
        </VStack>
      ))}
      { !isLoading && (
        <>
              <FeedPost
      img='./img1.png' username='NewtonKamau' avator='./img1.png' />
      <FeedPost
      img='./img2.png' username='JOHNDOE' avator='./img2.png' />
      <FeedPost
      img='./img3.png' username='JANEDOE' avator='./img3.png' />
      <FeedPost
      img='./img4.png' username='USER' avator='./img4.png' />
        </>
  )}
        
    
        

    </Container>
  )
}

export default FeedPosts