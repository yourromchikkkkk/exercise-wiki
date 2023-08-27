import { useState } from 'react';
import { Exercise } from '../types';
import { Box, TextField, Button } from '@mui/material';
import fetchData from '../utils/fetch-data';
import { exerciseOptions } from '../utils/fetch-data';
import { useDispatch } from 'react-redux';
import { resetExercises } from '../redux/slice';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const onSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    if (!searchQuery || searchQuery.length < 1) return;

    const data: Exercise[] = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises',
      exerciseOptions
    );

    const searchedExercises = data.filter(
      item =>
        item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        item.target.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        item.equipment
          .toLowerCase()
          .includes(searchQuery.toLocaleLowerCase()) ||
        item.bodyPart.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

    dispatch(resetExercises(searchedExercises));
    setSearchQuery('');
  };

  return (
    <Box position="relative" mb="72px">
      <TextField
        sx={{
          input: { fontWeight: 700, border: 'none', borderRadius: '4px' },
          width: { lg: '800px', xs: '350px' },
          backgroundColor: '#fff',
          borderRadius: '4px',
        }}
        value={searchQuery}
        onChange={onSearchQueryChange}
        placeholder="Search Exercises"
        type="text"
      />
      <Button
        className="search-btn"
        sx={{
          backgroundColor: '#ff2625',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px',
          position: 'absolute',
          right: '0px',
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
