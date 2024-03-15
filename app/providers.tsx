'use client'

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "@/themes/theme";

const customTheme = extendTheme(theme);

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}
