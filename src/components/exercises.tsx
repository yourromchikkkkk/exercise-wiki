import { useEffect, useRef, useState } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import fetchData, { exerciseOptions } from '../utils/fetch-data';
import { useDispatch } from 'react-redux';
import { selectActiveBodyPart } from '../redux/additional-selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { resetExercises, wikiSelectors } from '../redux/slice';
import fetchUrls from '../utils/fetch-urls';
import { ExerciseCard, Loader } from '../common';
import { Exercise } from '../types';

const Exercises = () => {
  const dispatch = useDispatch();
  const selectedBodyPart = useSelector(selectActiveBodyPart);
  const exercisesList = useSelector(wikiSelectors.selectAll);

  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = useRef(6);

  useEffect(() => {
    const fetchExercises = async () => {
      let exerciseList: Exercise[];
      setIsLoading(true);
      
      if (selectedBodyPart !== 'all') {
        exerciseList = await fetchData(
          fetchUrls.exercisesListByBodyPart(selectedBodyPart),
          exerciseOptions
        );
      } else {
        exerciseList = await fetchData(
          fetchUrls.exersicesList,
          exerciseOptions
        );
      }

      setIsLoading(false);
      dispatch(resetExercises(exerciseList));
    };

    fetchExercises();
  }, [selectedBodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage.current;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage.current;
  const currentExercises = exercisesList.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length || isLoading) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: '107px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercisesList.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercisesList.length / exercisesPerPage.current)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
