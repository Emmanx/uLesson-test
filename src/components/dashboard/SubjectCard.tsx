import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { useHistory } from 'react-router-dom';
import math from '../../assets/icons/math.svg';
import rocket from '../../assets/icons/rocket.svg';
import chemistry from '../../assets/icons/chemistry.svg';
import biology from '../../assets/icons/biology.svg';
import english from '../../assets/icons/english.svg';

import greenCircle from '../../assets/patterns/green-circle.svg';
import orangeCircle from '../../assets/patterns/orange-circle.svg';
import purpleCircle from '../../assets/patterns/purple-circle.svg';
import orangeCircle2 from '../../assets/patterns/orange-circle-2.svg';
import orangeCircle3 from '../../assets/patterns/orange-circle-3.svg';
import { ICardStyles, ISubject } from '../../types';

const cardStyles: ICardStyles = {
  Mathematics: {
    icon: math,
    color: '#EA7052',
    pattern: greenCircle,
    patternPosition: { top: '0', right: '0' },
  },
  Physics: {
    icon: rocket,
    color: '#7B7FDA',
    pattern: orangeCircle,
    patternPosition: { bottom: '0', right: '4.5rem' },
  },
  Chemistry: {
    icon: chemistry,
    color: '#F9AD6D',
    pattern: purpleCircle,
    patternPosition: { bottom: '0', right: '3.8rem' },
  },
  Biology: {
    icon: biology,
    color: '#68BC98',
    pattern: orangeCircle2,
    patternPosition: { top: '2.5rem', right: '0' },
  },
  English: {
    icon: english,
    color: '#506AAC',
    pattern: orangeCircle3,
    patternPosition: { bottom: '0', left: '0' },
  },
};

export const SubjectCard = ({
  subject,
}: {
  subject: ISubject;
}): React.ReactElement => {
  const history = useHistory();

  const handleClick = (id: string) => {
    history.push(`/subject/${id}/chapters`);
  };

  return (
    <Box
      h="10.2rem"
      w="100%"
      bg={cardStyles[subject.name].color}
      borderRadius="16.575px"
      pos="relative"
      overflow="hidden"
      cursor="pointer"
      onClick={() => handleClick(String(subject.id))}
    >
      <Image
        src={cardStyles[subject.name].icon}
        pos="absolute"
        left="2.4rem"
        mt="1.845rem"
      />
      <Text
        textTransform="uppercase"
        fontSize="1.53rem"
        letterSpacing="2.55px"
        color="#fff"
        pos="absolute"
        bottom="2.2rem"
        right="2rem"
        textAlign="right"
        zIndex="2"
      >
        {subject.name}
      </Text>
      <Image
        pos="absolute"
        src={cardStyles[subject.name].pattern}
        {...cardStyles[subject.name].patternPosition}
      />
    </Box>
  );
};
