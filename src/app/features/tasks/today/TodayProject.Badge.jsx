import { Box, Text, HStack, Badge } from '@chakra-ui/react';
import { getColor } from '../../../helpers/color_matcher';
import { FiHome } from 'react-icons/fi';

const TodayProjectBadge = ({ project }) => {
  let badge = project.isInboxProject ? (
    <FiHome />
  ) : (
    <Badge
      borderRadius={'full'}
      w={3}
      h={3}
      textAlign="center"
      display="inline-block"
      bg={getColor(project.color)}
    />
  );
  let content = (
    <Box>
      <HStack py={1}>
        <Text pl={2} textSize={'sm'}>
          {project.name}
        </Text>
        {badge}
      </HStack>
    </Box>
  );

  return content;
};

export default TodayProjectBadge;
