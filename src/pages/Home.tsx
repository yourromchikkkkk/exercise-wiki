import { useEffect } from 'react';
import { Box } from '@mui/material';
import { HeroBanner, SearchExercise, Exercises } from '../components';
import fetchData from '../utils/fetchData';
import { exerciseOptions } from '../utils/fetchData';
import { useDispatch } from 'react-redux';
import { addBodyParts } from '../redux/slice';

const Home = () => {
  const dispatch = useDispatch();
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsList: string[] = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      dispatch(addBodyParts(['all', ...bodyPartsList]));
    };

    fetchExerciseData();
  }, []);

  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  );
};

export default Home;
