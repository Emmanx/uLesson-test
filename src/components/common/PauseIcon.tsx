import React from 'react';
import { Box } from '@chakra-ui/react';
import { BsPause } from 'react-icons/bs';

export const PauseIcon = ({ color }: { color: string }): React.ReactElement => {
  return (
    <Box pos="relative">
      <svg
        width="63"
        height="63"
        viewBox="0 0 63 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.95122 51.6286L7.94982 51.6273C1.26221 45.556 0.211906 34.0847 3.62171 23.4686C7.0238 12.8765 14.6857 3.72226 24.6886 2.14198C34.3331 0.646466 44.9769 7.16704 52.3192 16.5271C55.9656 21.1755 58.7276 26.4451 60.0947 31.6065C61.463 36.7727 61.4172 41.7579 59.5586 45.9147C55.7756 54.3752 47.1395 59.6509 37.2362 60.8765C27.3434 62.1008 16.3222 59.2561 7.95122 51.6286Z"
          fill="white"
          stroke="#FCFBF9"
          strokeWidth="2.07217"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <BsPause
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color,
          fontSize: '3rem',
        }}
      />
    </Box>
  );
};
