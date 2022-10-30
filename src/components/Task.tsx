import {
  Flex,
  Heading,
  Text,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  Box,
  IconButton,
} from "@chakra-ui/react";

import { FaTrash } from "react-icons/fa";

const Task = ({ remove, complete, task }: Props) => {
  const handleRemove = () => {
    remove(task.id);
  };
  const handleComplete = (e: any) => {
    complete(task.id, e.target.checked);
  };
  return (
    <Flex
      rounded={"md"}
      bg={"white"}
      py={2}
      px={4}
      w={"full"}
      alignItems={"center"}
      gap={4}
      justifyContent={"space-between"}
      userSelect={"none"}
    >
      <Checkbox
        onChange={handleComplete}
        isChecked={task.completed}
        size={"lg"}
        colorScheme={"green"}
      />
      <Popover>
        <PopoverTrigger>
          <Heading cursor={"pointer"} fontSize={"xl"}>
            {task.title}
          </Heading>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <Heading fontSize={"xl"}>{task.title}</Heading>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <Box p={4}>
            <Text fontSize={"md"}>{task.description}</Text>
          </Box>
        </PopoverContent>
      </Popover>
      <IconButton
        colorScheme={"red"}
        icon={<FaTrash />}
        aria-label={"delete"}
        onClick={handleRemove}
      />
    </Flex>
  );
};

export interface TaskType {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  tags: string[];
  completed: boolean;
}

interface Props {
  remove: (id: string) => void;
  complete: (id: string, state: boolean) => void;
  task: TaskType;
}

export default Task;
