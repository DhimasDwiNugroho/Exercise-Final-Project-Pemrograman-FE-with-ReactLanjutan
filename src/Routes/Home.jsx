import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading } from '@chakra-ui/react';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/student');
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh" backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    backgroundSize="cover"
    backgroundPosition="center"
    >
      <Box textAlign="center" color='white'>
        <Heading as="h1" size="2xl" mb={4}>
          Studi Independen
        </Heading>
        <Heading as="h1" size="2xl" mb={4}>
          Kampus Merdeka
        </Heading>
        <Heading as="h2" size="xl" mb={8}>
          by RUANGGURU
        </Heading>
      </Box>
      <Box className="line-vertical" width="2px" height="50%" bg="white" mx={8} />
      <Box textAlign="center" color='white'>
        <Heading as="h1" size="2xl" mb={8}>
          Student Portal
        </Heading>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={handleButtonClick}
          data-testid="student-btn"
        >
          ALL STUDENT
        </Button>
      </Box>
    </Box>
  );
};

export default Home;