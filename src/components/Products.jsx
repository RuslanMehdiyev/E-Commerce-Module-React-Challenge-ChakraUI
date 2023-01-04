import {
  Text,
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Button,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../data";
import minus from "../assets/img/minus.svg";
import plus from "../assets/img/plus.svg";
import cart from "../assets/img/icon-cart.svg";
import prev from "../assets/img/previous.svg";
import next from "../assets/img/next.svg";
import SliderModal from "./SliderModal";
function Products({ setBasket, isLarge500 }) {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  const [amount, setAmount] = useState(0);
  const [openModal, setModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMinus = () => {
    if (amount === 0) {
      return;
    }
    setAmount(amount - 1);
  };
  const handleNext = () => {
    setValue(value + 1);
    if (value > 2) {
      setValue(0);
    }
  };
  const handlePrev = () => {
    setValue(value - 1);
    if (value == 0) {
      setValue(3);
    }
  };
  return (
    <Flex
      display={isLarge500 ? "block" : "flex"}
      maxWidth={isLarge500 ? "100%" : "80%"}
      margin="0 auto"
      mt={isLarge500 ? "0" : "2rem"}
      w={"100%"}
    >
      <Box w={isLarge500 ? "100%" : "50%"} ml={isLarge500 ? "0" : "4rem"}>
        <Box position={"relative"}>
          <Box
            position={"absolute"}
            w={"100%"}
            top={"50%"}
            display={isLarge500 ? "flex" : "none"}
            justifyContent={"space-between"}
          >
            <Image
              src={prev}
              ml={10}
              padding={15}
              borderRadius={"50%"}
              backgroundColor={"white"}
              onClick={handlePrev}
            />
            <Image
              src={next}
              mr={10}
              padding={15}
              borderRadius={"50%"}
              backgroundColor={"white"}
              onClick={handleNext}
            />
          </Box>
          <Image
            width={isLarge500 ? "100%" : 9.5 / 12}
            src={mainImage}
            rounded={isLarge500 ? "" : "15px"}
            onClick={onOpen}
            _hover={{ cursor: "pointer" }}
          />
          {!isLarge500 && (
            <SliderModal
              isOpen={isOpen}
              onClose={onClose}
              prev={prev}
              next={next}
              products={products}
              handleNext={handleNext}
              handlePrev={handlePrev}
              isLarge500={isLarge500}
              mainImage={mainImage}
              value={value}
              setValue={setValue}
            />
          )}
        </Box>
        <OrderedList
          display={isLarge500 ? "none" : "flex"}
          alignItems={"center"}
          gap={"10"}
          m={"0"}
          marginTop={"10"}
        >
          {products.map((item, index) => (
            <ListItem
              key={item.id}
              onClick={() => setValue(index)}
              opacity={index === value && "0.7"}
              cursor="pointer"
            >
              <Image src={item.thumbnail} width={"4rem"} rounded={"10px"} />
            </ListItem>
          ))}
        </OrderedList>
      </Box>
      <Box w={isLarge500 ? "100%" : "50%"} padding={isLarge500 && 20}>
        <Heading
          py={1}
          px={2}
          textColor="orange"
          textTransform={"uppercase"}
          display="inline-block"
          fontSize={"14"}
          mt={isLarge500 ? "1rem" : "4rem"}
          mb={20}
        >
          sneaker company
        </Heading>
        <Heading mb={"20"} fontWeight="bold" fontSize={"2xl"}>
          Fall Limited Edition Sneakers
        </Heading>
        <Text mb={20} opacity=".6" fontSize={15}>
          These low profile sneakers are your perfect casual wear companion.
          Featuring a durable outer sole, they'll withstand everything the
          weather can offer.
        </Text>
        <Box
          display={isLarge500 ? "flex" : ""}
          justifyContent={isLarge500 ? "space-between" : ""}
        >
          <OrderedList m={0} display={"flex"} gap="10">
            <ListItem fontWeight={"bold"} fontSize={"22px"}>
              $125.00
            </ListItem>
            <ListItem
              py={1}
              px={2}
              textColor="orange"
              display="inline-block"
              fontSize={"14"}
            >
              <Badge
                fontSize={"15px"}
                ml={"10px"}
                p={"5px"}
                variant="outline"
                bg="hsl(25, 100%, 94%)"
                color={"hsl(26, 100%, 55%)"}
              >
                50%
              </Badge>
            </ListItem>
          </OrderedList>
          <Text opacity={0.6} fontSize={"14"} mb={40}>
            $250.00
          </Text>
        </Box>
        <Box display={isLarge500 ? "block" : "flex"} gap={10}>
          <OrderedList
            m={0}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={"lightgrey"}
            w={isLarge500 ? "100%" : "40%"}
            py={20}
            px={30}
            borderRadius={10}
            mb={isLarge500 ? "1rem" : ""}
          >
            <ListItem onClick={handleMinus} userSelect="none" cursor="pointer">
              <Image src={minus} />
            </ListItem>
            <ListItem fontWeight={"bold"}>{amount}</ListItem>
            <ListItem
              onClick={() => setAmount(amount + 1)}
              userSelect="none"
              cursor="pointer"
            >
              <Image src={plus} />
            </ListItem>
          </OrderedList>
          <Button
            onClick={() => setBasket(amount)}
            cursor={"pointer"}
            w={isLarge500 ? "100%" : "50%"}
            border="none"
            borderRadius={10}
            bg={"orange"}
            gap={20}
            py={20}
            px={30}
            mb={isLarge500 ? "1rem" : ""}
          >
            <Image src={cart} />
            <Text color={"white"} fontWeight={"bold"} fontSize={16}>
              Add to cart
            </Text>
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default Products;
