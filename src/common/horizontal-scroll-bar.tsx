import { useEffect } from 'react';
import { Box } from '@mui/material';
import BodyPartCard from './body-part-card';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import fetchData from '../utils/fetch-data';
import { exerciseOptions } from '../utils/fetch-data';
import { useDispatch } from 'react-redux';
import { addBodyParts } from '../redux/slice';
import { selectBodyPartsList } from '../redux/additional-selectors';
import fetchUrls from '../utils/fetch-urls';

const HorizontalScrollBar = () => {
  const selectedBodyPart = useSelector(
    (state: RootState) => state.wiki.selectedBodyPart
  );
  const bodyPartList = useSelector(selectBodyPartsList);
  const dispatch = useDispatch();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const fetchBodyPartData = async () => {
      const bodyPartsList: string[] = await fetchData(
        fetchUrls.bodyPartsList,
        exerciseOptions
      );

      dispatch(addBodyParts(['all', ...bodyPartsList]));
    };

    fetchBodyPartData();
  }, []);

  if (!bodyPartList) return null;

  return (
    <Box
      sx={{
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        px: '20px',
        overflowX: 'auto',
        height: '340px',
        justifyItems: 'center',
        gap: '40px',
      }}
    >
      {bodyPartList.map(value => (
        <Box key={value}>
          <BodyPartCard title={value} selectedBodyPart={selectedBodyPart} />
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollBar;
