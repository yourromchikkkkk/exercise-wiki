import { Box } from '@mui/material';
import BodyPartCard from './BodyPartCard';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

interface IHorizontalScrollBar {
  data?: string[];
}

const HorizontalScrollBar: React.FC<IHorizontalScrollBar> = ({ data }) => {
  const selectedBodyPart = useSelector(
    (state: RootState) => state.wiki.selectedBodyPart
  );

  if (!data) return null;
  return (
    <Box
      sx={{
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        px: '20px',
        overflowX: 'scroll',
        height: '340px',
        justifyItems: 'center',
        gap: '40px',
      }}
    >
      {data.map(value => (
        <Box key={value}>
          <BodyPartCard title={value} selectedBodyPart={selectedBodyPart} />
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollBar;
