import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { Box, Flex, Text, Heading, Grid } from "@chakra-ui/react";
function Main() {
  const [active, setActive] = useState(1);
  return (
    <>
      <Header />
      <Box p="12px">
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
      <Divider />
      <Box p="12px" textAlign="center">
        <Heading>
          Утем <Box className="fa fa-heart" color="#f91996" /> Кез
        </Heading>
        <Text fontSize="18px" fontWeight="500">
          Кянкс ты у меня самая красивая умная самая альтушка и самая бомжук но
          ты моя))
        </Text>
        <Flex justifyContent="center">
          <Heart />
          <Heart />
          <Heart />
        </Flex>
        <Flex justifyContent="center" rotate="180deg" marginTop="-50px">
          <Heart />
          <Heart />
        </Flex>
      </Box>
      <Divider rotate="180deg" />
    </>
  );
}

export { Main };

const Heart = (props) => {
  return (
    <Box
      id="heart"
      position="relative"
      w="100px"
      h="90px"
      mt="10px"
      {...props}
      _before={{
        content: '""',
        position: "absolute",
        top: "0",
        left: "50px",
        w: "52px",
        h: "80px",
        borderRadius: "50px 50px 0 0",
        bgImage: "url(./pic1.jpg)", // Replace with your image URL
        bgSize: "cover",
        bgPosition: "center",
        transform: "rotate(-45deg)",
        transformOrigin: "0 100%",
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        w: "52px",
        h: "80px",
        borderRadius: "50px 50px 0 0",
        backgroundImage: "url(./pic2.jpg)", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "rotate(45deg)",
        transformOrigin: "100% 100%",
      }}
    />
  );
};

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
            <Box
              className="fa fa-heart"
              position="absolute"
              bottom="-2px"
              left="-7px"
              color="#f91996"
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

const Divider = (props) => (
  <Flex direction="column" height="7em" {...props}>
    <Box
      className="headerWave"
      rotate="180deg"
      background="linear-gradient(90deg, #f91996, #9c3ab3)"
    />
    <Box className="headerWave" />
  </Flex>
);
