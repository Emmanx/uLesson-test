import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/icons/avatar.svg';

export const Header = (): React.ReactElement => {
  return (
    <Flex w="100%" h="7.5rem" bg="#313848" position="fixed" top="0" zIndex="5">
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="space-between"
        maxW="1300px"
        mx="auto"
        px="1rem"
      >
        <Link to="/">
          <Image alt="logo" src={logo} />
        </Link>
        <HStack spacing="1.2rem">
          <Image alt="avatar" src={avatar} />
          <Text color="#fff" opacity="0.4" fontSize="1.6rem">
            Hassan
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};
