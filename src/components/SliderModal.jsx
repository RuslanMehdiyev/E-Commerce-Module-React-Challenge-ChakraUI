import {
  Box,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  OrderedList,
} from "@chakra-ui/react";

function SliderModal({
  isOpen,
  onClose,
  prev,
  next,
  handlePrev,
  handleNext,
  isLarge500,
  mainImage,
  products,
  value,
  setValue,
}) {
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="rgba(0,0,0,0.6)" backdropFilter="blur(1px) " />
        <ModalContent>
          <ModalCloseButton
            bg={"transparent"}
            border={"none"}
            color={"hsl(26, 100%, 55%)"}
            fontSize={"20px"}
            mb={"10px"}
            mt={"20px"}
            _hover={{ cursor: "pointer" }}
          />
          <ModalBody>
            <Box position={"relative"} w="50%" margin={"0 auto"}>
              <Box
                position={"absolute"}
                w={"100%"}
                top={"50%"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Image
                  src={prev}
                  padding={15}
                  borderRadius={"50%"}
                  backgroundColor={"white"}
                  onClick={handlePrev}
                  _hover={{ cursor: "pointer" }}
                />
                <Image
                  src={next}
                  padding={15}
                  borderRadius={"50%"}
                  backgroundColor={"white"}
                  onClick={handleNext}
                  _hover={{ cursor: "pointer" }}
                />
              </Box>
              <Box display={"flex"} justifyContent="center">
                <Image
                  w={"90%"}
                  height="450px"
                  src={mainImage}
                  rounded={"10px"}
                />
              </Box>
            </Box>
            <Box w={"100%"} display="flex" justifyContent={"center"}>
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
                    <Image
                      src={item.thumbnail}
                      width={"4rem"}
                      rounded={"10px"}
                    />
                  </ListItem>
                ))}
              </OrderedList>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SliderModal;
