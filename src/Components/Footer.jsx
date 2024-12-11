import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Heading, Grid } from "@chakra-ui/react";

function Footer() {
  const [active, setActive] = useState(false);
  return (
    <Box
      position="relative"
      w="100%"
      h="4em"
      onClick={(e) => setActive(!active)}
    >
      <Heading fontSize="22px" opacity={active ? 1 : 0} transition="0.3s">
        Вау ты нашла пасхалку с меня картошка Фри
      </Heading>
      <Box
        className="headerWave"
        position="absolute"
        top="0"
        left="0"
        h="4em"
        rotate="180deg"
        opacity={active ? 0 : 1}
        transition="0.3s"
      />
    </Box>
  );
}
export { Footer };
