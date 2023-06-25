// TODO: answer here
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";

const NotFound = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            {/* TODO: answer here */}
            <h1>404 | Not Found</h1>
            <Button data-testid="back" onClick={handleBack}>
              Back
            </Button>
        </>
    );
};

export default NotFound;
