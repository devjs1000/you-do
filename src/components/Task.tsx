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

const Task = ({ id, title, description, start, end, tags }: TaskType) => {
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
      <Checkbox size={"lg"} colorScheme={"green"} />
      <Popover>
        <PopoverTrigger>
          <Heading cursor={"pointer"} fontSize={"xl"}>
            {title}
          </Heading>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <Heading fontSize={"xl"}>{title}</Heading>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <Box p={4}>
            <Text fontSize={"md"}>{description}</Text>
          </Box>
        </PopoverContent>
      </Popover>
      <IconButton
        colorScheme={"red"}
        icon={<FaTrash />}
        aria-label={"delete"}
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
}

export default Task;
