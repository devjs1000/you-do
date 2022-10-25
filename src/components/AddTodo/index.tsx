import { Box, Button, Center, Flex, Input, Textarea } from "@chakra-ui/react";
import React from "react";

const AddTodo = () => {
  return (
    <Flex bg={"gray.400"} my={2} flexDir={"column"}>
      <Center>
        <Input rounded={"0"} bg={"white"} placeholder="Title" />
        <Input rounded={"0"} bg={"white"} type={"date"} placeholder="Start" />
        <Input rounded={"0"} bg={"white"} type={"date"} placeholder="End" />
        <Button rounded={"0"} w={"300px"} colorScheme={"green"}>
          Create Task
        </Button>
      </Center>
      <Box>
        <Textarea rounded={"0"} bg={"white"} placeholder="Description" />
      </Box>
    </Flex>
  );
};

export default AddTodo;
