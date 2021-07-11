import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Button,
  Center,
  IconButton,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'

const Test: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Center h="100vh" maxW="1200px" mx="auto">
      <Stack isInline>
        <IconButton
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          variant="outline"
          colorScheme="cyan"
          aria-label="Color mode switcher"
          onClick={toggleColorMode}
        >
          Switch Mode
        </IconButton>
        <Button variant="solid" colorScheme="green">
          Solid
        </Button>
        <Button variant="primary">Primary Color</Button>
        <Button variant="secondary">Secondary Color</Button>
        <Button variant="secondaryOutline">Secondary Outline</Button>
      </Stack>
    </Center>
  )
}

export default Test
