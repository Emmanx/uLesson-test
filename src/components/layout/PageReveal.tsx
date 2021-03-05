import React, { useEffect, useState, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Wrapper = styled(Flex)`
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 300px;
    height: 24px;
    border-left: 8px solid #fff;
    border-right: 8px solid #fff;
    overflow: hidden;
  }

  .loader .ball {
    height: 8px;
    width: 0;
    background: white;
    position: relative;
    margin: 0;
  }

  .loader .ball:nth-of-type(1) {
    -webkit-animation: ball 2s ease-in-out infinite;
    animation: ball 2s ease-in-out infinite;
  }

  .loader .ball:nth-of-type(2) {
    -webkit-animation: ball 2s ease-in-out 0.1s infinite;
    animation: ball 2s ease-in-out 0.1s infinite;
  }

  .loader .ball:nth-of-type(3) {
    -webkit-animation: ball 2s ease-in-out 0.2s infinite;
    animation: ball 2s ease-in-out 0.2s infinite;
  }

  @-webkit-keyframes ball {
    0% {
      left: 0;
      width: 0px;
    }
    25% {
      left: 0;
      width: 300px;
    }
    50% {
      left: 300px;
      width: 0px;
    }
    75% {
      left: 0;
      width: 300px;
    }
    100% {
      left: 0;
      width: 0px;
    }
  }

  @keyframes ball {
    0% {
      left: 0;
      width: 0px;
    }
    25% {
      left: 0;
      width: 300px;
    }
    50% {
      left: 300px;
      width: 0px;
    }
    75% {
      left: 0;
      width: 300px;
    }
    100% {
      left: 0;
      width: 0px;
    }
  }
`;

const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef<any>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const PageReveal = (): React.ReactElement => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useInterval(() => {
    if (count <= 55) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setDone(true);
    }
  }, 10);

  return (
    <Wrapper
      justify="center"
      align="center"
      transition="width 1.5s"
      w={done ? '0' : '100vw'}
      h="100vh"
      bgColor="#EA7052"
      position="fixed"
      top="0"
      zIndex="100"
    >
      <Box className="loader" opacity={done ? 0 : 1} transition="all .3s">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </Box>
    </Wrapper>
  );
};
