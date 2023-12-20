import { Box,Image } from "@chakra-ui/react";
import { FeedHeader } from "./FeedHeader";
import FeedFooter from "./FeedFooter";

const FeedPost = () => {
    return (
      <>      
      <FeedHeader />
        <Box>
          <Image src='./img1.png' alt='user profile pic' />
            
        </Box>
     <FeedFooter />
      </>
  )
}

export default FeedPost