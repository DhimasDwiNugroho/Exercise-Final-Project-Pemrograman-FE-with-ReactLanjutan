import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Link as CakraLink, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="gray.800" py={4} px={6} color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="md">
          <Link data-testid="home-page" to="/">
            Student Portal
          </Link>
        </Heading>
        <Flex>
          <Text mr={4}>
            <CakraLink as={Link} to="/student" data-testid="student-page">
              All Students
            </CakraLink>
          </Text>
          <Text>
            <CakraLink as={Link} to="/add" data-testid="add-page">
              Add Student
            </CakraLink>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
