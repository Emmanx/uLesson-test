import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Box, Button, HStack, Image, Input, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

import { PlayIcon, PauseIcon } from '../common';
import rewind from '../../assets/icons/rewind.svg';
import forward from '../../assets/icons/forward.svg';

const Wrapper = styled(Box)`
  video {
    width: 100%;
    height: 100%;
  }
`;

interface IPlayerProps {
  url: string;
  poster: string;
}

export const Player = ({ url, poster }: IPlayerProps): React.ReactElement => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const [duration, setDuration] = useState({
    played: 0,
    loaded: 0,
  });

  const playerRef = useRef<any>(null);

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleProgress = (e: any) => {
    if (!seeking) {
      setDuration({
        loaded: e.loadedSeconds / 60,
        played: e.playedSeconds / 60,
      });
      setPlayed(e.played);
    }
  };

  const seek = ({ target }: any) => {
    setPlayed(target.value / 100);
  };

  const handleSeekStart = () => {
    setSeeking(true);
  };

  const handleSeekRelease = ({ target }: any) => {
    setSeeking(false);
    playerRef.current.seekTo(target.value / 100, 'fraction');
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  return (
    <Box
      w="100%"
      mt="4rem"
      pos="relative"
      borderRadius="1.5rem"
      overflow="hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Wrapper w="100%" pos="relative">
        <ReactPlayer
          ref={playerRef}
          playing={playing}
          onProgress={handleProgress}
          url={url}
          width="100%"
          height="auto"
          config={{
            file: {
              attributes: {
                poster,
              },
            },
          }}
        />

        {!playing && (
          <Box
            w="100%"
            h="100%"
            bg="#EA705250"
            pos="absolute"
            top="0"
            left="0"
            zIndex="1"
          />
        )}

        <Box
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize="20rem"
          cursor="pointer"
          zIndex="2"
        >
          {showControls && (
            <HStack spacing="5rem">
              <Image alt="" src={rewind} onClick={handleRewind} />
              <Button
                background="transparent"
                _hover={{ background: 'transparent' }}
                _active={{ background: 'transparent' }}
                onClick={() => setPlaying(!playing)}
              >
                {playing ? (
                  <PauseIcon color="#EA7052" />
                ) : (
                  <PlayIcon color="#EA7052" />
                )}
              </Button>
              <Image alt="" src={forward} onClick={handleForward} />
            </HStack>
          )}
        </Box>
        <Box px="8rem" w="100%" pos="absolute" bottom="6rem" zIndex="2">
          <HStack spacing="6rem">
            <Text color="#fff">
              {duration.played.toFixed(2).replace('.', ':')}
            </Text>
            <Input
              px="0"
              type="range"
              min={0}
              max={100}
              value={played * 100}
              onChange={seek}
              onMouseDown={handleSeekStart}
              onMouseUp={handleSeekRelease}
              borderRadius="0"
              w="100%"
              h=".5rem"
              border="none"
              outline="none"
              background="#fff"
              cursor="pointer"
              _focus={{
                outline: 'none',
                border: 'none',
              }}
            />
            <Text color="#fff">
              {duration.loaded.toFixed(2).replace('.', ':')}
            </Text>
          </HStack>
        </Box>
      </Wrapper>
    </Box>
  );
};
