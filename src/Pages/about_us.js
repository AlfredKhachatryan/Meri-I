import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
function Main() {
  const [active, setActive] = useState(1);
  return (
    <>
      <Header />
      <Box as="main" p="12px">
        <Flex direction="column">
          {[...Array(3)].map((_, i) => (
            <Section
              key={i}
              index={i + 1}
              active={active}
              setActive={setActive}
              HeadingTxt="I love You <3"
              Description="<3<3<3<3<3<3<3<3<3<3<3"
              Step="Step"
            />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export { Main };

const Section = ({
  active = 1,
  index,
  setActive,
  HeadingTxt,
  Description,
  Step,
}) => (
  <Box
    onClick={() => setActive(index)}
    cursor={{ base: "default", md: "pointer" }}
  >
    <Flex gap="12px" align="center">
      <Box
        p="8px 16px"
        bg={active === index ? "#f91996" : "#9c3ab3"}
        border={active === index ? "1px solid #e41b1c" : "1px solid #DAD5CE"}
        borderRadius="12px"
        transition="0.3s"
        w="40px"
        h="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="16px"
          lineHeight="24px"
          fontWeight="600"
          color="white"
          margin={0}
        >
          {index}
        </Text>
      </Box>

      <Text
        color="#4A4A4A"
        fontSize="14px"
        fontWeight="500"
        textTransform="uppercase"
      >
        {Step}
      </Text>
    </Flex>

    <Flex maxW="332px">
      <Box p="12px 20px" position="relative">
        {index < 3 && (
          <Box w="2px" bg="#DAD5CE" h="116px" position="relative">
            <div
              className="fa fa-heart"
              style={{
                position: "absolute",
                bottom: "-2px",
                left: "-7px",
                color: "#f91996",
              }}
            />
          </Box>
        )}
      </Box>

      <Box pl="12px">
        <Heading fontSize="18px" fontWeight="500" pb="4px">
          {HeadingTxt}
        </Heading>
        <Text
          lineHeight="21px"
          letterSpacing="0.07px"
          fontSize="14px"
          color="#4A4A4A"
        >
          {Description}
        </Text>
      </Box>
    </Flex>
  </Box>
);
