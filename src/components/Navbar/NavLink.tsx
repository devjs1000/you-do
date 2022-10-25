import { ReactNode } from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";

export const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    color={useColorModeValue("gray.600", "gray.200")}
    borderColor={'transparent'}
    borderWidth={2}
    transition={'all 0.2s'}
    _hover={{
      textDecoration: "none",
      color: useColorModeValue("gray.800", "white"),
      borderBottomColor: useColorModeValue("green.400", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
