import { Box, Stack, Typography } from '@mui/material';
import { HorizontalScrollBar } from '../common';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import SearchBar from '../common/search-bar';

const SearchExercise = () => {
  const bodyPartsList = useSelector((state: RootState) => state.wiki.bodyParts);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br />
        Should Know
      </Typography>
      <SearchBar />
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyPartsList} />
      </Box>
    </Stack>
  );
};

export default SearchExercise;
