import { Box,Image } from "@chakra-ui/react";
import { FeedHeader } from "./FeedHeader";
import FeedFooter from "./FeedFooter";

const FeedPost = ({img,username,avator}) => {
    return (
      <>      
      <FeedHeader img={img} username={username} avator={avator} />
        <Box>
          <Image src={img} alt={username} />
            
        </Box>
     <FeedFooter username={username} />
      </>
  )
}

export default FeedPost