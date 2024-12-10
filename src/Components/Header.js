import React, { useEffect, Component } from "react";
import { Box, Heading } from "@chakra-ui/react";
function Header(props) {
  return (
    <Box as="header" className="header" position="relative" w="100%" h="20em">
      <Box display="flex" justifyContent="center" alignItems="center" h="100%">
        <Heading
          as="h1"
          fontWeight="500"
          pb="4px"
          color="white"
        >
          Ես <Box className="fa-solid fa-heart" color="#fff" /> Քեզ
        </Heading>
      </Box>
      <Box className="headerWave" position="absolute" bottom="-16em" left="0" />
    </Box>
  );
}

export { Header };
