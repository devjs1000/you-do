import { Box, Button, Center, Flex, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { taskStruct } from "../../helpers/struct";
import { TaskType } from "../Task";
import { useFormik } from "formik";

const AddTodo = ({ add }: Props) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      start: "",
      end: "",
      tags: [],
    },
    onSubmit: (values) => {
      add(
        taskStruct(
          values.title,
          values.description,
          values.start,
          values.end,
          values.tags
        )
      );
    },
    enableReinitialize: true,
  });

  return (
    <Flex bg={"gray.400"} my={2} flexDir={"column"}>
      <Center>
        <Input
          isRequired={true}
          value={formik.values.title}
          onChange={formik.handleChange("title")}
          rounded={"0"}
          bg={"white"}
          placeholder="Title"
        />
        <Input
          isRequired={true}
          value={formik.values.start}
          onChange={formik.handleChange("start")}
          rounded={"0"}
          bg={"white"}
          type={"date"}
          placeholder="Start"
        />
        <Input
          isRequired={true}
          value={formik.values.end}
          onChange={formik.handleChange("end")}
          rounded={"0"}
          bg={"white"}
          type={"date"}
          placeholder="End"
        />
        <Button
          onClick={formik.submitForm}
          rounded={"0"}
          w={"300px"}
          colorScheme={"green"}
        >
          Create Task
        </Button>
      </Center>
      <Box>
        <Textarea
          isRequired={true}
          onChange={formik.handleChange("description")}
          rounded={"0"}
          bg={"white"}
          placeholder="Description"
        />
      </Box>
    </Flex>
  );
};

interface Props {
  add: (task: TaskType) => void;
}

export default AddTodo;
