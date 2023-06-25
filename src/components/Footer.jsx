import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box className="footer" py={4} bg="gray.800" color="white" textAlign='center' height='100%'>
      <Text className="studentName" fontSize="md" fontWeight="bold">
        Dhimas Dwi Nugroho
      </Text>
      <Text className="studentId" fontSize="sm">
        FE4300715
      </Text>
    </Box>
  );
};

export default Footer;
