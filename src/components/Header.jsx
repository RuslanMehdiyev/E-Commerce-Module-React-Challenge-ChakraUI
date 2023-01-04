import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  Button,
  Text,
  WrapItem,
  MenuList,
  IconButton,
  MenuItem,
} from "@chakra-ui/react";
import cart from "../assets/img/icon-cart.svg";
import avatar from "../assets/img/avatar.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import Cart from "./Cart";

function Header({ basket, setBasket, isLarge500 }) {
  return (
    <>
      <Flex
        margin={"1rem 2rem 2rem 2rem"}
        justifyContent="space-around"
        height={"3rem"}
      >
        <Box p={"0"}>
          <Flex justifyContent={"center"} alignItems="center" gap={"3rem"}>
            <Box display={"flex"} alignItems={"center"} gap={10}>
              <Box display={isLarge500 ? "" : "none"}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    fontSize={30}
                    bg="none"
                    border={"none"}
                    mt={10}
                  />
                  <MenuList
                    height={"100vh"}
                    w={300}
                    backgroundColor="white"
                    zIndex={1}
                    ml={"-2"}
                  >
                    <MenuItem
                      fontSize={20}
                      p={10}
                      border={0}
                      bg={"white"}
                      fontWeight="bold"
                      mt={10}
                    >
                      Collection
                    </MenuItem>
                    <MenuItem
                      fontSize={20}
                      p={10}
                      border={0}
                      bg={"white"}
                      fontWeight="bold"
                      mt={10}
                    >
                      Men
                    </MenuItem>
                    <MenuItem
                      fontSize={20}
                      p={10}
                      border={0}
                      bg={"white"}
                      fontWeight="bold"
                      mt={10}
                    >
                      Women
                    </MenuItem>
                    <MenuItem
                      fontSize={20}
                      p={10}
                      border={0}
                      bg={"white"}
                      fontWeight="bold"
                      mt={10}
                    >
                      About.
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Heading
                m={"0"}
                mb={0}
                pt={isLarge500 ? "20" : ""}
                fontSize={"2rem"}
                marginBottom="10px"
              >
                <Link
                  textDecoration={"none"}
                  color="black"
                  href="https://chakra-ui.com"
                >
                  sneakers
                </Link>
              </Heading>
            </Box>
            <Box display={isLarge500 ? "none" : "flex"} gap={"2rem"}>
              <Text
                m={"0"}
                transition={".2s"}
                p="30px 0"
                borderBottom={"3px solid transparent"}
                _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
              >
                Collection
              </Text>
              <Text
                m={"0"}
                transition={".2s"}
                p="30px 0"
                borderBottom={"3px solid transparent"}
                _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
              >
                Men
              </Text>
              <Text
                m={"0"}
                transition={".2s"}
                p="30px 0"
                borderBottom={"3px solid transparent"}
                _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
              >
                Women
              </Text>
              <Text
                m={"0"}
                transition={".2s"}
                p="30px 0"
                borderBottom={"3px solid transparent"}
                _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
              >
                About
              </Text>
              <Text
                m={"0"}
                transition={".2s"}
                p="30px 0"
                borderBottom={"3px solid transparent"}
                _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
              >
                Contact
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex alignItems={"center"} gap="40px">
            <Box>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      m="28px 0"
                      paddingLeft="5rem"
                      isActive={isOpen}
                      as={Button}
                      border="0"
                      bgColor={"#fff"}
                      position={"relative"}
                      _hover={{ cursor: "pointer" }}
                      _before={{
                        content: `"${basket}"`,
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        fontWeight: "bold",
                        top: "-5",
                        right: 0,
                        borderRadius: "50%",
                        backgroundColor: "orange",
                        color: "white",
                        display: `${basket ? "flex" : "none"}`,
                        justifyContent: "center",
                        alignItems: "center",
                        transform: "translate(50%, -50%)",
                      }}
                    >
                      {isOpen ? (
                        <img src={cart} alt="" />
                      ) : (
                        <img src={cart} alt="" />
                      )}
                    </MenuButton>
                    <MenuList zIndex={1}>
                      <Box
                        borderRadius={"10px"}
                        w={"350px"}
                        minHeight="200px"
                        bgColor={"lightgray"}
                      >
                        <Heading borderBottom={"1px solid #000"} p="1rem">
                          Cart
                        </Heading>
                        {basket ? (
                          <Cart basket={basket} setBasket={setBasket} />
                        ) : (
                          <Text textAlign={"center"} fontSize="20px">
                            Cart is empty
                          </Text>
                        )}
                      </Box>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
            <WrapItem>
              <Avatar src={avatar} w="40px" />
            </WrapItem>
          </Flex>
        </Box>
      </Flex>
      <hr />
    </>
  );
}

export default Header;
