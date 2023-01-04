import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import img from "../assets/img/image-product-1.jpg";
import trash from "../assets/img/delete.svg";
function Cart({ basket, setBasket }) {
  return (
    <Box p={15}>
      <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
        <Box>
          <Image src={img} w={50} />
        </Box>
        <Box>
          <Text>Fall Limited Edition Sneakers</Text>
          <Box display={"flex"} gap={10}>
            <Text>$125.00 x {basket}</Text>
            <Text fontWeight={"bold"}>${125 * basket}.00</Text>
          </Box>
        </Box>
        <Box cursor={"pointer"} onClick={() => setBasket(0)}>
          <Image src={trash} />
        </Box>
      </Flex>
      <Button
        w={"100%"}
        borderRadius={10}
        bg={"orange"}
        p={"15"}
        color={"white"}
        fontWeight={"bold"}
        fontSize={16}
        mt={5}
        border={"none"}
        cursor="pointer"
      >
        Checkout
      </Button>
    </Box>
  );
}

export default Cart;
